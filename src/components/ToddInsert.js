// 새로운 일정을 추가하는 컴포넌트. state를 통해 인풋상태관리

import React, { useState, useCallback } from "react";
import { IoAdd } from 'react-icons/io5';

const TodoInsert = ({onInsert}) => {
    const [ value, setVlaue ] = useState('');

    const onChange = useCallback(e => {
        setVlaue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setVlaue('');       // value값 초기화
            // submit 이벤트는 브라우저 새로고침을 진행시키므로 아래 함수 호출
            e.preventDefault();
        },
        [onInsert, value],
    );
    

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
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