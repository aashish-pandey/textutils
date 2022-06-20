import React, {useState} from 'react'

export default function TextForm(props) {

    let mode = 'dark';
  if(props.mode === 'light'){
    mode = 'dark';
  }else{
    mode = 'light';
  }

    const [Text, setText] = useState("Enter your text here");

    const handleUpClick = ()=>{
        let tmp = Text;
        tmp = tmp.toUpperCase();
        setText(tmp);

        props.showAlert("Converted To Uppercase", "success")

    }

    const handleLowClick = ()=>{
        let tmp = Text.toLowerCase();
        setText(tmp);
        props.showAlert("Converted To Lowercase", "success")

    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleClearText = ()=>{
        setText("");
        props.showAlert("Text Cleared", "success")

    }

    const handleFirstCaps = ()=>{
        let tmp ="";
        let arr = Text.split('.');
        let ls = Text[Text.length-1];
        for(let i = 0; i< arr.length; i++){
            let str = arr[i].trim();
            let ch = str[0].toUpperCase();
            if(i!== 0)tmp += ' ';

            tmp += ch + str.substring(1);

            if(i === arr.length - 1 && ls === '.')tmp += ls;
            else if(i !== arr.length-1) tmp += '.';
        }

        setText(tmp);
        props.showAlert("Converted First letter of sentence to uppercase", "success")

    }

    const handleCopyText = ()=>{
        
        navigator.clipboard.writeText(Text);
        props.showAlert("Text Copied", "success")

    }

    const handleRemoveExtraSpaces = ()=>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")

    }


   

    return (
        <>
        <div className={'container text-' + mode}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className={`form-control bg-${props.mode} text-${mode}`}
                    id="myBox"
                    rows="8"
                    value={Text}
                    onChange = {handleOnChange}
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleFirstCaps}>First letter Caps</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>



        </div>

        <div className={"container my-3 text-" + mode}>
            <h2>Your Text Summary is: </h2>
            <p>{Text.split(" ").length - 1} words and {Text.length} characters</p>
            <p>{(Text.split(" ").length - 1) * 0.08} Minutes Read</p>

            <h3>Preview</h3>
            <p>{(Text.length > 0)? Text : 'Enter Something to preview'}</p>
        </div>
    </>
    );
}
