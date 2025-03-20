const API_URL = "http://localhost:5000/api/auth"; // Your backend URL

// Register a new user
export const registerUser = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Registration failed" };
  }
};

// Login a user
export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    return { error: "Login failed" };
  }
};
