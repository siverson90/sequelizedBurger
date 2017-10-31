module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    }
  });
  return Burger;
};
