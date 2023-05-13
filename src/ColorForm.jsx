import React, { useState } from 'react';

export default function ColorForm({ addColor }) {
    let [inputVal, setInputVal] = useState('');
    const onSubmitForm = e => {
        e.preventDefault()
        addColor(inputVal)
        setInputVal("")
    }
    return <div className="colorform">
        <form onSubmit={onSubmitForm}>
            <input type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
            />
            <button type='submit'>Submit!</button>
        </form>
    </div>
}