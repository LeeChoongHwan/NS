import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CustomFormTextGroup from "../../component/form-group/custom-form-text-group";
import {AccidentType, RequiredErrorMessage} from "../../utils/global-variable";
import CarAccidentForm from "../../component/accident/car-accident-form";
import CarBreakdownForm from "../../component/accident/car-breakdown-form";
import {tokenAxios} from "../../utils/cust-axios";
import {nav_accident_report_result_page, nav_customer_member_home, report_accident} from "../../utils/url";
import {handleError} from "../../utils/exception/global-exception-handler";
import {convertAccidentReportHeader} from "../../utils/convert-values";

export default function AccidentReportFormPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [accidentType, setAccidentType] = useState("")
    const [validated, setValidated] = useState(false)
    const [textValue, setTextValue] = useState("");


    useEffect(() => {
        if (location.state.type !== undefined) {
            setAccidentType(location.state.type)
            dateValidator()

        }

    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        const inputDate = `${form.date.value} ${form.time.value}:00`
        const now = new Date();
        const input = new Date(inputDate)
        if (now < input) {
            alert("현재 시간보다 미래의 시간을 사고 일시로 선택할 수 없습니다.");
            form.date.value = ""
            form.time.value = ""
            setValidated(true);
            return;
        }


        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const data = createReportAccidentData(form);

            tokenAxios()
                .post(report_accident(accidentType.toLowerCase())
                    , data)
                .then(response => {
                        console.log(response)
                        navigate(nav_accident_report_result_page(),{
                            replace : true,
                            state : {
                                result : response.data
                            }
                        })
                    }
                )
                .catch(error => {
                    handleError(error)
                    if (error.response?.status === 400) {
                        navigate(nav_customer_member_home(), {replace: true})
                    }
                })

        }
        setValidated(true);
    };

    const createReportAccidentData = (form) => {
        const dateOfAccident = `${form.date.value}T${form.time.value}:00`
        switch (accidentType) {
            case AccidentType.CAR_ACCIDENT:
                return {
                    dateOfAccident,
                    placeAddress: textValue,
                    carNo: form.carNo.value,
                    opposingDriverPhone: `${form.phone1.value}-${form.phone2.value}-${form.phone3.value}`,
                    isRequestOnSite: form.isRequestOnSite[0].checked
                }
            case AccidentType.CAR_BREAKDOWN:
                return {
                    dateOfAccident,
                    placeAddress: textValue,
                    carNo: form.carNo.value,
                    symptom: form.symptom.value
                }
            case AccidentType.INJURY_ACCIDENT:
                return {
                    dateOfAccident,
                    injurySite: textValue,
                }
            case AccidentType.FIRE_ACCIDENT:
                return {
                    dateOfAccident,
                    placeAddress: textValue,
                }
            default :
                return null;
        }


    }

    const createDetailForm = () => {
        switch (accidentType) {
            case AccidentType.CAR_ACCIDENT:
                return <CarAccidentForm/>
            case AccidentType.CAR_BREAKDOWN:
                return <CarBreakdownForm/>
            default :
                return null;
        }
    }
    const moveToBack = () => {
        navigate(nav_customer_member_home(), {replace : true});
    }



    const dateValidator = () => {
        let now_utc = Date.now() // 지금 날짜를 밀리초로
// getTimezoneOffset()은 현재 시간과의 차이를 분 단위로 반환
        let timeOff = new Date().getTimezoneOffset()*60000; // 분단위를 밀리초로 변환
// new Date(now_utc-timeOff).toISOString()은 '2022-05-11T18:09:38.134Z'를 반환
        const date = new Date(now_utc-timeOff).toISOString();
        const strings = date.split("T");
        let today = strings[0];
        document.getElementById("Date").setAttribute("max", today);
    }

    return (
        <>
            <Container>
                <div className={"flex_box center"}>
                    <h1>{convertAccidentReportHeader(accidentType)}</h1>
                </div>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label>사고 일시</Form.Label>
                <Row xs={2} sm={2}>
                    <Form.Group>
                        <Form.Control id={"Date"} name={"date"} type={"date"} required />
                        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            사고 일시를 입력해주세요
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name={"time"} type={"time"} required/>
                        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            사고 일시를 입력해주세요
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                {createDetailForm()}


                <CustomFormTextGroup
                    _name={accidentType !== AccidentType.INJURY_ACCIDENT ? "placeAddress" : "injurySite"}
                    _value={textValue} _setValue={setTextValue}
                    _placeholder={accidentType !== AccidentType.INJURY_ACCIDENT ? "사고 장소" : "부상 부위"}
                    _label={accidentType !== AccidentType.INJURY_ACCIDENT ? "사고 장소" : "부상 부위"}
                    _errorMessage={RequiredErrorMessage}/>

                <div className={"flex_box flex_box_end"}>
                <Button type={"submit"}>등록하기</Button>
                <Button onClick={moveToBack} variant={"dark"}>뒤로가기</Button>
                </div>
            </Form>
            </Container>
        </>
    )
}