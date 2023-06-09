import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useLocation, useNavigate} from "react-router-dom";
import {
    email_back_pattern,
    email_front_pattern,
    phone_first_pattern,
    phone_last_pattern,
    phone_second_pattern,
    ssn_back_pattern,
    ssn_front_pattern
} from "../../utils/reg-pattern";
import {Container, InputGroup} from "react-bootstrap";
import {nav_home, nav_signup_type} from "../../utils/url";
import Header from "../../component/header";

export default function ContracctCustomerInfo() {
    const [validated, setValidated] = useState(false);
    const [insuranceInfo, setInsuranceInfo] = useState(Object);
    const [mode, setMode] = useState();
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
         if(location.state.type!==undefined)
             setInsuranceInfo({
                 id : location.state.id,
                 type : location.state.type
             })
        setMode(location.state.mode);
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        const customerDto = {
            name: form.username.value,
            ssn: `${form.ssn1.value}-${form.ssn2.value}`,
            phone: `${form.phone1.value}-${form.phone2.value}-${form.phone3.value}`,
            email: `${form.email1.value}@${form.email2.value}`,
            job: form.job.value,
            address: form.address.value
        }
        setValidated(true);
        navigate(nav_signup_type(insuranceInfo.type), {
            state: {
                customerDto,
                id : insuranceInfo.id,
                type : insuranceInfo.type,
                mode
            },
            replace: true
        })
    };
    const handleBack = () => {
        navigate(nav_home(), {replace: true});
    }

    return (
        <Container className={"w-75"}>

            <Header _content={"개인 정보 입력"}/>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className={"mb-3"}>
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
                                pattern={ssn_front_pattern}
                            />
                            <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                주민등록번호 앞자리를 입력해 주세요
                            </Form.Control.Feedback>
                        </div>
                        <div>
                            <InputGroup.Text>-</InputGroup.Text>
                        </div>
                    </Form.Group>


                    <Form.Group className={"col-6"}>
                        <Form.Control
                            name="ssn2"
                            required
                            type="password"
                            placeholder="주민등록번호 뒷자리"
                            pattern={ssn_back_pattern}
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
                                pattern={phone_first_pattern}
                            />
                            <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                전화번호 형식을 지켜주세요
                            </Form.Control.Feedback>
                        </div>
                        <div>
                            <InputGroup.Text>-</InputGroup.Text>
                        </div>
                    </Form.Group>
                    <Form.Group className={"flex_box col-4"}>
                        <div className={"w-100"}>
                            <Form.Control
                                name="phone2"
                                required
                                type="text"
                                placeholder="전화번호"
                                pattern={phone_second_pattern}
                            />
                            <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                전화번호 형식을 지켜주세요
                            </Form.Control.Feedback>
                        </div>
                        <div>
                            <InputGroup.Text>-</InputGroup.Text>
                        </div>
                    </Form.Group>
                    <Form.Group className={"flex_box col-4"}>
                        <div className={"w-100"}>
                            <Form.Control
                                name="phone3"
                                required
                                type="text"
                                placeholder="전화번호"
                                pattern={phone_last_pattern}
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
                                pattern={email_front_pattern}
                            />
                            <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                이메일 형식을 지켜주세요
                            </Form.Control.Feedback>
                        </div>
                        <div>
                            <InputGroup.Text>@</InputGroup.Text>
                        </div>
                    </Form.Group>


                    <Form.Group className={"col-6"}>
                        <Form.Control
                            name="email2"
                            required
                            type="text"
                            placeholder="이메일"
                            pattern={email_back_pattern}
                        />
                        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            이메일 형식을 지켜주세요
                        </Form.Control.Feedback>
                    </Form.Group>
                </InputGroup>

                {/*TODO 주소 API 추가하기*/}
                <Form.Group className={"mb-3"}>
                    <Form.Control
                        name="address"
                        required
                        type="text"
                        placeholder="주소"
                    />
                    <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        주소 형식을 지켜주세요
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className={"mb-3"}>
                    <Form.Control
                        name="job"
                        required
                        type="text"
                        placeholder="직업"
                    />
                    <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        직업 형식을 지켜주세요
                    </Form.Control.Feedback>
                </Form.Group>

                <div className={"flex_box flex_box_end"}>
                    <Button type="button" variant={"danger"} onClick={handleBack}>취소하기</Button>
                    <Button type="submit">다음</Button>
                </div>
            </Form>
        </Container>
    );
}
