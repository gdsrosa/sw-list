/* eslint-disable no-console */
import axios from 'axios';

export const getPeople = (url, people, resolve, reject) => {
  axios
    .get(url)
    .then(response => {
      const retrivedPeople = people.concat(response.data.results);
      if (response.data.next !== null) {
        getPeople(response.data.next, retrivedPeople, resolve, reject);
      } else {
        resolve(retrivedPeople);
      }
    })
    .catch(err => {
      console.error(err);
      reject('Something wrong. Please refresh the page and try again.');
    });
};

export const getStarships = (url, starships, resolve, reject) => {
  axios
    .get(url)
    .then(response => {
      const retrivedStarships = starships.concat(response.data.results);
      if (response.data.next !== null) {
        getStarships(response.data.next, retrivedStarships, resolve, reject);
      } else {
        resolve(retrivedStarships);
      }
    })
    .catch(err => {
      console.error(err);
      reject('Something wrong. Please refresh the page and try again.');
    });
};
