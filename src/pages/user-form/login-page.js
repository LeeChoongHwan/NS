import UserForm from "../../component/user-form";
import {baseAxios} from "../../utils/cust-axios";
import {login_user, nav_home} from "../../utils/url";
import {useEffect, useState} from "react";
import saveToken from "../../utils/tokens";
import {useLocation, useNavigate} from "react-router-dom";
import {globalExceptionHandler, handleError} from "../../utils/exception/global-exception-handler";

export default function LoginPage(){

    const navigate = useNavigate();
    const location = useLocation();
    const [validated, setValidated] = useState(false);
    const [nextPage,setNextPage] = useState("")
    useEffect(() => {
        if(location.state.nextPage !== undefined)
            setNextPage(location.state.nextPage)

    })

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            baseAxios().post(login_user(),{
                userId:form.loginId.value,
                password:form.password.value
            }).then(response => {
                saveToken(response.headers["access-token"])
                const url = nextPage !== "" ? nextPage : nav_home()
                navigate(url,{
                    replace : true
                })
            }).catch(err => {
                console.log(err)
                handleError(err)
            })
            // setValidated(true);
        }
    };
    return (
        <>
        <h4>로그인 화면 입니당</h4>
        <UserForm validated={validated} handleSubmit={handleSubmit} button_message={"로그인"}></UserForm>
        </>
    )
}