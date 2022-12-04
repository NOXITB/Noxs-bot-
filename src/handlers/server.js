const settings = require(`${process.cwd()}/Assets/Config/settings`);
const express = require('express');
const path = require('path');
const app = express();
const port = 3000 || 8080;
  
if (settings.REPL_SETTINGS.EXPRESS && settings.REPL_USER) {
  const staticPath = path.join(__dirname, "../webpage")
  app.use(express.static(staticPath))

  function online() {
    app.listen(port, () => {
      console.log("24/7 KeepAlive Server is online!".bgGreen.white)
    });
  }
  module.exports = online;
} else {
  function offline() {
    console.log(`KeepAlive is Turned Off! (To Turn On [Go to "config.json" and set "true" for "Enable_KeepAlive"])`.bgRed.white)
  }
  module.exports = offline;
}

/********************************************************
  @INFO
    Coded by: Nadid Wasique [DaTaklaCatto#2207]
  @INFO
    Website: https://nadid-wasique.nelify.app
    Discord: https://discord.gg/Mdh23bsrhp
  @COPYRIGHT
    Please mention me if you use this code <3
  @INFO
********************************************************/