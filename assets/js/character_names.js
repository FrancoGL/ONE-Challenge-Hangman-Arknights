export let lettersContainer = document.getElementById('letters-container');
let classText = document.getElementById('class-text');
let factionText = document.getElementById('faction-text');
let span_character

const generate_character = (character_name, character_class, character_faction) => {
  
  return {
    name: character_name,
    class: character_class,
    faction: character_faction
  }
}

export const generate_letters = (collection) => {
  const collection_to_array = Array.from(collection)

  let random_value = Math.round(Math.random() * (collection_to_array.length - 1));
  console.log("r: " + random_value)
  let get_character = collection_to_array[random_value]


  let characters_name = Array.from(get_character.name)

  for (const element of characters_name) {

    span_character = document.createElement('span')
    span_character.classList.add("letters__character")
    span_character.innerHTML = " "
    lettersContainer.appendChild(span_character)
    console.log(element);
  }
  characters_name = characters_name.map((char)=> {return char.toUpperCase()})
  console.log(characters_name)

  set_clues(get_character)
  return characters_name;
}

const set_clues = (collection) => {
  classText.innerHTML = collection.class
  factionText.innerHTML = collection.faction
}

export const characters_group = new Set();

characters_group.add(generate_character("Hoshiguma", "Defender", "Lungmen"))
characters_group.add(generate_character("Exusiai", "Sniper", "Penguin Logistics"))
characters_group.add(generate_character("Ifrit", "Caster", "Rhine Lab"))
characters_group.add(generate_character("SilverAsh", "Guard", "Kjerag"))
characters_group.add(generate_character("Siege", "Vanguard", "Glasgow"))

console.log(characters_group.size)

