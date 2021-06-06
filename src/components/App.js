import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,  Route } from 'react-router-dom';
// import { uuid } from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList'; 

function App() {

  const LOCAL_STORAGE_KEY= "contacts";
  const [contacts, setContacts]= useState([]);
  const removeContactHandler = (id)=> {
    const newContactlist= contacts.filter((contact)=>
    {
      return contact.id !==id;
    });

    setContacts(newContactlist);
  };

  // const addContactHandler= (contact) =>{
  //   console.log(contact);
  //   setContacts([...contacts,{id: uuid(), ...contact}]);
  // };
  useEffect(() =>{
    console.log(2);
    const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);
  // useEffect(() =>{
  //   console.log(1);
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // },[contacts]);
  
  return (
    <div className= "ui container">
    <Router>
    <Header/>
  
    <Route path="/add" component={() => (<AddContact/> )} />
   <Route path="/" exact component={() => <ContactList contacts= {contacts} getContactID={removeContactHandler}/>} />



    </Router>
    
    </div>
  );
};

export default App;
