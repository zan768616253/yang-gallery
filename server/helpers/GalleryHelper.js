const fs = require('fs')
const path = require('path');

module.exports = class GalleryHelper {
    constructor(gallery) {
        this.gallery = gallery;
    }

    getFirstN (count) {
        const dir = path.join(__dirname, '../..', 'dist/gallery/'+ this.gallery);
        let files = fs.readdirSync(dir)
        files = files.map(file => {
            return {
                original: 'gallery/' + this.gallery + '/' + file,
                description: file.replace(/.[^/.]+$/, ''),
                create: fs.statSync(dir + '/' + file).mtime.getTime()
            }
        }).sort((a, b) => {
            return a.time - b.time
        }).slice(0, count)

        return files
    }
}