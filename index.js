import { ChatGPTAPI } from 'chatgpt'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('frontend'))
app.use('/css', express.static(__dirname +'frontend'))

app.post('/src',async function (req, res) {
  const api = new ChatGPTAPI({
    apiKey: "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"
  })
  console.log(req.body)
  if (!req.body.mensagem) {
    req.body.mensagem = "OLÁ"
  }
  const responseChatGpt = await api.sendMessage(req.body.mensagem)
  res.send(responseChatGpt)

})
app.get('/',async function (req, res) {
  res.sendFile(__dirname +"/frontend/index.html")
})
console.log("API rodando na porta 3000")
app.listen(3000)


