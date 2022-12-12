import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_customer_member_home, nav_customer_non_member_home, nav_home, nav_login} from "../../../utils/url";
import Header from "../../../component/header";

export default function CustomerHome() {

    const navigate = useNavigate()

    const moveToNonMemberPage = () => {
        navigate(nav_customer_non_member_home())
    }
    const moveToMemberPage = () =>{
        if(sessionStorage.getItem("access-token")===null)
            navigate(nav_login(),{
                state : {
                    nextPage : nav_customer_member_home()
                }
            })
        else
            navigate(nav_customer_member_home())
    }
    return (
        <>
            <Container className={"w-50"}>
                <Header _content={"고객 메뉴"}/>
            <Button className={"w-100 mt-3 mb-3"} onClick={moveToMemberPage}>회원</Button>
            <Button className={"w-100 mt-3 mb-3"} onClick={moveToNonMemberPage} variant={"success"}>비회원</Button>
            <Button className={"w-100 mt-3 mb-3"} onClick={() => navigate(nav_home(), {replace : true})} variant={"warning"}>뒤로 가기</Button>
            </Container>
        </>
    )
}