const app = require("./app")
const { port } = require("./secret")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
