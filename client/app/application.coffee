crypto = require 'lib/crypto'

module.exports =


    initialize: ->
        window.app = this

        # Routing management
        Router = require 'router'
        @router = new Router()
        Backbone.history.start()

        # Makes this object immuable.
        Object.freeze this if typeof Object.freeze is 'function'

