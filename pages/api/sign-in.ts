import type { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { username, password } = request.query;

  if (username && password) {
    response.statusCode = 200;
    response.json({ username, password });
  } else {
    response.statusCode = 401;
    response.json({ message: 'Invalid credentials' });
  }
};
