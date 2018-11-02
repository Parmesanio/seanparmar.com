import React from 'react';
import './portfolio.scss';
import { connect } from 'react-redux';
import Experience from '../Experience/Experience';

const Portfolio = (props) => {
    let mappedExperience = props.experience && props.experience.map(exp => {
        return <Experience {...exp} />
    })
    return ( 
        <section className="portfolio">
            Portfolio
            {props.experience && mappedExperience}
        </section>
     );
}

const mapStateToProps = state => {
    console.log(state);
    let { experiences } = state.experience;
    return {
        experiences
    }
}
 const mapDispatchToProps = {

 }
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);