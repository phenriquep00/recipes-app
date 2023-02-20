import ReactLoading from 'react-loading';

export function Loading() {
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-zinc-300 transition-all ease-in-out'>
           <ReactLoading type='spin' width={50} height={200} className='text-gray-600'/> 
        </div>
        
    )
}