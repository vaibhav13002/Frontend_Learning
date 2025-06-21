/// Array to set
const arr = ["pizza","paasta","pizza","rissoto"];
console.log(arr);
const arrUnique = new Set(arr);
console.log(arrUnique);

// Set to array using spread
const newArr = [...arrUnique];
const newArr2 = [...new Set(arr)];
console.log(newArr);
console.log("Another format: "+ newArr2);
console.log(typeof newArr2);

///Methods
console.log(arrUnique.has("pizza"));
// console.log(arrUnique.clear());
arrUnique.delete("pizza");
arrUnique.add("Sauces")
console.log(arrUnique.size);

//////
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//ES2025 New methods

const common = italianFoods.intersection(mexicanFoods);
console.log(common);
const allFood = italianFoods.union(mexicanFoods);
console.log(allFood);

// Only return unique in set1 , no common elements
const diff = italianFoods.difference(mexicanFoods);
console.log(diff);

/// opposite of intersection   (All-intersection)
const uniqueItalionAndMexicanFood = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalionAndMexicanFood);

// kya set 1 puri tarah different h set 2 se , not a single element are common?
console.log(italianFoods.isDisjointFrom(mexicanFoods));