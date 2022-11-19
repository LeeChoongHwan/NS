import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import baseAxios from "../utils/cust-axios";
import {getDataByInsuranceType, getUrlByInsuranceType} from "../utils/convert-values";

export default function SignUpForm() {
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState();
    const [type, setType] = useState();
    const [customerDto, setCustomerDto] = useState(Object);
    const [contractDto, setContractDto] = useState(Object);


    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state.type !== undefined) {
            setType(location.state.type)
            setId(location.state.id)
            setCustomerDto(location.state.customerDto)
            setContractDto(location.state.contractDto)
        }

    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const data = getDataByInsuranceType(type, customerDto, contractDto);
            const url = getUrlByInsuranceType(type, id);

            baseAxios().post(`${url}`,
                data)
                .then((response) => {
                    baseAxios().post(`/user/sign-up/${response.data.customerId}`,{
                        userId:form.loginId.value,
                        password:form.password.value
                    }).then(() =>{
                        navigate("/", {replace: true})
                    }).catch((error) => {console.error(error)})
                }).catch((error) => {
                console.error(error)
            })
        }
        setValidated(true);
    };
    return (
        <div className={"flex_box flex_box_center"}>
            <div className="form-signin">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className={"mb-3"}>
                        <Form.Control
                            required
                            name="loginId"
                            type="text"
                            placeholder="Login Id"

                        />
                        <Form.Control.Feedback>사용가능합니다</Form.Control.Feedback>
                        <Form.Control.Feedback type={"invalid"}>아이디를 입력해 주세요</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className={"mb-3"}>
                        <Form.Control
                            required
                            name="password"
                            type="password"
                            placeholder="Login password"
                        />
                        <Form.Control.Feedback>사용가능합니다</Form.Control.Feedback>
                        <Form.Control.Feedback type={"invalid"}>비밀번호를 입력해 주세요</Form.Control.Feedback>
                    </Form.Group>
                    <button type="submit" className="w-100 btn btn-primary">가입 하기</button>
                </Form>
            </div>
        </div>
    )
};