'use strict'
// WAT - GBT AI brand assets. Requires the project's installed sharp package.
const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')
const root = path.resolve(__dirname, '../..')
const svg = [
'<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">',
'<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#09182E"/><stop offset="1" stop-color="#174165"/></linearGradient><linearGradient id="line" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#69F0D1"/><stop offset="1" stop-color="#57B6FF"/></linearGradient></defs>',
'<rect x="12" y="12" width="488" height="488" rx="112" fill="url(#bg)"/>',
'<rect x="26" y="26" width="460" height="460" rx="98" fill="none" stroke="#8FDCFC" stroke-opacity=".27" stroke-width="3"/>',
'<path d="M94 170 L157 344 L224 213 L290 344 L358 170" stroke="url(#line)" stroke-width="39" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
'<path d="M363 208 L414 208 M399 192 L399 257" stroke="#B9FCFF" stroke-width="12" fill="none" stroke-linecap="round"/>',
'<circle cx="414" cy="208" r="12" fill="#61F5D1"/><circle cx="399" cy="257" r="10" fill="#68C3FF"/>',
'<path d="M139 394 L373 394" stroke="#7DCFEA" stroke-width="5" stroke-linecap="round" opacity=".6"/>',
'</svg>'
].join('')
function save(name, data) {
  const target = path.join(root, name)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, data)
}
async function png(width) {
  return sharp(Buffer.from(svg)).resize(width, width).png().toBuffer()
}
async function main() {
  const icon512 = await png(512)
  const icon256 = await png(256)
  const tray32 = await png(32)
  for (const file of ['build/icon.png','build/logo.png','src/renderer/assets/images/logo.png']) save(file, icon512)
  for (const file of ['build/tray_icon.png','build/tray_icon_dark.png','build/tray_icon_light.png']) save(file,tray32)
  // ICO container with a 256px PNG entry, compatible with Windows.
  const header = Buffer.alloc(22)
  header.writeUInt16LE(1,2)
  header.writeUInt16LE(1,4)
  header.writeUInt16LE(1,10)
  header.writeUInt16LE(32,12)
  header.writeUInt32LE(icon256.length,14)
  header.writeUInt32LE(22,18)
  save('build/icon.ico',Buffer.concat([header,icon256]))
  console.log('WAT - GBT AI: icons generated.')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
