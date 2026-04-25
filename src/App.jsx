import { useTranslation } from "react-i18next";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const { t, i18n } = useTranslation();
  return <>
<Header/>
<Content/>
<Footer/>
  </>
}
