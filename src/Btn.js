import { Button } from "react-bootstrap"
import React from 'react'

function Btn(props){
    return(
        <>
            <Button variant="dark" id='btn' className='mx-1 my-1' onClick={props.func}>{props.action}</Button>
        </>
    )
}

export default Btn