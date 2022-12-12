import CarNoForm from "../form-group/car-no-form";
import CustomFormTextGroup from "../form-group/custom-form-text-group";
import {Form} from "react-bootstrap";

export default function CarBreakdownForm(){
    return (
        <>
            <CarNoForm/>
            <CustomFormTextGroup _name={"symptom"}
                                 _label={"고장 증상"}
                                 _placeholder={"고장 증상"}
                                 _errorMessage={"증상를 입력해주세요"}/>
        </>
    )
}