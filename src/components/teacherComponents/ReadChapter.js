import React ,{useState,useEffect} from 'react'
import { getChapter} from "../../services/teacher.service";
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

function ReadChapter() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
    // for onchange event
    const [pdfFile, setPdfFile]=useState(null);
  
    // for submit event
    const [viewPdf, setViewPdf]=useState(null);
  


    useEffect(() => {
        let idCh="60929d4074f9de5fe0c9c01a";
    
        getChapter(idCh)
          .then((response) => {   
            console.log(response.response)
            let reader = new FileReader();
            reader.readAsDataURL(response.response.chapterFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
            }

            setViewPdf(pdfFile)





          })
          .catch((error) => {
            console.log(error);
          });
    
    
    
      }, []);
    
      
  
    
    return (
        <div>
              <h4>View PDF</h4>
      <div className='pdf-container'>
        {/* show pdf conditionally (if we have one)  */}
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf&&<>No pdf file selected</>}
      </div>
        </div>
    )
}

export default ReadChapter







