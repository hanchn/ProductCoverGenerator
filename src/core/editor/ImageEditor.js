import { fabric } from 'fabric';

export class ImageEditor {
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

    // 创建图片元素
    createElement(config) {
        const defaultConfig = {
            src: '',
            left: 100,
            top: 100,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            opacity: 1
        };

        const imageConfig = { ...defaultConfig, ...config };

        fabric.Image.fromURL(imageConfig.src, (img) => {
            img.set({
                left: imageConfig.left,
                top: imageConfig.top,
                scaleX: imageConfig.scaleX,
                scaleY: imageConfig.scaleY,
                angle: imageConfig.angle,
                opacity: imageConfig.opacity,
                cornerStyle: 'circle',
                cornerColor: '#00a8ff',
                cornerSize: 10,
                transparentCorners: false,
                borderColor: '#00a8ff',
                borderScaleFactor: 2
            });

            this.canvasRenderer.canvas.add(img);
            this.canvasRenderer.canvas.setActiveObject(img);
        });
    }

    // 更新图片属性
    updateProperties(element, properties) {
        if (!element) return;

        Object.keys(properties).forEach(prop => {
            if (element[prop] !== undefined) {
                element.set(prop, properties[prop]);
            }
        });

        this.canvasRenderer.canvas.renderAll();
    }

    // 删除图片元素
    deleteElement(element) {
        if (!element) return;
        this.canvasRenderer.canvas.remove(element);
        this.canvasRenderer.canvas.renderAll();
    }

    // 复制图片元素
    copyElement(element) {
        if (!element) return null;
        return element.toObject();
    }

    // 粘贴图片元素
    pasteElement(elementData) {
        if (!elementData) return null;
        
        fabric.Image.fromURL(elementData.src, (img) => {
            img.set({
                ...elementData,
                left: elementData.left + 20,
                top: elementData.top + 20
            });

            this.canvasRenderer.canvas.add(img);
            this.canvasRenderer.canvas.setActiveObject(img);
        });
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

    // 设置图片滤镜
    setFilter(filter) {
        if (!this.activeElement) return;
        this.activeElement.filters = [filter];
        this.activeElement.applyFilters();
        this.canvasRenderer.canvas.renderAll();
    }

    // 设置亮度
    setBrightness(value) {
        if (!this.activeElement) return;

        const filters = this.activeElement.filters || [];
        const brightnessFilter = filters.find(f => f.type === 'brightness');

        if (brightnessFilter) {
            brightnessFilter.brightness = value;
        } else {
            filters.push(new fabric.Image.filters.Brightness({ brightness: value }));
        }

        this.activeElement.filters = filters;
        this.activeElement.applyFilters();
        this.canvasRenderer.canvas.renderAll();
    }

    // 设置对比度
    setContrast(value) {
        if (!this.activeElement) return;

        const filters = this.activeElement.filters || [];
        const contrastFilter = filters.find(f => f.type === 'contrast');

        if (contrastFilter) {
            contrastFilter.contrast = value;
        } else {
            filters.push(new fabric.Image.filters.Contrast({ contrast: value }));
        }

        this.activeElement.filters = filters;
        this.activeElement.applyFilters();
        this.canvasRenderer.canvas.renderAll();
    }

    // 设置饱和度
    setSaturation(value) {
        if (!this.activeElement) return;

        const filters = this.activeElement.filters || [];
        const saturationFilter = filters.find(f => f.type === 'saturation');

        if (saturationFilter) {
            saturationFilter.saturation = value;
        } else {
            filters.push(new fabric.Image.filters.Saturation({ saturation: value }));
        }

        this.activeElement.filters = filters;
        this.activeElement.applyFilters();
        this.canvasRenderer.canvas.renderAll();
    }

    // 设置模糊
    setBlur(value) {
        if (!this.activeElement) return;

        const filters = this.activeElement.filters || [];
        const blurFilter = filters.find(f => f.type === 'blur');

        if (blurFilter) {
            blurFilter.blur = value;
        } else {
            filters.push(new fabric.Image.filters.Blur({ blur: value }));
        }

        this.activeElement.filters = filters;
        this.activeElement.applyFilters();
        this.canvasRenderer.canvas.renderAll();
    }

    // 设置图片裁剪
    setCrop(cropData) {
        if (!this.activeElement) return;
        this.activeElement.set({
            cropX: cropData.x,
            cropY: cropData.y,
            cropWidth: cropData.width,
            cropHeight: cropData.height
        });
        this.canvasRenderer.canvas.renderAll();
    }

    // 重置图片
    resetImage() {
        if (!this.activeElement) return;
        this.activeElement.set({
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            filters: []
        });
        this.activeElement.applyFilters();
        this.canvasRenderer.canvas.renderAll();
    }
} 