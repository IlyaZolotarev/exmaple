import React from 'react';
import './styles.scss';
import { withNamespaces } from 'react-i18next';

const Challenges = ({ i18n, lng }) => {
  const locale = i18n.getDataByLanguage(lng)['daunert'].challenges;
  return (
    <section className="challenges-dnrt">
      <div className="container">
        <div className="challenges-dnrt__container-inner-wrapper">
          <div className="challenges-dnrt__info-block">
            <p className="challenges-dnrt__title">{locale.title}</p>
            <p className="challenges-dnrt__description">
              {locale.description}
            </p>
          </div>
          <div className="challenges-dnrt__img-wrapper">
            <div className="challenges-dnrt__inner-img-wrapper">
              <img
                src="/static/images/daunert/challenges/challenges.png"
                alt="challenges image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withNamespaces(['daunert'])(Challenges);
