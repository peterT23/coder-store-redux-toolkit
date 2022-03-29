import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropDrillingExercise from "./pages/PropDrillingExercise";
import NotFoundPage from "./pages/NotFoundPage";
import ReduxExercise from "./pages/ReduxExercise";
import PropDrillingFinal from "./pages/PropDrillingFinal";
import ReduxFinal from "./pages/ReduxFinal";
import PublicLayout from "./layout/PublicLayout";
import MThemeProvider from "./theme/MThemProvider";



function App() {
  return (
    <BrowserRouter>
      <MThemeProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<PropDrillingExercise />} />
            <Route path="prop-final" element={<PropDrillingFinal />} />
            <Route path="redux-exercise" element={<ReduxExercise />} />
            <Route path="redux-final" element={<ReduxFinal />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MThemeProvider>
    </BrowserRouter>
  );
}

export default App;
