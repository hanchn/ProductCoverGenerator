<template>
  <div class="app">
    <header class="header">
      <div class="header-left">
        <h1 class="header-title">产品封面生成器</h1>
      </div>
      <div class="header-right">
        <select class="select" v-model="canvasZoom" @change="updateCanvasZoom">
          <option value="100">100%</option>
          <option value="75">75%</option>
          <option value="50">50%</option>
          <option value="25">25%</option>
        </select>
        <button class="button secondary" @click="importDesign">导入</button>
        <button class="button secondary" @click="saveDesign">保存</button>
        <button class="button" @click="exportDesign">导出</button>
      </div>
    </header>

    <main class="main">
      <aside class="sidebar">
        <div class="tool-panel">
          <div class="tool-panel-header">
            <h2 class="tool-panel-title">模板</h2>
          </div>
          <div class="tool-panel-content">
            <select class="select" v-model="selectedTemplate" @change="applyTemplate">
              <option v-for="template in templates" :key="template.id" :value="template.id">{{ template.name }}</option>
            </select>
          </div>
        </div>

        <div class="tool-panel">
          <div class="tool-panel-header">
            <h2 class="tool-panel-title">元素</h2>
          </div>
          <div class="tool-panel-content">
            <button class="button secondary" @click="addText">添加文本</button>
            <button class="button secondary" @click="addShape">添加形状</button>
            <input type="file" ref="imageUpload" accept="image/*" style="display: none;" @change="handleImageUpload">
            <button class="button secondary" @click="triggerImageUpload">添加图片</button>
          </div>
        </div>
      </aside>

      <div class="content">
        <div class="canvas-container">
          <canvas id="canvas"></canvas>
        </div>
      </div>

      <aside class="toolbar">
        <div class="properties-panel">
          <div class="property-group">
            <div class="property-group-header">
              <h3 class="property-group-title">通用属性</h3>
            </div>
            <div class="property-group-content">
              <div class="property">
                <label class="property-label">背景颜色</label>
                <input type="color" class="color-picker" v-model="canvasBackgroundColor" @input="updateCanvasBackgroundColor">
              </div>
              <div class="property">
                <label class="property-label">不透明度</label>
                <div class="property-input">
                  <input type="range" class="slider" v-model="opacity" min="0" max="100" @input="updateOpacity">
                  <span class="property-unit">%</span>
                </div>
              </div>
              <div class="property">
                <label class="property-label">旋转</label>
                <div class="property-input">
                  <input type="number" class="input" v-model="rotation" min="0" max="360" @input="updateRotation">
                  <span class="property-unit">°</span>
                </div>
              </div>
            </div>
          </div>

          <div class="property-group" v-if="selectedElementType === 'text'">
            <div class="property-group-header">
              <h3 class="property-group-title">文本属性</h3>
            </div>
            <div class="property-group-content">
              <div class="property">
                <label class="property-label">文本内容</label>
                <input type="text" class="input" v-model="textContent" @input="updateTextContent">
              </div>
              <div class="property">
                <label class="property-label">字体</label>
                <select class="select" v-model="fontFamily" @change="updateFontFamily">
                  <option value="Poppins">Poppins</option>
                  <option value="Arial">Arial</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="Times New Roman">Times New Roman</option>
                </select>
              </div>
              <div class="property">
                <label class="property-label">字号</label>
                <div class="property-input">
                  <input type="number" class="input" v-model="fontSize" min="8" max="200" @input="updateFontSize">
                  <span class="property-unit">px</span>
                </div>
              </div>
              <div class="property">
                <label class="property-label">颜色</label>
                <input type="color" class="color-picker" v-model="textColor" @input="updateTextColor">
              </div>
            </div>
          </div>

          <div class="property-group" v-if="selectedElementType === 'shape'">
            <div class="property-group-header">
              <h3 class="property-group-title">形状属性</h3>
            </div>
            <div class="property-group-content">
              <div class="property">
                <label class="property-label">填充颜色</label>
                <input type="color" class="color-picker" v-model="shapeFill" @input="updateShapeFill">
              </div>
              <div class="property">
                <label class="property-label">描边颜色</label>
                <input type="color" class="color-picker" v-model="shapeStroke" @input="updateShapeStroke">
              </div>
              <div class="property">
                <label class="property-label">描边宽度</label>
                <div class="property-input">
                  <input type="number" class="input" v-model="strokeWidth" min="0" max="20" @input="updateStrokeWidth">
                  <span class="property-unit">px</span>
                </div>
              </div>
            </div>
          </div>

          <div class="property-group" v-if="selectedElementType === 'image'">
            <div class="property-group-header">
              <h3 class="property-group-title">图片属性</h3>
            </div>
            <div class="property-group-content">
              <div class="property">
                <label class="property-label">亮度</label>
                <div class="property-input">
                  <input type="range" class="slider" v-model="brightness" min="0" max="200" @input="updateBrightness">
                  <span class="property-unit">%</span>
                </div>
              </div>
              <div class="property">
                <label class="property-label">对比度</label>
                <div class="property-input">
                  <input type="range" class="slider" v-model="contrast" min="0" max="200" @input="updateContrast">
                  <span class="property-unit">%</span>
                </div>
              </div>
              <div class="property">
                <label class="property-label">饱和度</label>
                <div class="property-input">
                  <input type="range" class="slider" v-model="saturation" min="0" max="200" @input="updateSaturation">
                  <span class="property-unit">%</span>
                </div>
              </div>
              <div class="property">
                <label class="property-label">模糊</label>
                <div class="property-input">
                  <input type="range" class="slider" v-model="blur" min="0" max="20" @input="updateBlur">
                  <span class="property-unit">px</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>

    <!-- 图片裁剪模态框 -->
    <image-cropper
      :visible="cropperVisible"
      :image-data-url="imageToCrop"
      @cropped="handleImageCropped"
      @closed="handleCropperClosed"
    ></image-cropper>

  </div>
</template>

<script>
import { fabric } from 'fabric';
import TemplateManager from '../managers/TemplateManager';
import ImageCropper from './ImageCropper.vue'; // 引入 ImageCropper 组件

export default {
  name: 'App',
  components: { // 注册 ImageCropper 组件
    ImageCropper
  },
  data() {
    return {
      canvas: null,
      templates: [],
      selectedTemplate: 'blank',
      selectedElementType: null,
      opacity: 100,
      rotation: 0,
      textContent: '',
      fontFamily: 'Poppins',
      fontSize: 24,
      textColor: '#333333',
      shapeFill: '#f0f0f0',
      shapeStroke: '#333333',
      strokeWidth: 2,
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blur: 0,
      canvasBackgroundColor: '#ffffff',
      canvasZoom: 100,
      cropperVisible: false, // 新增：控制裁剪模态框显示
      imageToCrop: null // 新增：存储待裁剪图片数据
    };
  },
  mounted() {
    this.initCanvas();
    this.loadTemplates();
    if (this.canvas) {
        this.canvasBackgroundColor = this.canvas.backgroundColor || '#ffffff';
    }
  },
  methods: {
    initCanvas() {
      this.canvas = new fabric.Canvas('canvas', {
        width: 800,
        height: 600,
        backgroundColor: this.canvasBackgroundColor
      });
      this.canvas.on('selection:created', (e) => this.updatePropertiesPanel(e.target));
      this.canvas.on('selection:updated', (e) => this.updatePropertiesPanel(e.target));
      this.canvas.on('selection:cleared', () => this.clearPropertiesPanel());
      this.canvas.on('object:modified', (e) => this.updatePropertiesPanel(e.target));
      this.canvas.on('mouse:dblclick', (e) => {
          const target = e.target;
          if (target && target.type === 'i-text') {
              target.enterEditing();
              target.selectAll();
          }
      });
      window.addEventListener('keydown', (e) => {
            if ((e.key === 'Delete' || e.key === 'Backspace') && this.canvas.getActiveObject()) {
                const activeObject = this.canvas.getActiveObject();
                if (activeObject) {
                    this.canvas.remove(activeObject);
                }
                this.canvas.requestRenderAll();
                this.clearPropertiesPanel();
            }
        });
    },
    loadTemplates() {
      this.templates = TemplateManager.getAllTemplates();
      if (this.templates.length > 0) {
        this.selectedTemplate = this.templates[0].id;
        this.applyTemplate();
      }
    },
    importDesign() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            this.canvas.loadFromJSON(event.target.result, () => {
              this.canvas.renderAll();
            });
          };
          reader.readAsText(file);
        }
      };
      input.click();
    },
    saveDesign() {
      const json = this.canvas.toJSON();
      const blob = new Blob([JSON.stringify(json)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'banner.json';
      link.click();
      URL.revokeObjectURL(url);
    },
    exportDesign() {
      const dataUrl = this.canvas.toDataURL();
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'banner.png';
      link.click();
    },
    applyTemplate() {
      const template = this.templates.find(t => t.id === this.selectedTemplate);
      if (template) {
        this.canvas.clear();
        this.canvas.setBackgroundColor(template.backgroundColor, () => {
          this.canvas.renderAll();
        });
        if (template.objects) {
          template.objects.forEach(element => {
            let fabricObject;
            switch (element.type) {
              case 'i-text':
                fabricObject = new fabric.IText(element.text, element);
                break;
              case 'rect':
                fabricObject = new fabric.Rect(element);
                break;
              case 'circle':
                fabricObject = new fabric.Circle(element);
                break;
              case 'triangle':
                 fabricObject = new fabric.Triangle(element);
                 break;
            }
            if (fabricObject) {
                this.canvas.add(fabricObject);
            }
          });
          this.canvas.renderAll();
        }
      }
    },
    addText() {
      const text = new fabric.IText('New Text', {
        left: 100,
        top: 100,
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        fill: this.textColor
      });
      this.canvas.add(text);
      this.canvas.setActiveObject(text);
      this.selectedElementType = 'text';
    },
    addShape() {
      const shape = new fabric.Rect({
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        fill: this.shapeFill,
        stroke: this.shapeStroke,
        strokeWidth: this.strokeWidth
      });
      this.canvas.add(shape);
      this.canvas.setActiveObject(shape);
      this.selectedElementType = 'shape';
    },
    triggerImageUpload() {
      this.$refs.imageUpload.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // 将图片数据存储到 data，并显示裁剪模态框
          this.imageToCrop = e.target.result;
          this.cropperVisible = true;
        };
        reader.readAsDataURL(file);
      }
    },
    handleImageCropped(croppedImageDataUrl) {
        if (croppedImageDataUrl) {
            fabric.Image.fromURL(croppedImageDataUrl, (img) => {
                // 将裁剪后的图片添加到主画布
                img.scaleToWidth(200);
                this.canvas.add(img);
                this.canvas.setActiveObject(img);
                this.selectedElementType = 'image';
            });
        }
    },
    handleCropperClosed() {
        this.cropperVisible = false;
        this.imageToCrop = null; // 清空待裁剪图片数据
        // 可选：重置文件输入框，以便再次上传同一张图片
        this.$refs.imageUpload.value = '';
    },
    updateOpacity() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set('opacity', this.opacity / 100);
        this.canvas.renderAll();
      }
    },
    updateRotation() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set('angle', this.rotation);
        this.canvas.renderAll();
      }
    },
    updateTextContent() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'i-text') {
        activeObject.set('text', this.textContent);
        this.canvas.renderAll();
      }
    },
    updateFontFamily() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'i-text') {
        activeObject.set('fontFamily', this.fontFamily);
        this.canvas.renderAll();
      }
    },
    updateFontSize() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'i-text') {
        activeObject.set('fontSize', this.fontSize);
        this.canvas.renderAll();
      }
    },
    updateTextColor() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'i-text') {
        activeObject.set('fill', this.textColor);
        this.canvas.renderAll();
      }
    },
    updateShapeFill() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'rect') {
        activeObject.set('fill', this.shapeFill);
        this.canvas.renderAll();
      }
    },
    updateShapeStroke() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'rect') {
        activeObject.set('stroke', this.shapeStroke);
        this.canvas.renderAll();
      }
    },
    updateStrokeWidth() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'rect') {
        activeObject.set('strokeWidth', this.strokeWidth);
        this.canvas.renderAll();
      }
    },
    updateBrightness() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'image') {
        activeObject.filters.push(new fabric.Image.filters.Brightness({ brightness: this.brightness / 100 }));
        activeObject.applyFilters();
        this.canvas.renderAll();
      }
    },
    updateContrast() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'image') {
        activeObject.filters.push(new fabric.Image.filters.Contrast({ contrast: this.contrast / 100 }));
        activeObject.applyFilters();
        this.canvas.renderAll();
      }
    },
    updateSaturation() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'image') {
        activeObject.filters.push(new fabric.Image.filters.Saturation({ saturation: this.saturation / 100 }));
        activeObject.applyFilters();
        this.canvas.renderAll();
      }
    },
    updateBlur() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'image') {
        activeObject.filters.push(new fabric.Image.filters.Blur({ blur: this.blur }));
        activeObject.applyFilters();
        this.canvas.renderAll();
      }
    },
    updateCanvasBackgroundColor(event) {
        const newColor = event.target.value;
        this.canvas.setBackgroundColor(newColor, this.canvas.renderAll.bind(this.canvas));
    },
    updatePropertiesPanel(object) {
      // Implementation of updatePropertiesPanel method
    },
    clearPropertiesPanel() {
      // Implementation of clearPropertiesPanel method
    },
    updateCanvasZoom() {
        const zoom = parseInt(this.canvasZoom, 10) / 100;
        if (this.canvas) {
            this.canvas.setZoom(zoom);
            // 可选：调整画布容器大小以适应新的缩放比例，但这通常由外部容器样式控制
            // this.canvas.setWidth(this.canvas.getWidth() * zoom);
            // this.canvas.setHeight(this.canvas.getHeight() * zoom);
        }
    }
  }
};
</script>

<style scoped>
/* 样式已通过 main.scss 全局引入，这里可以添加组件特定的样式 */
</style> 