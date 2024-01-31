import './meeting.css'

function Meeting({name,phone,email,date,time,type}) {

    return (
      <>
       <div className='meeting'>
       <h4>סוג הפגישה: {type}</h4>
        <h5>שם הלקוח: {name}</h5>
        <h6>טלפון: {phone}</h6>
        <h6>{email} :מייל</h6>
        <h6>תאריך הפגישה: {date}</h6>
        <h6>שעת הפגישה: {time}</h6>
       

        </div>
      </>
    )
  }
  
  export default Meeting