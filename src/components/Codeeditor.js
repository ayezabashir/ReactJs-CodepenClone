import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'

import { Controlled } from 'react-codemirror2'
const Codeeditor = ({ title, language, value, onChange }) => {
    let handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        <div className='container'>
            <div className="title">
                {title}
                <button>O/C</button>
            </div>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
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
