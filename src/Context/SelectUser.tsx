import React, { useState, createContext, useContext, ReactNode } from 'react';

export interface AuthProps {
  children: ReactNode
}


interface SelectUserType {
    userId: number;
    handleUserChange: (id:number) => void;
}

const selectedUser: SelectUserType ={
    userId: 0,
    handleUserChange: () => {}
}


const UserContext = createContext<SelectUserType >(selectedUser)

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({children, ...props }: AuthProps) {

    const [userId, changeUserId] = useState<number>(0)

    const handleUserChange = (id:number) => {
        changeUserId(id)
        console.log(id, 'ade')
    }

  return (
    <UserContext.Provider  value={{userId, handleUserChange}}>
      {children}
    </UserContext.Provider>
  )
}