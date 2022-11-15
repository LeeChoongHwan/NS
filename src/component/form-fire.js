import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useNavigate} from "react-router-dom";

export default function FormFire() {
    const [validated, setValidated] = useState(false);

    // const navigate = useNavigate();
    // const location = ueLocation()

    // useEffect(()=>{
    // //    location.state에서 type을 받아 오기.
    // },[])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form);
        console.log(form.nnn.value)
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        // TODO -> data set을 다음 페이지로 넘겨야 함.
        // navigate() -> 다음 페이지 및 종류를 선택해서 보내야 함.
        // 종류는 그전에서 받아서 오는게 좋을 듯 하네
        // name.value로 받아올 수 있음.
        setValidated(true);

    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>자가여부</Form.Label>
                        
                        <Form.Check
                            inline
                            label="예"
                            name="group1"
                            type='radio'
                            id={`inline-1`}
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="group1"
                            type='radio'
                            id={`inline-2`}
                        />
                       
                </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>건물종류</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="건물종류"
                    />
                    <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        주어진 형식으로 건물종류를 입력해주세요
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>주택면적</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="number"
                            placeholder="주택면적"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            주택면적 입력 형식에 맞게 입력해주세요
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>실거주 여부</Form.Label>
                        
                        <Form.Check
                            inline
                            label="예"
                            name="group1"
                            type='radio'
                            id={`inline-1`}
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="group1"
                            type='radio'
                            id={`inline-2`}
                        />
                       
                </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>담보금액</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="담보금액"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                       담보금액 형식에 맞춰 주세요
                </Form.Control.Feedback>

            {/* TODO   https://postcode.map.daum.net/guide*/}
            </Form.Group>
            <Button type="submit">다음</Button>
            <Button type="button" variant={"danger"}>취소하기</Button>
        </Form>
    );
}
