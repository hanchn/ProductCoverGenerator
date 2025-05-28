export class TextEditor {
    constructor(generator) {
        this.generator = generator;
    }

    initControls() {
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
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.text = textContent.value;
                console.log('修改后的文本:', textContent.value);
                this.generator.render();
            }
        });

        fontFamily.addEventListener('change', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.fontFamily = fontFamily.value;
                this.generator.render();
            }
        });

        fontSize.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.fontSize = parseInt(fontSize.value);
                fontSizeValue.textContent = `${fontSize.value}px`;
                this.generator.render();
            }
        });

        fontColor.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.color = fontColor.value;
                this.generator.render();
            }
        });

        fontWeight.addEventListener('change', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.fontWeight = fontWeight.value;
                this.generator.render();
            }
        });

        shadowBlur.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.textShadow = `${shadowBlur.value}px ${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowColor.value}`;
                this.generator.render();
            }
        });

        shadowOffsetX.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.textShadow = `${shadowBlur.value}px ${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowColor.value}`;
                this.generator.render();
            }
        });

        shadowOffsetY.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.textShadow = `${shadowBlur.value}px ${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowColor.value}`;
                this.generator.render();
            }
        });

        shadowColor.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                this.generator.selectedElement.textShadow = `${shadowBlur.value}px ${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowColor.value}`;
                this.generator.render();
            }
        });

        backgroundColor.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                const opacity = backgroundOpacity.value / 100;
                const color = backgroundColor.value;
                const rgba = this.hexToRgba(color, opacity);
                this.generator.selectedElement.backgroundColor = rgba;
                this.generator.render();
            }
        });

        backgroundOpacity.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'text') {
                const opacity = backgroundOpacity.value / 100;
                const color = backgroundColor.value;
                const rgba = this.hexToRgba(color, opacity);
                this.generator.selectedElement.backgroundColor = rgba;
                opacityValue.textContent = `${backgroundOpacity.value}%`;
                this.generator.render();
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
} 