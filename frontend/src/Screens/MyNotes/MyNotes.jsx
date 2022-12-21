import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import notes from "../../notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure?")) {
    }
  };
  return (
    <>
      <MainScreen title="Welcome Back Shahid Ansari">
        <Link to="createnote">
          <Button style={{ marginLeft: "10px", marginBottom: "6px" }} size="lg">
            Create New Note
          </Button>
        </Link>
        {notes.map((note) => (
          <Card>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <h4>
                <Badge variant="success">Category - {note.category}</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">
                  {" "}
                  created on '' date
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </MainScreen>
    </>
  );
};

export default MyNotes;
