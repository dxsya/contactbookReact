import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import NewContact from './components/NewContactArea/NewContact';
import EditContactModal from './components/EditContactModal/EditContactModal';

function App() {
    const [editContact, setEditContact] = useState({});

    const [modal, setModal] = useState(false);

    const [contacts, setContacts] = useState([]);

    function editContacts(index) {
        setModal(true);
        setEditContact(contacts[index]);
    }

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

    function modalClose() {
        setModal(false);
    }

    function saveContact(newContact) {
        const newContacts = contacts.map((contact) => {
            if (contact.id === newContact.id) {
                return newContact;
            }
            return contact;
        });

        setContacts(newContacts);
        modalClose();
    }

    return (
        <div className="App">
            <NewContact handleContact={handleContact} />
            <ContactList
                contacts={contacts}
                deleteContact={deleteContact}
                editContacts={editContacts}
            />
            {modal ? (
                <EditContactModal
                    editContact={editContact}
                    saveContact={saveContact}
                    modalClose={modalClose}
                />
            ) : null}
        </div>
    );
}

export default App;
