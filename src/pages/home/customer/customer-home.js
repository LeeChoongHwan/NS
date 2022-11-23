import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_customer_non_member_home, nav_home} from "../../../utils/url";

export default function CustomerHome() {

    const navigate = useNavigate()

    const moveToUnMemberPage = () => {
        navigate(nav_customer_non_member_home())
    }
    return (
        <>
            <Button>회원</Button>
            <Button onClick={moveToUnMemberPage} variant={"success"}>비회원</Button>
            <Button onClick={() => navigate(nav_home(), {replace : true})} variant={"warning"}>뒤로 가기</Button>
        </>
    )
}