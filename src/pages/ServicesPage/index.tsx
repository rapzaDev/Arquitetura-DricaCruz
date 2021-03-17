import React, { useCallback, useState } from 'react';

import ScrollToTop from '../../components/ScrollToTop';

import Dropdown from './Dropdown';
import Navbar from './Navbar';
import ArquiteturaInfo from './ArquiteturaInfo';
import InterioresInfo from './InterioresInfo';
import Servicos from './Servicos';
import Footer from './Footer';

import arquiteturaInfoData from './ArquiteturaInfo/data';
import interioresInfoData from './InterioresInfo/data';
import servicesData from './Servicos/data';
import footerData from './Footer/data';

const Services: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openArquiteturaInfo, setOpenArquiteturaInfo] = useState(false);
  const [openInterioresInfo, setOpenInterioresInfo] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleArquiteturaInfo = useCallback(() => {
    setOpenArquiteturaInfo(!openArquiteturaInfo);
  }, [openArquiteturaInfo]);

  const toggleInterioresInfo = useCallback(() => {
    setOpenInterioresInfo(!openInterioresInfo);
  }, [openInterioresInfo]);

  return (
    <>
      <ScrollToTop />
      {openArquiteturaInfo ? (
        <>
          <ScrollToTop />
          <ArquiteturaInfo
            toggleArquiteturaInfo={toggleArquiteturaInfo}
            {...arquiteturaInfoData}
          />
        </>
      ) : (
        <>
          {openInterioresInfo ? (
            <>
              <ScrollToTop />
              <InterioresInfo
                toggleInterioresInfo={toggleInterioresInfo}
                {...interioresInfoData}
              />
            </>
          ) : (
            <>
              <Navbar toggle={toggle} />
              <Dropdown isOpen={isOpen} toggle={toggle} />

              <Servicos
                toggleInterioresInfo={toggleInterioresInfo}
                toggleArquiteturaInfo={toggleArquiteturaInfo}
                {...servicesData}
              />
              <Footer {...footerData} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Services;
