import { TiHome, TiGroup } from 'react-icons/ti';
import { GiCompass } from "react-icons/gi";

export const IconsOne = () => {
    return (
        <div className="homeIcon">
            <h3>
                <TiHome />
            </h3>
            <h3>
                <TiGroup />
            </h3>
            <h3>
                <GiCompass />
            </h3>
        </div>
    )
}

export default IconsOne

