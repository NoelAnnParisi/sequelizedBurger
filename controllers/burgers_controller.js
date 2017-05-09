const db = require('../models');
// query for all burgers
const findAll = (req, res) => {
    db.Burger.findAll({}).then((burgerData) => {
         const hbsObject = {
            burger: burgerData
        }
        res.render('index', hbsObject);
    });
}
// add a burger
const postBurger = (req, res) => {
    const newBurger = req.body.newBurger;
    db.Burger.create({
        burger_name: newBurger,
        eaten: false
    }).then((data) => {
        console.log(data.eaten);
        res.redirect('/');
    })
}
// update a burger's eaten value to true
const eatBurger = (req, res) => {
    const eatThis = req.body.updateThis;
    console.log(`eatThis variable: ${eatThis}`);
    db.Burger.update({
        eaten: true
    }, {
        where: {
            id: eatThis
        }
    }).then((data) =>{
        res.redirect('/');
    });
};

module.exports = {
    findAll: findAll,
    postBurger: postBurger,
    eatBurger: eatBurger
}