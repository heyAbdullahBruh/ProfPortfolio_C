'use client';

import { useEffect, useState } from 'react';
import styles from './detail.module.css';
import Link from 'next/link';

const DetailMsg = ({id}) => {

    const [msg,setMsg]=useState({});

    useEffect(()=>{
        fetch(`/api/me/msg/${id}`,{cache:'no-store'}).then((res)=>res.json())
        .then((res)=>{
            setMsg(res.message);
        }).catch((err)=>console.log(err))
    },[id]);

    const {name,mail, subject, message}=msg;

    const deleteMsg =(mId)=>{
        fetch(`/api/me/msg/${mId}`,{method:'DELETE'}).then(res=>res.json())
        .then(()=>location.href = '/me/all/message')
        .catch(err=>alert(err.message));
    };

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.detailsSec}>
                <h3>Details for {name}</h3>
                <p><strong>Email:</strong> {mail}</p>
                {/* <p><strong>Tele ID:</strong> {teleId}</p> */}
                <p><strong>Subject:</strong> {subject}</p>
                <p><strong>Description:</strong> {message}</p>
            </div>
            <div className={styles.detailAct}>
                <button onClick={()=>deleteMsg(id)}>Detele</button>
                <Link href={`/me/all/message/`}><button>Back</button></Link>
            </div>
      </div>
    );
};

export default DetailMsg;