import React,{useState} from 'react'
import  './basicForms.css';

 function BasicForms() {
     const [email , setEmail]= useState("");
     const [password , setPassword]= useState("");
     const [allEntry,setAllEntry]=useState([]);
     const submitLogin =(event)=>{
         event.preventDefault();
         const newEntry={email:email,
        password:password};
        setAllEntry([...allEntry,newEntry]);
     }
    return (
        <div className="custombody">
        <form action="" onSubmit={submitLogin} className="formstyle">
            <div>
                <label htmlFor="email">Email Id</label><br/>
                <input type="email" name="email" placeholder ="Enter Email Id" className="email" autoComplete="on" value={email}
                onChange={(event)=>setEmail(event.target.value)}/>
            </div> 
            <div>
                <label htmlFor="password">Password</label><br/>
                <input type="password" name="password" placeholder ="Enter Password" className="password" autoComplete="off" value={password}
                onChange={(event)=>setPassword(event.target.value)}/>
            </div>     
             <button type="flat" className="buttonstyle">Sign in</button> <br/> 
             <a href="/" className="linkstyle">Reset Password</a> 
            

        </form>
        <div>
            {
                allEntry.map((curElem)=>{
                    return (
                        <div>
                            <p>{curElem.email}</p>
                            <p>{curElem.password}</p>
                        </div>
                    )

                }
                )
            }
        </div>
        </div>
    )
}
export default BasicForms