import { UserContextProvider } from "./context/context";
import { ApolloProvider } from '@apollo/client';
import client from "./apollo-client";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Produit from "./pages/Produit";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </UserContextProvider>
    </ApolloProvider>
  );
}

export default App;