const ServiceCard = ({ imgURL, label }) => {
    return (
        <div className="flex-1 w-full rounded-[20px] shadow-3xl mr-4 md:mr-8 mb-4 md:mb-0">
            <div className="flex justify-center items-center">
                <img src={imgURL} alt={label} />
            </div>
        </div>
    );
}

export default ServiceCard;
