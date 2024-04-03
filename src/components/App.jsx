import React, { useState, useEffect } from 'react';
import './App.css';
import fullContact from './contacts.json';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

const App = () => {

  // const [contacts, setContacts] = useState(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   return storedContacts ? JSON.parse(storedContacts) : fullContact
  // });
  // const contacts = useSelector((state) => state.contactDetails.contacts )
  // const filter = useSelector((state) => state.contactDetails.filter )
  
  // const [filter, setFilter] = useState('');

// перенесити туди куди треба

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  

  const onAddNewContact = (newContactData) => {
    const FinalContact = {
      ...newContactData,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, FinalContact]);
  }; // del буде викон у редакс


  // const deleteContact= (contactId) => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(contact => contact.id !== contactId)
  //   })
  // } // del буде викон у редакс
  

  // const searchContact = contacts.filter((contact) =>
  // contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    // <>
    //  <h1>Phonebook</h1>
    //  <ContactForm onAddNewContact={onAddNewContact} />
    //  <SearchBox filter={filter} onFilter={setFilter}/>
    //  <ContactList contacts={searchContact} onDelete={deleteContact} />
    // </>
    <>
    <h1>Phonebook</h1>
    <ContactForm  onAddNewContact={onAddNewContact} />
    <SearchBox />
    <ContactList />
   </>
  )
}

export default App
