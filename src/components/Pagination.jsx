import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

   const {page, handlePageChange, totalPages} = useContext(AppContext); 

  return (
  <div className='w-full border-2 bg-white fixed bottom-0'>
    <div className=' border-2 flex justify-between w-11/12 max-w-[670px] my-2 mx-auto'>
      
      <div className='flex gap-x-2'> 
        
        { page > 1 &&
            (<button 
            className='rounded-md border-2 px-4 py-1'
            onClick={() => handlePageChange(page-1)}>
                Previous
            </button>)
        }

        { page < totalPages && 
                (<button 
                className='rounded-md border-2 px-4 py-1'
                onClick={() =>handlePageChange(page+1) }>
                Next
            </button>)
        }

      </div>
       
        <p className='font-bold text-sm px-4 py-1'>
            Page {page} of {totalPages}
        </p>
    </div>
  </div>
  )
}

export default Pagination
