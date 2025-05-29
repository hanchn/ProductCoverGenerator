export class TemplateManager {
    constructor(canvasRenderer) {
        this.canvasRenderer = canvasRenderer;
        this.templates = this.getDefaultTemplates();
        this.currentTemplate = null;
    }

    // 获取默认模板
    getDefaultTemplates() {
        return [
            // 1. 科技蓝渐变+大标题+按钮
            {
                id: 'tech-blue-gradient',
                name: '科技蓝渐变',
                width: 1200,
                height: 400,
                backgroundColor: '#0f2027',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)', selectable: false },
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: '#1c92d2', opacity: 0.2, selectable: false },
                    { type: 'i-text', text: '科技引领未来', left: 80, top: 90, fontSize: 60, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' },
                    { type: 'i-text', text: '创新驱动 · 智能升级', left: 80, top: 170, fontSize: 32, fontFamily: 'Poppins', fill: '#e0e0e0' },
                    { type: 'rect', left: 80, top: 250, width: 200, height: 56, rx: 28, fill: '#1c92d2', stroke: '#fff', strokeWidth: 2 },
                    { type: 'i-text', text: '立即体验', left: 120, top: 262, fontSize: 28, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' }
                ]
            },
            // 2. 橙色活动条幅+白色大标题+副标题
            {
                id: 'orange-sale',
                name: '橙色活动条幅',
                width: 1200,
                height: 400,
                backgroundColor: '#ff7e5f',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: 'linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%)', selectable: false },
                    { type: 'i-text', text: '限时特惠', left: 80, top: 100, fontSize: 64, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' },
                    { type: 'i-text', text: '全场商品低至5折', left: 80, top: 180, fontSize: 32, fontFamily: 'Poppins', fill: '#fff' },
                    { type: 'rect', left: 80, top: 260, width: 220, height: 56, rx: 28, fill: '#fff', stroke: '#ff7e5f', strokeWidth: 2 },
                    { type: 'i-text', text: '立即抢购', left: 120, top: 272, fontSize: 28, fontFamily: 'Poppins', fill: '#ff7e5f', fontWeight: 'bold' }
                ]
            },
            // 3. 深色背景+高亮主标题+分割线
            {
                id: 'dark-highlight',
                name: '深色高亮',
                width: 1200,
                height: 400,
                backgroundColor: '#232526',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: '#232526', selectable: false },
                    { type: 'i-text', text: '企业服务解决方案', left: 80, top: 120, fontSize: 56, fontFamily: 'Poppins', fill: '#00c6ff', fontWeight: 'bold' },
                    { type: 'rect', left: 80, top: 200, width: 320, height: 4, fill: '#00c6ff', selectable: false },
                    { type: 'i-text', text: '助力企业数字化转型', left: 80, top: 220, fontSize: 28, fontFamily: 'Poppins', fill: '#fff' }
                ]
            },
            // 4. 左图右文结构+品牌色块
            {
                id: 'left-image-block',
                name: '左图右文',
                width: 1200,
                height: 400,
                backgroundColor: '#f5f7fa',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: '#f5f7fa', selectable: false },
                    { type: 'rect', left: 0, top: 0, width: 400, height: 400, fill: '#36d1c4', selectable: false },
                    { type: 'i-text', text: '品牌升级', left: 480, top: 100, fontSize: 54, fontFamily: 'Poppins', fill: '#232526', fontWeight: 'bold' },
                    { type: 'i-text', text: '全新视觉体验', left: 480, top: 180, fontSize: 32, fontFamily: 'Poppins', fill: '#36d1c4' },
                    { type: 'rect', left: 480, top: 260, width: 180, height: 48, rx: 24, fill: '#36d1c4' },
                    { type: 'i-text', text: '了解更多', left: 520, top: 270, fontSize: 24, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' }
                ]
            },
            // 5. 绿色渐变+圆角矩形+主副标题
            {
                id: 'green-gradient',
                name: '绿色渐变',
                width: 1200,
                height: 400,
                backgroundColor: '#11998e',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)', selectable: false },
                    { type: 'rect', left: 80, top: 80, width: 1040, height: 240, rx: 32, fill: '#fff', opacity: 0.15 },
                    { type: 'i-text', text: '绿色环保', left: 120, top: 120, fontSize: 56, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' },
                    { type: 'i-text', text: '可持续发展解决方案', left: 120, top: 200, fontSize: 32, fontFamily: 'Poppins', fill: '#e0ffe0' }
                ]
            },
            // 6. 紫色斜切背景+白色标题+按钮
            {
                id: 'purple-diagonal',
                name: '紫色斜切',
                width: 1200,
                height: 400,
                backgroundColor: '#8e54e9',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: 'linear-gradient(120deg, #8e54e9 0%, #4776e6 100%)', selectable: false },
                    { type: 'triangle', left: 900, top: 0, width: 400, height: 400, fill: '#fff', opacity: 0.08, selectable: false },
                    { type: 'i-text', text: '创意设计', left: 120, top: 120, fontSize: 56, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' },
                    { type: 'i-text', text: '让灵感落地', left: 120, top: 200, fontSize: 32, fontFamily: 'Poppins', fill: '#e0e0ff' },
                    { type: 'rect', left: 120, top: 260, width: 180, height: 48, rx: 24, fill: '#fff' },
                    { type: 'i-text', text: '立即咨询', left: 160, top: 270, fontSize: 24, fontFamily: 'Poppins', fill: '#8e54e9', fontWeight: 'bold' }
                ]
            },
            // 7. 简约灰白+蓝色按钮+小字说明
            {
                id: 'simple-blue',
                name: '简约蓝白',
                width: 1200,
                height: 400,
                backgroundColor: '#f7fafd',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: '#f7fafd', selectable: false },
                    { type: 'i-text', text: '企业官网建设', left: 80, top: 120, fontSize: 54, fontFamily: 'Poppins', fill: '#232526', fontWeight: 'bold' },
                    { type: 'i-text', text: '高端定制 · 响应式设计', left: 80, top: 200, fontSize: 28, fontFamily: 'Poppins', fill: '#4776e6' },
                    { type: 'rect', left: 80, top: 260, width: 180, height: 48, rx: 24, fill: '#4776e6' },
                    { type: 'i-text', text: '获取方案', left: 120, top: 270, fontSize: 24, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' },
                    { type: 'i-text', text: '专业团队 · 售后无忧', left: 900, top: 350, fontSize: 18, fontFamily: 'Poppins', fill: '#b0b0b0' }
                ]
            },
            // 8. 红色警示条幅+大标题+副标题
            {
                id: 'red-alert',
                name: '红色警示',
                width: 1200,
                height: 400,
                backgroundColor: '#ff5858',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: 'linear-gradient(90deg, #ff5858 0%, #f09819 100%)', selectable: false },
                    { type: 'i-text', text: '重要通知', left: 80, top: 120, fontSize: 60, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' },
                    { type: 'i-text', text: '系统维护时间：今晚23:00-次日6:00', left: 80, top: 200, fontSize: 28, fontFamily: 'Poppins', fill: '#fff' }
                ]
            },
            // 9. 多彩圆形装饰+黑色主标题
            {
                id: 'colorful-circles',
                name: '多彩圆形',
                width: 1200,
                height: 400,
                backgroundColor: '#fff',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: '#fff', selectable: false },
                    { type: 'circle', left: 100, top: 80, radius: 60, fill: '#ff7e5f', opacity: 0.7 },
                    { type: 'circle', left: 300, top: 60, radius: 40, fill: '#feb47b', opacity: 0.7 },
                    { type: 'circle', left: 600, top: 300, radius: 80, fill: '#36d1c4', opacity: 0.5 },
                    { type: 'circle', left: 1000, top: 100, radius: 50, fill: '#4776e6', opacity: 0.6 },
                    { type: 'i-text', text: '多彩创意', left: 480, top: 160, fontSize: 56, fontFamily: 'Poppins', fill: '#232526', fontWeight: 'bold' }
                ]
            },
            // 10. 商务蓝灰+主副标题+分割线+按钮
            {
                id: 'business-blue',
                name: '商务蓝灰',
                width: 1200,
                height: 400,
                backgroundColor: '#e9eff6',
                objects: [
                    { type: 'rect', left: 0, top: 0, width: 1200, height: 400, fill: '#e9eff6', selectable: false },
                    { type: 'i-text', text: '企业级服务', left: 80, top: 100, fontSize: 54, fontFamily: 'Poppins', fill: '#2c5364', fontWeight: 'bold' },
                    { type: 'rect', left: 80, top: 180, width: 320, height: 4, fill: '#2c5364', selectable: false },
                    { type: 'i-text', text: '一站式数字化解决方案', left: 80, top: 200, fontSize: 28, fontFamily: 'Poppins', fill: '#4776e6' },
                    { type: 'rect', left: 80, top: 260, width: 180, height: 48, rx: 24, fill: '#4776e6' },
                    { type: 'i-text', text: '联系我们', left: 120, top: 270, fontSize: 24, fontFamily: 'Poppins', fill: '#fff', fontWeight: 'bold' }
                ]
            }
        ];
    }

    // 注册模板
    registerTemplate(template) {
        if (!template.id) {
            throw new Error('Template must have an id');
        }
        this.templates.push(template);
    }

    // 获取模板
    getTemplate(id) {
        return this.templates.find(t => t.id === id);
    }

    // 获取所有模板
    getAllTemplates() {
        return this.templates;
    }

    // 获取模板选项
    getTemplateOptions() {
        return this.templates.map(template => ({
            value: template.id,
            text: template.name
        }));
    }

    // 设置当前模板
    setCurrentTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (!template) {
            throw new Error(`Template not found: ${templateId}`);
        }
        this.currentTemplate = template;
        return template;
    }

    // 获取当前模板
    getCurrentTemplate() {
        return this.currentTemplate;
    }

    // 创建新模板
    createTemplate(config) {
        const template = {
            id: `template_${Date.now()}`,
            name: config.name || 'New Template',
            width: config.width || 1200,
            height: config.height || 630,
            elements: config.elements || [],
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.registerTemplate(template);
        return template;
    }

    // 更新模板
    updateTemplate(templateId, updates) {
        const template = this.getTemplate(templateId);
        if (!template) {
            throw new Error(`Template not found: ${templateId}`);
        }

        Object.assign(template, updates, {
            updatedAt: new Date()
        });

        return template;
    }

    // 删除模板
    deleteTemplate(templateId) {
        if (this.currentTemplate?.id === templateId) {
            this.currentTemplate = null;
        }
        return this.templates.splice(this.templates.findIndex(t => t.id === templateId), 1);
    }

    // 导出模板
    exportTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (!template) {
            throw new Error(`Template not found: ${templateId}`);
        }

        return JSON.stringify(template, null, 2);
    }

    // 导入模板
    importTemplate(templateJson) {
        try {
            const template = JSON.parse(templateJson);
            this.registerTemplate(template);
            return template;
        } catch (error) {
            throw new Error('Invalid template JSON');
        }
    }

    // 克隆模板
    cloneTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (!template) {
            throw new Error(`Template not found: ${templateId}`);
        }

        const clonedTemplate = {
            ...template,
            id: `template_${Date.now()}`,
            name: `${template.name} (Copy)`,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.registerTemplate(clonedTemplate);
        return clonedTemplate;
    }

    // 应用模板
    applyTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (!template) return;

        // 清空画布
        this.canvasRenderer.clear();

        // 设置画布尺寸
        this.canvasRenderer.setDimensions(template.width, template.height);

        // 设置背景色
        this.canvasRenderer.canvas.setBackgroundColor(template.backgroundColor, () => {
            // 遍历 objects 或 elements，添加到画布
            (template.objects || template.elements).forEach(obj => {
                if (obj.type === 'text') {
                    this.canvasRenderer.canvas.add(new fabric.IText(obj.text, obj));
                } else if (obj.type === 'rect') {
                    this.canvasRenderer.canvas.add(new fabric.Rect(obj));
                } else if (obj.type === 'circle') {
                    this.canvasRenderer.canvas.add(new fabric.Circle(obj));
                } else if (obj.type === 'triangle') {
                    this.canvasRenderer.canvas.add(new fabric.Triangle(obj));
                }
                // 你可以根据需要扩展更多类型
            });
            this.canvasRenderer.canvas.renderAll();
        });
    }

    // 添加元素
    async addElement(elementConfig) {
        switch (elementConfig.type) {
            case 'text':
                await this.addText(elementConfig);
                break;
            case 'shape':
                await this.addShape(elementConfig);
                break;
            case 'image':
                await this.addImage(elementConfig);
                break;
        }
    }

    // 添加文本
    async addText(config) {
        const text = new fabric.IText(config.text, {
            left: config.left,
            top: config.top,
            fontSize: config.fontSize,
            fontFamily: config.fontFamily,
            fill: config.fill
        });
        this.canvasRenderer.canvas.add(text);
        this.canvasRenderer.canvas.renderAll();
    }

    // 添加形状
    async addShape(config) {
        let shape;
        switch (config.shape) {
            case 'rectangle':
                shape = new fabric.Rect({
                    left: config.left,
                    top: config.top,
                    width: config.width,
                    height: config.height,
                    fill: config.fill,
                    stroke: config.stroke,
                    strokeWidth: config.strokeWidth
                });
                break;
            case 'circle':
                shape = new fabric.Circle({
                    left: config.left,
                    top: config.top,
                    radius: config.radius,
                    fill: config.fill,
                    stroke: config.stroke,
                    strokeWidth: config.strokeWidth
                });
                break;
            case 'triangle':
                shape = new fabric.Triangle({
                    left: config.left,
                    top: config.top,
                    width: config.width,
                    height: config.height,
                    fill: config.fill,
                    stroke: config.stroke,
                    strokeWidth: config.strokeWidth
                });
                break;
        }
        if (shape) {
            this.canvasRenderer.canvas.add(shape);
            this.canvasRenderer.canvas.renderAll();
        }
    }

    // 添加图片
    async addImage(config) {
        return new Promise((resolve, reject) => {
            fabric.Image.fromURL(config.src, (img) => {
                Object.assign(img, {
                    left: config.left,
                    top: config.top,
                    scaleX: config.scaleX || 1,
                    scaleY: config.scaleY || 1
                });
                this.canvasRenderer.canvas.add(img);
                this.canvasRenderer.canvas.renderAll();
                resolve(img);
            }, reject);
        });
    }

    // 保存为模板
    saveAsTemplate(name) {
        const template = {
            id: `template-${Date.now()}`,
            name: name,
            width: this.canvasRenderer.canvas.width,
            height: this.canvasRenderer.canvas.height,
            backgroundColor: this.canvasRenderer.canvas.backgroundColor,
            objects: this.canvasRenderer.canvas.getObjects().map(obj => obj.toObject())
        };

        this.templates.push(template);
        return template;
    }
} 