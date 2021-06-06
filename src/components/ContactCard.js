import React from "react";


const CardContact = (props) =>{
const { id, name, email}= props.contact; //deconstructor
return(
    <div className= "item">
     

                <div className = "content">
                    <div className= "header">
                        {name}</div>   
                    <div>{email}</div>   {/*it would be contact.name or contact.email if decons was not pre*/}

                </div>
                <i className = "trash alternate outline icon" style ={{color: "red", marginTop:"7px" }}  onClick={() => props.clickHandler(id)}></i>
               
            </div>

);


};

export default CardContact;