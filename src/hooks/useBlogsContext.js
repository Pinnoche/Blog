import { BlogsContext } from "../context/blogContext";
import { useContext } from "react";

export const useBlogsContext = () => {
    const context = useContext(BlogsContext)

    if(!context) {
        throw Error('useBlogsContext must be used inside a BlogsContextProvider')
    }

    return context;
}