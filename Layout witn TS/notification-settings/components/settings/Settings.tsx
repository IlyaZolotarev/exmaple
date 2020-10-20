import React, { useState } from 'react';
import s from './Settings.module.scss';
import SwitchButton from './../../../../../components/switch-button/SwitchButton';

const Settings = (): JSX.Element => {
  const [testBool, setTestBool] = useState(false);
  return (
    <>
      <div className={s.settingsBlock}>
        <div className={s.contentBlock}>
          <p className={s.title}>sms</p>
          <p className={s.description}>Network carrier costs may apply</p>
        </div>
        {/*TODO: console.log will be changed on another action function*/}
        <SwitchButton onChange={(checked) => setTestBool(checked)} checked={testBool} />
      </div>

      <div className={s.settingsBlock}>
        <div className={s.contentBlock}>
          <p className={s.title}>email</p>
          <p className={s.description}>If you don&apos;t see notification in your inbox, check Spam folders.</p>
        </div>
        {/*TODO: console.log will be changed on another action function*/}
        <SwitchButton onChange={(checked) => setTestBool(checked)} checked={testBool} />
      </div>
    </>
  );
};

export default Settings;
