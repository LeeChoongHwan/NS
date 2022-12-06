import {useLocation, useNavigate} from "react-router-dom";
import {Button, Container, Form} from "react-bootstrap";
import {convertLocalDateTime} from "../../utils/convert-values";
import {useEffect, useState} from "react";
import ReportedFilesList from "../../component/comp-emp/reported-files-list";
import {baseAxios, tokenAxios} from "../../utils/cust-axios";
import {
    investigate_accident,
    login_user, nav_comp_investigate,
    nav_comp_investigate_list, nav_comp_loss_assess,
    nav_home,
    read_accident_investigate
} from "../../utils/url";
import {handleError} from "../../utils/exception/global-exception-handler";
import ClaimCompGroup from "../../component/claim-comp/claim-comp-group";
import {PICTURE_OF_SITE_CAR_EX} from "../../utils/download";
import {INVESTIGATE_ACCIDENT, PICTURE_OF_SITE} from "../../utils/global-variable";
import InvestigateUploader from "../../component/comp-emp/investigate-uploader";
import CustomFormNumberGroup from "../../component/form-group/custom-form-number-group";
import saveToken from "../../utils/tokens";

export default function CompAccidentInvestigatePage() {

    const location = useLocation();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [accidentInfo, setAccidentInfo] = useState(Object);
    const [errorRate, setErrorRate] = useState(0);
    const [lossReserves, setLossReserves] = useState(0);
    const [validated, setValidated] = useState(false);

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

    const moveBack = () =>{
        navigate(nav_comp_investigate_list(), {replace:true});
    }
    const moveToLossAssess = () =>{
        navigate(nav_comp_loss_assess(), {replace:true,
        state : {
            id,
            type : location.state.type
        }
        });
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            tokenAxios().post(investigate_accident(id),{
                errorRate
                ,lossReserves
            }).then(() => {
                const next = window.confirm("손해 조사가 완료되었습니다. \n 손해 사정을 진행하겠습니까?");
                if(next){
                    // TODO 손해 사정 페이지로 이동
                    moveToLossAssess()
                }else{
                    moveBack()
                }

            }).catch(err => {
                handleError(err)
            })
            setValidated(true);
        }
    };

    return (
        <>
            <Container className={"mb-5"}>
                <div className={"flex_box center mt-3 mb-3"}>
                    <h3>손해 조사 정보</h3>
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
                    <h4>청구 서류 제출</h4>
                </div>

                <ReportedFilesList _type={type} _fileUrls={accidentInfo?.fileUrlMap}/>
                <hr className={"mt-3 mb-3"}/>

                <div className={"flex_box center mt-3 mb-3"}>
                    <h4>손해 조사 정보 입력</h4>
                </div>

                <InvestigateUploader _accidentId={id}
                                     _exist={accidentInfo?.fileUrlMap?.investigate_accident !== undefined}
                                     _doc_type={INVESTIGATE_ACCIDENT}/>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {type === "car-accident" ?
                        <div>
                            <Form.Label className={"label"}>과실 비율</Form.Label>
                        <CustomFormNumberGroup _name={"error_rate"}
                                                                      _min={0} _max={100} _value={errorRate}
                                                                      _setValue={setErrorRate}
                    />
                        </div>
                        : null}
                    <Form.Label className={"label"}>지급 준비금</Form.Label>
                    <CustomFormNumberGroup _name={"lossReserve"}
                                           _min={0} _value={lossReserves}
                                           _setValue={setLossReserves}
                    />
                    <Button type={"submit"}>손해조사</Button>
                </Form>
            <Button variant={"dark"} onClick={moveBack}>뒤로가기</Button>

            </Container>
        </>
    )
}