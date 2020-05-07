const nav = require('../templates/includes/nav/nav');
delete require.cache[require.resolve('../templates/includes/nav/nav')];

module.exports = {
  template: 'page',
  nav: nav,
  foo: 'bar',
};
