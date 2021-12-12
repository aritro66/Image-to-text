import { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import img from "./images/img.jpg";
import arrow from "./images/arrow.jpg";
import textimage from "./images/text.jpg";
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';

import './App.css';

function App() {

  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const inputEl = useRef(null);


  const handleClick =  () => {
    console.log(typeof(inputEl.current.files[0])==="undefined");
    if(typeof(inputEl.current.files[0])==="undefined")
    {
      console.log(1);
      setShowModal(true);
    }
    else
    {
      console.log(2);
      let url = URL.createObjectURL(inputEl.current.files[0]);
    setLoading(true);
    setShowImage(false);
    setText("");
    Tesseract.recognize(
      url, 'eng',
      {
        logger: m => {
          setStatus(m.status);
          setProgress(parseFloat(m.progress) * 100)
        }
      }
    )
      .catch(err => {
        console.error(err);
      })
      .then(result => {
        console.log(result);
        let text = result.data.text
        setText(text);
        setLoading(false);
        setShowImage(true);

      })
      
    }
    
  }

  return (
    <div className="App">
      <main className="App-main">
        <header id="headingstyle">
          <h1 id="heading">Image to Text Converter</h1>
          <div id="process">
            <img src={img} />
            <img src={arrow} />
            <img src={textimage} />
          </div>
        </header>
        <div id="file">
          <h2>Choose File</h2>
          <Alert variant="danger">
            <p><Spinner animation="grow" variant="danger" size="sm" /> Please choose only image file</p>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li" variant="danger">.jpg</ListGroup.Item>
              <ListGroup.Item as="li" variant="danger">.jpeg</ListGroup.Item>
              <ListGroup.Item as="li" variant="danger">.jfif</ListGroup.Item>
              <ListGroup.Item as="li" variant="danger">.pjpeg</ListGroup.Item>
              <ListGroup.Item as="li" variant="danger">.pjp</ListGroup.Item>
              <ListGroup.Item as="li" variant="danger">.png</ListGroup.Item>
              <ListGroup.Item as="li" variant="danger">.svg</ListGroup.Item>
              <ListGroup.Item as="li" variant="danger">.webp</ListGroup.Item>
            </ListGroup>
          </Alert>
          <hr />
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Click to choose</Form.Label>
            <Form.Control type="file" size="lg" ref={inputEl} />
          </Form.Group>
          <Button variant="outline-success" onClick={handleClick}>Convert To Text</Button>
        </div>
        <div id="output">
          <h3>Extracted text</h3>
          <div className="text-box">
            {loading && <><p>{status} </p><ProgressBar striped variant="success" animated now={progress}/></>}
            <pre> {text} </pre>
          </div>
        </div>
        <div id="image-selected">
          {showImage ? <img
            src={URL.createObjectURL(inputEl.current.files[0])} alt="logo" /> : ""}
        </div>
        <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please choose one image file!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      </main>
    </div>
  );
}

export default App
