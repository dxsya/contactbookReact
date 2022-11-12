import React from 'react';

const ContactList = (props) => {
    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contacts.map((contact) => (
                        <tr key={`${contact.firstName} ${contact.lastName}`}>
                            <td>{contact.name}</td>
                            <td>{contact.lastname}</td>
                            <td>{contact.number}</td>
                            <td>
                                <button>edit</button>
                                <button
                                    onClick={() =>
                                        props.deleteContact(contact.id)
                                    }
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;
