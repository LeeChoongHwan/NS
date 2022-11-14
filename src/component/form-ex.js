import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useLocation, useNavigate} from "react-router-dom";
import {
    email_back_pattern, email_front_pattern,
    phone_first_pattern,
    phone_last_pattern,
    phone_second_pattern,
    ssn_back_pattern,
    ssn_front_pattern
} from "../utils/reg-pattern";
import {Col, InputGroup, Row} from "react-bootstrap";

export default function FormExample() {
    const [validated, setValidated] = useState(false);
    const [insuranceType, setInsuranceType] = useState();
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(()=>{
    //    location.state에서 type을 받아 오기.
    //     if(location.state.type!==undefined)
    //         setInsuranceType(location.state.type)
    },[])

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

     const hanldeBack = () => {
         navigate("/",{replace:true});
     }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className={"mb-3"}>
                <Form.Label>이름</Form.Label>
                <Form.Control
                    name="username"
                    required
                    type="text"
                    placeholder="이름"
                    pattern="^[가-힣]{2,6}"
                />
                <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    주어진 형식으로 이름을 입력해주세요
                </Form.Control.Feedback>
            </Form.Group>

            <InputGroup className={"w-100 mb-3"}>
            <Form.Group className={"flex_box col-6"}>

                <div className={"w-100"}>

                <Form.Control
                    name="ssn1"
                    required
                    type="text"
                    placeholder="주민등록번호"
                    pattern= {ssn_front_pattern}
                />
                <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    주민등록번호 앞자리를 입력해 주세요
                </Form.Control.Feedback>
                </div>
                <div>
                <InputGroup.Text >-</InputGroup.Text>
                </div>
            </Form.Group>


            <Form.Group className={"col-6"}>
                <Form.Control
                    name="ssn2"
                    required
                    type="password"
                    placeholder="주민등록번호 뒷자리"
                    pattern= {ssn_back_pattern}
                />
                <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    주민등록번호 뒷자리를 입력해 주세요
                </Form.Control.Feedback>
            </Form.Group>
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Group className={"flex_box col-4"}>
                    <div className={"w-100"}>
                        <Form.Control
                            name="phone1"
                            required
                            type="text"
                            placeholder="전화번호"
                            pattern= {phone_first_pattern}
                        />
                        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            전화번호 형식을 지켜주세요
                        </Form.Control.Feedback>
                    </div>
                    <div>
                        <InputGroup.Text >-</InputGroup.Text>
                    </div>
                </Form.Group>
                <Form.Group className={"flex_box col-4"}>
                    <div className={"w-100"}>
                        <Form.Control
                            name="phone2"
                            required
                            type="text"
                            placeholder="전화번호"
                            pattern= {phone_second_pattern}
                        />
                        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            전화번호 형식을 지켜주세요
                        </Form.Control.Feedback>
                    </div>
                    <div>
                        <InputGroup.Text >-</InputGroup.Text>
                    </div>
                </Form.Group>
                <Form.Group className={"flex_box col-4"}>
                    <div className={"w-100"}>
                        <Form.Control
                            name="phone3"
                            required
                            type="text"
                            placeholder="전화번호"
                            pattern= {phone_last_pattern}
                        />
                        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            전화번호 형식을 지켜주세요
                        </Form.Control.Feedback>
                    </div>
                </Form.Group>
            </InputGroup>

            <InputGroup className={"w-100 mb-3"}>
                <Form.Group className={"flex_box col-6"}>
                    <div className={"w-100"}>
                        <Form.Control
                            name="email1"
                            required
                            type="text"
                            placeholder="이메일"
                            pattern= {email_front_pattern}
                        />
                        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            이메일 형식을 지켜주세요
                        </Form.Control.Feedback>
                    </div>
                    <div>
                        <InputGroup.Text >@</InputGroup.Text>
                    </div>
                </Form.Group>


                <Form.Group className={"col-6"}>
                    <Form.Control
                        name="email2"
                        required
                        type="password"
                        placeholder="이메일"
                        pattern= {email_back_pattern}
                    />
                    <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        이메일 형식을 지켜주세요
                    </Form.Control.Feedback>
                </Form.Group>
            </InputGroup>

            {/*TODO 주소 API 추가하기*/}


            <Button type="button" variant={"danger"} onClick={hanldeBack}>취소하기</Button>
            <Button type="submit">다음</Button>
        </Form>
    );
}
