import React from 'react'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';



const ContactList = () => {

  const contacts = useSelector((state) => state.contactDetails.contacts );
  const filter = useSelector(selectNameFilter);


  const filteredContacts = contacts.items.filter(contact =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  

  return (
    <div>
      <ul className={css.contactLIst} >
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contact}>
            <Contact key={contact.id} data={contact} />
          </li>
        ))}
      </ul> 
    </div>
  );
};


export default ContactList
