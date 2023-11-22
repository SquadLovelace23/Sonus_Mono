import Background from "./components/Background/Background";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom"
import PublicRoutes from "./routes/PublicRoutes.routes";

function App() {
  const helmetContext = {};

  return (
    <>
      <BrowserRouter>
        <HelmetProvider context={helmetContext}>
          <Background />
          <PublicRoutes />
        </HelmetProvider>
      </BrowserRouter>

    </>
  )
}

export default App
