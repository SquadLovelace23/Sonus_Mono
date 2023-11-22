import "./Landing.css"
import LoginForm from "../../components/LoginForm/LoginForm"
import { Helmet } from 'react-helmet-async';

type Props = {}

const Landing = (props: Props) => {

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
                        <img className="corner-img" src="./src/assets/img/icons/logo.png" />
                        <img className="corner-img-sonus" src="./src/assets/img/icons/sonus-full-fa2.png" />
                    </div>

                    <div className="container-content">
                        <div className="log-in-sonus">
                            <p className="text">Welcome to</p>
                            <img className="img-sonus" src="./src/assets/img/icons/sonus-full-fa2.png" />
                        </div>

                        <LoginForm />

                    </div>
                </div>
            </div>
        </>

    )

}



export default Landing