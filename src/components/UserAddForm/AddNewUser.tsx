// AddNewUser Component
import React, { useState } from 'react';
import { Person } from './types'; // Assuming the type is defined in types.ts
import styles from './AddNewUser.module.css';

type AddNewUserProps = {
  addUser: (user: Person) => void;
};

function AddNewUser({ addUser }: AddNewUserProps) {
  const [formData, setFormData] = useState<Person[]>({
    id: 0,
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    age: 0,
    job: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevUsers) => ({
      ...prevUsers,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(formData); 
    setFormData({
      id: 0,
      first_name: '',
      last_name: '',
      gender: '',
      email: '',
      age: 0,
      job: '',
      country: '',
    });
  };

  return (
    <div>
      <h1 className={styles.Header}>Add New User</h1>
      <form className={styles.UserForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <select
          name="gender"
          value={formData.gender}
          className={styles.GenderSelect}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-binary">Non-binary</option>
          <option value="Genderqueer">Genderqueer</option>
          <option value="Polygender">Polygender</option>
          <option value="Bigender">Bigender</option>
          <option value="Agender">Agender</option>
        </select>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={formData.age === 0 ? '' : formData.age} 
          placeholder="Age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="job"
          value={formData.job}
          placeholder="Job"
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          placeholder="Country"
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddNewUser;
