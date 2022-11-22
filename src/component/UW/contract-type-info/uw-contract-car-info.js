import {Form} from "react-bootstrap";
import {convertCarTypeToKorean} from "../../../utils/convert-values";

export default function UwContractCarInfo({_contractInfo}) {
    return (<>

        <Form>
            <Form.Group>
                <Form.Label>차량번호</Form.Label>
                <Form.Control value={_contractInfo.carNo} readOnly type={"text"}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>차종</Form.Label>
                <Form.Control value={convertCarTypeToKorean(_contractInfo.carType)} readOnly type={"text"}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>모델 이름</Form.Label>
                <Form.Control value={_contractInfo.modelName} readOnly type={"text"}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>연식</Form.Label>
                <Form.Control value={_contractInfo.modelYear} readOnly type={"text"}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>차량 가액(원)</Form.Label>
                <Form.Control value={_contractInfo.value} readOnly type={"text"}/>
            </Form.Group>
        </Form>


    </>)

}