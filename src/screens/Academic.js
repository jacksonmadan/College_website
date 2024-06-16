import React from 'react';
import Header from '../mycomponent/Header';
import Navbar from '../mycomponent/Navbar';
import myimg from "../assest/img/2.jpg";
import '../mycomponent/Academic.css';
import { MdManageAccounts,MdOutlineSubject ,MdOutlineLibraryBooks } from "react-icons/md";
import { IoTelescope } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Button from '../mycomponent/Button';


export default function Academic() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='academic-container'>
        <div className='left-container'>
          <div className='side-box'>
            <h3><SiGooglescholar /> Scholarship</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mauris ut libero vestibulum, sed fermentum metus hendrerit.</p>
          </div>
          <div className='side-box'>
            <h3><MdOutlineSubject /> Curriculum</h3>
            <p>Nulla facilisi. Duis venenatis vulputate lorem, a tempus felis fringilla sed. Suspendisse vitae feugiat leo.</p>
          </div>
          <div className='side-box'>
            <h3><MdOutlineLibraryBooks /> Subjects offered</h3>
            <p>Proin convallis fermentum orci, sit amet convallis ipsum dictum vel. Nam fringilla justo sit amet velit convallis.</p>
          </div>
        </div>
        <div className='image-container'>
          <img src={myimg} alt="Academic Event" className='academic-image' />
        </div>
        <div className='right-container'>
          <div className='side-box'>
            <h3><MdManageAccounts /> Management</h3>
            <p>Phasellus nec ex ut augue feugiat congue. Etiam dignissim, sapien sit amet fringilla vehicula, odio magna placerat odio.</p>
          </div>
          <div className='side-box'>
            <h3><IoTelescope /> Scope</h3>
            <p>Vestibulum eget quam ac metus hendrerit fermentum. Morbi eu nulla at lacus malesuada ultrices vel in tortor.</p>
          </div>
          <div className='side-box'>
            <h3><FaBuilding /> Infrastructure</h3>
            <p>Curabitur auctor dui vel aliquam commodo. Nam vitae mi nec magna volutpat gravida in a risus.</p>
          </div>
        </div>
      </div>
      <Button/>
    </>
  );
}
