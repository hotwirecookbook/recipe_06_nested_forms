import { Controller } from "@hotwired/stimulus"
import { get as railsGet, destroy as railsDestroy } from "@rails/request.js"

// Connects to data-controller="streams"
export default class extends Controller {
  static values = { url: String }
  static targets = [ "container" ]

  async get() {
    await railsGet(this.urlValue)
  }

  async destroy() {
    await railsDestroy(this.urlValue)
  }
}