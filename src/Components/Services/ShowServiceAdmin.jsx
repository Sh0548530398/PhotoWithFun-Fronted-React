
import { observer } from "mobx-react";
import { useState, useEffect } from 'react'
import Service from "./Service";
import AddService from "./AddService";
import DataStore from "../../Stores/DataStore";
import { getServices } from "../../Stores/ServerStore";


const ShowServiceAdmin = (observer(() => {
    const [isAdd, setIsAdd] = useState(false);
    const [servingList, setServingList] = useState(DataStore.services);

    useEffect(() => {
        getServices();
    }, []);
    useEffect(() => {
        setServingList(DataStore.services);
    }, [DataStore.services]);

    const handleAddService = () => {
        setIsAdd(!isAdd);
    }

    return (
        <>
            <div className="allServices">
                {isAdd ? <AddService func={handleAddService}></AddService> : <button className="button" onClick={handleAddService}>הוסף שירות</button>}
                {servingList.map((service, i) =>
                    <Service key={i} name={service.name} price={service.price} discription={service.description}></Service>
                )}
            </div>
        </>
    )
}))

export default ShowServiceAdmin
