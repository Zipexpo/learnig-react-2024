import { useState } from "react";

export default function NewEventHolder({onAddEvent}){
    // Step 1: Define state variables to track input values
  const [formData, setFormData] = useState({
    name: '',
    endDate: ''
  });

  // Step 2: Handle input change to update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = (e)=>{
        e.preventDefault();
        onAddEvent(formData);
    }
    return <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name}
          onChange={handleInputChange}/>
        <input name="endDate" value={formData.endDate}
          onChange={handleInputChange}/>
        <button type="submit">Add event</button>
    </form>
}