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

//CreateInsurance
export const show_dev_insurance_list = () => `/emp/dev/list`;
export const calculate_car_premium = () => `/emp/dev/car-premium`;
export const calculate_fire_premium = () => `/emp/dev/fire-premium`;
export const calculate_health_premium = () => `/emp/dev/health-premium`;
export const create_health_insurance = () => `/emp/dev/save-health`;
export const create_fire_insurance = () => `/emp/dev/save-fire`;
export const create_car_insurance = () => `/emp/dev/save-car`;
export const get_auth_ins_data = (insuranceId) => `/emp/dev/auth-file/${insuranceId}`;
export const upload_auth_file = (type, insuranceId) => `/emp/dev/auth-file/${type}/${insuranceId}`;
export const change_auth_condition = (insuranceId) => `/emp/dev/update-auth-state/${insuranceId}`;

// NAVIGATION
export const nav_home = () => `/`
export const nav_customer_home = () => `/customer`
export const nav_customer_non_member_home = () => `/customer/nonmember`
export const nav_employee_home = () => `/employee`
export const nav_insurance = () => `/insurance/list`
export const nav_contract_customer = () => `/signup/customer`
export const nav_signup_user = () => "/signup/user";
export const nav_signup_type = (insuranceType) => `/signup/${insuranceType}`
export const nav_login = () => `/login`
export const nav_uw = () => `/uw`
export const nav_uw_contract = () => `/uw/contract`
export const nav_create_insurance_list = () => `/createInsuranceList`
export const nav_create_insurance_health = () => `/createInsurance/health`
export const nav_create_insurance_car = () => `/createInsurance/car`
export const nav_create_insurance_fire = () => `/createInsurance/fire`
export const nav_insurance_auth = () =>`/insuranceAuth`