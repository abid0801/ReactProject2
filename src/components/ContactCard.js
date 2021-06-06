import React from "react";


const CardContact = (props) => {

    return (
        <>
            {props.contacts.map(contact => (
                <div key={contact.id} className="item">
                    <div className="content">
                        <div className="header">
                            {contact.name}</div>
                        <div>{contact.email}</div>   {/*it would be contact.name or contact.email if decons was not pre*/}

                    </div>
                    <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => props.clickHandler(contact.id)}></i>
                </div>

            ))
            }
        </>

    );


};

export default CardContact;