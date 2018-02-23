var options = (env = "development") => {
  return {
    swaggerDefinition: {
      info: {
        title: "MotaCoin API",
        description: "A new Crypto Currency! Mota Coin!",
        version: "1.0"
      },
      schemes: env == "production" ? ["https"] : ["http", "https"],
      basePath: "/api",
      produces: ["application/json"],
      security: [
        {
          basicAuth: []
        }
      ]
    },
    apis: ["./docs/*.yaml", "./routes/*.js"]
  };
};

module.exports = options;
