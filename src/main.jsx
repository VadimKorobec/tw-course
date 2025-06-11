import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Part2 from "./Part2";
import PaymentForm from "./PaymentForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PaymentForm />
  </StrictMode>
);
