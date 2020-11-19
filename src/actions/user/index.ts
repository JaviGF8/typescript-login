import firebase from '../../firebase';
import { UserType } from '../../utils/commonTypes';

import { getRoleById } from '../role';

const getUserById = (uid: string) => firebase.firestore().collection('users').doc(uid).get();

export const login = (email: string, password: string): Promise<UserType> => new Promise((resolve, reject) => {
  if (email && password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      if (res?.user?.uid) {
        getUserById(res.user.uid).then((data) => {
          const user = data.data();
          const name = user?.name || res.user?.displayName || res.user?.email || '';
          const settingsId = user?.settings?.id;
          const dashboardId = user?.dashboard?.id;
          if (user?.role?.id) {
            getRoleById(user.role.id).then((role) => {
              resolve({ name, settingsId, dashboardId, role });
            }).catch((error) => {
              reject(error.message);
            });
          } else {
            resolve({ name, settingsId, dashboardId, role: 'Admin' });
          }
        });
      } else {
        resolve({ name: res.user?.displayName || res.user?.email || '', role: 'Admin' });
      }
    }).catch((error) => {
      reject(error.message);
    });
  } else if (!email) {
    reject(new Error('Wrong email'));
  } else {
    reject(new Error('Wrong password'));
  }
});
