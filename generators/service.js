module.exports = plop => {
  plop.setActionType(
    "printPkgJsonDeployNote",
    answers =>
      `Remember to add '"deploy:${answers.serviceName}": "lerna run deploy --stream --scope=\\"${answers.serviceName}\\"",' to the root package.json for simplicity.`
  );

  return {
    description: "Generate a new service.",
    prompts: [
      {
        type: "list",
        name: "serviceType",
        message: "Please choose a service",
        choices: [
          {
            name: "Google Cloud Function (HTTP)",
            value: "google-cloud-function-http"
          }
        ]
      },
      {
        type: "input",
        name: "serviceName",
        message: "What's the new service name? (e.g. my-new-service)"
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "../services/{{serviceName}}",
        base: "../templates/{{serviceType}}",
        templateFiles: "../templates/{{serviceType}}"
      },
      {
        type: "printPkgJsonDeployNote"
      }
    ]
  };
};
