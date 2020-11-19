import firebase from '../../firebase';

export const getRoleById = (id: string): Promise<string> => new Promise((resolve, reject) => {
  if (id) {
    firebase.firestore().collection('roles').doc(id).get().then((data) => {
      const role = data.data();
      resolve(role?.name);
    }).catch((error) => {
      reject(error.message);
    });
  } else {
    reject(new Error('id not sent'));
  }
});
