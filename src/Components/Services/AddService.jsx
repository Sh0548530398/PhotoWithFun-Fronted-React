import { observer } from "mobx-react";
import { useState } from 'react';
import { TextField} from "@mui/material";
import Button from '@mui/material/Button';
import { addService } from "../../Stores/ServerStore";


const AddService=(observer(({func})=> {

  const [formData, setFormData] = useState({
    name:'',
    price:'',
    discription:'',
  });

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
}

const handleSubmit = (e) => {
  e.preventDefault();
  func();
  addService(formData);
  
}

    return (
      <>
       <div className="addService">
       <form onSubmit={handleSubmit} className='form'>
       <TextField  label="שם" name="name" value={formData.name} onChange={handleChange} color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
       <br />
       <TextField  label="מחיר" name="price" value={formData.price} onChange={handleChange}  color="success" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl"/>
       <br />
       <TextField  label="תיאור" name="description" value={formData.description} onChange={handleChange}  color="success" focused sx={{ width: 300, maxWidth: '100%', }}dir="rtl"/>
       <br />
       <Button type='submit' variant="contained" color="success">save</Button>
       </form>
       </div>
      </>
    )
  }))
  
  export default AddService