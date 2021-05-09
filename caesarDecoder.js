const alphabeth = [...Array(26)].map((_, y) => String.fromCharCode(y + 65)).join('');
const caesarDecoder = (letter, shift) => {
  let encoded = letter;
  console.log(encoded, alphabeth);
  if (alphabeth.indexOf(letter)+1) {
    encoded = alphabeth[(alphabeth.indexOf(letter)+shift)%alphabeth.length]
    console.log( encoded, alphabeth.indexOf(letter));
  }
  if (alphabeth.toLowerCase().indexOf(letter)+1) {
    encoded = alphabeth.toLowerCase()[(alphabeth.toLowerCase().indexOf(letter)+shift)%alphabeth.length]
    console.log( encoded, alphabeth.indexOf(letter), letter);
  }
  return encoded;
}

module.exports = { caesarDecoder };