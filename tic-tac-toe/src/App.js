import "./App.css";
import {Link, Routes, Route} from "react-router-dom"
import Game from "./pages/Game";
import StartPage from "./pages/StartPage";

// 1.Inital leht, kus saab sisestada mängijate nimesid ja nupp millega saab mängu alustada
// 2. Tee mängulaud lihtsa css'ga (x-punane, O-sinine)
// 3. salvesta praegune positsioon local storagesse, kasutades useState'i
// 4. Salvesta kõikide mängude ajalugu kasutades global state useContext()'i
// 5. Kasutades React Router't tee navigatsioon mängulaualt punktitabelile ja tagasi.
// 6. Uut mängu mängides, puhasta ajalugu. Kui samad mängijad on varem mänginud, defineeri eelmine mängija Player1'ks
// tavana alustab järgmist mängu X.
// 7. Tee readme.md fail juhendiga app'i käivitamiseks.

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="game" element={ <Game /> }/>
        <Route path="" element={ <StartPage /> }/>
      </Routes>
      
    </div>
  );
}

export default App;
