import React from 'react';
import CardContact from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = () => {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        console.log(retriveContacts);
        if (retriveContacts) {
            setContacts(retriveContacts);
        };
    }, []);

    const removeContactHandler = (id) => {
        const newContactlist = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactlist);
    };

    React.useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className="main">
            <h2>
                Contact List
        </h2>
            <Link to="/add">
                <button className="ui button blue conter">Add Conatct</button>
            </Link>

            <div className="ui celled list">
                <CardContact contacts={contacts} clickHandler={removeContactHandler} ></CardContact>
            </div>
        </div>
    );

};


export default ContactList;