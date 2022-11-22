import {Form} from "react-bootstrap";
import {convertSSN} from "../../utils/convert-values";

export default function UwCustomerInfo({_customerInfo}){
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={_customerInfo.name} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={_customerInfo.name} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>주민등록번호</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={convertSSN(_customerInfo.ssn)} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={_customerInfo.phone} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>주소</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={_customerInfo.address} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>직업</Form.Label>
                    <Form.Control type="text" placeholder="이름" value={_customerInfo.job} readOnly/>
                </Form.Group>
            </Form>
        </>
    )
}