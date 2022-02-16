var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
  client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity : {
      details : "DETAILS",
      state: "YOUR_STATE",
      assets : {
        large_image : "larget_image",
        large_text : "large_text",
        small_image : "small_image",
        small_text : "small_text"
      },
      buttons : [
        {label : "BUTTON1_TEXT", url : "URL1"},
        {label : "BUTTON2_TEXT", url : "URL2"}
      ]
    }
  })
})
client.login({ clientId : "CLIENT_ID"}).catch(console.error);
