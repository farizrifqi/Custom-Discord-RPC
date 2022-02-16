# Custom-Discord-RPC

Customize your discord rich presence card with button.
## Preview
<img src="https://i.imgur.com/rNgj39y.jpg"/>

## Requirements
<b>Discord Application</b>
Create discord application at <a href="https://discord.com/developers/applications" target="_blank">discord developer portal</a>

<b>Language</b>: NodeJS
<b>Modules</b>:
- <a href="https://www.npmjs.com/package/discord-rpc">discord-rpc</a>

Run command to install modules
``npm i discord-rpc``

## You need to change
`details` set the detail, mine was <b>zeraneL</b>

`state` set the state, mine was <b>unable to retrieve ur response</b>

`buttons` when clicked, it will go to the links. <i>you can remove this if u want</i>

Set `large_image` and `small_image` on `assets[]` from your discord application, matched its filename.

Set `larget_text` and `small_text` on `assets[]` as u want. It is image tooltips.

`CLIENT_ID` was the discord application client id.

### You need to open discord application

## More things
Find out more on this <a href="https://github.com/discord/discord-rpc">Github Repo</a>.
