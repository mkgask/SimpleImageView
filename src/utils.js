
const KB = 1024;
const MB = KB * KB;
const GB = MB * KB;

module.exports = {
    fileSizeString: (filesize) => {
        if (GB < filesize) {
            return Math.round(filesize / GB) + ' GB';
        }

        if (MB < filesize) {
            return Math.round(filesize / MB) + ' MB';
        }

        if (KB < filesize) {
            return Math.round(filesize / KB) + ' KB';
        }
    }
}
