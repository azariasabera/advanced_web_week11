import { useState } from 'react'

const MyHOC = (OriginalComponent) => {
    /*const NewComponent = (props) => {
    return (
        <>
            <div className='wrapper'>
                <OriginalComponent {...props} />
            </div>
        </>
    )
    }
  return NewComponent*/
  return (props) => {
    return (
            <div className='wrapper'>
                <OriginalComponent {...props} />
            </div>
    )
}
};

export default MyHOC