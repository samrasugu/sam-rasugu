import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'fnu1oegl',
    dataset: 'production'
  },
  studioHost: "samrasugu",
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  deployment: {
    autoUpdates: true,
    appId: 'c39tyatzjo00kn0e0mrnbg1z'
  },
})
