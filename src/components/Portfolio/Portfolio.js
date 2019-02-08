import React from "react";
import "./portfolio.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Experience from "../Experience/Experience";
import { setHovering } from "../../redux/expReducer";

const Portfolio = props => {
  let { experiences, user, isHovering, setHovering } = props;
  let mappedExperience =
    experiences &&
    experiences.map((exp, i) => {
      return (
        <Experience
          key={exp.id}
          {...exp}
          i={i}
          isHovering={isHovering}
          setHovering={setHovering}
        />
      );
    });
  return (
    <section className="portfolio">
      <h1>Experiences</h1>
      <small>(Hover over each one)</small>
      {user && <Link to="/experiences/create">Create Experience</Link>}
      <div className="portfolio-experiences">
        {experiences && mappedExperience}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  console.log(state);
  let { user } = state.user;
  let { experiences, isHovering } = state.experience;
  return {
    experiences,
    isHovering,
    user
  };
};
const mapDispatchToProps = { setHovering };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
