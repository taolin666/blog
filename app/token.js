let token
async function getToken() {
  return (token || '');
}

async function  addToken(newToken) {
  token = newToken;
  return token;
}
exports.getToken = getToken;
exports.addToken = addToken;