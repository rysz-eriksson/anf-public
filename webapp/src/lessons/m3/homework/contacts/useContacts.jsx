import React, { useState, useEffect } from 'react'
import initContacts from './contacts.json'
import { v4 as uuid } from 'uuid';

export const useContacts = () =>
{
    const [contacts, setContacts] = useState(initContacts)
    // const setInitial = (initialList) =>
    // {
    //     useEffect(() => {
    //         const promise = new Promise(resolve => setTimeout(() => resolve(), 0))       
    //         promise.then(
    //             setContacts(initialList)
    //         )
    //     }, [])
    // }
    // const setInitial = initialList => setContacts(initialList)

    const saveContact = (contact) =>
    {
        setContacts(contacts =>
        {
            const index = contacts.findIndex(({ id }) => contact.id === id);

            if (index === -1) {
              contact.id = uuid();
              contacts.push(contact)
            } else
                contacts.splice(index, 1, contact);
        })
    }

    return [ contacts, { setInitial, saveContact } ]
}