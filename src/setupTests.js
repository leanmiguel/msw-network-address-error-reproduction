import "@testing-library/jest-dom";

import { rest } from "msw";
import { setupServer } from "msw/node";

import { GET_ENDPOINTS } from "test/server-mock-data";

const newServer = setupServer(
  ...GET_ENDPOINTS.map(({ url, handler }) => rest.get(url, handler))
);

beforeEach(() => {
  newServer.listen();
});

afterEach(() => {
  newServer.close();
});
