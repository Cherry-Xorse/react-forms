export const Form = () => {
  const signup = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(e.target); // Collect form data
    const email = formData.get("email");
    const password = formData.get("password");
    const description = formData.get("description");
    const employmentStatus = formData.get("employmentStatus");
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const favColor = formData.get("favColor");

    console.log("Password:", password);
    console.log("Description:", description);
    console.log("Employment Status:", employmentStatus);
    console.log("Email:", email);
    console.log("Dietary Restrictions:", dietaryRestrictions);
    console.log("Favorite Color:", favColor);
  };

  return (
    <section className="bg-rose-300 mt-10 p-10 items-start shadow-xl">
      <h2 className="text-3xl text-center">Signup Form</h2>
      <form
        className="p-10 flex flex-col gap-3 items-center"
        onSubmit={signup} // Attach the onSubmit handler
      >
        <label>
          Email:
          <input
            className="ml-4 rounded p-1"
            type="email"
            name="email"
            required
          />
        </label>

        <label>
          Password:
          <input
            className="ml-4 rounded p-1"
            type="password"
            name="password"
            required
          />
        </label>

        <label>
          Description:
          <textarea
            className="rounded p-2"
            name="description"
            id="description"
          ></textarea>
        </label>

        <fieldset className="flex flex-col">
          <legend className="text-lg font-semibold">Employment Status</legend>
          <label>
            Employed
            <input type="radio" name="employmentStatus" value="employed" />
          </label>

          <label>
            Unemployed
            <input
              type="radio"
              name="employmentStatus"
              value="unemployed"
              defaultChecked={true}
            />
          </label>
        </fieldset>

        <fieldset className="flex flex-col">
          <legend className="text-lg font-semibold">
            Dietary Restrictions
          </legend>
          <label>
            Vegetarian
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="vegetarian"
            />
          </label>

          <label>
            Vegan
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
          </label>

          <label>
            Gluten-Free
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="glutenFree"
            />
          </label>
        </fieldset>

        <label htmlFor="favColor"> what is your fav color?</label>
        <select className="px-2" name="favColor" id="favColor" defaultValue= "">
          <option value="" disabled  > choose a color </option>
          <option value="red"> RED</option>
          <option value="green">GREEN</option>
          <option value="blue">BLUE</option>
        </select>

        <button
          type="submit" // Set button type to "submit"
          className="p-3 bg-white border rounded-xl ring-2 ring-fuchsia-500"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
};
