import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {baseAxios} from "../../utils/cust-axios";
import PremiumModal from "../../component/premium_modal";
import {inquire_health, nav_signup_user} from "../../utils/url";

export default function ContractHealthInfoPage() {
    const [validated, setValidated] = useState(false);
    const [id,setId] = useState();
    const [customerDto, setCustomerDto] = useState(Object);
    const [healthContractDto, setHealthContractDto] = useState(Object);
    const [checkedDisease, setCheckedDisease] = useState(true)
    const [premium,setPremium] = useState(0);
    const [premiumModalShow, setPremiumModalShow] = useState(false);
    const [type,setType]=useState();
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.state.customerDto !== undefined) {
            setCustomerDto(location.state.customerDto);
            setId(location.state.id);
            setType(location.state.type);
        }
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();

        }else{
            const contractInfo = {
                height : form.height.value,
                weight : form.weight.value,
                isDrinking : form.isDrinking[0].checked,
                isSmoking : form.isSmoking[0].checked,
                isDriving : form.isDriving[0].checked,
                isDangerActivity: form.isDangerActivity[0].checked,
                isHavingDisease : form.isHavingDisease[0].checked,
                isTakingDrug : form.isTakingDrug[0].checked,
                diseaseDetail : form.diseaseDetail.value
            };



            let map = Object.keys(contractInfo).map(key =>  contractInfo[key]);
            let riskCount= 0;
            map.forEach(v => {
                if (v === true) {
                    riskCount++;
                }
            })
            baseAxios().post(inquire_health(id),{
                ssn:customerDto.ssn,
                riskCount: riskCount
            })
                .then(response => {
                    setPremium(response.data.premium);
                    setPremiumModalShow(true);
                    contractInfo.premium = response.data.premium;
                    setHealthContractDto(contractInfo);
                }).catch(err => console.error(err));
        }
        setValidated(true);
    };

    const moveToSignUpPage = () => {
        navigate(nav_signup_user(),{
            state : {
                customerDto,
                contractDto : healthContractDto,
                id,
                type,
                mode : location.state.mode
            },
            replace : true
        })
    }


    return (
        <Container className={"w-75"}>
            <h4 className={"mb-3 mt-3"}>건강보험 정보 입력</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>키</Form.Label>
                            <Form.Control
                                type="number"
                                name={"height"}
                                placeholder="키"
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
                                name={"weight"}
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
                            name="isSmoking"
                            type='radio'
                            id={`inline-1`}
                            required
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="isSmoking"
                            type='radio'
                            id={`inline-2`}
                            required
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>음주</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="isDrinking"
                            type='radio'
                            id={`inline-1`}
                            required
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="isDrinking"
                            type='radio'
                            id={`inline-2`}
                            required
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>자동차, 오토바이 운전</Form.Label>
                        <Form.Check
                            inline
                            label="예"
                            name="isDriving"
                            type='radio'
                            id={`inline-1`}
                            required
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="isDriving"
                            type='radio'
                            id={`inline-2`}
                            required
                        />

                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>위험 취미활동 및 자격증 소유</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="isDangerActivity"
                            type='radio'
                            id={`inline-1`}
                            required
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="isDangerActivity"
                            type='radio'
                            id={`inline-2`}
                            required
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>약물복용</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="isTakingDrug"
                            type='radio'
                            id={`inline-5`}
                            required
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="isTakingDrug"
                            type='radio'
                            id={`inline-2`}
                            required
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>질병 이력</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="isHavingDisease"
                            type='radio'
                            id={`inline-1`}
                            required
                            onClick={() => setCheckedDisease(false)}
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="isHavingDisease"
                            type='radio'
                            id={`inline-2`}
                            required
                            onClick={() => setCheckedDisease(true)}
                        />

                    </Form.Group>
                </Row>
                <Form.Group className={"mb-3"}>
                    <Form.Label>상세 내용</Form.Label>
                    <Form.Control
                        type="text"
                        name="diseaseDetail"
                        placeholder="상세 내용"
                        aria-describedby="inputGroupPrepend"
                        disabled={checkedDisease}
                    />
                    <Form.Control.Feedback type="invalid">
                        형식에 맞춰 주세요
                    </Form.Control.Feedback>
                </Form.Group>

                <div className={"flex_box flex_box_end"}>
                    <Button type="button" variant={"danger"}>취소하기</Button>
                    <Button type="submit">다음</Button>
                </div>
            </Form>
            <PremiumModal _show={premiumModalShow} _setShow ={setPremiumModalShow}
                          _signUp={moveToSignUpPage} _premium={premium}
            />
        </Container>
    );
}
