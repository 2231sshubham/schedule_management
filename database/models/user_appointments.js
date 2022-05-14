'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Appointments, { foreignKey: 'appointment_id', as: 'appointment'})
    }
  };
  User_appointments.init({
    userAppointment_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    user_name: DataTypes.STRING,
    appointment_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_appointments',
  });
  return User_appointments;
};