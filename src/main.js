if (module.hot) {
    // 实现热更新
    module.hot.accept();
}
import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
function index (props) {
    return (
        <div>
            1238888
        </div>
    )
}

ReactDOM.render( index(123) , document.getElementById('root'));