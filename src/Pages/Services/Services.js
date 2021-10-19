import React from 'react';
import { Container } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Service from '../Service/Service';

const Services = () => {

    const { services} = useData();

    return (
        <div className="my-5">
            <Container>
            <h1 className="text-center py-4 fw-bolder fs-2">Our Services</h1>
            <div className="doctor-container">
                        {
                            services.map(short=><Service key={short.key} short={short}></Service>)
                        }
                    </div>
            </Container>
        </div>
    );
};

export default Services;