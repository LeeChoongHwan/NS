import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import baseAxios from "../utils/cust-axios";
import {getDataByInsuranceType, getUrlByInsuranceType} from "../utils/convert-values";
import UserForm from "../component/user-form";
import {nav_home, signup_user} from "../utils/url";

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
                    baseAxios().post(signup_user(response.data.customerId),{
                        userId:form.loginId.value,
                        password:form.password.value
                    }).then(() =>{
                        navigate(nav_home(), {replace: true})
                    }).catch((error) => {console.error(error)})
                }).catch((error) => {
                console.error(error)
            })
        }
        setValidated(true);
    };
    return (
        <UserForm validated={validated} handleSubmit={handleSubmit}></UserForm>
    )
}