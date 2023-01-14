import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState("");
   const handleUpClick = ()=> {
        let changeText=text.toUpperCase();
        setText(changeText);
    }
    const [count,setCount]=useState(0);
   const handleOnChange = (event)=>{
        setText(event.target.value);
        if(text.length<0)
        {
            setCount(0);
        }
         else if(text.charAt(text.length-1)!==' ')
        {
         setCount((text.split(" ").length));
        }
        else
        {
         setCount(text.split(" ").length-1);
        }


    }
    const handleloClick =()=>
    {
        
        setText(text.toLowerCase());
    }
   
    const handleSnClick =()=>
    {
       let text2 = text.toLowerCase();
       text2=text2.charAt(0).toUpperCase()+text2.slice(1);
       let flag=1;
       for(let i=1;i<text2.length-1;i++)
        {
            if(text2.charAt(i)==='.')
            {
                flag=1;
            }
            else if(text2.charAt(i)===' ')
            {
                continue;
            }
           else if(flag===1 )
            {
                text2=text2.slice(0,i)+text2.charAt(i).toUpperCase()+text2.slice(i+1);
                flag=0;
            }
           

        }
       
        setText(text2);
    }


  return (
    <div className="mb-3">  
    <h2>{props.heading}</h2>
     <label htmlFor="myBox" className="form-label">Text Area</label>
     <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
     <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
     <button className="btn btn-primary my-2 mx-2" onClick={handleloClick}>Convert to lowercase</button>
     <button className="btn btn-primary my-2 mx-2" onClick={handleSnClick}>Convert to sentencecase</button>

     <h3 className='my-3'>Text Summary</h3>
     <p className='my-2'>Word : {count} and Character : {text.length}</p>
     <h4 className='my-2'>Preview</h4>
     <p className='my-2'>{text}</p>
    </div>

  )
}
