import { createContext, useState, useCallback } from 'react'
import axios from 'axios'

const BooksContext = createContext()

function Provider({ children }) {

    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    const stableFetchBook = useCallback(
        fetchBooks,
        []
    )

    const deleteBookById = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((books) =>{
            return books.id !== id
        })
        setBooks(updatedBooks)
    }

    const editBookById = async (id, title) =>{
        const response = await axios.put(`http://localhost:3001/books/${id}`, {title})
        console.log(response)
        const updatedBooks = books.map((book) =>{
            if (book.id === id){
                return {...book, ...response.data}
            }
            return book
        })
        setBooks(updatedBooks)
    }

    const createBook = async (title) => {
        const response = await axios.post(
            'http://localhost:3001/books', 
            {title}
            )
        
        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)
        console.log(response)
    }

    const valueToShare = {
        books,
        stableFetchBook,
        deleteBookById,
        editBookById,
        createBook
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider}

export default BooksContext