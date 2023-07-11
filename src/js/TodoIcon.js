import { CiCircleCheck as CheckSVG} from "react-icons/ci";
import { CiCircleRemove as DeleteSVG} from "react-icons/ci";

const iconTypes = {
    "check": (color) => <CheckSVG className="icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="icon-svg" fill={color}/>,
}

function TodoIcon({type, color, onClick}) {
    return (
        <span
            className={`icon icon-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };