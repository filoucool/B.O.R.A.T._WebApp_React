module.exports = (sequelize, Sequelize) => {
  const sequelizeModel = sequelize.define("sequelizeModel", {
    CpuTemp: {
      type: Sequelize.INTEGER,
    },
    GpuTemp: {
      type: Sequelize.INTEGER,
    },
    Temperature: {
      type: Sequelize.INTEGER,
    },
    Humidity: {
      type: Sequelize.INTEGER,
    },
    Voltage: {
      type: Sequelize.INTEGER,
    },
    Amperage: {
      type: Sequelize.INTEGER,
    },
    Gas1: {
      type: Sequelize.INTEGER,
    },
    Gas2: {
      type: Sequelize.INTEGER,
    },
    Gas3: {
      type: Sequelize.INTEGER,
    },
    Gas4: {
      type: Sequelize.INTEGER,
    },
    Gas5: {
      type: Sequelize.INTEGER,
    },
    PhotoResistor: {
      type: Sequelize.INTEGER,
    },
    Fspeed: {
      type: Sequelize.INTEGER,
    },
    Bspeed: {
      type: Sequelize.INTEGER,
    },
    Tspeed: {
      type: Sequelize.INTEGER,
    },
    Acceleration: {
      type: Sequelize.INTEGER,
    },
    FrontLEDs: {
      type: Sequelize.BOOLEAN,
    },
    StatusLEDs: {
      type: Sequelize.BOOLEAN,
    },
    SerialLEDs: {
      type: Sequelize.BOOLEAN,
    },
    BeaconLEDs: {
      type: Sequelize.BOOLEAN,
    },
    ConversationalAI: {
      type: Sequelize.BOOLEAN,
    },
    ObjectRecognition: {
      type: Sequelize.BOOLEAN,
    },
    HumanRecognition: {
      type: Sequelize.BOOLEAN,
    },
    Mapping: {
      type: Sequelize.BOOLEAN,
    },
    FrontCollision: {
      type: Sequelize.BOOLEAN,
    },
    SideCollision: {
      type: Sequelize.BOOLEAN,
    },
    FrontEdge: {
      type: Sequelize.BOOLEAN,
    },
    BackEdge: {
      type: Sequelize.BOOLEAN,
    },
    GasSensor: {
      type: Sequelize.BOOLEAN,
    },
    TemperatureSensor: {
      type: Sequelize.BOOLEAN,
    },
    HumiditySensor: {
      type: Sequelize.BOOLEAN,
    },
    TiltSensor: {
      type: Sequelize.BOOLEAN,
    },
    PhotoresistorSensor: {
      type: Sequelize.BOOLEAN,
    },
    FlameSensor: {
      type: Sequelize.BOOLEAN,
    },
    SmokeSensor: {
      type: Sequelize.BOOLEAN,
    },
    GPS: {
      type: Sequelize.BOOLEAN,
    },
    LeftFanSpeed: {
      type: Sequelize.INTEGER,
    },
    LeftFanControl: {
      type: Sequelize.BOOLEAN,
    },
    TopFanSpeed: {
      type: Sequelize.INTEGER,
    },
    TopFanControl: {
      type: Sequelize.BOOLEAN,
    },
    RightFanSpeed: {
      type: Sequelize.INTEGER,
    },
    RightFanControl: {
      type: Sequelize.BOOLEAN,
    },
    CamRED: {
      type: Sequelize.INTEGER,
    },
    CamGREEN: {
      type: Sequelize.INTEGER,
    },
    CamBlue: {
      type: Sequelize.INTEGER,
    },
  });

  return sequelizeModel;
};
