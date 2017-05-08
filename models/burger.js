// Replacing your MySQL Burger model with a Sequelized equivalent.

const Burger = {
    // find all burgers
    selectAllDevoured: callback => {
        orm.selectAllDevoured(res => {
            callback(res);
        })
    },
    selectAllNotDevoured: callback => {
        orm.selectAllNotDevoured(res => {
            callback(res);
        })
    },

    //Insert a particular burger into the not-devoured section
    insertBurger: burger => {
        orm.insertOne(burger, data => {
            console.log("BURGER WAS INSERTED");
        });
    },

    //Update a particular burger such that it is devoured
    updateBurger: burger => {
        orm.updateOne(burger, data => {
            console.log('This is your data from burger.js', data);
        });
    }

};

module.exports = { Burger: Burger };
