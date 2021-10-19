import React, { useEffect, useState } from 'react';

const useData = () => {
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(doctor => setDoctors(doctor))
            
    },[])
        
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(service => setServices(service))
       
    }, []);
    
    return {
        services, setServices, doctors, setDoctors
    }
};

export default useData;