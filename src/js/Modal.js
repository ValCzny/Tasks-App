import React from 'react';
import { createPortal } from 'react-dom';

function Modal({children}) {
    return createPortal(
        <div className='Modal'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };