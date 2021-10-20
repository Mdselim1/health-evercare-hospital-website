import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../context/useAuth';
import './ServiceDetails.css';


const ServiceDetails = () => {

    const { serviceId } = useParams();
    
    const {services } = useAuth();

   
    
    const item = services.find(ser => ser.id == serviceId);
    
    const { img, title, data } = item;


    return (
        <Container>
            <div className="mx-auto py-5 px-3 service-details">
            <img src={img} className="w-100 rounded-2" alt="" />
            <h1 className="fs-1 fw-bold text-success my-3">{title}</h1>
            <p className="fs-4 fw-bold text-primary">{data}</p>
        </div>
        </Container>
    );
};

export default ServiceDetails;