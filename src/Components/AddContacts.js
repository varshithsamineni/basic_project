import React from 'react';
import {useState} from "react";
const AddContact = (props) => {
    const [user,setUser]=useState({name:'',email:''});
    const add=(e)=>{
        e.preventDefault();
        if(user.name===""||user.email==="")
        {
            alert("all fields are mandatory");
            return;
        }
       // console.log(user);
       props.addContactHandler(user);
       setUser({name:'',email:''});

    };
    return ( 
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" value={user.name} pleceholder="Name" onChange={(e)=>setUser({...user,name:e.target.value})}></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} placeholder="Email" onChange={(e)=>setUser({...user,email:e.target.value})}></input>
                   
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
     );
}
 
export default AddContact;