import React from 'react';
import './workDetails.css';
import { useParams } from 'react-router';
import { workData } from '../../app/workData';
import { Link } from 'react-router-dom';

const WorkDetails = () => {

    const {workId}=useParams();
    const detail= workData.find(wrk => wrk.id===workId);
    const {thumb,imgs,title,dsc}=detail;
    // console.log(detail);
    return (
        <div className='workDetail'>
           <div className="wrkTop">
           <h3 className='workHdr'> <span>P</span>rojects Details</h3>
           <Link to="/work"><button className='wrkBtn'>Close</button></Link>
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
                            imgs?.map((img,index)=><img src={img} alt={"photo"+index} />)
                        }
                    </div>
                </div>

                <Link to="/contact"><button className='wrkBtn'>Start The Project</button></Link>
            </div>
        </div>
    );
};

export default WorkDetails;