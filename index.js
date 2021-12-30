const { execSync } = require("child_process");

const run = (command) => execSync(command).toString();

run("adb shell bmgr backup @pm@");
run("adb shell bmgr run");

run("adb shell cmd package list packages")
  .split("\n")
  .map((line) => line.replace(/^package:/, ""))
  .forEach((package, index, items) => {
    console.log(`[${index + 1}/${items.length}] Backing up ${package} to cloud...`);
    run(`adb shell bmgr fullbackup ${package}`);
  });

console.log("Done! Check cloud backup status here: https://secure.oculus.com/my/cloud-backup/");
