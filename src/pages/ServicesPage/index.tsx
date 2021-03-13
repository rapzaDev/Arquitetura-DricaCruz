import React, { useCallback, useState } from 'react';

import ScrollToTop from '../../components/ScrollToTop';

import Dropdown from './Dropdown';
import Navbar from './Navbar';
import Servicos from './Servicos';
import Footer from './Footer';

import footerData from './Footer/data';
import servicesData from './Servicos/data';

const Services: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <Hero id="hero" /> */}
      <Servicos {...servicesData} />
      {/* <Virtual {...virtualData} /> */}
      {/* <Drieli {...drieliData} /> */}
      <Footer {...footerData} />
    </>
  );
};

export default Services;
