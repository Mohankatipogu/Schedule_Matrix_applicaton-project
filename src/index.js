import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Schedule from './features/schedule/schedule';
import ScheduleDetails from './features/schedule/ScheduleDetails';
import ScheduleMaster from './features/schedule/ScheduleMaster';
import Header from './features/schedule/Header';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Schedule></Schedule>,
        children:[
         {
          path:'/',
          element:<ScheduleMaster></ScheduleMaster>
         },
          {
            path:"/cards/:id",
            element:<ScheduleDetails></ScheduleDetails>,
          },
          {
            path:'/Header',
            element:<Header></Header>
          }
        ]
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
       <RouterProvider router={router}/>
   </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
