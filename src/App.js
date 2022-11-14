import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import InsuranceList from "./pages/Insurance-list";
import ErrorPage from "./utils/error-page";
import SignUpForm from "./pages/sign-up-form";
import FormExample from "./component/form-ex";


function App() {
  return (
      <div >
        <Router>
          <Routes>
              {/*<Route path={"/"} element={<FormExample/>}/>*/}
            <Route path={"/"} element={<InsuranceList/>}/>
              <Route path={"/signup"} element={<FormExample/>}/>
              <Route path={"/**"} element={<ErrorPage/>}/>
          </Routes>
        </Router>

      </div>
  );
}

export default App;
