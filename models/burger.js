module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    }
  });

  Burger.associate = function(models) {

    Burger.hasOne(models.Customer, {
    });
  };
  return Burger;
};