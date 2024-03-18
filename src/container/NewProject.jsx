import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa6'
import { FcSettings } from 'react-icons/fc'
import SplitPane from 'react-split-pane'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';
import { AnimatePresence, motion } from 'framer-motion';

const NewProject = () => {

  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [output, setOutput] = useState("")
  

  const [isTitle, setisTitle] = useState("")

  useEffect(() =>{
    updateOutput()
  },[html, css, js])

const updateOutput = () =>{
  const combinedOutput = `
  <html>
    <head>
        <style>${css}</style>
    </head>
    <body>
        ${html}
        <script>${js}</script>
    </body>
</html>

  `;

  setOutput(combinedOutput)
}


  return (
    <>
    <div className=' w-screen h-screen flex flex-col items-start justify-start overflow-hidden '>
      {/* alert section */}
      {/*  header section  */}
     <header className='w-full flex itmes-center justify-between px-12 py-4'>
      <div className=' flex itmes-center justify-center gap-6'>
      <Link to={"/home/projects"}>
        <img src={Logo}  className='object-contain  w-32 h-auto  ' />
      </Link>
      <div className='flex flex-col  items-start justify-start'>
        {/* title */}
        <div className='flex items-center justify-center gap-3'>
        <AnimatePresence>
          {isTitle? <>
          <motion.input key={"TitleInput"} type="text" placeholder='Your Title'  value={}/>
          </> : <></>}
        </AnimatePresence>
        </div>
        {/* follow */}
      </div>
      </div>
        {/*  User section */}
     </header>

      {/*coding section  */}
       <div>
          {/* Horizonal */}
          <SplitPane split='horizontal' min={100} maxSize={-100} defaultSize={"50%"}>
          {/* top coding  section */}
          <SplitPane split='vertical' minSize={500}>
            {/* Html Code */}
            <div className='w-full h-full flex flex-col items-start justify-start'>
              <div className=' w-full flex items-center justify-between'>
                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                  <FaHtml5 className='text-lx text-red-500'/>
                  <p className=' text-primaryText font-semibold '>HTML</p>
                </div>
                {/* icons */}
                <div className=' cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings  className='text-xl'/>
                  <FaChevronDown className='text-xl text-primaryText' />

                </div>
              </div>
              <div className=' w-full px-2'>
                <CodeMirror 
                value={html} 
                height="600px" 
                extensions={[javascript({ jsx: true })]}
                theme={("dark")}
                onChange={(value, viewUpdate)=>{
                   setHtml(value)
                }} 
                />
              </div>
            </div>
            <SplitPane split='vertical' minSize={500}>
              {/* css code */}

              <div className='w-full h-full flex flex-col items-start justify-start'>
              <div className=' w-full flex items-center justify-between'>
                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                  <FaCss3 className='text-lx text-sky-500'/>
                  <p className=' text-primaryText font-semibold '>CSS</p>
                </div>
                {/* icons */}
                <div className=' cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings  className='text-xl'/>
                  <FaChevronDown className='text-xl text-primaryText' />

                </div>
              </div>
              <div className=' w-full px-2'>
                <CodeMirror 
                value={css}
                height="600px" 
                extensions={[javascript({ jsx: true })]}
                theme={("dark")}
                onChange={(value, viewUpdate)=>{
                   setCss(value)
                }} 
                />
              </div>
            </div>  
              {/* js code*/}

              <div className='w-full h-full flex flex-col items-start justify-start'>
              <div className=' w-full flex items-center justify-between'>
                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                  <FaJs className='text-lx text-yellow-500'/>
                  <p className=' text-primaryText font-semibold '>JS</p>
                </div>
                {/* icons */}
                <div className=' cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings  className='text-xl'/>
                  <FaChevronDown className='text-xl text-primaryText' />

                </div>
              </div>
              <div className=' w-full px-2'>
                <CodeMirror 
                value={js} 
                height="600px" 
                extensions={[javascript({ jsx: true })]}
                theme={("dark")}
                onChange={(value, viewUpdate)=>{
                   setJs(value)
                }} 
                />
              </div>
            </div>
            </SplitPane>
          </SplitPane>
          {/* bottom result section */}
          <div className='bg-white' style={{overflow: 'hidden', height: '100%' }}>
              <iframe 
              title="Result" 
              srcDoc={output} 
              style={{border: "none", width :"100%", height: "100%"}}
              />
          </div>
          </SplitPane>
       </div>
    </div>
    </>
  )
}

export default NewProject 