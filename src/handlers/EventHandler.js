export class EventHandler {
    constructor(generator) {
        this.generator = generator;
    }

    initEventListeners() {
        this.generator.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.generator.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.generator.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
        this.generator.canvas.addEventListener('click', this.handleCanvasClick.bind(this));
    }

    handleCanvasClick(e) {
        if (this.generator.isEditing) return;

        const rect = this.generator.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 检查是否点击了banner背景
        const backgroundElement = this.generator.currentTemplate.elements.find(el => el.type === 'background');
        if (backgroundElement && this.generator.isPointInElement(x, y, backgroundElement)) {
            // 选中banner上的所有可编辑元素
            this.generator.selectedElements.clear();
            this.generator.currentTemplate.elements.forEach(element => {
                if (element.editable && element.type !== 'background') {
                    this.generator.selectedElements.add(element);
                }
            });
            this.generator.showEditPanel();
            return;
        }

        // 检查是否点击了具体元素
        let clickedElement = null;
        this.generator.currentTemplate.elements.forEach(element => {
            if (element.editable && this.generator.isPointInElement(x, y, element)) {
                clickedElement = element;
            }
        });

        if (clickedElement) {
            if (e.shiftKey) {
                // Shift键按下时，添加到多选
                this.generator.selectedElements.add(clickedElement);
            } else {
                // 普通点击，只选中当前元素
                this.generator.selectedElements.clear();
                this.generator.selectedElements.add(clickedElement);
            }
            this.generator.selectedElement = clickedElement;
            this.generator.showEditPanel(clickedElement);
            
            if (clickedElement.type === 'text') {
                this.generator.textEditor.startTextEditing(clickedElement);
            }
        } else {
            this.generator.selectedElement = null;
            this.generator.selectedElements.clear();
            this.generator.editPanel.classList.remove('active');
        }
    }

    handleMouseDown(e) {
        const rect = this.generator.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.generator.currentTemplate.elements.forEach(element => {
            if (element.editable && this.generator.isPointInElement(x, y, element)) {
                this.generator.selectedElement = element;
                this.generator.isDragging = true;
                this.generator.dragStartX = x - element.x;
                this.generator.dragStartY = y - element.y;
            }
        });
    }

    handleMouseMove(e) {
        if (this.generator.isDragging && this.generator.selectedElement) {
            const rect = this.generator.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.generator.selectedElement.x = x - this.generator.dragStartX;
            this.generator.selectedElement.y = y - this.generator.dragStartY;

            this.generator.render();
        }
    }

    handleMouseUp() {
        this.generator.isDragging = false;
    }
} 