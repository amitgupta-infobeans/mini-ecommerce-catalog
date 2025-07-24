import React, { useEffect, useState } from 'react'
import { getProductList, addNewProduct } from './api'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import Loader from '../Loader'



const ReactQuery = () => {

    const { data: productList, isLoading } = useQuery({
        queryKey: ['productList'],
        queryFn: () => getProductList(),
    })
    const [title, setTitle] = useState("")
    const getQueryClient = useQueryClient()

    const { mutateAsync: handleNewProduct, isPending } = useMutation({
        mutationFn: addNewProduct,
        onSuccess: () => {
            getQueryClient.invalidateQueries(['productList'])
        }
    })

    const handleAddNewProduct = async () => {
        await handleNewProduct(title)
        setTitle("")
    }

    if (isLoading) return <Loader />;

    return (
        <>
            <h1 className='mt-5 underline text-2xl mb-2'>Tanstack Query</h1>
            <div className='p-5 bg-gray-200 shadow-xl md:w-[800px] sm:w-[500px] max-h-[400px]'>
                <div className='flex sm:flex-col md:flex-row items-center justify-center gap-2'>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter description..'
                        className='border p-3 m-1 w-1/2'
                        name='description'
                    />
                    <button onClick={handleAddNewProduct} disabled={title.trim() === ""}
                        className={`p-3 text-white m-1 ${title.trim() === "" || isPending ? 'bg-gray-500 cursor-not-allowed' : 'bg-black'
                            }`}>
                        {isPending ? 'Adding...' : 'Add Product'}
                    </button>

                </div>
            </div>


            {productList && productList.length > 0 && (
                <div className='md:w-[800px] sm:w-[500px] max-h-[400px] p-2 mt-4 bg-gray-500 flex flex-col justify-between overflow-y-auto items-start gap-2'>
                    {productList.map((oneproductList) => (
                        <div
                            key={oneproductList.id}
                            className='flex bg-gray-200 p-2 w-full justify-between items-start mb-2'
                        >
                            <div className='flex flex-col items-start justify-start'>
                                <h3>Title: {oneproductList.name}</h3>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default ReactQuery