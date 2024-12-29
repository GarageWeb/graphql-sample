const { Enumerable } = require('./enumerable.js');

(async () => {

    // Contract address as parameter
    const enumerable = new Enumerable('0x8e7C7f0DF435Be6773641f8cf62C590d7Dde5a8a');

    const result1 = await enumerable.totalSupply();
    console.log('\nenumerable.totalSupply()')
    console.log(result1);

    const result2 = await enumerable.tokenOfOwnerByIndex('0x8D4B49Bae8dc470AFF44FFaA75c7dE7f76c88A7E', 1);
    console.log('\nenumerable.tokenOfOwnerByIndex(\'0x8D4B49Bae8dc470AFF44FFaA75c7dE7f76c88A7E\', 1)')
    console.log(result2);

    const result3 = await enumerable.tokenByIndex(25);
    console.log('\nenumerable.tokenByIndex(25)')
    console.log(result3);

    const result4 = await enumerable.allTokens();
    console.log('\nenumerable.allTokens()')
    console.log(result4, result4.length);

})()

