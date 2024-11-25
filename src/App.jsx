import React from 'react';
import ButtonComponent from './Components/ButtonComponent';
import ImageComponent from './Components/ImageComponent';

function App() {
    return (
        <div>
            <h1>Test ButtonComponent</h1>
            <ButtonComponent text="Click Me!" />
            <ImageComponent src="https://images.unsplash.com/photo-1518469164615-97026679ea59?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder Image" />
        </div>
    );
}

export default App;
