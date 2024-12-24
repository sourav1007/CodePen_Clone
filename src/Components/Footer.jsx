import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {
  return (
    <div ref={props.footerRef}  >
      <footer className="footer max-[739px]:leading-3  max-[739px]:p-3 gap-y-3 bg-black text-base-content px-16 py-5 flex flex-wrap justify-between ">
        <nav>
          <h6 className="footer-title ">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form className='max-[739px]:leading-3 max-[739px]:mt-3 mb-0'>
          <h6 className="footer-title  max-[739px]:m-0">Newsletter</h6>
          <fieldset className="form-control  w-80">
            <label className="label  max-[739px]:p-1">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join max-[739px]:w-[70%]  max-[739px]:p-0   ">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered max-[739px]:text-xs max-[739px]:w-[100%] max-[739px]:py-0 px-2   join-item " />
              <button className="font-semibold bg-yellow-400 max-[739px]:text-xs join-item max-[739px]:p-0 px-2 text-black max-[739px]:px-2">Subscribe</button>
            </div>
           
           
          </fieldset>
        </form>
        <Link to="/">
        <div>
              <svg className=' max-[739px]:w-20 w-40 cursor-pointer' fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" viewBox="0 0 138 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
            </div>
        </Link>
       
      </footer>
    </div>
  )
}

export default Footer
