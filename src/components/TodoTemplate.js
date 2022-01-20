// 앱 타이틀(일정관리) children으로 내부 JSX를 props로 받아와 랜더링

import React from "react";
import './Todo.css';

const TodoTemplate = ({ children }) =>{
    return (
        <div className="TodoTemplat">
            <div className="app_title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;