import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {convertLocalDateTime} from "../../utils/convert-values";
import {nav_accident_report_page, nav_customer_member_home} from "../../utils/url";

export default function AccidentReportResultPage(){

    const [result, setResult] = useState(Object)

    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if(location.state.result !== undefined){
            setResult(location.state.result)
        }
    },[])

    const moveToBack =  () =>{
        navigate(nav_accident_report_page(), {replace : true})
    }

    return (
        <>
            <Container>
                <h3>사고 접수 정보</h3>

            <Form.Group className={"mb-3"}>
                <Form.Label>사고 ID</Form.Label>
                <Form.Control value={result.accidentId} readOnly/>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>사고 발생 일시</Form.Label>
                <Form.Control value={convertLocalDateTime(result.dateOfAccident)} readOnly/>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>사고 접수 일시</Form.Label>
                <Form.Control value={convertLocalDateTime(result.dateOfReport)} readOnly/>
            </Form.Group>
            {result.placeAddress !== undefined ?
                <Form.Group className={"mb-3"}>
                    <Form.Label>사고 장소</Form.Label>
                    <Form.Control value={result.placeAddress} readOnly/>
                </Form.Group>
                : null}
            {result.injurySite !== undefined ?
                <Form.Group className={"mb-3"}>
                    <Form.Label>사고 장소</Form.Label>
                    <Form.Control value={result.injurySite} readOnly/>
                </Form.Group>
                : null}

            {result.carNo !== undefined ?
                <Form.Group className={"mb-3"}>
                    <Form.Label>차량 번호</Form.Label>
                    <Form.Control value={result.carNo} readOnly/>
                </Form.Group>
                : null}
            {result.opposingDriverPhone !== undefined ?
                <Form.Group className={"mb-3"}>
                    <Form.Label>상대방 전화번호</Form.Label>
                    <Form.Control value={result.opposingDriverPhone} readOnly/>
                </Form.Group>
                : null}
            {result.isRequestOnSite !== undefined ?
                <Form.Group className={"mb-3"}>
                    <Form.Label>현장 출동 신청</Form.Label>
                    <Form.Control value={result.isRequestOnSite ? "신청":"신청 안함"} readOnly/>
                </Form.Group>
                : null}
            {result.accidentWorker !== null && result.accidentWorker !==undefined ?
                <>
                <h4>현장 출동 요원 정보</h4>
                <Form.Group className={"mb-3"}>
                    <Form.Label>이름</Form.Label>
                    <Form.Control value={result?.accidentWorker?.name} readOnly/>
                </Form.Group>
                    <Form.Group className={"mb-3"}>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control value={result?.accidentWorker?.phoneNum} readOnly/>
                    </Form.Group>
                </>
                : null}

                <hr className={"mt-3 mb-3"} />
                <Button onClick={moveToBack} className={"w-100"}>확인</Button>
            </Container>

        </>
    )
}