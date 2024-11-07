import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
    useEffect(() => {

        const listener = (event) => {
            // ref.current => modal node    contains ===> 포함
            // event.target => 클릭한 node
            if (!ref.current || ref.current.contains(event.target)) {
                // 내부를 클릭할 때 return 으로 끝내기
                return;
            }
                
            handler();
        }

        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
        }
    }, [ref, handler])
}