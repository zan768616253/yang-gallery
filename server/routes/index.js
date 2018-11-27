const path = require('path');
const router = require('express').Router();

const GalleryHelper = require('../helpers/GalleryHelper')

router
    .get('/gallery/:gallery', (req, res) => {
        const gallery = req.params.gallery
        const galleryHelper = new GalleryHelper(gallery)
        const images = galleryHelper.getFirstN(48)
        res.send({images: images});
    })
    .get('/', (req, res) => {
        const routePath = path.join(__dirname + '..', '..', '..', 'dist/' + 'index.html');
        res.sendFile(routePath);
    })


module.exports = router;