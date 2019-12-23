import React, { Fragment } from 'react';

// Assests
import HeroBG from '../../assets/img/project_hero.jpg';

// Public Components
import Hero from '../../components/Layout/Hero';
import Projects from '../../components/Layout/Projects';
import Footer from '../../components/Layout/Footer';

// Page Specific Compnents
import DevToolsBar from './DevToolsBar';

const devTools = [
  'html',
  'css',
  'javascript',
  'typescript',
  'react',
  'vuejs',
  'sass',
  'nodejs',
  'mysql',
  'mongodb',
  'sequelize',
  'redis',
  'csharp',
  'python'
];

const ProfilePage: React.FC = ({ ...rest }) => {
  return (
    <Fragment>
      <Hero img={HeroBG} title='My Projects' />
      <DevToolsBar devTools={devTools} />

      <Projects title='My Projects'></Projects>
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
