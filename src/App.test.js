import { render, waitFor } from "test/test-utils";
import App from "./App";

test("renders learn react link", (done) => {
  const { getByText } = render(<App></App>);
  setTimeout(() => {
    done();
  }, 1000);
});
