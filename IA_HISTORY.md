# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** Axel Figueredo
**Fecha:** 24/04/2026

---

## Prompt 1

### Momento del proceso

```
<!--
  pront usado en el segundo commit: cuando tenia que remplazar los divs y span por etiquetas semanticas, remplazar falsos botones y corregir paleta de colores (ademas de haber separado en un documento style.css la parte del styleen html).
  
-->
```

### Lo que le pedí a la IA

```
<!--
 Analisa el archivo "index.html" que te pase y Reemplazar todos los <div> y <span> estructurales por etiquetas semánticas: <header>, <nav>, <main>, <section>, <article>, <footer>, etc.
 Agregar alt descriptivo a todas las imágenes.
 Asociar cada campo del formulario con su <label> correspondiente (usando for e id).
 Reemplazar los falsos botones (<div class="btn">) por elementos <button>.
 Corregir la paleta de colores para cumplir WCAG AA (contraste mínimo 4.5:1 para texto normal).
 Agregar lang="es" al <html> y <meta name="viewport"> en el <head>
 todo en un codigo limpio.
-->
```

### Análisis del resultado obtenido

```
<!--
 La ia retorno un codigo limpio cumpliento la primera parte del ejercicio, para comprobarlo; copie y pegue en vscode y lo analice en la pagina; en la consola no mostraba ningun problema y la estructuracion estaba correcta.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
 No tuve que corregir nada, quizas me retorno el codigo limpio y funcional porque tengo gemini pro, ademas de lo claro y especifico que fue el pront, tambien se que el codigo retornado no contenia errores porque no mostraba ningun error en consola y ademas se acoplaba bien con la parte "style.css" 
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Pront usado en el cuarto commit: lo use para implementar la parte del "script.js" con las variables y funciones correspondientes
-->
```

### Lo que le pedí a la IA

```
<!--
 analiza el siguiente archivo "index.html" y crea la parte "script.js" con las siguientes indicaciones;
 Declarar las stats del personaje (name, characterClass, level, health, mana, attack, defense) usando const o let según corresponda, nunca usar var. y Funciones a implementar:

 Función	Tipo	Qué debe hacer
 calculateDamage(attack, defense)	Declarada	Retornar la diferencia entre ataque y defensa. Si el resultado es negativo, retornar 0.
 • attack: valor numérico de ataque del personaje.
 • defense: valor numérico de defensa del enemigo.
 isAlive(health)	Arrow function	Retornar true solo si health es estrictamente mayor a 0. Valores negativos también retornan false.
 • health: puntos de vida actuales del personaje.
 canCastSpell(currentMana, spellCost, isStunned)	Arrow function	Retornar true solo si hay mana suficiente y el personaje no está aturdido.
 • currentMana: mana disponible actualmente.
 • spellCost: costo en mana del hechizo a lanzar.
 • isStunned: booleano que indica si el personaje está aturdido.
 getPresentation(name, characterClass, level)	Declarada	Retornar un string con el formato exacto: 'Nombre — Clase (Nivel N)'.
 Ej: 'Zara Darkbane — Hechicera (Nivel 7)'
 • name: nombre del personaje.
 • characterClass: clase del personaje (guerrero, mago, etc.).
 • level: nivel actual del personaje.
-->
```

### Análisis del resultado obtenido

```
<!--
  La IA arrojo un resultado excelente con codigo limpio y estructurado auque tuve un problema externo al codigo en si generado porla IA
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
 tuve que agregar manualmente "<script src="script.js"></script>" debajo de todo el codigo por encima del "</body>" porque no me lo tomaba en consola, primero crei que fue un error de codigo, pero al pedirle que analice todo el codigo y ver que estaba inpecable, me dio la sugerencia del "<script src="script.js"></script>" la cual me habia olvidado de agregar
-->
```

---

## Reflexión final

```
<!--

  Aunque la IA no cometio errores, si las cometi yo, al no especificar por ejemplo de que iba a trabajar de antemano con otros lenguajes como javascrip; ademas de destacar que resolvió sin problemas al pedido de resolucion/creacion de codigo. para finalizar, tomnando este examen me di cuenta que no tenia idea de como comunicarme con la IA, una vez que comprendi no solo lo que tenia que hacer,sino el como; todo se fue despejando por si solo, el pedir de forma estructurada y completa al codigo, hizo que mi trabajo solo sea verificar la funcionalidad del codigo y ensamblar una vez terminado.
-->
```
