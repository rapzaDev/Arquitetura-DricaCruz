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
  const [openArquiteturaInfo, setOpenArquiteturaInfo] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleArquiteturaInfo = useCallback(() => {
    setOpenArquiteturaInfo(!openArquiteturaInfo);
  }, [openArquiteturaInfo]);

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ArquiteturaInfo
        toggleArquiteturaInfo={toggleArquiteturaInfo}
        openArquiteturaInfo={openArquiteturaInfo}
        {...arquiteturaInfoData}
      />
      <Servicos
        toggleArquiteturaInfo={toggleArquiteturaInfo}
        {...servicesData}
      />
      <Footer openArquiteturaInfo={openArquiteturaInfo} {...footerData} />
    </>
  );
};

export default Services;
