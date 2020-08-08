const API_URL = '//sylla-api.herokuapp.com';

export function generateName(input = {}) {
  try {
    const body = JSON.stringify(input);

    return fetch(`${API_URL}/name`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    .then(response => {
      return response.text();
    })
    .catch(e => console.error(e));
  } catch(e) {
    console.error('FAILED TO STRINGIFY BODY');
    console.error(e);
  }
}

export function generateNames(input = {}) {
  try {
    const body = JSON.stringify(input);

    return fetch(`${API_URL}/names`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    .then(response => {
      return response.json();
    })
    .then(({names}) => names)
    .catch(e => console.error(e));
  } catch(e) {
    console.error('FAILED TO STRINGIFY BODY');
    console.error(e);
  }
}

export function generateMarkovNames(input = {}) {
  try {
    const body = JSON.stringify(input);

    return fetch(`${API_URL}/markov/names`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    .then(response => {
      return response.json();
    })
    .then(({names}) => names)
    .catch(e => console.error(e));
  } catch(e) {
    console.error('FAILED TO STRINGIFY BODY');
    console.error(e);
  }
}
