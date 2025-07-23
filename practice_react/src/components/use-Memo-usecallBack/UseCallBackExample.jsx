import React, { useState,useCallback } from 'react'
import ChildOfUseCallBack from './ChildOfUseCallBack'

const UseCallBackExample = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const memoizedCounter1 = useCallback(()=>setCounter1(counter1+1) ,[counter1])
    const memoizedCounter2 = useCallback(()=>setCounter2(counter2+1) ,[counter2])

    return (
        <>
            <div>Counter Example by useCallback</div>
            <ChildOfUseCallBack  counter={counter1} onClick={memoizedCounter1} />
            <ChildOfUseCallBack counter={counter2} onClick={memoizedCounter2} />
        </>
    )
}

export default UseCallBackExample