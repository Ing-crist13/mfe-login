import AppRouter from "../routes/index";
import React from "react";

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
};

export default Root;
