import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

const PageHome = React.lazy(() => import('./pages/home/PageHome'));

function App() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<PageHome/>}/>
                <Route path="/" element={<PageHome/>}/>
                <Route path="*" element={<PageHome/>}/>
            </Routes>
        </>
    );
}

export default App;
