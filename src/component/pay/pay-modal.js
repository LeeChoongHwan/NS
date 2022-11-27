import {Button, Modal} from "react-bootstrap";
import {tokenAxios} from "../../utils/cust-axios";
import {pay_premium, customer_payment} from "../../utils/url";
import {useState} from "react";
import PaymentListModal from "./payment-list-modal";
import PaymentAddFormModal from "./payment-add-form-modal";

export default function PayModal({_show, _setShow ,_contractId}) {

    const [payments, setPayments] = useState([]);
    const [showList, setShowList] = useState(false);
    const [showAddFormat, setShowAddFormat] = useState(false);
    const handleClose = () => {
        _setShow(false)
    }

    const payPremium = () => {
        tokenAxios().post(pay_premium(_contractId))
            .then(()=>{
                alert("결제가 완료되었습니다.")
            }).catch(err => {
            alert(err.response.data.errorMessage)
            switch(err.response.data.errorName){
                case  'PAYMENT_NOT_REGISTERED' :
                    alert("[알림] 해당 계약에 대해 결제 수단 정보가 없습니다. 설정해주세요.")
                    registerPayment()
                    break;

            }
        })
    }
    const registerPayment = () =>{
        tokenAxios().get(customer_payment())
            .then((response) => {
                setPayments(response.data)
                setShowList(true)
            }).catch((err) => {
            if (err.response.data.errorName === 'PAYMENT_LIST_EMPTY') {
                alert(err.response.data.errorMessage + "\n결제수단 등록 창을 띄웁니다.");
                addPayment();
            }
        })

    }

    const addPayment = () =>{
        // alert("응 추가해")
        setShowAddFormat(true);
    }

    return (
        <>
            <Modal show={_show} onHide={handleClose}
                   backdrop="static"
                   keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>결제 메뉴</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={payPremium} className={"w-100 mt-3"}>결제하기</Button>
                    <Button onClick={registerPayment} className={"w-100 mt-3"} variant={"warning"}>결제수단 설정하기</Button>
                    <Button onClick={addPayment} className={"w-100 mt-3"} variant={"success"}>결제수단 추가하기</Button>
                </Modal.Body>
            </Modal>
            <PaymentListModal _show={showList} _setShow={setShowList} _payments={payments} _contractId={_contractId}/>
            <PaymentAddFormModal _show={showAddFormat} _setShow={setShowAddFormat}/>
        </>
    )
}