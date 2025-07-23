import React from 'react'
import { useFetch } from '../custom-hook/useFetch'
import { CircularProgress } from "@mui/material"
import { Link } from 'react-router-dom'



const GetData = () => {
    const { loading, data } = useFetch("https://dummyjson.com/posts")

    return <> {(loading) && <CircularProgress sx={{ display: "flex", justifyItems: "center", alignItems: "center", margin: "auto" }} disableShrink />}

        <div className='flex flex-col justify-start items-start md:w-[800px] sm:w-[300px] h-[500px] '>
            <Link className='p-2 m-3 text-blue-500 underline' to="/">Back</Link>
            {(data && data.length > 0) && data.map((oneItem) => {
                return <div key={oneItem.id} className='md:w-600px sm:w-full p-2 m-2 border bg-gray-200 flex justify-between items-center gap-2'>
                    <div className=''>
                        <h3>{oneItem.title}</h3>
                    </div>
                </div>
            })}
        </div>
    </>
}

export default GetData