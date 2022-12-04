import {Table} from "react-bootstrap";
import {convertAccidentTypeToKorean, convertLocalDateTime, convertValues} from "../utils/convert-values";
import {useNavigate} from "react-router-dom";
import {nav_claim_compensation_page} from "../utils/url";

export default function AccidentListTable({_head, _body}) {

    const navigate = useNavigate();

    const compEmployeeField = (comp) => {
        return <p className={`line-height ${comp.name} ${comp.phone}`}>
            이름 : {comp.name} <br/>
            전화번호 : {comp.phone}
        </p>
    }

    const claimCompensation = (event) => {

        navigate(nav_claim_compensation_page(), {
            replace: true,
            state: {
                id: event.currentTarget.childNodes[0].innerHTML,
                type: event.currentTarget.childNodes[1].innerHTML,
                isEmpAssigned: event.currentTarget.childNodes[4].innerHTML !== "미배정",
                emp: event.currentTarget.childNodes[4].innerHTML !== "미배정" ? {
                    name: event.currentTarget.childNodes[4].childNodes[0].classList[1],
                    phone: event.currentTarget.childNodes[4].childNodes[0].classList[2]
                } : null
            }
        })
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
                    return <tr className={"hover_cursor"} onClick={claimCompensation}>
                        <td className={"table_cel_center"}>{v.accidentId}</td>
                        <td className={"table_cel_center"}>{convertAccidentTypeToKorean(v.accidentType)}</td>
                        <td className={"table_cel_center"}>{convertLocalDateTime(v.dateOfAccident)}</td>
                        <td className={"table_cel_center"}>{convertLocalDateTime(v.dateOfReport)}</td>
                        <td className={"table_cel_center"}>{
                            v.compEmployee !== undefined && v.compEmployee !== null ?
                                compEmployeeField(v.compEmployee)
                                : "미배정"
                        }</td>
                    </tr>
                })}

            </tbody>
        </Table>
    </>
}