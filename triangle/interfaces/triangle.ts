export interface ITriangle {
    sine: () => {};
    cosine: () => {};
    tangent: () => {};
}

export interface IRightTriangle {
    adjacent: number;
    opposite: number;
    hypotenuse: number;
}

export type IPythagorasTriangle = { adjacent: number, opposite: undefined, hypotenuse: number }
                                | { adjacent: undefined, opposite: number, hypotenuse: number }
                                | { adjacent: number, opposite: number, hypotenuse: undefined };
