import React from "react";

function SupportSection({
  id,
  icon,
  title,
  option1,
  option2,
  option3,
}) {
  return (
    <div className="accordion-item mb-3">

      <h2 className="accordion-header">

        <button
          className="accordion-button collapsed fs-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
        >

          <span className="me-3">{icon}</span>

          {title}

        </button>

      </h2>

      <div
        id={id}
        className="accordion-collapse collapse"
      >

        <div className="accordion-body">

          <ul>

            <li>
              <a href="" style={{ textDecoration: "none" }}>
                {option1}
              </a>
            </li>

            <li>
              <a href="" style={{ textDecoration: "none" }}>
                {option2}
              </a>
            </li>

            <li>
              <a href="" style={{ textDecoration: "none" }}>
                {option3}
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>
  );
}

export default SupportSection;