import React from 'react'
import Contact from './Contact.js'
import Table from 'react-bootstrap/Table'
import DisplayContact from './DisplayContact.js'

function ContactList(props) {

  function headings() {
    let headings = ["Name", "Email", "Phone Number"]
    return <tr>{headings.map((heading) => <th key={heading}>{heading}</th>)}</tr>
  }

  function contacts() {
    if (props.contacts === null) return
    return props.contacts.map((contact, i) => 
        <DisplayContact key={i} contact={contact} />
        )
  }

  return (
    <Table striped bordered hover>
      <thead>{headings()}</thead>
      <tbody>{contacts()}</tbody>
    </Table>
  )
}

export default ContactList