import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useDarkModeContext } from "../../context/DarkMode";
                        
const ProfileModal = () => {
    const [imgSrc] = useState(localStorage.getItem('userImg') || "https://res.cloudinary.com/du94mex28/image/upload/v1697795732/sonus/Portrait_Placeholder_qfearj.png");

    const [isElementHidden, setIsElementHidden] = useState(true);

    const toggleElement = () => {
        setIsElementHidden(!isElementHidden);
    }

    const { isDarkTheme, toggleDarkTheme, getClassName } = useDarkModeContext()
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)
    
    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('userImg')
        dispatch({ type: 'LOGOUT' })
        navigate('/')
    }

    useEffect(() => {
        const handleOutsideClick = (e: Event) => {
            if (isElementHidden) return;
            const target = e.target as Element;
            if (target && !target.closest(".profile-modal") && target !== document.querySelector(".corner-user")) {
                toggleElement();
            }
        };

        const handleEscapeKey = (e: { key: string; }) => {
            if (isElementHidden) return;
            if (e.key === "Escape") {
                toggleElement();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isElementHidden]);


  return (  
        <div className="corner-items">
            <div className="corner-logo-img">
                <NavLink className={getClassName("corner-img")} to={"/home"}></NavLink>
            </div>
            <div className="corner-user-container">
                <div className={`profile-modal ${isElementHidden ? 'hidden-modal' : 'visible-modal'}`}>
                    <NavLink className="modal-text" to={"/profile"}>Profile</NavLink>
                    <p className="modal-text-theme">Toggle theme</p>
                    <label className="switch">
                    <input type="checkbox" name="themeToggle" checked={isDarkTheme} onChange={toggleDarkTheme} />
                    <span className="slider" />
                    </label>
                    <button onClick={handleLogout}><p className="modal-text">Logout</p></button>
                </div>
                <div style={{ backgroundImage: `url(${imgSrc})` }} className="corner-user" onClick={toggleElement} />
            </div>
        </div>
                        
  )
}

export default ProfileModal




                    
                        
