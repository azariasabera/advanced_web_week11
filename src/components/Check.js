import MyHOC from './MyHOC'

function Check({name}) {
  return (
    <>
    Hello {name}!
    <wrappedWithHOC />
    </>

  )
}

const wrappedWithHOC = MyHOC(Check)

export default MyHOC(Check)