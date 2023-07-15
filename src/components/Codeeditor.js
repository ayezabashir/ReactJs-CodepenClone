import React from 'react'
import { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'

import { Controlled } from 'react-codemirror2'

let Codeeditor = ({ icon, title, language, value, onChange }) => {
    let handleChange = (editor, data, value) => {
        onChange(value);
    }
    let [open, setOpen] = useState(true);
    return (
        <div className={`container ${open ? '' : 'collapsed'}`}>
            <div className="title">
                <div className='title-icon'>
                    {icon} {title}
                </div>
                <button onClick={() => setOpen(open = !open)}>-</button>
            </div>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                className='codemirror'
                options={{
                    lineWrapping: true,
                    mode: language,
                    lint: true,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </div>
    )
}

export default Codeeditor
