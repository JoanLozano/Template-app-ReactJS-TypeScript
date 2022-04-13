import React from 'react';
import Styles from '../Button.module.css';

type Props = {
    onClick: any,
    className: any
}

const Success: React.FC<Props> = props => {
    return (
        <div
            className={
                [
                    Styles.buttonSuccess,
                    props.className,
                    "shadow"
                ].join(" ")
            }
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

export default Success;

