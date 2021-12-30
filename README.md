# oculus-quest-manual-cloud-backup

## Instructions

1. Download and install [node.js LTS](https://nodejs.org/en/) if you don't have it installed already
2. Download and install the Android [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools)
3. In a terminal, `cd` to this directory and run: `node index.js`

## Notes

No backups will be created for:

- System apps (even if they can be seen in the backup log)
- Apps that have no stored data (such as apps that you've never started)