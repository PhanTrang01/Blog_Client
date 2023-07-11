// import '../styles/App.scss';
// import Navigation from './Navigation.js';
// import Content from './Content.js';
// import React, { useRef, useState } from 'react';
// // import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Single from '../pages/Single';
import Write from '../pages/Write';
import React, { useState, useEffect } from 'react';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from 'react-router-dom';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: 'about',
//     element: <div>About</div>,
//   },
// ]);
// const initialValue = '';
// function App() {
//   const [stateVariable, setStateVariable] = useState(initialValue);
//   return (
//     <div className="App">
//       {/* <RouterProvider router={router} /> */}
//       {/* <Navigation />
//       <Content /> */}
//       <RouterProvider router={router} />
//       {/* <BrowserRouter>
//         <RouterProvider
//           router={[
//             {
//               path: '/',
//               element: <Home />,
//             },
//             {
//               path: '/Login',
//               element: <Login />,
//             },
//           ]}
//         />
//       </BrowserRouter> */}
//       fffffff
//     </div>
//   );
// }

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    callApi()
      // .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/auth/register');
    const body = await response.json();
    setResponse(body);
    if (response.status !== 200) throw new Error(body.message);

    return body;
  };

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <p className='App-intro'>
          {response?.map((item) => (
            <p>{item.img}</p>
          ))} 
        </p> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/post/:id' element={<Single />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
