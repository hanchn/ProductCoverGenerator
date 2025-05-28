export const templates = {
    banner1: {
        width: 1200,
        height: 400,
        elements: [
            {
                type: 'background',
                color: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
                x: 0,
                y: 0,
                width: 1200,
                height: 400
            },
            {
                type: 'shape',
                shape: 'circle',
                color: 'rgba(255, 255, 255, 0.15)',
                x: 1000,
                y: -150,
                width: 400,
                height: 400,
                editable: true
            },
            {
                type: 'shape',
                shape: 'circle',
                color: 'rgba(255, 255, 255, 0.1)',
                x: 900,
                y: 100,
                width: 200,
                height: 200,
                editable: true
            },
            {
                type: 'text',
                text: '新品上市',
                x: 80,
                y: 120,
                fontSize: 72,
                fontFamily: 'Montserrat',
                color: '#ffffff',
                fontWeight: 'bold',
                editable: true,
                isTitle: true,
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            },
            {
                type: 'text',
                text: '限时特惠',
                x: 80,
                y: 220,
                fontSize: 36,
                fontFamily: 'Poppins',
                color: '#ffffff',
                editable: true,
                isSubtitle: true,
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            },
            {
                type: 'text',
                text: '立即抢购',
                x: 80,
                y: 300,
                fontSize: 24,
                fontFamily: 'Roboto',
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '15px 40px',
                borderRadius: '30px',
                editable: true,
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            },
            {
                type: 'image',
                x: 650,
                y: 50,
                width: 450,
                height: 300,
                placeholder: '点击添加产品图片',
                editable: true,
                shadow: '0 20px 40px rgba(0,0,0,0.2)',
                borderRadius: '20px',
                isMainImage: true
            }
        ]
    },
    banner2: {
        width: 1200,
        height: 400,
        elements: [
            {
                type: 'background',
                color: '#ffffff',
                x: 0,
                y: 0,
                width: 1200,
                height: 400
            },
            {
                type: 'shape',
                shape: 'rectangle',
                color: 'linear-gradient(135deg, #A8E6CF 0%, #DCEDC1 100%)',
                x: 0,
                y: 0,
                width: 600,
                height: 400,
                editable: true
            },
            {
                type: 'shape',
                shape: 'circle',
                color: 'rgba(255, 255, 255, 0.2)',
                x: 400,
                y: -100,
                width: 300,
                height: 300,
                editable: true
            },
            {
                type: 'text',
                text: '夏季特惠',
                x: 80,
                y: 120,
                fontSize: 64,
                fontFamily: 'Montserrat',
                color: '#2C3E50',
                fontWeight: 'bold',
                editable: true,
                isTitle: true,
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            },
            {
                type: 'text',
                text: '全场商品',
                x: 80,
                y: 200,
                fontSize: 32,
                fontFamily: 'Poppins',
                color: '#34495E',
                editable: true,
                isSubtitle: true
            },
            {
                type: 'text',
                text: '8折起',
                x: 80,
                y: 280,
                fontSize: 48,
                fontFamily: 'Roboto',
                color: '#E74C3C',
                fontWeight: 'bold',
                editable: true,
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            },
            {
                type: 'image',
                x: 650,
                y: 50,
                width: 450,
                height: 300,
                placeholder: '点击添加产品图片',
                editable: true,
                shadow: '0 20px 40px rgba(0,0,0,0.15)',
                borderRadius: '20px',
                isMainImage: true
            }
        ]
    },
    product1: {
        width: 800,
        height: 800,
        elements: [
            {
                type: 'background',
                color: '#ffffff',
                x: 0,
                y: 0,
                width: 800,
                height: 800
            },
            {
                type: 'shape',
                shape: 'rectangle',
                color: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
                x: 0,
                y: 0,
                width: 800,
                height: 600,
                editable: true
            },
            {
                type: 'image',
                x: 100,
                y: 50,
                width: 600,
                height: 500,
                placeholder: '点击添加产品图片',
                editable: true,
                shadow: '0 20px 40px rgba(0,0,0,0.1)',
                borderRadius: '20px',
                isMainImage: true
            },
            {
                type: 'text',
                text: '产品名称',
                x: 50,
                y: 650,
                fontSize: 36,
                fontFamily: 'Montserrat',
                color: '#2C3E50',
                fontWeight: 'bold',
                editable: true,
                isTitle: true
            },
            {
                type: 'text',
                text: '¥ 299',
                x: 50,
                y: 720,
                fontSize: 32,
                fontFamily: 'Roboto',
                color: '#E74C3C',
                fontWeight: 'bold',
                editable: true
            }
        ]
    },
    product2: {
        width: 800,
        height: 800,
        elements: [
            {
                type: 'background',
                color: '#ffffff',
                x: 0,
                y: 0,
                width: 800,
                height: 800
            },
            {
                type: 'shape',
                shape: 'rectangle',
                color: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
                x: 0,
                y: 0,
                width: 800,
                height: 500,
                editable: true
            },
            {
                type: 'shape',
                shape: 'circle',
                color: 'rgba(255, 255, 255, 0.5)',
                x: 600,
                y: -100,
                width: 300,
                height: 300,
                editable: true
            },
            {
                type: 'image',
                x: 100,
                y: 50,
                width: 600,
                height: 400,
                placeholder: '点击添加产品图片',
                editable: true,
                shadow: '0 20px 40px rgba(0,0,0,0.1)',
                borderRadius: '20px',
                isMainImage: true
            },
            {
                type: 'text',
                text: '产品名称',
                x: 50,
                y: 550,
                fontSize: 36,
                fontFamily: 'Montserrat',
                color: '#2C3E50',
                fontWeight: 'bold',
                editable: true,
                isTitle: true
            },
            {
                type: 'text',
                text: '产品描述',
                x: 50,
                y: 620,
                fontSize: 24,
                fontFamily: 'Poppins',
                color: '#34495E',
                editable: true,
                isSubtitle: true
            },
            {
                type: 'text',
                text: '限时特惠',
                x: 50,
                y: 700,
                fontSize: 28,
                fontFamily: 'Roboto',
                color: '#E74C3C',
                fontWeight: 'bold',
                editable: true
            }
        ]
    },
    // 极简风
    minimal: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: '#fff', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'text', text: '极简风格标题', fontSize: 60, fontFamily: 'Roboto', fontWeight: 'bold', color: '#222', x: 100, y: 120, editable: true },
            { type: 'text', text: '副标题描述内容', fontSize: 32, fontFamily: 'Roboto', color: '#666', x: 100, y: 220, editable: true }
        ]
    },
    // 科技风
    tech: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'shape', shape: 'rectangle', color: 'rgba(255,255,255,0.08)', x: 900, y: 50, width: 250, height: 300, editable: true },
            { type: 'text', text: '科技新品发布', fontSize: 54, fontFamily: 'Roboto', fontWeight: 'bold', color: '#fff', x: 120, y: 140, editable: true },
            { type: 'text', text: '立即体验未来', fontSize: 32, fontFamily: 'Roboto', color: '#00eaff', x: 120, y: 220, editable: true }
        ]
    },
    // 节日祝福
    festival: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'text', text: '节日快乐', fontSize: 64, fontFamily: 'ZCOOL KuaiLe', fontWeight: 'bold', color: '#d7263d', x: 400, y: 120, editable: true },
            { type: 'text', text: '祝你幸福安康', fontSize: 36, fontFamily: 'ZCOOL KuaiLe', color: '#333', x: 420, y: 220, editable: true },
            { type: 'shape', shape: 'circle', color: '#fffbe7', x: 900, y: 80, width: 80, height: 80, editable: true }
        ]
    },
    // 促销横幅
    sale: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: 'linear-gradient(90deg, #f7971e 0%, #ffd200 100%)', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'text', text: '限时抢购', fontSize: 60, fontFamily: 'Roboto', fontWeight: 'bold', color: '#fff', x: 100, y: 120, editable: true },
            { type: 'text', text: '全场低至5折', fontSize: 36, fontFamily: 'Roboto', color: '#b71c1c', x: 100, y: 220, editable: true },
            { type: 'shape', shape: 'rectangle', color: '#fff', x: 900, y: 100, width: 200, height: 80, editable: true },
            { type: 'text', text: '立即抢购', fontSize: 32, fontFamily: 'Roboto', color: '#f7971e', backgroundColor: '#fff', borderRadius: 20, padding: 20, x: 930, y: 120, editable: true }
        ]
    },
    // 产品展示
    product: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: '#f5f7fa', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'image', image: null, placeholder: '产品图片', x: 100, y: 60, width: 320, height: 320, borderRadius: 24, editable: true },
            { type: 'text', text: '新品上市', fontSize: 48, fontFamily: 'Roboto', fontWeight: 'bold', color: '#222', x: 480, y: 120, editable: true },
            { type: 'text', text: '高颜值/高性能/高性价比', fontSize: 28, fontFamily: 'Roboto', color: '#666', x: 480, y: 200, editable: true },
            { type: 'text', text: '立即购买', fontSize: 28, fontFamily: 'Roboto', color: '#fff', backgroundColor: '#2196F3', borderRadius: 16, padding: 16, x: 480, y: 270, editable: true }
        ]
    },
    // 商务风
    business: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: 'linear-gradient(90deg, #232526 0%, #414345 100%)', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'text', text: '企业品牌宣传', fontSize: 54, fontFamily: 'Roboto', fontWeight: 'bold', color: '#fff', x: 120, y: 140, editable: true },
            { type: 'text', text: '专业/高效/可靠', fontSize: 32, fontFamily: 'Roboto', color: '#b0bec5', x: 120, y: 220, editable: true },
            { type: 'image', image: null, placeholder: 'LOGO', x: 1000, y: 60, width: 120, height: 120, borderRadius: 60, editable: true }
        ]
    },
    // 生活美学
    lifestyle: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: 'linear-gradient(90deg, #f8ffae 0%, #43c6ac 100%)', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'text', text: '美好生活', fontSize: 60, fontFamily: 'Roboto', fontWeight: 'bold', color: '#222', x: 100, y: 120, editable: true },
            { type: 'text', text: '发现生活之美', fontSize: 36, fontFamily: 'Roboto', color: '#43c6ac', x: 100, y: 220, editable: true },
            { type: 'image', image: null, placeholder: '生活图片', x: 900, y: 80, width: 200, height: 200, borderRadius: 24, editable: true }
        ]
    },
    // 海报风
    poster: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: 'linear-gradient(90deg, #ff6e7f 0%, #bfe9ff 100%)', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'text', text: '海报主标题', fontSize: 70, fontFamily: 'Roboto', fontWeight: 'bold', color: '#fff', x: 320, y: 100, editable: true },
            { type: 'text', text: '副标题/活动信息', fontSize: 36, fontFamily: 'Roboto', color: '#fff', x: 340, y: 200, editable: true },
            { type: 'shape', shape: 'rectangle', color: 'rgba(255,255,255,0.2)', x: 100, y: 60, width: 1000, height: 280, editable: true }
        ]
    },
    // 卡片风
    card: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: '#fff', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'shape', shape: 'rectangle', color: '#f5f5f5', x: 100, y: 60, width: 1000, height: 280, borderRadius: 32, editable: true },
            { type: 'text', text: '卡片标题', fontSize: 48, fontFamily: 'Roboto', fontWeight: 'bold', color: '#222', x: 180, y: 120, editable: true },
            { type: 'text', text: '卡片描述内容', fontSize: 28, fontFamily: 'Roboto', color: '#666', x: 180, y: 200, editable: true },
            { type: 'image', image: null, placeholder: '卡片图片', x: 900, y: 100, width: 160, height: 160, borderRadius: 24, editable: true }
        ]
    },
    // 横幅广告
    bannerAd: {
        width: 1200,
        height: 400,
        elements: [
            { type: 'background', color: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)', x: 0, y: 0, width: 1200, height: 400, editable: false },
            { type: 'text', text: '横幅广告标题', fontSize: 54, fontFamily: 'Roboto', fontWeight: 'bold', color: '#fff', x: 120, y: 140, editable: true },
            { type: 'text', text: '广告副标题', fontSize: 32, fontFamily: 'Roboto', color: '#fff', x: 120, y: 220, editable: true },
            { type: 'image', image: null, placeholder: '广告图片', x: 900, y: 80, width: 200, height: 200, borderRadius: 24, editable: true }
        ]
    },
    'modern-minimal': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 300,
                height: 300,
                shape: 'circle',
                color: 'rgba(255, 255, 255, 0.1)'
            },
            {
                type: 'text',
                x: 100,
                y: 200,
                text: 'PRODUCT',
                fontFamily: 'Helvetica',
                fontSize: 24,
                color: '#FFFFFF',
                fontWeight: '300',
                isTitle: true
            },
            {
                type: 'text',
                x: 100,
                y: 250,
                text: 'Your Product Name',
                fontFamily: 'Helvetica',
                fontSize: 72,
                color: '#FFFFFF',
                fontWeight: 'bold',
                isTitle: true
            },
            {
                type: 'text',
                x: 100,
                y: 350,
                text: 'A modern and elegant solution for your needs',
                fontFamily: 'Helvetica',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '300'
            }
        ]
    },
    'geometric': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: '#FFFFFF'
            },
            {
                type: 'shape',
                x: 0,
                y: 0,
                width: 400,
                height: 630,
                shape: 'rectangle',
                color: 'linear-gradient(45deg, #FF6B6B 0%, #FF8E53 100%)'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 200,
                height: 200,
                shape: 'circle',
                color: 'rgba(255, 107, 107, 0.1)'
            },
            {
                type: 'text',
                x: 500,
                y: 200,
                text: 'INNOVATION',
                fontFamily: 'Montserrat',
                fontSize: 18,
                color: '#FF6B6B',
                fontWeight: '600',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                x: 500,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Montserrat',
                fontSize: 64,
                color: '#2C3E50',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 500,
                y: 350,
                text: 'Redefining the future of design',
                fontFamily: 'Montserrat',
                fontSize: 24,
                color: '#7F8C8D',
                fontWeight: '300'
            }
        ]
    },
    'gradient-overlay': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: '#1A1A1A'
            },
            {
                type: 'shape',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                shape: 'rectangle',
                color: 'linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(52, 152, 219, 0.2) 100%)'
            },
            {
                type: 'text',
                x: 100,
                y: 200,
                text: 'FEATURED',
                fontFamily: 'Roboto',
                fontSize: 20,
                color: '#FF6B6B',
                fontWeight: '500',
                letterSpacing: '3px'
            },
            {
                type: 'text',
                x: 100,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Roboto',
                fontSize: 72,
                color: '#FFFFFF',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 100,
                y: 350,
                text: 'Experience the next level of innovation',
                fontFamily: 'Roboto',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '300'
            }
        ]
    },
    'minimal-dark': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: '#1A1A1A'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 300,
                height: 300,
                shape: 'rectangle',
                color: 'rgba(255, 255, 255, 0.05)'
            },
            {
                type: 'text',
                x: 100,
                y: 200,
                text: 'PRODUCT',
                fontFamily: 'Inter',
                fontSize: 24,
                color: '#FF6B6B',
                fontWeight: '500',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                x: 100,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Inter',
                fontSize: 72,
                color: '#FFFFFF',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 100,
                y: 350,
                text: 'A minimalist approach to design',
                fontFamily: 'Inter',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: '300'
            }
        ]
    },
    'modern-gradient': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: 'linear-gradient(135deg, #6C5CE7 0%, #A8A4FF 100%)'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 300,
                height: 300,
                shape: 'circle',
                color: 'rgba(255, 255, 255, 0.1)'
            },
            {
                type: 'text',
                x: 100,
                y: 200,
                text: 'INNOVATION',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: '#FFFFFF',
                fontWeight: '500',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                x: 100,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Poppins',
                fontSize: 72,
                color: '#FFFFFF',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 100,
                y: 350,
                text: 'Redefining the future of design',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '300'
            }
        ]
    },
    'geometric-modern': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: '#FFFFFF'
            },
            {
                type: 'shape',
                x: 0,
                y: 0,
                width: 400,
                height: 630,
                shape: 'rectangle',
                color: 'linear-gradient(45deg, #6C5CE7 0%, #A8A4FF 100%)'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 200,
                height: 200,
                shape: 'circle',
                color: 'rgba(108, 92, 231, 0.1)'
            },
            {
                type: 'text',
                x: 500,
                y: 200,
                text: 'FEATURED',
                fontFamily: 'Poppins',
                fontSize: 18,
                color: '#6C5CE7',
                fontWeight: '600',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                x: 500,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Poppins',
                fontSize: 64,
                color: '#2C3E50',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 500,
                y: 350,
                text: 'Experience the next level of innovation',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: '#7F8C8D',
                fontWeight: '300'
            }
        ]
    },
    'dark-modern': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: '#1A1A1A'
            },
            {
                type: 'shape',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                shape: 'rectangle',
                color: 'linear-gradient(135deg, rgba(108, 92, 231, 0.2) 0%, rgba(168, 164, 255, 0.2) 100%)'
            },
            {
                type: 'text',
                x: 100,
                y: 200,
                text: 'PRODUCT',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: '#6C5CE7',
                fontWeight: '500',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                x: 100,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Poppins',
                fontSize: 72,
                color: '#FFFFFF',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 100,
                y: 350,
                text: 'A modern approach to design',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: '300'
            }
        ]
    },
    'minimal-light': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: '#FFFFFF'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 300,
                height: 300,
                shape: 'rectangle',
                color: 'rgba(108, 92, 231, 0.05)'
            },
            {
                type: 'text',
                x: 100,
                y: 200,
                text: 'FEATURED',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: '#6C5CE7',
                fontWeight: '500',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                x: 100,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Poppins',
                fontSize: 72,
                color: '#2C3E50',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 100,
                y: 350,
                text: 'A minimalist approach to design',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: '#7F8C8D',
                fontWeight: '300'
            }
        ]
    },
    'gradient-modern': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 300,
                height: 300,
                shape: 'circle',
                color: 'rgba(255, 255, 255, 0.1)'
            },
            {
                type: 'text',
                x: 100,
                y: 200,
                text: 'INNOVATION',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: '#FFFFFF',
                fontWeight: '500',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                x: 100,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Poppins',
                fontSize: 72,
                color: '#FFFFFF',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 100,
                y: 350,
                text: 'Redefining the future of design',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '300'
            }
        ]
    },
    'geometric-gradient': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: '#FFFFFF'
            },
            {
                type: 'shape',
                x: 0,
                y: 0,
                width: 400,
                height: 630,
                shape: 'rectangle',
                color: 'linear-gradient(45deg, #2C3E50 0%, #3498DB 100%)'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 200,
                height: 200,
                shape: 'circle',
                color: 'rgba(44, 62, 80, 0.1)'
            },
            {
                type: 'text',
                x: 500,
                y: 200,
                text: 'PRODUCT',
                fontFamily: 'Poppins',
                fontSize: 18,
                color: '#2C3E50',
                fontWeight: '600',
                letterSpacing: '2px'
            },
            {
                type: 'text',
                x: 500,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Poppins',
                fontSize: 64,
                color: '#2C3E50',
                fontWeight: 'bold'
            },
            {
                type: 'text',
                x: 500,
                y: 350,
                text: 'Experience the next level of innovation',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: '#7F8C8D',
                fontWeight: '300'
            }
        ]
    },
    'background-editable': {
        width: 1200,
        height: 630,
        elements: [
            {
                type: 'background',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                color: '#1A1A1A',
                editable: true,
                isBackground: true
            },
            {
                type: 'shape',
                x: 0,
                y: 0,
                width: 1200,
                height: 630,
                shape: 'rectangle',
                color: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
                editable: true
            },
            {
                type: 'text',
                x: 100,
                y: 200,
                text: 'FEATURED',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: '#FFFFFF',
                fontWeight: '500',
                letterSpacing: '2px',
                editable: true,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            },
            {
                type: 'text',
                x: 100,
                y: 250,
                text: 'Your Product',
                fontFamily: 'Poppins',
                fontSize: 72,
                color: '#FFFFFF',
                fontWeight: 'bold',
                editable: true,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            },
            {
                type: 'text',
                x: 100,
                y: 350,
                text: 'Experience the next level of innovation',
                fontFamily: 'Poppins',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '300',
                editable: true,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            },
            {
                type: 'shape',
                x: 800,
                y: 100,
                width: 300,
                height: 300,
                shape: 'circle',
                color: 'rgba(255, 255, 255, 0.1)',
                editable: true
            }
        ]
    }
}; 