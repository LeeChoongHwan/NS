import {Table} from "react-bootstrap";
import {
    convertAccidentTypeToKorean,
    convertCompStateToKor,
    convertLocalDateTime,
    convertValues
} from "../../utils/convert-values";

export default function CompListTable({_head, _body, _action}){


    return (
        <>
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
                    _body?.map(v => {
                        return <tr className={"hover_cursor"} onClick={_action}>
                            <td className={"table_cel_center"}>{v?.accidentId}</td>
                            <td className={"table_cel_center"}>{convertAccidentTypeToKorean(v?.accidentType)}</td>
                            <td className={"table_cel_center"}>{convertLocalDateTime(v?.dateOfReport)}</td>
                            <td className={"table_cel_center"}>{convertCompStateToKor(v?.compState)}</td>
                        </tr>
                    }) }

                </tbody>
            </Table>
        </>
    )
}