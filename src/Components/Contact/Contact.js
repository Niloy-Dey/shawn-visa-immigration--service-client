import React from 'react';
// import contact from '../../../assets/contact/bg-contact.jpg'
import contact from '../../assets/contact/bg-contact.jpg'
const Contact = () => {
   
    return (
        <div style={{
            background: `url(${contact})`,
            height:'500px',
            marginTop:'100px',
            backgroundSize: 'cover',
            width:"100%",
            backgroundRepeat: 'no-repeat',
        }}
            className='flex justify-center items-center mb-20'>
            
            <div className='flex-1 text-white p-4 mb-10 text-center'>
                <h1 className='font-bold text-2xl  '>Contact</h1>
                <form action="">
                    <input className='my-3 p-3 text-black rounded w-96 ' placeholder=' Your Name' type="text" name=" " id="" /> <br />
                    <input className='my-3 p-3 text-black rounded w-96 ' placeholder=' Your Email' type="text" name=" " id="" /><br />
                    <input className='my-3 p-3 text-black rounded w-96 ' placeholder=' Message' type="text" name=" " id="" /> <br />
                    <button className='w-96 bg-red-600  rounded  text-white p-3 text-xl '>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;