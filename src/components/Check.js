import MyHOC from './MyHOC'

function Check({name}) {
  return (
    <div>{name}</div>
  )
}

export default MyHOC(Check)