import React from 'react';
import './styles.scss';
import { withNamespaces } from 'react-i18next';

const Features = ({ i18n, lng }) => {
  const locale = i18n.getDataByLanguage(lng)['daunert'].features;

  return (
    <section className="features-dnrt">
      <div className="container">
        <div className="features-dnrt__innver-container-wrapper">
          <p className="features-dnrt__title">{locale.title}</p>
          <div className="features-dnrt__list">
            {locale.keys.map((item, index) => (
              <p
                key={index}
                className="features-dnrt__item"
                dangerouslySetInnerHTML={{ __html: item }}
              ></p>
            ))}
          </div>
        </div>
        <div className="shape features-dnrt__left-shape-sm"></div>
      </div>
      <div className="shape features-dnrt__left-shape"></div>
    </section>
  );
};

export default withNamespaces(['daunert'])(Features);
