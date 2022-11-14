import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import InsuranceList from "./pages/Insurance-list";


function App() {
  return (
      <div >
        <Router>
          <Routes>
            <Route path={"/"} element={<InsuranceList/>}/>

          </Routes>
        </Router>

      </div>
  );
}

export default App;
