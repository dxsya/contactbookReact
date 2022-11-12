import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import NewContact from './components/NewContactArea/NewContact';

function App() {
    const [contacts, setContacts] = useState([]);
    function handleContact(obj) {
        let newContacts = [...contacts];
        newContacts.push(obj);
        setContacts(newContacts);
    }

    function deleteContact(id) {
        let newContacts = contacts.filter((item) => {
            return item.id !== id;
        });
        setContacts(newContacts);
    }

    return (
        <div className="App">
            <NewContact handleContact={handleContact} />
            <ContactList contacts={contacts} deleteContact={deleteContact} />
        </div>
    );
}

export default App;
