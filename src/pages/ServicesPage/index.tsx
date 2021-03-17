import React, { useCallback, useState } from 'react';

import ScrollToTop from '../../components/ScrollToTop';

import Dropdown from './Dropdown';
import Navbar from './Navbar';
import ArquiteturaInfo from './ArquiteturaInfo';
import Servicos from './Servicos';
import Footer from './Footer';

import arquiteturaInfoData from './ArquiteturaInfo/data';
import servicesData from './Servicos/data';
import footerData from './Footer/data';

const Services: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openedService, setOpenedService] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleService = useCallback(() => {
    setOpenedService(!openedService);
  }, [openedService]);

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ArquiteturaInfo
        toggleService={toggleService}
        openedService={openedService}
        {...arquiteturaInfoData}
      />
      <Servicos toggleService={toggleService} {...servicesData} />
      <Footer openedService={openedService} {...footerData} />
    </>
  );
};

export default Services;
