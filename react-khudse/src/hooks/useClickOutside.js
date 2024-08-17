import React, { useEffect } from 'react'

function useClickOutside(open, setClose, { id }) {

    let handleClose = (event) => {
        if (![null, undefined, ''].includes(event?.target)) {
            let intendedAreaClick = document.getElementById(`${id}`);
            if (setClose && intendedAreaClick != null && !intendedAreaClick.contains(event?.target)) {
                setClose();
            }
        }
    }

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClose)
        } else {
            document.removeEventListener('mousedown', handleClose);
        }

        return () => {
            document.removeEventListener('mousedown', handleClose);
        }
    }, [open]);

}

export default useClickOutside;
