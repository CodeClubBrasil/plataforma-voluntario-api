'use strict';


/**
 * Buscar Code Clubs
 * Buscar Code Clubs por nome, estado, cidade
 *
 * name String Nome do Code Club (optional)
 * state String Estado do Code Club (optional)
 * city String Cidade do Code Club (optional)
 * neighborhood String Bairro do Code Club (optional)
 * returns Club
 **/
exports.findClub = function(name,state,city,neighborhood) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : {
    "zipcode" : "zipcode",
    "address" : "address",
    "city" : "Niterói",
    "state" : "Rio de Janeiro",
    "neighborhood" : "Icarai",
    "complement" : "complement"
  },
  "name" : "Code Club Transform The World ",
  "responsibleName" : "Marry",
  "contacts" : [ "contato@minhaong.org", "21123456789" ],
  "availableTimes" : [ {
    "weekDays" : [ "seg, ter", "seg, ter" ],
    "time" : {
      "endHour" : "11:00",
      "startHour" : "10:00"
    }
  }, {
    "weekDays" : [ "seg, ter", "seg, ter" ],
    "time" : {
      "endHour" : "11:00",
      "startHour" : "10:00"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

