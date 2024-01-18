import {useLayoutEffect, useState} from "react";

export const useWindowInnerWidth = () => {
    const [windowInnerWidth, setWindowInnerWidth] = useState(0)

    const onResize = () => {
        setWindowInnerWidth(window.innerWidth)
    }

    useLayoutEffect(() => {
        onResize()
    }, [])

    useLayoutEffect(() => {
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return windowInnerWidth
}