import { useEffect } from "react";
import { useLocation } from "wouter";
import type { ILoginFormValues } from "../components/login/login.types";

const useIsLoggedIn = () => {
  const [, setLocation] = useLocation();

  const session = localStorage.getItem("userSession");

  useEffect(() => {
    if (session) {
      setLocation("/vendorDetails");
    }
  }, [session, setLocation]);

  const handleLogin = (values: ILoginFormValues) => {
    const userSession = { username: values.username, timestamp: Date.now() };
    localStorage.setItem("userSession", JSON.stringify(userSession));
    setLocation("/vendorDetails");
  };

  return { handleLogin, isLoggedIn: session };
};

export default useIsLoggedIn;
