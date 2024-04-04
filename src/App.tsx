import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { FaqPage } from "./pages/FAQ";
import { FormacaoPage } from "./pages/Formacao";
import { MembrosPage } from "./pages/Membros";
import { ProjetosPage } from "./pages/Projetos";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/training" element={<FormacaoPage />} />
        <Route path="/members" element={<MembrosPage />} />
        <Route path="/projects" element={<ProjetosPage />} />
      </Routes>
    </BrowserRouter>
  );
}