import React, { useState } from "react";
import Modal from "./Modal";

let Cards = ({ book }) => {
    let [show,setShow]=useState(false)
    let [bookitem,setItem]=useState()
    console.log(book);
    return (
        <>
            {
                book.map((item) => {
                    let thumnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
                    if(thumnail!= undefined && amount!= undefined){
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{ item.volumeInfo.title && item.volumeInfo.title.slice(0,20)+'....'}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                            <Modal show={show} item={bookitem} onClose={setShow}/>
                            </>
                        )                    
                    }


                })
            }
        </>
    )
}
export default Cards