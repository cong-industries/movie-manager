import React from "react";

interface Props {
  border: string;
  color: string;
  textColor: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    textColor,
    children,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >  
    <div style={{color: textColor}}>
      {children}
    </div>
  </button>
  );
}

export default Button;