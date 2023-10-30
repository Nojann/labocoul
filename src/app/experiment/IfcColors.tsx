export const colorPalette : any = {
    black: {R:0, G:0, B:0},
    white: {R:255, G:255, B:255},
    red: {R:255, G:0, B:0},
    green: {R:0, G:255, B:0},
    blue:{R:0, G:0, B:255},
    yellow:{R:255, G:255, B:0},
    purple: {R:255, G:0, B:255},
    cyan: {R:0, G:255, B:255},
} as const;

/*export const colorPalette : Color[] = [
    { colorId: "black", colorRGB: { R: 0, G: 0, B: 0 } },
    { colorId: "white", colorRGB: { R: 255, G: 255, B: 255 } },
    { colorId: "red", colorRGB: { R: 255, G: 0, B: 0 } },
    { colorId: "green", colorRGB: { R: 0, G: 255, B: 0 } },
    { colorId: "blue", colorRGB: { R: 0, G: 0, B: 255 } },
    { colorId: "yellow", colorRGB: { R: 255, G: 255, B: 0 } },
    { colorId: "purple", colorRGB: { R: 255, G: 0, B: 255 } },
    { colorId: "cyan", colorRGB: { R: 0, G: 255, B: 255 } },
]*/
    


export interface colorRGB {
    R:number, G:number, B:number
}

export interface ColorCombination {
    left:colorRGB, right:colorRGB
}

export type Orientation = "left" | "right";

export interface Color {
    colorId : string,
    colorRGB : colorRGB,
}

export interface ColorSelectedCount extends Color{
    count: number,
}

export interface point{
    x: number,
    y: number,
}

export interface ExperimentData {
    colorCombination : ColorCombination,
    colorSelected : colorRGB,
    trajectory : point[],
}


