import { useState } from "react";


const useService = () => {
   
    const [services, setServices] = useState([]);
    fetch('./services.json')
        .then(res => res.json())
        .then(service => setServices(service))
        .catch(error => {
        console.log(error.messege)
    })

    return {
        services , setServices
    }
};

export default useService;