import React, { useState } from 'react';
import Header from '../mycomponent/Header';
import Navbar from '../mycomponent/Navbar';
import buttonLabels from '../mycomponent/buttonLabels';
import '../mycomponent/Courses.css'; 
import Button from '../mycomponent/Button';

export default function Courses() {
  const [selectedContent, setSelectedContent] = useState('');

  const handleButtonClick = (content) => {
    switch (content) {
      case 'Btech':
        setSelectedContent('Information about B.Tech: A Bachelor of Technology (B.Tech) is an undergraduate academic degree conferred after the completion of a three or four-year program of studies at an accredited university or accredited university-level institution. The B.Tech degree is awarded to those who successfully complete an engineering program in various fields such as civil, mechanical, electrical, electronics, computer science, and information technology. The curriculum is designed to provide students with a strong foundation in mathematics, science, and engineering principles. The program also emphasizes practical training through laboratory work, projects, and internships to prepare graduates for professional engineering careers.');
        break;
      case 'MBA':
        setSelectedContent('Information about MBA: A Bachelor of Technology (B.Tech) is an undergraduate academic degree conferred after the completion of a three or four-year program of studies at an accredited university or accredited university-level institution. The B.Tech degree is awarded to those who successfully complete an engineering program in various fields such as civil, mechanical, electrical, electronics, computer science, and information technology. The curriculum is designed to provide students with a strong foundation in mathematics, science, and engineering principles. The program also emphasizes practical training through laboratory work, projects, and internships to prepare graduates for professional engineering careers.');
        break;
      case 'BCA':
        setSelectedContent('Information about BCA: A Bachelor of Technology (B.Tech) is an undergraduate academic degree conferred after the completion of a three or four-year program of studies at an accredited university or accredited university-level institution. The B.Tech degree is awarded to those who successfully complete an engineering program in various fields such as civil, mechanical, electrical, electronics, computer science, and information technology. The curriculum is designed to provide students with a strong foundation in mathematics, science, and engineering principles. The program also emphasizes practical training through laboratory work, projects, and internships to prepare graduates for professional engineering careers.');
        break;
      case 'MCA':
        setSelectedContent('Information about MCA: A Bachelor of Technology (B.Tech) is an undergraduate academic degree conferred after the completion of a three or four-year program of studies at an accredited university or accredited university-level institution. The B.Tech degree is awarded to those who successfully complete an engineering program in various fields such as civil, mechanical, electrical, electronics, computer science, and information technology. The curriculum is designed to provide students with a strong foundation in mathematics, science, and engineering principles. The program also emphasizes practical training through laboratory work, projects, and internships to prepare graduates for professional engineering careers.');
        break;
      default:
        setSelectedContent('');
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className='grid-container'>
        <div className='col-4'>
          <div className='box'>
            <ul>
              {buttonLabels.map((button) => (
                <li key={button.id} className='bullet-list-item'>
                  <button className='button' onClick={() => handleButtonClick(button.label)}>
                    {button.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-8'>
          <div className='box'>{selectedContent}</div>
        </div>
      </div>
      <Button/>
    </>
  );
}
