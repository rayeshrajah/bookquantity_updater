import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/book.css";

export default function Book(props){
    const [getId, setGetId] = useState();
    const [updateQuant, setUpdateQuant] = useState();

    function updateBook() {
        axios({
            method: 'patch',
            url: 'http://localhost:3000/api/book/' + Number(getId),
            data: {
                stock_level: Number(updateQuant)
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    return(
        <div className="book-container">
            <div className="book-information-container">
                <h3 className="book-name">Title</h3>
                <p className="book-id">Id</p>
                <p className="author">Author</p>
                <p className="stock-level">Quantity</p>
                <p className="availability">Availability</p>
                <p className="book-store">Bookstore</p>
            </div>
            {props.bookApi.map((element) => {
                return(
                <div className="book-information-container">
                    <h3 className="book-name">{element.book_name}</h3>
                    <p className="book-id">{element.id}</p>
                    <p className="author">{element.author}</p>
                    <p className="stock-level">{element.stock_level}</p>
                    {element.stock_level === 0 ? <p className="availability">Out of stock</p> : <p className="availability">Available</p>}
                    <p className="book-store">{element.bookstore_name}</p>
                    </div>
                )
            })}
            <div className="update-book-quantity-container">
                <div>
                <label for="choose-by-title">Choose a book by Id:</label>
                <input className="choose-by-title" onChange={(event) => setGetId(event.target.value)}/>
                </div>
                <div>
                <label for="choose-by-title">Choose a quantity:</label>
                <input className="choose-by-title" onChange={(event) => setUpdateQuant(event.target.value)}/>
                </div>
                <button onClick={updateBook}>Update</button>
            </div>
        </div>
    );
}