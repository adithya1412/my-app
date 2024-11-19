import React from "react";

const Toolbar = () => { 
    const f = 5986;
    const u = 96590;
    
    const division = (g, h) => {
        return g / h;
    }
    
    return(
        <div> 
            <h1>{division(f,u)} </h1>
        </div>
    )
}

export default Toolbar;
