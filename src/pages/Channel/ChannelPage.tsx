import React from 'react';
import {BrowserRouter as Outlet} from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import CheckboxAllSheet from '../../components/Checkboxes/CheckboxAllSheet';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { RiDeleteBin5Line } from "react-icons/ri";
import CheckboxOneSheet from '../../components/Checkboxes/CheckboxOneSheet';
import MeetingDetail from './Meeting/MeetingDetail';
import TagManage from './TagManage';

const ChannelPage: React.FC = () => {
  return (
    <DefaultLayout>
      <TagManage id={1}/>
      <div className="flex">
        <div className="flex flex-col xl:h-[800px] md:h-[710px] w-72.5 rounded-md mx-1 overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 shadow-md">
          <div className='flex flex-wrap justify-between items-center px-3 py-5'>
            <div className='flex items-center'>
              <CheckboxAllSheet/>
              <Link
                to="#"
                className="inline-flex items-center md:text-sm xl:text-base justify-center rounded-md border border-primary py-2 md:px-2 px-3 text-center font-medium text-white bg-primary hover:bg-opacity-90"
              >
                <IoMdAdd className='mr-2'/>
                会議を作成
              </Link>
            </div>
            <Link
              to="#"
            >
              <RiDeleteBin5Line className='w-5 h-5' />
            </Link>
          </div>
          <div className='flex justify-start items-center px-3 hover:bg-boxdark mb-2 hover:text-white duration-300 hover:rounded'>
            <CheckboxOneSheet/>
            <Link to="" className='flex flex-col items-start'>
              <p>2024年07月08日</p>
              <p className='font-bold'>Meeting1</p>
            </Link>
          </div>
        </div>
        <div className="flex xl:h-[800px] md:h-[710px] md:w-full w-50 mx-1 flex-col">
          <MeetingDetail id={1}/>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ChannelPage;
