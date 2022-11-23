import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Container,Button} from "react-bootstrap";
import "./uw-select-insurance-type.css"

export default function UwSelectInsuranceType() {
    const navigate = useNavigate();

    const handleUWList = () => {
        navigate("/uwListTable",{
            
        });
    }
    
    return (
        <Container>
        <div className={"d-grid gap-2"}>
            <Button variant="secondary" className='health_button' onClick={handleUWList}>건강보험</Button>{' '}
            <Button variant="secondary" className='health_button' onClick={handleUWList}>자동차보험</Button>{' '}
            <Button variant="secondary" className='health_button' onClick={handleUWList}>화재보험</Button>{' '}
        </div>
        </Container>
    );
}
