/* eslint-disable */
import React, { useState, useEffect } from 'react';
import initContacts from './contacts.json';
import { ContactListFn } from './ContactListFn';
import { ContactFormFn } from './ContactFormFn';

export const ContactsContainerFn = (props) =>
{
  // const [contacts, { setInitial, saveContact }] = useContacts();
  const [contacts, setContacts] = useState(initContacts)
  const [selected, setSelected] = useState(null)
  const {service} = props;

  useEffect(() =>
  {(async() =>
    {
      const cont = await service.getContacts()
      setContacts(cont)
    })
  }, [service])

  const onSelect = contact => setSelected(contact)
  const onCancel = () => setSelected(null)
  const newContact = () => setSelected({name: '', details: ''})
  const onSubmit = (contact) => 
  {
    service.saveContact(contact).then(async () =>
    {
      const updatedContacts = await service.getContacts()
      setContacts(updatedContacts)
    })
  }

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Contacts</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ContactListFn
              contacts={contacts}
              selected={selected}
              onSelect={onSelect}
            />
          </div>
          <div className="col-md-4">
            {selected
            ? (
              <ContactFormFn contact={selected}
                onSelect={onSelect}
                onSubmit={onSubmit}
                onCancel={onCancel}
              />
            ) : (
              <div>
                <button id="new-contact" onClick={newContact} className="btn btn-primary">New contact</button>
              </div>
            )}
          </div>
        </div>
      </div>
  )
}

// export class ContactsContainer extends React.Component {

//   constructor(props) {
//     super(props);

//     // ContactsService object
//     this.service = this.props.service;

//     this.state = {
//       contacts: [],
//       selected: null
//     };

//     this.service.getContacts().then((contacts) => {
//       this.setState({
//         contacts
//       });
//     });
//   }

//   newContact = () => {
//     this.setState({
//       selected: {
//         name: '',
//         details: ''
//       }
//     });
//   }

//   onSelect = (contact) => {
//     this.setState({
//       selected: contact
//     });
//   }

//   onSubmit = (contact) => {
//     this.service.saveContact(contact).then(()=>{
//       this.service.getContacts().then((contacts) => {
//         this.setState({
//           contacts
//         });
//       });
//     });
//   }

//   onCancel = () => {
//     this.setState({
//       selected: null
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <h1>Contacts</h1>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-4">
//             <ContactList
//               contacts={this.state.contacts}
//               selected={this.state.selected}
//               onSelect={this.onSelect}
//             />
//           </div>
//           <div className="col-md-4">
//             {this.state.selected
//             ? (
//               <ContactForm contact={this.state.selected}
//                 onChange={this.onSelect}
//                 onSubmit={this.onSubmit}
//                 onCancel={this.onCancel}
//               />
//             ) : (
//               <div>
//                 <button id="new-contact" onClick={this.newContact} className="btn btn-primary">New contact</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
