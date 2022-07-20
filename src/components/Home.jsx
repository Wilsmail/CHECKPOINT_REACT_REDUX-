import { useState } from "react";
import { Film } from "./Film";



export const Home =(props)=>{
     


    const [title, setTitle] = useState('');
  
    const handle = (e) =>{
    setTitle(e.target.value)
  }

    return(

        <> 
        <h1 style={{color:"white", marginLeft:100}}>Films</h1>
        <hr />
        <div className="seacrhbar">
        <input placeholder="search" className="form-control-lg"  onChange={handle} />
        </div>
        <hr />

        <div className="bigbox">

            {props.users.filter((users) => users.title.toLowerCase().includes(title.toLocaleLowerCase()) ).map(users => (
              <Film users={users}/>
          ))}
            

        </div>
        </>
           

            )
        
        
        
}