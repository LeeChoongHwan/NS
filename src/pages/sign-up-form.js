import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export default function SignUpForm() {

    const [id,setId]= useState()

    const location = useLocation();
    useEffect(() => {
        if(location.state.insuranceId !== undefined) {
            setId(location.state.insuranceId);
        }
    },[])

    return <>
        
    </>
};