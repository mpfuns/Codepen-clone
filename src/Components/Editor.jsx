import React from 'react'
import CodeMirror from '@uiw/react-codemirror';


export default function Editor({ displayName, language}) {
   const [code, setCode] = React.useState('');
  
    return (
    <div className='editor-container'>
     <div className='editor-title'>
     <h1>{displayName}</h1>
      <button>O/C</button>
     </div>
        <CodeMirror
          className='code-mirror-wrapper'
          value={code}
        theme="dracula"
          options={{
            mode:  language,
           
            lineNumbers: true,
            lineWrapping: true,
           lint: true
          }}
          onChange={(editor, change) =>{ 
            setCode(editor.getValue())
          }}
        />
    </div>
  )
}
