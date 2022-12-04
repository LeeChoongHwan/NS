import ClaimCompGroup from "./claim-comp-group";
import {
    CAR_ACCIDENT_FACT_CONFIRMATION_EX,
    CLAIM_COMP_EX,
    CONFIRM_ADMISSION_DISCHARGE_EX,
    MEDICAL_CERTIFICATION_EX,
    PAYMENT_RESOLUTION_EX, PICTURE_OF_SITE_CAR_EX
} from "../../utils/download";
import {
    CAR_ACCIDENT_FACT_CONFIRMATION,
    CLAIM_COMP,
    CONFIRM_ADMISSION_DISCHARGE,
    MEDICAL_CERTIFICATION,
    PAYMENT_RESOLUTION, PICTURE_OF_SITE
} from "../../utils/global-variable";

export default function CarFileForm({_accidentType, _accidentId, _files}){

    return (
        <>
                <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId}
                                _ex_url={CLAIM_COMP_EX} _doc_type={CLAIM_COMP} _exist={_files?.claim_comp!==undefined}/>
                <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId}   _exist={_files?.medical_certification!==undefined}
                                _ex_url={MEDICAL_CERTIFICATION_EX} _doc_type={MEDICAL_CERTIFICATION}/>
                <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId}  _exist={_files?.confirm_admission_discharge!==undefined}
                                _ex_url={CONFIRM_ADMISSION_DISCHARGE_EX} _doc_type={CONFIRM_ADMISSION_DISCHARGE}/>
                <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId}  _exist={_files?.car_accident_fact_confirmation!==undefined}
                                _ex_url={CAR_ACCIDENT_FACT_CONFIRMATION_EX} _doc_type={CAR_ACCIDENT_FACT_CONFIRMATION}/>
                <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId}  _exist={_files?.payment_resolution!==undefined}
                                _ex_url={PAYMENT_RESOLUTION_EX} _doc_type={PAYMENT_RESOLUTION}/>
            <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId}  _exist={_files?.picture_of_site!==undefined}
                            _ex_url={PICTURE_OF_SITE_CAR_EX} _doc_type={PICTURE_OF_SITE}/>
        </>
    )
}