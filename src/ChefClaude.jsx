import { useState } from "react";

export const ChefClaude = () => {
  const [ingredients, setingredients] = useState([]);
  const ingredientsListItems = ingredients.map((ingredients) => (
    <li key={ingredients}> {ingredients}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    // const newIngredient = new FormData(event.currentTarget);
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredients");

    setingredients((prevIngredients) => [...prevIngredients, newIngredient]);
    // event.target[0].value = "";
    console.log(" submitting event");
    console.log(newIngredient);
  }
  return (
    <main className="mt-10 p-10 shadow-xl  mx-40">
      <form className="mt-20  flex gap-2 py-10 " onSubmit={handleSubmit}>
        <input
          className="p-2 rounded  border-2 border-e-stone-950  border-solid shadow-xl"
          type="text"
          placeholder="e.g oregano"
          name="ingredients"
        />
        <button className="p-2 rounded border-2 border-stone-700 border-solid shadow-xl bg-black text-white">
          {" "}
          + Add Ingredients{" "}
        </button>
      </form>

      {ingredients.length > 0 && (
        <div>
          <h2 className="text-xl text-zinc-950 font-bold">
            Ingredients on hand:
          </h2>
          <ul className="m-4 "> {ingredientsListItems}</ul>

          {ingredients.length > 3 && (
            <section className="bg-gray-100 flex gap-4 p-10  content-between mt-10 justify-between rounded-xl">
              <div className="border-solid border-spacing-2 rounded-xl">
                <h3>ready for a recipe </h3>
                <p className="text-gray-400">
                  Generate a recipe from your list of ingredients
                </p>
              </div>
              <div className=""></div>
              <button className="bg-red-400 p-2 text-white rounded-lg font-semibold">
                Get a recipe
              </button>
            </section>
          )}
        </div>
      )}

      {/* recommended recipe section */}

      <section className="mt-10">
        <h2 className="text-xl text-zinc-950 font-bold">
          Recommended Recipes:
        </h2>
        {/* recipe container */}
        <article>
          <p>
            Based on the ingredients available, I would recommend a delicious{" "}
            <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
          </p>
          <h3>Beef Bolognese Pasta</h3>
          <br />
          <strong>Ingredients:</strong>
          <ul>
            <li>1 lb. ground beef</li>
            <li>1 medium onion, finely chopped</li>
            <li>2 cloves garlic, minced</li>
            <li>1 can (14 oz) diced tomatoes</li>
            <li>2 tbsp tomato paste</li>
            <li>1/2 cup beef stock</li>
            <li>1 tsp dried oregano</li>
            <li>1 tsp dried basil</li>
            <li>Salt and pepper, to taste</li>
            <li>1 lb. pasta of your choice (e.g., spaghetti or penne)</li>
            <li>Parmesan cheese, grated (optional)</li>
          </ul>
          <br />
          <strong>Instructions:</strong>
          <ol>
            <li>
              Bring a large pot of salted water to a boil. Cook the pasta
              according to the package instructions, then drain and set aside.
            </li>
            <li>
              In a large skillet over medium heat, brown the ground beef until
              fully cooked. Drain excess fat, if needed.
            </li>
            <li>
              Add the chopped onion and garlic to the skillet and sauté until
              softened, about 3-5 minutes.
            </li>
            <li>
              Stir in the diced tomatoes, tomato paste, and beef stock. Mix
              well.
            </li>
            <li>
              Add the oregano, basil, salt, and pepper. Let the sauce simmer for
              15-20 minutes, stirring occasionally.
            </li>
            <li>
              Toss the cooked pasta with the Bolognese sauce until well coated.
            </li>
            <li>
              Serve hot, garnished with grated Parmesan cheese, if desired.
            </li>
          </ol>
        </article>
      </section>
    </main>
  );
};
