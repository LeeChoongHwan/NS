import { useState } from "react";
import { Container } from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { tokenAxios } from "../../utils/cust-axios";
import { get_auth_ins_data } from "../../utils/url";
import { handleError } from "../../utils/exception/global-exception-handler";
import FileUploader from "./fileUploader";
import { PROD, ISO, SR_ACTUARY, FSS_OFFICIAL } from "../../utils/global-variable";
import Button from 'react-bootstrap/Button';
import { nav_create_insurance_list } from "../../utils/url";
import { change_auth_condition } from "../../utils/url";
import { SalesAuthorizationState } from "../../utils/global-variable";

export default function AuthInsurance() {

    const navigate = useNavigate();
    const location = useLocation();
    const [id, setId] = useState("");
    const [insuranceInfo, setInsuranceInfo] = useState(Object);
    const [existProd, isExistProd] = useState(false);
    const [existIso, isExistIso] = useState(false);
    const [existSrActuary, isExistSrActuary] = useState(false);
    const [existFssOfficial, isExistFssOfficial] = useState(false);

    useEffect(() => {
        if (location.state.id !== undefined) {
            setId(location.state.id);
            tokenAxios().get(get_auth_ins_data(location.state.id))
                .then(res => {
                    console.log(res.data);
                    setInsuranceInfo(res?.data)
                    isExistProd(res?.data?.isExistProd);
                    isExistIso(res?.data?.isExistIso);
                    isExistSrActuary(res?.data?.isExistSrActuary);
                    isExistFssOfficial(res?.data?.isExistFssOfficial);

                }).catch(err => handleError(err))

        }
    }, [])

    const handleSubmitApprove = () => {
        tokenAxios().patch(change_auth_condition(id), SalesAuthorizationState.PERMISSION, {
                headers : {'Content-Type': 'application/json'}
        }). then (
            navigate(nav_create_insurance_list())
        ).catch(err => {
            handleError(err)
        })
    }

    const handleSubmitWait = () => {
        tokenAxios().patch(change_auth_condition(id), 
            SalesAuthorizationState.WAIT , {
                headers : {'Content-Type': 'application/json'}
            }
        ). then (
            navigate(nav_create_insurance_list())
        ).catch(err => {
            handleError(err)
        })
    }

    const handleSubmitDisAllowance = () => {
        tokenAxios().patch(change_auth_condition(id), 
           SalesAuthorizationState.DISALLOWANCE, {
            headers : {'Content-Type': 'application/json'}
           }
        ). then (
            navigate(nav_create_insurance_list())
        ).catch(err => {
            handleError(err)
        })
    }

    return(
        <Container>
            <div className={"flex_box center mt-3 mb-3"}>
                    <h4>보험상품신고서</h4>
            </div>
            <FileUploader _insid={id} _doc_type={PROD} _exist={insuranceInfo.isExistProd} _setExist={isExistProd}>

            </FileUploader>

            <div className={"flex_box center mt-3 mb-3"}>
                    <h4>선임계리사 검증기초서류</h4>
            </div>
            <FileUploader _insid={id} _doc_type={ISO} _exist={insuranceInfo.isExistIso} _setExist={isExistIso}>

            </FileUploader>

            <div className={"flex_box center mt-3 mb-3"}>
                    <h4>보험요율산출기관 검증 확인서</h4>
            </div>
            <FileUploader _insid={id} _doc_type={SR_ACTUARY} _exist={insuranceInfo.isExistSrActuary} _setExist={isExistSrActuary}>

            </FileUploader>

            <div className={"flex_box center mt-3 mb-3"}>
                    <h4>금융감독원 판매인가 공문파일</h4>
            </div>
            <FileUploader _insid={id} _doc_type={FSS_OFFICIAL} _exist={insuranceInfo.isExistFssOfficial} _setExist={isExistFssOfficial}>

            </FileUploader>


            <Button type="button" variant={"success"} onClick={handleSubmitApprove} >승인</Button> {' '}
            <Button type="button" variant={"success"} onClick={handleSubmitDisAllowance} >미승인</Button> {' '}
            <Button type="button" variant={"success"} onClick={handleSubmitWait} >승인대기</Button> {' '}
            <Button type="button" variant={"danger"} onClick={() => navigate(nav_create_insurance_list())}>돌아가기</Button>
            
        </Container>
    );
}
