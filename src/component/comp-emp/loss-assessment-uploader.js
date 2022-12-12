import {Button, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {tokenAxios} from "../../utils/cust-axios";
import {submit_loss_assessment} from "../../utils/url";
import {handleError} from "../../utils/exception/global-exception-handler";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import {PICTURE_OF_SITE} from "../../utils/global-variable";


export default function LossAssessmentUploader({_ex_url, _accidentId, _doc_type, _exist, _setExist}) {

    const [mode, setMode] = useState(false);

    useEffect(() => {
        setMode(_exist);
    },[_exist])

    const submit_claim_comp_file = (docType) => {

        if(mode){
            const update = window.confirm(`${docType.kor}을 수정하시겠습니까?`);
            if(!update)
                return;
        }

        const file = document.querySelector(`.${docType.eng}`).files[0];
        const formData = new FormData();
        formData.append("multipartFile", file);
        tokenAxios().post(submit_loss_assessment(_accidentId),
            formData)
            .then(() => {
                _setExist(true)
                setMode(true)
                alert(`${docType.kor} 제출했습니다.`)
            }).catch(err => handleError(err));
    }


    return (
        <>
            <Form.Group className={"flex_box justify-content-between mt-3 mb-3"}>
                <a className={"btn btn-warning col-3"} download={true}
                   href={_ex_url}>{_doc_type.kor} 예시 다운로드</a>
                <Col xs={9} className={"flex_box flex_box_end"}>
                    <Form.Control  className={`w-80 ${_doc_type.eng}`} type={"file"}
                                   accept={_doc_type !== PICTURE_OF_SITE ? ".hwp, .doc, .docx":"image/*" }
                    />
                    <Button onClick={() => submit_claim_comp_file(_doc_type)}>제출</Button>
                </Col>
            </Form.Group>
            {mode ? <div className={"flex_box center correct"}>
                <FontAwesomeIcon icon={faCircleInfo} className={"mr-3"}/>
                제출한 파일이 존재합니다.</div> : null}
        </>
    )
}