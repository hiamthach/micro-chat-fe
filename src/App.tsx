import HomePage from './components/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChatServiceClient } from './ChatServiceClientPb';

// eslint-disable-next-line react-refresh/only-export-components
export const client = new ChatServiceClient('http://localhost:8080', null, null);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
