export interface IProduct {
    _id: string,
    name: string,
    price: number,
    images: any,
}

export interface ICartProduct {
    product: string;
    name: string,
    price: number,
    images: any,
    category: string,
    stock: number
}

export interface IProductDetails {
    _id: string
    name: string,
    description: string,
    price: number,
    images: any[],
    category: string,
    stock: number,
    data: string
}