import React, { useCallback, memo } from 'react'

const ChildOfUseCallBack = (props) => {

    const { counter, onClick } = props;

    console.log("Coutner-value===", counter)
    return (<>

        <div className='flex flex-col items-center justify-center'>
            <input className='text-center' type='text' readOnly value={counter} />
            <button onClick={onClick} className='p-2 border bg-black text-white m-3'>Update Counter</button>
        </div>
    </>
    )
}

export default memo(ChildOfUseCallBack)