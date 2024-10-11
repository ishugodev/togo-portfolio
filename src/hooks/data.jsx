import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [data, setData] = useState({});

  async function readData() {
    try {
      const infosResponse = await api.get("/infos");
      const {name, title, description} = infosResponse.data

      setData(prevState => ({
        ...prevState,
        "infos": {
          name,
          title,
          description
        }
      }));
      
      const projectsResponse = await api.get("/projects");
      setData(prevState => ({
        ...prevState,
        "projects": projectsResponse.data
      }));
      
      const stacksResponse = await api.get("/stacks");
      setData(prevState => ({
        ...prevState,
        "stacks": stacksResponse.data
      }));

      const contactsResponse = await api.get("/contacts");
      setData(prevState => ({
        ...prevState,
        "contacts": contactsResponse.data
      }));

      const iconsResponse = await api.get("/icons");
      setData(prevState => ({
        ...prevState,
        "icons": iconsResponse.data
      }));

    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message)
      }
    }
  }

  function showFiles(stack) {
    const { icon_id } = stack;

    const selectedIcon = data.icons?.find(icon => icon.id == icon_id);

    const imageUrl = `${api.defaults.baseURL}/files/${selectedIcon?.svg}`;
    console.log(imageUrl)
    return imageUrl;
  }

  return (
    <DataContext.Provider value={{
      readData,
      showFiles,
      data
    }}> 
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext);

  return context;
}