import shortid from "shortid";
import { useState } from "react";
import PropTypes from "prop-types";

import s from "./ContactForm.module.css";

function ContactForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //записывает в state значения поля формы
  const hendleChange = (event) => {
    // const { name, value } = event.currentTarget;
    switch (event.currentTarget.name) {
      case "name":
        setName(event.currentTarget.value);
        break;
      case "number":
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };
  //передает в Аpp значения полей формы
  const hendleSubmit = (event) => {
    event.preventDefault();

    onFormSubmit({
      name: name,
      number: number,
      id: shortid.generate(),
    });
    reset();
  };
  // очистка формы
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <form className={s.contactForm} onSubmit={hendleSubmit}>
      <label className={s.formLabel}>
        Name
        <input
          className={s.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={hendleChange}
        />
      </label>
      <label className={s.formLabel}>
        <span>Number</span>
        <input
          className={s.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={hendleChange}
        />
      </label>

      <button className={s.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = { onFormSubmit: PropTypes.func.isRequired };

export default ContactForm;
