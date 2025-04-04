import React from "react";
import { useNavigate } from "react-router-dom";

function HandlePaths(route: string) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    }

    return handleClick;
}

export default HandlePaths;