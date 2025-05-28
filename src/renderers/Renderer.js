export class Renderer {
    constructor(ctx, generator) {
        this.ctx = ctx;
        this.generator = generator;
    }

    render(template) {
        if (!template) return;
        
        this.ctx.clearRect(0, 0, this.generator.canvas.width, this.generator.canvas.height);
        
        template.elements.forEach(element => {
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
            if (this.generator.selectedElements.has(element)) {
                this.drawSelectionBox(element);
            }
        });
    }

    drawBackground(element) {
        if (element.color.startsWith('linear-gradient')) {
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
        
        const gradientMatch = element.color.match(/linear-gradient\((\d+)deg,\s*(#[0-9a-f]{6})\s*(\d+)%,\s*(#[0-9a-f]{6})\s*(\d+)%\)/i);
        
        if (gradientMatch) {
            const [_, angle, color1, stop1, color2, stop2] = gradientMatch;
            gradient.addColorStop(parseInt(stop1) / 100, color1);
            gradient.addColorStop(parseInt(stop2) / 100, color2);
        } else {
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
            this.drawImagePlaceholder(element);
        }
    }

    drawImagePlaceholder(element) {
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
} 