import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useNavigate} from "react-router-dom";

export default function FormHealth() {
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
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>키</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="number"
                            placeholder="키"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            키 입력 형식에 맞게 입력해주세요
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>몸무게</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="number"
                            placeholder="몸무게"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            몸무게 입력 형식에 맞게 입력해주세요
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>흡연여부</Form.Label>
                        
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
            </Row>
            <Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>음주여부</Form.Label>
                        
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
            </Row>
            <Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>자동차, 오토바이 운전여부</Form.Label>
                        
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
            </Row>
            <Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>위험 취미활동 및 자격증 소유여부 </Form.Label>
                        
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
            </Row>
            <Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>약물복용 여부</Form.Label>
                        
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
            </Row>
            <Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>질병 이력 여부</Form.Label>
                        
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
            </Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>상세 내용</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="상세 내용"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                       형식에 맞춰 주세요
                    </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            {/* TODO   https://postcode.map.daum.net/guide*/}
            </Form.Group>
            <Button type="submit">다음</Button>
            <Button type="button" variant={"danger"}>취소하기</Button>
        </Form>
    );
}
