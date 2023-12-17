module.exports = (sequelize, Sequelize) => {
  const sequelizeModel = sequelize.define("sequelizeModel", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return sequelizeModel;
};
