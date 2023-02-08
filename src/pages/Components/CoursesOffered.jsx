import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Assest/Style.css";
// import develop from "../Images/Develop.png";
import JS from "../Images/JavaScript.jpg";
import BootStrap from "../Images/bootstrap5.jpeg";
import ReactJS from "../Images/ReactJS.png";
import Selenium from "../Images/Selenium.jpeg";
import Manual from "../Images/Manual_Testing.jpg";
import Cucumber from "../Images/cucumber.png";

function CoursesOffered() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Card style={{ width: "25rem" }} className="card ">
              <Card.Img
                variant="top"
                src={BootStrap}
                className="cardImg center-block d-block mx-auto"
              />
              <Card.Body>
                <Card.Title>BootStrap</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Click To View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "25rem" }} className="card">
              <Card.Img
                variant="top"
                src={JS}
                className="cardImg center-block d-block mx-auto"
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Click To View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "25rem" }} className="card">
              <Card.Img
                variant="top"
                src={ReactJS}
                className="cardImg center-block d-block mx-auto"
              />
              <Card.Body>
                <Card.Title>React JS</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Click To View</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <Card style={{ width: "25rem" }} className="card">
              <Card.Img
                variant="top"
                src={Selenium}
                className="cardImg center-block d-block mx-auto"
              />
              <Card.Body>
                <Card.Title>Selinium</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Click To View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "25rem" }} className="card">
              <Card.Img
                variant="top"
                src={Manual}
                className="cardImg center-block d-block mx-auto"
              />
              <Card.Body>
                <Card.Title>Manual Testing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Click To View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "25rem" }} className="card">
              <Card.Img
                variant="top"
                src={Cucumber}
                className="cardImg center-block d-block mx-auto"
              />
              <Card.Body>
                <Card.Title>Cucumber</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Click To View</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesOffered;
