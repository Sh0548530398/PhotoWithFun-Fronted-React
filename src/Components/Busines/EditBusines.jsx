import { observer } from "mobx-react";
import { useState } from 'react'
import { TextField} from "@mui/material";
import Button from '@mui/material/Button';
import BusinesStore from "../../Stores/BusinesStore";
import {putBusines} from '../../Stores/ServerStore';
import './busines.css'

const EditBusines=(observer(({func})=> {

const [formData, setFormData] = useState(BusinesStore.busines);

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
}

const handleSubmit = (e) => {
  e.preventDefault();
  func();
  BusinesStore.editDeataild(formData);
  putBusines(formData);
  BusinesStore.markIsEdit();
}

    return (
      <>
      <div className="busines1">
       <form onSubmit={handleSubmit} className='form'>
       <TextField  label="שם" name="name" value={formData.name} onChange={handleChange} color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
       <br />
       <TextField  label="כתובת" name="address" value={formData.address} onChange={handleChange}  color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl"/>
       <br />
       <TextField  label="טלפון"name="phone" value={formData.phone} onChange={handleChange}  color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl"/>
       <br />
       <TextField  label="בעלים" name="owner" value={formData.owner} onChange={handleChange}  color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl"/>
       <br />
       <TextField  label="תיאור" name="description" value={formData.description} onChange={handleChange}  color="success" focused sx={{ width: 300, maxWidth: '100%', }}dir="rtl"/>
       <br />
       <TextField  label="לוגו" name="logo" value={formData.logo} onChange={handleChange}  color="success" focused sx={{ width: 300, maxWidth: '100%', }}dir="rtl"/>
       <br />
       <Button type='submit' variant="contained" color="success">save</Button>
       </form>
       </div>
       
      </>
    )
  }))
  
  export default EditBusines