import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {tokenAxios} from "../../../utils/cust-axios";
import {claim_comp, nav_reported_accident_list_page, read_accident_details} from "../../../utils/url";
import {convertAccidentTypeToEng, convertLocalDateTime} from "../../../utils/convert-values";
import {handleError} from "../../../utils/exception/global-exception-handler";
import {Button, Container, Form} from "react-bootstrap";
import CarFileForm from "../../../component/claim-comp/car-file-form";
import FireFileForm from "../../../component/claim-comp/fire-file-form";
import InjuryFileForm from "../../../component/claim-comp/injury-file-form";
import ChangeCompEmpModal from "../../../component/claim-comp/change-comp-emp-modal";

export default function ClaimCompensationPage() {

    const location = useLocation();
    const [accidentInfo, setAccidentInfo] = useState(Object);
    const [mode, setMode] = useState(false);
    const navigate = useNavigate();
    const [changeModal, setChangeModal] = useState(false);
    const [emp, setEmp] = useState(Object);


    useEffect(() => {
        if (location.state.id !== undefined) {
            setMode(location.state.isEmpAssigned);
            setEmp(location.state.emp)
            tokenAxios().get(read_accident_details(convertAccidentTypeToEng(location.state.type)
                , location.state.id))
                .then(res => {
                    setAccidentInfo(res.data)
                })
                .catch(err => handleError(err))
        }
    }, [])


    const createInputFormByType = () => {
        const type = convertAccidentTypeToEng(location.state.type)
        switch (location.state.type) {
            case "차량 사고":
                return <CarFileForm _accidentType={type} _accidentId={location.state.id}
                                    _files={accidentInfo?.fileUrlMap}/>
            case "화재 사고":
                return <FireFileForm _accidentType={type} _accidentId={location.state.id}
                                     _files={accidentInfo?.fileUrlMap}/>
            case "상해 사고":
                return <InjuryFileForm _accidentType={type} _accidentId={location.state.id}
                                       _files={accidentInfo?.fileUrlMap}/>
        }
    }

    const createButtonByEmpInfo = () => {
        return mode ? <>
            <div className={"flex_box justify-content-between"}>
                <div className={"comp-emp-info"}>
                    보상처리 담장자 : {emp.name} {emp.phone}
                </div>
                <div>
            <Button variant={"dark"} onClick={moveToBack} className={"mr-3"}>뒤로가기</Button> <Button
            onClick={changeEmployee}>보상 담당자 변경하기</Button>
                </div>
            </div>

        </> : <>
            <div className={"flex_box flex_box_end"}>
            <Button variant={"dark"} onClick={moveToBack} className={"mr-3"}>뒤로가기</Button><Button
            onClick={assignEmployee}>보상금 청구하기</Button>
            </div>
            </>


    }
    const moveToBack = () => {
        navigate(nav_reported_accident_list_page(), {replace: true});
    }

    const changeEmployee = () => {
        setChangeModal(true);
    }

    const assignEmployee = () => {
        tokenAxios().patch(claim_comp(location.state.id))
            .then((res) => {
                setEmp(res.data)
                alert(`보상 처리 담당자가 배정되었습니다. \n 이름 : ${res.data.name} \n 연락처 : ${res.data.phone}`)
                setMode(true)
            }).catch((err) => {handleError(err)})
    }

    return (
        <>

            <Container className={"mb-5"}>
                <div className={"flex_box center mt-3 mb-3"}>
                    <h3>보상금 청구</h3>
                </div>

                <hr className={"mt-3 mb-3"}/>
                <div className={"flex_box center mt-3 mb-3"}>
                    <h4>사고 접수 정보</h4>
                </div>
                <Form.Group className={"mb-3"}>
                    <Form.Label>사고 ID</Form.Label>
                    <Form.Control value={accidentInfo?.accidentId} readOnly/>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>사고 발생 일시</Form.Label>
                    <Form.Control value={convertLocalDateTime(accidentInfo?.dateOfAccident)} readOnly/>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>사고 접수 일시</Form.Label>
                    <Form.Control value={convertLocalDateTime(accidentInfo?.dateOfReport)} readOnly/>
                </Form.Group>
                {accidentInfo.placeAddress !== undefined ?
                    <Form.Group className={"mb-3"}>
                        <Form.Label>사고 장소</Form.Label>
                        <Form.Control value={accidentInfo.placeAddress} readOnly/>
                    </Form.Group>
                    : null}
                {accidentInfo.injurySite !== undefined ?
                    <Form.Group className={"mb-3"}>
                        <Form.Label>사고 장소</Form.Label>
                        <Form.Control value={accidentInfo.injurySite} readOnly/>
                    </Form.Group>
                    : null}

                {accidentInfo.carNo !== undefined ?
                    <Form.Group className={"mb-3"}>
                        <Form.Label>차량 번호</Form.Label>
                        <Form.Control value={accidentInfo.carNo} readOnly/>
                    </Form.Group>
                    : null}
                {accidentInfo.opposingDriverPhone !== undefined ?
                    <Form.Group className={"mb-3"}>
                        <Form.Label>상대방 전화번호</Form.Label>
                        <Form.Control value={accidentInfo.opposingDriverPhone} readOnly/>
                    </Form.Group>
                    : null}
                {accidentInfo.isRequestOnSite !== undefined ?
                    <Form.Group className={"mb-3"}>
                        <Form.Label>현장 출동 신청</Form.Label>
                        <Form.Control value={accidentInfo.isRequestOnSite ? "신청" : "신청 안함"} readOnly/>
                    </Form.Group>
                    : null}
                {accidentInfo.accidentWorker !== null && accidentInfo.accidentWorker !== undefined ?
                    <>
                        <h4>현장 출동 요원 정보</h4>
                        <Form.Group className={"mb-3"}>
                            <Form.Label>이름</Form.Label>
                            <Form.Control value={accidentInfo?.accidentWorker?.name} readOnly/>
                        </Form.Group>
                        <Form.Group className={"mb-3"}>
                            <Form.Label>전화번호</Form.Label>
                            <Form.Control value={accidentInfo?.accidentWorker?.phoneNum} readOnly/>
                        </Form.Group>
                    </>
                    : null}

                <hr className={"mt-3 mb-3"}/>

                <div className={"flex_box center mt-3 mb-3"}>
                    <h4>청구 서류 제출</h4>
                </div>
                {createInputFormByType()}
                <hr className={"mt-3 mb-3"}/>
                    {createButtonByEmpInfo()}

                <ChangeCompEmpModal _setEmp={setEmp} _show={changeModal} _setShow={setChangeModal} _accidentId={location.state.id}/>
            </Container>
        </>
    )


}