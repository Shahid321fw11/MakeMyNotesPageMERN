import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";

const MyNotes = () => {
  return (
    <>
      <MainScreen title="Welcome Back Shahid Ansari">
        <Link to="createnote">
          <Button style={{ marginLeft: "10px", marginBottom: "6px" }} size="lg">
            Create New Note
          </Button>
        </Link>
      </MainScreen>
    </>
  );
};

export default MyNotes;
