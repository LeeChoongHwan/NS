import CustomFormTextGroup from "../form-group/custom-form-text-group";
import CarNoForm from "../form-group/car-no-form";
import Form from "react-bootstrap/Form";
import {phone_first_pattern, phone_last_pattern, phone_second_pattern} from "../../utils/reg-pattern";
import {InputGroup} from "react-bootstrap";
import React from "react";
import Col from "react-bootstrap/Col";

export default function CarAccidentForm(){
    return (
        <>

            <CarNoForm/>
            <Form.Label>상대방 전화번호</Form.Label>
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
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>현장 출동 요청</Form.Label>
                <Form.Check
                    inline
                    label="예"
                    name="isRequestOnSite"
                    type='radio'
                    id={`inline-1`}
                    required
                />
                <Form.Check
                    inline
                    label="아니요"
                    name="isRequestOnSite"
                    type='radio'
                    id={`inline-2`}
                    required
                />

            </Form.Group>
        </>
    )
}