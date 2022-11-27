import {Button} from "react-bootstrap";
import {nav_home, nav_insurance, nav_login, nav_uw} from "../../../utils/url";
import {mode_sales} from "../../../utils/global-variable";
import {useNavigate} from "react-router-dom";

export default function EmployeeHome(){

    const navigate = useNavigate();



    const moveToSalesPage = ()=>{
        if(sessionStorage.getItem("access-token")!==null){
            navigate(nav_insurance(),{
                state : {
                    mode : mode_sales
                }
            });
        }else
            navigate(nav_login())
    }

    const moveToUwPage = () => {
        if(sessionStorage.getItem("access-token")!==null)
            navigate(nav_uw());
        else
            navigate(nav_login())
    }
    const logOut = () =>{
        sessionStorage.removeItem("access-token");
        navigate(nav_home(), {replace: true})
    }

    return (
        <>
            <Button lg variant={"primary"} onClick={moveToSalesPage}>영업 하기</Button>
            <Button lg variant={"success"} onClick={moveToUwPage}>인수심사하기</Button>
            <Button onClick={logOut} variant={"warning"}>로그아웃</Button>
        </>
    )

}