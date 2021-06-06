import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { uuid } from 'uuidv4/build/lib/uuidv4';
import { successNotification, failureNotification } from "./Notification";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
// p

const AddContact = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [id, setID] = React.useState("");
    const [contacts, setContacts] = React.useState([]);
    const LOCAL_STORAGE_KEY = "contacts";
    function contactObj(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    };


    //   const notification = {
    //     title: "Contact Added",
    //     message: "Configurable",
    //     type: "info",
    //     insert: "top",
    //     container: "bottom-right",
    //     animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
    //     animationOut: ["animate__animated animate__fadeOut"] // `animate.css v4` classes
    //   };



    const addDetails = ((ev) => {
        if (ev.target.name === "name") {
            setID(uuid());
            setName(ev.target.value);
        } else if (ev.target.name === "email") {
            setEmail(ev.target.value);
        } else {
            store.addNotification(failureNotification);
        }
    });

    const add = (e) => {
        e.preventDefault();
        // if (name === "" || email === "") {
        //     alert(" All fields need to be filled");
        //     return;
        // }
        // addContactHandler({ id: id, name: name, email: email });
        const newContact = new contactObj();
        newContact.id = id;
        newContact.name = name;
        newContact.email = email;
        setContacts([...contacts, newContact]);
        store.addNotification(successNotification);
        setID("");
        setName("");
        setEmail("");
    };
    // const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));


    // const addContactHandler = (contact) => {
    //     console.log(contact);
    //     const newContact = new contactObj();
    //     newContact.id = contact.id;
    //     newContact.name = contact.name;
    //     newContact.email = contact.email;
    //     setContacts([...contacts, newContact]);
    //     store.addNotification(successNotification);
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // };

    useEffect(() => {
        setContacts(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    }, []);

    useEffect(() => {
        console.log(contacts);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className="ui main">
            <ReactNotification />
            <h2> Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label> Name </label>
                    <input type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={addDetails}
                        autoFocus={true}
                        required={true}
                    />
                </div>
                <div className="field">
                    <label> Email </label>
                    <input type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={addDetails}
                        required />
                </div>
                <button className="ui button blue"> Add </button>
                <Link to="/">
                    <button className="ui button blue left">View Contact List</button>
                </Link>
            </form>
        </div>
    );

};

export default AddContact;
