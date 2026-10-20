const { CHINA_EDITION, getReleaseChannel } = require('./scripts/release/edition')

module.exports = async function createChinaEditionConfig({ packageMetadata }) {
  const { version } = await packageMetadata.value

  return {
    extends: './electron-builder.yml',
    appId: 'com.watmotor.watgbtai.cn',
    extraMetadata: {
      cherryEdition: CHINA_EDITION
    },
    publish: {
      provider: 'generic',
      url: 'https://github.com/yasinonder/WAT-GBT/releases/latest/download',
      useMultipleRangeRequest: false,
      channel: getReleaseChannel(version, CHINA_EDITION)
    }
  }
}
