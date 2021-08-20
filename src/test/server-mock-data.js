const UserMock = {
  url: `${process.env.REACT_APP_API_ENDPOINT}users/random_user`,
  handler: async (_, res, ctx) =>
    res(
      ctx.json({
        status: "ok",
        response: {
          language: "es",
        },
      })
    ),
};

export const GET_ENDPOINTS = [UserMock];
