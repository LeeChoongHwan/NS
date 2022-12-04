import {Button, Form, Modal} from "react-bootstrap";
import {tokenAxios} from "../../utils/cust-axios";
import {change_emp, nav_accident_report_result_page, nav_customer_member_home, report_accident} from "../../utils/url";
import {handleError} from "../../utils/exception/global-exception-handler";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

export default function ChangeCompEmpModal({_show, _setShow, _accidentId, _setEmp}) {
    const [correct, setCorrect] = useState();

    useEffect(() => {
        const element = document.querySelector(".wrong");
        if (!correct) {
            if (element !== null)
                element.style.display = "flex";
        } else {
            if (element !== null)
                element.style.display = "none";
        }
    }, [correct])

    const handleClose = () => {
        _setShow(false)
    }

    const submit = () => {
        const text = document.querySelector(".claim-area").value;
        if (text !== "") {
            setCorrect(true);
            tokenAxios().patch(change_emp(_accidentId),{
                reason:text
            })
                .then((res) => {
                    _setEmp(res.data)
                    alert(`보상 처리 담당자가 배정되었습니다. \n 이름 : ${res.data.name} \n 연락처 : ${res.data.phone}`)
                    handleClose()
                }).catch((err) => {
                handleError(err)
            })
        } else {
            setCorrect(false);
        }

    };


    return (
        <>
            <Modal show={_show} onHide={handleClose}
                   backdrop="static"
                   keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>보상 담당자 변경하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"mb-3"}>
                        <h4>변경사유</h4>
                    </div>
                    <textarea className={"w-100 claim-area"}></textarea>
                    <div className={"flex_box center mt-2 wrong"}>
                        <FontAwesomeIcon icon={faTriangleExclamation} className={"mr-3"}/>변경 사유를 입력해주세요
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={handleClose}>취소</Button>
                    <Button onClick={submit} type={"submit"}>변경</Button>
                </Modal.Footer>

            </Modal>

        </>
    )

}