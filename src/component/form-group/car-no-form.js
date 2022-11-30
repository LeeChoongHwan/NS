import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {car_no_pattern} from "../../utils/reg-pattern";
import React from "react";

export default function CarNoForm() {
    return (
        <>
            <Form.Group className={"mb-3 mt-3"}>
                <Form.Label>차량 번호</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="차량 번호"
                        name={"carNo"}
                        pattern = {car_no_pattern}
                        required
                    />
                <Form.Control.Feedback >
                    사용 가능합니다!
                </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        차량 번호 입력 형식에 맞게 입력해주세요
                    </Form.Control.Feedback>
            </Form.Group>
        </>
    )
}