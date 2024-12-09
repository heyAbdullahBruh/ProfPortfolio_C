"use client";

import Link from 'next/link';
import './blogD.css'
import blogData from '@/db/blogData';

const BlogDetail = ({blogId}) => {


    const detaiBlog= blogData.find(bD=> bD.id ===blogId);
    const{id,uID,image,title,body}=detaiBlog;

    const relateB=blogData.filter(rltb=> rltb.uID===uID).filter(b=> b.id!==id);


    return (
        <div className='detaiBlog'>
            <div className="blogDheader">
                <Link href={'/blog'}><button>Close</button></Link>
            </div><hr />
                <div className="detailBSec">
                    <img src={image} alt={id} />
                    <h3>  {title}  </h3>
                    <p> {body}</p>
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
                                    <p >{bodySl}....<Link href={`/blogDetail/${blog.id}`} className='seeMore'>See Detail </Link></p>
                                    
                                </section>
                            )
                        }  )
                    }
                    </div>
        </div>

    );
};

export default BlogDetail;