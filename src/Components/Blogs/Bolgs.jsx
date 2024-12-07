import React, { useEffect, useState } from 'react';
import './blogs.css';
import blogData from '../../app/blogData';
import { Link } from 'react-router-dom';
const Bolgs = () => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        setBlogs(blogData);
    },[])
//   let body ='lorem dsgfn jzjgi ojo ijifoj gioji odjfg nvdfijgiffd'
//     const bodySl=body.slice(1,50);

    const travel =blogs.filter(trav=> trav.uID ==='trv23');
    const motiv =blogs.filter(motiv=> motiv.uID ==='motiv11');
    const art =blogs.filter(art=> art.uID ==='art31');
    const code =blogs.filter(art=> art.uID ==='code11');

    const handleAll=()=>{
        document.querySelector(".all").style.display='grid';
        document.querySelector(".travel").style.display='none';
        document.querySelector(".motiv").style.display='none';
        document.querySelector(".art").style.display='none';
        document.querySelector(".code").style.display='none';
    };
    
    const handleTravel=()=>{
        document.querySelector(".all").style.display='none';
        document.querySelector(".travel").style.display='grid';
        document.querySelector(".motiv").style.display='none';
        document.querySelector(".art").style.display='none';
        document.querySelector(".code").style.display='none';
    };

     const handleMotiv=()=>{
        document.querySelector(".all").style.display='none';
        document.querySelector(".motiv").style.display='grid';
        document.querySelector(".travel").style.display='none';
        document.querySelector(".art").style.display='none';
        document.querySelector(".code").style.display='none';
    };

     const handleArt=()=>{
        document.querySelector(".all").style.display='none';
        document.querySelector(".art").style.display='grid';
        document.querySelector(".travel").style.display='none';
        document.querySelector(".motiv").style.display='none';
        document.querySelector(".code").style.display='none';
    };

    const handleCoding=()=>{
        document.querySelector(".all").style.display='none';
        document.querySelector(".art").style.display='none';
        document.querySelector(".travel").style.display='none';
        document.querySelector(".motiv").style.display='none';
        document.querySelector(".code").style.display='grid';
    };
    return (
        <div className='blog'>
            
            <div className="blogheader">
                 <h3 className='blogHdr'> <span>O</span>ur Blogs</h3>
                <div className="blogNav">
                    <button onClick={handleAll}>All</button>
                    <button onClick={handleCoding}>Coding</button>
                    <button onClick={handleTravel}>Travel</button>
                    <button onClick={handleMotiv}>Motivational </button>
                    <button onClick={handleArt}>Art</button>
                </div>
            </div><hr />

            <div className="blogCont">

                <div className="all">
                    {
                        blogs?.map((blog)=>{
                            const {title,image,body}=blog;
                            const bodySl=body.slice(1,60);
                            return (
                                <section key={blog.id} className='blogSec' >
                                    <img src={image} alt="all" />
                                    <h3 >{title}</h3>
                                    <p >{bodySl}....<Link to={`/blogDetail/${blog.id}`} className='seeMore'>See Detail </Link></p>
                                    
                                </section>
                            )
                        } )
                    }
                    </div>

                    <div className="code" >
                    {
                        code?.map((blog)=>{
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

                    <div className="travel" >
                    {
                        travel?.map((blog)=>{
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

                    <div className="motiv">
                    {
                        motiv?.map((blog)=>{
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

                    <div className="art">
                    {
                        art?.map((blog)=>{
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
        </div>
    );
};

export default Bolgs;