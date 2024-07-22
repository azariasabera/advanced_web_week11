//import './MyList.css';
function MyList({ header, items, updateItem }) {

    /*const getClassName = (clicked) => {
        if (clicked) {
            return 'clicked'
        }
    }*/

    const checkClicked = (clicked) => {
        if (clicked) {
            return { textDecoration: 'line-through' }
        }
    }

    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map(item => (
                    <li 
                        key={item.id} 
                        onClick={()=>updateItem(item.id)}
                        style={checkClicked(item.clicked)}
                        /*class={getClassName(item.clicked)}*/
                    >
                        {item.text}
                    </li>
                ))}
            </ol>
        </div>
    )
}

// Alternative way to give className (very easy way)
// className={ item.clicked ? 'clicked' : '' }

// or for style: style={{ textDecoration: item.clicked ? 'line-through' : 'none' }}


export default MyList