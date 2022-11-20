// nav_ 가 붙은 변수는 front 에서 이동하기 위한 url
// 그 외의 변수들은 request를 보내기 위한 url
// 모든 변수를 함수로 사용할 필요는 없었지만, 통일성을 위해 전부 함수로 구성



// REQUEST

// Insurance
export const insurance_all = () => `/insurance/all`;
export const inquire_car = (insuranceId) => `/insurance/inquire-car/${insuranceId}`
export const inquire_fire = (insuranceId) => `/insurance/inquire-fire/${insuranceId}`
export const inquire_health = (insuranceId) => `/insurance/inquire-health/${insuranceId}`

// SignUp & Login
export const signup_user = (customerId) => `/user/sign-up/${customerId}`
export const login_user = () => `login`






// NAVIGATION
export const nav_home = () => `/`
export const nav_signup_user = () => "/signup/user";
export const nav_signup_type = (insuranceType) => `/signup/${insuranceType}`