import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import TaskTable from './TaskTable';
import DatePickerStart from '../../../components/Forms/DatePicker/DatePickerStart';
import DatePickerEnd from '../../../components/Forms/DatePicker/DatePickerEnd';
import DatePickerUpdate from '../../../components/Forms/DatePicker/DatePickerUpdate';
import SelectContactName from '../../../components/Forms/SelectGroup/SelectContactName';
import SelectStatus from '../../../components/Forms/SelectGroup/SelectStatus';

const TaskManage: React.FC = () => {
  const [selectId, setSelectId] = useState(1)
  return (
    <div className="flex flex-col xl:h-[800px] md:h-[710px] w-full rounded-md mx-1 overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 shadow-md">
      <div className='w-full flex flex-wrap'>
        <div className='flex items-center px-5 py-5'>
          <label className="mb-3 block text-black dark:text-white mr-5 mt-3">
            タイトル:
          </label>
          <input
            type="text"
            className="rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className='flex items-center px-5 py-5'>
          <label className="mb-3 block text-black dark:text-white mr-5 mt-3">
            期日:
          </label>
          <DatePickerStart />
          <span className='mx-5'>~</span>
          <DatePickerEnd />
        </div>
        <div className='flex items-center px-5 py-5'>
          <label className="mb-3 block text-black dark:text-white mr-5 mt-3">
          トレイ:
          </label>
          <SelectStatus />
        </div>
      </div>

      <div className='w-full flex flex-wrap'>
        <div className='flex items-center px-5 py-5'>
          <label className="mb-3 block text-black dark:text-white mr-5 mt-3">
            作成者:
          </label>
          <input
            type="text"
            className="rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className='flex items-center px-5 py-5'>
          <label className="mb-3 block text-black dark:text-white mr-5 mt-3">
          作成日:
          </label>
          <DatePickerUpdate />
        </div>
        <div className='flex items-center px-5 py-5'>
          <label className="mb-3 block text-black dark:text-white mr-5 mt-3">
          担当者:
          </label>
          <SelectContactName />
        </div>
      </div>
      <div className='w-full flex justify-end px-3'>
        <Link
          to="#"
          className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 mx-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <IoMdAdd className='text-xl mr-2'/>
          タスクを追加
        </Link>
      </div>
      <div className='w-full overflow-y-auto px-3 py-5'>
        <TaskTable/>
      </div>
    </div>
  );
};

export default TaskManage;
