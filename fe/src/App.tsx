import Background from "./layout/Background";
import Main from "./layout/Main";
import Navbar from "./layout/Navbar";
import ROUTES from "./routes/Routes";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Background />
        <Navbar />
        <Main>
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.key} path={route.route} Component={route.component} />
            ))}
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
