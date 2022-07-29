import './App.css';
import { Navbar, Container, DropdownButton, Button } from "react-bootstrap"
import React, { useState } from 'react'
import Btn from './Btn'


function App() {

  const [text, setText] = useState("");

  const onChangeEvent = (event) => {
    setText(event.target.value)
  }

  // state to check whether button is clicked to bold or normalize the text
  const [isBold, setIsBold] = useState(false);
  const [isitalic, setIsItalic] = useState(false);


  // display current date
  const displayDate = () => {
    setInterval(() => {
      document.getElementById("date").innerHTML = new Date().toLocaleTimeString();

    }, 1000);
  }

  // convert the input text to uppercase

  const toUpper = () => {
    let newTxt = text.toUpperCase();
    setText(newTxt);

  }
  // convert the input text to lowercase
  const toLower = () => {
    let newTxt = text.toLowerCase();
    setText(newTxt);

  }
  // for copying the input text 
  const copy = () => {
    let cpytext = document.getElementById('inbox')

    cpytext.select();
    navigator.clipboard.writeText(cpytext.value)
  }


  //  bold the content
  const bold = () => {

    if (!isBold) {
      document.getElementById('inbox').style.fontWeight = "bold"
      setIsBold(true)
    }

    else {
      document.getElementById('inbox').style.fontWeight = "normal"
      setIsBold(false)

    }
  }

  //change text to italic
  const italic = () => {
    if (!isitalic) {
      document.getElementById('inbox').style.fontStyle = "italic"
      setIsItalic(true)
    }
    else {
      document.getElementById('inbox').style.fontStyle = "normal"
      setIsItalic(false)
    }
  }

  //change input colors
  const colorRed = () => {
    document.getElementById('inbox').style.color = "red"

  }

  const colorGreen = () => {
    document.getElementById('inbox').style.color = "green"

  }

  const colorBlue = () => {
    document.getElementById('inbox').style.color = "blue"

  }

  const colorBlack = () => {
    document.getElementById('inbox').style.color = "black"

  }


  const prevTxt = () => {
    document.getElementById('prev').innerHTML = "<h2>Preview</h2>";
    document.getElementById('text').innerHTML = text;
    document.getElementById('text').style.color = "blue";
    document.getElementById('text').style.fontWeight = "bold";


  }


  const clearTxt = () => {
    setText('')
    document.getElementById('inbox').style.fontWeight = "normal";
    document.getElementById('inbox').style.fontStyle = "normal";
    document.getElementById('inbox').style.color = "black"


  }

  return (
    <div>
      <Navbar bg="dark" variant='dark'>
        <Container >
          <Navbar.Brand href="#home">TEXT EDITOR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>

      <div>

        {/* current date and time at the top */}
        <div id='date' style={{ textAlign: "right", paddingTop: "5px", fontWeight: "bold", color: "navy", fontSize: "20px" }}>
          {displayDate()}
        </div>


        <div className='textConatiner'>

          <h2 className='my-3' style={{ fontWeight: "bolder" }}>Enter the Text</h2>
          <textarea value={text} onChange={onChangeEvent} id='inbox' placeholder='Write here...'></textarea>
          <br></br>


          {/* ALL BUTTONS  */}
          <div className='btns'>
            <Btn action="Uppercase" func={toUpper} />
            <Btn action="LowerCase" func={toLower} />
            <Btn action="Copy" func={copy} />

            <Btn action="B" func={bold} />
            <Btn action="I" func={italic} />


            <DropdownButton variant="dark" id="dropdown-basic-button" title="Change Input Color" className='mx-1 my-1'>
              <Btn action="Red" func={colorRed} />
              <Btn action="Green" func={colorGreen} />
              <Btn action="Blue" func={colorBlue} />
              <Btn action="Black" func={colorBlack} />
            </DropdownButton>

            <Btn action="Preview" func={prevTxt} />
            <Btn action="Clear" func={clearTxt} />

          </div>
        </div>

        <div className='textSumm my-4' >

          <h2>Text Information</h2>
          <p style={{ color: "blue", fontWeight: "bold" }}>
            {text.split(" ").length} words and {text.length} characters</p>
        </div>

        <div className='textSumm my-4'>
          <div id='prev' style={{ textAlign: "center" }}></div>
          <div id='text'></div>
        </div>
      </div>

    </div>
  );
}

export default App;
