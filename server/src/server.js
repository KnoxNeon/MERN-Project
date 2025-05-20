const app = require("./app")
const connectDataBase = require("./config/db")
const { port } = require("./secret")

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await connectDataBase();
})
