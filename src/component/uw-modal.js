import {Accordion, Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {tokenAxios} from "../utils/cust-axios";
import {apply_uw_result, read_customer_contract_info} from "../utils/url";
import {InsuranceType, UwStatus} from "../utils/global-variable";
import UwCustomerInfo from "./UW/uw-customer-info";
import UwInsuranceInfo from "./UW/uw-insurance-info";
import UwContractInfo from "./UW/uw-contract-info";
import {useNavigate} from "react-router-dom";

export default function UwModal({_show, _handleShow, _contractId, _type, _setRefresh}) {
    const navigate = useNavigate();

    const [customerInfo, setCustomerInfo] = useState(Object);
    const [contractInfo, setContractInfo] = useState(Object);
    const [insuranceInfo, setInsuranceInfo] = useState(Object);
    const [uwStatus, setUwStatus] = useState("");
    const [uwReason, setUwReason] = useState("");
    const handleClose = () => {
        _handleShow(false)
    }
    useEffect(() => {
        if (_show) {
            tokenAxios().get(read_customer_contract_info(_type.toLowerCase(), _contractId))
                .then(res => {
                    setCustomerInfo(res.data.customerDto);
                    switch (_type) {
                        case InsuranceType.HEALTH:
                            setContractInfo(res.data.healthContractDto)
                            break;
                        case InsuranceType.CAR:
                            setContractInfo(res.data.carContractDto)
                            break;
                        case InsuranceType.FIRE:
                            setContractInfo(res.data.fireContractDto)
                            break;
                    }
                    setInsuranceInfo(res.data.insuranceDto);
                })
        }

    }, [_show])



    const changeUwStatusToApproval = () => {
        const reason_field = document.querySelector(`.uw_reason_field`);
        reason_field.style.display = 'block';
        setUwStatus(UwStatus.APPROVAL)
    }
    const changeUwStatusToRefuse = () => {
        const reason_field = document.querySelector(`.uw_reason_field`);
        reason_field.style.display = 'block';
        setUwStatus(UwStatus.REFUSE)
    }
    const changeUwStatusToReAudit = () => {
        const reason_field = document.querySelector(`.uw_reason_field`);
        reason_field.style.display = 'block';
        setUwStatus(UwStatus.RE_AUDIT)
    }
    const applyUwResult = () =>{
        tokenAxios().patch(apply_uw_result(_contractId),{
            reasonOfUw : uwReason,
            conditionOfUw : uwStatus
        }).then(() => {
            alert(`인수 심사가 반영되었습니다.`)
            setUwStatus("");
            setUwReason("");
            _setRefresh(prev => !prev)
            handleClose()
        }).catch((error) => console.error(error))

    }


    return <Modal show={_show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
            <Modal.Title>계약 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Accordion defaultActiveKey={"customer"}>
                <Accordion.Item eventKey="customer">
                    <Accordion.Header>고객 정보</Accordion.Header>
                    <Accordion.Body>
                        <UwCustomerInfo _customerInfo={customerInfo}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="contract">
                    <Accordion.Header>계약 정보</Accordion.Header>
                    <Accordion.Body>
                        <UwContractInfo _contractInfo={contractInfo} _type={_type}/>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="insurance">
                    <Accordion.Header>보험 정보</Accordion.Header>
                    <Accordion.Body>
                        <UwInsuranceInfo _insuranceInfo={insuranceInfo}/>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="reason" className={"uw_reason_field"}>
                    <Accordion.Header>인수심사 사유</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group>
                            <Form.Label>이유</Form.Label>
                            <Form.Control value={uwReason} onChange={(event) => setUwReason(event.target.value)} type={"text"} placeholder={"인수 심사 이유를 작성해주세요"}/>
                        </Form.Group>
                        <div className={"mt-3"}>
                            <Button onClick={applyUwResult}>반영</Button>
                            <Button onClick={handleClose} variant={"danger"}>취소</Button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={changeUwStatusToApproval}>승인</Button>
            <Button onClick={changeUwStatusToRefuse} variant={"danger"}>거절</Button>
            <Button onClick={changeUwStatusToReAudit} variant={"warning"}>보류</Button>
            <Button variant={"success"} onClick={handleClose}>목록</Button>
        </Modal.Footer>
    </Modal>
}
