import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_customer_home, nav_home, nav_insurance} from "../../../utils/url";
import {mode_direct} from "../../../utils/global-variable";
import Header from "../../../component/header";

export default function NonMemberHome() {

    const navigate = useNavigate();

    const moveToDirectPage = ()=>{
        navigate(nav_insurance(),{
            state : {
                mode : mode_direct
            }
        });
    }
    return (
        <>
            <Container className={"w-50"}>
                <Header _content={"비회원 메뉴"}/>
            <Button className={"w-100 mt-3 mb-3"} lg variant={"primary"} onClick={moveToDirectPage}>다이렉트 보험 가입</Button>
            <Button className={"w-100 mt-3 mb-3"} onClick={() => navigate(nav_customer_home(), {replace : true})} variant={"warning"}>뒤로 가기</Button>
            </Container>
        </>
    )
}