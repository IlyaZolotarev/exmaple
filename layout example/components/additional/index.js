import React from 'react';
import './styles.scss';
import { withNamespaces } from 'react-i18next';

const Additional = ({ i18n, lng }) => {
  const locale = i18n.getDataByLanguage(lng)['daunert'].additional;

  return (
    <section className="additional-dnrt">
      <div className="container">
        <p className="additional-dnrt__title">{locale.title}</p>
        <div className="additional-dnrt__list-wrapper">
          <div className="additional-dnrt__list">
            {locale.list.map((item, index) => (
              <div key={index} className="additional-dnrt__item">
                <div className="additional-dnrt__icon-wrapper">
                  <img src={item.icon} />
                </div>
                <p
                  className="additional-dnrt__name"
                  dangerouslySetInnerHTML={{ __html: item.name }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withNamespaces(['daunert'])(Additional);
