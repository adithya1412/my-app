import React from "react";

const Toolbar = () => { 
    const a = 5;
    const d = 90;
    
    const sum = (g, h) => {
        return g + h;
    }

    return(
        <div> 
            <h1>{sum(a,d)}</h1>
        </div>
    )
}

export default Toolbar;
