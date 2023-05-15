import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../../Redux/Reducers/addHouseSlice';

const AddHouse = () => {
  const dispatch = useDispatch();
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
    <section className="add_house">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label htmlFor="city">
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>
        <label htmlFor="image">
          Image:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <label htmlFor="appartment_fee">
          Appointment Fee:
          <input type="text" name="appartment_fee" value={formData.appartment_fee} onChange={handleChange} />
        </label>
        <label htmlFor="description">
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <button type="submit">Add House</button>
      </form>
    </section>
  );
};

export default AddHouse;
