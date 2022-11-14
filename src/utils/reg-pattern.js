const ssn_front_pattern = "^[0-9]{2}((01)|(02)|(03)|(04)|(05)|(06)|(07)|(08)|(09)|(10)|(11)|(12))([0-3][0-9])";
const ssn_back_pattern = "^[1-4][0-9]{6}";
const phone_first_pattern = "^0[0-9]{2}$"
const phone_second_pattern = "^[0-9]{3,4}$"
const phone_last_pattern = "^[0-9]{4}$"
const email_front_pattern = "^[a-zA-Z0-9]+";
const email_back_pattern = "^[a-z]+.[a-z]+$"
export {ssn_front_pattern, ssn_back_pattern, phone_first_pattern, phone_second_pattern, phone_last_pattern
,email_front_pattern, email_back_pattern};