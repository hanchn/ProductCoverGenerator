<template>
  <div class="image-cropper-modal" v-if="visible">
    <div class="modal-content">
      <h3>裁剪图片</h3>
      <div class="cropper-area" ref="cropperArea">
        <canvas ref="cropperCanvas"></canvas>
      </div>
      <div class="zoom-controls">
        <button class="zoom-btn" @click="zoomIn">放大</button>
        <button class="zoom-btn" @click="zoomOut">缩小</button>
        <button class="zoom-btn" @click="fitToScreen">适应屏幕</button>
        <button class="zoom-btn" @click="actualSize">原始大小</button>
        <span class="zoom-info">缩放: {{Math.round(currentZoom * 100)}}%</span>
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
      cropRect: null,
      currentZoom: 1,
      originalImageWidth: 0,
      originalImageHeight: 0,
      canvasWidth: 0,
      canvasHeight: 0,
      isDragging: false,
      lastPanPoint: null
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
        this.currentZoom = 1;
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
      const cropperArea = this.$refs.cropperArea;
      const containerWidth = cropperArea.clientWidth - 40;
      const containerHeight = cropperArea.clientHeight - 40;
      
      this.canvasWidth = containerWidth;
      this.canvasHeight = containerHeight;

      // 初始化canvas
      this.cropperCanvas = new fabric.Canvas(this.$refs.cropperCanvas, {
        width: containerWidth,
        height: containerHeight,
        selection: false
      });

      // 添加鼠标滚轮缩放事件 - 以画布中心为缩放中心
      this.cropperCanvas.on('mouse:wheel', (opt) => {
        const delta = opt.e.deltaY;
        let zoom = this.cropperCanvas.getZoom();
        zoom *= 0.999 ** delta;
        
        // 设置缩放范围：0.1x 到 20x
        if (zoom > 20) zoom = 20;
        if (zoom < 0.1) zoom = 0.1;
        
        // 以画布中心为缩放中心，而不是鼠标位置
        const center = {
          x: this.canvasWidth / 2,
          y: this.canvasHeight / 2
        };
        
        this.cropperCanvas.zoomToPoint(center, zoom);
        this.currentZoom = zoom;
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });

      // 添加拖拽平移功能
      this.cropperCanvas.on('mouse:down', (opt) => {
        const evt = opt.e;
        if (evt.altKey === true || evt.ctrlKey === true || evt.button === 1) {
          this.isDragging = true;
          this.cropperCanvas.selection = false;
          this.lastPanPoint = { x: evt.clientX, y: evt.clientY };
          evt.preventDefault();
        }
      });

      this.cropperCanvas.on('mouse:move', (opt) => {
        if (this.isDragging) {
          const e = opt.e;
          const vpt = this.cropperCanvas.viewportTransform;
          vpt[4] += e.clientX - this.lastPanPoint.x;
          vpt[5] += e.clientY - this.lastPanPoint.y;
          this.cropperCanvas.requestRenderAll();
          this.lastPanPoint = { x: e.clientX, y: e.clientY };
        }
      });

      this.cropperCanvas.on('mouse:up', () => {
        this.isDragging = false;
        this.cropperCanvas.selection = true;
      });

      // 加载图片
      fabric.Image.fromURL(this.imageDataUrl, (img) => {
        this.imageObject = img;
        this.originalImageWidth = img.width;
        this.originalImageHeight = img.height;

        console.log(`原始图片尺寸: ${img.width}x${img.height}`);
        console.log(`容器尺寸: ${containerWidth}x${containerHeight}`);

        // 默认以原始大小显示图片
        const scale = 1;
        this.currentZoom = 1;

        // 设置图片属性 - 居中显示
        img.set({
          scaleX: scale,
          scaleY: scale,
          left: (containerWidth - img.width) / 2,
          top: (containerHeight - img.height) / 2,
          selectable: false,
          evented: false
        });

        // 添加图片到canvas
        this.cropperCanvas.add(img);

        // 创建裁切矩形
        const cropWidth = Math.min(img.width * 0.6, 300);
        const cropHeight = Math.min(img.height * 0.6, 300);
        const cropLeft = (containerWidth - cropWidth) / 2;
        const cropTop = (containerHeight - cropHeight) / 2;

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
          lockRotation: true
        });

        this.cropperCanvas.add(this.cropRect);
        this.cropperCanvas.setActiveObject(this.cropRect);
        this.cropperCanvas.renderAll();

        console.log('裁切器初始化完成 - 原始大小居中显示');
      }, {
        crossOrigin: 'anonymous'
      });
    },

    // 缩放控制方法 - 以画布中心为缩放中心
    zoomIn() {
      let zoom = this.cropperCanvas.getZoom();
      zoom = zoom * 1.2;
      if (zoom > 20) zoom = 20;
      
      const center = {
        x: this.canvasWidth / 2,
        y: this.canvasHeight / 2
      };
      
      this.cropperCanvas.zoomToPoint(center, zoom);
      this.currentZoom = zoom;
    },

    zoomOut() {
      let zoom = this.cropperCanvas.getZoom();
      zoom = zoom / 1.2;
      if (zoom < 0.1) zoom = 0.1;
      
      const center = {
        x: this.canvasWidth / 2,
        y: this.canvasHeight / 2
      };
      
      this.cropperCanvas.zoomToPoint(center, zoom);
      this.currentZoom = zoom;
    },

    // 适应屏幕大小 - 居中显示
    fitToScreen() {
      if (!this.imageObject) return;
      
      const scaleX = this.canvasWidth / this.originalImageWidth;
      const scaleY = this.canvasHeight / this.originalImageHeight;
      const scale = Math.min(scaleX, scaleY, 1);
      
      // 计算居中位置
      const scaledWidth = this.originalImageWidth * scale;
      const scaledHeight = this.originalImageHeight * scale;
      const centerX = (this.canvasWidth - scaledWidth) / 2;
      const centerY = (this.canvasHeight - scaledHeight) / 2;
      
      this.cropperCanvas.setZoom(scale);
      this.cropperCanvas.viewportTransform = [scale, 0, 0, scale, centerX, centerY];
      this.currentZoom = scale;
      this.cropperCanvas.renderAll();
    },

    // 显示原始大小 - 居中显示
    actualSize() {
      if (!this.imageObject) return;
      
      // 计算居中位置
      const centerX = (this.canvasWidth - this.originalImageWidth) / 2;
      const centerY = (this.canvasHeight - this.originalImageHeight) / 2;
      
      this.cropperCanvas.setZoom(1);
      this.cropperCanvas.viewportTransform = [1, 0, 0, 1, centerX, centerY];
      this.currentZoom = 1;
      this.cropperCanvas.renderAll();
    },
    
    cancelCrop() {
      this.$emit('closed');
    },
    
    confirmCrop() {
      if (!this.cropRect || !this.fabricImage) {
        console.error('裁剪区域或图片未初始化');
        return;
      }
    
      const rect = this.cropRect;
      const image = this.fabricImage;
      const canvas = this.cropperCanvas;
      const canvasZoom = canvas.getZoom();
      const vpt = canvas.viewportTransform;
      
      // 获取原始图片尺寸
      const originalWidth = image.width;
      const originalHeight = image.height;
      
      // 计算图片在画布上的实际位置（考虑缩放和平移）
      const imageLeft = (image.left - vpt[4]) / canvasZoom;
      const imageTop = (image.top - vpt[5]) / canvasZoom;
      const rectLeft = (rect.left - vpt[4]) / canvasZoom;
      const rectTop = (rect.top - vpt[5]) / canvasZoom;
      
      // 计算裁剪区域在原始图片上的坐标和尺寸
      const cropLeft = rectLeft - imageLeft;
      const cropTop = rectTop - imageTop;
      const cropWidth = (rect.width * rect.scaleX) / canvasZoom;
      const cropHeight = (rect.height * rect.scaleY) / canvasZoom;
    
      // 确保裁剪区域有效且在图片范围内
      const finalCropLeft = Math.max(0, Math.min(cropLeft, originalWidth));
      const finalCropTop = Math.max(0, Math.min(cropTop, originalHeight));
      const maxWidth = originalWidth - finalCropLeft;
      const maxHeight = originalHeight - finalCropTop;
      const finalCropWidth = Math.max(1, Math.min(cropWidth, maxWidth)); // 确保最小为1
      const finalCropHeight = Math.max(1, Math.min(cropHeight, maxHeight)); // 确保最小为1
    
      console.log('原始图片尺寸:', { originalWidth, originalHeight });
      console.log('裁剪参数（原始像素）:', { 
        finalCropLeft, 
        finalCropTop, 
        finalCropWidth, 
        finalCropHeight 
      });
    
      // 验证裁剪参数
      if (finalCropWidth <= 0 || finalCropHeight <= 0) {
        console.error('裁剪尺寸无效:', { finalCropWidth, finalCropHeight });
        alert('裁剪区域无效，请重新选择裁剪区域');
        return;
      }
    
      // 创建临时canvas
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      
      tempCanvas.width = Math.round(finalCropWidth);
      tempCanvas.height = Math.round(finalCropHeight);
    
      // 创建临时图片对象
      const tempImg = new Image();
      tempImg.crossOrigin = 'anonymous';
      tempImg.onload = () => {
        try {
          tempCtx.drawImage(
            tempImg,
            Math.round(finalCropLeft), 
            Math.round(finalCropTop), 
            Math.round(finalCropWidth), 
            Math.round(finalCropWidth), 
            0, 
            0, 
            Math.round(finalCropWidth), 
            Math.round(finalCropHeight)
          );
    
          const croppedImageDataUrl = tempCanvas.toDataURL('image/png', 1.0);
          
          console.log('裁剪完成，输出尺寸:', tempCanvas.width + 'x' + tempCanvas.height);
          
          // 验证生成的数据URL
          if (croppedImageDataUrl && croppedImageDataUrl !== 'data:,') {
            this.$emit('cropped', croppedImageDataUrl);
            this.$emit('closed');
          } else {
            console.error('生成的图片数据无效');
            alert('裁剪失败，请重试');
          }
        } catch (error) {
          console.error('裁剪过程中发生错误:', error);
          alert('裁剪失败，请重试');
        }
      };
      
      tempImg.onerror = () => {
        console.error('图片加载失败');
        alert('图片加载失败，请重试');
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
  overflow: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  position: relative;
}

.zoom-controls {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.zoom-btn {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-size: 12px;
}

.zoom-btn:hover {
  background-color: #e9ecef;
}

.zoom-info {
  font-size: 12px;
  color: #666;
  margin-left: 10px;
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