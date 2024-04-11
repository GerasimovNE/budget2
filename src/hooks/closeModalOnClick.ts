import React from 'react';

const useCloseModalOnClick = (
    isOpen: boolean,
    closeRef: React.MutableRefObject<any>,
    closeEffect: () => void,
    buttonId?: string
) => {
    const handleClick = React.useCallback(
        (e) => {
            if (buttonId) {
                if (buttonId == e.target.id) {
                    return;
                }
            }
            if (!closeRef.current.contains(e.target)) closeEffect();
        },
        [buttonId, closeRef]
    );
    React.useEffect(() => {
        isOpen
            ? document.addEventListener('click', handleClick)
            : document.removeEventListener('click', handleClick);
    }, [isOpen]);
};

export default useCloseModalOnClick;
