// 1. Declaración de variables (Usamos characterName para evitar errores de scope)
const characterName = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

const isStunned = false;
const fireballCost = 30;

// 2. Funciones

/**
 * Calcula el daño neto.
 */
function calculateDamage(attack, defense) {
    const damage = attack - defense;
    return damage > 0 ? damage : 0;
}

/**
 * Verifica si el personaje tiene vida.
 */
const isAlive = (health) => health > 0;

/**
 * Determina si se puede lanzar un hechizo.
 */
const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};

/**
 * Genera la cadena de texto de presentación.
 * IMPORTANTE: El parámetro se llama 'name' de forma interna, 
 * pero al llamarla le pasaremos 'characterName'.
 */
function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}

// 3. Ejecución y resultados en consola
console.log("--- Ficha de Personaje: Resultados de Lógica ---");

// Aquí pasamos 'characterName' como argumento
console.log("Presentación:", getPresentation(characterName, characterClass, level));

console.log("Daño causado (vs Def 20):", calculateDamage(attack, 20));
console.log("¿Está vivo?:", isAlive(health));
console.log("¿Puede lanzar hechizo?:", canCastSpell(mana, fireballCost, isStunned));