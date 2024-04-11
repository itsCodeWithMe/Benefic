import * as Imports from './components/Imports';
import {Outlet} from "react-router-dom"
function App() {
  return (
    <>
      <Imports.Header></Imports.Header>
      <Outlet></Outlet>
      <Imports.FooterImg></Imports.FooterImg>
      <Imports.Footer />
      <Imports.PrivacyandTerms></Imports.PrivacyandTerms>
    </>
  );
}

export default App;
