import React, { createContext, useState } from 'react';

export const Context = createContext();

export function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  
  return (
    <Context.Provider value={{ posts, setPosts }}>
      {children}
    </Context.Provider>
  )
}