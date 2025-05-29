import { TextEditor } from './TextEditor';
import { ImageEditor } from './ImageEditor';
import { ShapeEditor } from './ShapeEditor';

export class EditorManager {
    constructor(canvasRenderer) {
        this.canvasRenderer = canvasRenderer;
        this.editors = new Map();
        this.activeEditor = null;

        // 初始化编辑器
        this.initEditors();
    }

    // 初始化编辑器
    initEditors() {
        this.editors.set('text', new TextEditor(this.canvasRenderer));
        this.editors.set('image', new ImageEditor(this.canvasRenderer));
        this.editors.set('shape', new ShapeEditor(this.canvasRenderer));
    }

    // 获取编辑器
    getEditor(type) {
        return this.editors.get(type);
    }

    // 激活编辑器
    activateEditor(type, element) {
        const editor = this.getEditor(type);
        if (!editor) {
            throw new Error(`Editor not found: ${type}`);
        }

        this.activeEditor = editor;
        editor.activate(element);
    }

    // 停用当前编辑器
    deactivateEditor() {
        if (this.activeEditor) {
            this.activeEditor.deactivate();
            this.activeEditor = null;
        }
    }

    // 处理元素选择
    handleElementSelection(element) {
        if (!element) {
            this.deactivateEditor();
            return;
        }

        const editor = this.getEditor(element.type);
        if (editor) {
            this.activateEditor(element.type, element);
        }
    }

    // 更新元素属性
    updateElement(element, properties) {
        const editor = this.getEditor(element.type);
        if (editor) {
            editor.updateProperties(element, properties);
        }
    }

    // 创建新元素
    createElement(type, config) {
        const editor = this.getEditor(type);
        if (!editor) {
            throw new Error(`Editor not found: ${type}`);
        }

        return editor.createElement(config);
    }

    // 删除元素
    deleteElement(element) {
        const editor = this.getEditor(element.type);
        if (editor) {
            editor.deleteElement(element);
        }
    }

    // 复制元素
    copyElement(element) {
        const editor = this.getEditor(element.type);
        if (editor) {
            return editor.copyElement(element);
        }
    }

    // 粘贴元素
    pasteElement(element) {
        const editor = this.getEditor(element.type);
        if (editor) {
            return editor.pasteElement(element);
        }
    }

    // 获取编辑器状态
    getEditorState() {
        if (!this.activeEditor) return null;
        return this.activeEditor.getState();
    }

    // 设置编辑器状态
    setEditorState(state) {
        if (!this.activeEditor) return;
        this.activeEditor.setState(state);
    }
} 