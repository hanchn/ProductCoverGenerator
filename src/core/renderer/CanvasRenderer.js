import { fabric } from 'fabric';

export class CanvasRenderer {
    constructor(canvasElement) {
        this.canvas = new fabric.Canvas(canvasElement, {
            width: 800,
            height: 600,
            backgroundColor: '#ffffff',
            preserveObjectStacking: true
        });

        this.setupCanvas();
    }

    // 设置画布
    setupCanvas() {
        // 设置画布背景
        this.canvas.setBackgroundColor('#ffffff', () => {
            this.canvas.renderAll();
        });

        // 设置画布事件
        this.canvas.on('selection:created', (e) => {
            const selected = e.selected[0];
            if (selected) {
                selected.set({
                    cornerStyle: 'circle',
                    cornerColor: '#00a8ff',
                    cornerSize: 10,
                    transparentCorners: false,
                    borderColor: '#00a8ff',
                    borderScaleFactor: 2
                });
            }
        });

        this.canvas.on('selection:updated', (e) => {
            const selected = e.selected[0];
            if (selected) {
                selected.set({
                    cornerStyle: 'circle',
                    cornerColor: '#00a8ff',
                    cornerSize: 10,
                    transparentCorners: false,
                    borderColor: '#00a8ff',
                    borderScaleFactor: 2
                });
            }
        });

        // 设置画布缩放
        this.canvas.on('mouse:wheel', (opt) => {
            const delta = opt.e.deltaY;
            let zoom = this.canvas.getZoom();
            zoom *= 0.999 ** delta;
            if (zoom > 20) zoom = 20;
            if (zoom < 0.01) zoom = 0.01;
            this.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
        });

        // 设置画布平移
        this.canvas.on('mouse:down', (opt) => {
            const evt = opt.e;
            if (evt.altKey === true) {
                this.canvas.isDragging = true;
                this.canvas.selection = false;
                this.canvas.lastPosX = evt.clientX;
                this.canvas.lastPosY = evt.clientY;
            }
        });

        this.canvas.on('mouse:move', (opt) => {
            if (this.canvas.isDragging) {
                const evt = opt.e;
                const vpt = this.canvas.viewportTransform;
                vpt[4] += evt.clientX - this.canvas.lastPosX;
                vpt[5] += evt.clientY - this.canvas.lastPosY;
                this.canvas.requestRenderAll();
                this.canvas.lastPosX = evt.clientX;
                this.canvas.lastPosY = evt.clientY;
            }
        });

        this.canvas.on('mouse:up', () => {
            this.canvas.isDragging = false;
            this.canvas.selection = true;
        });
    }

    // 清空画布
    clear() {
        this.canvas.clear();
        this.canvas.setBackgroundColor('#ffffff', () => {
            this.canvas.renderAll();
        });
    }

    // 导出画布为图片
    toDataURL(options = {}) {
        return this.canvas.toDataURL({
            format: 'png',
            quality: 1,
            ...options
        });
    }

    // 导出画布为 JSON
    toJSON() {
        return this.canvas.toJSON();
    }

    // 从 JSON 加载画布
    loadFromJSON(json) {
        this.canvas.loadFromJSON(json, () => {
            this.canvas.renderAll();
        });
    }

    // 获取画布尺寸
    getDimensions() {
        return {
            width: this.canvas.width,
            height: this.canvas.height
        };
    }

    // 设置画布尺寸
    setDimensions(width, height) {
        this.canvas.setWidth(width);
        this.canvas.setHeight(height);
        this.canvas.renderAll();
    }

    // 获取画布缩放
    getZoom() {
        return this.canvas.getZoom();
    }

    // 设置画布缩放
    setZoom(zoom) {
        this.canvas.setZoom(zoom);
        this.canvas.renderAll();
    }

    // 重置画布视图
    resetView() {
        this.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
        this.canvas.renderAll();
    }
} 