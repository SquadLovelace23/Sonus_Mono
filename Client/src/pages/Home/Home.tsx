import "./Home.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import ProfileModal from "../../components/ProfileModal/ProfileModal"
import { useDarkModeContext } from "../../context/DarkMode"

const Home = () => {

    const { getClassName } = useDarkModeContext()
    
    return (
        <>
            <div className="cards-container">

                <Sidebar />

                <div className="display-panel">
                    <div className="card-main">
                        <ProfileModal />
                        <div className="display-panel-content">
                            <p className={getClassName("genre-title")}>Genres</p>
                            <div className="genres-swiper">
                                <div className={getClassName("genres")}>
                                    <p className="genre-text">Pop</p>
                                </div>
                                <div className={getClassName("genres")}>
                                    <p className="genre-text">Rock</p>
                                </div>
                                <div className={getClassName("genres")}>
                                    <p className="genre-text">Rap</p>
                                </div>
                                <div className={getClassName("genres")}>
                                    <p className="genre-text">Blues</p>
                                </div>
                            </div>
                            <p className={getClassName("most-played-title")}>Most played songs</p>
                            <div className="most-played-swiper">
                                <div className={getClassName("most-played")}>
                                    <div className="image-most-played" />
                                    <div className={getClassName("most-played-song-details")}>
                                        <p className="most-played-text">Song Name</p>
                                        <p className="tracks">Artist Name</p>
                                    </div>
                                </div>
                                <div className={getClassName("most-played")}>
                                    <div className="image-most-played" />
                                    <div className={getClassName("most-played-song-details")}>
                                        <p className="most-played-text">Song Name</p>
                                        <p className="tracks">Artist Name</p>
                                    </div>
                                </div>
                                <div className={getClassName("most-played")}>
                                    <div className="image-most-played" />
                                    <div className={getClassName("most-played-song-details")}>
                                        <p className="most-played-text">Song Name</p>
                                        <p className="tracks">Artist Name</p>
                                    </div>
                                </div>
                                <div className={getClassName("most-played")}>
                                    <div className="image-most-played" />
                                    <div className={getClassName("most-played-song-details")}>
                                        <p className="most-played-text">Song Name</p>
                                        <p className="tracks">Artist Name</p>
                                    </div>
                                </div>
                                <div className={getClassName("most-played")}>
                                    <div className="image-most-played" />
                                    <div className={getClassName("most-played-song-details")}>
                                        <p className="most-played-text">Song Name</p>
                                        <p className="tracks">Artist Name</p>
                                    </div>
                                </div>
                                <div className={getClassName("most-played")}>
                                    <div className="image-most-played" />
                                    <div className={getClassName("most-played-song-details")}>
                                        <p className="most-played-text">Song Name</p>
                                        <p className="tracks">Artist Name</p>
                                    </div>
                                </div>
                            </div>
                            <p className={getClassName("artist-title")}>Artists</p>
                            <div className="artist-swiper">
                                <div className="artist">
                                    <div className="image-artist" />
                                    <p className={getClassName("artist-name")}>Artist</p>
                                </div>
                                <div className="artist">
                                    <div className="image-artist" />
                                    <p className={getClassName("artist-name")}>Artist</p>
                                </div>
                                <div className="artist">
                                    <div className="image-artist" />
                                    <p className={getClassName("artist-name")}>Artist</p>
                                </div>
                                <div className="artist">
                                    <div className="image-artist" />
                                    <p className={getClassName("artist-name")}>Artist</p>
                                </div>
                                <div className="artist">
                                    <div className="image-artist" />
                                    <p className={getClassName("artist-name")}>Artist</p>
                                </div>
                            </div>

                            <p className={getClassName("playlist-title")}>Playlists</p>
                            <div className="playlist-swiper">
                                <div className="playlist">
                                    <div className="image-playlist" />
                                    <p className={getClassName("playlist-name")}>Playlist</p>
                                </div>
                                <div className="playlist">
                                    <div className="image-playlist" />
                                    <p className={getClassName("playlist-name")}>Playist</p>
                                </div>
                                <div className="playlist">
                                    <div className="image-playlist" />
                                    <p className={getClassName("playlist-name")}>Playlist</p>
                                </div>
                                <div className="playlist">
                                    <div className="image-playlist" />
                                    <p className={getClassName("playlist-name")}>Playlist</p>
                                </div>
                                <div className="playlist">
                                    <div className="image-playlist" />
                                    <p className={getClassName("playlist-name")}>Playlist</p>
                                </div>
                            </div>

                            <p className={getClassName("albums-title")}>Albums</p>
                            <div className="albums-swiper">
                                <div className="albums">
                                    <div className="image-albums" />
                                    <p className={getClassName("albums-name")}>Album</p>
                                </div>
                                <div className="albums">
                                    <div className="image-albums" />
                                    <p className={getClassName("albums-name")}>Album</p>
                                </div>
                                <div className="albums">
                                    <div className="image-albums" />
                                    <p className={getClassName("albums-name")}>Album</p>
                                </div>
                                <div className="albums">
                                    <div className="image-albums" />
                                    <p className={getClassName("albums-name")}>Album</p>
                                </div>
                                <div className="albums">
                                    <div className="image-albums" />
                                    <p className={getClassName("albums-name")}>Album</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home