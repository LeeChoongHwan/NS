import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_contract_customer, nav_insurance, nav_login} from "../utils/url";
import {mode_direct, mode_sales} from "../utils/global-variable";

export default function Base() {

    const navigate = useNavigate();

    const moveToDirectPage = ()=>{
        navigate(nav_insurance(),{
            state : {
                mode : mode_direct
            }
        });
    }
    // TODO USER ROLE 별로..? 접근 자체를 못하게 수정해야 하나??
    const modeToSalesPage = ()=>{
        if(sessionStorage.getItem("access-token")!==null){
            navigate(nav_insurance(),{
                state : {
                    mode : mode_sales
                }
            });
        }else
            navigate(nav_login())
    }
    return (
        <>
            <Button lg variant={"primary"} onClick={moveToDirectPage}>다이렉트 보험 가입</Button>
            <Button lg variant={"danger"} onClick={modeToSalesPage}>영업 하기</Button>
        </>
    )
}