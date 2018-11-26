import React from 'react';
import './portfolio.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Experience from '../Experience/Experience';
import { log } from 'handlebars';

const Portfolio = (props) => {
    let { experiences, user } = props;
    let mappedExperience = experiences && experiences.map(exp => {
        return <Experience key={exp.id} {...exp} />
    })
    return ( 
        <section className="portfolio">
            <h1>Experiences</h1>
            {user && <Link to="/experiences/create">Create Experience</Link>}
            {experiences && mappedExperience}
        </section>
     );
}

const mapStateToProps = state => {
    console.log(state);
    let { user } = state.user;
    let { experiences } = state.experience;
    return {
        experiences,
        user
    }
}
 const mapDispatchToProps = {

 }
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);