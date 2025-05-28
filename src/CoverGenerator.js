import { TextEditor } from './editors/TextEditor.js';
import { ImageEditor } from './editors/ImageEditor.js';
import { ShapeEditor } from './editors/ShapeEditor.js';
import { Renderer } from './renderers/Renderer.js';
import { EventHandler } from './handlers/EventHandler.js';
import { ColorManager } from './managers/ColorManager.js';
import { templates } from '../templates.js';

export class CoverGenerator {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.currentTemplate = null;
        this.selectedElement = null;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.editPanel = document.getElementById('editPanel');
        this.textEditSection = document.getElementById('textEditSection');
        this.imageEditSection = document.getElementById('imageEditSection');
        this.shapeEditSection = document.getElementById('shapeEditSection');
        this.selectedElements = new Set();
        this.isEditing = false;
        this.scale = 1;

        // 初始化各个管理器
        this.colorManager = new ColorManager();
        this.renderer = new Renderer(this.ctx, this);
        this.eventHandler = new EventHandler(this);
        this.textEditor = new TextEditor(this);
        this.imageEditor = new ImageEditor(this);
        this.shapeEditor = new ShapeEditor(this);

        // 设置初始画布尺寸
        this.canvas.width = 1200;
        this.canvas.height = 400;

        // 添加窗口大小变化监听
        window.addEventListener('resize', () => this.adjustCanvasSize());

        this.init();
    }

    init() {
        // 初始化事件监听
        this.eventHandler.initEventListeners();
        
        // 初始化编辑控件
        this.textEditor.initControls();
        this.imageEditor.initControls();
        this.shapeEditor.initControls();

        // 初始化模板选择
        document.querySelectorAll('.template-item').forEach(item => {
            item.addEventListener('click', () => {
                const templateName = item.dataset.template;
                this.loadTemplate(templateName);
                document.querySelectorAll('.template-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // 初始化导出按钮
        document.getElementById('exportBtn').addEventListener('click', () => this.exportImage());

        // 初始化编辑面板关闭按钮
        document.getElementById('closeEditPanel').addEventListener('click', () => {
            this.editPanel.classList.remove('active');
            this.selectedElement = null;
            this.selectedElements.clear();
        });

        // 调整画布大小
        this.adjustCanvasSize();

        // 默认加载第一个模板
        this.loadTemplate('banner1');
    }

    adjustCanvasSize() {
        if (!this.currentTemplate) return;

        const container = this.canvas.parentElement;
        const containerWidth = container.clientWidth - 40; // 减去padding
        const containerHeight = container.clientHeight - 40;

        // 计算缩放比例
        const scaleX = containerWidth / this.currentTemplate.width;
        const scaleY = containerHeight / this.currentTemplate.height;
        this.scale = Math.min(scaleX, scaleY, 1); // 不超过原始大小

        // 设置画布显示尺寸
        this.canvas.style.width = `${this.currentTemplate.width * this.scale}px`;
        this.canvas.style.height = `${this.currentTemplate.height * this.scale}px`;

        // 保持画布实际尺寸不变
        this.canvas.width = this.currentTemplate.width;
        this.canvas.height = this.currentTemplate.height;

        // 重新渲染
        this.render();
    }

    loadTemplate(templateName) {
        if (!templates[templateName]) {
            console.error(`Template ${templateName} not found`);
            return;
        }
        
        this.currentTemplate = JSON.parse(JSON.stringify(templates[templateName]));
        this.templateBackup = JSON.parse(JSON.stringify(templates[templateName]));
        
        // 调整画布大小
        this.adjustCanvasSize();
    }

    render() {
        if (!this.currentTemplate) return;
        this.renderer.render(this.currentTemplate);
    }

    exportImage() {
        // 导出时使用原始尺寸
        this.canvas.width = this.currentTemplate.width;
        this.canvas.height = this.currentTemplate.height;
        
        this.render();
        
        const link = document.createElement('a');
        link.download = 'cover-image.png';
        link.href = this.canvas.toDataURL('image/png');
        link.click();

        // 恢复显示尺寸
        this.adjustCanvasSize();
    }

    isPointInElement(x, y, element) {
        if (element.type === 'text') {
            // 对于文字元素，用 ctx.measureText 计算实际宽度
            this.ctx.font = `${element.fontWeight ? element.fontWeight + ' ' : ''}${element.fontSize}px ${element.fontFamily}`;
            const textWidth = this.ctx.measureText(element.text).width;
            return x >= element.x && 
                   x <= element.x + textWidth && 
                   y >= element.y && 
                   y <= element.y + element.fontSize;
        }
        return x >= element.x && 
               x <= element.x + element.width && 
               y >= element.y && 
               y <= element.y + element.height;
    }

    showEditPanel(element) {
        // 如果 element 为 undefined，直接返回
        if (!element) {
            console.log('未选中任何元素，不显示编辑面板');
            return;
        }

        // 隐藏所有编辑区并去除边框
        this.textEditSection.style.display = 'none';
        this.textEditSection.style.border = 'none';
        this.imageEditSection.style.display = 'none';
        this.imageEditSection.style.border = 'none';
        this.shapeEditSection.style.display = 'none';
        this.shapeEditSection.style.border = 'none';

        // 打印当前选中元素，方便调试
        console.log('当前选中元素:', element);

        if (element.type === 'text') {
            this.textEditSection.style.display = 'block';
            // 同步文本控件内容
            document.getElementById('textContent').value = element.text || '';
            document.getElementById('fontFamily').value = element.fontFamily || 'Roboto';
            document.getElementById('fontSize').value = element.fontSize || 24;
            document.getElementById('fontSizeValue').textContent = (element.fontSize || 24) + 'px';
            document.getElementById('fontColor').value = element.color || '#000000';
            document.getElementById('fontWeight').value = element.fontWeight || 'normal';
        } else if (element.type === 'image') {
            this.imageEditSection.style.display = 'block';
            // 同步图片控件内容
            document.getElementById('imageWidth').value = element.width || '';
            document.getElementById('imageHeight').value = element.height || '';
            document.getElementById('imageBorderRadius').value = parseInt(element.borderRadius) || 0;
            document.getElementById('borderRadiusValue').textContent = (parseInt(element.borderRadius) || 0) + 'px';
        } else if (element.type === 'shape') {
            this.shapeEditSection.style.display = 'block';
            // 可同步形状控件内容
        }

        this.editPanel.classList.add('active');
    }
} 