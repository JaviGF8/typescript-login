import React, { FC, useEffect, useState } from 'react';
import { useStore } from 'react-redux';

import Page from '../../components/base/Page';
import { getUserDashboard } from '../../actions/dashboard';
import Loading from '../../components/base/Loading';
import DashboardImage from '../../components/dashboard/DashboardImage';
import DashboardGraph from '../../components/dashboard/DashboardGraph';
import { DashboardType } from '../../utils/commonTypes';
import './index.scss';

const DashboardPage: FC = () => {
  const [ loading, setLoading ] = useState(false);
  const [ dashboard, setDashboard ] = useState<DashboardType>({});
  const { getState } = useStore();

  const loadDashboard = () => {
    const { user } = getState().user;

    if (user?.dashboardId) {
      setLoading(true);
      getUserDashboard(user.dashboardId)
        .then((data) => {
          setDashboard(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <Page title="Dashboard" className="dashboard-page">
      {loading ? (
        <Loading color="primary" />
      ) : (
        <>
          {!!dashboard?.showImage && <DashboardImage />}
          {!!dashboard?.showGraph && <DashboardGraph />}
        </>
      )}
    </Page>
  );
};

export default DashboardPage;
