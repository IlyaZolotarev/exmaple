import React from 'react';
import './styles.scss';
import { withNamespaces } from 'react-i18next';

const Results = ({ i18n, lng }) => {
  const locale = i18n.getDataByLanguage(lng)['daunert'].results;

  return (
    <section className="results-dnrt">
      <div className="container">
        <div className="results-dnrt__info-block">
          <p className="results-dnrt__title">{locale.title}</p>
          <p className="results-dnrt__description">
            {locale.description}
          </p>
          <div className="results-dnrt__list">
            {locale.list.map((item, index) => (
              <div key={index} className="results-dnrt__item">
                <div className="results-dnrt__id">{item.id}</div>
                <p className="results-dnrt__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="shape results-dnrt__right-shape-sm"></div>
      </div>
      <div className="shape results-dnrt__right-shape"></div>
    </section>
  );
};

export default withNamespaces(['daunert'])(Results);
