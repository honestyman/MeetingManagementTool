import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import AddTag from '../../layout/AddTag';

interface TagManage {
  id: number | undefined;
}
const TagManage: React.FC<TagManage> = ({ id }) => {
  const [modalTag, setModalTag] = useState(false);
  return (
    <div className='w-full px-[5px]'>
      <div className='flex justify-start items-center font-bold h-[60px] my-[3px] px-5 w-full rounded-md bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 shadow'>
        <span className='text-xl'>Channel Name</span>
        <Link
          onClick={()=>setModalTag(true)}
          to="#"
          className="inline-flex items-center md:text-sm mx-5 justify-center rounded-md border border-primary py-1 md:px-2 px-3 text-center font-medium text-primary dark:border-zinc-300 dark:text-zinc-300"
        >
          <IoMdAdd className='mr-1'/>
          タブ管理
        </Link>
      </div>
      <AddTag modalTag = {modalTag} setModalTag={ setModalTag } />
    </div>
  );
};

export default TagManage;
