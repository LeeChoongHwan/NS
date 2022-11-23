import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./utils/error-page";
import SignUpForm from "./pages/sign-up-form";
import FormExample from "./component/form-ex";
import FormCar from "./component/form-car";
import FormHealth from "./component/form-health";
import FormFire from "./component/form-fire";
import UwSelectInsuranceType from "./component/uw-select-insurance-type";
import UWList from "./component/uw-list";
import CreateInsuranceList from "./component/create-insurance-list";
import { element } from "prop-types";
import CreateInsuranceHealth from "./component/create-insurance-health";




function App() {
  return (
      <div >
        <Router>
          <Routes>
            <Route path={"/"} element={<CreateInsuranceHealth/>}/>
              <Route path={"/signup"} element={<FormExample/>}/>
              <Route path={"/signup/CAR"} element={<FormCar/>}/>
              <Route path={"/signup/FIRE"} element={<FormFire/>}/>
              <Route path={"/signup/HEALTH"} element={<FormHealth/>}/>
              <Route path={"/signup/user"} element={<SignUpForm/>}/>
              <Route path={"/**"} element={<ErrorPage/>}/>
              <Route path={"/uw/selectInsuranceType"} element={<UwSelectInsuranceType/>}/>
              <Route path={"/uwListTable"} element={<UWList/>}/>
              <Route path={"/createinsurance/List"} element={<CreateInsuranceList/>}/>
              
          </Routes>
        </Router>

      </div>
  );
}

export default App;
