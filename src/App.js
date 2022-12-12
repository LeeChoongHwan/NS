import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import InsuranceList from "./pages/Insurance-list-page";
import ErrorPage from "./utils/error-page";
import SignUpPage from "./pages/user-form/sign-up-page";
import ContractCustomerInfo from "./pages/contract/contract-customer-info-page";
import ContractCarInfoPage from "./pages/contract/contract-car-info-page";
import ContractHealthInfoPage from "./pages/contract/contract-health-info-page";
import ContractFireInfoPage from "./pages/contract/contract-fire-info-page";
import LoginPage from "./pages/user-form/login-page";
import Base from "./pages/base";
import {
    nav_accident_report_form_page,
    nav_accident_report_page,
    nav_accident_report_result_page,
    nav_reported_accident_list_page,
    nav_customer_home,
    nav_customer_member_home,
    nav_customer_non_member_home,
    nav_employee_home,
  nav_create_insurance_list,
    nav_customer_home, nav_customer_non_member_home, nav_employee_home,
    nav_home,
    nav_insurance,
    nav_login,
    nav_paying_page,
    nav_signup_user,
    nav_uw,
    nav_uw_contract,
    nav_claim_compensation_page,
    nav_comp_list,
    nav_comp_investigate_list,
    nav_comp_investigate,
    nav_comp_loss_assess, nav_comp_loss_assess_list
    nav_uw_contract,
    nav_create_insurance_fire,
    nav_create_insurance_car,
    nav_create_insurance_health,
    nav_insurance_auth
} from "./utils/url";
import UwPage from "./pages/uw/uw-page";
import UwContract from "./pages/uw/uw-contract";
import EmployeeHome from "./pages/home/employee/employee-home";
import CustomerHome from "./pages/home/customer/customer-home";
import NonMemberHome from "./pages/home/customer/non-member-home";
import MemberHome from "./pages/home/customer/member-home";
import ContractList from "./pages/customer/payment/contract-list";
import AccidentReportPage from "./pages/accident/accident-report-page";
import AccidentReportFormPage from "./pages/accident/accident-report-form-page";
import AccidentReportResultPage from "./pages/accident/accident-report-result-page";
import ReportedAccidentListPage from "./pages/customer/comp/reported-accident-list-page";
import ClaimCompensationPage from "./pages/customer/comp/claim_compensation_page";
import CompAccidentListPage from "./pages/comp-emp/comp-accident-list-page";
import CompAccidentInvestigateListPage from "./pages/comp-emp/comp-accident-investigate-list-page";
import CompAccidentInvestigatePage from "./pages/comp-emp/comp-accident-investigate-page";
import CompAccidentLossassessListPage from "./pages/comp-emp/comp-accident-lossassess-list-page";
import CompAccidentLossassessPage from "./pages/comp-emp/comp-accident-lossassess-page";

import CreateInsuranceList from "./pages/createInsurance/createInsuranceList";
import CreateInsuranceCar from "./pages/createInsurance/createInsuranceCar";
import CreateInsuranceHealth from "./pages/createInsurance/createInsuranceHealth";
import CreateInsuranceFire from "./pages/createInsurance/createInsuranceFire";
import AuthInsurance from "./pages/createInsurance/authInsurance";
import { element } from "prop-types";

function App() {
  return (
      <div >
        <Router>
          <Routes>
              {/*TODO path 변수로 변경해주기*/}
              <Route path={nav_home()} element={<Base />} />
              <Route path={nav_customer_home()} element={<CustomerHome />} />
              <Route path={nav_employee_home()} element={<EmployeeHome />} />
              <Route path={nav_customer_non_member_home()} element={<NonMemberHome />} />
              <Route path={nav_customer_member_home()} element={<MemberHome />} />
              <Route path={nav_paying_page()} element={<ContractList />} />
              <Route path={nav_insurance()} element={<InsuranceList/>}/>
              <Route path={nav_accident_report_page()} element={<AccidentReportPage/>}/>
              <Route path={nav_accident_report_form_page()} element={<AccidentReportFormPage/>}/>
              <Route path={nav_accident_report_result_page()} element={<AccidentReportResultPage/>}/>
              <Route path={nav_reported_accident_list_page()} element={<ReportedAccidentListPage/>}/>
              <Route path={nav_claim_compensation_page()} element={<ClaimCompensationPage/>}/>
              <Route path={"/signup"} element={<ContractCustomerInfo/>}/>
              <Route path={"/signup/CAR"} element={<ContractCarInfoPage/>}/>
              <Route path={"/signup/FIRE"} element={<ContractFireInfoPage/>}/>
              <Route path={"/signup/HEALTH"} element={<ContractHealthInfoPage/>}/>
              <Route path={nav_signup_user()} element={<SignUpPage/>}/>
              <Route path={nav_uw()} element={<UwPage/>}/>
              <Route path={nav_uw_contract()} element={<UwContract/>}/>
              <Route path={nav_comp_list()} element={<CompAccidentListPage/>}/>
              <Route path={nav_comp_investigate_list()} element={<CompAccidentInvestigateListPage/>}/>
              <Route path={nav_comp_investigate()} element={<CompAccidentInvestigatePage/>}/>
              <Route path={nav_comp_loss_assess_list()} element={<CompAccidentLossassessListPage/>}/>
              <Route path={nav_comp_loss_assess()} element={<CompAccidentLossassessPage/>}/>


              <Route path={nav_login()} element={<LoginPage/>}/>
              <Route path={"/**"} element={<ErrorPage/>}/>
              <Route path={nav_create_insurance_list()} element={<CreateInsuranceList/>}/>
              <Route path={nav_create_insurance_fire()} element={<CreateInsuranceFire/>}/>
              <Route path={nav_create_insurance_car()} element={<CreateInsuranceCar/>}/>
              <Route path={nav_create_insurance_health()} element={<CreateInsuranceHealth/>}/>
              <Route path={nav_insurance_auth()} element={<AuthInsurance/>}/>
          </Routes>
        </Router>

      </div>
  );
}

export default App;

