import React from 'react';
import s from './NotificationSettings.module.scss';

import Settings from './components/settings/Settings';
import Custom from './components/custom/Custom';

const NotificationSettings = (): JSX.Element => {
  return (
    <div className={s.settingsWrapper}>
      <Settings />
      <Custom />
    </div>
  );
};

export default NotificationSettings;
