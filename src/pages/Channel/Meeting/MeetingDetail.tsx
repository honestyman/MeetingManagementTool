import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

interface MeetingDetailProps {
  id: number | undefined;
}
const MeetingDetail: React.FC<MeetingDetailProps> = ({ id }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [meetingArrays, setMeetingArrays] = useState<Array<{ value: string }>>([
    { value: 'discuss' }
  ]);

  const meetingTypeItems : Array<{ value: string; label: string }> = [
    {
      value : 'discuss',
      label : '議論'
    },
    {
      value : 'share',
      label : '共有'
    },
    {
      value : 'work',
      label : 'タスク'
    }
  ]

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const createAgenda = (value:String) => {
    setMeetingArrays([...meetingArrays, {value}]);
    setIsDropdownVisible(!isDropdownVisible);
  }
  useEffect(()=>{
    console.log("meetingArray", meetingArrays)
  },[meetingArrays])
  return (
    <div className='flex h-full w-full flex-col overflow-y-hidden'>
      <div className='w-full flex flex-wrap justify-between items-center rounded-md bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 shadow mt-1 xl:px-10 px-5 py-5'>
        <div className='flex'>
          <span>会議実施日時：2024年06月07日</span>
          <span className='mx-2'>15:00～16:00</span>
        </div>
        <div className='flex'>
          <span>アジェンダ記載期日：2024年06月06日</span>
          <span className='mx-2'>18:00まで</span>
        </div>
        <div className='flex'>
          <span className='mr-2'>参加者：</span>
          <span>〇〇、〇〇、〇〇、〇〇、〇〇</span>
        </div>
        <div className='flex'>
          <span className='mr-2'>議事録作成者：</span>
          <span>〇〇</span>
        </div>
      </div>

      <div className='w-full h-[800px] flex justify-between'>
        <div className='xl:w-[75%] md:w-[60%] h-full flex flex-col rounded-md bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 shadow mt-1 px-10'>
          <div className='w-full flex justify-start items-end pt-5'>
            <span className='text-xl font-bold'>
              Meeting1
            </span>
          </div>
          <div className='w-full flex-col justify-start items-end pt-5'>
            <Link
              to="#"
              onClick={toggleDropdown}
              className="inline-flex items-center md:text-sm xl:text-base justify-center rounded-md border border-primary py-2 md:px-2 px-3 text-center font-medium text-white bg-primary hover:bg-opacity-90"
            >
              <IoMdAdd className='mr-2'/>
              アジェンダの種類を選択
            </Link>
            {isDropdownVisible && (
              <div className="mt-2 xl:w-54 md:w-50 rounded-md bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 shadow-lg">
                {
                  meetingTypeItems.map((item, index)=>{
                    return (
                      <Link key={index} to="#" onClick={()=>createAgenda(item.label)} className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-100">{item.label}</Link>
                    );                    
                  })
                }
              </div>
            )}
          </div>
        </div>

        <div className='xl:w-[24.5%] md:w-[39.5%] h-full flex flex-col justify-start items-start rounded-md bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 shadow mt-1 px-10 py-10'>
          <span className='text-md font-bold'>アジェンダ一覧</span>
          <div className='flex flex-col text-sm mt-2'>
            <Link to="" className='mt-1'>来年度のリード獲得施策について</Link>
            <Link to="" className='mt-1'>WEBマーケティング流入数推移</Link>
          </div>
        </div>
      </div>
      
      {/* bg-white duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 */}
    </div>
  );
};

export default MeetingDetail;
