import React from "react";
import Error from "./Types/Error";
import Info from "./Types/Info";
import Primary from "./Types/Primary";
import Secondary from "./Types/Secondary";
import Success from "./Types/Success";
import Warning from "./Types/Warning";

type Props = {
  type: "Primary" | "Secondary" | "Success" | "Info" | "Warning" | "Error";
  onClick?: any;
  className?: any;
};

const Button: React.FC<Props> = (props) => {
    return(
  <>
    {
        props.type === "Primary" && (
            <Primary 
                onClick={props.onClick} 
                className={props.className}
            >
                {props.children}
            </Primary>
        )
    }

    {
        props.type === "Secondary" && (
            <Secondary
                onClick={props.onClick}
                className={props.className}
            >
                {props.children}
            </Secondary>
        )
    }

    {
        props.type === "Success" && (
            <Success 
                onClick={props.onClick} 
                className={props.className}
            >
                {props.children}
            </Success>
        )
    }

    {
        props.type === "Info" && (
            <Info 
                onClick={props.onClick} 
                className={props.className}
            >
                {props.children}
            </Info>
        )
    }

    {
        props.type === "Warning" && (
            <Warning 
                onClick={props.onClick} 
                className={props.className}
            >
            {props.children}
            </Warning>
        )
    }

    {
        props.type === "Error" && (
            <Error 
                onClick={props.onClick} 
                className={props.className}
            >
            {props.children}
            </Error>
        )
    }
  </>
    );

};

export default Button;
