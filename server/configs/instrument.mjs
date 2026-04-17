
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://611ae179b08c8758880eba7de4ea2fc4@o4511228651044864.ingest.us.sentry.io/4511228690694144",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});