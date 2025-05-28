export class ImageEditor {
    constructor(generator) {
        this.generator = generator;
    }

    initControls() {
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
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'image') {
                const file = event.target.files[0];
                if (file) {
                    this.handleImageUpload(file, this.generator.selectedElement);
                }
            }
        });

        imageWidth.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'image') {
                if (maintainAspectRatio.checked && this.generator.selectedElement.image) {
                    const ratio = this.generator.selectedElement.image.height / this.generator.selectedElement.image.width;
                    this.generator.selectedElement.height = Math.round(parseInt(imageWidth.value) * ratio);
                    imageHeight.value = this.generator.selectedElement.height;
                }
                this.generator.selectedElement.width = parseInt(imageWidth.value);
                this.generator.render();
            }
        });

        imageHeight.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'image') {
                if (maintainAspectRatio.checked && this.generator.selectedElement.image) {
                    const ratio = this.generator.selectedElement.image.width / this.generator.selectedElement.image.height;
                    this.generator.selectedElement.width = Math.round(parseInt(imageHeight.value) * ratio);
                    imageWidth.value = this.generator.selectedElement.width;
                }
                this.generator.selectedElement.height = parseInt(imageHeight.value);
                this.generator.render();
            }
        });

        imageBorderRadius.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'image') {
                this.generator.selectedElement.borderRadius = `${imageBorderRadius.value}px`;
                borderRadiusValue.textContent = `${imageBorderRadius.value}px`;
                this.generator.render();
            }
        });

        imageShadowBlur.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'image') {
                this.generator.selectedElement.shadow = `${imageShadowBlur.value}px ${imageShadowOffsetX.value}px ${imageShadowOffsetY.value}px ${imageShadowColor.value}`;
                this.generator.render();
            }
        });

        imageShadowOffsetX.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'image') {
                this.generator.selectedElement.shadow = `${imageShadowBlur.value}px ${imageShadowOffsetX.value}px ${imageShadowOffsetY.value}px ${imageShadowColor.value}`;
                this.generator.render();
            }
        });

        imageShadowOffsetY.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'image') {
                this.generator.selectedElement.shadow = `${imageShadowBlur.value}px ${imageShadowOffsetX.value}px ${imageShadowOffsetY.value}px ${imageShadowColor.value}`;
                this.generator.render();
            }
        });

        imageShadowColor.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'image') {
                this.generator.selectedElement.shadow = `${imageShadowBlur.value}px ${imageShadowOffsetX.value}px ${imageShadowOffsetY.value}px ${imageShadowColor.value}`;
                this.generator.render();
            }
        });
    }

    async handleImageUpload(file, element) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const img = new Image();
            img.onload = async () => {
                // 保存当前模板状态
                const currentState = JSON.parse(JSON.stringify(this.generator.currentTemplate));
                
                // 更新图片元素
                element.image = img;
                
                // 提取颜色并应用配色
                const colorPalette = await this.generator.colorManager.extractImageColors(img);
                
                // 应用新的配色方案，但保持其他元素不变
                this.generator.currentTemplate.elements.forEach(el => {
                    if (el.type === 'background') {
                        // 保持渐变背景的格式
                        if (el.color.startsWith('linear-gradient')) {
                            const gradientColors = colorPalette.background.match(/#[0-9a-f]{6}/gi);
                            if (gradientColors && gradientColors.length >= 2) {
                                el.color = `linear-gradient(135deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`;
                            }
                        } else {
                            el.color = colorPalette.background;
                        }
                    } else if (el.type === 'text') {
                        if (el.isTitle) {
                            el.color = colorPalette.primary;
                        } else if (el.isSubtitle) {
                            el.color = colorPalette.secondary;
                        } else {
                            el.color = colorPalette.text;
                        }
                    }
                });
                
                this.generator.render();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
} 