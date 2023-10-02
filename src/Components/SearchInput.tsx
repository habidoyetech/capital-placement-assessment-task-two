import React from 'react';
import { Input } from 'antd';

const SearchInput: React.FC = () => {
  return (
    <>
        <div className='h-full bg-brand-white rounded-lg px-4 flex space-x-0 flex-1'>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13.0303 11.9697C12.7374 11.6768 12.2626 11.6768 11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303L13.0303 11.9697ZM16.9697 18.0303C17.2626 18.3232 17.7374 18.3232 18.0303 18.0303C18.3232 17.7374 18.3232 17.2626 18.0303 16.9697L16.9697 18.0303ZM8.33333 13.4167C5.52589 13.4167 3.25 11.1408 3.25 8.33333H1.75C1.75 11.9692 4.69746 14.9167 8.33333 14.9167V13.4167ZM3.25 8.33333C3.25 5.52589 5.52589 3.25 8.33333 3.25V1.75C4.69746 1.75 1.75 4.69746 1.75 8.33333H3.25ZM8.33333 3.25C11.1408 3.25 13.4167 5.52589 13.4167 8.33333H14.9167C14.9167 4.69746 11.9692 1.75 8.33333 1.75V3.25ZM13.4167 8.33333C13.4167 11.1408 11.1408 13.4167 8.33333 13.4167V14.9167C11.9692 14.9167 14.9167 11.9692 14.9167 8.33333H13.4167ZM11.9697 13.0303L16.9697 18.0303L18.0303 16.9697L13.0303 11.9697L11.9697 13.0303Z" fill="#B0BABF"/>
                </svg>
            </div>
            <Input placeholder="Search by name, edu, exp or #tag" style={{fontSize: '14px', color: '#9AA6AC', fontWeight: '400', lineHeight: '22px', fontFamily: 'Poppins',}} bordered={false} />
        </div>

    </>
  )
}

export default SearchInput