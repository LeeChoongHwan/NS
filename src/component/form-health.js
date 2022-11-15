import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";

export default function FormHealth() {
    const [validated, setValidated] = useState(false);

    // const navigate = useNavigate();
    // const location = ueLocation()

    // useEffect(()=>{
    // //    location.state에서 type을 받아 오기.
    // },[])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
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
            <h4 className={"mb-3 mt-3"}>건강보험 정보 입력</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>키</Form.Label>

                            <Form.Control
                                type="number"
                                placeholder="키"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                키 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>몸무게</Form.Label>

                            <Form.Control
                                type="number"
                                placeholder="몸무게"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                몸무게 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>흡연</Form.Label>
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
                        <Form.Label>음주</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="group2"
                            type='radio'
                            id={`inline-1`}
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="group2"
                            type='radio'
                            id={`inline-2`}
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>자동차, 오토바이 운전</Form.Label>
                        <Form.Check
                            inline
                            label="예"
                            name="group3"
                            type='radio'
                            id={`inline-1`}
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="group3"
                            type='radio'
                            id={`inline-2`}
                        />

                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>위험 취미활동 및 자격증 소유</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="group4"
                            type='radio'
                            id={`inline-1`}
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="group4"
                            type='radio'
                            id={`inline-2`}
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>약물복용</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="group5"
                            type='radio'
                            id={`inline-5`}
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="group5"
                            type='radio'
                            id={`inline-2`}
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>질병 이력</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="group6"
                            type='radio'
                            id={`inline-1`}
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="group6"
                            type='radio'
                            id={`inline-2`}
                        />

                    </Form.Group>
                </Row>
                <Form.Group className={"mb-3"}>
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
                </Form.Group>
                <div className={"flex_box flex_box_end"}>
                    <Button type="button" variant={"danger"}>취소하기</Button>
                    <Button type="submit">다음</Button>
                </div>
            </Form></Container>
    );
}
