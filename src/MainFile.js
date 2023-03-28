import React ,{useState} from 'react'
import Cards from './Cards'
import axios from 'axios'

function MainFile() {
    let [search,setSearch]=useState("")
    let [BookData, setData]=useState([])
    // let [main,setMain]=useState([])
    let searchBook=()=>{
      {
        console.log("Hello")
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBQaRr5RKdFtOWdUQWbBCWUscEY3OCldyM' + '&maxResults=40')
        .then(resp=>setData(resp.data.items))
        .catch(error=>console.log(error))
      }
    }

  return (

      <>
      <div className='header'>
        <div className='row1'>
            <h1> To Write a historic book entails a lot of work</h1>
        </div>
        <div className='row2'>
            <h2>Find Your Book!</h2>
         <div className='search'>
            <input type='text' placeholder='Find Your Book Here!!' style={{backgroundColor:'blanchedalmond'}} value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            <button style={{margin:10 , padding: 8, backgroundColor:'blanchedalmond'}}onClick={searchBook}>search</button>
         </div>
            <img src='https://raw.githubusercontent.com/Kirti-salunkhe/OpenBook/9ddd9aca63961ddf12d86a75791ccc6b6d9f3516/public/images/bg2.png'/>
         </div>
        </div>
        <div className='container'>
     {
        <Cards book={BookData} />
     }
        </div>
        </>

  )
}

export default MainFile
