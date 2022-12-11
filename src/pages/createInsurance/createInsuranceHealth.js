import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { calculate_health_premium, nav_create_insurance_list } from '../../utils/url';
import Modal from 'react-bootstrap/Modal';
import {baseAxios, tokenAxios} from "../../utils/cust-axios";
import { create_health_insurance } from '../../utils/url';

export default function CreateInsuranceHealth() {

    const navigate = useNavigate();
    const [dto, setDto] = useState(Object)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [premium,setPremium] = useState(0);
    const [guaranteeList, setGuaranteeList] = useState([]);
    const [healthDatailList, setHealthDetailList] = useState([]);
    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        const standardPremiumDto = {
            damageAmount : form.damageAmount.value,
            countContract : form.countContract.value,
            businessExpense : form.businessExpense.value,
            profitMargin : form.profitMargin.value
        };

        const healthDetailDto = {
            targetAge : form.targetAge.value,
            targetSex : form.targetSex[0].checked,
            riskCriterion : form.RiskCriterion[0].checked ,
        };

        const insuranceBasicInfoDto = {
            name : form.insuranceName.value,
            description : form.description.value,
            contractPeriod : form.contractPeriod.value,
            paymentPeriod : form.paymentPeriod.value
        };

        const guaranteeDtoList = {
            name : form.guaranteeName.value,
            description : form.guaranteeDescription.value,
            amount : form.amount.value
        };

        const healthDetailDtoList = {
            targetAge : form.targetAge.value,
            targetSex : form.targetSex[0].checked,
            riskCriterion : form.RiskCriterion[0].checked ,
            premium: premium, 
        };

        let map = Object.keys(standardPremiumDto).map(key =>  standardPremiumDto[key]);
            let riskCount= 0;
            map.forEach(v => {
                if (v === true) {
                    riskCount++;
                }
            })

        let map2 = Object.keys(healthDetailDto).map(key =>  healthDetailDto[key]);
            let count= 0;
            map2.forEach(v => {
                if (v === true) {
                    count++;
                }
            })
            let map3 = Object.keys(insuranceBasicInfoDto).map(key =>  insuranceBasicInfoDto[key]);
            let count1= 0;
            map3.forEach(v => {
                if (v === true) {
                    count1++;
                }
            })

        let map4 = Object.keys(guaranteeDtoList).map(key =>  guaranteeDtoList[key]);
            let count2= 0;
            map4.forEach(v => {
                if (v === true) {
                    count2++;
                }
            })

            let map5 = Object.keys(healthDetailDtoList).map(key =>  healthDetailDtoList[key]);
            let Rcount= 0;
            map5.forEach(v => {
                if (v === true) {
                    Rcount++;
                }
            })

            setDto({
                standardPremiumDto,healthDetailDto
            })

            tokenAxios().post(calculate_health_premium()
            ,{
                standardPremiumDto:dto.standardPremiumDto,
                healthDetailDto:dto.healthDetailDto
            }
            ).then(response => {
            setPremium(response.data.premium);
            healthDetailDtoList.premium = response.data.premium
            setDto({
                insuranceBasicInfoDto, guaranteeDtoList, healthDetailDtoList
            })
            setGuaranteeList([guaranteeDtoList]);
            setHealthDetailList([healthDetailDtoList]);
            handleShow();
            
            }).catch(err => console.error(err));
    }


    const handleRegister = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        
            tokenAxios().post(create_health_insurance()
            ,{
                insuranceBasicInfoDto:dto.insuranceBasicInfoDto,
                guaranteeDtoList:guaranteeList,
                healthDetailDtoList:healthDatailList
            }
            ).then (
                navigate(nav_create_insurance_list())
            )

    }

    return(
        <div>
            <Container>
            <h4 className={"mb-3 mt-3"}>건강보험 정보 입력</h4>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>보험 이름</Form.Label>
                            <Form.Control
                                type="text"
                                name={"insuranceName"}
                                placeholder="보험 이름"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                알맞은 이름을 입력해주세요.
                            </Form.Control.Feedback>

                    </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <Form.Label>보험 설명</Form.Label>
                    <Form.Control
                        type="text"
                        name={"description"}
                        placeholder="상세 내용"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        보험 설명을 입력해주세요.
                    </Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>계약기간</Form.Label>
                            <Form.Control
                                type="number"
                                name={"contractPeriod"}
                                placeholder="계약기간"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                계약기간 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>납부빈도</Form.Label>

                            <Form.Control
                                type="number"
                                name={"paymentPeriod"}
                                placeholder="납부빈도"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                납부빈도 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>담보 이름</Form.Label>
                            <Form.Control
                                type="text"
                                name={"guaranteeName"}
                                placeholder="담보 이름"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                알맞은 이름을 입력해주세요.
                            </Form.Control.Feedback>

                    </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <Form.Label>담보 설명</Form.Label>
                    <Form.Control
                        type="text"
                        name={"guaranteeDescription"}
                        placeholder="담보 설명"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        담보 설명을 입력해주세요.
                    </Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>Amount</Form.Label>

                            <Form.Control
                                type="number"
                                name={"amount"}
                                placeholder="Amount"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Amount 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>목표 나이</Form.Label>

                            <Form.Control
                                type="number"
                                name={"targetAge"}
                                placeholder="목표 나이"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                목표 나이 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>목표성별</Form.Label>
                        <Form.Check
                            inline
                            label="남자"
                            name="targetSex"
                            type='radio'
                            id={`inline-1`}
                            required
                        />
                        <Form.Check
                            inline
                            label="여자"
                            name="targetSex"
                            type='radio'
                            id={`inline-2`}
                            required
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>RiskCriterion</Form.Label>

                        <Form.Check
                            inline
                            label="예"
                            name="RiskCriterion"
                            type='radio'
                            id={`inline-1`}
                            required
                        />
                        <Form.Check
                            inline
                            label="아니요"
                            name="RiskCriterion"
                            type='radio'
                            id={`inline-2`}
                            required
                        />

                    </Form.Group>
                </Row>
                <hr></hr>
                <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>발생손해액</Form.Label>

                            <Form.Control
                                type="number"
                                name={"damageAmount"}
                                placeholder="발생손해액"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                발생손해액 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>계약건수</Form.Label>

                            <Form.Control
                                type="number"
                                name={"countContract"}
                                placeholder="계약건수"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                계약건수 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>사업비</Form.Label>

                            <Form.Control
                                type="number"
                                name={"businessExpense"}
                                placeholder="사업비"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                사업비 입력 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label>이익률(%)</Form.Label>

                            <Form.Control
                                type="number"
                                name={"profitMargin"}
                                placeholder="이익률"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                이익률 형식에 맞게 입력해주세요
                            </Form.Control.Feedback>

                    </Form.Group>
                </Row>
                <div className={"flex_box flex_box_end"}>
                    <Button type="submit">보험료 계산</Button>
                    <Button type="button" variant={"danger"} onClick={() => navigate(nav_create_insurance_list())}>취소하기</Button>
                </div>
            </Form>
            <Modal show={show} onHide={handleClose}
               backdrop="static"
               keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>보험료 조회</Modal.Title>
            </Modal.Header>
            <Modal.Body> 보험료는 {premium}원 입니다. </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    취소
                </Button>
                <Button variant="primary" onClick={handleRegister}>
                    가입
                </Button>
            </Modal.Footer>
        </Modal>
            </Container>
        </div>
    );
}