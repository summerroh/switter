import { useEffect, useState } from "react";
import Home from "routes/Home";
import AppRouter from "components/Router";
import { AuthService } from "myFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.currentUser);

  useEffect(() => {
    onAuthStateChanged((AuthService, user) => console.log(user));
  }, []);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Switter </footer>
    </>
  );
}

export default App;
