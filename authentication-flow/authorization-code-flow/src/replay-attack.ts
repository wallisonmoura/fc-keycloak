const url =
  "http://host.docker.internal:3000/callback?session_state=52fb10df-2109-416c-9767-7e20e4aca114&code=db875417-9d86-4758-b6e1-ed93a53e1f71.52fb10df-2109-416c-9767-7e20e4aca114.b45bbcd0-dccf-48af-82ee-96e35c0243cf";

const request1 = fetch(url);
const request2 = fetch(url);

Promise.all([request1, request2])
  .then(async (responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((jsons) => console.log(jsons));