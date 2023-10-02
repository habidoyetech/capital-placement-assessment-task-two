import React from 'react';
import SideBar from './Components/SideBar';
import JobStatusSelectGroup from './Components/JobStatusSelectGroup';
import Search from './Components/Search';
import QualifiedTask from './Components/QualifiedTask';
import UserListsInfo from './Components/UserListsInfo';
import UserInfoHead from './Components/UserInfoHead';
import UserInfoLinks from './Components/UserInfoLinks';
import PersonalInfo from './Components/PersonalInfo';
import EducationInfo from './Components/EducationInfo';
import ExperienceInfo from './Components/ExperienceInfo';
import DropDown from './Components/DropDown';
import Resume from './Components/Resume';


function App() {
  

  return (
    <div className="max-h-screen w-full font-poppins overflow-x-hidden">
      <div className='bg-brand-primary h-full w-full flex space-x-2 relative'>
        <SideBar></SideBar>
        <div className=' pl-24 flex h-full w-full space-x-8'>
          <aside className='w-[440px] h-screen fixed left-24 bottom-0 top-0 pt-8'>
            <JobStatusSelectGroup/>
            <div className='w-full mt-2'>
              <Search/>
            </div>
            <div className='w-full my-2 '>
              <QualifiedTask/>
            </div>
            <UserListsInfo/>

          </aside>
          <div className='w-[830px] relative left-[450px] overflow-y-scroll no-scrollbar'>
            <div className='w-full pt-8'>
              <UserInfoHead/>
              <UserInfoLinks/>
              <PersonalInfo/>
              <EducationInfo/>
              <ExperienceInfo/>
              <Resume/>
            </div>

          </div> 
        </div>
        <DropDown/>
      </div>
    </div>
  );
}

export default App;
