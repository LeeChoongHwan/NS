import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {InsuranceType} from "../../utils/global-variable";
import {nav_employee_home, nav_home, nav_uw_contract} from "../../utils/url";

export default function UwPage(){
    const navigate = useNavigate();

    const moveToHealthContractListPage = () => {
        navigate(nav_uw_contract(),{
            state : {
                insuranceType: InsuranceType.HEALTH
            }
        })
    }
    const moveToCarContractListPage = () => {
        navigate(nav_uw_contract(),{
            state : {
                insuranceType: InsuranceType.CAR
            }
        })
    }
    const moveToFireContractListPage = () => {
        navigate(nav_uw_contract(),{
            state : {
                insuranceType: InsuranceType.FIRE
            }
        })
    }

    return (
        <>
            <Button onClick={moveToHealthContractListPage} variant={"primary"}>건강 보험</Button>
            <Button onClick={moveToCarContractListPage} variant={"danger"}>자동차 보험</Button>
            <Button onClick={moveToFireContractListPage} variant={"warning"}>화재 보험</Button>
            <Button onClick={() => navigate(nav_employee_home(), {replace : true})} variant={"success"}>뒤로 가기</Button>
        </>
    )
}