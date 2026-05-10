'use client';

import { useState, useEffect } from 'react';
import Item   from './components/Item';
import Button from './components/Button';

export default function List() {
    const defaultValues = [
        { id: 1, value: 3 },
        { id: 2, value: 2 },
        { id: 3, value: 1 },
    ];

    const [items, setItems] = useState(defaultValues);

    const [items2, setItems2] = useState(defaultValues);

    // componentDidUMount cause 2-nd argument is a []
    useEffect(() => {
        if (typeof window === 'undefined') return; // protection for SSR

        const saved1 = localStorage.getItem('items');
        const saved2 = localStorage.getItem('items2');

        if (saved1) setItems(JSON.parse(saved1));
        if (saved2) setItems2(JSON.parse(saved2));
    }, []);  // dependency

    // Hook useEFFECT: save to the localStorage + console.log ()
    // componentDidUpdate cause 2-nd argument is a [state]
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('items',  JSON.stringify(items));
            localStorage.setItem('items2', JSON.stringify(items2));
        }

        console.log('items changed →', items);
        console.log('items2 changed →', items2);
    }, [items, items2]);  // dependencies

    const handleAdd = (itemsArray, setFn) => {
        const lastId = itemsArray.length > 0
            ? Math.max(...itemsArray.map(i => i.id))
            : 0;

        const newValue = itemsArray[0]?.value + 1 || 1;  // ?. -> optional chaining
        const newItem = { id: lastId + 1, value: newValue };

        setFn([newItem, ...itemsArray]);
    };

    return (
        <>
            <h2>List 1</h2>
            <ul>
                {items.map(item => (
                    // React keys - should be unique
                    <Item key={item.id} num={item.value} />
                ))}
            </ul>

            <h2>List 2</h2>
            <ul>
                {items2.map(item => (
                    <Item key={item.id} num={item.value} />
                ))}
            </ul>

            <div>
                <Button
                    name="Add 1"
                    onClick={() => handleAdd(items, setItems)}
                />
                <Button
                    name="Add 2"
                    onClick={() => handleAdd(items2, setItems2)}
                />
            </div>
        </>
    );
}