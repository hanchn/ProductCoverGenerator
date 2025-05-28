import { TextEditor } from './editors/TextEditor.js';
import { ImageEditor } from './editors/ImageEditor.js';
import { ShapeEditor } from './editors/ShapeEditor.js';
import { Renderer } from './renderers/Renderer.js';
import { EventHandler } from './handlers/EventHandler.js';
import { ColorManager } from './utils/ColorManager.js';

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

        // 初始化各个管理器
        this.colorManager = new ColorManager();
        this.renderer = new Renderer(this.ctx, this);
        this.eventHandler = new EventHandler(this);
        this.textEditor = new TextEditor(this);
        this.imageEditor = new ImageEditor(this);
        this.shapeEditor = new ShapeEditor(this);

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

        // 默认加载第一个模板
        this.loadTemplate('banner1');
    }

    loadTemplate(templateName) {
        this.currentTemplate = JSON.parse(JSON.stringify(templates[templateName]));
        this.templateBackup = JSON.parse(JSON.stringify(templates[templateName]));
        this.canvas.width = this.currentTemplate.width;
        this.canvas.height = this.currentTemplate.height;
        this.render();
    }

    render() {
        this.renderer.render(this.currentTemplate);
    }

    exportImage() {
        this.canvas.width = this.currentTemplate.width;
        this.canvas.height = this.currentTemplate.height;
        
        this.render();
        
        const link = document.createElement('a');
        link.download = 'cover-image.png';
        link.href = this.canvas.toDataURL('image/png');
        link.click();
    }

    isPointInElement(x, y, element) {
        return x >= element.x && 
               x <= element.x + element.width && 
               y >= element.y && 
               y <= element.y + element.height;
    }
} 