import "./Card.css";

function Card({ username, course }) {
  return (
    <>
      <h1>Course completed</h1>
      <div className="cardBox">
        <div className="cardUsername">
          <h3>{username}</h3>
        </div>
        <div className="cardsCourse">
          <ul>
            {course.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
