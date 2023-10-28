import Sidenav from "./SideNav";
import { Box, Container } from "@mui/material";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Analytics from "./Analytics";
import Data from "./Data";
import './App.css';
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";


function App() {
  const [logged, setLogged] = useState(0);
  useEffect(() => {
    setLogged(localStorage.getItem('logged'));
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
      />
        <Router>
            <Box sx={{ display: 'flex' }}>
              <Routes>
                  {
                    logged ?
                    (
                      <>
                      <Route path='*' element={<><Sidenav param={setLogged} /> <Analytics /> </>}> </Route>
                      <Route path='/analytics' element={<><Sidenav  param={setLogged} /> <Analytics /> </>}> </Route>
                      <Route path="/data" element={<><Sidenav  param={setLogged} /> <Data /> </>}> </Route>
                      </>
                    ): (
                      <Route path='*' element={<Login param={setLogged} />}> </Route>
                    )
                    
                  }
                
              </Routes>
            </Box>
        </Router>
      <ToastContainer />
    </>
  );
}

export default App;
