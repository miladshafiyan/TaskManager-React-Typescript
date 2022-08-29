import admin from '../admin';
import { ISystemState } from '../redux/actions/types';

export const signIn = ({ login, password }: ISystemState['admin']) => {


           //console.log(username);
           //console.log(pass);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
    fetch('https://localhost:7008/api/Login/'+login+"/"+password)
      .then((res) => res.json())
           .then((data) => {
              console.log(data);
              console.log(data._id);

              if (login === '' || password === '') {
                reject('All fields must be filled!');
                return;
              }

              if (data.userName !== login) {
                reject('Login is incorrect!');
                return;
              }

              if (data.password !== password) {
                reject('Invalid password!');
                return;
              }

              resolve({
                login: data.userName,
                password: data.password,
              });
           })

    }, 500);
  });
};

export const signOut = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};
