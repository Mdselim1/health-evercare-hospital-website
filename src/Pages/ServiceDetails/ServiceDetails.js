import React from 'react';
import useData from '../../Hooks/useData';

const ServiceDetails = () => {

    const { services } = useData();
    console.log(services);

    return (
        <div>
            <h1>This is service Details</h1>
        </div>
    );
};

export default ServiceDetails;