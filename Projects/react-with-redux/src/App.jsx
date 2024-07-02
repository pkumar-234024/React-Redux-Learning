import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import CounterDisplay from "./component/CounterDisplay";
import Header from "./component/Header";
import Control from "./component/Control";
import { useSelector } from "react-redux";
import PrivacyMessage from "./component/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <CounterDisplay />}

          <Control />
        </div>
      </Container>
    </center>
  );
}

export default App;
