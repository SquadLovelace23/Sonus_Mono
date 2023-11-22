import "./Landing.css"
import LoginForm from "../../components/LoginForm/LoginForm"
import { Helmet } from 'react-helmet-async';
import { useDarkModeContext } from "../../context/DarkMode";

const Landing = () => {
    const { getClassName } = useDarkModeContext()

    return (

        <>
            {/* <div className="loading"><img className="img" src="./src/assets/img/icons/logo.png" /></div> */}
            <Helmet>
                <html lang="en" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The Greatest Music App on Earth" />
                <title>Sonus</title>
            </Helmet>

            <div className="container-card">

                <div className="card">
                    <div className="corner-logo">
                        <div className={getClassName("corner-img")} />
                        <div className={getClassName("corner-img-sonus")} />
                    </div>

                    <div className="container-content">
                        <div className="log-in-sonus">
                            <p className={getClassName("text")}>Welcome to</p>
                            <div className={getClassName("img-sonus")} />
                        </div>

                        <LoginForm />

                    </div>
                </div>
            </div>
        </>

    )

}



export default Landing