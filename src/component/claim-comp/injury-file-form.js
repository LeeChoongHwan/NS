import {CLAIM_COMP_EX, CONFIRM_ADMISSION_DISCHARGE_EX, MEDICAL_CERTIFICATION_EX} from "../../utils/download";
import ClaimCompGroup from "./claim-comp-group";
import {CLAIM_COMP, CONFIRM_ADMISSION_DISCHARGE, MEDICAL_CERTIFICATION} from "../../utils/global-variable";

export default function InjuryFileForm({_accidentType, _accidentId, _files}){

    return (
        <>
           <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId} _exist={_files?.claim_comp!==undefined}
           _ex_url={CLAIM_COMP_EX} _doc_type={CLAIM_COMP}/>
            <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId} _exist={_files?.medical_certification!==undefined}
                            _ex_url={MEDICAL_CERTIFICATION_EX} _doc_type={MEDICAL_CERTIFICATION}/>
            <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId}  _exist={_files?.confirm_admission_discharge!==undefined}
                            _ex_url={CONFIRM_ADMISSION_DISCHARGE_EX} _doc_type={CONFIRM_ADMISSION_DISCHARGE}/>
        </>
    )
}