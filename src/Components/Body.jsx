import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Header from './Header'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    },
    
  ])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        // eslint-disable-next-line no-undef
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL:photoURL,
        })
        );
      }
      else {
        // eslint-disable-next-line no-undef
        dispatch(removeUser());
       
      }
    } )
  }, [])


  return (
    <div>
      <RouterProvider router = {appRouter}/>
    
    </div>
  )
}

export default Body