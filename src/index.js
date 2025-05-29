import { createApp } from 'vue';
import App from './components/App.vue';
import './styles/main.scss';

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 获取画布元素
    const canvasElement = document.getElementById('canvas');
    
    // 初始化应用
    // const app = new App(canvasElement); // 这行不再需要，由 Vue 组件负责初始化 canvas

    // 导出到全局，方便调试
    // window.app = app; // 这行不再需要

    // 设置模板选择事件
    // const templateSelect = document.getElementById('template-select');
    // if (templateSelect) {
    //     templateSelect.addEventListener('change', (e) => {
    //         app.templateManager.applyTemplate(e.target.value);
    //     });

    //     // 加载模板列表
    //     const templates = app.templateManager.getAllTemplates();
    //     templates.forEach(template => {
    //         const option = document.createElement('option');
    //         option.value = template.id;
    //         option.textContent = template.name;
    //         templateSelect.appendChild(option);
    //     });
    // }

    // 设置导出按钮事件
    // const exportButton = document.getElementById('export-button');
    // if (exportButton) {
    //     exportButton.addEventListener('click', async () => {
    //         const dataUrl = await app.exportToImage();
    //         const link = document.createElement('a');
    //         link.href = dataUrl;
    //         link.download = 'banner.png';
    //         link.click();
    //     });
    // }

    // 设置保存按钮事件
    // const saveButton = document.getElementById('save-button');
    // if (saveButton) {
    //     saveButton.addEventListener('click', () => {
    //         const json = app.exportToJson();
    //         const blob = new Blob([json], { type: 'application/json' });
    //         const url = URL.createObjectURL(blob);
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.download = 'banner.json';
    //         link.click();
    //         URL.revokeObjectURL(url);
    //     });
    // }

    // 设置导入按钮事件
    // const importButton = document.getElementById('import-button');
    // if (importButton) {
    //     importButton.addEventListener('click', () => {
    //         const input = document.createElement('input');
    //         input.type = 'file';
    //         input.accept = '.json';
    //         input.onchange = (e) => {
    //             const file = e.target.files[0];
    //             if (file) {
    //                 const reader = new FileReader();
    //                 reader.onload = (e) => {
    //                     app.importFromJson(e.target.result);
    //                 };
    //                 reader.readAsText(file);
    //             }
    //         };
    //         input.click();
    //     });
    // }

    // 设置图片上传事件
    // const imageUpload = document.getElementById('image-upload');
    // if (imageUpload) {
    //     imageUpload.addEventListener('change', (e) => {
    //         const file = e.target.files[0];
    //         if (file) {
    //             const reader = new FileReader();
    //             reader.onload = (e) => {
    //                 app.editorManager.createElement('image', {
    //                     src: e.target.result
    //                 });
    //             };
    //             reader.readAsDataURL(file);
    //         }
    //     });
    // }

    // 设置形状添加事件
    // const addShapeButton = document.getElementById('add-shape-button');
    // if (addShapeButton) {
    //     addShapeButton.addEventListener('click', () => {
    //         app.editorManager.createElement('shape', {
    //             shape: 'rectangle',
    //             left: 100,
    //             top: 100,
    //             width: 100,
    //             height: 100
    //         });
    //     });
    // }
});

const app = createApp(App);
app.mount('#app'); 