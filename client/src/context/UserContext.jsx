import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      try {
        const parseData = JSON.parse(data);
        // Chỉ cập nhật nếu parseData có user và token
        if (parseData?.user && parseData?.token) {
          setAuth({
            ...auth,
            user: parseData.user,
            token: parseData.token,
          });
        }
      } catch (error) {
        console.error("Error parsing auth data from localStorage:", error);
        // Xóa dữ liệu lỗi từ localStorage nếu cần
        localStorage.removeItem("auth");
      }
    }
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };