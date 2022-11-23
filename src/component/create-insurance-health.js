import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Table,Container,Button} from "react-bootstrap";
import "./uw-select-insurance-type.css"

export default function CreateInsuranceHealth() {
    const navigate = useNavigate();

    const handleCreateHealthComplete = () => {
        navigate("/createInsuranceHealth",{
            
        });
    }
    
    return (
    <Container>
      
    <Button variant="primary" onClick={handleCreateHealthComplete}>개발완료</Button>{' '}
    </Container>
    );
}
