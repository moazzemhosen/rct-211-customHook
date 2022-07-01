import { useEffect, useState } from "react"

export const useTimeout = (delay) => {
    const [state, setState] = useState(false);
    useEffect(() => {
        let timmer = setTimeout(() => {
            setState(true)
        }, delay)
        return () => {
            clearTimeout(timmer)
        }
    }, [delay])
    return state;
}