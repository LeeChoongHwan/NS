import {Button, Modal} from "react-bootstrap";
import {tokenAxios} from "../../utils/cust-axios";
import {pay_premium, customer_payment} from "../../utils/url";
import {useState} from "react";
import PaymentListModal from "./payment-list-modal";
import PaymentAddFormModal from "./payment-add-form-modal";
import {handleError} from "../../utils/exception/global-exception-handler";

export default function PayModal({_show, _setShow, _contractId}) {

    const [payments, setPayments] = useState([]);
    const [showList, setShowList] = useState(false);
    const [showAddFormat, setShowAddFormat] = useState(false);
    const handleClose = () => {
        _setShow(false)
    }

    const payPremium = () => {
        tokenAxios().post(pay_premium(_contractId))
            .then(() => {
                alert("결제가 완료되었습니다.")
            }).catch(err => {
            handleError(err)
            switch (err.response.data.errorName) {
                case  'PAYMENT_NOT_REGISTERED' :
                    registerPayment()
                    break;

            }
        })
    }
    const registerPayment = () => {
        tokenAxios().get(customer_payment())
            .then((response) => {
                setPayments(response.data)
                setShowList(true)
            }).catch((err) => {
            handleError(err)
            if (err.response.data.errorName === 'PAYMENT_LIST_EMPTY') {
                addPayment();
            }
        })

    }

    const addPayment = () => {
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