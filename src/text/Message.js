import React, { useState} from 'react'

export default function Message(){
    const [text,setText]= useState("Enter your text here")
    function onChange(e){
        setText(e.target.value)
    } 
    const onUper =()=>{
        let upper = text.toUpperCase()
        setText(upper)
    }
    const onLper =()=>{
        let lower = text.toLowerCase()
        setText(lower)
    }
    const onClear =()=>{
        setText("")
    }
    const onCopy =()=>{
        let Text = document.getElementById("box")
        console.log(Text)
        Text.select()
        navigator.clipboard.writeText(Text.value)
    }
    return(
        <div className='container my-3'>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea value={text} className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={onchange}></textarea>
            </div>
            <button type="button" class="btn btn-primary">UpperCase</button>
            <button type="button" class="btn btn-secondary">LowerCase</button>
            <button type="button" class="btn btn-success">Clear</button>
            <button type="button" class="btn btn-danger">Copy</button> 
        <div>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length}Words and {text.length} Letters</p>
        </div>
        </div>
    )
}