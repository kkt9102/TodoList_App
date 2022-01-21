// 각 항목들에 대한 정보를 보여주는 컴포넌트. todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌

import React from "react";
import {MdRemoveCircleOutline
    , MdCheckBoxOutlineBlank
    , MdCheckBox } from 'react-icons/md';
    
import './Todo.css';

// import './TodoListItem.scss';
const TodoListItem = () => {
    return(
        <div className="TodoListItem">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank />
                <div className="text">할 일</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;