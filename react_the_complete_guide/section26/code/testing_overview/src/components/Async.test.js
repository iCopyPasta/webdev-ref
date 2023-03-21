import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("<Async/>", () => {
  test("renders posts if request succeeds", async () => {
    // mock
    window.fetch = jest.fn();

    // set a value should resolve
    // object with json() method
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return [
          {
            id: "p1",
            title: "First post",
          },
        ];
      },
    });

    render(<Async />);

    // get - will INSTANTLY look
    // but fetching takes time
    // find - return a Promise; react tesitng will evaluate a few times
    //   timeout
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
