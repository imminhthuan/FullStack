
import db from '../models/index';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // tìm tất cả user trong user
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.Console(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('text/about.ejs')
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}