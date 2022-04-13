import React from 'react';
import Styles from '../Button.module.css';

type Props = {
    onClick: any,
    className: any
}

const Secondary: React.FC<Props> = props => {
    return (
        <div
            className={
                [
                    Styles.ButtonSecondary,
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

export default Secondary;

