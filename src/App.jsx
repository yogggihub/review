import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";
const App = () => {
  const [index, setIndex] = useState(0);
  const { id, image, name, text, job } = reviews[index];
  const checkIndex = (indexNumber) => {
    const reviewLength = reviews.length - 1;
    if (indexNumber < 0) {
      return reviewLength;
    }
    if (indexNumber > reviewLength) {
      return 0;
    }
    return indexNumber;
  };
  const prevPerson = () => {
    setIndex((currentState) => {
      const newIndex = currentState + 1;
      return checkIndex(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((currentState) => {
      const newIndex = currentState - 1;
      return checkIndex(newIndex);
    });
  };
  const randomPerson = () => {
    let num = Math.floor(Math.random() * reviews.length);
    if (num === index) {
      num = index + 1;
    }
    setIndex(checkIndex(num));
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h2 className="author">{name}</h2>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
      <button className="btn btn-hipster" onClick={randomPerson}>
        Random review
      </button>
    </main>
  );
};
export default App;
