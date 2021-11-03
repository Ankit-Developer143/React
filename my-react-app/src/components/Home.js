import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Home() {

    const [firstName, setfirst] = useState("");
    const [lastName, setlast] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    // const [allEntry, setAllEntry] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();
        const newEntry = await { firstName: firstName, lastName: lastName, email: email, address: address };
        // await console.log(allEntry);
        const response = await axios.post('/addData', newEntry);
        console.log("Hello", response.data);
    }
    return (
        <div className="container">
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control type="text" value={firstName} onChange={(e) => setfirst(e.target.value)} placeholder="Enter firstname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control type="text" value={lastName} onChange={(e) => setlast(e.target.value)} placeholder="Enter lastname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}
