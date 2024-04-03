import React, { useEffect } from 'react'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../redux/contactsSlice';



const ContactList = () => {

  const contacts = useSelector((state) => state.contactDetails.contacts )
  const dispatch = useDispatch()
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));

    dispatch(setContacts(contacts))

  }, [contacts, dispatch]);





  return (
    <div>
      <ul className={css.contactLIst} >
        {contacts && contacts.items.map((contact) => (
          <li key={contact.id} className='css.contact'>
            <Contact data={contact} />
          </li>
        ))}
      </ul> 
    </div>
  );
};


export default ContactList
