/* eslint-disable */
import React from 'react';

export const ContactListFn = ({contacts, selected, onSelect}) =>
{

  return (
    <div className="list-group">
      {contacts.map((contact) => (
        <button
          key={contact.id}
          onClick={(e) => onSelect(contact)}
          className={`list-group-item ${selected && (selected.id === contact.id) ? 'active' : ''}`}
        >
          {contact.name}
        </button>
      ))}
    </div>
  );
}

export class ContactList extends React.Component{

  static defaultProps = {
    contacts: []
  }

  render() {
    return (
      <div className="list-group">
        {this.props.contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={(e) => this.props.onSelect(contact)}
            className={`list-group-item ${this.props.selected && (this.props.selected.id === contact.id) ? 'active' : ''}`}
          >
            {contact.name}
          </button>
        ))}
      </div>
    );
  }
}
