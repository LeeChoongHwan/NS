import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import {convertBoolean, convertBuildingTypeToKorean} from "../../../utils/convert-values";

export default function UwContractFireInfo({_contractInfo}) {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>건물종류</Form.Label>
                    <Form.Control value={convertBuildingTypeToKorean(_contractInfo.buildingType)} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>건물면적(평)</Form.Label>
                    <Form.Control value={_contractInfo.buildingArea} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>담보금액(원)</Form.Label>
                    <Form.Control value={_contractInfo.collateralAmount} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>실거주여부</Form.Label>
                    <Form.Control value={convertBoolean(_contractInfo.isActualResidence)} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>자가여부</Form.Label>
                    <Form.Control value={convertBoolean(_contractInfo.isSelfOwned)} readOnly/>
                </Form.Group>
            </Form>
        </>
    )
}