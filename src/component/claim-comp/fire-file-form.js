import ClaimCompGroup from "./claim-comp-group";
import {
    CLAIM_COMP_EX,
    MEDICAL_CERTIFICATION_EX,
    PICTURE_OF_SITE_FIRE_EX,
    REPAIR_ESTIMATE_EX,
    REPAIR_RECEIPT_EX
} from "../../utils/download";
import {CLAIM_COMP, PICTURE_OF_SITE, REPAIR_ESTIMATE, REPAIR_RECEIPT} from "../../utils/global-variable";

export default function FireFileForm({_accidentType, _accidentId, _files}){
    return (
        <>
            <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId} _exist={_files?.claim_comp!==undefined}
                            _ex_url={CLAIM_COMP_EX} _doc_type={CLAIM_COMP}/>
            <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId} _exist={_files?.picture_of_site!==undefined}
                            _ex_url={PICTURE_OF_SITE_FIRE_EX} _doc_type={PICTURE_OF_SITE}/>
            <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId} _exist={_files?.repair_estimate!==undefined}
                            _ex_url={REPAIR_ESTIMATE_EX} _doc_type={REPAIR_ESTIMATE}/>
            <ClaimCompGroup _accidentType={_accidentType} _accidentId={_accidentId} _exist={_files?.repair_receipt!==undefined}
                            _ex_url={REPAIR_RECEIPT_EX} _doc_type={REPAIR_RECEIPT}/>
        </>
    )
}