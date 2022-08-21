import React from "react";
import {Link} from "react-router-dom";

let NavBar = ()=>{
    return (
        /* we can use also empty elements <> </> */
        <React.Fragment>

            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                        <Link to= {'/'} className="navbar-brand">
                            <i className="fa fa-mobile text-warning"/>
                            
                            قائمة <span className="text-warning">الأسماء</span></Link>
                </div>
            </nav>

        </React.Fragment>
    )
};

export default NavBar;