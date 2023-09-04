import { useState, useEffect, useRef } from "react"
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void
    value?: number,
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const maxCount = initialValues?.MaxCount
    const isMounted = useRef(false)

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0)
        if (maxCount) {
            newValue = Math.min(newValue, maxCount)
        }
        setCounter(newValue)
        onChange && onChange({ count: newValue, product })

    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }



    useEffect(() => {
        if (!isMounted.current) return
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.MaxCount === counter,
        maxCount,
        reset
    }
}

