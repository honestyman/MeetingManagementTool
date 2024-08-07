import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import {Outlet} from 'react-router-dom';

import TagManage from './TagManage';
import MeetingManage from './Meeting/MeetingManage';


const ChannelPage: React.FC = () => {

  return (
    <DefaultLayout>
      <TagManage id={1}/>
      <div className="flex">
        <Outlet/>
        {/* <MeetingManage/> */}
      </div>
    </DefaultLayout>
  );
};

export default ChannelPage;
