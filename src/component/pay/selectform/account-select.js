import {Button, Form} from "react-bootstrap";
import {BankType, BankTypeErrorMessage, CardType} from "../../../utils/global-variable";
import CustomFormTextGroup from "../../form-group/custom-form-text-group";
import {bank_type_pattern, card_pattern} from "../../../utils/reg-pattern";
import CustomFormNumberGroup from "../../form-group/custom-form-number-group";
import React, {useEffect, useState} from "react";
import {tokenAxios} from "../../../utils/cust-axios";
import {customer_payment} from "../../../utils/url";
import Row from "react-bootstrap/Row";
import {handleError} from "../../../utils/exception/global-exception-handler";

export default function AccountSelect({_show, _setShow, _handleClose}) {
    const [bankType, setBankType] = useState(BankType.KB)
    const [accountNo, setAccountNo] = useState("");
    const [validated, setValidated] = useState(false);

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

    useEffect(() => {
        if (_show) {
            document.querySelector(".form-account").style.display = "block";
            document.querySelector(".form-area-account").style.display = "block"
        } else {
            document.querySelector(".form-account").style.display = "none";
            document.querySelector(".form-area-account").style.display = "none"
        }
    }, [_show])

    const clearInputValue = () =>{
        setAccountNo("");
        setValidated(false)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            tokenAxios().post(customer_payment(), {
                payType: "ACCOUNT",
                accountNo,
                bankType,
            }).then(() => {
                alert("계좌가 등록되었습니다.");
                clearInputValue();
            }).catch(err => {
                handleError(err);
            })
        }
        setValidated(true);
    };


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
                    <Row xs={2} className={"mt-3"}>
                        <Button type={"submit"}>등록</Button>
                        <Button onClick={_handleClose} variant={"secondary"}>취소</Button>
                    </Row>
                </Form>
            </div>
        </>
    )
}