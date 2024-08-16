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
            const token = new Token(i, this)
            newTokens.push(token)
        }

        return newTokens
    }
}