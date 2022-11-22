import {Button, useAccordionButton} from "react-bootstrap";
import {useAccordionToggle} from "react-bootstrap/cjs/AccordionToggle";

export default function UwAccordionButton({_eventKey, _action}){
    useAccordionButton(_eventKey, _action);

    return (
        <>
            <Button onClick={_action}>승인</Button>
        </>
    )
}