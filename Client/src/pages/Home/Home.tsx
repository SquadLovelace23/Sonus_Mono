import React from 'react'
import "./Home.css"
import AudioPlayer from 'react-h5-audio-player'
import Navbar from '../../components/Navbar/Navbar'
import Player from '../../components/Player/Player'





type Props = {}


const Home = (props: Props) => {
    return (
        <>
         
    <div className="cards-container">
        <div className="control-panel">
            <div className="card-panel">
                <div className="control-panel-content">
                    <div className="title-panel">
                        <div className="control-panel-logo"></div>
                    </div>
                    <div className="divider"></div>
                   
                   <Navbar />

                    <div className="divider"></div>                      
                        <div className="player">
                            <div className="volume-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M15 8a5 5 0 0 1 0 8"></path>
                                    <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                                    <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                                 </svg>
                            </div>
                            <div className="img-song">
                                <img src="./src/assets/img/minutes-to-midnight.jpeg" alt="song-image" className="song-thumbnail"/>
                                <div className="song-details">
                                    <p className="song-title">Song Title</p>
                                    <p className="song-artist">Artist</p>
                                </div>
                            </div>
                            <div className="fav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="player-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-repeat" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                                <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                             </svg>
                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-track-prev" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M21 5v14l-8 -7z"></path>
                                <path d="M10 5v14l-8 -7z"></path>
                             </svg>
                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 4v16l13 -8z"></path>
                             </svg>
                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-track-next" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 5v14l8 -7z"></path>
                                <path d="M14 5v14l8 -7z"></path>
                             </svg>
                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-shuffle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M18 4l3 3l-3 3"></path>
                                <path d="M18 20l3 -3l-3 -3"></path>
                                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5"></path>
                                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3"></path>
                             </svg>
                        </div>
                        <div className="song-duration"> 
                            <Player/>                      
                            <g filter="url(#filter0_d_56_3701)">
                              <rect x="63.3818" y="4" width="82.6182" height="6" rx="3" fill="white" fill-opacity="0.25" shape-rendering="crispEdges"/>
                            </g>
                            <g filter="url(#filter1_d_56_3701)">
                              <rect x="4" y="4" width="68.16" height="6" rx="3" fill="black"/>
                            </g>
                            <g filter="url(#filter2_dd_56_3701)">
                              <ellipse cx="71.3855" cy="6.5" rx="2.84" ry="5.5" fill="black"/>
                              <path d="M71.3855 12.25C72.3112 12.25 73.0866 11.5286 73.6158 10.5038C74.1515 9.46626 74.4755 8.05032 74.4755 6.5C74.4755 4.94968 74.1515 3.53374 73.6158 2.49621C73.0866 1.47144 72.3112 0.75 71.3855 0.75C70.4597 0.75 69.6843 1.47144 69.1552 2.49621C68.6194 3.53374 68.2955 4.94968 68.2955 6.5C68.2955 8.05032 68.6194 9.46626 69.1552 10.5038C69.6843 11.5286 70.4597 12.25 71.3855 12.25Z" stroke="black" stroke-opacity="0.02" stroke-width="0.5"/>
                            </g>
                            <defs>
                              <filter id="filter0_d_56_3701" x="59.3818" y="4" width="90.6182" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_3701"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_3701" result="shape"/>
                              </filter>
                              <filter id="filter1_d_56_3701" x="0" y="4" width="76.16" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_3701"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_3701" result="shape"/>
                              </filter>
                              <filter id="filter2_dd_56_3701" x="67.2955" y="0.5" width="8.17999" height="13.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="0.375"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_3701"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="0.25"/>
                                <feGaussianBlur stdDeviation="0.125"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_56_3701" result="effect2_dropShadow_56_3701"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_56_3701" result="shape"/>
                              </filter>
                            </defs>
                        </div>
                        <div className="divider"></div>                        
                    </div>
                </div>    
            </div>
        <div className="display-panel">
            <div className="card-main">
                <div className="corner-items">
                    <div className="corner-logo-img">
                        <div className="corner-img"></div>
                    </div>
                    <div className="corner-user-container">
                        <img className="corner-user" src="./src/assets/img/icons/user.png"/>
                    </div>    
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home