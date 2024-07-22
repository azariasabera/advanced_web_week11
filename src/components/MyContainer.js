import MyList from './MyList';
import {useState} from 'react';

const MyContainer = () => {
   const [items, setItems] = useState([
        { id: 1, text: 'Item 1', clicked: false },
        { id: 2, text: 'Item 2', clicked: false },
   ]);

    const onClick = () => {
        const textarea = document.getElementById('textarea');
        const text = textarea.value;
        const newItems = [...items, { id: items.length + 1, text, clicked: false }];
        setItems(newItems);
        textarea.value = '';
    }

    const updateItem = (id) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                //return { ...item, clicked: !item.clicked };
                return { ...item, clicked: true };
            }
            return item;
        });
        setItems(newItems);
    }
        

  return (
    <div>
        <h1>My Container</h1>
        <textarea id='textarea' placeholder='Add item'></textarea>
        <button onClick={onClick}>Add</button>

        {/* Passing props to MyList component*/}
        <MyList 
            header="Really epic list component"
            items={items}
            updateItem={updateItem}
        />
    </div>
  )
}

export default MyContainer