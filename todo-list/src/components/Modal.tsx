import React from "react";

import styles from './Modal.module.css';

type Props = {
    children: React.ReactNode
}

const Modal = (props: Props) => {

    const { children } = props;

    const closeModal = (): void => {
        const modal = document.querySelector('#modal')
        modal!.classList.add('hide')

    }

    return (
        <div id='modal' className='hide'>
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h4>Texto</h4>
                {children}
            </div>
        </div>
    )
}
export default Modal;