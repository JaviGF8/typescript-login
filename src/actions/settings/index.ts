import firebase from '../../firebase';
import { SettingsType } from '../../utils/commonTypes';

export const getUserSettings = (id: string): Promise<SettingsType> => new Promise((resolve, reject) => {
  if (id) {
    firebase.firestore().collection('settings').doc(id).get().then((data) => {
      const settings = data.data();
      resolve({ info: settings?.info, info2: settings?.info2, test: settings?.test, storage: settings?.storage });
    }).catch((error) => {
      reject(error.message);
    });
  } else {
    reject(new Error('id not sent'));
  }
});
