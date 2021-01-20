const { createService } = require("./services");
const app = createService();
const server_port = process.env.PORT || 3000;

app.listen(server_port, () => {
  console.log(`Node server running on ${server_port}`);
});
