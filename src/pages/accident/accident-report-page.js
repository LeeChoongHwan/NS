import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_accident_report_form_page, nav_customer_member_home} from "../../utils/url";
import {AccidentType} from "../../utils/global-variable";

export default function AccidentReportPage(){
    const navigate = useNavigate();

    const moveToBack = () => {
        navigate(nav_customer_member_home())
    }
    const moveToReportForm = (type) => {
        navigate(nav_accident_report_form_page(), {
            replace : true,
            state : {
                type
            }
        })
    }

    return (
        <>
            <Button onClick={() => moveToReportForm(AccidentType.CAR_ACCIDENT)} >자동차 사고</Button>
            <Button onClick={() => moveToReportForm(AccidentType.CAR_BREAKDOWN)} variant={"success"}>자동차 고장</Button>
            <Button onClick={() => moveToReportForm(AccidentType.INJURY_ACCIDENT)} variant={"warning"}>상해 사고</Button>
            <Button onClick={() => moveToReportForm(AccidentType.FIRE_ACCIDENT)} variant={"danger"}>화재 사고</Button>
            <Button onClick={moveToBack} variant={"dark"}>뒤로 가기</Button>
        </>
    )
}