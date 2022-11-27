import {Button, Form} from "react-bootstrap";
import {CardType} from "../../../utils/global-variable";
import React, {useEffect, useState} from "react";
import {customer_payment, nav_signup_type} from "../../../utils/url";
import CustomFormTextGroup from "../../form-group/custom-form-text-group";
import {card_pattern} from "../../../utils/reg-pattern";
import CustomFormNumberGroup from "../../form-group/custom-form-number-group";
import {tokenAxios} from "../../../utils/cust-axios";
import Row from "react-bootstrap/Row";

export default function CardSelect({_show, _setShow, _handleClose}) {

    const [cardType, setCardType] = useState()
    const [validated, setValidated] = useState(false);
    const [cardNo, setCardNo]= useState("")
    const [cvcNo,setCvcNo] = useState();
    const [month,setMonth] = useState();
    const [year,setYear] = useState();


    const changeState = (event) => {
        setCardType(event.target.value);
        document.querySelector(".form-area-card").style.display = "block"
    }

    useEffect(() => {
        if(_show){
            document.querySelector(".form-card").style.display = "block"
        }else
            document.querySelector(".form-card").style.display = "none"

    },[_show])


    const clearInputValue = () =>{
        setCardNo("")
        setCvcNo("")
        setMonth("")
        setYear("")
        setValidated(false)
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            let formattedMonth = month > 10 ? month : "0" + month;
            const expiryDate = `${year}-${formattedMonth}-01`
            tokenAxios().post(customer_payment(), {
                payType: "CARD",
                cardNo: cardNo,
                cardType: cardType,
                cvcNo: cvcNo,
                expiryDate: expiryDate
            }).then((response) => {
                alert("카드가 등록되었습니다.");
                _setShow(false);
                clearInputValue()
            }).catch(console.error)
        }
        setValidated(true);
    };


    return (
        <>

            <div className={"form-card"}>
                <hr/>
                <div className={"flex_box center mt-3"}>
                    <h4>카드 정보 입력</h4>
                </div>
                <Form.Select onChange={changeState} className={"mt-3"}>
                    <option value={CardType.KB}>KB</option>
                    <option value={CardType.SINHAN}>SINHAN</option>
                    <option value={CardType.HANA}>HANA</option>
                    <option value={CardType.LOTTE}>LOTTE</option>
                    <option value={CardType.BC}>BC</option>
                    <option value={CardType.NH}>NH</option>
                    <option value={CardType.SAMSUNG}>SAMSUNG</option>
                    <option value={CardType.HYUNDAI}>HYUNDAI</option>
                </Form.Select>

                <Form noValidate validated={validated} onSubmit={handleSubmit} className={"form-area-card"}>
                    <CustomFormTextGroup _name={"카드 번호"} _pattern={card_pattern}
                                         _errorMessage={"****-****-****-**** 형식에 맞춰서 입력해주세요 (4자리 숫자)"}
                    _value={cardNo} _setValue={setCardNo}/>
                    <CustomFormNumberGroup _name={"CVC 번호"} _min={100} _max={999}
                    _value={cvcNo} _setValue={setCvcNo}/>
                    <Row xs={2} sm ={2}>
                    <CustomFormNumberGroup _name={"카드 만료 월"} _min={1} _max={12} _value={month} _setValue={setMonth}/>
                    <CustomFormNumberGroup _name={"카드만료 연도"} _min={2022} _max={2032} _value={year} _setValue={setYear}/>
                    </Row>
                    <Row xs={2} className={"mt-3"}>
                    <Button type={"submit"}>등록</Button>
                    <Button onClick={_handleClose} variant={"secondary"}>취소</Button>
                    </Row>
                </Form>
            </div>
        </>
    )
}