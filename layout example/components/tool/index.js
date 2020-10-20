import React from 'react';
import './styles.scss';
import { withNamespaces } from 'react-i18next';

const Tool = ({ i18n, lng }) => {
  const locale = i18n.getDataByLanguage(lng)['daunert'].tool;
  return (
    <section className="tool-dnrt">
      <div className="container">
        <div className="tool-dnrt__container-inner-wrapper">
          <div className="tool-dnrt__img-wrapper">
            <div className="tool-dnrt__inner-img-wrapper">
              <img
                src="/static/images/daunert/tool/tool.png"
                alt="tool image"
              />
            </div>
          </div>
          <div className="tool-dnrt__info-block">
            <p className="tool-dnrt__sub-description">
              {locale.subDescription}
            </p>
            <div className="tool-dnrt__img-wrapper2">
              <div className="tool-dnrt__inner-img-wrapper">
                <img
                  src="/static/images/daunert/tool/tool.png"
                  alt="tool image"
                />
              </div>
            </div>
            <p
              className="tool-dnrt__summary"
              dangerouslySetInnerHTML={{
                __html: locale.summary,
              }}
            ></p>

            <p
              className="tool-dnrt__results"
              dangerouslySetInnerHTML={{
                __html: locale.results,
              }}
            ></p>
          </div>
        </div>
        <div className="shape tool-dnrt__left-shape-sm"></div>
      </div>
      <div className="shape tool-dnrt__left-shape"></div>
      <div className="shape tool-dnrt__left-shape-sm2"></div>
    </section>
  );
};

export default withNamespaces(['daunert'])(Tool);
