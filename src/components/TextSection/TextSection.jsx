import "../TextSection";

export const TextSection = ({ title, SecondTitle, linkText }) => {
  return (
    <section className="TextSection">
      <div>
        <h1 className="sectionTitle">
          <span>{title}</span>
          {SecondTitle}
        </h1>
        <p className="sectionSubtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos
          minus, rerum, quo tempore autem unde molestias quia sequi voluptate
          temporibus! Iusto nesciunt non debitis?
        </p>
        <p>
          <a href="#" className="sectionLink">
            {linkText}
          </a>
        </p>
      </div>
    </section>
  );
};
