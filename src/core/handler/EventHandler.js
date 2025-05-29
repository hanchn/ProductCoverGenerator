export class EventHandler {
    constructor(canvasRenderer, editorManager) {
        this.canvasRenderer = canvasRenderer;
        this.editorManager = editorManager;
        this.history = [];
        this.historyIndex = -1;
        this.maxHistoryLength = 50;
    }

    // 初始化事件处理
    init() {
        this.setupCanvasEvents();
        this.setupKeyboardEvents();
        this.setupDragAndDrop();
    }

    // 设置画布事件
    setupCanvasEvents() {
        const canvas = this.canvasRenderer.canvas;

        // 选择事件
        canvas.on('selection:created', (e) => {
            this.editorManager.handleElementSelection(e.selected[0]);
        });

        canvas.on('selection:updated', (e) => {
            this.editorManager.handleElementSelection(e.selected[0]);
        });

        canvas.on('selection:cleared', () => {
            this.editorManager.handleElementSelection(null);
        });

        // 修改事件
        canvas.on('object:modified', (e) => {
            this.addToHistory();
        });

        canvas.on('object:moving', (e) => {
            this.updateSnapGuides(e.target);
        });

        canvas.on('object:scaling', (e) => {
            this.updateSnapGuides(e.target);
        });

        canvas.on('object:rotating', (e) => {
            this.updateSnapGuides(e.target);
        });
    }

    // 设置键盘事件
    setupKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()) {
                    case 'c':
                        this.handleCopy();
                        break;
                    case 'v':
                        this.handlePaste();
                        break;
                    case 'z':
                        if (e.shiftKey) {
                            this.handleRedo();
                        } else {
                            this.handleUndo();
                        }
                        break;
                    case 'y':
                        this.handleRedo();
                        break;
                    case 's':
                        e.preventDefault();
                        this.handleSave();
                        break;
                }
            } else if (e.key === 'Delete' || e.key === 'Backspace') {
                this.handleDelete();
            }
        });
    }

    // 设置拖放事件
    setupDragAndDrop() {
        const canvas = this.canvasRenderer.canvas;
        const dropZone = canvas.wrapperEl;

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFileDrop(files[0]);
            }
        });
    }

    // 处理文件拖放
    async handleFileDrop(file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.editorManager.createElement('image', {
                    src: e.target.result
                });
            };
            reader.readAsDataURL(file);
        }
    }

    // 处理复制
    handleCopy() {
        const activeObject = this.canvasRenderer.canvas.getActiveObject();
        if (activeObject) {
            const editor = this.editorManager.getEditor(activeObject.type);
            if (editor) {
                const copiedData = editor.copyElement(activeObject);
                localStorage.setItem('clipboard', JSON.stringify(copiedData));
            }
        }
    }

    // 处理粘贴
    handlePaste() {
        const clipboard = localStorage.getItem('clipboard');
        if (clipboard) {
            const data = JSON.parse(clipboard);
            const editor = this.editorManager.getEditor(data.type);
            if (editor) {
                editor.pasteElement(data);
            }
        }
    }

    // 处理删除
    handleDelete() {
        const activeObject = this.canvasRenderer.canvas.getActiveObject();
        if (activeObject) {
            const editor = this.editorManager.getEditor(activeObject.type);
            if (editor) {
                editor.deleteElement(activeObject);
                this.addToHistory();
            }
        }
    }

    // 处理撤销
    handleUndo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.restoreState(this.history[this.historyIndex]);
        }
    }

    // 处理重做
    handleRedo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.restoreState(this.history[this.historyIndex]);
        }
    }

    // 处理保存
    handleSave() {
        const data = this.canvasRenderer.canvas.toJSON();
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'banner.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    // 添加到历史记录
    addToHistory() {
        const state = this.canvasRenderer.canvas.toJSON();
        
        // 如果当前不是最新状态，删除之后的状态
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }

        // 添加新状态
        this.history.push(state);
        this.historyIndex = this.history.length - 1;

        // 限制历史记录长度
        if (this.history.length > this.maxHistoryLength) {
            this.history.shift();
            this.historyIndex--;
        }
    }

    // 恢复状态
    restoreState(state) {
        this.canvasRenderer.canvas.loadFromJSON(state, () => {
            this.canvasRenderer.canvas.renderAll();
        });
    }

    // 更新对齐辅助线
    updateSnapGuides(target) {
        const canvas = this.canvasRenderer.canvas;
        const objects = canvas.getObjects();
        const targetBounds = target.getBoundingRect();
        
        // 清除现有的辅助线
        this.clearSnapGuides();

        // 检查水平对齐
        objects.forEach(obj => {
            if (obj !== target) {
                const objBounds = obj.getBoundingRect();
                
                // 水平对齐
                if (Math.abs(targetBounds.top - objBounds.top) < 10) {
                    this.drawSnapGuide('horizontal', targetBounds.top);
                }
                if (Math.abs(targetBounds.bottom - objBounds.bottom) < 10) {
                    this.drawSnapGuide('horizontal', targetBounds.bottom);
                }
                if (Math.abs(targetBounds.centerY - objBounds.centerY) < 10) {
                    this.drawSnapGuide('horizontal', targetBounds.centerY);
                }

                // 垂直对齐
                if (Math.abs(targetBounds.left - objBounds.left) < 10) {
                    this.drawSnapGuide('vertical', targetBounds.left);
                }
                if (Math.abs(targetBounds.right - objBounds.right) < 10) {
                    this.drawSnapGuide('vertical', targetBounds.right);
                }
                if (Math.abs(targetBounds.centerX - objBounds.centerX) < 10) {
                    this.drawSnapGuide('vertical', targetBounds.centerX);
                }
            }
        });
    }

    // 绘制对齐辅助线
    drawSnapGuide(type, position) {
        const canvas = this.canvasRenderer.canvas;
        const line = new fabric.Line(
            type === 'horizontal' 
                ? [0, position, canvas.width, position]
                : [position, 0, position, canvas.height],
            {
                stroke: '#00a8ff',
                strokeWidth: 1,
                selectable: false,
                evented: false
            }
        );
        canvas.add(line);
        canvas.renderAll();
    }

    // 清除对齐辅助线
    clearSnapGuides() {
        const canvas = this.canvasRenderer.canvas;
        const objects = canvas.getObjects();
        objects.forEach(obj => {
            if (obj.type === 'line' && obj.stroke === '#00a8ff') {
                canvas.remove(obj);
            }
        });
        canvas.renderAll();
    }
} 