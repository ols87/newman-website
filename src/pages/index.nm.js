const nav = require('../templates/includes/nav/nav');
const clients = require('../templates/includes/clients/clients');
delete require.cache[require.resolve('../templates/includes/nav/nav')];

module.exports = {
  template: 'page',
  nav: nav,
  clients: clients,
};
