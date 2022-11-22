import {InsuranceType} from "../../utils/global-variable";
import UwContractFireInfo from "./contract-type-info/uw-contract-fire-info";
import UwContractCarInfo from "./contract-type-info/uw-contract-car-info";
import UwContractHealthInfo from "./contract-type-info/uw-contract-health-info";

export default function UwContractInfo({_contractInfo, _type}){
    
    const contractDetail = () =>{
        switch(_type){
            case InsuranceType.HEALTH:
                return <UwContractHealthInfo _contractInfo={_contractInfo}/>;
            case InsuranceType.FIRE:
                return <UwContractFireInfo _contractInfo={_contractInfo}/>;
            case InsuranceType.CAR:
                return <UwContractCarInfo _contractInfo={_contractInfo}/>;
        }
    }
    
    return (
        <>
            {contractDetail()}
        </>
    )
}