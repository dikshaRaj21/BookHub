import { useEffect, useState } from "react";
import BookCard from "../components/BookCard/BookCard"
import Loader from "../components/Loader/Loader"
import axios from "axios";


const AllBooks = () => {

  const [Data, setData ] = useState();

  useEffect(() =>{
   const fetch = async() =>{
   const response = await axios.get("https://bookheaven-mu3j.onrender.com/api/v1/get-all-books")
   setData(response.data.data)
   }
   fetch();
  }, [])


  return (
    <div className="bg-zinc-900 px-12 py-8 h-auto">
      <h4 className='text-3xl text-yellow-100'>All Books</h4>
       {!Data && (
       <div className="w-full h-screen flex items-center justify-center">
       <Loader />
     </div>
        )}
       <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {Data && Data.map((items, i)=>(
          <div key={i}>
            <BookCard data={items}/>{" "}
          </div>
        ))}
       </div>
    </div>
  )
}

export default AllBooks
