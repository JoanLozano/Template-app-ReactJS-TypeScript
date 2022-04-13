import React from 'react';
import Styles from '../Button.module.css';

type Props = {
    onClick: any,
    className: any
}

const Primary: React.FC<Props> = props => {
    return (
        <div
            className={
                [
                    Styles.buttonPrimary,
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

export default Primary;

