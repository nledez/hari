// Generated by CoffeeScript 1.9.3
var DailyNote, moment;

moment = require('moment');

DailyNote = require('../models/dailynote');

module.exports = {
  all: function(req, res, next) {
    return DailyNote.all(function(err, notes) {
      if (err) {
        return next(err);
      }
      return res.send(notes);
    });
  },
  get: function(req, res, next) {
    var date, note;
    date = moment(req.params.date, 'YYYY-MM-DD').startOf('day');
    return note = DailyNote.getByDate(date, function(err, note) {
      if (err) {
        return next(err);
      }
      return res.send(note);
    });
  },
  createOrUpdate: function(req, res, next) {
    var date, note;
    date = moment(req.params.date, 'YYYY-MM-DD').startOf('day');
    return note = DailyNote.getByDate(date, function(err, note) {
      var content, ref, vector;
      if (err) {
        return next(err);
      }
      ref = req.body, content = ref.content, vector = ref.vector;
      if (note != null) {
        return note.updateAttributes({
          content: content,
          vector: vector
        }, function(err) {
          if (err) {
            return next(err);
          }
          return res.send({
            success: true
          });
        });
      } else {
        return DailyNote.create({
          date: date,
          content: content,
          vector: vector
        }, function(err) {
          if (err) {
            return next(err);
          }
          return res.send({
            success: true
          });
        });
      }
    });
  },
  "delete": function(req, res, next) {
    var date, note;
    date = moment(req.params.date, 'YYYY-MM-DD').startOf('day');
    return note = DailyNote.getByDate(date, function(err, note) {
      if (err) {
        return next(err);
      }
      if (note != null) {
        return note.destroy(function(err) {
          if (err) {
            return next(err);
          }
          return res.send({
            success: true
          }, 204);
        });
      } else {
        return res.sendStatus(404);
      }
    });
  }
};
