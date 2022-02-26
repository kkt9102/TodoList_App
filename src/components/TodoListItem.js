// 각 항목들에 대한 정보를 보여주는 컴포넌트. todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌

import React from "react";
import {MdRemoveCircleOutline
    , MdCheckBoxOutlineBlank
    , MdCheckBox } from 'react-icons/md';
import cn from 'classnames';    
import './Todo.css';

// import './TodoListItem.scss';
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id,text,checked } = todo;
    return(
        <div className="TodoListItem">
            <div className={cn(`checkbox`, { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                {/* <MdCheckBoxOutlineBlank /> */}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;