import admin from "firebase-admin"
const serviceAccount = require("./../serviceAccount.json")

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: (serviceAccount['private_key'] as string).replace(/\\n/g, '\n'),
    clientEmail: serviceAccount['client_email'],
    projectId: serviceAccount['project_id']
  })
});

export default admin
