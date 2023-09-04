import React, { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css"


export const ProductTitle = ({ title, className, style }: { title?: string | undefined, className?: string, style?: React.CSSProperties }) => {
    const { product } = useContext(ProductContext)
    let titleToShow: string
    if (title) {
        titleToShow = title
    }
    else {
        titleToShow = product.title
    }
    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{titleToShow}</span>
    )
}
