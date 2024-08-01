import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

interface AddChannelProps {
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
}

const AddChannel = ({ modalVisible, setModalVisible }: AddChannelProps) => {
  const location = useLocation();
  const { pathname } = location;
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div
      className={`fixed inset-0 flex w-screen h-screen z-9999 flex-col duration-300 dark:bg-boxdark ${modalVisible ? 'block' : 'hidden'}`}
      style={{ backgroundColor: 'rgba(100, 116, 139, 0.7)' }}
    >
      <div className='w-[80%] md:w-1/3 h-[80%] md:h-2/3 rounded-xl border bg-white border-stroke shadow-default dark:border-strokedark dark:bg-boxdark mx-auto my-auto'>
        <div className='w-full flex justify-end px-5 pt-5'>
          <button onClick={() => setModalVisible(false)} className='w-8 h-8 text-black dark:text-white hover:text-primary'><IoMdClose className='w-full h-full' /></button>
        </div>
        <div>
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-bold text-center text-black dark:text-white">
              新規チャンネルを追加する
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
              チャンネル名
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
              参加ユーザー
              </label>

              <div className="relative bg-white dark:bg-form-input">
              <textarea
                rows={6}
                placeholder="Default textarea"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              ></textarea>
              </div>
            </div>
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md bg-meta-3 py-4 px-10 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              作 成
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChannel;
