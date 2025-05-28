import { templates } from './templates.js';

class CoverGenerator {
    constructor() {
        // 获取画布和上下文
        this.canvas = document.getElementById('canvas');
        if (!this.canvas) {
            console.error('Canvas element not found');
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        
        // 获取编辑面板相关元素
        this.editPanel = document.getElementById('editPanel');
        this.textEditSection = document.getElementById('textEditSection');
        this.imageEditSection = document.getElementById('imageEditSection');
        this.shapeEditSection = document.getElementById('shapeEditSection');
        
        // 检查必要的 DOM 元素是否存在
        if (!this.editPanel || !this.textEditSection || !this.imageEditSection || !this.shapeEditSection) {
            console.error('Required edit panel elements not found');
            return;
        }
        
        // 初始化状态
        this.currentTemplate = null;
        this.selectedElement = null;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.colorPalette = null;
        this.templateBackup = null;
        this.isEditing = false;
        this.selectedElements = new Set();

        // 初始化应用
        this.init();
    }

    init() {
        try {
            // 初始化事件监听
            this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
            this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
            this.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
            this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));

            // 初始化编辑控件
            this.initTextEditControls();
            this.initImageEditControls();
            this.initShapeEditControls();

            // 初始化模板选择
            this.initTemplateSelect();

            // 初始化导出按钮
            const exportBtn = document.getElementById('exportBtn');
            if (exportBtn) {
                exportBtn.addEventListener('click', this.exportImage.bind(this));
            }

            // 初始化编辑面板关闭按钮
            const closeEditPanel = document.getElementById('closeEditPanel');
            if (closeEditPanel) {
                closeEditPanel.addEventListener('click', () => {
                    this.editPanel.classList.remove('active');
                    this.selectedElement = null;
                    this.selectedElements.clear();
                });
            }

            // 默认加载第一个模板
            const firstTemplate = Object.keys(templates)[0];
            if (firstTemplate) {
                this.loadTemplate(firstTemplate);
            } else {
                console.error('No templates found');
            }
        } catch (error) {
            console.error('Error initializing application:', error);
        }
    }

    initTextEditControls() {
        const textContent = document.getElementById('textContent');
        const fontFamily = document.getElementById('fontFamily');
        const fontSize = document.getElementById('fontSize');
        const fontSizeValue = document.getElementById('fontSizeValue');
        const fontColor = document.getElementById('fontColor');
        const fontWeight = document.getElementById('fontWeight');
        const shadowBlur = document.getElementById('shadowBlur');
        const shadowOffsetX = document.getElementById('shadowOffsetX');
        const shadowOffsetY = document.getElementById('shadowOffsetY');
        const shadowColor = document.getElementById('shadowColor');
        const backgroundColor = document.getElementById('backgroundColor');
        const backgroundOpacity = document.getElementById('backgroundOpacity');
        const opacityValue = document.getElementById('opacityValue');

        textContent.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.text = textContent.value;
                this.render();
            }
        });

        fontFamily.addEventListener('change', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.fontFamily = fontFamily.value;
                this.render();
            }
        });

        fontSize.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.fontSize = parseInt(fontSize.value);
                fontSizeValue.textContent = `${fontSize.value}px`;
                this.render();
            }
        });

        fontColor.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.color = fontColor.value;
                this.render();
            }
        });

        fontWeight.addEventListener('change', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.fontWeight = fontWeight.value;
                this.render();
            }
        });

        shadowBlur.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.textShadow = `${shadowBlur.value}px ${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowColor.value}`;
                this.render();
            }
        });

        shadowOffsetX.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.textShadow = `${shadowBlur.value}px ${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowColor.value}`;
                this.render();
            }
        });

        shadowOffsetY.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.textShadow = `${shadowBlur.value}px ${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowColor.value}`;
                this.render();
            }
        });

        shadowColor.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                this.selectedElement.textShadow = `${shadowBlur.value}px ${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowColor.value}`;
                this.render();
            }
        });

        backgroundColor.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                const opacity = backgroundOpacity.value / 100;
                const color = backgroundColor.value;
                const rgba = this.hexToRgba(color, opacity);
                this.selectedElement.backgroundColor = rgba;
                this.render();
            }
        });

        backgroundOpacity.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'text') {
                const opacity = backgroundOpacity.value / 100;
                const color = backgroundColor.value;
                const rgba = this.hexToRgba(color, opacity);
                this.selectedElement.backgroundColor = rgba;
                opacityValue.textContent = `${backgroundOpacity.value}%`;
                this.render();
            }
        });
    }

    initImageEditControls() {
        const imageUpload = document.getElementById('imageUpload');
        const imageWidth = document.getElementById('imageWidth');
        const imageHeight = document.getElementById('imageHeight');
        const maintainAspectRatio = document.getElementById('maintainAspectRatio');
        const imageBorderRadius = document.getElementById('imageBorderRadius');
        const borderRadiusValue = document.getElementById('borderRadiusValue');
        const imageShadowBlur = document.getElementById('imageShadowBlur');
        const imageShadowOffsetX = document.getElementById('imageShadowOffsetX');
        const imageShadowOffsetY = document.getElementById('imageShadowOffsetY');
        const imageShadowColor = document.getElementById('imageShadowColor');

        imageUpload.addEventListener('change', (event) => {
            if (this.selectedElement && this.selectedElement.type === 'image') {
                const file = event.target.files[0];
                if (file) {
                    this.handleImageUpload(file, this.selectedElement);
                }
            }
        });

        imageWidth.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'image') {
                if (maintainAspectRatio.checked && this.selectedElement.image) {
                    const ratio = this.selectedElement.image.height / this.selectedElement.image.width;
                    this.selectedElement.height = Math.round(parseInt(imageWidth.value) * ratio);
                    imageHeight.value = this.selectedElement.height;
                }
                this.selectedElement.width = parseInt(imageWidth.value);
                this.render();
            }
        });

        imageHeight.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'image') {
                if (maintainAspectRatio.checked && this.selectedElement.image) {
                    const ratio = this.selectedElement.image.width / this.selectedElement.image.height;
                    this.selectedElement.width = Math.round(parseInt(imageHeight.value) * ratio);
                    imageWidth.value = this.selectedElement.width;
                }
                this.selectedElement.height = parseInt(imageHeight.value);
                this.render();
            }
        });

        imageBorderRadius.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'image') {
                this.selectedElement.borderRadius = `${imageBorderRadius.value}px`;
                borderRadiusValue.textContent = `${imageBorderRadius.value}px`;
                this.render();
            }
        });

        imageShadowBlur.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'image') {
                this.selectedElement.shadow = `${imageShadowBlur.value}px ${imageShadowOffsetX.value}px ${imageShadowOffsetY.value}px ${imageShadowColor.value}`;
                this.render();
            }
        });

        imageShadowOffsetX.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'image') {
                this.selectedElement.shadow = `${imageShadowBlur.value}px ${imageShadowOffsetX.value}px ${imageShadowOffsetY.value}px ${imageShadowColor.value}`;
                this.render();
            }
        });

        imageShadowOffsetY.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'image') {
                this.selectedElement.shadow = `${imageShadowBlur.value}px ${imageShadowOffsetX.value}px ${imageShadowOffsetY.value}px ${imageShadowColor.value}`;
                this.render();
            }
        });

        imageShadowColor.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'image') {
                this.selectedElement.shadow = `${imageShadowBlur.value}px ${imageShadowOffsetX.value}px ${imageShadowOffsetY.value}px ${imageShadowColor.value}`;
                this.render();
            }
        });
    }

    initShapeEditControls() {
        const shapeType = document.getElementById('shapeType');
        const shapeColor = document.getElementById('shapeColor');
        const shapeOpacity = document.getElementById('shapeOpacity');
        const shapeOpacityValue = document.getElementById('shapeOpacityValue');
        const shapeWidth = document.getElementById('shapeWidth');
        const shapeHeight = document.getElementById('shapeHeight');

        shapeType.addEventListener('change', () => {
            if (this.selectedElement && this.selectedElement.type === 'shape') {
                this.selectedElement.shape = shapeType.value;
                this.render();
            }
        });

        shapeColor.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'shape') {
                const opacity = shapeOpacity.value / 100;
                const color = shapeColor.value;
                const rgba = this.hexToRgba(color, opacity);
                this.selectedElement.color = rgba;
                this.render();
            }
        });

        shapeOpacity.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'shape') {
                const opacity = shapeOpacity.value / 100;
                const color = shapeColor.value;
                const rgba = this.hexToRgba(color, opacity);
                this.selectedElement.color = rgba;
                shapeOpacityValue.textContent = `${shapeOpacity.value}%`;
                this.render();
            }
        });

        shapeWidth.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'shape') {
                this.selectedElement.width = parseInt(shapeWidth.value);
                this.render();
            }
        });

        shapeHeight.addEventListener('input', () => {
            if (this.selectedElement && this.selectedElement.type === 'shape') {
                this.selectedElement.height = parseInt(shapeHeight.value);
                this.render();
            }
        });
    }

    hexToRgba(hex, opacity) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            const r = parseInt(result[1], 16);
            const g = parseInt(result[2], 16);
            const b = parseInt(result[3], 16);
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
        return hex;
    }

    loadTemplate(templateName) {
        try {
            if (!templates[templateName]) {
                console.error(`Template ${templateName} not found`);
                return;
            }
            
            // 深拷贝模板
            this.currentTemplate = JSON.parse(JSON.stringify(templates[templateName]));
            this.templateBackup = JSON.parse(JSON.stringify(templates[templateName]));
            
            // 设置画布尺寸
            this.canvas.width = this.currentTemplate.width;
            this.canvas.height = this.currentTemplate.height;
            
            // 确保所有元素都有必要的属性
            this.currentTemplate.elements.forEach(element => {
                // 设置可编辑属性
                element.editable = element.type !== 'background';
                
                // 根据元素类型设置默认属性
                switch (element.type) {
                    case 'text':
                        element.fontFamily = element.fontFamily || 'Arial';
                        element.fontSize = element.fontSize || 16;
                        element.color = element.color || '#000000';
                        element.fontWeight = element.fontWeight || 'normal';
                        element.text = element.text || '';
                        break;
                    case 'image':
                        element.width = element.width || 100;
                        element.height = element.height || 100;
                        element.borderRadius = element.borderRadius || '0px';
                        element.shadow = element.shadow || '0 0 0 #000000';
                        break;
                    case 'shape':
                        element.width = element.width || 100;
                        element.height = element.height || 100;
                        element.color = element.color || '#000000';
                        element.shape = element.shape || 'rectangle';
                        break;
                }
            });
            
            // 渲染模板
            this.render();
            
            // 清除当前选择
            this.selectedElements.clear();
            this.selectedElement = null;
            if (this.editPanel) {
                this.editPanel.classList.remove('active');
            }
        } catch (error) {
            console.error('Error loading template:', error);
        }
    }

    render() {
        if (!this.currentTemplate) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.currentTemplate.elements.forEach(element => {
            switch (element.type) {
                case 'background':
                    this.drawBackground(element);
                    break;
                case 'shape':
                    this.drawShape(element);
                    break;
                case 'text':
                    this.drawText(element);
                    break;
                case 'image':
                    this.drawImage(element);
                    break;
            }

            // 绘制选中状态
            if (this.selectedElements.has(element)) {
                this.drawSelectionBox(element);
            }
        });
    }

    drawBackground(element) {
        if (element.image) {
            this.ctx.drawImage(element.image, element.x, element.y, element.width, element.height);
        } else if (element.color.startsWith('linear-gradient')) {
            this.drawGradientBackground(element);
        } else {
            this.ctx.fillStyle = element.color;
            this.ctx.fillRect(element.x, element.y, element.width, element.height);
        }
    }

    drawGradientBackground(element) {
        const gradient = this.ctx.createLinearGradient(
            element.x, element.y,
            element.x + element.width, element.y + element.height
        );
        
        // 解析渐变颜色
        const gradientMatch = element.color.match(/linear-gradient\((\d+)deg,\s*(#[0-9a-f]{6})\s*(\d+)%,\s*(#[0-9a-f]{6})\s*(\d+)%\)/i);
        
        if (gradientMatch) {
            const [_, angle, color1, stop1, color2, stop2] = gradientMatch;
            gradient.addColorStop(parseInt(stop1) / 100, color1);
            gradient.addColorStop(parseInt(stop2) / 100, color2);
        } else {
            // 如果解析失败，使用默认颜色
            gradient.addColorStop(0, '#FF6B6B');
            gradient.addColorStop(1, '#4ECDC4');
        }
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(element.x, element.y, element.width, element.height);
    }

    drawShape(element) {
        this.ctx.save();
        
        if (element.color.startsWith('linear-gradient')) {
            const gradient = this.ctx.createLinearGradient(
                element.x, element.y,
                element.x + element.width, element.y + element.height
            );
            const colors = element.color.match(/#[0-9a-f]{6}/gi);
            const stops = element.color.match(/\d+%/g);
            
            colors.forEach((color, index) => {
                gradient.addColorStop(parseInt(stops[index]) / 100, color);
            });
            
            this.ctx.fillStyle = gradient;
        } else {
            this.ctx.fillStyle = element.color;
        }

        if (element.shape === 'circle') {
            this.ctx.beginPath();
            this.ctx.arc(
                element.x + element.width / 2,
                element.y + element.height / 2,
                element.width / 2,
                0,
                Math.PI * 2
            );
            this.ctx.fill();
        } else if (element.shape === 'rectangle') {
            this.ctx.fillRect(element.x, element.y, element.width, element.height);
        }
        
        this.ctx.restore();
    }

    drawText(element) {
        this.ctx.save();
        
        // 设置字体
        this.ctx.font = `${element.fontWeight ? element.fontWeight + ' ' : ''}${element.fontSize}px ${element.fontFamily}`;
        
        // 设置文字阴影
        if (element.textShadow) {
            const shadow = element.textShadow.match(/\d+/g);
            this.ctx.shadowColor = 'rgba(0,0,0,0.2)';
            this.ctx.shadowBlur = parseInt(shadow[0]);
            this.ctx.shadowOffsetX = parseInt(shadow[1]);
            this.ctx.shadowOffsetY = parseInt(shadow[2]);
        }
        
        // 如果有背景色，先绘制背景
        if (element.backgroundColor) {
            const textMetrics = this.ctx.measureText(element.text);
            const padding = element.padding ? parseInt(element.padding) : 10;
            const borderRadius = element.borderRadius ? parseInt(element.borderRadius) : 5;
            
            this.ctx.fillStyle = element.backgroundColor;
            this.roundRect(
                element.x - padding,
                element.y - element.fontSize - padding,
                textMetrics.width + padding * 2,
                element.fontSize + padding * 2,
                borderRadius
            );
            this.ctx.fill();
        }
        
        // 绘制文字
        this.ctx.fillStyle = element.color;
        this.ctx.fillText(element.text, element.x, element.y);
        
        // 如果元素被选中，绘制边框
        if (this.selectedElements.has(element)) {
            const textMetrics = this.ctx.measureText(element.text);
            this.ctx.strokeStyle = '#2196F3';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(
                element.x - 5,
                element.y - element.fontSize - 5,
                textMetrics.width + 10,
                element.fontSize + 10
            );
        }
        
        this.ctx.restore();
    }

    drawImage(element) {
        if (element.image) {
            this.ctx.save();
            
            // 设置阴影
            if (element.shadow) {
                const shadow = element.shadow.match(/\d+/g);
                this.ctx.shadowColor = 'rgba(0,0,0,0.2)';
                this.ctx.shadowBlur = parseInt(shadow[0]);
                this.ctx.shadowOffsetX = parseInt(shadow[1]);
                this.ctx.shadowOffsetY = parseInt(shadow[2]);
            }
            
            // 如果有圆角，创建圆角路径
            if (element.borderRadius) {
                this.ctx.beginPath();
                this.roundRect(
                    element.x,
                    element.y,
                    element.width,
                    element.height,
                    parseInt(element.borderRadius)
                );
                this.ctx.clip();
            }
            
            this.ctx.drawImage(element.image, element.x, element.y, element.width, element.height);
            this.ctx.restore();
        } else {
            this.ctx.save();
            
            // 绘制占位符背景
            this.ctx.fillStyle = '#f0f0f0';
            if (element.borderRadius) {
                this.ctx.beginPath();
                this.roundRect(
                    element.x,
                    element.y,
                    element.width,
                    element.height,
                    parseInt(element.borderRadius)
                );
                this.ctx.fill();
            } else {
                this.ctx.fillRect(element.x, element.y, element.width, element.height);
            }
            
            // 绘制占位符文字
            this.ctx.fillStyle = '#666';
            this.ctx.font = '16px Roboto';
            this.ctx.fillText(element.placeholder, element.x + 10, element.y + 30);
            
            this.ctx.restore();
        }
    }

    roundRect(x, y, width, height, radius) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.lineTo(x + width - radius, y);
        this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.ctx.lineTo(x + width, y + height - radius);
        this.ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.ctx.lineTo(x + radius, y + height);
        this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.ctx.lineTo(x, y + radius);
        this.ctx.quadraticCurveTo(x, y, x + radius, y);
        this.ctx.closePath();
    }

    handleCanvasClick(e) {
        if (this.isEditing) return;

        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 检查是否点击了banner背景
        const backgroundElement = this.currentTemplate.elements.find(el => el.type === 'background');
        if (backgroundElement && this.isPointInElement(x, y, backgroundElement)) {
            // 选中banner上的所有可编辑元素
            this.selectedElements.clear();
            this.currentTemplate.elements.forEach(element => {
                if (element.editable && element.type !== 'background') {
                    this.selectedElements.add(element);
                }
            });
            this.showEditPanel();
            this.render(); // 立即更新选中状态
            return;
        }

        // 检查是否点击了具体元素
        let clickedElement = null;
        let maxZIndex = -1;

        // 从后向前遍历元素（上层元素优先）
        for (let i = this.currentTemplate.elements.length - 1; i >= 0; i--) {
            const element = this.currentTemplate.elements[i];
            if (element.editable && element.type !== 'background' && this.isPointInElement(x, y, element)) {
                // 计算元素的z-index（基于元素在数组中的位置）
                const zIndex = this.currentTemplate.elements.length - i;
                if (zIndex > maxZIndex) {
                    clickedElement = element;
                    maxZIndex = zIndex;
                }
            }
        }

        if (clickedElement) {
            if (e.shiftKey) {
                // Shift键按下时，添加到多选
                this.selectedElements.add(clickedElement);
            } else {
                // 普通点击，只选中当前元素
                this.selectedElements.clear();
                this.selectedElements.add(clickedElement);
            }
            this.selectedElement = clickedElement;
            this.showEditPanel(clickedElement);
            
            // 如果是文字元素，并且是双击，则开始编辑
            if (clickedElement.type === 'text' && e.detail === 2) {
                this.startTextEditing(clickedElement);
            }
            
            this.render(); // 立即更新选中状态
        } else {
            this.selectedElement = null;
            this.selectedElements.clear();
            if (this.editPanel) {
                this.editPanel.classList.remove('active');
            }
            this.render(); // 立即更新选中状态
        }
    }

    startTextEditing(element) {
        this.isEditing = true;

        // 创建临时输入框
        const input = document.createElement('textarea');
        input.value = element.text;
        
        // 计算输入框的位置和大小
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = rect.width / this.canvas.width;
        const scaleY = rect.height / this.canvas.height;
        
        input.style.position = 'absolute';
        input.style.left = `${rect.left + element.x * scaleX}px`;
        input.style.top = `${rect.top + (element.y - element.fontSize) * scaleY}px`;
        input.style.width = `${element.width * scaleX}px`;
        input.style.height = `${element.fontSize * scaleY}px`;
        input.style.font = `${element.fontWeight ? element.fontWeight + ' ' : ''}${element.fontSize}px ${element.fontFamily}`;
        input.style.color = element.color;
        input.style.background = 'transparent';
        input.style.border = 'none';
        input.style.padding = '0';
        input.style.margin = '0';
        input.style.outline = 'none';
        input.style.resize = 'none';
        input.style.overflow = 'hidden';
        input.style.zIndex = '1000';
        input.style.transform = 'none';
        input.style.transformOrigin = 'top left';

        // 添加到画布容器
        this.canvas.parentElement.appendChild(input);
        input.focus();

        // 处理输入事件
        input.addEventListener('input', () => {
            element.text = input.value;
            this.render();
        });

        // 处理失焦事件
        input.addEventListener('blur', () => {
            element.text = input.value;
            this.render();
            input.remove();
            this.isEditing = false;
        });

        // 处理回车键
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                input.blur();
            }
        });
    }

    showEditPanel(element) {
        if (!this.editPanel) return;
        
        this.editPanel.classList.add('active');
        
        // 隐藏所有编辑区域
        if (this.textEditSection) this.textEditSection.style.display = 'none';
        if (this.imageEditSection) this.imageEditSection.style.display = 'none';
        if (this.shapeEditSection) this.shapeEditSection.style.display = 'none';

        // 如果有多个选中的元素，显示所有相关的编辑区域
        if (this.selectedElements.size > 1) {
            const hasText = Array.from(this.selectedElements).some(el => el.type === 'text');
            const hasImage = Array.from(this.selectedElements).some(el => el.type === 'image' || (el.type === 'background' && el.isBackground));
            const hasShape = Array.from(this.selectedElements).some(el => el.type === 'shape');
            
            if (hasText && this.textEditSection) this.textEditSection.style.display = 'block';
            if (hasImage && this.imageEditSection) this.imageEditSection.style.display = 'block';
            if (hasShape && this.shapeEditSection) this.shapeEditSection.style.display = 'block';
        } else if (element) {
            // 单个元素的情况
            switch (element.type) {
                case 'text':
                    if (this.textEditSection) {
                        this.textEditSection.style.display = 'block';
                        this.updateTextEditControls(element);
                    }
                    break;
                case 'image':
                case 'background':
                    if (this.imageEditSection) {
                        this.imageEditSection.style.display = 'block';
                        this.updateImageEditControls(element);
                    }
                    break;
                case 'shape':
                    if (this.shapeEditSection) {
                        this.shapeEditSection.style.display = 'block';
                        this.updateShapeEditControls(element);
                    }
                    break;
            }
        }
    }

    updateTextEditControls(element) {
        const textContent = document.getElementById('textContent');
        textContent.value = element.text || '';
        textContent.placeholder = '输入文字内容...';
        
        const fontFamily = document.getElementById('fontFamily');
        fontFamily.value = element.fontFamily || 'Arial';
        
        const fontSize = document.getElementById('fontSize');
        fontSize.value = element.fontSize || 16;
        document.getElementById('fontSizeValue').textContent = `${element.fontSize || 16}px`;
        
        const fontColor = document.getElementById('fontColor');
        fontColor.value = element.color || '#000000';
        
        const fontWeight = document.getElementById('fontWeight');
        fontWeight.value = element.fontWeight || 'normal';
        
        // 更新阴影设置
        if (element.textShadow) {
            const shadow = element.textShadow.match(/\d+/g);
            if (shadow) {
                document.getElementById('shadowBlur').value = shadow[0] || 0;
                document.getElementById('shadowOffsetX').value = shadow[1] || 0;
                document.getElementById('shadowOffsetY').value = shadow[2] || 0;
                const shadowColorMatch = element.textShadow.match(/#[0-9a-f]{6}/i);
                if (shadowColorMatch) {
                    document.getElementById('shadowColor').value = shadowColorMatch[0];
                }
            }
        }
        
        // 更新背景设置
        if (element.backgroundColor) {
            const rgba = element.backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (rgba) {
                const r = parseInt(rgba[1]);
                const g = parseInt(rgba[2]);
                const b = parseInt(rgba[3]);
                const a = rgba[4] ? Math.round(parseFloat(rgba[4]) * 100) : 100;
                document.getElementById('backgroundColor').value = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                document.getElementById('backgroundOpacity').value = a;
                document.getElementById('opacityValue').textContent = `${a}%`;
            }
        }
    }

    updateImageEditControls(element) {
        if (!element) return;

        // 设置宽度和高度
        const imageWidth = document.getElementById('imageWidth');
        const imageHeight = document.getElementById('imageHeight');
        if (imageWidth) imageWidth.value = element.width || 0;
        if (imageHeight) imageHeight.value = element.height || 0;
        
        // 设置圆角
        const imageBorderRadius = document.getElementById('imageBorderRadius');
        const borderRadiusValue = document.getElementById('borderRadiusValue');
        if (element.borderRadius && imageBorderRadius && borderRadiusValue) {
            const radius = parseInt(element.borderRadius);
            imageBorderRadius.value = radius;
            borderRadiusValue.textContent = `${radius}px`;
        }
        
        // 设置阴影
        const imageShadowBlur = document.getElementById('imageShadowBlur');
        const imageShadowOffsetX = document.getElementById('imageShadowOffsetX');
        const imageShadowOffsetY = document.getElementById('imageShadowOffsetY');
        const imageShadowColor = document.getElementById('imageShadowColor');
        
        if (element.shadow && imageShadowBlur && imageShadowOffsetX && imageShadowOffsetY && imageShadowColor) {
            const shadow = element.shadow.match(/\d+/g);
            if (shadow && shadow.length >= 3) {
                imageShadowBlur.value = shadow[0];
                imageShadowOffsetX.value = shadow[1];
                imageShadowOffsetY.value = shadow[2];
                
                const shadowColorMatch = element.shadow.match(/#[0-9a-f]{6}/i);
                if (shadowColorMatch) {
                    imageShadowColor.value = shadowColorMatch[0];
                }
            }
        }
    }

    updateShapeEditControls(element) {
        document.getElementById('shapeType').value = element.shape;
        document.getElementById('shapeWidth').value = element.width;
        document.getElementById('shapeHeight').value = element.height;
        
        // 设置颜色和透明度
        if (element.color) {
            const rgba = element.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (rgba) {
                const r = parseInt(rgba[1]);
                const g = parseInt(rgba[2]);
                const b = parseInt(rgba[3]);
                const a = rgba[4] ? Math.round(parseFloat(rgba[4]) * 100) : 100;
                document.getElementById('shapeColor').value = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                document.getElementById('shapeOpacity').value = a;
                document.getElementById('shapeOpacityValue').textContent = `${a}%`;
            }
        }
    }

    drawSelectionBox(element) {
        this.ctx.save();
        this.ctx.strokeStyle = '#2196F3';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        
        if (element.type === 'text') {
            const textMetrics = this.ctx.measureText(element.text);
            this.ctx.strokeRect(
                element.x - 5,
                element.y - element.fontSize - 5,
                textMetrics.width + 10,
                element.fontSize + 10
            );
        } else {
            this.ctx.strokeRect(
                element.x - 5,
                element.y - 5,
                element.width + 10,
                element.height + 10
            );
        }
        
        this.ctx.restore();
    }

    handleMouseDown(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.currentTemplate.elements.forEach(element => {
            if (element.editable && this.isPointInElement(x, y, element)) {
                this.selectedElement = element;
                this.isDragging = true;
                this.dragStartX = x - element.x;
                this.dragStartY = y - element.y;
            }
        });
    }

    handleMouseMove(e) {
        if (this.isDragging && this.selectedElement) {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.selectedElement.x = x - this.dragStartX;
            this.selectedElement.y = y - this.dragStartY;

            this.render();
        }
    }

    handleMouseUp() {
        this.isDragging = false;
    }

    isPointInElement(x, y, element) {
        if (!element || !element.editable) return false;
        
        // 对于文字元素，需要考虑字体大小和实际文本宽度
        if (element.type === 'text') {
            const textMetrics = this.ctx.measureText(element.text);
            const padding = 5; // 点击容差
            const textWidth = textMetrics.width;
            const textHeight = element.fontSize;
            
            // 计算文本的实际边界框
            const left = element.x - padding;
            const right = element.x + textWidth + padding;
            const top = element.y - textHeight - padding;
            const bottom = element.y + padding;
            
            return x >= left && x <= right && y >= top && y <= bottom;
        }
        
        // 对于图片和形状元素，使用标准边界框
        const padding = 5; // 点击容差
        return x >= element.x - padding && 
               x <= element.x + element.width + padding && 
               y >= element.y - padding && 
               y <= element.y + element.height + padding;
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

    // 提取图片主色调
    async extractImageColors(image) {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = image.width;
        tempCanvas.height = image.height;
        tempCtx.drawImage(image, 0, 0);

        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const pixels = imageData.data;
        const colorCounts = new Map();
        const sampleSize = 100; // 采样大小

        // 随机采样像素点
        for (let i = 0; i < pixels.length; i += 4 * sampleSize) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];
            const a = pixels[i + 3];

            if (a > 128) { // 忽略透明像素
                const color = `rgb(${r},${g},${b})`;
                colorCounts.set(color, (colorCounts.get(color) || 0) + 1);
            }
        }

        // 获取主要颜色
        const sortedColors = Array.from(colorCounts.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(entry => entry[0]);

        return this.generateColorPalette(sortedColors);
    }

    // 生成配色方案
    generateColorPalette(colors) {
        const palette = {
            primary: colors[0],
            secondary: colors[1],
            accent: colors[2],
            background: this.generateGradient(colors[0], colors[1]),
            text: this.getContrastColor(colors[0])
        };
        return palette;
    }

    // 生成渐变背景
    generateGradient(color1, color2) {
        // 确保颜色值有效
        if (!color1 || !color2) {
            return 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)';
        }
        return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
    }

    // 获取对比色
    getContrastColor(hexColor) {
        const rgb = this.hexToRgb(hexColor);
        const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        return brightness > 128 ? '#000000' : '#ffffff';
    }

    // 十六进制转RGB
    hexToRgb(hex) {
        const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(hex);
        if (result) {
            return {
                r: parseInt(result[1]),
                g: parseInt(result[2]),
                b: parseInt(result[3])
            };
        }
        return { r: 0, g: 0, b: 0 };
    }

    // 应用智能配色
    applyColorPalette(palette) {
        this.currentTemplate.elements.forEach(element => {
            if (element.type === 'background') {
                element.color = palette.background;
            } else if (element.type === 'text') {
                if (element.isTitle) {
                    element.color = palette.primary;
                } else if (element.isSubtitle) {
                    element.color = palette.secondary;
                } else {
                    element.color = palette.text;
                }
            }
        });
        this.render();
    }

    // 更新图片处理
    async handleImageUpload(file, element) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const img = new Image();
            img.onload = async () => {
                // 保存当前模板状态
                const currentState = JSON.parse(JSON.stringify(this.currentTemplate));
                
                // 更新图片元素
                element.image = img;
                
                // 如果是背景图片，调整图片尺寸以适应画布
                if (element.type === 'background' && element.isBackground) {
                    const scale = Math.max(
                        this.canvas.width / img.width,
                        this.canvas.height / img.height
                    );
                    element.width = img.width * scale;
                    element.height = img.height * scale;
                    element.x = (this.canvas.width - element.width) / 2;
                    element.y = (this.canvas.height - element.height) / 2;
                }
                
                // 提取颜色并应用配色
                if (!element.isBackground) {
                    this.colorPalette = await this.extractImageColors(img);
                    this.applyColorPalette(this.colorPalette);
                }
                
                this.render();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // 添加重置模板方法
    resetTemplate() {
        if (this.templateBackup) {
            this.currentTemplate = JSON.parse(JSON.stringify(this.templateBackup));
            this.render();
        }
    }

    // 初始化模板选择
    initTemplateSelect() {
        const templateList = document.getElementById('templateList');
        templateList.innerHTML = '';
        Object.keys(templates).forEach((key, idx) => {
            const item = document.createElement('div');
            item.className = 'template-item' + (idx === 0 ? ' active' : '');
            item.dataset.template = key;
            // 尝试加载缩略图，否则显示模板名
            const img = document.createElement('img');
            img.src = `templates/${key}.png`;
            img.alt = key;
            img.onerror = () => { img.style.display = 'none'; };
            const span = document.createElement('span');
            span.innerText = key;
            item.appendChild(img);
            item.appendChild(span);
            templateList.appendChild(item);
        });

        // 绑定点击事件
        templateList.querySelectorAll('.template-item').forEach(item => {
            item.addEventListener('click', () => {
                const templateName = item.dataset.template;
                this.loadTemplate(templateName);
                templateList.querySelectorAll('.template-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }
}

// 初始化应用
window.addEventListener('load', () => {
    new CoverGenerator();
}); 