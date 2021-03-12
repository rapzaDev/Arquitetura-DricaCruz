import React, { useCallback, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import Hero from '../../components/Hero';
import Drieli from '../../components/Drieli';
import QuemSomos from '../../components/QuemSomos';
import Servicos from '../../components/Servicos';
import Virtual from '../../components/Virtual';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import quemSomosData from '../../components/QuemSomos/data';
import servicosData from '../../components/Servicos/data';
import virtualData from '../../components/Virtual/data';
import drieliData from '../../components/Drieli/data';
import footerData from '../../components/Footer/data';

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
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
