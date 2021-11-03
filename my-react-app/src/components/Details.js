import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Details() {
    const [user, setUser] = useState([])
    useEffect(() => {
        test();
    }, []);
    async function test() {
        console.log("I run everytime this component rerenders")
        const response = await axios.get('/getData');
        console.log("Hello", response.data);
        await setUser(response.data)
    }
    return (
        <div>
            <p>Details Works</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SrNo.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((curr, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{curr.firstName}</td>
                                    <td>{curr.lastName}</td>
                                    <td>{curr.email}</td>
                                    <td>{curr.address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Details
