import Form from "react-bootstrap/Form";
import {convertBoolean} from "../../../utils/convert-values";
import React from "react";

export default function UwContractHealthInfo({_contractInfo}){
    return (<>

        <Form.Group>
            <Form.Label>키(CM)</Form.Label>
            <Form.Control value={_contractInfo.height} readOnly/>
        </Form.Group>
        <Form.Group>
            <Form.Label>몸무게(KG)</Form.Label>
            <Form.Control value={_contractInfo.weight} readOnly/>
        </Form.Group>
        <Form.Group>
            <Form.Label>음주</Form.Label>
            <Form.Control value={convertBoolean(_contractInfo.isDrinking)} readOnly/>
        </Form.Group>
        <Form.Group>
            <Form.Label>흡연</Form.Label>
            <Form.Control value={convertBoolean(_contractInfo.isSmoking)} readOnly/>
        </Form.Group>
        <Form.Group>
            <Form.Label>운전</Form.Label>
            <Form.Control value={convertBoolean(_contractInfo.isDriving)} readOnly/>
        </Form.Group>
        <Form.Group>
            <Form.Label>위험취미</Form.Label>
            <Form.Control value={convertBoolean(_contractInfo.isDangerActivity)} readOnly/>
        </Form.Group>
        <Form.Group>
            <Form.Label>마약복용</Form.Label>
            <Form.Control value={convertBoolean(_contractInfo.isTakingDrug)} readOnly/>
        </Form.Group>
        <Form.Group>
            <Form.Label>질병</Form.Label>
            <Form.Control value={convertBoolean(_contractInfo.isHavingDisease)} readOnly/>
        </Form.Group>
        <Form.Group>
            <Form.Label>질병상세</Form.Label>
            <Form.Control value={_contractInfo.diseaseDetail} readOnly/>
        </Form.Group>


    </>)

}