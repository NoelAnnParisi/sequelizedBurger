const { Burger } = require('../models/burger');

exports.getHome = (req, res) => {
    Burger.selectAllNotDevoured((data) => {
    	console.log(data);
        const hbsObject = {
            burger: data
        }
        res.render('index', hbsObject);
    });
};
exports.postHome = (req, res) => {
    const newBurger = req.body.newBurger;
    console.log("this is your new Burger:", newBurger);
    Burger.insertBurger(newBurger);
    res.redirect('/'); 
};
exports.deleteBurger = (req, res) => {
    const updateThis = req.body.updateThis;
    console.log('this is the updateThis variable:', updateThis);
    Burger.updateBurger(updateThis);
    res.redirect('/');
};