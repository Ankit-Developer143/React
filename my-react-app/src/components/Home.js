import React,{useState} from 'react'

export default function Home() {
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [allEntry,setAllEntry] = useState([]);
    
       const submitForm = async (e) =>{
            e.preventDefault();
            const newEntry = await {email:email,password:password};
           await setAllEntry([...allEntry,newEntry])
           await console.log(allEntry);
        }


    return (
        <div className="container" >
            <form onSubmit={submitForm}>
            <h1>React Form</h1>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit">Submit</button>
            </form>
            <div>
                {
                     allEntry.map((curr) =>{
                        return (
                            <p>Hello, {curr.email}</p>
                        )
                    })
                }
            </div>
        </div>
    )
    
}
