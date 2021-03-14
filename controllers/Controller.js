const shortid = require("shortid");
const validateUrl = require("valid-url");

module.exports = {
    async index(req, res, next) {

        const {url} = req.body
       
        const urlCode = shortid.generate();

        if(validateUrl.isUri(url)){
            try{
                    const shortedUrl = 'https://my.url' + "/" + urlCode;
                    res.status(200).json({ shortUrl: shortedUrl })
                
            }catch(err){
                console.error(err.message);
                return res.status(500).json("Internal Server error " + err.message);
            }
        
        }else{
            res.status(400).json("Invalid URL. Please enter a vlaid url for shortening.");
        }    
    },
}