// nav_ 가 붙은 변수는 front 에서 이동하기 위한 url
// 그 외의 변수들은 request를 보내기 위한 url
// 모든 변수를 함수로 사용할 필요는 없었지만, 통일성을 위해 전부 함수로 구성



// REQUEST

// Insurance
export const insurance_all = () => `/insurance/all`;
export const inquire_car = (insuranceId) => `/insurance/inquire-car/${insuranceId}`
export const inquire_fire = (insuranceId) => `/insurance/inquire-fire/${insuranceId}`
export const inquire_health = (insuranceId) => `/insurance/inquire-health/${insuranceId}`

// Contract
//          Direct
export const contract_health = (insuranceId) => `/contract/register-health/${insuranceId}`
export const contract_car = (insuranceId) => `/contract/register-car/${insuranceId}`
export const contract_fire = (insuranceId) => `/contract/register-fire/${insuranceId}`

//          Sales
export const sales_health = (insuranceId) => `/emp/sales/health/${insuranceId}`
export const sales_car = (insuranceId) => `/emp/sales/car/${insuranceId}`
export const sales_fire = (insuranceId) => `/emp/sales/fire/${insuranceId}`

// SignUp & Login
export const signup_user = (customerId) => `/user/sign-up/${customerId}`
export const login_user = () => `login`

// UW
export const read_customer_uw_status = (insuranceType) => `/emp/uw/${insuranceType}`
export const read_customer_contract_info = (insuranceType, contractId) => `/emp/uw/${insuranceType}/${contractId}`
export const apply_uw_result = (contractId) => `/emp/uw/${contractId}`

// Customer-Payment
export const read_contract_paying_info = () => `/customer/contract`
export const pay_premium = (contractId) => `/customer/pay/${contractId}`
export const customer_payment = () => `/customer/payment`

// Customer-Accident-Report
export const report_accident = (accidentType) => `/acc/report/${accidentType}`

// customer - claim - comp
export const read_customer_accident = () => `/acc/info/list`
export const read_accident_details = (type,accidentId) => `/acc/${type}/${accidentId}`
export const submit_comp_file = (type,accidentId,doctype) => `/acc/submit/${type}/${accidentId}/${doctype}`
export const claim_comp = (accidentId) => `/acc/claim/${accidentId}`
export const change_emp = (accidentId) => `/acc/change-comp-employee/${accidentId}`


// employee - comp
export const read_employee_accident = () => `/emp/comp/list`
export const read_employee_accident_state = (state) => `/emp/comp/list/${state}`
export const read_accident_investigate = (accidentType, accidentId) => `/emp/comp/${accidentType}/${accidentId}`
export const investigate_accident = (accidentId) => `/emp/comp/investigate/${accidentId}`
export const submit_investigate_file = (accidentId) => `/emp/comp/submit/investigate-accident/${accidentId}`
export const submit_loss_assessment = (accidentId) => `/emp/comp/submit/loss-assessment/${accidentId}`
export const send_compensation = (accidentId) => `/emp/comp/pay/${accidentId}`

// NAVIGATION
export const nav_home = () => `/`
export const nav_customer_home = () => `/customer`
export const nav_customer_non_member_home = () => `/customer/nonmember`
export const nav_customer_member_home = () => `/customer/member`
export const nav_paying_page = () => `/customer/paying`

// accident
export const nav_accident_report_page = () => `/accident/report`
export const nav_accident_report_form_page = () => `/accident/report/form`
export const nav_accident_report_result_page = () => `/accident/report/result`
export const nav_reported_accident_list_page = () => `/accident/list`
export const nav_claim_compensation_page = () => `/claim/compensation`

export const nav_employee_home = () => `/employee`
export const nav_insurance = () => `/insurance/list`
export const nav_contract_customer = () => `/signup/customer`
export const nav_signup_user = () => "/signup/user";
export const nav_signup_type = (insuranceType) => `/signup/${insuranceType}`
export const nav_login = () => `/login`
export const nav_uw = () => `/uw`
export const nav_uw_contract = () => `/uw/contract`
export const nav_comp_list = () => `/comp/list`
export const nav_comp_investigate_list = () => `/comp/investigate/list`
export const nav_comp_investigate = () => `/comp/investigate`
export const nav_comp_loss_assess_list = () => `/comp/lossAssess/list`
export const nav_comp_loss_assess = () => `/comp/lossAssess`