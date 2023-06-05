import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={AllMeetupsPage} />
        <Route path="/new-meetup" Component={NewMeetupPage} />
        <Route path="/favorites" Component={FavoritesPage} />
      </Routes>
    </Layout>
  );
}

export default App;
