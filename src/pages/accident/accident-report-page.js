import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_accident_report_form_page, nav_customer_member_home} from "../../utils/url";
import {AccidentType} from "../../utils/global-variable";
import Header from "../../component/header";

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
            <Container className={"w-50"}>
                <Header _content={"사고 접수 메뉴"} />
            <Button className={"w-100 mt-3 mb-3"} onClick={() => moveToReportForm(AccidentType.CAR_ACCIDENT)} >자동차 사고</Button>
            <Button className={"w-100 mt-3 mb-3"} onClick={() => moveToReportForm(AccidentType.CAR_BREAKDOWN)} variant={"success"}>자동차 고장</Button>
            <Button className={"w-100 mt-3 mb-3"} onClick={() => moveToReportForm(AccidentType.INJURY_ACCIDENT)} variant={"warning"}>상해 사고</Button>
            <Button className={"w-100 mt-3 mb-3"} onClick={() => moveToReportForm(AccidentType.FIRE_ACCIDENT)} variant={"danger"}>화재 사고</Button>
            <Button className={"w-100 mt-3 mb-3"} onClick={moveToBack} variant={"dark"}>뒤로 가기</Button>
            </Container>
        </>
    )
}