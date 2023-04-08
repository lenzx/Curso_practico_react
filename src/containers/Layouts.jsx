import React from "react";

const Layaout = ({children}) => {
    return (
        <div className="layout"> 
            {children}
        </div>
    );
}

export default Layaout;