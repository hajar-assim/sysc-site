import React, { useState } from "react";

const CollapseItem = ({ question, answer }) => {
  const [visible, setVisible] = useState(false);

  const toggleCollapse = () => {
    setVisible(!visible);
  };

  return (
    <div className="faq">
      <div className="container">
        <div className={`question ${visible ? 'open' : 'collapsed'}`} onClick={toggleCollapse}>
          {question}
          <span className={`arrow ${visible ? 'arrow-up' : 'arrow-down'}`} />
        </div>
        <div className={`answer ${visible ? 'open' : 'collapsed'}`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default CollapseItem;
