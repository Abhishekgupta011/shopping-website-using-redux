import React from "react";
const CartBadge = (props) =>{
    return(
        <div className="badge">
         <span>{props.count}</span>
        </div>
    )
    
}

export default CartBadge;