export class ShapeEditor {
    constructor(generator) {
        this.generator = generator;
    }

    initControls() {
        const shapeType = document.getElementById('shapeType');
        const shapeColor = document.getElementById('shapeColor');
        const shapeWidth = document.getElementById('shapeWidth');
        const shapeHeight = document.getElementById('shapeHeight');
        const shapeBorderRadius = document.getElementById('shapeBorderRadius');
        const shapeBorderRadiusValue = document.getElementById('shapeBorderRadiusValue');
        const shapeShadowBlur = document.getElementById('shapeShadowBlur');
        const shapeShadowOffsetX = document.getElementById('shapeShadowOffsetX');
        const shapeShadowOffsetY = document.getElementById('shapeShadowOffsetY');
        const shapeShadowColor = document.getElementById('shapeShadowColor');

        shapeType.addEventListener('change', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.shapeType = shapeType.value;
                this.generator.render();
            }
        });

        shapeColor.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.color = shapeColor.value;
                this.generator.render();
            }
        });

        shapeWidth.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.width = parseInt(shapeWidth.value);
                this.generator.render();
            }
        });

        shapeHeight.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.height = parseInt(shapeHeight.value);
                this.generator.render();
            }
        });

        shapeBorderRadius.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.borderRadius = `${shapeBorderRadius.value}px`;
                shapeBorderRadiusValue.textContent = `${shapeBorderRadius.value}px`;
                this.generator.render();
            }
        });

        shapeShadowBlur.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.shadow = `${shapeShadowBlur.value}px ${shapeShadowOffsetX.value}px ${shapeShadowOffsetY.value}px ${shapeShadowColor.value}`;
                this.generator.render();
            }
        });

        shapeShadowOffsetX.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.shadow = `${shapeShadowBlur.value}px ${shapeShadowOffsetX.value}px ${shapeShadowOffsetY.value}px ${shapeShadowColor.value}`;
                this.generator.render();
            }
        });

        shapeShadowOffsetY.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.shadow = `${shapeShadowBlur.value}px ${shapeShadowOffsetX.value}px ${shapeShadowOffsetY.value}px ${shapeShadowColor.value}`;
                this.generator.render();
            }
        });

        shapeShadowColor.addEventListener('input', () => {
            if (this.generator.selectedElement && this.generator.selectedElement.type === 'shape') {
                this.generator.selectedElement.shadow = `${shapeShadowBlur.value}px ${shapeShadowOffsetX.value}px ${shapeShadowOffsetY.value}px ${shapeShadowColor.value}`;
                this.generator.render();
            }
        });
    }
} 