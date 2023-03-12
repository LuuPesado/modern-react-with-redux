import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// function App() {
//    return <h1>Hi There!</h1>;
// }

function App() {
   return (
     <div className="wrapper">
       <textarea
         readOnly
         maxLength={3}
         spellCheck
         style={{backgroundColor: "gray"}}
       />
     </div>
   );   
 }
 

root.render( <App/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
