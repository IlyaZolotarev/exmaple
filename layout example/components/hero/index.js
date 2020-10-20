import React from 'react';
import './styles.scss';
import { withNamespaces } from 'react-i18next';

const Hero = ({ i18n, lng }) => {
  const locale = i18n.getDataByLanguage(lng)['daunert'].hero;

  return (
    <section className="hero-dnrt">
      <div className="container">
        <div className="hero-dnrt__header">
          <a
            target="__blank"
            href="https://daunert.com/?lang=en"
            className="hero-dnrt__img-wrapper"
          >
            <img
              src="/static/images/daunert/hero/logo.png"
              atl="logo"
            />
          </a>
          <div className="hero-dnrt__number-block">
            <div className="hero-dnrt__number-info">
              <p className="hero-dnrt__time">{locale.header.title}</p>
              <p className="hero-dnrt__men">
                {locale.header.description}
              </p>
            </div>
            <div className="hero-dnrt__number-info">
              <p className="hero-dnrt__time">
                {locale.header.title2}
              </p>
              <p className="hero-dnrt__men">
                {locale.header.description2}
              </p>
            </div>
          </div>
        </div>
        <div className="hero-dnrt__content">
          <div className="hero-dnrt__info-block">
            <p
              className="hero-dnrt__title"
              dangerouslySetInnerHTML={{
                __html: locale.title,
              }}
            ></p>
            <p className="hero-dnrt__description">
              {locale.description}
            </p>
          </div>
          <div className="hero-dnrt__img-wrapper2">
            <img
              src="/static/images/daunert/hero/laptop.png"
              atl="laptop image"
            />
          </div>
        </div>
        <div className="shape hero-dnrt__right-shape-sm"></div>
      </div>
      <div className="shape hero-dnrt__left-shape"></div>
      <div className="shape hero-dnrt__right-shape"></div>
      <div className="shape hero-dnrt__right-shape-sm2"></div>
    </section>
  );
};

export default withNamespaces(['daunert'])(Hero);
