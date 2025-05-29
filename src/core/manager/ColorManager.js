export class ColorManager {
    constructor() {
        this.themes = this.getDefaultThemes();
        this.palettes = this.getDefaultPalettes();
    }

    // 获取默认主题
    getDefaultThemes() {
        return [
            {
                id: 'light',
                name: '浅色主题',
                colors: {
                    primary: '#00a8ff',
                    secondary: '#0097e6',
                    background: '#ffffff',
                    surface: '#f8f9fa',
                    text: '#333333',
                    textSecondary: '#666666',
                    border: '#e9ecef'
                }
            },
            {
                id: 'dark',
                name: '深色主题',
                colors: {
                    primary: '#00a8ff',
                    secondary: '#0097e6',
                    background: '#1e272e',
                    surface: '#2f3542',
                    text: '#ffffff',
                    textSecondary: '#dfe4ea',
                    border: '#2f3542'
                }
            }
        ];
    }

    // 获取默认调色板
    getDefaultPalettes() {
        return [
            {
                id: 'default',
                name: '默认调色板',
                colors: [
                    '#00a8ff',
                    '#0097e6',
                    '#fbc531',
                    '#e84118',
                    '#4cd137',
                    '#273c75',
                    '#192a56',
                    '#718093',
                    '#7f8fa6',
                    '#dcdde1'
                ]
            },
            {
                id: 'pastel',
                name: '柔和调色板',
                colors: [
                    '#ffb8b8',
                    '#ffd8b8',
                    '#fff0b8',
                    '#e8ffb8',
                    '#b8ffc8',
                    '#b8fff0',
                    '#b8e8ff',
                    '#b8c8ff',
                    '#e0b8ff',
                    '#ffb8f0'
                ]
            },
            {
                id: 'monochrome',
                name: '单色调色板',
                colors: [
                    '#000000',
                    '#1a1a1a',
                    '#333333',
                    '#4d4d4d',
                    '#666666',
                    '#808080',
                    '#999999',
                    '#b3b3b3',
                    '#cccccc',
                    '#e6e6e6'
                ]
            }
        ];
    }

    // 获取主题
    getTheme(themeId) {
        return this.themes.find(theme => theme.id === themeId);
    }

    // 获取调色板
    getPalette(paletteId) {
        return this.palettes.find(palette => palette.id === paletteId);
    }

    // 获取主题选项
    getThemeOptions() {
        return this.themes.map(theme => ({
            value: theme.id,
            text: theme.name
        }));
    }

    // 获取调色板选项
    getPaletteOptions() {
        return this.palettes.map(palette => ({
            value: palette.id,
            text: palette.name
        }));
    }

    // 应用主题
    applyTheme(themeId) {
        const theme = this.getTheme(themeId);
        if (!theme) return;

        // 更新 CSS 变量
        Object.entries(theme.colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--color-${key}`, value);
        });
    }

    // 添加主题
    addTheme(theme) {
        this.themes.push(theme);
    }

    // 添加调色板
    addPalette(palette) {
        this.palettes.push(palette);
    }

    // 删除主题
    deleteTheme(themeId) {
        const index = this.themes.findIndex(theme => theme.id === themeId);
        if (index !== -1) {
            this.themes.splice(index, 1);
        }
    }

    // 删除调色板
    deletePalette(paletteId) {
        const index = this.palettes.findIndex(palette => palette.id === paletteId);
        if (index !== -1) {
            this.palettes.splice(index, 1);
        }
    }

    // 生成随机颜色
    generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 生成调色板
    generatePalette(baseColor) {
        const colors = [baseColor];
        const hsl = this.hexToHSL(baseColor);

        // 生成相似色
        for (let i = 0; i < 9; i++) {
            const newHsl = {
                h: (hsl.h + (i + 1) * 30) % 360,
                s: Math.max(0, Math.min(100, hsl.s + (i % 2 ? 10 : -10))),
                l: Math.max(0, Math.min(100, hsl.l + (i % 2 ? 5 : -5)))
            };
            colors.push(this.HSLToHex(newHsl.h, newHsl.s, newHsl.l));
        }

        return colors;
    }

    // HEX 转 HSL
    hexToHSL(hex) {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }

            h /= 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }

    // HSL 转 HEX
    HSLToHex(h, s, l) {
        s /= 100;
        l /= 100;

        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c/2;
        let r = 0, g = 0, b = 0;

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }

        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
} 