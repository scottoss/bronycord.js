bronycord.js
====
A Node.js wrapper for interfacing with bronycord API.


## Installing
```bash
npm i bronycord.js
```

## Example Usage
```typescript
import { Client } from 'bronycord.js'

const client = new Client()

// Login with bot account
client.login(process.env.TOKEN)

// Self bot
// client.login({
//    type: 'user', // user or bot
//    token: process.env.TOKEN
// })


client.on('ready', () => {
    console.log('Connected')
    console.log(client.user.username)
})

client.on('message', msg => {
    if (msg.content === '!ping') {
        msg.reply('Pong!')
    }
})
```

## License
Refer to the [LICENSE](LICENSE) file.