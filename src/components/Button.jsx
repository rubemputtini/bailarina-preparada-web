const Button = ({ label }) => {

    return (
        <a href="#cta" className="gap-2 px-3 py-1.5 md:py-2 border font-montserrat md:text-lg font-bold leading-none bg-[#6C5DD3] hover:bg-[#4a3f8d] rounded-full text-white">
            {label}
        </a>
    )
}

export default Button