import { fabric } from 'fabric';
import { CanvasRenderer } from './renderer/CanvasRenderer';
import { ImageEditor } from './editor/ImageEditor';
import { TextEditor } from './editor/TextEditor';
import { ShapeEditor } from './editor/ShapeEditor';
import { TemplateManager } from './manager/TemplateManager';
import { ColorManager } from './manager/ColorManager';

export class App {
    constructor(canvasElement) {
        // 初始化渲染器
        this.canvasRenderer = new CanvasRenderer(canvasElement);
        
        // 初始化编辑器
        this.imageEditor = new ImageEditor(this.canvasRenderer);
        this.textEditor = new TextEditor(this.canvasRenderer);
        this.shapeEditor = new ShapeEditor(this.canvasRenderer);
        
        // 初始化管理器
        this.templateManager = new TemplateManager(this.canvasRenderer);
        this.colorManager = new ColorManager();
        
        // 统一调用编辑器
        this.editorManager = {
            createElement: (type, config) => {
                switch (type) {
                    case 'image':
                        this.imageEditor.createElement(config);
                        break;
                    case 'text':
                        this.textEditor.createElement(config);
                        break;
                    case 'shape':
                        this.shapeEditor.createElement(config);
                        break;
                }
            }
        };
        
        // 绑定事件处理器
        this.bindEvents();
        
        // 初始化模板选择器
        this.initTemplateSelector();

        // 初始化画布缩放控件
        this.initZoomControl();
    }

    // 绑定事件
    bindEvents() {
        // 模板选择
        const templateSelect = document.getElementById('template-select');
        templateSelect.addEventListener('change', (e) => {
            this.templateManager.applyTemplate(e.target.value);
        });

        // 添加文本
        const addTextButton = document.getElementById('add-text-button');
        addTextButton.addEventListener('click', () => {
            this.textEditor.createElement({
                text: 'New Text',
                left: 100,
                top: 100,
                fontSize: 24,
                fontFamily: 'Poppins',
                fill: '#333333'
            });
        });

        // 添加形状
        const addShapeButton = document.getElementById('add-shape-button');
        addShapeButton.addEventListener('click', () => {
            this.shapeEditor.createElement({
                shape: 'rectangle',
                left: 100,
                top: 100,
                width: 100,
                height: 100,
                fill: '#f0f0f0',
                stroke: '#333333',
                strokeWidth: 2
            });
        });

        // 添加图片
        const imageUpload = document.getElementById('image-upload');
        imageUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.imageEditor.createElement({
                        src: event.target.result,
                        left: 100,
                        top: 100
                    });
                };
                reader.readAsDataURL(file);
            }
        });

        // 导出图片
        const exportButton = document.getElementById('export-button');
        exportButton.addEventListener('click', () => {
            const dataUrl = this.canvasRenderer.canvas.toDataURL({
                format: 'png',
                quality: 1
            });
            const link = document.createElement('a');
            link.download = 'banner.png';
            link.href = dataUrl;
            link.click();
        });

        // 保存设计
        const saveButton = document.getElementById('save-button');
        saveButton.addEventListener('click', () => {
            const json = this.canvasRenderer.canvas.toJSON();
            const dataStr = JSON.stringify(json);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            const link = document.createElement('a');
            link.download = 'banner.json';
            link.href = dataUri;
            link.click();
        });

        // 导入设计
        const importButton = document.getElementById('import-button');
        importButton.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const json = JSON.parse(event.target.result);
                        this.canvasRenderer.canvas.loadFromJSON(json, () => {
                            this.canvasRenderer.canvas.renderAll();
                        });
                    };
                    reader.readAsText(file);
                }
            };
            input.click();
        });

        // 画布选择事件
        this.canvasRenderer.canvas.on('selection:created', (e) => {
            const selected = e.target;
            this.updatePropertiesPanel(selected);
        });

        this.canvasRenderer.canvas.on('selection:updated', (e) => {
            const selected = e.target;
            this.updatePropertiesPanel(selected);
        });

        this.canvasRenderer.canvas.on('selection:cleared', () => {
            this.clearPropertiesPanel();
        });

        // 画布双击事件，实现文字编辑
        this.canvasRenderer.canvas.on('mouse:dblclick', (e) => {
            const target = e.target;
            if (target && target.type === 'i-text') {
                target.enterEditing();
                target.selectAll();
            }
        });

        // 键盘事件，实现删除元素
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Delete' || e.key === 'Backspace') {
                const activeObject = this.canvasRenderer.canvas.getActiveObject();
                if (activeObject) {
                    this.canvasRenderer.canvas.remove(activeObject);
                    this.canvasRenderer.canvas.renderAll();
                }
            }
        });
    }

    // 初始化模板选择器
    initTemplateSelector() {
        const templateSelect = document.getElementById('template-select');
        // 清空原有选项
        templateSelect.innerHTML = '';
        // 获取所有模板
        const options = this.templateManager.getTemplateOptions();
        console.log('模板数量:', options.length, options);
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            templateSelect.appendChild(opt);
        });
    }

    // 初始化画布缩放控件
    initZoomControl() {
        // 创建缩放下拉框
        let zoomSelect = document.getElementById('canvas-zoom-select');
        if (!zoomSelect) {
            zoomSelect = document.createElement('select');
            zoomSelect.id = 'canvas-zoom-select';
            zoomSelect.style.marginLeft = '16px';
            [100, 75, 50, 25].forEach(val => {
                const opt = document.createElement('option');
                opt.value = val;
                opt.textContent = val + '%';
                zoomSelect.appendChild(opt);
            });
            // 插入到 header 右侧
            const headerRight = document.querySelector('.header-right');
            if (headerRight) headerRight.appendChild(zoomSelect);
        }
        // 监听缩放变化
        zoomSelect.addEventListener('change', (e) => {
            const zoom = parseInt(e.target.value, 10) / 100;
            this.canvasRenderer.setZoom(zoom);
        });
        // 默认 100%
        zoomSelect.value = 100;
    }

    // 更新属性面板
    updatePropertiesPanel(element) {
        if (!element) return;

        // 通用属性
        const opacityInput = document.getElementById('opacity');
        const rotationInput = document.getElementById('rotation');
        
        opacityInput.value = element.opacity * 100;
        rotationInput.value = element.angle;

        opacityInput.onchange = (e) => {
            element.set('opacity', e.target.value / 100);
            this.canvasRenderer.canvas.renderAll();
        };

        rotationInput.onchange = (e) => {
            element.set('angle', parseInt(e.target.value));
            this.canvasRenderer.canvas.renderAll();
        };

        // 根据元素类型更新特定属性
        switch (element.type) {
            case 'text':
                this.updateTextProperties(element);
                break;
            case 'rect':
            case 'circle':
            case 'triangle':
                this.updateShapeProperties(element);
                break;
            case 'image':
                this.updateImageProperties(element);
                break;
        }
    }

    // 更新文本属性
    updateTextProperties(element) {
        const textContent = document.getElementById('text-content');
        const fontFamily = document.getElementById('font-family');
        const fontSize = document.getElementById('font-size');
        const textColor = document.getElementById('text-color');

        textContent.value = element.text;
        fontFamily.value = element.fontFamily;
        fontSize.value = element.fontSize;
        textColor.value = this.rgbToHex(element.fill);

        textContent.onchange = (e) => {
            element.set('text', e.target.value);
            this.canvasRenderer.canvas.renderAll();
        };

        fontFamily.onchange = (e) => {
            element.set('fontFamily', e.target.value);
            this.canvasRenderer.canvas.renderAll();
        };

        fontSize.onchange = (e) => {
            element.set('fontSize', parseInt(e.target.value));
            this.canvasRenderer.canvas.renderAll();
        };

        textColor.onchange = (e) => {
            element.set('fill', e.target.value);
            this.canvasRenderer.canvas.renderAll();
        };
    }

    // 更新形状属性
    updateShapeProperties(element) {
        const shapeFill = document.getElementById('shape-fill');
        const shapeStroke = document.getElementById('shape-stroke');
        const strokeWidth = document.getElementById('stroke-width');

        shapeFill.value = this.rgbToHex(element.fill);
        shapeStroke.value = this.rgbToHex(element.stroke);
        strokeWidth.value = element.strokeWidth;

        shapeFill.onchange = (e) => {
            element.set('fill', e.target.value);
            this.canvasRenderer.canvas.renderAll();
        };

        shapeStroke.onchange = (e) => {
            element.set('stroke', e.target.value);
            this.canvasRenderer.canvas.renderAll();
        };

        strokeWidth.onchange = (e) => {
            element.set('strokeWidth', parseInt(e.target.value));
            this.canvasRenderer.canvas.renderAll();
        };
    }

    // 更新图片属性
    updateImageProperties(element) {
        const brightness = document.getElementById('brightness');
        const contrast = document.getElementById('contrast');
        const saturation = document.getElementById('saturation');
        const blur = document.getElementById('blur');

        // 获取当前滤镜值
        const filters = element.filters || [];
        const brightnessFilter = filters.find(f => f.type === 'brightness');
        const contrastFilter = filters.find(f => f.type === 'contrast');
        const saturationFilter = filters.find(f => f.type === 'saturation');
        const blurFilter = filters.find(f => f.type === 'blur');

        brightness.value = brightnessFilter ? brightnessFilter.brightness * 100 + 100 : 100;
        contrast.value = contrastFilter ? contrastFilter.contrast * 100 + 100 : 100;
        saturation.value = saturationFilter ? saturationFilter.saturation * 100 + 100 : 100;
        blur.value = blurFilter ? blurFilter.blur : 0;

        brightness.onchange = (e) => {
            const value = (e.target.value - 100) / 100;
            this.imageEditor.setBrightness(value);
        };

        contrast.onchange = (e) => {
            const value = (e.target.value - 100) / 100;
            this.imageEditor.setContrast(value);
        };

        saturation.onchange = (e) => {
            const value = (e.target.value - 100) / 100;
            this.imageEditor.setSaturation(value);
        };

        blur.onchange = (e) => {
            this.imageEditor.setBlur(parseFloat(e.target.value));
        };
    }

    // 清空属性面板
    clearPropertiesPanel() {
        const inputs = document.querySelectorAll('.properties-panel-input, .properties-panel-color-picker, .properties-panel-slider');
        inputs.forEach(input => {
            input.value = '';
            input.onchange = null;
        });
    }

    // RGB 转 HEX
    rgbToHex(rgb) {
        if (typeof rgb === 'string') {
            const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (match) {
                const r = parseInt(match[1]);
                const g = parseInt(match[2]);
                const b = parseInt(match[3]);
                return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            }
        }
        return rgb;
    }

    // 导出画布为图片
    exportToImage() {
        return this.canvasRenderer.canvas.toDataURL({
            format: 'png',
            quality: 1
        });
    }
} 