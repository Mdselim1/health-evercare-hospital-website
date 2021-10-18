import { useEffect, useState } from "react";


const useDoctors = () => {
   
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(doctor => setDoctors(doctor))
            .catch(error => {
            console.log(error.messege);
        })
    },[])

    return {
        doctors , setDoctors
    }
};

export default useDoctors;