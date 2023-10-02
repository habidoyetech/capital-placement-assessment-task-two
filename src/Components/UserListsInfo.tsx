import React from 'react';
import UserShortInfo from './UserShortInfo';
import { usersData } from '../Users';
import { UserData } from '../models';
import { useUser } from '../Context/SelectUser';

const UserListsInfo: React.FC = () => {

    const {userId, handleUserChange} = useUser()


  return (
    <div className='px-4 py-2 relative w-full bg-white overflow-x-hidden overflow-y-scroll h-[80%] no-scrollbar'>
        <div className='overflow-x-hidden'>
            <div>
                {
                    usersData.map((user:UserData, index) => {
                        return (
                            <>
                                <UserShortInfo key={index} user={user} index={index} onClick={()=> handleUserChange(index)}/>
                            </>
                        )
                    })
                }  
            </div>
        </div>
    </div>
  )
}

export default UserListsInfo