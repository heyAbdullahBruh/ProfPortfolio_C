import DetailMsg from '@/Components/Message/detail/detail';
import React from 'react';

const page =async ({params}) => {
    const {mId}=await params;
    return (
        <>
            <DetailMsg id={mId}/>
        </>
    );
};

export default page;