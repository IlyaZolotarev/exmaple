import React from 'react';
import './styles.scss';
import { withNamespaces } from 'react-i18next';

const Review = ({ i18n, lng }) => {
  const locale = i18n.getDataByLanguage(lng)['daunert'].review;

  return (
    <section className="review-dnrt">
      <div className="container">
        <div className="review-dnrt__title">{locale.title}</div>
        <div className="review-dnrt__info-block">
          <p className="review-dnrt__name">{locale.name}</p>
          <p className="review-dnrt__position">{locale.position}</p>
          <p className="review-dnrt__review">{locale.review}</p>
        </div>
      </div>
      <div className="review-dnrt__decor"></div>
    </section>
  );
};

export default withNamespaces(['daunert'])(Review);
