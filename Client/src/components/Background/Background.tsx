import { useDarkModeContext } from "../../context/DarkMode";
import "./Background.css"

const Background = () => {
    const { getClassName } = useDarkModeContext();

    return (
        <div className={getClassName("background")}></div>
    )
}

export default Background