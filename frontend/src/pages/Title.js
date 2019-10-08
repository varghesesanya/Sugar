import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default function Title ({name,title}) {
        return(
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                <br/>
                <h2 className="Title_Deals">
                {name} <strong>{title}
                       </strong> 
                
                </h2>
                </div>
            </div>
        )
}
