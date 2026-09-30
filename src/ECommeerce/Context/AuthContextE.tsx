import React, {
  createContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  gmail: '',
  password: '',
  isLoggedIn: false,
  loading: true,

  login: async (email: string, pass: string) => {},

  logout: async () => {},
});

export const AuthProvider = ({children}: any) => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const savedGmail = await AsyncStorage.getItem('gmail');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedGmail && savedPassword) {
        setGmail(savedGmail);
        setPassword(savedPassword);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log('Check login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, pass: string) => {
    try {
      await AsyncStorage.setItem('gmail', email);
      await AsyncStorage.setItem('password', pass);

      setGmail(email);
      setPassword(pass);
      setIsLoggedIn(true);
    } catch (error) {
      console.log('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('gmail');
      await AsyncStorage.removeItem('password');

      setGmail('');
      setPassword('');
      setIsLoggedIn(false);
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        gmail,
        password,
        isLoggedIn,
        loading,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
















// import React, {
//   createContext,
//   useEffect,
//   useState,
// } from 'react';

// import AsyncStorage from '@react-native-async-storage/async-storage';


// export const AuthContext = createContext(null);


// export const AuthProvider = ({children}) => {

//   const [gmail, setGmail] = useState('');

//   const [password, setPassword] = useState('');

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [loading, setLoading] = useState(true);


//   // CHECK SAVED LOGIN

//   useEffect(() => {

//     checkLogin();

//   }, []);


//   const checkLogin = async () => {

//     try {

//       const savedGmail =
//         await AsyncStorage.getItem('gmail');

//       const savedPassword =
//         await AsyncStorage.getItem('password');


//       if (savedGmail && savedPassword) {

//         setGmail(savedGmail);

//         setPassword(savedPassword);

//         setIsLoggedIn(true);

//       }

//     } catch (error) {

//       console.log(
//         'Check login error:',
//         error,
//       );

//     } finally {

//       setLoading(false);

//     }
//   };


//   // LOGIN

//   const login = async (email, pass) => {

//     try {

//       await AsyncStorage.setItem(
//         'gmail',
//         email,
//       );

//       await AsyncStorage.setItem(
//         'password',
//         pass,
//       );


//       setGmail(email);

//       setPassword(pass);

//       setIsLoggedIn(true);

//     } catch (error) {

//       console.log(
//         'Login error:',
//         error,
//       );

//       //it thrwo erroe to login page
//       throw error;

//     }
//   };


//   // LOGOUT

//   const logout = async () => {

//     try {

//       await AsyncStorage.removeItem(
//         'gmail',
//       );

//       await AsyncStorage.removeItem(
//         'password',
//       );


//       setGmail('');

//       setPassword('');

//       setIsLoggedIn(false);

//     } catch (error) {

//       console.log(
//         'Logout error:',
//         error,
//       );

//     }
//   };


//   // PROVIDER

//   return (

//     <AuthContext.Provider
//       value={{
//         gmail,
//         password,
//         isLoggedIn,
//         loading,
//         login,
//         logout,
//       }}
//     >

//       {children}

//     </AuthContext.Provider>

//   );
// };

















// import React, {
//   createContext,
//   useEffect,
//   useState,
// } from 'react';

// import AsyncStorage from '@react-native-async-storage/async-storage';


// export const AuthContext = createContext(null);


// export const AuthProvider = ({children}) => {

//   const [gmail, setGmail] = useState('');

//   const [password, setPassword] = useState('');

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [loading, setLoading] = useState(true);

 



//   // check save login


//   useEffect(() => {

//     checkLogin();

//   }, []);


//   const checkLogin = async () => {

//     try {

//       const savedGmail =
//         await AsyncStorage.getItem('gmail');

//       const savedPassword =
//         await AsyncStorage.getItem('password');


//       if (savedGmail && savedPassword) {

//         setGmail(savedGmail);

//         setPassword(savedPassword);

//         setIsLoggedIn(true);

//       }

//     } catch (error) {

//       console.log(
//         'Check login error:',
//         error,
//       );

//     } finally {

//       setLoading(false);

//     }
//   };


 
//   // login


//   const login = async (
//     email,
//     pass,
//   ) => {

//     try {

//       await AsyncStorage.setItem(
//         'gmail',
//         email,
//       );

//       await AsyncStorage.setItem(
//         'password',
//         pass,
//       );


//       setGmail(email);

//       setPassword(pass);

//       setIsLoggedIn(true);

//     } catch (error) {

//       console.log(
//         'Login error:',
//         error,
//       );

//     }
//   };


//   // logout


//   const logout = async () => {

//     try {

//       await AsyncStorage.removeItem(
//         'gmail',
//       );

//       await AsyncStorage.removeItem(
//         'password',
//       );


//       setGmail('');

//       setPassword('');

//       setIsLoggedIn(false);

//     } catch (error) {

//       console.log(
//         'Logout error:',
//         error,
//       );

//     }
//   };


//   // provider{isko  hum app.tsx ma use kart ha}
 
//   return (

//     <AuthContext.Provider
//       value={{
//         gmail,
//         password,
//         isLoggedIn,
//         loading,
//         login,
//         logout,
//       }}
//     >

//       {children}

//     </AuthContext.Provider>

//   );
// };