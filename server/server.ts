import * as express from "express"
import * as bodyParser from "body-parser"
import { sign, decode, verify } from "jsonwebtoken"

const app = express()
app.use(bodyParser.json())

const creds = {
  id: "1",
  username: "Test",
  password: "Test123",
}

const secret = "shhhhhhh"

app.post("/login", (req, res) => {
  const { username, password } = req.body
  if (!username || !password) return res.status(400).end()

  if (username !== creds.username || password !== creds.password) {
    return res.status(401).json({
      message: "invalid login",
    })
  }

  return res.json(
    sign({ id: creds.id }, secret, {
      expiresIn: "20000", // 20 seconds
    }),
  )
})

app.post("/verify", async (req, res) => {
  // token should be attached to auth header.
  const { token }: any = req.body
  console.log({ token })
  try {
    await verify(token, secret)
    return res.json(true)
  } catch (error) {
    return res.status(401).end()
  }
})

app.listen(3000, () => {
  console.log(`http://localhost:3000`)
})
