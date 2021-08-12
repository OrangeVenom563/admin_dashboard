import React from "react";

const DropDown = ({dropMenu}) => {
  return (
    <div className="dropdown no-arrow">
      <a
        className="dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
      </a>
      <div
        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
        aria-labelledby="dropdownMenuLink"
      >
        {dropMenu.map(({ head, subHeads }) => {
          return (
            <>
              <div className="dropdown-header">{head}</div>
              {subHeads.map(({ name, link }) =>
                name == "*****" ? (
                  <div className="dropdown-divider" />
                ) : (
                  <a className="dropdown-item" href={link}>
                    {name}
                  </a>
                )
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
