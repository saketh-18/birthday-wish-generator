import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './style.css';
import GeneratedCard from './components/GeneratedCard';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <BrowserRouter basename='birthday-wish-generator'>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/generatedCard' element={<GeneratedCard />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );

  


}
