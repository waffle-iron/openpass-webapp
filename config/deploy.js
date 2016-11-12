/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    slack: {
      webhookURL: 'https://hooks.slack.com/services/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',
      channel: '#build',
      username: 'ember-cli-deploy',
      willDeploy: function(context) {
        return function(slack) {
          return {
            slackStartDeployDate: new Date()
          };
        };
      },
    
      didDeploy: function(context) {
        return function(slack) {
          var start = context.slackStartDeployDate;
          var end = new Date();
          var duration = (end - start) / 1000;
    
          return slack.notify({
            text: 'Deploy succeeded in ' + duration + ' seconds'
          });
        };
      },
      
      didFail: function(context) {
        return function(slack) {
          var start = context.slackStartDeployDate;
          var end = new Date();
          var duration = (end - start) / 1000;
          
          return slack.notify({
            text: 'Deploy failed in ' + duration + ' seconds'
          });
        };
      }
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
