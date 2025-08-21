/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

// Инициализируем массивы для результатов
const resultUnique = [];
const uniqueInT2 = [];

// Находим пересечение с помощью for...of
for (const pizza of competitorPizzas) {
    for (const myPizza of myPizzasT1) {
        if (pizza === myPizza && !resultUnique.includes(pizza)) {
            resultUnique.push(pizza);
        }
    }
}

// Проверяем уникальные элементы в myPizzasT2
for (const pizza of myPizzasT2) {
    let isUnique = true;
    for (const compPizza of competitorPizzas) {
        if (pizza === compPizza || pizza === null) {
            isUnique = false;
            break;
        }
    }
    if (isUnique && !uniqueInT2.includes(pizza)) {
        uniqueInT2.push(pizza);
    }
}

// Проверяем наличие null с использованием spread
const allPizzas = [...competitorPizzas, ...myPizzasT1, ...myPizzasT2];
let resultNull = false;
for (const pizza of allPizzas) {
    if (pizza === null) {
        resultNull = true;
        break;
    }
}

// Выводим результат
console.log('resultUnique:', resultUnique); // ['Peperoni', 'Diablo']
console.log('uniqueInT2:', uniqueInT2);    // [] (нет уникальных)
console.log('resultNull:', resultNull);    // false



// let resultUnique;
// let resultNull;

// export { resultNull, resultUnique };
