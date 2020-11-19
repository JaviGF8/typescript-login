import firebase from '../../firebase';
import { DashboardType } from '../../utils/commonTypes';

export const getUserDashboard = (id: string): Promise<DashboardType> => new Promise((resolve, reject) => {
  if (id) {
    firebase.firestore().collection('dashboard').doc(id).get().then((data) => {
      const dashboard = data.data();
      resolve({ showGraph: dashboard?.showGraph, showImage: dashboard?.showImage });
    }).catch((error) => {
      reject(error.message);
    });
  } else {
    reject(new Error('id not sent'));
  }
});
