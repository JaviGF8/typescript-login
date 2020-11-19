export type UserType = {
  name?: string,
  role?: string,
  settingsId?: string,
  dashboardId?: string,
};

export type SettingsType = {
  info?: string,
  info2?: string,
  test?: string,
  storage?: string,
};

export type DashboardType = {
  showGraph?: boolean,
  showImage?: boolean,
};
