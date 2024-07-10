import { useState } from 'react';
import {Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DropdownLinks from './DropdownLinks';

import Logo from '../resources/ust-logo.png'

import WebLinks from '../json/links.json'

import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";

const Navbar = () => {

  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className='d-flex align-items-center justify-content-between'>
        <div className="d-flex align-items-center user-select-none">
          <img src={Logo} className="tw-w-14 tw-h-14 me-2" alt="UST Logo" />
          <div> 
            <p className="tw-font-serif tw-uppercase tw-text-sm m-0">university of santo tomas</p>
            <h6 className="tw-font-sans tw-text-xl mb-0 fw-bold -tw-mt-1 tw-text-zinc-100"><span className="tw-text-neutral-800">MyUste</span> Portal</h6>
          </div>
        </div>
        <button 
        className="p-1 d-xl-none rounded-2 tw-text-zinc-50 tw-bg-neutral-800 hover:tw-bg-neutral-700 tw-transition-colors tw-ease-linear"
        onClick={()=>setShowNav(() => !showNav)}
        >
          <IoMenu className='fs-4'/>
        </button>

        <Offcanvas 
          show={showNav} 
          onHide={() => setShowNav(() => !showNav)} 
          placement={'end'}
        >
          <Offcanvas.Header className="p-3 tw-border-b-4 tw-border-zinc-50 align-items-center justify-content-between tw-bg-amber-400">
            <Offcanvas.Title>
              <img src={Logo} alt="UST Logo" className="tw-w-14 tw-h-14" /> 
            </Offcanvas.Title>
            <button 
            className="p-1"
            onClick={()=>setShowNav(() => !showNav)}
            >
              <AiOutlineClose className='fs-3 tw-text-neutral-800 hover:tw-text-neutral-700 tw-transition-colors tw-ease-linear'/>
            </button>
          </Offcanvas.Header>

          <Offcanvas.Body className="d-flex flex-column justify-content-between tw-bg-neutral-800">
            <div>
              {
                WebLinks.map(link => (
                  link.dropdown === false 
                  ? <Link to={link.id === "logout" ? "/" : `#${link.id}`} key={link.id} className={`tw-block fw-medium tw-no-underline ${link.id === "logout" ? "tw-text-amber-400" : "mb-3 tw-text-zinc-50 hover:tw-text-zinc-300"}`}>{link.name}</Link>
                  : <DropdownLinks key={link.id} dropdownLink={link}/>
                ))

              }
            </div>
            <GrAnnounce className="fs-2 tw-text-zinc-50 hover:tw-text-amber-400 -tw-rotate-12 tw-cursor-pointer tw-transition-colors tw-ease-linear tw-delay-100"/>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}



export default Navbar