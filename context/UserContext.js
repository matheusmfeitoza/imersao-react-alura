import React from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = React.useState("");

  return (
    <UserContext.Provider value={(userName, setUserName)}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
