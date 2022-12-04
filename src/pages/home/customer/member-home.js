import {Button} from "react-bootstrap";
import {nav_accident_report_page, nav_reported_accident_list_page, nav_home, nav_paying_page} from "../../../utils/url";
import {useNavigate} from "react-router-dom";

export default function MemberHome() {
    const navigate = useNavigate();
    const moveToPayingPage = () => {
        navigate(nav_paying_page())
    }
    const logOut = () =>{
        sessionStorage.removeItem("access-token");
        navigate(nav_home(), {replace: true})
    }
    const moveToAccidentReportPage = () => {
        navigate(nav_accident_report_page())
    }
    const moveToClaimCompensationPage = () => {
        navigate(nav_reported_accident_list_page())
    }


    return (
        <>
            <Button>보험가입</Button>
            <Button onClick={moveToPayingPage} variant={"success"}>보험료납입</Button>
            <Button onClick={moveToAccidentReportPage} variant={"info"}>사고접수</Button>
            <Button onClick={moveToClaimCompensationPage}variant={"warning"}>보상금청구</Button>
            <Button onClick={logOut} variant={"dark"}>로그아웃</Button>
        </>
    );
}