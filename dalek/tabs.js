module.exports = {
  name: 'tabs',

  'should be able to switch between tabs': function(test) {
    test.open('http://localhost:3000/home')
    //angular - need to wait for angular to render this container
    .wait(500)
      .assert.exists('[data-ut="default"] .tab.is-active[data-tab="one"]', 'tab one is active')
      .assert.exists('[data-ut="default"] .tab-content.is-active[data-tab="one"]', 'tab one content is active')
      .assert.doesntExist('[data-ut="default"] .tab.is-active[data-tab="two"]', 'tab two is not active')
      .assert.doesntExist('[data-ut="default"] .tab-content.is-active[data-tab="two"]', 'tab two content is not active')
    .click('[data-ut="default"] .tab:nth-child(2)')
      .assert.exists('[data-ut="default"] .tab.is-active[data-tab="two"]', 'tab two is active')
      .assert.exists('[data-ut="default"] .tab-content.is-active[data-tab="two"]', 'tab two content is active')
      .assert.doesntExist('[data-ut="default"] .tab.is-active[data-tab="one"]', 'tab one is not active')
      .assert.doesntExist('[data-ut="default"] .tab-content.is-active[data-tab="one"]', 'tab one content is not active')
    .done();
  },

  'should be able set default tab to as a string': function(test) {
    test.open('http://localhost:3000/home')
    //angular - need to wait for angular to render this container
    .wait(500)
      .assert.exists('[data-ut="set-default-tab-string"] .tab-content.is-active[data-tab="two"]', 'tab two content is active')
    .done();
  },

  'should be able to set default tab as a number': function(test) {
    test.open('http://localhost:3000/home')
    //angular - need to wait for angular to render this container
    .wait(500)
      .assert.exists('[data-ut="set-default-tab-number"] .tab-content.is-active[data-tab="two"]', 'tab two content is active')
    .done();
  }
}