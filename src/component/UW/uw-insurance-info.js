import {Form} from "react-bootstrap";

export default function UwInsuranceInfo({_insuranceInfo}){
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={_insuranceInfo.name} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>설명</Form.Label>
                    <Form.Control type="text-area" placeholder="이름" value={_insuranceInfo.description} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>계약 기간(년)</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={_insuranceInfo.contractPeriod} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>납부 기간(년)</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={_insuranceInfo.paymentPeriod} readOnly/>
                </Form.Group>
            </Form>
        </>
    )
}