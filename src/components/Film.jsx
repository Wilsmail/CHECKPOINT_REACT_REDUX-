import React from "react";
import { Link } from "react-router-dom";

export const Film =(props)=>{



    return(

                <div className="film-box"> 
                    <div className="img-film">
                        
                        <Link to={`detail/${props.users.id}`}><img src={props.users.img} className="img" /> </Link>
                    </div>
                    <div className="name-film">
                        {props.users.title}
                    </div>
                </div>
    )
}