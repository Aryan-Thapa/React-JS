import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleOnSubmit(data) {
    // API call simulate
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitting the form...");
    console.log("Data : ", data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <label htmlFor="firstName">Name: </label>
        <br />
        <input
          type="text"
          {...register("firstName", {
            required: { value: true, message: "First Name is required" },
            minLength: {
              value: 4,
              message: "First Name must be atleast 4 characters",
            },
          })}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}

        <br />

        <label htmlFor="lastName">Last Name: </label>
        <br />
        <input
          type="text"
          {...register("lastName", {
            required: { value: true, message: "Last Name is required" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "last Name must be a alphabet",
            },
            minLength: {
              value: 4,
              message: "Last Name must be atleast 4 characters",
            },
          })}
        />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
