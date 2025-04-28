// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export function buildSign(occasion, name) {

  return `Happy ${occasion} ${name}!`

}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export function buildBirthdaySign(age) {

  return `Happy Birthday! What a ${age>=50 ? 'mature':'young'} fellow you are.`

}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {

  return `Congratulations ${name}!\nClass of ${year}`
    
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {

  let signCost = 20;

  for (let index = 0; index < sign.length; index++) {
    signCost+=2    
  }

  return `Your sign costs ${signCost.toFixed(2)} ${currency}.`

  /* 
  The below is an even better approach where I don't use the loop... 
  I didn't think of it initially

  const baseCost    = 20;
  const perCharCost = 2;
  const totalCost   = baseCost + sign.length * perCharCost;

  return `Your sign costs ${signCost.toFixed(2)} ${currency}.`


  */

}
