import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';

import { Modal, TextBox } from '@/components/UI';
import { FormProfile } from '@/components/Form';
import { useAppDispatch } from '@/hooks/useRedux';
import { UserTypes } from '@/lib/types';
import { asyncUpdateUser } from '@/store/auth/action';

const ProfileCard: React.FC<{ user: UserTypes }> = ({ user }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const submitHandler = async (uid: string, data: UserTypes) => {
    const res = await dispatch(asyncUpdateUser(uid, data));
    if (res.error) {
      return;
    }
    setShowModal(false);
  };

  return (
    <div className="px-2">
      <div className="flex flex-row items-center justify-between">
        <h2 className="mt-5 font-semibold text-primary pb-3">Profile</h2>
        <AiOutlineEdit
          id="EditProfile"
          size={20}
          className="text-text cursor-pointer hover:text-primary"
          onClick={() => setShowModal(true)}
        />
        <Tooltip
          className="!bg-primary text-white"
          anchorId="EditProfile"
          content="Edit profile"
        />
      </div>
      <TextBox title="Name" value={user.name} />
      <TextBox title="Email" value={user.email} />
      <TextBox title="Phone" value={user.phone || '-'} />
      <TextBox title="Address" value={user.address || '-'} />
      <Modal
        title="Profile"
        isShow={showModal}
        onClose={() => setShowModal((prev) => !prev)}
        content={<FormProfile submitHandler={submitHandler} />}
      />
    </div>
  );
};

export default ProfileCard;
