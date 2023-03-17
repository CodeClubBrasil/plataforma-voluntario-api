'use strict';

var utils = require('../utils/writer.js');
var Club = require('../service/ClubService');

module.exports.findClub = function findClub (req, res, next, name, state, city, neighborhood) {
  Club.findClub(name, state, city, neighborhood)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
