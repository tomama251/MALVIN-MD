const {lords}=require("../lord/lords")







lords({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝙼𝙰𝙻𝚅𝙸𝙽 𝙼𝙳 bot Restarting ⏳");

  exec("pm2 restart all");
  

  



})
