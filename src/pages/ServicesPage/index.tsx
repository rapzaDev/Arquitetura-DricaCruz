import React, { useCallback, useState } from 'react';

import ScrollToTop from '../../components/ScrollToTop';

import Dropdown from './Dropdown';
import Navbar from './Navbar';

import ArquiteturaInfo from './ArquiteturaInfo';
import InterioresInfo from './InterioresInfo';
import ConsultoriaInfo from './ConsultoriaInfo';
import RegularizacaoInfo from './RegularizacaoInfo';

import Servicos from './Servicos';
import Footer from './Footer';

import arquiteturaInfoData from './ArquiteturaInfo/data';
import interioresInfoData from './InterioresInfo/data';
import consultoriaInfoData from './ConsultoriaInfo/data';
import regularizacaoInfoData from './RegularizacaoInfo/data';

import servicesData from './Servicos/data';
import footerData from './Footer/data';

const Services: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openArquiteturaInfo, setOpenArquiteturaInfo] = useState(false);
  const [openInterioresInfo, setOpenInterioresInfo] = useState(false);
  const [openConsultoriaInfo, setOpenConsultoriaInfo] = useState(false);
  const [openRegularizacaoInfo, setOpenRegularizacaoInfo] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleArquiteturaInfo = useCallback(() => {
    setOpenArquiteturaInfo(!openArquiteturaInfo);
  }, [openArquiteturaInfo]);

  const toggleInterioresInfo = useCallback(() => {
    setOpenInterioresInfo(!openInterioresInfo);
  }, [openInterioresInfo]);

  const toggleConsultoriaInfo = useCallback(() => {
    setOpenConsultoriaInfo(!openConsultoriaInfo);
  }, [openConsultoriaInfo]);

  const toggleRegularizacaoInfo = useCallback(() => {
    setOpenRegularizacaoInfo(!openRegularizacaoInfo);
  }, [openRegularizacaoInfo]);

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
              {openConsultoriaInfo ? (
                <>
                  <ScrollToTop />
                  <ConsultoriaInfo
                    toggleConsultoriaInfo={toggleConsultoriaInfo}
                    {...consultoriaInfoData}
                  />
                </>
              ) : (
                <>
                  {openRegularizacaoInfo ? (
                    <>
                      <ScrollToTop />
                      <RegularizacaoInfo
                        toggleRegularizacaoInfo={toggleRegularizacaoInfo}
                        {...regularizacaoInfoData}
                      />
                    </>
                  ) : (
                    <>
                      <Navbar toggle={toggle} />
                      <Dropdown isOpen={isOpen} toggle={toggle} />

                      <Servicos
                        toggleInterioresInfo={toggleInterioresInfo}
                        toggleArquiteturaInfo={toggleArquiteturaInfo}
                        toggleConsultoriaInfo={toggleConsultoriaInfo}
                        toggleRegularizacaoInfo={toggleRegularizacaoInfo}
                        {...servicesData}
                      />
                      <Footer {...footerData} />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Services;
