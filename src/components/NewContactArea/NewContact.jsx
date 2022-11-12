import React, { useState } from 'react';
import './NewContact.css';

const NewContact = ({ handleContact }) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [number, setNumber] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleLastname = (e) => {
        setLastname(e.target.value);
    };
    const handleNumber = (e) => {
        setNumber(e.target.value);
    };
    const handleAdd = () => {
        let newContact = {
            name: name,
            lastname: lastname,
            number: number,
            id: Date.now(),
        };
        handleContact(newContact);
        setName('');
        setLastname('');
        setNumber('');
    };
    return (
        <div className="newContactArea">
            <div>
                <p>Name</p>
                <input type="text" placeholder="Name" onChange={handleName} />
            </div>
            <div>
                <p>Lastname</p>
                <input
                    type="text"
                    placeholder="LastName"
                    onChange={handleLastname}
                />
            </div>
            <div>
                <p>Phone</p>
                <input
                    type="text"
                    placeholder="PhoneNumber"
                    onChange={handleNumber}
                />
            </div>
            <button onClick={handleAdd}>Add contact</button>
        </div>
    );
};

export default NewContact;
