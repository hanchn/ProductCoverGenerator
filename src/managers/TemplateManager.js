const templates = [
    // 1. 爆款推荐
    {
        id: 'hot-sale',
        name: '爆款推荐',
        width: 800,
        height: 800,
        backgroundColor: '#fff',
        objects: [
            { type: 'image', left: 40, top: 40, width: 720, height: 480, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', rx: 24 }, // 产品主图
            { type: 'rect', left: 40, top: 40, width: 120, height: 40, fill: '#e53935', rx: 20 }, // 标签背景
            { type: 'i-text', text: '热销爆款', left: 100, top: 60, fontSize: 24, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'i-text', text: '2024春季新品', left: 60, top: 550, fontSize: 48, fontWeight: 'bold', fill: '#e53935', fontFamily: 'Poppins' },
            { type: 'i-text', text: '智能手表 Pro Max', left: 60, top: 610, fontSize: 28, fill: '#333', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 550, width: 140, height: 60, fill: '#e53935', rx: 30 }, // 按钮
            { type: 'i-text', text: '立即抢购', left: 615, top: 565, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 60, top: 670, width: 180, height: 60, fill: '#fff3e0', rx: 12, stroke: '#e53935', strokeWidth: 2 }, // 价格区块
            { type: 'i-text', text: '￥999.00', left: 80, top: 685, fontSize: 32, fill: '#e53935', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 2. 新品上市
    {
        id: 'new-arrival',
        name: '新品上市',
        width: 800,
        height: 800,
        backgroundColor: '#f5fafd',
        objects: [
            { type: 'image', left: 60, top: 60, width: 680, height: 440, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', rx: 24 }, // 产品主图
            { type: 'rect', left: 60, top: 60, width: 120, height: 40, fill: '#1976d2', rx: 20 }, // 标签背景
            { type: 'i-text', text: '新品上市', left: 120, top: 80, fontSize: 24, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'i-text', text: '无线降噪耳机', left: 80, top: 540, fontSize: 48, fontWeight: 'bold', fill: '#1976d2', fontFamily: 'Poppins' },
            { type: 'i-text', text: '全新一代，声临其境', left: 80, top: 600, fontSize: 28, fill: '#333', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 540, width: 140, height: 60, fill: '#1976d2', rx: 30 },
            { type: 'i-text', text: '立即购买', left: 615, top: 555, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 80, top: 660, width: 180, height: 60, fill: '#e3eafc', rx: 12, stroke: '#1976d2', strokeWidth: 2 },
            { type: 'i-text', text: '￥1299.00', left: 100, top: 675, fontSize: 32, fill: '#1976d2', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 3. 限时特惠
    {
        id: 'limited-offer',
        name: '限时特惠',
        width: 800,
        height: 800,
        backgroundColor: '#fff',
        objects: [
            { type: 'image', left: 50, top: 50, width: 700, height: 420, src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800', rx: 24 }, // 产品主图
            { type: 'rect', left: 50, top: 50, width: 120, height: 40, fill: '#fb8c00', rx: 20 }, // 标签背景
            { type: 'i-text', text: '限时特惠', left: 110, top: 70, fontSize: 24, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'i-text', text: '智能运动手表', left: 70, top: 520, fontSize: 48, fontWeight: 'bold', fill: '#fb8c00', fontFamily: 'Poppins' },
            { type: 'i-text', text: '今日下单立减20%', left: 70, top: 580, fontSize: 28, fill: '#333', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 520, width: 140, height: 60, fill: '#fb8c00', rx: 30 },
            { type: 'i-text', text: '立即抢购', left: 615, top: 535, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 70, top: 640, width: 180, height: 60, fill: '#fff3e0', rx: 12, stroke: '#fb8c00', strokeWidth: 2 },
            { type: 'i-text', text: '￥799.00', left: 90, top: 655, fontSize: 32, fill: '#fb8c00', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 4. 官方旗舰
    {
        id: 'official-store',
        name: '官方旗舰',
        width: 800,
        height: 800,
        backgroundColor: '#232323',
        objects: [
            { type: 'image', left: 60, top: 60, width: 680, height: 440, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800', rx: 24 }, // 产品主图
            { type: 'rect', left: 60, top: 60, width: 120, height: 40, fill: '#ffd700', rx: 20 }, // 标签背景
            { type: 'i-text', text: '官方旗舰', left: 120, top: 80, fontSize: 24, fill: '#232323', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'i-text', text: '专业运动跑鞋', left: 80, top: 540, fontSize: 44, fontWeight: 'bold', fill: '#ffd700', fontFamily: 'Poppins' },
            { type: 'i-text', text: '品质保证 售后无忧', left: 80, top: 600, fontSize: 28, fill: '#fff', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 540, width: 140, height: 60, fill: '#ffd700', rx: 30 },
            { type: 'i-text', text: '立即购买', left: 615, top: 555, fontSize: 28, fill: '#232323', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 80, top: 660, width: 180, height: 60, fill: '#fff', rx: 12, stroke: '#ffd700', strokeWidth: 2 },
            { type: 'i-text', text: '￥899.00', left: 100, top: 675, fontSize: 32, fill: '#ffd700', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 5. 超值组合
    {
        id: 'combo-value',
        name: '超值组合',
        width: 800,
        height: 800,
        backgroundColor: '#f6fff6',
        objects: [
            { type: 'image', left: 60, top: 60, width: 680, height: 440, src: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800', rx: 24 }, // 产品主图
            { type: 'rect', left: 60, top: 60, width: 120, height: 40, fill: '#43a047', rx: 20 }, // 标签背景
            { type: 'i-text', text: '超值套装', left: 120, top: 80, fontSize: 24, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'i-text', text: '护肤套装', left: 80, top: 540, fontSize: 44, fontWeight: 'bold', fill: '#43a047', fontFamily: 'Poppins' },
            { type: 'i-text', text: '买一送一，数量有限', left: 80, top: 600, fontSize: 28, fill: '#333', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 540, width: 140, height: 60, fill: '#43a047', rx: 30 },
            { type: 'i-text', text: '立即抢购', left: 615, top: 555, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 80, top: 660, width: 180, height: 60, fill: '#e0f2f1', rx: 12, stroke: '#43a047', strokeWidth: 2 },
            { type: 'i-text', text: '￥599.00', left: 100, top: 675, fontSize: 32, fill: '#43a047', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 6. 爆品秒杀
    {
        id: 'flash-sale',
        name: '爆品秒杀',
        width: 800,
        height: 800,
        backgroundColor: '#f8f6ff',
        objects: [
            { type: 'rect', left: 60, top: 60, width: 680, height: 440, fill: '#ede7f6', rx: 24 },
            { type: 'i-text', text: '爆品秒杀', left: 80, top: 540, fontSize: 44, fontWeight: 'bold', fill: '#8e24aa', fontFamily: 'Poppins' },
            { type: 'i-text', text: '限量抢购，手慢无', left: 80, top: 600, fontSize: 28, fill: '#333', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 540, width: 140, height: 60, fill: '#8e24aa', rx: 30 },
            { type: 'i-text', text: '秒杀', left: 650, top: 555, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 80, top: 660, width: 180, height: 60, fill: '#ede7f6', rx: 12, stroke: '#8e24aa', strokeWidth: 2 },
            { type: 'i-text', text: '￥49.00', left: 100, top: 675, fontSize: 32, fill: '#8e24aa', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 7. 品牌热卖
    {
        id: 'brand-hot',
        name: '品牌热卖',
        width: 800,
        height: 800,
        backgroundColor: '#e3f2fd',
        objects: [
            { type: 'rect', left: 60, top: 60, width: 680, height: 440, fill: '#fff3e0', rx: 24 },
            { type: 'i-text', text: '品牌热卖', left: 80, top: 540, fontSize: 44, fontWeight: 'bold', fill: '#1976d2', fontFamily: 'Poppins' },
            { type: 'i-text', text: '官方授权，放心购', left: 80, top: 600, fontSize: 28, fill: '#fb8c00', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 540, width: 140, height: 60, fill: '#1976d2', rx: 30 },
            { type: 'i-text', text: '立即购买', left: 630, top: 555, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 80, top: 660, width: 180, height: 60, fill: '#fff3e0', rx: 12, stroke: '#1976d2', strokeWidth: 2 },
            { type: 'i-text', text: '￥189.00', left: 100, top: 675, fontSize: 32, fill: '#1976d2', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 8. 会员专享
    {
        id: 'vip-exclusive',
        name: '会员专享',
        width: 800,
        height: 800,
        backgroundColor: '#fffbe7',
        objects: [
            { type: 'rect', left: 60, top: 60, width: 680, height: 440, fill: '#fffde7', rx: 24 },
            { type: 'i-text', text: '会员专享价', left: 80, top: 540, fontSize: 44, fontWeight: 'bold', fill: '#ffb300', fontFamily: 'Poppins' },
            { type: 'i-text', text: '尊享折扣，专属福利', left: 80, top: 600, fontSize: 28, fill: '#333', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 540, width: 140, height: 60, fill: '#ffb300', rx: 30 },
            { type: 'i-text', text: '立即购买', left: 630, top: 555, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 80, top: 660, width: 180, height: 60, fill: '#fffde7', rx: 12, stroke: '#ffb300', strokeWidth: 2 },
            { type: 'i-text', text: '￥169.00', left: 100, top: 675, fontSize: 32, fill: '#ffb300', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 9. 促销活动
    {
        id: 'promotion',
        name: '促销活动',
        width: 800,
        height: 800,
        backgroundColor: '#fff8e1',
        objects: [
            { type: 'rect', left: 60, top: 60, width: 680, height: 440, fill: '#ffe082', rx: 24 },
            { type: 'i-text', text: '促销活动', left: 80, top: 540, fontSize: 44, fontWeight: 'bold', fill: '#e53935', fontFamily: 'Poppins' },
            { type: 'i-text', text: '全场满99减20', left: 80, top: 600, fontSize: 28, fill: '#333', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 540, width: 140, height: 60, fill: '#e53935', rx: 30 },
            { type: 'i-text', text: '立即抢购', left: 630, top: 555, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 80, top: 660, width: 180, height: 60, fill: '#ffe082', rx: 12, stroke: '#e53935', strokeWidth: 2 },
            { type: 'i-text', text: '￥59.00', left: 100, top: 675, fontSize: 32, fill: '#e53935', fontWeight: 'bold', fontFamily: 'Poppins' }
        ]
    },
    // 10. 进口好物
    {
        id: 'imported',
        name: '进口好物',
        width: 800,
        height: 800,
        backgroundColor: '#e3f2fd',
        objects: [
            { type: 'rect', left: 60, top: 60, width: 680, height: 440, fill: '#bbdefb', rx: 24 },
            { type: 'i-text', text: '进口好物', left: 80, top: 540, fontSize: 44, fontWeight: 'bold', fill: '#1976d2', fontFamily: 'Poppins' },
            { type: 'i-text', text: '全球精选，品质保证', left: 80, top: 600, fontSize: 28, fill: '#333', fontFamily: 'Poppins' },
            { type: 'rect', left: 600, top: 540, width: 140, height: 60, fill: '#1976d2', rx: 30 },
            { type: 'i-text', text: '立即购买', left: 630, top: 555, fontSize: 28, fill: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' },
            { type: 'rect', left: 80, top: 660, width: 180, height: 60, fill: '#bbdefb', rx: 12, stroke: '#1976d2', strokeWidth: 2 },
            { type: 'i-text', text: '￥299.00', left: 100, top: 675, fontSize: 32, fill: '#1976d2', fontWeight: 'bold', fontFamily: 'Poppins' }
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