import React from 'react'
import Js from './Editors/Js'

function Result(props) {
    const srcCode = `<html>
        <body>
            ${props.html}
        </body>
        <style>
            ${props.css}
        </style>
        <script>
            ${props.Js}
        </script>
    </html>`
    return (
        <div className=" text-black h-full w-full p-4">
            <iframe 
                srcDoc={srcCode} // Dynamically render the HTML content
                frameBorder="0"
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
            ></iframe>
        </div>
    )
}

export default Result
