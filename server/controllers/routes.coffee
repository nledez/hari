dailyNotes = require './dailynotes'


module.exports =

    'daily-notes':
        get: dailyNotes.all
        post: dailyNotes.createOrUpdate

    'daily-notes/:date':
        get: dailyNotes.get
        put: dailyNotes.createOrUpdate
        delete: dailyNotes.delete

