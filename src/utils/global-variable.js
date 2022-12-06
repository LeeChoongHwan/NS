export const mode_direct = "direct";
export const mode_sales = "sales";

export const InsuranceType = {
    HEALTH: "HEALTH",
    FIRE: "FIRE",
    CAR: "CAR"
}
export const ModalMode = {
    GUARANTEE: "GUARANTEE",
    UW: "UW",
    PAY: "PAY"
}
export const BuildingType = {
    COMMERCIAL: "COMMERCIAL",
    INDUSTRIAL: "INDUSTRIAL",
    INSTITUTIONAL: "INSTITUTIONAL",
    RESIDENTIAL: "RESIDENTIAL"
}
export const CarType = {
    URBAN: "URBAN",
    SUBCOMPACT: "SUBCOMPACT",
    COMPACT: "COMPACT",
    MIDSIZE: "MIDSIZE",
    LARGESIZE: "LARGESIZE",
    FULLSIZE: "FULLSIZE",
    SPORTS: "SPORTS"
}
export const UwStatus = {
    APPROVAL: "APPROVAL",
    RE_AUDIT: "RE_AUDIT",
    REFUSE: "REFUSE",
    WAIT: "WAIT"
}

export const CardType = {
    KB: "KB",
    SINHAN: "SINHAN",
    HANA: "HANA",
    LOTTE: "LOTTE",
    BC: "BC",
    NH: "NH",
    SAMSUNG: "SAMSUNG",
    HYUNDAI: "HYUNDAI"
}

export const BankType = {
    KB: "KB",
    NH: "NH",
    KAKAOBANK: "KAKAOBANK",
    SINHAN: "SINHAN",
    WOORI: "WOORI",
    IBK: "IBK",
    HANA: "HANA",
    CITY: "CITY",
    SAEMAUL: "SAEMAUL",
}
export const BankTypeErrorMessage = {
    KB: "******-**-****** 형태로 입력해주세요(*은 숫자입니다)",
    NH: "(301 or 302 or 312)-****-****-** 형태로 입력해주세요(*은 숫자입니다)",
    KAKAOBANK: "****-**-******* 형태로 입력해주세요(*은 숫자입니다)",
    SINHAN: "***-***-****** 형태로 입력해주세요(*은 숫자입니다)",
    WOORI: "****-***-****** 형태로 입력해주세요(*은 숫자입니다)",
    IBK: "***-******-**-*** 형태로 입력해주세요(*은 숫자입니다)",
    HANA:"***-******-***** 형태로 입력해주세요(*은 숫자입니다)",
    CITY: "***-******-*** 형태로 입력해주세요(*은 숫자입니다)",
    SAEMAUL: "9***-********-* 형태로 입력해주세요(*은 숫자입니다)"

}

export const AccidentType = {
    CAR_ACCIDENT : "CAR-ACCIDENT",
    CAR_BREAKDOWN : "CAR-BREAKDOWN",
    INJURY_ACCIDENT :   "INJURY-ACCIDENT",
    FIRE_ACCIDENT : "FIRE-ACCIDENT"
}

export const RequiredErrorMessage = "항목을 입력해 주세요";

// 보상금 청구 서류
export const CLAIM_COMP = {
 eng : "CLAIM_COMP",
 kor : "보상금 청구 서류"
}
// 진단서
export const MEDICAL_CERTIFICATION = {
 eng : "MEDICAL_CERTIFICATION",
 kor :    "진단서"
}

// 입퇴원 확인서
export const CONFIRM_ADMISSION_DISCHARGE = {
    eng : "CONFIRM_ADMISSION_DISCHARGE",
    kor : "입퇴원확인서"
}
// 사고 현장 사진
export const PICTURE_OF_SITE = {
    eng : "PICTURE_OF_SITE",
    kor : "사고현장사진"
}
// 수리비 견젹서
export const REPAIR_ESTIMATE = {
 eng : "REPAIR_ESTIMATE",
 kor :    "수리비 견젹서"
}
// 수리비 영수증
export const REPAIR_RECEIPT = {
    eng : "REPAIR_RECEIPT",
    kor : "수리비 영수증"
}
// 교통사고 사실확인원
export const CAR_ACCIDENT_FACT_CONFIRMATION =
    {
        eng : "CAR_ACCIDENT_FACT_CONFIRMATION",
        kor : "교통사고 사실확인원"
    }
// 자동차보험금 지급결의서
export const PAYMENT_RESOLUTION =
    {eng : "PAYMENT_RESOLUTION",
    kor : "자동차보험금 지급결의서"}
// 사고조사보고서
export const INVESTIGATE_ACCIDENT = {
    eng : "investigate-accident",
    kor : "사고 조사 보고서"
}
// 손해사정서
export const LOSS_ASSESSMENT =  {
    eng : "LOSS_ASSESSMENT",
    kor : "손해사정서"
}

export const COMP_STATE = {
    WAIT : "WAIT",
    INVESTIGATING : "INVESTIGATING",
    ASSESSMENT: "ASSESSMENT",
    DONE : "DONE"
}