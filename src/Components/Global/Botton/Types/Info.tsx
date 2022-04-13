import React from 'react';
import Styles from '../Button.module.css';

type Props = {
    onClick: any,
    className: any
}

const Info: React.FC<Props> = props => {
    return (
        <div
            className={
                [
                    Styles.buttonInfo,
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

export default Info;

