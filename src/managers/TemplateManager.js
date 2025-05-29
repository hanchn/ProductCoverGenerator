const templates = [
    // 1. 高端奢华模板（按钮文字居中修复版）
    {
        id: 'luxury-premium',
        name: '高端奢华',
        width: 800,
        height: 800,
        backgroundColor: '#667eea',
        objects: [
            // 背景装饰矩形
            { type: 'rect', left: 0, top: 0, width: 800, height: 400, fill: '#764ba2', rx: 0 },
            // 主产品图片
            { type: 'image', left: 80, top: 80, width: 600, height: 260, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', rx: 20 },
            // 装饰圆形（修正圆心位置）
            { type: 'circle', left: 120, top: 120, radius: 35, fill: 'rgba(255,255,255,0.1)' },
            { type: 'circle', left: 720, top: 720, radius: 30, fill: 'rgba(255,255,255,0.08)' },
            // 品牌标签
            { type: 'rect', left: 100, top: 120, width: 100, height: 35, fill: '#ffffff', rx: 17 },
            { type: 'i-text', text: 'PREMIUM', left: 150, top: 137.5, fontSize: 14, fill: '#667eea', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' },
            // 主标题
            { type: 'i-text', text: '奢华智能手表', left: 100, top: 380, fontSize: 36, fontWeight: 'bold', fill: '#ffffff', fontFamily: 'Microsoft YaHei' },
            // 副标题
            { type: 'i-text', text: '精工制造 · 品质之选', left: 100, top: 420, fontSize: 18, fill: '#ffffff', fontFamily: 'Microsoft YaHei' },
            // 特色标签
            { type: 'rect', left: 100, top: 460, width: 70, height: 25, fill: '#ffd700', rx: 12 },
            { type: 'i-text', text: '限量版', left: 135, top: 472.5, fontSize: 12, fill: '#333', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 价格区域
            { type: 'rect', left: 100, top: 510, width: 140, height: 50, fill: '#ffffff', rx: 12 },
            { type: 'i-text', text: '￥2,999', left: 115, top: 522, fontSize: 24, fill: '#e53935', fontWeight: 'bold', fontFamily: 'Arial' },
            { type: 'i-text', text: '原价 ￥3,999', left: 115, top: 545, fontSize: 10, fill: '#999', fontFamily: 'Microsoft YaHei' },
            // CTA按钮（文字完美居中）
            { type: 'rect', left: 450, top: 510, width: 120, height: 50, fill: '#ff6b6b', rx: 25 },
            { type: 'i-text', text: '立即购买', left: 510, top: 535, fontSize: 16, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' }
        ]
    },
    
    // 2. 现代简约模板（按钮文字居中修复版）
    {
        id: 'modern-minimal',
        name: '现代简约',
        width: 800,
        height: 800,
        backgroundColor: '#f8f9fa',
        objects: [
            // 左侧背景
            { type: 'rect', left: 0, top: 0, width: 300, height: 800, fill: '#74b9ff' },
            // 装饰三角形
            { type: 'triangle', left: 260, top: 200, width: 25, height: 25, fill: 'rgba(255,255,255,0.2)' },
            { type: 'triangle', left: 320, top: 400, width: 20, height: 20, fill: 'rgba(116,185,255,0.3)' },
            // 主产品图片
            { type: 'image', left: 340, top: 100, width: 420, height: 260, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', rx: 15 },
            // 品牌logo区域（修正圆心位置）
            { type: 'circle', left: 80, top: 100, radius: 30, fill: 'rgba(255,255,255,0.2)' },
            { type: 'i-text', text: 'LOGO', left: 80, top: 100, fontSize: 11, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' },
            // 主标题
            { type: 'i-text', text: '无线降噪耳机', left: 30, top: 200, fontSize: 28, fontWeight: 'bold', fill: '#ffffff', fontFamily: 'Microsoft YaHei' },
            // 特色描述
            { type: 'i-text', text: '• 主动降噪技术', left: 30, top: 250, fontSize: 13, fill: '#ffffff', fontFamily: 'Microsoft YaHei' },
            { type: 'i-text', text: '• 30小时续航', left: 30, top: 270, fontSize: 13, fill: '#ffffff', fontFamily: 'Microsoft YaHei' },
            { type: 'i-text', text: '• Hi-Res音质认证', left: 30, top: 290, fontSize: 13, fill: '#ffffff', fontFamily: 'Microsoft YaHei' },
            // 价格信息
            { type: 'i-text', text: '￥1,299', left: 340, top: 390, fontSize: 28, fill: '#0984e3', fontWeight: 'bold', fontFamily: 'Arial' },
            { type: 'i-text', text: '限时优惠价', left: 340, top: 420, fontSize: 11, fill: '#636e72', fontFamily: 'Microsoft YaHei' },
            // CTA按钮（文字完美居中）
            { type: 'rect', left: 340, top: 450, width: 400, height: 40, fill: '#00b894', rx: 20 },
            { type: 'i-text', text: '立即抢购', left: 540, top: 470, fontSize: 15, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 装饰线条
            { type: 'rect', left: 30, top: 520, width: 100, height: 2, fill: 'rgba(255,255,255,0.3)', rx: 1 },
            { type: 'i-text', text: '全球包邮 · 7天无理由退换', left: 30, top: 540, fontSize: 10, fill: 'rgba(255,255,255,0.8)', fontFamily: 'Microsoft YaHei' }
        ]
    },
    
    // 3. 科技未来模板（按钮文字居中修复版）
    {
        id: 'tech-future',
        name: '科技未来',
        width: 800,
        height: 800,
        backgroundColor: '#0c0c0c',
        objects: [
            // 发光边框
            { type: 'rect', left: 20, top: 20, width: 760, height: 760, fill: 'transparent', stroke: '#00d4ff', strokeWidth: 2, rx: 20 },
            // 主产品图片
            { type: 'image', left: 100, top: 80, width: 600, height: 240, src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800', rx: 15 },
            // 装饰线条
            { type: 'rect', left: 100, top: 350, width: 600, height: 2, fill: '#00d4ff' },
            { type: 'rect', left: 100, top: 370, width: 150, height: 1, fill: '#00d4ff' },
            { type: 'rect', left: 550, top: 370, width: 150, height: 1, fill: '#00d4ff' },
            // 产品标题
            { type: 'i-text', text: 'SMART WATCH', left: 100, top: 390, fontSize: 16, fill: '#00d4ff', fontFamily: 'Arial' },
            { type: 'i-text', text: '智能运动手表', left: 100, top: 415, fontSize: 30, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei' },
            // 科技特性标签（文字完美居中）
            { type: 'rect', left: 100, top: 470, width: 70, height: 20, fill: 'transparent', stroke: '#00d4ff', strokeWidth: 1, rx: 10 },
            { type: 'i-text', text: 'AI智能', left: 135, top: 480, fontSize: 10, fill: '#00d4ff', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            { type: 'rect', left: 190, top: 470, width: 70, height: 20, fill: 'transparent', stroke: '#00d4ff', strokeWidth: 1, rx: 10 },
            { type: 'i-text', text: '健康监测', left: 225, top: 480, fontSize: 10, fill: '#00d4ff', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            { type: 'rect', left: 280, top: 470, width: 70, height: 20, fill: 'transparent', stroke: '#00d4ff', strokeWidth: 1, rx: 10 },
            { type: 'i-text', text: '防水设计', left: 315, top: 480, fontSize: 10, fill: '#00d4ff', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 价格显示
            { type: 'i-text', text: '￥1,999', left: 100, top: 520, fontSize: 32, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial' },
            // 购买按钮（文字完美居中）
            { type: 'rect', left: 450, top: 510, width: 120, height: 45, fill: '#00d4ff', rx: 22 },
            { type: 'i-text', text: 'BUY NOW', left: 510, top: 532.5, fontSize: 13, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' }
        ]
    },
    
    // 4. 清新自然模板
    {
        id: 'fresh-natural',
        name: '清新自然',
        width: 800,
        height: 800,
        backgroundColor: '#f0f8f0',
        objects: [
            // 顶部绿色背景
            { type: 'rect', left: 0, top: 0, width: 800, height: 300, fill: '#4CAF50', rx: 0 },
            // 装饰叶子形状（用圆形模拟）
            { type: 'circle', left: 100, top: 80, radius: 25, fill: 'rgba(255,255,255,0.2)' },
            { type: 'circle', left: 700, top: 120, radius: 20, fill: 'rgba(255,255,255,0.15)' },
            { type: 'circle', left: 650, top: 200, radius: 30, fill: 'rgba(255,255,255,0.1)' },
            // 主产品图片
            { type: 'image', left: 100, top: 100, width: 600, height: 250, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800', rx: 20 },
            // 有机认证标签
            { type: 'circle', left: 150, top: 150, radius: 40, fill: '#ffffff' },
            { type: 'i-text', text: '有机', left: 150, top: 145, fontSize: 14, fill: '#4CAF50', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            { type: 'i-text', text: '认证', left: 150, top: 160, fontSize: 12, fill: '#4CAF50', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 产品标题
            { type: 'i-text', text: '天然有机护肤品', left: 100, top: 380, fontSize: 36, fontWeight: 'bold', fill: '#2E7D32', fontFamily: 'Microsoft YaHei' },
            { type: 'i-text', text: '源自大自然的呵护', left: 100, top: 420, fontSize: 18, fill: '#4CAF50', fontFamily: 'Microsoft YaHei' },
            // 特色标签
            { type: 'rect', left: 100, top: 460, width: 80, height: 25, fill: '#81C784', rx: 12 },
            { type: 'i-text', text: '零添加', left: 140, top: 472.5, fontSize: 12, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            { type: 'rect', left: 200, top: 460, width: 80, height: 25, fill: '#81C784', rx: 12 },
            { type: 'i-text', text: '敏感肌', left: 240, top: 472.5, fontSize: 12, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 价格信息
            { type: 'i-text', text: '￥168', left: 100, top: 520, fontSize: 32, fill: '#2E7D32', fontWeight: 'bold', fontFamily: 'Arial' },
            { type: 'i-text', text: '会员价 ￥128', left: 100, top: 555, fontSize: 14, fill: '#4CAF50', fontFamily: 'Microsoft YaHei' },
            // 购买按钮
            { type: 'rect', left: 450, top: 520, width: 140, height: 50, fill: '#4CAF50', rx: 25 },
            { type: 'i-text', text: '立即体验', left: 520, top: 545, fontSize: 16, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' }
        ]
    },
    
    // 5. 时尚潮流模板
    {
        id: 'fashion-trendy',
        name: '时尚潮流',
        width: 800,
        height: 800,
        backgroundColor: '#000000',
        objects: [
            // 对角线装饰
            { type: 'rect', left: 0, top: 0, width: 400, height: 800, fill: '#FF6B9D', rx: 0, angle: 15 },
            // 主产品图片
            { type: 'image', left: 150, top: 100, width: 500, height: 300, src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', rx: 15 },
            // 品牌logo区域
            { type: 'rect', left: 50, top: 50, width: 100, height: 40, fill: '#ffffff', rx: 20 },
            { type: 'i-text', text: 'FASHION', left: 100, top: 70, fontSize: 12, fill: '#FF6B9D', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' },
            // 新品标签
            { type: 'rect', left: 600, top: 120, width: 60, height: 60, fill: '#FFD700', rx: 30 },
            { type: 'i-text', text: 'NEW', left: 630, top: 140, fontSize: 12, fill: '#000000', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' },
            { type: 'i-text', text: '新品', left: 630, top: 155, fontSize: 10, fill: '#000000', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 产品标题
            { type: 'i-text', text: 'TRENDY SNEAKERS', left: 100, top: 450, fontSize: 24, fill: '#FF6B9D', fontWeight: 'bold', fontFamily: 'Arial' },
            { type: 'i-text', text: '潮流运动鞋', left: 100, top: 480, fontSize: 32, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei' },
            // 特色描述
            { type: 'i-text', text: '• 限量发售', left: 100, top: 530, fontSize: 14, fill: '#FF6B9D', fontFamily: 'Microsoft YaHei' },
            { type: 'i-text', text: '• 明星同款', left: 100, top: 550, fontSize: 14, fill: '#FF6B9D', fontFamily: 'Microsoft YaHei' },
            { type: 'i-text', text: '• 舒适透气', left: 100, top: 570, fontSize: 14, fill: '#FF6B9D', fontFamily: 'Microsoft YaHei' },
            // 价格
            { type: 'i-text', text: '￥899', left: 450, top: 530, fontSize: 28, fill: '#FFD700', fontWeight: 'bold', fontFamily: 'Arial' },
            { type: 'i-text', text: '预售价', left: 450, top: 560, fontSize: 12, fill: '#ffffff', fontFamily: 'Microsoft YaHei' },
            // 购买按钮
            { type: 'rect', left: 450, top: 590, width: 120, height: 45, fill: '#FF6B9D', rx: 22 },
            { type: 'i-text', text: '抢先预订', left: 510, top: 612.5, fontSize: 14, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' }
        ]
    },
    
    // 6. 商务专业模板
    {
        id: 'business-professional',
        name: '商务专业',
        width: 800,
        height: 800,
        backgroundColor: '#f5f5f5',
        objects: [
            // 顶部深蓝背景
            { type: 'rect', left: 0, top: 0, width: 800, height: 200, fill: '#1565C0', rx: 0 },
            // 装饰线条
            { type: 'rect', left: 0, top: 200, width: 800, height: 4, fill: '#FFB300', rx: 0 },
            // 主产品图片
            { type: 'image', left: 100, top: 80, width: 600, height: 280, src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800', rx: 10 },
            // 企业logo区域
            { type: 'rect', left: 50, top: 50, width: 120, height: 35, fill: '#ffffff', rx: 5 },
            { type: 'i-text', text: 'ENTERPRISE', left: 110, top: 67.5, fontSize: 11, fill: '#1565C0', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' },
            // 认证标志
            { type: 'rect', left: 650, top: 50, width: 80, height: 25, fill: '#FFB300', rx: 12 },
            { type: 'i-text', text: 'ISO认证', left: 690, top: 62.5, fontSize: 10, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 产品标题
            { type: 'i-text', text: '企业级解决方案', left: 100, top: 400, fontSize: 32, fontWeight: 'bold', fill: '#1565C0', fontFamily: 'Microsoft YaHei' },
            { type: 'i-text', text: 'Professional Business Solutions', left: 100, top: 440, fontSize: 16, fill: '#666666', fontFamily: 'Arial' },
            // 特色功能
            { type: 'rect', left: 100, top: 480, width: 15, height: 15, fill: '#FFB300', rx: 2 },
            { type: 'i-text', text: '云端部署，安全可靠', left: 125, top: 485, fontSize: 14, fill: '#333333', fontFamily: 'Microsoft YaHei' },
            { type: 'rect', left: 100, top: 510, width: 15, height: 15, fill: '#FFB300', rx: 2 },
            { type: 'i-text', text: '7x24小时技术支持', left: 125, top: 515, fontSize: 14, fill: '#333333', fontFamily: 'Microsoft YaHei' },
            { type: 'rect', left: 100, top: 540, width: 15, height: 15, fill: '#FFB300', rx: 2 },
            { type: 'i-text', text: '定制化服务方案', left: 125, top: 545, fontSize: 14, fill: '#333333', fontFamily: 'Microsoft YaHei' },
            // 价格信息
            { type: 'i-text', text: '￥9,999', left: 450, top: 480, fontSize: 28, fill: '#1565C0', fontWeight: 'bold', fontFamily: 'Arial' },
            { type: 'i-text', text: '起/年', left: 550, top: 495, fontSize: 14, fill: '#666666', fontFamily: 'Microsoft YaHei' },
            // 联系按钮
            { type: 'rect', left: 450, top: 530, width: 120, height: 45, fill: '#1565C0', rx: 5 },
            { type: 'i-text', text: '立即咨询', left: 510, top: 552.5, fontSize: 16, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' }
        ]
    },
    
    // 7. 美食诱惑模板
    {
        id: 'food-delicious',
        name: '美食诱惑',
        width: 800,
        height: 800,
        backgroundColor: '#FFF8E1',
        objects: [
            // 温暖背景渐变效果（用矩形模拟）
            { type: 'rect', left: 0, top: 0, width: 800, height: 400, fill: '#FF8F00', rx: 0 },
            { type: 'rect', left: 0, top: 300, width: 800, height: 200, fill: '#FFA726', rx: 0 },
            // 装饰圆点
            { type: 'circle', left: 80, top: 80, radius: 20, fill: 'rgba(255,255,255,0.3)' },
            { type: 'circle', left: 720, top: 120, radius: 15, fill: 'rgba(255,255,255,0.2)' },
            { type: 'circle', left: 650, top: 250, radius: 25, fill: 'rgba(255,255,255,0.25)' },
            // 主产品图片
            { type: 'image', left: 100, top: 100, width: 600, height: 280, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800', rx: 20 },
            // 新鲜标签
            { type: 'rect', left: 120, top: 120, width: 80, height: 30, fill: '#4CAF50', rx: 15 },
            { type: 'i-text', text: '新鲜直达', left: 160, top: 135, fontSize: 12, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 热销标志
            { type: 'circle', left: 650, top: 150, radius: 35, fill: '#F44336' },
            { type: 'i-text', text: 'HOT', left: 650, top: 145, fontSize: 12, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' },
            { type: 'i-text', text: '热销', left: 650, top: 160, fontSize: 10, fill: '#ffffff', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 产品标题
            { type: 'i-text', text: '精选美食套餐', left: 100, top: 420, fontSize: 36, fontWeight: 'bold', fill: '#BF360C', fontFamily: 'Microsoft YaHei' },
            { type: 'i-text', text: '舌尖上的享受', left: 100, top: 460, fontSize: 18, fill: '#FF8F00', fontFamily: 'Microsoft YaHei' },
            // 特色标签
            { type: 'rect', left: 100, top: 500, width: 70, height: 25, fill: '#FF5722', rx: 12 },
            { type: 'i-text', text: '包邮', left: 135, top: 512.5, fontSize: 12, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            { type: 'rect', left: 190, top: 500, width: 70, height: 25, fill: '#FF5722', rx: 12 },
            { type: 'i-text', text: '冷链', left: 225, top: 512.5, fontSize: 12, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            { type: 'rect', left: 280, top: 500, width: 70, height: 25, fill: '#FF5722', rx: 12 },
            { type: 'i-text', text: '当日达', left: 315, top: 512.5, fontSize: 12, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' },
            // 价格信息
            { type: 'i-text', text: '￥88', left: 100, top: 560, fontSize: 32, fill: '#F44336', fontWeight: 'bold', fontFamily: 'Arial' },
            { type: 'i-text', text: '限时特价', left: 180, top: 575, fontSize: 14, fill: '#FF8F00', fontFamily: 'Microsoft YaHei' },
            // 购买按钮
            { type: 'rect', left: 450, top: 550, width: 120, height: 50, fill: '#F44336', rx: 25 },
            { type: 'i-text', text: '立即品尝', left: 510, top: 575, fontSize: 16, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', originX: 'center', originY: 'center' }
        ]
    },
    
    // 8. 极简艺术模板
    {
        id: 'minimal-art',
        name: '极简艺术',
        width: 800,
        height: 800,
        backgroundColor: '#ffffff',
        objects: [
            // 几何装饰线条
            { type: 'rect', left: 50, top: 50, width: 200, height: 2, fill: '#E0E0E0', rx: 1 },
            { type: 'rect', left: 550, top: 750, width: 200, height: 2, fill: '#E0E0E0', rx: 1 },
            { type: 'rect', left: 50, top: 50, width: 2, height: 100, fill: '#E0E0E0', rx: 1 },
            { type: 'rect', left: 748, top: 650, width: 2, height: 100, fill: '#E0E0E0', rx: 1 },
            // 主产品图片
            { type: 'image', left: 200, top: 150, width: 400, height: 300, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800', rx: 0 },
            // 极简标签
            { type: 'rect', left: 220, top: 170, width: 60, height: 20, fill: '#000000', rx: 0 },
            { type: 'i-text', text: 'MINIMAL', left: 250, top: 180, fontSize: 8, fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' },
            // 产品编号
            { type: 'i-text', text: 'No.001', left: 520, top: 170, fontSize: 12, fill: '#BDBDBD', fontFamily: 'Arial' },
            // 产品标题
            { type: 'i-text', text: 'PURE DESIGN', left: 200, top: 500, fontSize: 28, fontWeight: 'bold', fill: '#000000', fontFamily: 'Arial' },
            { type: 'i-text', text: '纯粹设计美学', left: 200, top: 535, fontSize: 16, fill: '#757575', fontFamily: 'Microsoft YaHei' },
            // 设计理念
            { type: 'i-text', text: '"Less is More"', left: 200, top: 570, fontSize: 14, fill: '#BDBDBD', fontFamily: 'Arial', fontStyle: 'italic' },
            // 价格（极简风格）
            { type: 'i-text', text: '¥', left: 200, top: 620, fontSize: 16, fill: '#000000', fontFamily: 'Arial' },
            { type: 'i-text', text: '599', left: 220, top: 620, fontSize: 32, fill: '#000000', fontWeight: 'bold', fontFamily: 'Arial' },
            // 购买按钮（极简风格）
            { type: 'rect', left: 450, top: 610, width: 100, height: 40, fill: 'transparent', stroke: '#000000', strokeWidth: 1, rx: 0 },
            { type: 'i-text', text: 'BUY NOW', left: 500, top: 630, fontSize: 12, fill: '#000000', fontWeight: 'bold', fontFamily: 'Arial', originX: 'center', originY: 'center' }
        ]
    }
];

function getAllTemplates() {
    return templates;
}

export default {
    getAllTemplates
};

function getDefaultTemplates() {
    return [
        {
            id: 'template1',
            name: '主图+标题+价格',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 600,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'i-text',
                    text: '主标题',
                    left: 400,
                    top: 650,
                    fontSize: 36,
                    fontFamily: 'Arial',
                    fill: '#333333',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                },
                {
                    type: 'i-text',
                    text: '¥ 299.00',
                    left: 400,
                    top: 720,
                    fontSize: 48,
                    fontFamily: 'Arial',
                    fill: '#ff4400',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                }
            ]
        },
        {
            id: 'template2',
            name: '主图+促销标签',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 800,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'rect',
                    left: 20,
                    top: 20,
                    width: 120,
                    height: 40,
                    fill: '#ff4400',
                    angle: -15
                },
                {
                    type: 'i-text',
                    text: '限时特惠',
                    left: 80,
                    top: 40,
                    fontSize: 24,
                    fontFamily: 'Arial',
                    fill: '#ffffff',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center',
                    angle: -15
                }
            ]
        },
        {
            id: 'template3',
            name: '主图+卖点列表',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 600,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'i-text',
                    text: '产品卖点',
                    left: 400,
                    top: 650,
                    fontSize: 32,
                    fontFamily: 'Arial',
                    fill: '#333333',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                },
                {
                    type: 'i-text',
                    text: '• 高品质材料\n• 专业工艺\n• 售后保障',
                    left: 400,
                    top: 720,
                    fontSize: 24,
                    fontFamily: 'Arial',
                    fill: '#666666',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center',
                    lineHeight: 1.5
                }
            ]
        },
        {
            id: 'template4',
            name: '主图+对比图',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 380,
                    height: 380,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'rect',
                    left: 420,
                    top: 0,
                    width: 380,
                    height: 380,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'i-text',
                    text: 'VS',
                    left: 400,
                    top: 190,
                    fontSize: 48,
                    fontFamily: 'Arial',
                    fill: '#ff4400',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                }
            ]
        },
        {
            id: 'template5',
            name: '主图+优惠券',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 600,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'rect',
                    left: 100,
                    top: 650,
                    width: 600,
                    height: 100,
                    fill: '#fff5f5',
                    rx: 10,
                    ry: 10
                },
                {
                    type: 'i-text',
                    text: '优惠券',
                    left: 400,
                    top: 700,
                    fontSize: 32,
                    fontFamily: 'Arial',
                    fill: '#ff4400',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                }
            ]
        },
        {
            id: 'template6',
            name: '主图+倒计时',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 600,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'rect',
                    left: 200,
                    top: 650,
                    width: 400,
                    height: 80,
                    fill: '#333333',
                    rx: 5,
                    ry: 5
                },
                {
                    type: 'i-text',
                    text: '距结束还剩 23:59:59',
                    left: 400,
                    top: 690,
                    fontSize: 28,
                    fontFamily: 'Arial',
                    fill: '#ffffff',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                }
            ]
        },
        {
            id: 'template7',
            name: '主图+评分',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 600,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'i-text',
                    text: '★★★★★',
                    left: 400,
                    top: 650,
                    fontSize: 36,
                    fontFamily: 'Arial',
                    fill: '#ffb800',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                },
                {
                    type: 'i-text',
                    text: '4.9分 | 已售1000+',
                    left: 400,
                    top: 720,
                    fontSize: 24,
                    fontFamily: 'Arial',
                    fill: '#666666',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                }
            ]
        },
        {
            id: 'template8',
            name: '主图+品牌',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 600,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'rect',
                    left: 0,
                    top: 650,
                    width: 800,
                    height: 150,
                    fill: '#f8f8f8'
                },
                {
                    type: 'i-text',
                    text: 'BRAND NAME',
                    left: 400,
                    top: 725,
                    fontSize: 36,
                    fontFamily: 'Arial',
                    fill: '#333333',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                }
            ]
        },
        {
            id: 'template9',
            name: '主图+场景',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 600,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'rect',
                    left: 0,
                    top: 650,
                    width: 800,
                    height: 150,
                    fill: '#f0f9ff'
                },
                {
                    type: 'i-text',
                    text: '使用场景',
                    left: 400,
                    top: 725,
                    fontSize: 32,
                    fontFamily: 'Arial',
                    fill: '#333333',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                }
            ]
        },
        {
            id: 'template10',
            name: '主图+规格',
            width: 800,
            height: 800,
            objects: [
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 600,
                    fill: '#ffffff',
                    selectable: false
                },
                {
                    type: 'rect',
                    left: 100,
                    top: 650,
                    width: 600,
                    height: 100,
                    fill: '#f8f8f8',
                    rx: 10,
                    ry: 10
                },
                {
                    type: 'i-text',
                    text: '规格：S/M/L/XL',
                    left: 400,
                    top: 700,
                    fontSize: 28,
                    fontFamily: 'Arial',
                    fill: '#333333',
                    textAlign: 'center',
                    originX: 'center',
                    originY: 'center'
                }
            ]
        }
    ];
}