const config = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "myfavoritebucket99",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rrkeiuc595.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_aUTz5eDqK",
    APP_CLIENT_ID: "57e6lgd8ujjmfdjbvnop203naf",
    IDENTITY_POOL_ID: "us-east-2:93f85ea4-7a3a-44b3-9a77-97e42d50c44f",
  },
};

export default config;
