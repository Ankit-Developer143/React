import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { About } from '../About';


function UserServices() {
    const [users,setUser] = useState([]);
    const callBackendAPI = async () => {
        // const response = await fetch('/getData');
        // const body = await response.json();
        // console.log("Hello",body);

        // const response = await fetch('/addData',myData);
        // const body = await response.json();
        // console.log(body);
        //   const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ firstName: 'React POST Request Example' })
        // };
        // const response = await fetch('/addData',requestOptions);
        //   const body = await response.json();
        //   console.log(body);
        // };
        //   const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ firstName: 'NewUpdate 12111111' })
        // };
        // const id = "618111d6ce6b29a0e9b1ff34"
        // const response = await fetch(`/${id}`,requestOptions);
        //   const body = await response.json();
        //   console.log(body);
        //   setUser(body)
        // };
        //   const requestOptions = {
        //     method: 'DELETE',
        //     headers: { 'Content-Type': 'application/json' }
        // };
        // const id = "618111d6ce6b29a0e9b1ff34"
        // const response = await fetch(`/${id}`,requestOptions);
        // const body = await response.json();
        // console.log(body);
        // setUser(body)

      //const response = await axios.get('/getData');
      // console.log("Hello",response.data);
      // setUser([response.data])
      // console.log(users);

      // const requestOptions = {
      //   firstName: 'React POSTssss Request Example'
      // };
      // const response = await axios.post('/addData', requestOptions);
      // console.log("Hello", response.data);

      // const requestOptions = {
      //   firstName: 'React new Request Example'
      // };
      // const id = "6182345973c90ab0cbbaa732"
      // const response = await axios.put(`/${id}`, requestOptions);
      // console.log(response.data);

      // const id = "6182345973c90ab0cbbaa732"
      // const response = await axios.delete(`/${id}`);
      // console.log(response.data);
    


  };
    return (
        <div>
            <h1>Work User</h1>
            <button onClick={callBackendAPI}>Call</button>
            <About  message="Data from first component"/>
            
        </div>
    )
}

export default UserServices;
