import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import s from "./ContactsList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={s.contactsWrapper}>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={shortid.generate()}>
          <span>{name}: </span>
          <span>{number}</span>
          <button
            className={s.contactButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
