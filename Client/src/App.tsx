import Background from "./components/Background/Background";
import { HelmetProvider } from 'react-helmet-async';
import RoutesComponent from "./routes/PublicRoutes.routes";

function App() {
  const helmetContext = {};

  return (
    <>
          <HelmetProvider context={helmetContext}>
            <Background />
            <RoutesComponent />
          </HelmetProvider> 
    </>
  )
}

export default App
