import React from 'react';
import './styles.scss';
import { withNamespaces } from 'react-i18next';

const Services = ({ i18n, lng }) => {
  const locale = i18n.getDataByLanguage(lng)['daunert'].services;

  return (
    <section className="services-dnrt">
      <div className="container">
        <p className="services-dnrt__title">{locale.title}</p>
        <div className="services-dnrt__list">
          {locale.list.map((item, index) => (
            <div key={index} className="services-dnrt__item">
              <div className="services-dnrt__id">{item.id}</div>
              <p className="services-dnrt__name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="services-dnrt__decor"></div>
    </section>
  );
};

export default withNamespaces(['daunert'])(Services);
