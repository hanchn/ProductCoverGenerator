const templates = {
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
    }
}; 