import { navLinks } from "../constants"

const Button = ({ label }) => {

    const hotmartLink = navLinks[2].href;

    return (
        <a href={hotmartLink} className="flex justify-center items-center gap-2 px-4 py-3 border font-montserrat text-lg font-bold leading-none bg-[#6C5DD3] hover:bg-[#4a3f8d] rounded-full text-white">
            {label}
        </a>
    )
}

export default Button