import React, { FC, useEffect, useState } from 'react';
import { useStore } from 'react-redux';

import Page from '../../components/base/Page';
import { getUserSettings } from '../../actions/settings';
import Loading from '../../components/base/Loading';
import SettingElement from '../../components/settings/SettingElement';
import { SettingsType } from '../../utils/commonTypes';
import './index.scss';

const SettingsPage: FC = () => {
  const [ loading, setLoading ] = useState(false);
  const [ settings, setSettings ] = useState<SettingsType>({});
  const { getState } = useStore();

  const loadSettings = () => {
    const { user } = getState().user;

    if (user?.settingsId) {
      setLoading(true);
      getUserSettings(user.settingsId).then((data) => {
        setSettings(data);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  return (
    <Page title="Settings" className="settings-page">
      {loading ?
        <Loading color="primary" /> :
        <>
          {!!settings?.info && <SettingElement label="info" value={settings.info} />}
          {!!settings?.info2 && <SettingElement label="info2" value={settings.info2} />}
          {!!settings?.test && <SettingElement label="test" value={settings.test} />}
          {!!settings?.storage && <SettingElement label="storage" value={settings.storage} />}
        </>
      }
    </Page>
  );
};

export default SettingsPage;
