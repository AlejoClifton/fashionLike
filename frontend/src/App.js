import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginContainer from './pages/login/LoginContainer';
import RegisterContainer from './pages/register/RegisterContainer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginContainer />} />
                    <Route path="/register" element={<RegisterContainer />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
