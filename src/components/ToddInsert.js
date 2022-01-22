// 새로운 일정을 추가하는 컴포넌트. state를 통해 인풋상태관리

import React, { useState, useCallback } from "react";
import { IoAdd } from 'react-icons/io5';

const TodoInsert = () => {
    const [ value, setVlaue ] = useState('');

    const onChange = useCallback(e => {
        setVlaue(e.target.value);
    }, []);

    return(
        <form className="TodoInsert">
            <input 
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}/>
            <button type="submit">
                <IoAdd />
            </button>
        </form>
    );
};

export default TodoInsert;