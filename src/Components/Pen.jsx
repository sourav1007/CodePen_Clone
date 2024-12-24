import React, { useState } from 'react';
import { IoMdSettings } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import HtmlEditor from './Editors/HtmlEditor';
import CssEditor from './Editors/CssEditor';
import Js from './Editors/Js';
import Result from './Result';

function Pen() {
    const[num,setNum]=useState(0);
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");


    return (
        <div className="h-full overflow-auto ">
            {/* Toolbar */}
            <div className="w-full flex justify-between items-center pl-7 bg-black p-2">
                <div className="flex gap-1">
                    <button className="bg-gray-500 py-1 px-3 hover:bg-slate-800 text-white text-sm" onClick={()=>{setNum(0)}}>HTML</button>
                    <button className="bg-gray-500 py-1 px-3 hover:bg-slate-800 text-white text-sm" onClick={()=>{setNum(1)}}>CSS</button>
                    <button className="bg-gray-500 py-1 px-3 hover:bg-slate-800 text-white text-sm" onClick={()=>{setNum(2)}}>JS</button>
                    <button className="bg-gray-500 py-1 px-3 lg:hidden hover:bg-slate-800 text-white text-sm" onClick={()=>{setNum(3)}}>Result</button>
                </div>
                <div className="text-white flex gap-1 p-1">
                    <button className='bg-gray-500 py-1 px-3 rounded-[0.2rem] hover:bg-slate-800 text-white text-sm'>Save</button>
                    <IoMdSettings className="bg-gray-500 p-1 text-[1.8rem] rounded-[0.2rem] text-white" />
                    <FaChevronDown className="bg-gray-500 p-1 text-[1.8rem] rounded-[0.2rem] text-white" />
                </div>
            </div>

            {/* Editor and Preview */}
            <div className="flex flex-col">
                {/* Editor Section */}
                <div className="w-full h-full">
                    {num ===0 && <HtmlEditor value={html} setHtml={setHtml}></HtmlEditor>}
                   { num===1 && <CssEditor value={css} setCss={setCss}></CssEditor>}
                  {num===2 && <Js value={js} setJs={setJs}></Js>}
                  {num===3 && <Result html={html} css={css} js={js}></Result>}

                </div>
               <div className='hidden md:block'>
               <Result  html={html} css={css} js={js}></Result>

               </div>
                
                
                {/* Preview Section */}
                
            </div>
        </div>
    );
}

export default Pen;
