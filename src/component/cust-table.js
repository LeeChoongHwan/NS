import {Table} from "react-bootstrap";
import {convertValues} from "../utils/convert-values";
import CustModal from "./cust-modal";


export default function  CustTable({_head, _body,_rowAction, _modalProps}) {




    return<>
        <Table striped bordered hover >
            <thead>
                <tr>
                    {convertValues(_head).map(v=>{
                        return <th className={"table_cel_center"} key={v}>{v}</th>
                    })}
                </tr>
            </thead>
            <tbody>
            {

                _body.map(v=>{
                return     <tr className={"hover_cursor"}  onClick={_rowAction}>
                    {
                        convertValues(v).map(v=>{
                            return <td className={"table_cel_center"} >{v}</td>
                        })
                    }
                </tr>
            })}
            {_modalProps == null ? null :
                <CustModal _show={_modalProps.showModal} _handleShow={_modalProps.setShowModal} _id={_modalProps.insId}
                ></CustModal>}

            </tbody>
        </Table>
    </>
}