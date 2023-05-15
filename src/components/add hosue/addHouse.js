import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createHouse } from '../redux/houseSlice';

const AddHouse = () => {
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    image: '',
    appartment_fee: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createHouse(formData));
    setFormData({
      name: '',
      city: '',
      image: '',
      appartment_fee: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <label>
        Appointment Fee:
        <input type="text" name="appartment_fee" value={formData.appartment_fee} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <button type="submit">Add House</button>
    </form>
  );
};

export default AddHouse;
