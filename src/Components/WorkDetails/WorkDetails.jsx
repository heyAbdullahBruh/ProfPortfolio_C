"use client;"
import './workDetails.css';
import Link from 'next/link';
import { workData } from '@/db/workData';

const WorkDetails = ({workId}) => {

    const detail= workData.find(wrk => wrk.id===workId);
    const {thumb,imgs,title,dsc}=detail;
    // console.log(detail);
    return (
        <div className='workDetail'>
           <div className="wrkTop">
                <h3 className='workHdr'> <span>P</span>rojects Details</h3>
                <Link href="/work"><button>Close</button></Link>
           </div><hr />
            <div className="workDSec">
                <h3>{title}</h3>
                <div style={{textAlign:'center'}}>
                    <img src={thumb} alt={title} />
                </div>
                <p style={{ whiteSpace: 'pre-line' }}>{dsc}</p>

                <div className="imgGallary">
                    <h3>Image Gallary</h3>
                    <div className="galaImg">
                        {
                            imgs?.map((img,index)=><img src={img} alt={"photo"+index} key={`photo+${index}`} />)
                        }
                    </div>
                </div>

                <Link href="/contact"><button className='wrkBtn'>Start The Project</button></Link>
            </div>
        </div>
    );
};

export default WorkDetails;