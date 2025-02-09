export default `import React from "react";
import { useForm, useFieldArray, Controller } from "./src";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful }
  } = useForm({ defaultValues: { something: "anything" } });

  const onSubmit = (data) => {
    console.log(data);
    // with 7.22.0 you can reset here without useEffect
    // reset({ ...data })
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ something: '' });
    }
  }, [formState, submittedData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("something")} />
      <input type="submit" />
    </form>
  );
}
`
