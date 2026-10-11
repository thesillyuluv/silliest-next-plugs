export default plugin({
  onLoad() {
    revenge.discord.native.BundleUpdaterManager.reload()
  }
})
