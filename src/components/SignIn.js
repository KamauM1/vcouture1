import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'; // Import your CSS for styling
import { Alert } from 'react-bootstrap'; // Using Bootstrap for styling and alerts
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'client', // Default to 'client' role
  });

  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate an API call to authenticate the user (replace with actual API call)
    try {
      const response = await authenticateUser(formData);

      if (response.success) {
        const { role } = formData;

        if (role === 'admin' && response.userRole === 'admin') {
          history.push('/admin-dashboard'); // Redirect to admin dashboard
        } else if (role === 'client' && response.userRole === 'client') {
          history.push('/client-dashboard'); // Redirect to client dashboard
        } else {
          setError('Role-based authentication failed.');
        }
      } else {
        setError('Invalid login credentials.');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
    }
  };

  // Simulated authentication function (replace with your actual API call)
  const authenticateUser = async (formData) => {
    // Simulate an API call to authenticate the user
    // In a real app, you'd send a POST request to your backend with user credentials
    // and receive a response indicating success and user role
    return new Promise((resolve, reject) => {
      // Simulate a delay to mimic an API call
      setTimeout(() => {
        // Replace with your actual authentication logic
        const mockResponse = {
          success: true, // Set to true for successful authentication
          userRole: formData.role, // Set user role based on form data
        };
        resolve(mockResponse);
      }, 1000); // Simulate a delay
    });
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            Role:
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        New user? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
