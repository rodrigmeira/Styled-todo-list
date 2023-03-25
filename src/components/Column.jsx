import { useState, useEffect, useRef } from "react";

function Column({ title }) {
  const [valueText, setValueText] = useState("");
  const [addCardClass, setaddCardClass] = useState("none");
  const textareaRef = useRef(null);
  const [cardList, setCardList] = useState([]);

  function handleChangeTextArea(event) {
    setValueText(event.target.value);
  }

  function addCard() {
    if (valueText === "") return;
    setCardList([...cardList, { id: cardList.length + 1, text: valueText }]);
    setaddCardClass("none");
    setValueText("");
  }

  function cancel() {
    setaddCardClass("none");
    setValueText("");
  }

  function showAddCardWrapper() {
    setaddCardClass("block");
  }

  function handleDeleteCard(id) {
    const newCardList = cardList.filter((card) => card.id !== id);
    setCardList(newCardList);
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [valueText]);

  return (
    <div className="column">
      <div className="background"></div>
      <h3>{title}</h3>

      <button className="add-card" onClick={showAddCardWrapper}>
        Click to add a card
      </button>

      <div className="add-card-wrapper" style={{ display: addCardClass }}>
        <textarea
          ref={textareaRef}
          value={valueText}
          onChange={handleChangeTextArea}
        ></textarea>
        <div className="button-wrapper">
          <button className="add-button" onClick={addCard}>
            Add Card
          </button>
          <button className="cancel-button" onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>

      <div className="card-list">
        {cardList.map((card) => (
          <div key={card.id} className="card">
            <p>{card.text}</p>
            <span onClick={() => handleDeleteCard(card.id)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;