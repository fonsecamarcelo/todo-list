import React from "react";

import styles from './Modal.module.css';

type Props = {
    children: React.ReactNode
}

const Modal = (props: Props) => {

    const { children } = props;

    return (
        <div id='modal'>
            <div className={styles.fade}></div>
            <div className={styles.modal}>
                <h4>Texto</h4>
                {children}
            </div>
        </div>
    )
}
export default Modal;