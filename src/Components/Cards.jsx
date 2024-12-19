import React, { useState } from 'react';

function Cards(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});
  const [formData, setFormData] = useState(props.formData);

  // Handle Edit Button Click
  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentEdit({ ...formData[index], index });
  };

  // Handle Edit Form Submission
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...formData];
    updatedData[currentEdit.index] = {
      name: currentEdit.name,
      username: currentEdit.username,
      desc: currentEdit.desc,
    };
    setFormData(updatedData);
    setIsEditing(false);
  };

  // Handle Delete Button Click
  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  // Handle Input Changes in Edit Mode
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdit({ ...currentEdit, [name]: value });
  };

  return (
    <>
      {isEditing ? (
        <div className="edit-form-container">
          <form
            onSubmit={handleEditSubmit}
            className="w-[70%] sm:w-[50%] md:w-1/2 lg:w-[30%] m-auto flex flex-col gap-2 bg-black rounded-md p-9"
          >
            <input
              className="outline-none p-2 rounded-md w-full"
              type="text"
              name="name"
              value={currentEdit.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
            />
            <input
              className="outline-none p-2 rounded-md w-full"
              type="text"
              name="username"
              value={currentEdit.username}
              onChange={handleChange}
              placeholder="Enter Username"
              required
            />
            <input
              className="outline-none p-2 rounded-md w-full"
              type="text"
              name="desc"
              value={currentEdit.desc}
              onChange={handleChange}
              placeholder="Enter Description"
              required
            />
            <button
              type="submit"
              className="px-3 cursor-pointer bg-yellow-500  py-2 m-auto w-[70%] text-black rounded-md font-semibold"
            >
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 h-full p-4 w-full justify-center overflow-auto">
          {formData.map((item, index) => (
            <div
              key={index}
              className="card max-[400px]:w-[70%] w-[60%] h-fit lg:w-1/4 sm:w-1/3 md:w-1/3 max-[400px]:h-fit bg-base-100 shadow-xl"
            >
              <figure className="p-3">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center gap-0">
                <h2 className="card-title">{item.name}</h2>
                <h2 className="card-title">{item.username}</h2>
                <p>{item.desc}</p>
                <div className="card-actions flex justify-between w-full mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cards;
