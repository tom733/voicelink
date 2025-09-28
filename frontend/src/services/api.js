const API_BASE_URL = 'http://localhost:8000';

class ApiService {
  
  // Register new user
  async registerUser(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          password: userData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Registrierung fehlgeschlagen');
      }

      return { success: true, user: data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Login user
  async loginUser(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Login fehlgeschlagen');
      }

      return { success: true, user: data.user, message: data.message };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Get all users (for admin/dashboard)
  async getAllUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Fehler beim Laden der Benutzer');
      }

      return { success: true, users: data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Get user by ID
  async getUserById(userId) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Benutzer nicht gefunden');
      }

      return { success: true, user: data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

export default new ApiService();