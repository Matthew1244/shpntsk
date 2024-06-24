import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DriveMain from './components/DriveMain';
import NextList from './components/NextLine';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<HomePage />} /> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route exact path="/" element={<DriveMain />} />
          <Route path="/authenticate" element={<NextList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

