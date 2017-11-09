const models = require('./backend/models');

models.sequelize.sync({ force: true })
  .then(() => {
    console.log('Successfully updated database tables!');
    process.exit(0);
  })
  .catch((error) => {
    console.log('Error updating database tables', error);
    process.exit(1);
  });
