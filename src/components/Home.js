import React,{useState} from 'react'

export default function Home() {
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [allEntry,setAllEntry] = useState([]);
    
       const submitForm = (e) =>{
            e.preventDefault();
            const newEntry = {email:email,password:password};
            setAllEntry([...allEntry,newEntry])
        }


    return (
        <div className="container" >
            <form onSubmit={submitForm}>
            <h1>React Form</h1>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
