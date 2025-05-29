<template>
  <div class="image-cropper-modal" v-if="visible">
    <div class="modal-content">
      <h3>裁剪图片</h3>
      <div class="cropper-area">
        <canvas ref="cropperCanvas"></canvas>
      </div>
      <div class="modal-actions">
        <button class="button secondary" @click="cancelCrop">取消</button>
        <button class="button" @click="confirmCrop">确认裁剪</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fabric } from 'fabric';

export default {
  name: 'ImageCropper',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    imageDataUrl: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      cropperCanvas: null,
      imageObject: null,
      cropRect: null
    };
  },
  watch: {
    visible(newValue) {
      if (newValue && this.imageDataUrl) {
        this.$nextTick(() => {
          this.initCropperCanvas();
        });

      } else if (!newValue && this.cropperCanvas) {
        this.cropperCanvas.dispose();
        this.cropperCanvas = null;
        this.imageObject = null;
        this.cropRect = null;
      }
    },
    imageDataUrl(newValue) {
      if(this.visible && newValue) {
        this.$nextTick(() => {
          this.initCropperCanvas();
        });
      }
    }
  },
  methods: {
    initCropperCanvas() {
      // 清理之前的canvas
      if (this.cropperCanvas) {
        this.cropperCanvas.dispose();
      }

      // 获取容器尺寸
      const cropperArea = this.$refs.cropperCanvas.parentElement;
      const maxWidth = cropperArea.clientWidth - 40; // 留出边距
      const maxHeight = cropperArea.clientHeight - 40;

      // 临时初始化canvas
      this.cropperCanvas = new fabric.Canvas(this.$refs.cropperCanvas, {
        width: maxWidth,
        height: maxHeight,
        selection: false // 禁用多选
      });

      // 加载图片
      fabric.Image.fromURL(this.imageDataUrl, (img) => {
        this.imageObject = img;

        console.log(`原始图片尺寸: ${img.width}x${img.height}`);
        console.log(`可用画布尺寸: ${maxWidth}x${maxHeight}`);

        // 计算缩放比例，保持图片比例
        const scaleX = maxWidth / img.width;
        const scaleY = maxHeight / img.height;
        const scale = Math.min(scaleX, scaleY, 1); // 不放大图片

        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        console.log(`缩放比例: ${scale}`);
        console.log(`缩放后尺寸: ${scaledWidth}x${scaledHeight}`);

        // 重新设置canvas尺寸为图片实际显示尺寸
        this.cropperCanvas.setDimensions({
          width: scaledWidth,
          height: scaledHeight
        });

        // 设置图片属性
        img.set({
          scaleX: scale,
          scaleY: scale,
          left: 0,
          top: 0,
          selectable: false, // 图片不可选择
          evented: false // 图片不响应事件
        });

        // 添加图片到canvas
        this.cropperCanvas.add(img);

        // 创建裁切矩形
        const cropWidth = Math.min(scaledWidth * 0.8, scaledWidth);
        const cropHeight = Math.min(scaledHeight * 0.8, scaledHeight);
        const cropLeft = (scaledWidth - cropWidth) / 2;
        const cropTop = (scaledHeight - cropHeight) / 2;

        this.cropRect = new fabric.Rect({
          left: cropLeft,
          top: cropTop,
          width: cropWidth,
          height: cropHeight,
          fill: 'rgba(255,255,255,0.1)',
          stroke: '#ffffff',
          strokeWidth: 2,
          strokeDashArray: [5, 5],
          cornerColor: '#ffffff',
          cornerSize: 12,
          cornerStyle: 'circle',
          borderColor: '#ffffff',
          borderDashArray: [5, 5],
          transparentCorners: false,
          selectable: true,
          hasControls: true,
          hasBorders: true,
          lockRotation: true, // 禁止旋转
          minScaleLimit: 0.1 // 最小缩放限制
        });

        // 限制裁切区域不能超出图片边界
        this.cropRect.on('moving', (e) => {
          const obj = e.target;
          const left = Math.max(0, Math.min(obj.left, scaledWidth - obj.width * obj.scaleX));
          const top = Math.max(0, Math.min(obj.top, scaledHeight - obj.height * obj.scaleY));
          obj.set({ left, top });
        });

        this.cropRect.on('scaling', (e) => {
          const obj = e.target;
          const maxWidth = scaledWidth - obj.left;
          const maxHeight = scaledHeight - obj.top;
          
          if (obj.width * obj.scaleX > maxWidth) {
            obj.scaleX = maxWidth / obj.width;
          }
          if (obj.height * obj.scaleY > maxHeight) {
            obj.scaleY = maxHeight / obj.height;
          }
          
          // 确保不会缩放到负值
          obj.scaleX = Math.max(0.1, obj.scaleX);
          obj.scaleY = Math.max(0.1, obj.scaleY);
        });

        this.cropperCanvas.add(this.cropRect);
        this.cropperCanvas.setActiveObject(this.cropRect);
        this.cropperCanvas.renderAll();

        console.log('裁切器初始化完成');
      }, {
        crossOrigin: 'anonymous' // 处理跨域图片
      });
    },
    
    cancelCrop() {
      this.$emit('closed');
    },
    
    confirmCrop() {
      if (!this.imageObject || !this.cropRect) {
        console.error('图片或裁切区域未初始化');
        return;
      }

      const rect = this.cropRect;
      const image = this.imageObject;

      // 计算裁剪区域在原始图片上的坐标和尺寸
      const imageScale = image.scaleX;
      const cropLeft = rect.left / imageScale;
      const cropTop = rect.top / imageScale;
      const cropWidth = (rect.width * rect.scaleX) / imageScale;
      const cropHeight = (rect.height * rect.scaleY) / imageScale;

      console.log('裁剪参数:', { cropLeft, cropTop, cropWidth, cropHeight });

      // 创建临时canvas进行裁剪
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      
      tempCanvas.width = cropWidth;
      tempCanvas.height = cropHeight;

      // 创建临时图片对象
      const tempImg = new Image();
      tempImg.crossOrigin = 'anonymous';
      tempImg.onload = () => {
        // 在临时canvas上绘制裁剪后的图片
        tempCtx.drawImage(
          tempImg,
          cropLeft, cropTop, cropWidth, cropHeight,
          0, 0, cropWidth, cropHeight
        );

        // 转换为DataURL
        const croppedImageDataUrl = tempCanvas.toDataURL('image/png', 1.0);
        
        // 触发裁剪完成事件
        this.$emit('cropped', croppedImageDataUrl);
        this.$emit('closed');
      };
      
      tempImg.src = this.imageDataUrl;
    }
  }
};
</script>

<style scoped>
.image-cropper-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 90vh;
  max-width: 1200px;
  max-height: 800px;
}

.modal-content h3 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 18px;
}

.cropper-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.modal-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.button.secondary {
  background-color: #6c757d;
  color: white;
}

.button:not(.secondary) {
  background-color: #007bff;
  color: white;
}

.button:hover {
  opacity: 0.9;
}
</style>