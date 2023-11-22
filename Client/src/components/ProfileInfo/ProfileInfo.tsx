import { useState, ChangeEvent } from "react";
import { useDarkModeContext } from "../../context/DarkMode";


const ProfileInfo = () => {

    const storedUser = JSON.parse(localStorage.getItem('user') || '');
    const { username } = storedUser || {};
    const { getClassName } = useDarkModeContext()

    const [imgSrc, setImgSrc] = useState(localStorage.getItem('userImg') || "https://res.cloudinary.com/du94mex28/image/upload/v1697795732/sonus/Portrait_Placeholder_qfearj.png");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setImgSrc(url);
            localStorage.setItem('userImg', url)
        }
    }

    return (
        <><div className="display-panel">
            <div className="card-main">
                <div className="display-panel-content">
                    <div className="user">
                    <div style={{ backgroundImage: `url(${imgSrc})` }} className="user-img"></div>
                        <div className="camera-container">
                            <input className="img-input" type="file" onChange={handleChange}/>
                            <svg xmlns="http://www.w3.org/2000/svg" className='icon-tabler-camera-plus' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5"></path>
                                <path d="M16 19h6"></path>
                                <path d="M19 16v6"></path>
                                <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            </svg>
                        </div>
                        <div className="user-details">
                            <p className={getClassName("name-user")}>{username}</p>
                            <p className={getClassName("email-user")}>email@gmail.com</p>
                            <input className="edit-profile-btn" type="submit" value="Edit profile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfileInfo