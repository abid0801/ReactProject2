import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { uuid } from 'uuidv4';
const AddContact = () => {

    const [name, setName]= React.useState("");
    const [email, setEmail]= React.useState("");
    const [contacts, setContacts]= React.useState([]);
    const LOCAL_STORAGE_KEY= "contacts";
    function contactObj(name,email) { 
        this.name= name;
        this.email= email;
    };

    
    
    const addName= React.useCallback((ev) => {
        ev.preventDefault();
        setName(ev.target.value);
        console.log(ev.target.value);
        
    
    }, []);

    const addEmail= React.useCallback((ev) => {

        setEmail(ev.target.value);
    
    }, []);

    const add =(e) =>{
        e.preventDefault();
        if(name ==="" || email==="")
        {
            alert(" All fields need to be filled");
            return
        }
        addContactHandler({name:name, email:email});
        
    }
    // const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));


    const addContactHandler= (contact) =>{
          console.log(contact);
          const newContact = new contactObj();
          newContact.name = contact.name;
          newContact.email = contact.email;
          setContacts([...contacts,{id: uuid(), ...newContact}]);
          alert(" Contact saved");
          
        };

        useEffect(() =>{
              console.log(1);
              localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
            },[contacts]);

        return(
            <div class name="ui main">
            <h2> Add Contact</h2>
            <form className= "ui form" onSubmit={add}> 
            <div className="field">
                <lebel> Name </lebel>
                    <input type="text" 
                    name="name" 
                    placeholder= "Name" 
                    value = {name}
                    onChange={addName}/>
                </div>
                <div className="field">
                    <lebel> Email </lebel>
                    <input type="text"
                     name="email" 
                     placeholder= "Email"
                     value = {email}
                    onChange={addEmail}/>
                </div>
                <button className="ui button blue"> Add </button>
            <Link to= "/">
            <button className= "ui button blue left"> View Contact List</button>
            </Link> 
            </form>
            </div>
        );
    
}

export default AddContact;
