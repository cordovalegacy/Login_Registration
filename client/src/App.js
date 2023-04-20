import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import Display from './components/Display';
import { createContext } from 'react';
export const MyContext = createContext()

function App() {

  const [user, setUser] = useState({})
  console.log("Global User State:", user)

  const [userId, setUserId] = useState(null)
  const redirect = useNavigate()

  // useEffect(() => {
  //   if(user !== {}){
  //     setUserId(user._id)
  //   }
  // })

  useEffect(() => {
    if(userId === null){
      redirect('/registration')
    }
    else{
      alert("Welcome to the Display Page")
      console.log("Welcome to the Display Page")
    }
  }, [userId])

  return (
    <MyContext.Provider value={{user, setUser}}>
      <div className="App">
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Display/>} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
