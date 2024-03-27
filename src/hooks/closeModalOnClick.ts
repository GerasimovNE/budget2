import React from "react";


const useCloseModalOnClick = (isOpen:boolean,closeRef:React.MutableRefObject<any>, closeEffect:()=>void) => {
     React.useEffect(() => {
        if (!isOpen) {
            return;
        }
        const handleClick = (e: MouseEvent) => {
            if (!closeRef.current) {
                return;
            }
            if (!closeRef.current.contains(e.target)) {
                closeEffect();
                return;
            }
        };
        document.addEventListener('click', (e) => handleClick(e));
        document.removeEventListener('click', (e) => handleClick(e));
    }, [isOpen]);

}

export default useCloseModalOnClick