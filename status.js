//for the watching the numbers of servers status(There is so many so well just start with this)
client.user.setActivity("for .help in " + client.guilds.size + " server\(s\)", {
type: "WATCHING",
});
});
//Prevew = (Watching for .help in 125(just an example number) servers) You can change it to whatever you want

//second code is this
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${PREFIX}help and ${PREFIX}play`, { type: "WATCHING" });
});
//Preview:(Watching .help and .play)
//all of thi
