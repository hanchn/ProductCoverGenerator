export const templates = [
    {
        id: 'modern-minimal',
        name: '现代简约',
        width: 1200,
        height: 630,
        backgroundColor: '#ffffff',
        elements: [
            {
                type: 'text',
                text: 'Modern Design',
                left: 100,
                top: 100,
                fontSize: 48,
                fontFamily: 'Poppins',
                fill: '#333333'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 100,
                top: 200,
                width: 200,
                height: 200,
                fill: '#f0f0f0',
                stroke: '#333333',
                strokeWidth: 2
            }
        ]
    },
    {
        id: 'geometric',
        name: '几何风格',
        width: 1200,
        height: 630,
        backgroundColor: '#f8f9fa',
        elements: [
            {
                type: 'shape',
                shape: 'circle',
                left: 300,
                top: 200,
                radius: 100,
                fill: '#00a8ff',
                stroke: '#ffffff',
                strokeWidth: 4
            },
            {
                type: 'shape',
                shape: 'triangle',
                left: 500,
                top: 200,
                width: 200,
                height: 200,
                fill: '#0097e6',
                stroke: '#ffffff',
                strokeWidth: 4
            }
        ]
    },
    {
        id: 'gradient',
        name: '渐变风格',
        width: 1200,
        height: 630,
        backgroundColor: 'linear-gradient(45deg, #00a8ff, #0097e6)',
        elements: [
            {
                type: 'text',
                text: 'Gradient Style',
                left: 100,
                top: 100,
                fontSize: 48,
                fontFamily: 'Poppins',
                fill: '#ffffff'
            },
            {
                type: 'shape',
                shape: 'rectangle',
                left: 100,
                top: 200,
                width: 400,
                height: 200,
                fill: 'rgba(255, 255, 255, 0.2)',
                stroke: '#ffffff',
                strokeWidth: 2
            }
        ]
    }
]; 