export const templates = [
    // 1. 亚马逊产品主图模板
    {
        id: 'amazon-main-image',
        name: '亚马逊主图模板',
        width: 2000,
        height: 2000,
        backgroundColor: '#ffffff',
        elements: [
            {
                type: 'image',
                left: 400,
                top: 400,
                width: 1200,
                height: 1200,
                placeholder: true,
                placeholderText: '产品图片'
            },
            {
                type: 'text',
                text: 'NEW ARRIVAL',
                left: 100,
                top: 100,
                fontSize: 48,
                fontFamily: 'Arial Black',
                fill: '#FF6B35',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '限时优惠',
                left: 100,
                top: 1800,
                fontSize: 64,
                fontFamily: 'Microsoft YaHei',
                fill: '#E74C3C',
                fontWeight: 'bold'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 1600,
                top: 100,
                width: 300,
                height: 120,
                fill: '#FF6B35',
                rx: 20,
                ry: 20
            },
            {
                type: 'text',
                text: '50% OFF',
                left: 1650,
                top: 130,
                fontSize: 48,
                fontFamily: 'Arial Black',
                fill: '#ffffff',
                fontWeight: 'bold'
            }
        ]
    },
    
    // 2. 亚马逊A+页面模板
    {
        id: 'amazon-aplus',
        name: '亚马逊A+页面模板',
        width: 1464,
        height: 600,
        backgroundColor: '#ffffff',
        elements: [
            {
                type: 'image',
                left: 50,
                top: 50,
                width: 500,
                height: 500,
                placeholder: true,
                placeholderText: '产品图片'
            },
            {
                type: 'text',
                text: '产品特色',
                left: 600,
                top: 80,
                fontSize: 48,
                fontFamily: 'Microsoft YaHei',
                fill: '#232F3E',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '✓ 高品质材料制造',
                left: 600,
                top: 160,
                fontSize: 28,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333'
            },
            {
                type: 'text',
                text: '✓ 30天无理由退换',
                left: 600,
                top: 220,
                fontSize: 28,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333'
            },
            {
                type: 'text',
                text: '✓ 全球免费配送',
                left: 600,
                top: 280,
                fontSize: 28,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333'
            },
            {
                type: 'text',
                text: '✓ 24/7客户服务',
                left: 600,
                top: 340,
                fontSize: 28,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 600,
                top: 420,
                width: 300,
                height: 80,
                fill: '#FF9900',
                rx: 10,
                ry: 10
            },
            {
                type: 'text',
                text: '立即购买',
                left: 700,
                top: 445,
                fontSize: 32,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                fontWeight: 'bold'
            }
        ]
    },
    
    // 3. 促销横幅模板
    {
        id: 'amazon-promotion-banner',
        name: '促销横幅模板',
        width: 1500,
        height: 500,
        backgroundColor: 'linear-gradient(135deg, #FF6B35, #F7931E)',
        elements: [
            {
                type: 'text',
                text: 'BLACK FRIDAY',
                left: 100,
                top: 80,
                fontSize: 72,
                fontFamily: 'Arial Black',
                fill: '#ffffff',
                fontWeight: 'bold',
                shadow: {
                    color: 'rgba(0,0,0,0.3)',
                    blur: 10,
                    offsetX: 5,
                    offsetY: 5
                }
            },
            {
                type: 'text',
                text: '高达70%折扣',
                left: 100,
                top: 180,
                fontSize: 48,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '限时抢购 | 数量有限',
                left: 100,
                top: 250,
                fontSize: 32,
                fontFamily: 'Microsoft YaHei',
                fill: '#FFE4B5'
            },
            {
                type: 'image',
                left: 900,
                top: 50,
                width: 400,
                height: 400,
                placeholder: true,
                placeholderText: '产品图片'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 100,
                top: 320,
                width: 250,
                height: 80,
                fill: '#ffffff',
                rx: 15,
                ry: 15
            },
            {
                type: 'text',
                text: '立即抢购',
                left: 170,
                top: 345,
                fontSize: 32,
                fontFamily: 'Microsoft YaHei',
                fill: '#FF6B35',
                fontWeight: 'bold'
            }
        ]
    },
    
    // 4. 产品对比模板
    {
        id: 'amazon-product-comparison',
        name: '产品对比模板',
        width: 1200,
        height: 800,
        backgroundColor: '#F8F9FA',
        elements: [
            {
                type: 'text',
                text: '产品对比',
                left: 500,
                top: 50,
                fontSize: 48,
                fontFamily: 'Microsoft YaHei',
                fill: '#232F3E',
                fontWeight: 'bold'
            },
            // 产品1
            {
                type: 'shape',
                shape: 'rectangle',
                left: 100,
                top: 150,
                width: 300,
                height: 500,
                fill: '#ffffff',
                stroke: '#E1E8ED',
                strokeWidth: 2,
                rx: 10,
                ry: 10
            },
            {
                type: 'image',
                left: 150,
                top: 180,
                width: 200,
                height: 200,
                placeholder: true,
                placeholderText: '产品1'
            },
            {
                type: 'text',
                text: '基础版',
                left: 220,
                top: 400,
                fontSize: 32,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '￥199',
                left: 230,
                top: 450,
                fontSize: 36,
                fontFamily: 'Arial',
                fill: '#E74C3C',
                fontWeight: 'bold'
            },
            // 产品2
            {
                type: 'shape',
                shape: 'rectangle',
                left: 450,
                top: 150,
                width: 300,
                height: 500,
                fill: '#ffffff',
                stroke: '#FF9900',
                strokeWidth: 3,
                rx: 10,
                ry: 10
            },
            {
                type: 'text',
                text: '推荐',
                left: 570,
                top: 120,
                fontSize: 24,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                fontWeight: 'bold',
                backgroundColor: '#FF9900',
                padding: 10
            },
            {
                type: 'image',
                left: 500,
                top: 180,
                width: 200,
                height: 200,
                placeholder: true,
                placeholderText: '产品2'
            },
            {
                type: 'text',
                text: '专业版',
                left: 570,
                top: 400,
                fontSize: 32,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '￥299',
                left: 580,
                top: 450,
                fontSize: 36,
                fontFamily: 'Arial',
                fill: '#E74C3C',
                fontWeight: 'bold'
            },
            // 产品3
            {
                type: 'shape',
                shape: 'rectangle',
                left: 800,
                top: 150,
                width: 300,
                height: 500,
                fill: '#ffffff',
                stroke: '#E1E8ED',
                strokeWidth: 2,
                rx: 10,
                ry: 10
            },
            {
                type: 'image',
                left: 850,
                top: 180,
                width: 200,
                height: 200,
                placeholder: true,
                placeholderText: '产品3'
            },
            {
                type: 'text',
                text: '旗舰版',
                left: 920,
                top: 400,
                fontSize: 32,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '￥399',
                left: 930,
                top: 450,
                fontSize: 36,
                fontFamily: 'Arial',
                fill: '#E74C3C',
                fontWeight: 'bold'
            }
        ]
    },
    
    // 5. 品牌故事模板
    {
        id: 'amazon-brand-story',
        name: '品牌故事模板',
        width: 1464,
        height: 600,
        backgroundColor: 'linear-gradient(45deg, #667eea, #764ba2)',
        elements: [
            {
                type: 'text',
                text: '我们的故事',
                left: 100,
                top: 80,
                fontSize: 56,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '始于2010年，专注于为全球用户\n提供高品质的产品和服务',
                left: 100,
                top: 180,
                fontSize: 32,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                lineHeight: 1.5
            },
            {
                type: 'image',
                left: 800,
                top: 100,
                width: 400,
                height: 400,
                placeholder: true,
                placeholderText: '品牌图片'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 100,
                top: 350,
                width: 200,
                height: 80,
                fill: 'rgba(255,255,255,0.2)',
                stroke: '#ffffff',
                strokeWidth: 2,
                rx: 10,
                ry: 10
            },
            {
                type: 'text',
                text: '了解更多',
                left: 160,
                top: 375,
                fontSize: 28,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                fontWeight: 'bold'
            }
        ]
    },
    
    // 6. 节日促销模板
    {
        id: 'amazon-holiday-sale',
        name: '节日促销模板',
        width: 1200,
        height: 630,
        backgroundColor: '#C41E3A',
        elements: [
            {
                type: 'text',
                text: '🎄 圣诞特惠 🎄',
                left: 300,
                top: 80,
                fontSize: 64,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '全场商品5折起',
                left: 350,
                top: 180,
                fontSize: 48,
                fontFamily: 'Microsoft YaHei',
                fill: '#FFD700',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '12月24日-26日',
                left: 400,
                top: 250,
                fontSize: 32,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 100,
                top: 350,
                width: 1000,
                height: 200,
                fill: 'rgba(255,255,255,0.1)',
                stroke: '#ffffff',
                strokeWidth: 3,
                rx: 20,
                ry: 20
            },
            {
                type: 'image',
                left: 150,
                top: 380,
                width: 140,
                height: 140,
                placeholder: true,
                placeholderText: '产品1'
            },
            {
                type: 'image',
                left: 350,
                top: 380,
                width: 140,
                height: 140,
                placeholder: true,
                placeholderText: '产品2'
            },
            {
                type: 'image',
                left: 550,
                top: 380,
                width: 140,
                height: 140,
                placeholder: true,
                placeholderText: '产品3'
            },
            {
                type: 'image',
                left: 750,
                top: 380,
                width: 140,
                height: 140,
                placeholder: true,
                placeholderText: '产品4'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 950,
                top: 420,
                width: 120,
                height: 60,
                fill: '#FFD700',
                rx: 10,
                ry: 10
            },
            {
                type: 'text',
                text: '抢购',
                left: 985,
                top: 440,
                fontSize: 28,
                fontFamily: 'Microsoft YaHei',
                fill: '#C41E3A',
                fontWeight: 'bold'
            }
        ]
    },
    
    // 7. 产品详情模板
    {
        id: 'amazon-product-details',
        name: '产品详情模板',
        width: 1464,
        height: 800,
        backgroundColor: '#ffffff',
        elements: [
            {
                type: 'image',
                left: 100,
                top: 100,
                width: 600,
                height: 600,
                placeholder: true,
                placeholderText: '产品大图'
            },
            {
                type: 'text',
                text: '产品名称',
                left: 750,
                top: 120,
                fontSize: 48,
                fontFamily: 'Microsoft YaHei',
                fill: '#232F3E',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '⭐⭐⭐⭐⭐ (1,234条评价)',
                left: 750,
                top: 190,
                fontSize: 24,
                fontFamily: 'Microsoft YaHei',
                fill: '#FF9900'
            },
            {
                type: 'text',
                text: '￥299.00',
                left: 750,
                top: 240,
                fontSize: 56,
                fontFamily: 'Arial',
                fill: '#E74C3C',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                text: '原价: ￥399.00',
                left: 750,
                top: 310,
                fontSize: 24,
                fontFamily: 'Arial',
                fill: '#999999',
                textDecoration: 'line-through'
            },
            {
                type: 'text',
                text: '节省: ￥100.00 (25%)',
                left: 750,
                top: 340,
                fontSize: 24,
                fontFamily: 'Microsoft YaHei',
                fill: '#00A651'
            },
            {
                type: 'text',
                text: '• 高品质材料\n• 精工制造\n• 全球包邮\n• 30天退换保证',
                left: 750,
                top: 400,
                fontSize: 28,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333',
                lineHeight: 1.8
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 750,
                top: 600,
                width: 200,
                height: 60,
                fill: '#FF9900',
                rx: 8,
                ry: 8
            },
            {
                type: 'text',
                text: '加入购物车',
                left: 800,
                top: 620,
                fontSize: 24,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                fontWeight: 'bold'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 980,
                top: 600,
                width: 150,
                height: 60,
                fill: '#FFA500',
                rx: 8,
                ry: 8
            },
            {
                type: 'text',
                text: '立即购买',
                left: 1020,
                top: 620,
                fontSize: 24,
                fontFamily: 'Microsoft YaHei',
                fill: '#ffffff',
                fontWeight: 'bold'
            }
        ]
    },
    
    // 8. 客户评价模板
    {
        id: 'amazon-customer-reviews',
        name: '客户评价模板',
        width: 1200,
        height: 600,
        backgroundColor: '#F8F9FA',
        elements: [
            {
                type: 'text',
                text: '客户评价',
                left: 500,
                top: 50,
                fontSize: 48,
                fontFamily: 'Microsoft YaHei',
                fill: '#232F3E',
                fontWeight: 'bold'
            },
            // 评价1
            {
                type: 'shape',
                shape: 'rectangle',
                left: 50,
                top: 150,
                width: 350,
                height: 200,
                fill: '#ffffff',
                stroke: '#E1E8ED',
                strokeWidth: 1,
                rx: 10,
                ry: 10
            },
            {
                type: 'text',
                text: '⭐⭐⭐⭐⭐',
                left: 70,
                top: 170,
                fontSize: 24,
                fontFamily: 'Arial',
                fill: '#FF9900'
            },
            {
                type: 'text',
                text: '"质量非常好，物超所值！"',
                left: 70,
                top: 210,
                fontSize: 20,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333'
            },
            {
                type: 'text',
                text: '- 张先生',
                left: 70,
                top: 300,
                fontSize: 16,
                fontFamily: 'Microsoft YaHei',
                fill: '#666666'
            },
            // 评价2
            {
                type: 'shape',
                shape: 'rectangle',
                left: 425,
                top: 150,
                width: 350,
                height: 200,
                fill: '#ffffff',
                stroke: '#E1E8ED',
                strokeWidth: 1,
                rx: 10,
                ry: 10
            },
            {
                type: 'text',
                text: '⭐⭐⭐⭐⭐',
                left: 445,
                top: 170,
                fontSize: 24,
                fontFamily: 'Arial',
                fill: '#FF9900'
            },
            {
                type: 'text',
                text: '"发货速度快，包装精美！"',
                left: 445,
                top: 210,
                fontSize: 20,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333'
            },
            {
                type: 'text',
                text: '- 李女士',
                left: 445,
                top: 300,
                fontSize: 16,
                fontFamily: 'Microsoft YaHei',
                fill: '#666666'
            },
            // 评价3
            {
                type: 'shape',
                shape: 'rectangle',
                left: 800,
                top: 150,
                width: 350,
                height: 200,
                fill: '#ffffff',
                stroke: '#E1E8ED',
                strokeWidth: 1,
                rx: 10,
                ry: 10
            },
            {
                type: 'text',
                text: '⭐⭐⭐⭐⭐',
                left: 820,
                top: 170,
                fontSize: 24,
                fontFamily: 'Arial',
                fill: '#FF9900'
            },
            {
                type: 'text',
                text: '"客服态度很好，推荐购买！"',
                left: 820,
                top: 210,
                fontSize: 20,
                fontFamily: 'Microsoft YaHei',
                fill: '#333333'
            },
            {
                type: 'text',
                text: '- 王先生',
                left: 820,
                top: 300,
                fontSize: 16,
                fontFamily: 'Microsoft YaHei',
                fill: '#666666'
            },
            {
                type: 'text',
                text: '平均评分: 4.8/5.0 | 基于2,156条真实评价',
                left: 350,
                top: 450,
                fontSize: 24,
                fontFamily: 'Microsoft YaHei',
                fill: '#666666'
            }
        ]
    }
];