import React, { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css"

export const ProductButtons = ({ className, style, maxCount }: { className?: string, style?: React.CSSProperties, maxCount?: number }) => {
    const { counter, increaseBy } = useContext(ProductContext)
    const isMaxedRiched = useCallback(
        () => {
            if (counter === maxCount) {
                return true
            } else {
                return false
            }
        },
        [counter, maxCount],
    )

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button disabled={isMaxedRiched()} onClick={() => increaseBy(+1)} className={isMaxedRiched() ? `${styles.buttonAdd} ${styles.disabled}` : `${styles.buttonAdd}`}>+</button>
        </div>

    )
}
