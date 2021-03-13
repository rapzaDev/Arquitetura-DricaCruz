import React, { useCallback, useState } from 'react';

import ScrollToTop from '../../components/ScrollToTop';

import Dropdown from './Dropdown';
import Hero from './Hero';
import Drieli from './Drieli';
import QuemSomos from './QuemSomos';
import Servicos from './Servicos';
import Virtual from './Virtual';
import Navbar from './Navbar';
import Footer from './Footer';

import quemSomosData from './QuemSomos/data';
import servicosData from './Servicos/data';
import virtualData from './Virtual/data';
import drieliData from './Drieli/data';
import footerData from './Footer/data';

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero id="hero" />
      <QuemSomos {...quemSomosData} />
      <Servicos {...servicosData} />
      <Virtual {...virtualData} />
      <Drieli {...drieliData} />
      <Footer {...footerData} />
    </>
  );
};

export default Dashboard;
