import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";

export default function FormCar() {
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
        <Container className={"w-75"}>
            <h4 className={"mb-3 mt-3"}>자동차보험 정보 입력</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className={"mb-3"}>
                        <Form.Label>차주</Form.Label>
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
                    <Form.Group className={"mb-3"}>
                        <Form.Label>차량번호</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="number"
                                placeholder="차량 번호"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                차량 번호 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>


                    <Form.Group className={"mb-3"}>
                        <Form.Label>차량가액</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="number"
                                placeholder="차량가액"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                차량 가액 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                <Form.Group className={"mb-3"}>
                    <Form.Label>차종</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="차종"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        차종입력 형식에 맞춰 주세요
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className={"mb-3"}>
                    <Form.Label>연식</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="연식"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        연식입력 형식에 맞춰 주세요
                    </Form.Control.Feedback>

                    {/* TODO   https://postcode.map.daum.net/guide*/}
                </Form.Group>
                <div className={"flex_box flex_box_end"}>
                    <Button type="button" variant={"danger"}>취소하기</Button>
                    <Button type="submit">다음</Button>
                </div>
            </Form> </Container>
    );
}
