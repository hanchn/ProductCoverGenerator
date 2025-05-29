# Banner Editor

一个功能强大的 Banner 编辑器，支持自定义模板和丰富的编辑功能。

## 功能特点

- 🎨 丰富的模板库
- ✏️ 文本编辑（字体、大小、颜色等）
- 🖼️ 图片编辑（滤镜、亮度、对比度等）
- 📐 形状编辑（矩形、圆形、三角形等）
- 🎯 智能对齐
- 💾 保存/加载设计
- 📤 导出为图片
- 🎨 颜色提取和调色板生成
- ⌨️ 快捷键支持
- 📱 响应式设计

## 技术栈

- Vue 3
- Fabric.js
- SCSS
- Vite

## 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/banner-editor.git

# 进入项目目录
cd banner-editor

# 清理 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json yarn.lock

# 安装依赖
npm install --registry=https://registry.npmmirror.com

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 使用说明

### 基本操作

1. 选择模板
   - 从模板库中选择一个模板
   - 点击模板预览图应用模板

2. 添加元素
   - 点击"Add Text"添加文本
   - 点击"Add Shape"添加形状
   - 点击"Add Image"上传图片

3. 编辑元素
   - 双击文本进行编辑
   - 拖动元素调整位置
   - 使用控制点调整大小和旋转
   - 在属性面板中调整详细属性

4. 保存和导出
   - 点击"Save as JSON"保存设计
   - 点击"Export as Image"导出为图片
   - 点击"Import JSON"导入设计

### 快捷键

- `Ctrl/Cmd + C`: 复制选中元素
- `Ctrl/Cmd + V`: 粘贴元素
- `Ctrl/Cmd + Z`: 撤销
- `Ctrl/Cmd + Shift + Z`: 重做
- `Delete/Backspace`: 删除选中元素
- `Ctrl/Cmd + S`: 保存设计

### 模板系统

模板系统支持以下功能：

1. 预设模板
   - 现代简约风格
   - 几何风格
   - 渐变风格
   - 更多...

2. 自定义模板
   - 创建新模板
   - 编辑现有模板
   - 导入/导出模板

### 颜色系统

颜色系统提供以下功能：

1. 颜色提取
   - 从图片中提取主色调
   - 生成配色方案

2. 调色板生成
   - 类似色
   - 互补色
   - 三角色
   - 分裂互补色
   - 单色

## 项目结构

```
banner-editor/
├── src/
│   ├── core/
│   │   ├── renderer/
│   │   ├── editor/
│   │   ├── manager/
│   │   └── handler/
│   ├── components/
│   ├── utils/
│   ├── styles/
│   └── assets/
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 联系方式



