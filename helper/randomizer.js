const RandomName = async ()  => {
    var randomName = "QA ";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
    randomName += possible.charAt(Math.floor(Math.random() * possible.length));
   return randomName;
}

module.exports = {RandomName};