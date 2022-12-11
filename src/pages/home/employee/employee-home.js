import {Button} from "react-bootstrap";
import {nav_home, nav_insurance, nav_login, nav_uw, nav_create_insurance_list} from "../../../utils/url";
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

    const moveToCreateInsurancePage = () => {
        if(sessionStorage.getItem("access-token")!==null)
            navigate(nav_create_insurance_list());
        else
            navigate(nav_login())
    }
    
    return (
        <>
            <Button lg variant={"primary"} onClick={moveToSalesPage}>영업 하기</Button>
            <Button lg variant={"success"} onClick={moveToUwPage}>인수심사하기</Button>
            <Button lg variant={"info"} onClick={moveToCreateInsurancePage}>보험 설계하기</Button>
            <Button onClick={() => navigate(nav_home(), {replace : true})} variant={"warning"}>뒤로 가기</Button>
        </>
    )

}