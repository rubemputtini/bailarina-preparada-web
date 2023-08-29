import { navLinks } from "../constants"

const Button = ({ label }) => {

    const hotmartLink = navLinks[2].href;

    return (
        <a href={hotmartLink} className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg font-bold leading-none bg-[#6C5DD3] rounded-full text-white">
            {label}
        </a>
    )
}

export default Button