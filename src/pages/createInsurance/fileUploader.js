import { Container } from "react-bootstrap";
import { tokenAxios } from "../../utils/cust-axios";
import { useState } from "react";
import { useEffect } from "react";
import { upload_auth_file } from "../../utils/url";
import { handleError } from "../../utils/exception/global-exception-handler";
import {Button, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export default function FileUploader({_insid, _doc_type, _exist, _setExist,_type}) {

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
        tokenAxios().post(upload_auth_file(docType.eng, _insid),
            formData)
            .then(() => {
                _setExist(true)
                setMode(true)
                alert(`${docType.kor} 제출했습니다.`)
            }).catch(err => handleError(err));
    }

    return(
        <>
            <Form.Group className={"flex_box justify-content-between mt-3 mb-3"}>
                <Col xs={9} className={"flex_box flex_box_end"}>
                    <Form.Control  className={`w-80 ${_doc_type.eng}`} type={"file"}
                                   accept={".hwp, .doc, .docx"}
                    />
                    <Button onClick={() => submit_claim_comp_file(_doc_type)}>제출</Button>
                </Col>
            </Form.Group>
            {mode ? <div className={"flex_box center correct"}>
            <FontAwesomeIcon icon={faCircleInfo} className={"mr-3"}/>
                제출한 파일이 존재합니다.</div> : null}
        </>
    );
}