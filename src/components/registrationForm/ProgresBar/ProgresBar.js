import {React, Component, useState} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Example = (password, repeatPassword)=>{
    let completed
    if(password===repeatPassword || repeatPassword >=6){
        completed = repeatPassword

    }

    return <ProgressBar completed={completed} />
}

export default Example