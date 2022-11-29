import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {baseAxios, tokenAxios} from "../../utils/cust-axios";
import {
    getDataByInsuranceType,
    getContractUrlByInsuranceType,
    getSalesUrlByInsuranceType
} from "../../utils/convert-values";
import UserForm from "../../component/user-form";
import {nav_home, signup_user} from "../../utils/url";
import {mode_direct} from "../../utils/global-variable";
import {handleError} from "../../utils/exception/global-exception-handler";

export default function SignUpPage() {
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState();
    const [type, setType] = useState();
    const [mode, setMode] = useState();
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
            setMode(location.state.mode)
        }

    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const contractData = getDataByInsuranceType(type, customerDto, contractDto);
            const signupData = {
                userId: form.loginId.value,
                password: form.password.value
            };

            let axios;
            // mode에 따라서 axios 다르게 설정해주기.
            if (mode === mode_direct) {
                const url = getContractUrlByInsuranceType(type, id);
                axios = baseAxios().post(`${url}`,
                    contractData)
            }else {
                const url = getSalesUrlByInsuranceType(type,id);
                axios = tokenAxios().post(`${url}`,
                    contractData)
            }
            axios.then((response) => {
                baseAxios().post(signup_user(response.data.customerId), signupData).then(() => {
                    navigate(nav_home(), {replace: true})
                }).catch((error) => {
                    handleError(error)
                })
            }).catch((error) => {
                handleError(error)
            })
        }

        setValidated(true);
    };
    return (
        <UserForm validated={validated} handleSubmit={handleSubmit} button_message={"가입하기"}></UserForm>
    )
}