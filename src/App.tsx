import React from 'react';
import s from './App.module.css';
import {Users} from "./components/Users/Users";

function App() {
    return (
        <div className={s.appWrapper}>
            <h1>TEST APP</h1>
            <Users/>
        </div>
    );
}

export default App;
