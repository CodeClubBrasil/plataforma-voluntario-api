'use strict';


/**
 * Adiciona um novo voluntário
 * Add a new pet to the store
 *
 * body Voluntary Cria um novo voluntario na plataforma
 * returns Voluntary
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "marry",
  "password" : "123",
  "city" : "Niterói",
  "name" : "marry",
  "id" : 10,
  "state" : "Rio de Janeiro",
  "neighborhood" : "Icarai",
  "tels" : [ "tels", "tels" ],
  "email" : "marry@gmail.com",
  "knowledges" : [ "Programacao", "Designer", "Professor" ],
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


/**
 * Adiciona um novo voluntário
 * Add a new pet to the store
 *
 * body Voluntary Cria um novo voluntario na plataforma
 * returns Voluntary
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "marry",
  "password" : "123",
  "city" : "Niterói",
  "name" : "marry",
  "id" : 10,
  "state" : "Rio de Janeiro",
  "neighborhood" : "Icarai",
  "tels" : [ "tels", "tels" ],
  "email" : "marry@gmail.com",
  "knowledges" : [ "Programacao", "Designer", "Professor" ],
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


/**
 * Get user by user name
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByName = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "marry",
  "password" : "123",
  "city" : "Niterói",
  "name" : "marry",
  "id" : 10,
  "state" : "Rio de Janeiro",
  "neighborhood" : "Icarai",
  "tels" : [ "tels", "tels" ],
  "email" : "marry@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logar na plataforma
 *
 * email String The user name for login (optional)
 * password String The password for login in clear text (optional)
 * returns inline_response_200
 **/
exports.loginUser = function(email,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sair da sessão do usuario logado
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Adiciona um novo voluntário
 * Add a new pet to the store
 *
 * no response value expected for this operation
 **/
exports.sendDocumentUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the store (optional)
 * username String name that need to be deleted
 * no response value expected for this operation
 **/
exports.updateUser = function(body,username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

