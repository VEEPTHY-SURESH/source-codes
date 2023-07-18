import React from "react";
import "./style.css";

export default function Header(){
    return (<>
        <div className="pyramid-loader">
            <div class="wrapper">
                <span className="side side1"></span>
                <span class="side side2"></span>
                <span className="side side3"></span>
                <span classNAme="side side4"></span>
                <span className="shadow"></span>
            </div>  
        </div>
    </>)
}