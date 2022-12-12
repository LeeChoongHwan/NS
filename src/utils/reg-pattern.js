const ssn_front_pattern = "^[0-9]{2}((01)|(02)|(03)|(04)|(05)|(06)|(07)|(08)|(09)|(10)|(11)|(12))([0-3][0-9])";
const ssn_back_pattern = "^[1-4][0-9]{6}";
const phone_first_pattern = "^0[0-9]{2}$"
const phone_second_pattern = "^[0-9]{3,4}$"
const phone_last_pattern = "^[0-9]{4}$"
const email_front_pattern = "^[a-zA-Z0-9]+";
const email_back_pattern = "^[a-z]+.[a-z]+$"
const car_no_pattern = "^[0-9]{2,3}[가-힣][\\s]{0,1}[0-9]{4}$";
const card_pattern = "^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$"
const bank_type_pattern = {
    KB : "^[0-9]{6}-[0-9]{2}-[0-9]{6}$",
    NH : "^(312|301|302)-[0-9]{4}-[0-9]{4}-\\d{2}$",
    WOORI : "^\\d{4}-\\d{3}-\\d{6}$",
    HANA : "^\\d{3}-\\d{6}-\\d{5}$",
    IBK : "^\\d{3}-\\d{6}-\\d{2}-\\d{3}$",
    SAEMAUL: "^9\\d{3}-\\d{8}-\\d$",
    KAKAOBANK: "^\\d{4}-\\d{2}-\\d{7}$",
    SINHAN : "^\\d{3}-\\d{3}-\\d{6}$",
    CITY : "^\\d{3}-\\d{6}-\\d{3}$"
}


export {ssn_front_pattern, ssn_back_pattern, phone_first_pattern, phone_second_pattern, phone_last_pattern
,email_front_pattern, email_back_pattern, car_no_pattern, card_pattern, bank_type_pattern};