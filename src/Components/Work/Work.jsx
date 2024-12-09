'use client';
import  { useEffect, useState } from 'react';
import './work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { workData } from '@/db/workData';
const Work = () => {

    const [works,setWorks]=useState([]);

     useEffect(() => {
         setWorks(workData);
     }, [])
     

    return (
        <div className='work'>
            <h3 className='workHdr'> <span>M</span>y Works</h3><hr />
                <div className="workCont">
                    {
                        works.map(work => {
                            const {id,title,thumb}=work;
                            return <div className="workSec" key={id}>
                                <img src={thumb} alt={title} />
                                <p>{title}</p>
                                <Link href={`/workDetails/${id}`}>
                                    <button className='wrkBtn'>SEE DETAILS <FontAwesomeIcon icon={faArrowRightLong}/> </button>
                                </Link>
                            </div>
                        })
                    }
                </div>

        </div>
    );
};

export default Work;