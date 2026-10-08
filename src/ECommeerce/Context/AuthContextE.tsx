import React, {
  createContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


// Create Context
export const AuthContext = createContext({
  user: {
    gmail: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
    phoneNo: '',
    gender: '',
  },

  isLoggedIn: false,
  loading: true,

  login: async () => {},
  logout: async () => {},
});


// Provider
export const AuthProvider = ({children}) => {

  // All user information in one object
  const [user, setUser] = useState({
    gmail: 'unknownPro@gmail.com',
    password: 'Pro@1234',

    firstName: 'Unknown',
    lastName: 'Pro',
    userName: 'Unknown_pro11',
    phoneNo: '1234567891',
    gender: 'Male',
  });


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);


  // Check login when app starts
  useEffect(() => {
    checkLogin();
  }, []);


  const checkLogin = async () => {

    try {

      const savedGmail =
        await AsyncStorage.getItem('gmail');

      const savedPassword =
        await AsyncStorage.getItem('password');


      if (savedGmail && savedPassword) {

        setUser(prev => ({
          ...prev,

          gmail: savedGmail,
          password: savedPassword,
        }));

        setIsLoggedIn(true);
      }

    } catch (error) {

      console.log(
        'Check Login Error:',
        error,
      );

    } finally {

      setLoading(false);

    }
  };


  // Login
  const login = async (email, pass) => {

    try {

      // Save ONLY gmail and password
      await AsyncStorage.setItem(
        'gmail',
        email,
      );

      await AsyncStorage.setItem(
        'password',
        pass,
      );


      // Update user object
      setUser(prev => ({
        ...prev,

        gmail: email,
        password: pass,
      }));


      // User is logged in
      setIsLoggedIn(true);

    } catch (error) {

      console.log(
        'Login Error:',
        error,
      );

      throw error;
    }
  };


  // Logout
  const logout = async () => {

    try {

      // Remove ONLY gmail and password
      await AsyncStorage.removeItem('gmail');

      await AsyncStorage.removeItem('password');


      // Clear only gmail and password
      setUser(prev => ({
        ...prev,

        gmail: '',
        password: '',
      }));


      setIsLoggedIn(false);

    } catch (error) {

      console.log(
        'Logout Error:',
        error,
      );
    }
  };


  return (
    <AuthContext.Provider
      value={{
        user,
       
        isLoggedIn,
        loading,
        setUser,
        login,
        logout,
      }}
    >
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














// import React, {
//   createContext,
//   useEffect,
//   useState,
// } from 'react';

// import AsyncStorage from '@react-native-async-storage/async-storage';


// // CREATE CONTEXT
// export const AuthContext = createContext({
//   user: {
//     gmail: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     userName: '',
//     phoneNo: '',
//     gender: '',
//   },

//   isLoggedIn: false,
//   loading: true,

//   login: async () => {},
//   logout: async () => {},
// });


// // PROVIDER
// export const AuthProvider = ({children}) => {

//   // ALL USER DATA
//   const [user, setUser] = useState({
//     gmail: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     userName: '',
//     phoneNo: '',
//     gender: '',
//   });


//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [loading, setLoading] = useState(true);


//   // CHECK LOGIN
//   useEffect(() => {
//     checkLogin();
//   }, []);


//   const checkLogin = async () => {

//     try {

//       // ONLY GET GMAIL AND PASSWORD
//       const savedGmail =
//         await AsyncStorage.getItem('gmail');

//       const savedPassword =
//         await AsyncStorage.getItem('password');


//       if (savedGmail && savedPassword) {

//         // PUT SAVED GMAIL/PASSWORD
//         // INTO USER OBJECT
//         setUser(prev => ({
//           ...prev,
//           gmail: savedGmail,
//           password: savedPassword,
//         }));

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
//   const login = async (
//     email,
//     pass,
//     firstName,
//     lastName,
//     userName,
//     phoneNo,
//     gender,
//   ) => {

//     try {

//       // ONLY GMAIL AND PASSWORD
//       // ARE SAVED IN ASYNC STORAGE
//       await AsyncStorage.setItem(
//         'gmail',
//         email,
//       );

//       await AsyncStorage.setItem(
//         'password',
//         pass,
//       );


//       // ALL DATA IS STORED IN USER OBJECT
//       setUser({
//         gmail: email,
//         password: pass,
//         firstName: firstName,
//         lastName: lastName,
//         userName: userName,
//         phoneNo: phoneNo,
//         gender: gender,
//       });


//       setIsLoggedIn(true);

//     } catch (error) {

//       console.log(
//         'Login error:',
//         error,
//       );

//       throw error;
//     }
//   };


//   // LOGOUT
//   const logout = async () => {

//     try {

//       // ONLY REMOVE GMAIL/PASSWORD
//       await AsyncStorage.removeItem('gmail');

//       await AsyncStorage.removeItem('password');


//       // CLEAR USER OBJECT
//       setUser({
//         gmail: '',
//         password: '',
//         firstName: '',
//         lastName: '',
//         userName: '',
//         phoneNo: '',
//         gender: '',
//       });


//       setIsLoggedIn(false);

//     } catch (error) {

//       console.log(
//         'Logout error:',
//         error,
//       );
//     }
//   };


//   return (
//     <AuthContext.Provider
//       value={{
//         user,
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
