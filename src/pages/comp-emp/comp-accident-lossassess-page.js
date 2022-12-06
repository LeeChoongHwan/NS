import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {tokenAxios} from "../../utils/cust-axios";
import {nav_comp_investigate_list, read_accident_investigate} from "../../utils/url";
import {handleError} from "../../utils/exception/global-exception-handler";
import {Button, Container, Form} from "react-bootstrap";
import {convertLocalDateTime} from "../../utils/convert-values";
import ReportedFilesList from "../../component/comp-emp/reported-files-list";
import {LOSS_ASSESSMENT} from "../../utils/global-variable";
import LossAssessmentUploader from "../../component/comp-emp/loss-assessment-uploader";
import CompAccountForm from "../../component/comp-emp/comp-account-form";

export default function CompAccidentLossassessPage() {
    const location = useLocation();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [accidentInfo, setAccidentInfo] = useState(Object);

    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        if (location.state.id !== undefined) {
            setType(location.state.type);
            setId(location.state.id);
            tokenAxios().get(read_accident_investigate(location.state.type, location.state.id))
                .then(res => {
                    setAccidentInfo(res.data)
                }).catch(err => handleError(err))
        }
    }, [])

    useEffect(() => {
        if (submitted)
            document.querySelector(".comp-account-area").style.display = "block"
        else
            document.querySelector(".comp-account-area").style.display = "none"
    }, [submitted])


    const moveBack = () => {
        navigate(nav_comp_investigate_list(), {replace: true});
    }

    return (
        <>
            <Container className={"mb-5"}>
                <div className={"flex_box center mt-3 mb-3"}>
                    <h3>손해 사정 정보</h3>
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
                    <Form.Label>접수자 명</Form.Label>
                    <Form.Control value={accidentInfo?.customerDto?.name} readOnly/>
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
                        <Form.Label>부상 부위</Form.Label>
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
                <hr className={"mt-3 mb-3"}/>
                <div className={"flex_box center mt-3 mb-3"}>
                    <h4>제출 서류 목록</h4>
                </div>

                <ReportedFilesList _type={type} _fileUrls={accidentInfo?.fileUrlMap}/>
                <hr className={"mt-3 mb-3"}/>

                <div className={"flex_box center mt-3 mb-3"}>
                    <h4>손해 사정 정보 입력</h4>
                </div>

                <LossAssessmentUploader _accidentId={id} _exist={submitted} _setExist={setSubmitted}
                                        _doc_type={LOSS_ASSESSMENT}/>

                <div className={"comp-account-area"}>
                    <CompAccountForm _id={id} _lossReserve={accidentInfo?.lossReserves}/>
                </div>
                <Button variant={"dark"} onClick={moveBack}>뒤로가기</Button>

            </Container>
        </>
    )
}