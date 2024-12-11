"use client";

import { useEffect, useState } from "react";
import styles from './msg.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


const Message = () => {

    const [msg,setMsg]=useState([]);

    useEffect(()=>{
        fetch('/api/me/msg',{cache:'no-store'}).then((res)=>res.json())
        .then((res)=>{
            setMsg(res.messages);
        }).catch((err)=>console.log(err))
    },[]);

// console.log(msg);
    return (
        <section className={styles.msgCont}>
            <table className={styles.msgTable}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Telegram</th>
                    <th>Subject</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                {msg?.map((row) => (
                    <tr key={row._id}>
                        <td>{row.name?.slice(0,3)}..</td>
                        <td><Link href={`mailto:${row.mail}`} style={{textDecoration:'none',color:'white'}}>{row.mail?.slice(0,15)}..</Link></td>
                        <td style={{textAlign:'center'}}>
                            {
                                row.teleId?.length > 1 ? <Link href={`https://t.me/${row.teleId}`}style={{color:'white',fontSize:'2rem'}}><FontAwesomeIcon icon={faTelegram}/></Link> :
                                <p>none</p>
                            }
                        </td>
                        <td>{row.subject?.slice(0,8)}..</td>
                        <td>
                            <Link href={`/me/all/message/${row._id}`} style={{textDecoration:'none',fontSize:'2rem'}}>👁️</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};

export default Message;