import React, { useState, useEffect, useRef } from 'react'
import { uploadfile } from './services/upload';
import './App.css';


const App = () => {
  const fileinput = useRef()
  const [file, setFile] = useState('')
  const [result, setResult] = useState('')
  const [filename, setFilename] = useState('')


  // &  copy to clipboard functionality _________ START __________
  const [feedback, setFeedback] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(() => {
      setFeedback('Text copied to clipboard!');
    }).catch(err => {
      setFeedback('Failed to copy text.');
      console.error('Failed to copy text: ', err);
    });
  };

  // & copy to clipboard functionality _______END__________

  const images = [
    'https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=600',

  ]


  const fileopen = () => {
    fileinput.current.click()
  }


  useEffect(() => {
    const getimage = async () => {
      if (file) {
        const data = new FormData()
        data.append("name", file.name)
        data.append("file", file)

        const res = await uploadfile(data)
        console.log(res)
        setResult(res.data.path)
        setFilename(res.data.name)

      }
    }
    getimage()
  }, [file])

  return (
    <div className='container'>



      <div className='banner'>
        <img src={images[0]} alt="" />
      </div>
      <div className='wrapper'>
        <h1>FILE SHARING </h1>
        <p>upload the file and get the download link</p>
        <button className='btnhere'
          onClick={fileopen}>upload file</button>
        <input type="file" ref={fileinput} style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />


        <a href={result} target='_blank' download={filename}>{result}</a>


        {result && (
          < >
            <button className='copybtn' variant="text" color="primary" onClick={copyToClipboard}>
              copy link
            </button>
            <p className='clipp'>{feedback}</p>
          </>
        )}
      </div>


    </div>
  )
}

export default App