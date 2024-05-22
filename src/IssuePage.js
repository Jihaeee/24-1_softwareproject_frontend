import React, { useState } from 'react';

const NewTicketForm = () => {
  const [title, setTitle] = useState('');
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [priority, setPriority] = useState('');
  const [component, setComponent] = useState('component1');
  const [email, setEmail] = useState('');
  const [assign, setAssign] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="userName">User Name:</label>
      <input
        type="text"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label htmlFor="type">Type:</label>
      <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="defect">defect</option>
        {/* add more options here */}
      </select>
      <label htmlFor="priority">Priority:</label>
      <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="major">major</option>
        {/* add more options here */}
      </select>
      <label htmlFor="component">Component:</label>
      <select id="component" value={component} onChange={(e) => setComponent(e.target.value)}>
        <option value="component1">component1</option>
        {/* add more options here */}
      </select>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="assign">Assign:</label>
      <input
        type="text"
        id="assign"
        value={assign}
        onChange={(e) => setAssign(e.target.value)}
      />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default NewTicketForm;