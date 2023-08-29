const ServiceCard = ({ imgURL, label }) => {
    return (
        <div className="flex-1 w-full rounded-[20px] shadow-3xl">
            <div className="flex justify-center items-center">
                <img src={imgURL} alt={label} />
            </div>
        </div>
    );
}

export default ServiceCard;
