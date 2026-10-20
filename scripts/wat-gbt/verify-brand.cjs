'use strict'
const fs=require('node:fs')
const path=require('node:path')
const root=path.resolve(__dirname,'../..')
const read=file=>fs.readFileSync(path.join(root,file),'utf8')
const pkg=JSON.parse(read('package.json'))
const builder=read('electron-builder.yml')
const checks=[
[pkg.name==='wat-gbt-ai','package name'],
[builder.includes('productName: WAT - GBT AI'),'product name'],
[builder.includes('appId: com.watmotor.watgbtai'),'installer application ID'],
[builder.includes('guid: ec04b213-5f19-41a4-8ca5-cb6309f2d831'),'independent installer GUID'],
[read('src/shared/utils/constants.ts').includes("APP_NAME = 'WAT - GBT AI'"),'runtime name'],
[read('src/main/core/paths/constants.ts').includes("CHERRY_HOME_DIRNAME = '.watgbtai'"),'isolated config'],
[read('src/main/services/AppUpdaterService.ts').includes('WAT_GBT_DISABLE_UPDATES = true'),'official updater disabled']
]
for(const [ok,label] of checks)console.log((ok?'OK  ':'FAIL ')+label)
if(checks.some(([ok])=>!ok))process.exitCode=1
