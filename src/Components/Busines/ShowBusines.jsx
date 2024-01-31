import { observer } from "mobx-react";
import { useEffect } from 'react'
import BusinesStore from "../../Stores/BusinesStore";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import './busines.css'
import { getBusines, putBusines } from '../../Stores/ServerStore';
const ShowBusines = (observer(({ func }) => {
    useEffect(() => {
        putBusines(BusinesStore.busines);
        getBusines();
          }, []);
    const handleEdit = () => {
        func();
    }

    return (
        <>
            <div className="busines">
                <div className="edit"><Fab aria-label="edit" onClick={handleEdit} color="success"> <EditIcon />  </Fab></div>
                <div className="logo"><img src={BusinesStore.busines.logo}></img></div>
                <p className="name">{BusinesStore.busines.name}</p>
                <h2 className="name">{BusinesStore.busines.name}</h2>
                <h4 className="name1"> {BusinesStore.busines.description}</h4>
                <h4 className="owner">{BusinesStore.busines.owner}</h4>
                <h6 className="owner"> {BusinesStore.busines.address}</h6>
                <h6 className="owner"> {BusinesStore.busines.phone}</h6>
                <div className="bb"></div>
            </div>
        </>
    )
}))


export default ShowBusines