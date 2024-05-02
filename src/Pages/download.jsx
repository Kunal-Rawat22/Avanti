import React from 'react';
import bgDownloadImage from '../images/download2.jpg';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

const Download = () => {
    const toolbarSettings = {
        items: ['FontName', 'FontSize']
      };
    
      const fontFamily = {
        items: [
          { text: 'Segoe UI', value: 'Segoe UI' },
          { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
          { text: 'Courier New', value: 'Courier New,Courier,monospace' },
          { text: 'Georgia', value: 'Georgia,serif' },
          { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
          { text: 'Calibri Light', value: 'CalibriLight' }
        ],
        width: '60px',
        default: 'Segoe UI'
      };
    
      const fontSize = {
        items: [
          { text: '8', value: '8pt' },
          { text: '10', value: '10pt' },
          { text: '12', value: '12pt' },
          { text: '14', value: '14pt' },
          { text: '42', value: '42pt' }
        ],
        width: '40px',
        default: '10',
      };
    
    return (
        
        <div className="flex pt-6 p-12 justify-between">
            <div className="w-1/3 relative mx-auto">
                <img
                    className="object-contain mx-auto" 
                    src={bgDownloadImage} 
                    alt="Background Image"
                    layout={"fill"}
                />    
            </div>
            <div className='download-right flex flex-col w-1/3 mx-auto'>
                <h6 className="text-xs md:text-base text-black font-wellingtons font-bold text-centre">Mobile Application Now Available !!!</h6>
                <h4 className="text-xs md:text-base text-black font-open-sauce font-bold">Start Learning Today !!</h4>
                <h1 className="text-xl text-black font-stella font-bold">Download Now !!</h1>
            </div>
        </div>
    );
}

export default Download;
