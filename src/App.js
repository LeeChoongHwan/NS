import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import InsuranceList from "./pages/Insurance-list";
import ErrorPage from "./utils/error-page";
import SignUpForm from "./pages/sign-up-form";
import FormExample from "./component/form-ex";
import FormCar from "./component/form-car";
import FormHealth from "./component/form-health";
import FormFire from "./component/form-fire";


function App() {
  return (
      <div >
        <Router>
          <Routes>
            <Route path={"/"} element={<InsuranceList/>}/>
              <Route path={"/signup"} element={<FormExample/>}/>
              <Route path={"/signup/CAR"} element={<FormCar/>}/>
              <Route path={"/signup/FIRE"} element={<FormFire/>}/>
              <Route path={"/signup/HEALTH"} element={<FormHealth/>}/>
              <Route path={"/**"} element={<ErrorPage/>}/>
          </Routes>
        </Router>

      </div>
  );
}

export default App;
