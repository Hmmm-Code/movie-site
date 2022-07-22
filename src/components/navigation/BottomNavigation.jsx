import React from "react";

const BottomNavigation = ({ handleMore }) => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation--button ">
          <div className="navigation-btn-content" onClick={handleMore}>
            load more
          </div>
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;
