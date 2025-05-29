import { fabric } from 'fabric';

export class ShapeEditor {
    constructor(canvasRenderer) {
        this.canvasRenderer = canvasRenderer;
        this.activeElement = null;
    }

    // 激活编辑器
    activate(element) {
        this.activeElement = element;
    }

    // 停用编辑器
    deactivate() {
        this.activeElement = null;
    }

    // 创建形状元素
    createElement(config) {
        const defaultConfig = {
            shape: 'rectangle',
            left: 100,
            top: 100,
            width: 100,
            height: 100,
            fill: '#f0f0f0',
            stroke: '#333333',
            strokeWidth: 2
        };

        const shapeConfig = { ...defaultConfig, ...config };
        let shape;

        switch (shapeConfig.shape) {
            case 'rectangle':
                shape = new fabric.Rect({
                    left: shapeConfig.left,
                    top: shapeConfig.top,
                    width: shapeConfig.width,
                    height: shapeConfig.height,
                    fill: shapeConfig.fill,
                    stroke: shapeConfig.stroke,
                    strokeWidth: shapeConfig.strokeWidth,
                    cornerStyle: 'circle',
                    cornerColor: '#00a8ff',
                    cornerSize: 10,
                    transparentCorners: false,
                    borderColor: '#00a8ff',
                    borderScaleFactor: 2
                });
                break;

            case 'circle':
                shape = new fabric.Circle({
                    left: shapeConfig.left,
                    top: shapeConfig.top,
                    radius: shapeConfig.width / 2,
                    fill: shapeConfig.fill,
                    stroke: shapeConfig.stroke,
                    strokeWidth: shapeConfig.strokeWidth,
                    cornerStyle: 'circle',
                    cornerColor: '#00a8ff',
                    cornerSize: 10,
                    transparentCorners: false,
                    borderColor: '#00a8ff',
                    borderScaleFactor: 2
                });
                break;

            case 'triangle':
                shape = new fabric.Triangle({
                    left: shapeConfig.left,
                    top: shapeConfig.top,
                    width: shapeConfig.width,
                    height: shapeConfig.height,
                    fill: shapeConfig.fill,
                    stroke: shapeConfig.stroke,
                    strokeWidth: shapeConfig.strokeWidth,
                    cornerStyle: 'circle',
                    cornerColor: '#00a8ff',
                    cornerSize: 10,
                    transparentCorners: false,
                    borderColor: '#00a8ff',
                    borderScaleFactor: 2
                });
                break;

            default:
                throw new Error(`Unsupported shape type: ${shapeConfig.shape}`);
        }

        this.canvasRenderer.canvas.add(shape);
        this.canvasRenderer.canvas.setActiveObject(shape);
        return shape;
    }

    // 更新形状属性
    updateProperties(element, properties) {
        if (!element) return;

        Object.keys(properties).forEach(prop => {
            if (element[prop] !== undefined) {
                element.set(prop, properties[prop]);
            }
        });

        this.canvasRenderer.canvas.renderAll();
    }

    // 删除形状元素
    deleteElement(element) {
        if (!element) return;
        this.canvasRenderer.canvas.remove(element);
        this.canvasRenderer.canvas.renderAll();
    }

    // 复制形状元素
    copyElement(element) {
        if (!element) return null;
        return element.toObject();
    }

    // 粘贴形状元素
    pasteElement(elementData) {
        if (!elementData) return null;
        
        let shape;
        switch (elementData.type) {
            case 'rect':
                shape = new fabric.Rect({
                    ...elementData,
                    left: elementData.left + 20,
                    top: elementData.top + 20
                });
                break;

            case 'circle':
                shape = new fabric.Circle({
                    ...elementData,
                    left: elementData.left + 20,
                    top: elementData.top + 20
                });
                break;

            case 'triangle':
                shape = new fabric.Triangle({
                    ...elementData,
                    left: elementData.left + 20,
                    top: elementData.top + 20
                });
                break;

            default:
                return null;
        }

        this.canvasRenderer.canvas.add(shape);
        this.canvasRenderer.canvas.setActiveObject(shape);
        return shape;
    }

    // 获取编辑器状态
    getState() {
        if (!this.activeElement) return null;
        return this.activeElement.toObject();
    }

    // 设置编辑器状态
    setState(state) {
        if (!state || !this.activeElement) return;
        this.updateProperties(this.activeElement, state);
    }

    // 设置填充颜色
    setFillColor(color) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { fill: color });
    }

    // 设置描边颜色
    setStrokeColor(color) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { stroke: color });
    }

    // 设置描边宽度
    setStrokeWidth(width) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { strokeWidth: width });
    }

    // 设置透明度
    setOpacity(opacity) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { opacity });
    }

    // 设置圆角
    setCornerRadius(radius) {
        if (!this.activeElement || !this.activeElement.rx) return;
        this.updateProperties(this.activeElement, {
            rx: radius,
            ry: radius
        });
    }

    // 设置旋转角度
    setRotation(angle) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { angle });
    }

    // 设置阴影
    setShadow(shadow) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { shadow });
    }

    // 设置渐变
    setGradient(gradient) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { fill: gradient });
    }

    // 设置图案
    setPattern(pattern) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { fill: pattern });
    }
} 