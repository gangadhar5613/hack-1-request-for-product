import React from 'react'
import {Link} from 'react-router-dom'
class Hero extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
          <section className='flex flex-col py-2   justify-items-between shadow justify-between'>
                <div className='flex flex-row px-10 py-5 justify-between items-center w-full'>
                    <div className='mx-20'>
                        <h2 className='text-green-800 font-bold text-shadow-sm text-2xl'>Ideathon</h2>
                    </div>
                    <div className=''>
                        <div className='flex flex-row items-center shadow  border-gray-200 py-1 px-2 justify-between'>
                            <div className=' px-2 mx-2 border py-1 border-gray-400 shadow-md '>
                                <i className="far text-md text-blue-500 text-shadow-md fa-bell"></i>
                            </div>
                            <Link>
                                    <div className='flex mx-2  items-end  flex-row'>
                                        <i className="far text-2xl mx-2 fa-user"></i>
                                        <h2 className='text-xl font-bold text-shadow-md'>Gangadhar</h2>
                                    </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='px-20  flex-row justify-center  flex'>

                    <div className=' justify-center '>
                        <div className='bg-blue-500 my-2  shadow-xl   rounded-full'>
                             <input className='w-96 h-8 outline-none px-1 py-1 rounded-l-full' type='text' id='search' name='search'></input>
                             <i className="fas p-1 text-white   top-5 fa-search"></i>
                        </div>
                    </div>
                </div>
          </section>
        )
    }
}




// <section className='w-full py-1 px-20 container mx-auto shadow flex flex-col     h-28'>
// <div className='flex flex-row justify-between'>
//   <div>
//           <h1 className='text-2xl mx-10  text-shadow-lg font-bold '>Product-Hunt</h1>
//   </div>
//   <div className='flex flex-row items-center shadow  border-gray-200 py-1 px-2 justify-between'>
//       <div className=' px-2 mx-2 border py-1 border-gray-400 shadow-md '>
//           <i className="far text-md text-blue-500 text-shadow-md fa-bell"></i>
//       </div>
//       <Link>
//               <div className='flex mx-2  items-end  flex-row'>
//                   <i className="far text-2xl mx-2 fa-user"></i>
//                   <h2 className='text-xl font-bold text-shadow-md'>Gangadhar</h2>
//               </div>
//       </Link>
//   </div>
// </div>
// <div>
// <div className='flex flex-col  justify-between mx-10 '>
//     <div className='flex flex-row -my-5 items-end'>
//           <div className=' flex px-4 flex-row relative top-10 items-center '>
//               <h2 className='text-xl font-bold text-blue-500 underline'>All Products</h2>
//               <h3 className='text-xl font-bold mx-5'>Feed</h3>
//           </div>
//     </div>
//  </div>
// </div>

// </section>

export default Hero