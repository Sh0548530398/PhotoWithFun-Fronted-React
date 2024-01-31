
import { useState } from 'react'
import { observer } from 'mobx-react';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { addMeeting} from '../../Stores/ServerStore';


const AddMeeting=(observer(({func})=> {

  const [formData, setFormData] = useState({ type: '', name: '', phone: '', email: '', date: '',  time: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    func();
    addMeeting(formData);
  }
  return (
    <>
      <div className='addMeeting'>
        <form onSubmit={handleSubmit} className='form'>
          <TextField label="סוג הפגישה" name="type" value={formData.type} onChange={handleChange} color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
          <br />
          <TextField label="שם" name="name" value={formData.name} onChange={handleChange} color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
          <br />
          <TextField label="טלפון" name="phone" value={formData.phone} onChange={handleChange} color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
          <br />
          <TextField label="מייל" name="email" value={formData.email} onChange={handleChange} color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
          <br />
          <TextField label="תאריך" type="date" name="date" value={formData.date} onChange={handleChange} color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
          <br />
          <TextField label="שעה" type="time" name="time" value={formData.time} onChange={handleChange} color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
          <br />
          <Button type='submit' variant="contained" color="success">save</Button>
        </form>
      </div>
    </>
  )
}))

export default AddMeeting
