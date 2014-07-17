function me(ra, ho, nc) {
    var q = ho + nc;
    var al = "";
    var pu = "";
    ra = ra.substr((0x3e8 % 0207 & 65), ra.length - (0x3e8 % 01546 & 95));
    ra = ra.split("").reverse().join("");
    var rn = ra.length;
    for (var uy = (0x3e8 * 0216 & 73); uy < rn; ++uy) {
        if (uy % q == q - (0x3f3 * 0673 & 83)) {
            al = ra.substr(rn - uy - (0x3e8 % 0153 & 83), q);
            al = al.charAt(q - (0x3f3 * 0351 & 65)) + al.substr(((0x3fe | 0315) % 73), q - (0x3f3 * 01726 & 95)) + al.charAt((0x3e8 % 0144 & 89));
            al = al.substr(((0x3e8 | 01636) % 73), ho);
            pu = pu + al;
        }
    }
    var zp = rn % q;
    if (zp != (0x3e8 * 0324 & 69)) {
        al = ra.substr(((0x3e8 | 0315) % 67), zp);
        if (al.length != ((0x3e8 | 0306) % 67)) {
            al = al.charAt(zp - (0x3e8 % 01107 & 67)) + al.substr((0x3e8 % 01125 & 73), zp - (0x3fe * 0277 & 55)) + al.charAt(((0x3e8 | 01701) % 77));
        }
        al = al.substr(((0x3e8 | 0351) % 91), ho);
        pu = pu + al;
    }
    return pu;
};

var fs = require('fs');
var content = fs.readFileSync('./ua.js').toString();
console.log(content);

/\dada/.g
qr('XREgexxpd', 4, 1)