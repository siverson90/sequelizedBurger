module.exports = function(sequalize, DataTypes) {
  var Customer = sequalize.define("Customer", {
    name:{
      type: DataTypes.STRING
    } 
  });

  Customer.associate = function(models) {
   
    Customer.belongsTo(models.Burger, {
    });
  };
  return Customer;
};