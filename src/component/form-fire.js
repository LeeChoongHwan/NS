import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useLocation, useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";
import {findCheckedIndex, getBuildingTypeFromCheckedForm} from "../utils/convert-values";
import baseAxios from "../utils/cust-axios";

export default function FormFire() {
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState();
    const [customerDto, setCustomerDto] = useState(Object);
    const [premium,setPremium] = useState();

    const location = useLocation()

    useEffect(() => {
        if (location.state.customerDto !== undefined) {
            setCustomerDto(location.state.customerDto);
            setId(location.state.id);
        }
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        const contractDto = {
            isSelfOwned : form.isSelfOwned[0].checked,
            isActualResidence: form.isActualResidence[0].checked,
            buildingArea : form.buildingArea.value,
            collateralAmount : form.collateralAmount.value,
            buildingType : getBuildingTypeFromCheckedForm(form.buildingType)
        }

        baseAxios().get(`/cust/inquire-health/${id}`,{
            data : {
                buildingType: contractDto.buildingType,
                collateralAmount : contractDto.collateralAmount
            }
        })
            .then(response => {
                setPremium(response.data.premium);
            }).catch(err => console.error(err));

        setValidated(true);

    };

    return (
        <Container className={"w-75"}>
            <h4 className={"mb-3 mt-3"}>화재보험 정보 입력</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className={"mb-3"}>
                    <div>
                        <Form.Label>자가여부</Form.Label>
                    </div>
                    <Form.Check inline label="예" name="isSelfOwned" type='radio' required/>
                    <Form.Check inline label="아니요" name="isSelfOwned" type='radio' required/>
                </Form.Group>

                <Form.Group className={"mb-3"}>
                    <div>
                        <Form.Label>건물종류</Form.Label>
                    </div>
                    <Form.Check inline label="상업용" name="buildingType" type='radio' required/>
                    <Form.Check inline label="산업용" name="buildingType" type='radio' required/>
                    <Form.Check inline label="기관용" name="buildingType" type='radio' required/>
                    <Form.Check inline label="거주용" name="buildingType" type='radio' required/>
                    <Form.Control.Feedback type="invalid">
                        건물 종류를 선택해주세요
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>주택면적</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="number"
                            placeholder="주택면적"
                            aria-describedby="inputGroupPrepend"
                            name = "buildingArea"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            주택면적 입력 형식에 맞게 입력해주세요
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group className={"mb-3"}>
                    <div>
                        <Form.Label>실거주 여부</Form.Label>
                    </div>
                    <Form.Check inline label="예" name="isActualResidence" type='radio' required/>
                    <Form.Check inline label="아니요" name="isActualResidence" type='radio' required/>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>담보금액</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="담보금액"
                        name={"collateralAmount"}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        담보금액 형식에 맞춰 주세요
                    </Form.Control.Feedback>

                </Form.Group>
                <div className={"flex_box flex_box_end"}>
                    <Button type="button" variant={"danger"}>취소하기</Button>
                    <Button type="submit">다음</Button>
                </div>
            </Form>
        </Container>

    );
}
