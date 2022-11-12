import React, { useState } from 'react';
import './EditContactModal.css';

const EditContactModal = (props) => {
    let [contact, setContact] = useState(props.editContact);

    function nameEditInput(e) {
        let newObj = { ...contact };
        newObj.name = e.target.value;
        setContact(newObj);
    }
    function lastnameEditInput(e) {
        let newObj = { ...contact };
        newObj.lastname = e.target.value;
        setContact(newObj);
    }
    function numberEditInput(e) {
        let newObj = { ...contact };
        newObj.number = e.target.value;
        setContact(newObj);
    }
    function ContactSave() {
        props.saveContact(contact);
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.modalClose}>&times;</button>
                </div>
                <div>
                    <p>Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={nameEditInput}
                        input={contact.name}
                    />
                </div>
                <div>
                    <p>Lastname</p>
                    <input
                        type="text"
                        placeholder="LastName"
                        onChange={lastnameEditInput}
                        input={contact.lastname}
                    />
                </div>
                <div>
                    <p>Phone</p>
                    <input
                        type="text"
                        placeholder="PhoneNumber"
                        onChange={numberEditInput}
                        input={contact.number}
                    />
                </div>
                <button onClick={ContactSave}>save</button>
            </div>
        </div>
    );
};

export default EditContactModal;
