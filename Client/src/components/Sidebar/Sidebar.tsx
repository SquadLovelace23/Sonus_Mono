import Navbar from '../Navbar/Navbar'
import Player from '../Player/Player'
import { useDarkModeContext } from '../../context/DarkMode'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const { getClassName } = useDarkModeContext()

    return (
        <div className="control-panel">
            <div className="card-panel">
                <div className="control-panel-content">
                    <div className="title-panel">
                        <NavLink to={'/home'}><div className={getClassName("control-panel-logo")} /></NavLink>
                    </div>
                    <div className={getClassName("divider")}></div>

                    <Navbar />
                    <div className={getClassName("divider")}></div>
                    <div className="player">
                        
                        <div className="img-song">
                            <div className="song-thumbnail" />
                            <div className="song-details">
                                <p className={getClassName("song-title")}>Song Title</p>
                                <p className={getClassName("song-artist")}>Artist</p>
                            </div>
                        </div>
                        <div className="fav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`icon-tabler icon-tabler-heart ${getClassName("icon")}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                            </svg>
                        </div>
                    </div>

                    <Player />

                    <div className={getClassName("divider")}></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar