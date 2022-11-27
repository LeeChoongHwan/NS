import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_customer_member_home, nav_customer_non_member_home, nav_home, nav_login} from "../../../utils/url";

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
            <Button onClick={moveToMemberPage}>회원</Button>
            <Button onClick={moveToNonMemberPage} variant={"success"}>비회원</Button>
            <Button onClick={() => navigate(nav_home(), {replace : true})} variant={"warning"}>뒤로 가기</Button>
        </>
    )
}