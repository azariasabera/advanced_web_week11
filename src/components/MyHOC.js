import { useState } from 'react'

const MyHOC = (OriginalComponent) => {
    const NewComponent = (props) => {
    return (
        <>
            <div className='wrapper'>
                <OriginalComponent {...props} />
            </div>
        </>
    )
    }
  return NewComponent
}

export default MyHOC