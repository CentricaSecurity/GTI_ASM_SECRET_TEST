
module.exports = {
  env: process.env.NODE_ENV || "production",
  serviceEndpoint: process.env.SERVICE_ENDPOINT || "https://api.internal.local/v1",
  auth: { jwtSecret: process.env.JWT_SECRET || "supersecretjwtkey1234567890" },
  stripe: { apiKey: process.env.STRIPE_SECRET || "sk_live_51H8xYfAnotherFakeKeyabcdef123456" },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "eu-west-2",
  },
  slack: {
    webhookUrl:
      process.env.SLACK_WEBHOOK_URL ||
      "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
  },
};
