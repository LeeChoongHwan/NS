import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useNavigate} from "react-router-dom";

export default function FormExample() {
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
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>이름</Form.Label>
                    <Form.Control
                        name={"nnn"}
                        required
                        type="text"
                        placeholder="이름"
                        defaultValue=""
                        pattern="^[가-힣]{2,6}"
                    />
                    <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        주어진 형식으로 이름을 입력해주세요
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>주민등록번호</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="number"
                            placeholder="주민등록번호 앞자리"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            주민등록번호 형식에 맞게 입력해주세요
                        </Form.Control.Feedback>
                        <InputGroup.Text id="basic-addon2">-</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="주민등록번호 뒷자리"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>전화번호</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="number"

                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            주민등록번호 형식에 맞게 입력해주세요
                        </Form.Control.Feedback>
                        <InputGroup.Text id="basic-addon2">-</InputGroup.Text>
                        <Form.Control
                            type="number"

                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                        <InputGroup.Text id="basic-addon2">-</InputGroup.Text>
                        <Form.Control
                            type="number"

                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>이메일</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="이메일"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                       이메일 형식에 맞춰 주세요
                    </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>주소</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="이메일"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    이메일 형식에 맞춰 주세요
                </Form.Control.Feedback>

            {/* TODO   https://postcode.map.daum.net/guide*/}
            </Form.Group>
            <Button type="submit">다음</Button>
            <Button type="button" variant={"danger"}>취소하기</Button>
        </Form>
    );
}
