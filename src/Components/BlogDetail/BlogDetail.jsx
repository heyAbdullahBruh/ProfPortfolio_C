import React from 'react';
import './blogD.css'
import { useParams } from 'react-router';
import blogData from '../../app/blogData';
import { Link } from 'react-router-dom';
const BlogDetail = () => {

    const{blogId}=useParams();

    const detaiBlog= blogData.find(bD=> bD.id ===blogId);
    const{id,uID,image,title,body}=detaiBlog;

    const relateB=blogData.filter(rltb=> rltb.uID===uID).filter(b=> b.id!==id);


    return (
        <div className='detaiBlog'>
            <div className="blogheader">
                <Link to={'/blog'}><button className='wrkBtn'>Close</button></Link>
            </div><hr />
                <div className="detailBSec">
                    <img src={image} alt={id} />
                    <h3>  {title}  </h3>
                    <p> {body}{body}</p>
                </div>
                <h1>Related Blogs...{'>'}</h1>
                <div className="relateB" >
                    {
                        relateB.map((blog)=>{
                            const {title,image,body}=blog;
                            const bodySl=body.slice(1,60);
                            return (
                                <section key={blog.id} className='blogSec' >
                                    <img src={image} alt="all" />
                                    <h3 >{title}</h3>
                                    <p >{bodySl}....<Link to={`/blogDetail/${blog.id}`} className='seeMore'>See Detail </Link></p>
                                    
                                </section>
                            )
                        }  )
                    }
                    </div>
        </div>

    );
};

export default BlogDetail;