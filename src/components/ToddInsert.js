// 새로운 일정을 추가하는 컴포넌트. state를 통해 인풋상태관리

import React from "react";
import { IoAdd } from 'react-icons/io5';

const TodoInsert = () => {
    return(
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요"/>
            <button type="submit">
                <IoAdd />
            </button>
        </form>
    );
};

export default TodoInsert;