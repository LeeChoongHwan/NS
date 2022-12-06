import React, {useState} from "react";
import {BankType, BankTypeErrorMessage} from "../../utils/global-variable";
import CustomFormTextGroup from "../form-group/custom-form-text-group";
import {bank_type_pattern} from "../../utils/reg-pattern";
import {tokenAxios} from "../../utils/cust-axios";
import {nav_employee_home, send_compensation} from "../../utils/url";
import {handleError} from "../../utils/exception/global-exception-handler";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function CompAccountForm({_id, _lossReserve}) {
    const [bankType, setBankType] = useState(BankType.KB)
    const [accountNo, setAccountNo] = useState("");
    const [validated, setValidated] = useState(false);
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    const changeState = (event) => {
        setBankType(event.target.value);
        document.querySelector(".form-area-account").style.display = "block"
        setAccountNo("")
        // setValidated(true)
    }
    const createAccountNoForm = () => {
        switch (bankType) {
            case BankType.KB :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _placeholder={BankTypeErrorMessage.KB}
                                            _pattern={bank_type_pattern.KB} _errorMessage={BankTypeErrorMessage.KB}/>
            case BankType.NH :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _placeholder={BankTypeErrorMessage.NH}
                                            _pattern={bank_type_pattern.NH} _errorMessage={BankTypeErrorMessage.NH}/>
            case BankType.KAKAOBANK :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _placeholder={BankTypeErrorMessage.NH}
                                            _pattern={bank_type_pattern.KAKAOBANK}
                                            _errorMessage={BankTypeErrorMessage.KAKAOBANK}/>
            case BankType.SINHAN :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _pattern={bank_type_pattern.SINHAN}
                                            _placeholder={BankTypeErrorMessage.SINHAN}
                                            _errorMessage={BankTypeErrorMessage.SINHAN}/>
            case BankType.WOORI :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _pattern={bank_type_pattern.WOORI}
                                            _placeholder={BankTypeErrorMessage.WOORI}
                                            _errorMessage={BankTypeErrorMessage.WOORI}/>
            case BankType.IBK :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _placeholder={BankTypeErrorMessage.IBK}
                                            _pattern={bank_type_pattern.IBK} _errorMessage={BankTypeErrorMessage.IBK}/>
            case BankType.HANA :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _pattern={bank_type_pattern.HANA}
                                            _placeholder={BankTypeErrorMessage.HANA}
                                            _errorMessage={BankTypeErrorMessage.HANA}/>
            case BankType.CITY :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _pattern={bank_type_pattern.CITY}
                                            _placeholder={BankTypeErrorMessage.CITY}
                                            _errorMessage={BankTypeErrorMessage.CITY}/>
            case BankType.SAEMAUL :
                return <CustomFormTextGroup _name={"계좌번호"} _value={accountNo} _setValue={setAccountNo}
                                            _pattern={bank_type_pattern.SAEMAUL}
                                            _placeholder={BankTypeErrorMessage.SAEMAUL}
                                            _errorMessage={BankTypeErrorMessage.SAEMAUL}/>
            default:
                return null
        }

    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            tokenAxios().post(send_compensation(_id), {
                accountNo,
                bank :bankType,
                amount
            }).then((res) => {
                alert(res.data.message)
                moveToEmpMenu()
            }).catch(err => {
                handleError(err);
            })
        }
        setValidated(true);
    };

    const moveToEmpMenu = () => {
        navigate(nav_employee_home(), {replace: true})
    }


    return (
        <>

            <div className={"form-account"}>
                <hr/>
                <div className={"flex_box center mt-3"}>
                    <h4>계좌 정보 입력</h4>
                </div>
                <Form.Select onChange={changeState} className={"mt-3"}>
                    <option value={BankType.KB}>KB</option>
                    <option value={BankType.SINHAN}>SINHAN</option>
                    <option value={BankType.HANA}>HANA</option>
                    <option value={BankType.KAKAOBANK}>KAKAOBANK</option>
                    <option value={BankType.WOORI}>WOORI</option>
                    <option value={BankType.NH}>NH</option>
                    <option value={BankType.CITY}>CITY</option>
                    <option value={BankType.SAEMAUL}>SAEMAUL</option>
                    <option value={BankType.IBK}>IBK</option>
                </Form.Select>

                <Form noValidate validated={validated} onSubmit={handleSubmit} className={"form-area-account"}>
                    {createAccountNoForm()}
                    <Form.Label className={"label"}>보상금</Form.Label>
                    <Form.Group className={"mb-3 mt-3"}>
                        <Form.Control
                            value={amount}
                            onChange={(event)=>setAmount(event.target.value)}
                            required
                            type="number"

                            placeholder= {"보상금"}
                            min={0}
                            max={_lossReserve}
                        />
                        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            {`0 ~ ${_lossReserve} 사이의 값을 입력해주세요`}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type={"submit"}>등록</Button>
                </Form>
            </div>
        </>
    )
}