import React from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

const App = () => {

  return (
    <>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
   </>
  )
}

export default App
