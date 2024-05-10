import React from 'react'
import { RecoilRoot } from 'recoil'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>  
    <App />
    </RecoilRoot>  
)
