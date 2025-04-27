// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
const newArr = deck.map((value) => value *2);
  return newArr
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {

  //I wrote this original solution, but it can be streamlined further
  
 const newDeckWith3s = []
  for (let index = 0; index < deck.length; index++) {
    const card = deck[index];    
    if(card === 3){
      const arrWith3 = [3, 3, 3]
      newDeckWith3s.push(...arrWith3)
    } else {
      newDeckWith3s.push(card)
    }
  }

  return newDeckWith3s 

  // The below is a more streamlined solution:
  /*
  return deck.reduce((out, card) => {
    if (card === 3) {
      // pushes three 3’s into the accumulating array
      out.push(3, 3, 3);
    } else {
      // pushes the single non-3 card
      out.push(card);
    }
    // return the accumulator for the next iteration
    return out;
  }, []);
  */ 

}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {

  return deck.splice(4,2,0)  

}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {

  if(deck.length<2){
    return deck
  }
  const firstElement = deck[0]
  const lastElement = deck[deck.length - 1]

  deck.splice(0, 1)
  deck.splice(deck.length - 1, 1)
  deck.splice((deck.length) / 2, 0, lastElement, firstElement)

  return deck;

  /* 
  So after implementing my first solution, I looked for a more
  effective approach (as above I keep calling slice 3 times):

  const first = deck[0];
  const last  = deck[deck.length - 1];
  const middle = deck.slice(1, -1);

  const midIndex = Math.floor(middle.length / 2);
  return [
    ...middle.slice(0, midIndex),
    last, first,
    ...middle.slice(midIndex)
  ];
  */
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {

  return deck.filter((value)=>value===2)

}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  
  return deck.sort((a,b)=>{
    if(a < b){
      return -1
    } else if( a > b){
      return 1
    } else
    {return 0}
  })

}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {

  return deck.reverse()

}
