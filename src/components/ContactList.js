import React from 'react';
import CardContact from "./ContactCard"
import { Link } from "react-router-dom";

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler= (id) => {
        props.getContactID(id);
    };
    const renderContactList = props.contacts.map((contact)=> {
        return(
            <CardContact contact={contact} clickHandler= {deleteContactHandler} key= {contact.id} ></CardContact>
        );
    });
    return(
        <div class= "main">
        <h2>
            Contact List
        </h2>
        <Link to= "/add">
        <button className= "ui button blue conter">Add Conatct</button>
        </Link>
        
        <div className= "ui celled list">
            {renderContactList} 
        </div>
        </div>
    );

};


export default ContactList;