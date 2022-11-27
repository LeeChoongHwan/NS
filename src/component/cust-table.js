import {Table} from "react-bootstrap";
import {convertValues} from "../utils/convert-values";
import GuaranteeModal from "./guarantee-modal";
import {ModalMode} from "../utils/global-variable";
import UwModal from "./uw-modal";
import PayModal from "./pay/pay-modal";


export default function CustTable({_head, _body, _rowAction, _modalProps}) {

    const setModal = () =>{
        if (_modalProps !== undefined) {
            switch (_modalProps.modalStatus){
                case ModalMode.GUARANTEE :
                    return <GuaranteeModal _mode={_modalProps.mode} _show={_modalProps.showModal}
                                           _handleShow={_modalProps.setShowModal} _id={_modalProps.insId}/>
                case ModalMode.UW:
                    return  <UwModal _show={_modalProps.showModal} _handleShow={_modalProps.setShowModal}
                                     _setRefresh={_modalProps.setRefresh} _contractId={_modalProps.customerId} _type={_modalProps.type}/>
                case ModalMode.PAY :
                    return <PayModal _show={_modalProps.showModal} _setShow={_modalProps.setShowModal} _contractId={_modalProps.contractId}/>
            }
        }
    }

    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                {convertValues(_head).map(v => {
                    return <th className={"table_cel_center"} key={v}>{v}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {

                _body.map(v => {
                    return <tr className={"hover_cursor"} onClick={_rowAction}>
                        {
                            convertValues(v).map(v => {
                                return <td className={"table_cel_center"}>{v}</td>
                            })
                        }
                    </tr>
                })}
            {setModal()}
            </tbody>
        </Table>
    </>
}