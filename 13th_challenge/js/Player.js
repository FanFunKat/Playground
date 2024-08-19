class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.token = this.createTokens(21); // 'this' - indicating that the method is a member of the Player class.
  }

  /**
   * Creating token objects for player
   * @param {*integer} num - number of tokens objects to be created
   * @returns - array of token objects
   */

  createTokens(num){
    const newTokens = []

    for (let i = 0; i < num; i++) {
        let token = new Token(i, this)
        newTokens.push(token)
    }

    return newTokens
  }

  /**
   * Gets all tokens that haven't been dropped.
   * @return {array} Array of unused tokens.
   */

  get unusedTokens(){
    return this.token.filter(token => !token.dropped)
  }

  /**
   * Gets the active token by returning the first token in the array of unused tokens.
   * @return {Object} First token object in the array of unused tokens.
   */

  get activeToken(){
    return this.unusedTokens[0]
  }

  /**
 * Check if a player has any undropped tokens left
 * @return {Boolean}
 */

  checkTokens(){
    return this.unusedTokens.length == 0? false : true;
    }
}