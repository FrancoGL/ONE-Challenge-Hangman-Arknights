import {generate_character} from './utils.js';

export let lettersContainer = document.getElementById('letters-container');

let classText = document.getElementById('class-text');
let factionText = document.getElementById('faction-text');
let span_character

export const generate_letters = (collection) => {

  const COLLECTION_TO_ARRAY = Array.from(collection)

  let random_number = Math.round(Math.random() * (COLLECTION_TO_ARRAY.length - 1));
  
  let getCharacter = COLLECTION_TO_ARRAY[random_number]

  let characterName = Array.from(getCharacter.name)

  generate_space_letters(characterName)

  characterName = characterName.map((char)=> {return char.toUpperCase()})

  set_clues(getCharacter)
  return characterName;
}

const set_clues = (collection) => {
  classText.innerHTML = collection.class
  factionText.innerHTML = collection.faction
}

const generate_space_letters = (characters_name) => {

  for (const element of characters_name) {

    span_character = document.createElement('span')
    span_character.classList.add("letters__character")
    span_character.innerHTML = " "
    lettersContainer.appendChild(span_character)
    
  }
}

export const characters_group = [];

characters_group.push(generate_character("Hoshiguma", "Defender", "Lungmen"))
characters_group.push(generate_character("Exusiai", "Sniper", "Penguin Logistics"))
characters_group.push(generate_character("Ifrit", "Caster", "Rhine Lab"))
characters_group.push(generate_character("SilverAsh", "Guard", "Kjerag"))
characters_group.push(generate_character("Siege", "Vanguard", "Glasgow"))

const words = JSON.parse(localStorage.getItem("words"));

if (words !== null) {
  characters_group.push(...words);
}