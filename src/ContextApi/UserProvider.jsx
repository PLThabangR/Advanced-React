// import {createContext,useContext,useState} from 'react'

// const Users =["Name","Florence","Age","36","Sex","Female"]
// //Create our new context here:
// const UserContext = createContext();

// export const UserProvider = ({children}) =>{
//     //state to be fetched
//     const [users]= useState(Users)

//     return (
//         //Hook state to the provider
//         <UserContext.Provider value={{users}}>
//             {children}
//         </UserContext.Provider> 
//     )
// }

// export const useUSerListContext = () => useContext(UserContext)
// export default UserProvider