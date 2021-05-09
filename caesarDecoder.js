const alphabeth = [...Array(26)].map((_, y) => String.fromCharCode(y + 65)).join('');
const caesarDecoder = (letter, shift) => {
  let encoded = letter;
  let address = shift;
  if ( shift<0 ) {
    address = alphabeth.length + shift%alphabeth.length;
  }

  if (alphabeth.indexOf(letter)+1) {
    encoded = alphabeth[(alphabeth.indexOf(letter)+address)%alphabeth.length]
  }
  if (alphabeth.toLowerCase().indexOf(letter)+1) {
    encoded = alphabeth.toLowerCase()[(alphabeth.toLowerCase().indexOf(letter)+address)%alphabeth.length]
  }
  return encoded;
}

module.exports = { caesarDecoder };