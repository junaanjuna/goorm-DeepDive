import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {

    const [debouncedValue, setDebouncedValue] = useState(value);
    
    // value :          '' => 's' => 'sp' = 'spi'
    // debouncedValue : ''  =>  'spi'

    // s   기다리는중 => 5 => 요청 X
    // sp  기다리는중 => 5 => 요청 X
    // spi  기다리는중 => 5 => 요청
    useEffect(() => {

        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])

    return debouncedValue;
}