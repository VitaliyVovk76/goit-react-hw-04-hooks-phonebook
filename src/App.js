import "./App.css";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import s from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  //принимает state из ContactForm, делает проверку и записывает его в state App
  const hendleFormSbumit = (data) => {
    const { name, number, id } = data;
    if (banToAdd(name)) {
      alert(`${name} is alreadi in contacts`);
      return;
    }
    setContacts(() => [...contacts, { name, number, id }]);
    console.log("Contacts:", contacts);
  };
  //записывает значение contacts в localStorage
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts]);

  //записывает в filter значение из формы фильтра
  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };
  //фильтрует this.state.contacts
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  //находит одинаковые имена в this.state.contacts
  const banToAdd = (searchName) => {
    return contacts.find(({ name }) => name === searchName);
  };
  //удаляет выбранный контакт
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <h1 className={s.appTitle}>Phonebook</h1>
      <ContactForm onFormSubmit={hendleFormSbumit} />

      <h2 className={s.appTitle}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}

export default App;
