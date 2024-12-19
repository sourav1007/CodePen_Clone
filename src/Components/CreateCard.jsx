import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function CreateCard(props) {
  const alert = useRef();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  function onSubmit(data) {
    props.setFormData((prev) => [...prev, data]);

    
    alert.current.classList.remove("hidden");

    setTimeout(() => {
      alert.current.classList.add("hidden");
    }, 5000);

    reset();
  }

  console.log(props.formData);

  return (
    <div className="flex flex-col h-full">
      <div
        ref={alert}
        className="hidden absolute w-full p-3 bg-[#0080808a] text-white text-center text-xl"
      >
        <h1>Card Created Successfully</h1>
      </div>

     
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[70%] relative sm:w-[50%] md:w-1/2 lg:w-[30%] m-auto flex items-center flex-col gap-2 bg-black rounded-md p-9"
      >
        <input
          className="outline-none p-2 rounded-md w-full"
          type="text"
          placeholder="Enter The name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-sm text-red-600">This field is required</span>
        )}
        <input
          className="outline-none p-2 rounded-md w-full"
          type="text"
          placeholder="Enter description"
          {...register("desc", { required: true })}
        />
        {errors.desc && (
          <span className="text-sm text-red-600">This field is required</span>
        )}
        <input
          className="outline-none p-2 rounded-md w-full"
          type="text"
          placeholder="Enter Username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-sm text-red-600">This field is required</span>
        )}
        <input
          type="submit"
          value="Create"
          className="px-3 cursor-pointer absolute top-[92%] bg-yellow-500 w-1/3 py-2 text-black rounded-md font-semibold"
        />
      </form>
    </div>
  );
}

export default CreateCard;
