import {useEffect, useState} from "react";
import {tokenAxios} from "../../utils/cust-axios";
import {customer_payment} from "../../utils/url";
import {Button, Modal} from "react-bootstrap";
import CustTable from "../cust-table";
import {customer_payments_header} from "../../utils/table_header";

export default function PaymentListModal({_show, _setShow , _payments, _contractId}){


    const buttonAction = (event) => {
        const paymentId = event.currentTarget.childNodes[0].innerHTML;
        tokenAxios().patch(customer_payment(), {
            paymentId,
            contractId : _contractId
        })
            .then(() =>{
                alert("결제 수단이 등록되었습니다.")
                handleClose();
            })
            .catch(console.error)
    }

    const handleClose = () => {
        _setShow(false);
    }

    return (
        <>
            <Modal show={_show} onHide={handleClose}
                   backdrop="static"
                   keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> 결제수단 목록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CustTable _head={customer_payments_header} _body={_payments} _rowAction={buttonAction} _modalProps={undefined}/>
                </Modal.Body>
            </Modal>
        </>
    )

}