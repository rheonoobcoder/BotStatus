//for the watching the numbers of servers status(There is so many so well just start with this)
client.user.setActivity("for .help in " + client.guilds.size + " server\(s\)", {
type: "WATCHING",
});
});
//this code will look like this (Watching for .help in 125(just an example number) servers) You can change it to whatever you want

//second code is this
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${PREFIX}help and ${PREFIX}play`, { type: "WATCHING" });
});
//it will look like this (Watching .help and .play) Again, you can change it to whatever you want

//well add more in the future but take note, always type capslock at the "type" parts and also , only WATCHING, PLAYING, STREAMING, LISTENING is what you can put there, put this at the top of your main file or "index.js" or at the bottom of "client" part
