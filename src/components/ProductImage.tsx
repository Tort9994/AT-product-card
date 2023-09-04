import React, { useContext } from "react"
import { ProductContext } from "./ProductCard"
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css"

export const ProductImage = ({ img = '', className, style }: { img?: string, className?: string, style?: React.CSSProperties }) => {
    const { product } = useContext(ProductContext)
    let imgToShow: string
    if (img) {
        imgToShow = img
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }
    return (
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="theres no Images" style={style} />
    )
}

