import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='md:w-3/4 mx-auto text-center my-8'>
           <p className='text-yellow-500 my-4'>---{heading}---</p>
           <h3 className='text-3xl uppercase border-y-4 py-4'>{subheading}</h3> 
        </div>
    );
};

export default SectionTitle;