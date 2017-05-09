// Replacing your MySQL Burger model with a Sequelized equivalent.
module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define('Burger', {
      // burger_name VARCHAR(500) not null,
      burger_name: DataTypes.STRING,
      // eaten boolean,
      eaten: DataTypes.BOOLEAN,
      // time_created TIMESTAMP,
      time_created: DataTypes.DATE
    }, {
    timestamps: false
});
    console.log(`typeof ${Burger}`);    
    return Burger;

};