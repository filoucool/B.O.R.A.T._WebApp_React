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
    Fspeed: {
      type: Sequelize.INT,
    },
    Bspeed: {
      type: Sequelize.INT,
    },
    Tspeed: {
      type: Sequelize.INT,
    },
    Acceleration: {
      type: Sequelize.INT,
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
      type: Sequelize.INT,
    },
    LeftFanControl: {
      type: Sequelize.BOOLEAN,
    },
    TopFanSpeed: {
      type: Sequelize.INT,
    },
    TopFanControl: {
      type: Sequelize.BOOLEAN,
    },
    RightFanSpeed: {
      type: Sequelize.INT,
    },
    RightFanControl: {
      type: Sequelize.BOOLEAN,
    },
    CamRED: {
      type: Sequelize.INT,
    },
    CamGREEN: {
      type: Sequelize.INT,
    },
    CamBlue: {
      type: Sequelize.INT,
    },
  });

  return sequelizeModel;
};
