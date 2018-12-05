const bcryptjs = require('bcrypt');
const User = require('../models/User');
const errorHandler = require('../utils/errorHandler');


/**
 * Login user
 * @param {*} req 
 * @param {*} res 
 */
module.exports.login = async (req, res) => {
    console.log('login', req.body);
    res.render('auth/login', {
        title: 'Вход на сайт',
        meta: {
            description: 'Вход на сайт',
            keywords: 'Вход на сайт'
        }
    });
    // const candidate = await User.findOne({
    //     email: req.body.email
    // })

    // if (candidate) {
    //     const passwordResult = bcryptjs.compareSync(req.body.password, candidate.password)
    //     if (passwordResult) {

    //     } else {
    //         res.status(401).json({
    //             message: 'Логин или пароль не совпадают'
    //         })
    //     }
    // } else {
    //     res.status(404).json({
    //         message: 'Пользователь не зарегистрирован'
    //     })
    // }
}

module.exports.signup = (req, res) => {
    console.log('Body', req.body);
    if (req.body){
        res.status(200).send({message: 'Success'});
    }
}

/**
 * Registration users
 * @param {*} req 
 * @param {*} res 
 */
module.exports.registration = (req, res) => {
    
    res.render('auth/registration', {
        title: 'Регистрация',
        meta: {
            description: 'Регистрация',
            keywords: 'Регистрация'
        }
    });

}