import { useParams } from 'react-router-dom'
import React from 'react'


export const Detail =(props)=>{

    let id = useParams().id;
   let  movie = props.users.find(f => f.id == id);


    return(

    <div className="description">

        <div className="info-film">
            <div className="covers">
                <img src={movie.img}  className="imgg" alt='' />
            </div>
            <div className="synopsys">
                <h1 style={{color:"white" , textAlign:"center"}} >Synopsys</h1>
                    <p>{movie.synopsys}</p>
                
            </div>  
        </div>
        <br />
        <br />
        < h3 style={{color:"white", textAlign:"center", marginRight:200}}>Bon Visionnage!</h3>
        <br />
        <br />

        <div className="film">
        <iframe className="dim-film"
            src={movie.video}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            
            
        </iframe>
        
        </div>


    </div>


    )

}