import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';

function HtmlEditor(props) {

  function handleChange(editor, data, value) {
    props.setHtml(value); // Pass the updated value to the parent's setHtml function
  }

  return (
    <div className="w-full h-full">
      <CodeMirror
     
        value={props.value}
        onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default HtmlEditor;
