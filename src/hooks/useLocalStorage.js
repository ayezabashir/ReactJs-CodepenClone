import { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const localKey = key;
    const [value, setValue] = useState(() => {
        const jsonVal = localStorage.getItem(localKey);
        if (jsonVal != null) {
            return JSON.parse(jsonVal);
        }
        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(value))
    }, [localKey, value])
    return [value, setValue];
}

export default useLocalStorage
