import {Button, Modal} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CardSelect from "./selectform/card-select";
import {useEffect, useState} from "react";
import AccountSelect from "./selectform/account-select";

export default function PaymentAddFormModal({_show, _setShow}) {

    const [showCardSelect, setShowCardSelect] = useState(false);
    const [showAccountSelect, setShowAccountSelect] = useState(false);

    useEffect(() => {
        setShowCardSelect(true)
    },[_show])

    const handleClose = () => {
        _setShow(false);
        setShowAccountSelect(false);
        setShowCardSelect(false);
    };

    const showCardForm = () => {
        setShowCardSelect(true);
        setShowAccountSelect(false);
    }
    const showAccountForm = () => {
        setShowAccountSelect(true);
        setShowCardSelect(false);
    }

    return (
        <>
            <Modal show={_show} onHide={handleClose}
                   backdrop="static"
                   keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> 결제수단 추가</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                        <Button onClick={showCardForm} className={"w-100 mt-3"}>카드</Button>
                        <Button variant={"success"} onClick={showAccountForm} className={"w-100 mt-3"}>계좌</Button>

                    <CardSelect _show={showCardSelect} _setShow={setShowCardSelect} _handleClose={handleClose}/>
                    <AccountSelect _show={showAccountSelect} _setShow={setShowAccountSelect} _handleClose={handleClose}/>

                </Modal.Body>
            </Modal>

        </>
    )
}