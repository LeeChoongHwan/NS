import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import InsuranceList from "./pages/Insurance-list-page";
import ErrorPage from "./utils/error-page";
import SignUpPage from "./pages/user-form/sign-up-page";
import FormExample from "./pages/contract/contract-customer-info-page";
import ContractCarInfoPage from "./pages/contract/contract-car-info-page";
import ContractHealthInfoPage from "./pages/contract/contract-health-info-page";
import ContractFireInfoPage from "./pages/contract/contract-fire-info-page";


function App() {
  return (
      <div >
        <Router>
          <Routes>
            <Route path={"/"} element={<InsuranceList/>}/>
              <Route path={"/signup"} element={<FormExample/>}/>
              <Route path={"/signup/CAR"} element={<ContractCarInfoPage/>}/>
              <Route path={"/signup/FIRE"} element={<ContractFireInfoPage/>}/>
              <Route path={"/signup/HEALTH"} element={<ContractHealthInfoPage/>}/>
              <Route path={"/signup/user"} element={<SignUpPage/>}/>
              <Route path={"/**"} element={<ErrorPage/>}/>
          </Routes>
        </Router>

      </div>
  );
}

export default App;
