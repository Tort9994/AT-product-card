import { ReactElement } from "react"
import { Props as ProductCardProps } from "../components/ProductCard"

export interface Product {
    id: string,
    title: string,
    img?: string
}


export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product

}

export interface ProductCardHOCProps {
    ({ product, children, className, style }: ProductCardProps): JSX.Element,
    Title: ({ title, className, style }: { title?: string, className: string, style?: React.CSSProperties }) => JSX.Element,
    Image: ({ img, className, style }: { img?: string | undefined, className: string, style?: React.CSSProperties }) => JSX.Element,
    Buttons: ({ className, style }: { className: string, style?: React.CSSProperties }) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number,
    MaxCount?: number
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,

    increaseBy: (value: number) => void,
    reset: () => void
}