import { useState } from 'react'

const MyHOC = (OriginalComponent) => {
    const NewComponent = ({name}) => {
    return (
        <>
            <div className='wrapper'>
                <OriginalComponent {...name} />
            </div>
        </>
    )
    }
  return NewComponent
 /*  return ({name}) => {
    return (
            <div className='wrapper'>
                <OriginalComponent {...name} />
            </div>
    )
} */
};

export default MyHOC