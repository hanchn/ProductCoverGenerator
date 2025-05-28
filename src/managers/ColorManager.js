export class ColorManager {
    constructor() {
        this.colorThief = new ColorThief();
    }

    async extractImageColors(image) {
        const palette = this.colorThief.getPalette(image, 5);
        const dominantColor = this.colorThief.getColor(image);
        
        // Convert RGB to hex
        const toHex = (rgb) => '#' + rgb.map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');

        // Generate a color palette
        const colorPalette = {
            primary: toHex(dominantColor),
            secondary: toHex(palette[1]),
            background: toHex(palette[2]),
            text: this.getReadableTextColor(dominantColor)
        };

        return colorPalette;
    }

    getReadableTextColor(backgroundColor) {
        // Calculate relative luminance
        const luminance = (0.299 * backgroundColor[0] + 0.587 * backgroundColor[1] + 0.114 * backgroundColor[2]) / 255;
        
        // Return black or white based on luminance
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
    }

    generateGradientColors(baseColor) {
        // Convert hex to RGB
        const hex = baseColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        // Generate a slightly darker version
        const darker = [
            Math.max(0, r - 30),
            Math.max(0, g - 30),
            Math.max(0, b - 30)
        ];

        // Generate a slightly lighter version
        const lighter = [
            Math.min(255, r + 30),
            Math.min(255, g + 30),
            Math.min(255, b + 30)
        ];

        return {
            darker: `rgb(${darker.join(',')})`,
            lighter: `rgb(${lighter.join(',')})`
        };
    }
} 