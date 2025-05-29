import { fabric } from 'fabric';

export class TextEditor {
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

    // 创建文本元素
    createElement(config) {
        const defaultConfig = {
            text: 'New Text',
            left: 100,
            top: 100,
            fontSize: 24,
            fontFamily: 'Poppins',
            fill: '#333333'
        };

        const textConfig = { ...defaultConfig, ...config };
        const text = new fabric.IText(textConfig.text, {
            left: textConfig.left,
            top: textConfig.top,
            fontSize: textConfig.fontSize,
            fontFamily: textConfig.fontFamily,
            fill: textConfig.fill,
            cornerStyle: 'circle',
            cornerColor: '#00a8ff',
            cornerSize: 10,
            transparentCorners: false,
            borderColor: '#00a8ff',
            borderScaleFactor: 2
        });

        this.canvasRenderer.canvas.add(text);
        this.canvasRenderer.canvas.setActiveObject(text);
        return text;
    }

    // 更新文本属性
    updateProperties(element, properties) {
        if (!element) return;

        Object.keys(properties).forEach(prop => {
            if (element[prop] !== undefined) {
                element.set(prop, properties[prop]);
            }
        });

        this.canvasRenderer.canvas.renderAll();
    }

    // 删除文本元素
    deleteElement(element) {
        if (!element) return;
        this.canvasRenderer.canvas.remove(element);
        this.canvasRenderer.canvas.renderAll();
    }

    // 复制文本元素
    copyElement(element) {
        if (!element) return null;
        return element.toObject();
    }

    // 粘贴文本元素
    pasteElement(elementData) {
        if (!elementData) return null;
        
        const text = new fabric.IText(elementData.text, {
            ...elementData,
            left: elementData.left + 20,
            top: elementData.top + 20
        });

        this.canvasRenderer.canvas.add(text);
        this.canvasRenderer.canvas.setActiveObject(text);
        return text;
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

    // 设置字体
    setFont(fontFamily) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { fontFamily });
    }

    // 设置字体大小
    setFontSize(size) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { fontSize: size });
    }

    // 设置字体颜色
    setColor(color) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { fill: color });
    }

    // 设置文本对齐
    setTextAlign(align) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { textAlign: align });
    }

    // 设置字体粗细
    setFontWeight(weight) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { fontWeight: weight });
    }

    // 设置字体样式
    setFontStyle(style) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { fontStyle: style });
    }

    // 设置文本装饰
    setTextDecoration(decoration) {
        if (!this.activeElement) return;
        this.updateProperties(this.activeElement, { textDecoration: decoration });
    }
} 