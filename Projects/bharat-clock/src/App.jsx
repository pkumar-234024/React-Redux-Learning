import AppContent from "./componenets/AppContent";
import AppName from "./componenets/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import DateTimeClock from "./componenets/DateTimeClock";

function App() {
  return (
    <center>
      <AppName />
      <AppContent />
      <DateTimeClock />
    </center>
  );
}
export default App;
