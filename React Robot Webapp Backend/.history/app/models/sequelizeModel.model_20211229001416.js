module.exports = (sequelize, Sequelize) => {
  const sequelizeModel = sequelize.define("sequelizeModel", {
    CpuTemp: {
      type: Sequelize.INT,
    },
    GpuTemp: {
      type: Sequelize.INT,
    },
    Temperature: {
      type: Sequelize.INT,
    },
    Humidity: {
      type: Sequelize.INT,
    },
    Voltage: {
      type: Sequelize.INT,
    },
    Amperage: {
      type: Sequelize.INT,
    },
    Gas1: {
      type: Sequelize.INT,
    },
    Gas2: {
      type: Sequelize.INT,
    },
    Gas3: {
      type: Sequelize.INT,
    },
    Gas4: {
      type: Sequelize.INT,
    },
    Gas5: {
      type: Sequelize.INT,
    },
    PhotoResistor: {
      type: Sequelize.INT,
    },
    PhotoResistor: {
      type: Sequelize.BOOLEAN,
    },
  });

  return sequelizeModel;
};
