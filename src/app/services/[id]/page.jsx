const ServiceDetails = ({ params }) => {
    const id = params.id;
    return (
        <div>
            <h2>services Details</h2>
            <p>ID: {id}</p>
        </div>
    );
};

export default ServiceDetails;