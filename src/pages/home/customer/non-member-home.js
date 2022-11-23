import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_customer_home, nav_home, nav_insurance} from "../../../utils/url";
import {mode_direct} from "../../../utils/global-variable";

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
            <Button lg variant={"primary"} onClick={moveToDirectPage}>다이렉트 보험 가입</Button>
            <Button onClick={() => navigate(nav_customer_home(), {replace : true})} variant={"warning"}>뒤로 가기</Button>
        </>
    )
}