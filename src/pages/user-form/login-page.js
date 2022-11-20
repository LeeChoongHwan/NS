import UserForm from "../../component/user-form";
import {baseAxios} from "../../utils/cust-axios";
import {login_user, nav_home} from "../../utils/url";
import {useState} from "react";
import saveToken from "../../utils/tokens";
import {useNavigate} from "react-router-dom";

export default function LoginPage(){

    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);

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
                navigate(nav_home(),{
                    replace : true
                })
            })
            setValidated(true);
        }
    };
    return (
        <>
        <h4>로그인 화면 입니당</h4>
        <UserForm validated={validated} handleSubmit={handleSubmit} button_message={"로그인"}></UserForm>
        </>
    )
}