import React, { Fragment } from 'react';

// core components
import Hero from '../../components/Layout/Hero';
import HeroBG from '../../assets/img/project_hero.jpg';
import Projects from '../../components/Layout/Projects';
import Footer from '../../components/Layout/Footer';

const ProfilePage: React.FC = ({ ...rest }) => {
  return (
    <Fragment>
      <Hero img={HeroBG} title='My Projects' />
      <Projects title='My Projects'>
        <h1>Hello World</h1>
      </Projects>
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
