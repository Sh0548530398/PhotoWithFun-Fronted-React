import { useState } from 'react'
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import axios from 'axios'
import './admin.css'

 

function Login({func}) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    axios.post('http://localhost:8787/login', {
      "name":"admin","password":"123456"
    }).then((res) => {
      console.log(res.status);
      func()
    }).catch((error) => {
      console.log(error.message);
      alert("שם משתמש וססמא לא נכונים נסה שנית");
      setPassword('')
      setName('')
    })
  }
  
  //  const handleLogin = async () => {
  //   axios.post('http://localhost:8787/login', {
  //     "name":name,"password":password
  //   }).then((res) => {
  //     func()
  //   }).catch((error) => {
  //    alert("נסה שנית")
  //     setPassword('')
  //     setName('')
  //   })
  // }

 

  
  return (
    <>
    <h2>הקש שם משתמש וססמא</h2>
          <br />
          <TextField  label="שם משתמש" value={name} onChange={(e) => setName(e.target.value)}  color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl"/>
       <br />
       <TextField  label="ססמא" value={password} onChange={(e) => setPassword(e.target.value)} type="password" color="success" focused sx={{ width: 300, maxWidth: '100%', }}dir="rtl"/>
       <br />
       <br/>
       <Button onClick={handleLogin} variant="contained" color="success">log in</Button>

    
     
    </>
  )
}

export default Login