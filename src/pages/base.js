import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {
    nav_contract_customer,
    nav_customer_home,
    nav_employee_home,
    nav_insurance,
    nav_login,
    nav_uw
} from "../utils/url";
import {mode_direct, mode_sales} from "../utils/global-variable";

export default function Base() {

    const navigate = useNavigate();

    const moveToCustomerPage = ()=>{
        navigate(nav_customer_home());
    }
    const moveToEmployeePage = () => {
        if(sessionStorage.getItem("access-token")!==null)
            navigate(nav_employee_home());
        else
            navigate(nav_login(),{
                state : {
                    nextPage : nav_employee_home()
                }
            })
    }
    return (
        <>

            <Button lg variant={"primary"} onClick={moveToCustomerPage}>고객</Button>
            <Button lg variant={"danger"} onClick={moveToEmployeePage}>직원</Button>
        </>
    )
}