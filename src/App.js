import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { uuid } from 'uuidv4';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import 'react-notifications-component/dist/theme.css';
// import ReactNotification from 'react-notifications-component'



function App() {


  // const removeContactHandler = (id) => {
  //   const newContactlist = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContactlist);
  // };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Route path="/add" component={() => (<AddContact />)} />
        <Route path="/" exact component={() => <ContactList />} />
      </Router>

    </div>
  );
};

export default App;
