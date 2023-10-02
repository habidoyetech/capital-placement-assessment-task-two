import React from 'react';
import SearchInput from './SearchInput';
import Filter from './Filter';

const Search: React.FC = () => {
  return (
    <>
        <div className='w-full h-12 flex space-x-2'>
            <SearchInput/>
            <Filter/>
        </div>
        
    </>
  )
}

export default Search