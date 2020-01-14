message = "javascript"

// "javascript"
"m".charCodeAt(0) + 3
// 112
String.fromCharCode(112)
// "p"
function crypt(char) { return String.fromCharCode(char.charCodeAt(0) + 3); }
// undefined
message.split('')
// (10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
message.split('').map(crypt)
// (10) ["m", "d", "y", "d", "v", "f", "u", "l", "s", "w"]
message.split('').map(crypt).join('')
// "mdydvfulsw"