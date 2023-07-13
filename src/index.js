import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import Popup from 'react-popup';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/AdminDash/Users/Users";
import AddUser from "./components/AdminDash/AddUser/AddUser";
import Files from "./components/AdminDash/Files/Files";
import MyFiles from "./components/MyFiles/MyFiles";
import Trash from "./components/Trash/Trash";
import Inbox from "./components/AdminDash/inbox/Inbox";
import Message from "./components/AdminDash/inbox/Message";
import FolderFiles from "./components/FolderFiles/FolderFiles";
import Folders from "./components/Folders/Folders";
import Dashboard from './components/Dashboard/Dashboard';
import Home from './Home';
import Profile from './components/Profile/Profile';
import Case from './components/Case';
import LogIn from './components/LogIn/Login';
const router = createBrowserRouter([
  {
    path: "/BAS",
    element: <Home />,
  },
  {
    path: "/BAS/profile",
    element: <Profile />,
  },
  {
    path: "/BAS/login",
    element: <LogIn />,
  },
  {
    path: "/BAS/case",
    element: <Case />,
  },
  {
    path: "/BAS/admin/:id",
    element: <Dashboard />,
    children: [
      {
        path: "all-users",
        element: <Users />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },

      {
        path: "files/:id",
        element: <Files />,
      },

      {
        path: "inbox",
        element: <Inbox />,
      },
      {
        path: "message/:id",
        element: <Message />,
      },
    ],
  },
  {
    path: "/BAS/user/:id",
    element: <Dashboard />,
    children: [
      {
        path: "myfiles",
        element: <MyFiles />,
      },
      {
        path: "folders/folderfiles/:id",
        element: <FolderFiles />,
      },
      {
        path: "folders",
        element: <Folders />,
      },
      {
        path: "trash",
        element: <Trash />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <div className="App">
      <Popup />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
