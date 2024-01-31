import { observer } from "mobx-react";
import { useEffect } from 'react'
import BusinesStore from "../../Stores/BusinesStore";
import './busines.css'
import { getBusines} from '../../Stores/ServerStore';

const ShowBusinesCustomer = (observer(() => {

  useEffect(() => {
    getBusines();
      }, []);

  return (
    <>
      <div className="busines">
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

export default ShowBusinesCustomer

