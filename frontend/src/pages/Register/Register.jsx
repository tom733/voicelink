import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../services/api';

const Register = () => {
  const [registerData, setRegisterData] = useState({ 
    name: '', 
    email: '', 
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setRegisterData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!registerData.name.trim()) {
      setError('Name ist erforderlich');
      return false;
    }
    if (!registerData.email.trim()) {
      setError('E-Mail ist erforderlich');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      return false;
    }
    if (registerData.password.length < 6) {
      setError('Passwort muss mindestens 6 Zeichen lang sein');
      return false;
    }
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwörter stimmen nicht überein');
      return false;
    }
    return true;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError('');

    try {
      // Call Backend API
      const result = await ApiService.registerUser({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password
      });
      
      if (result.success) {
        // Show success message
        setSuccess(true);
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login', { 
            state: { 
              message: 'Registrierung erfolgreich! Sie können sich jetzt anmelden.' 
            }
          });
        }, 2000);
      } else {
        setError(result.error);
      }
      
    } catch (error) {
      setError('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Registrierung erfolgreich!
            </h2>
            <p className="text-gray-600 mb-4">
              Ihr Account wurde erfolgreich erstellt. Sie werden automatisch zur Login-Seite weitergeleitet.
            </p>
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Bei VoiceLink registrieren
          </h2>
          <p className="text-gray-600">
            Erstellen Sie Ihr kostenloses Konto und starten Sie durch
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Vollständiger Name
              </label>
              <input
                id="name"
                type="text"
                value={registerData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Max Mustermann"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                E-Mail-Adresse
              </label>
              <input
                id="email"
                type="email"
                value={registerData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="max@beispiel.com"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Passwort
              </label>
              <input
                id="password"
                type="password"
                value={registerData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
              <p className="text-xs text-gray-500 mt-1">Mindestens 6 Zeichen</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Passwort bestätigen
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={registerData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
                disabled={isLoading}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                Ich akzeptiere die{' '}
                <button className="text-blue-600 hover:text-blue-500">
                  Nutzungsbedingungen
                </button>{' '}
                und{' '}
                <button className="text-blue-600 hover:text-blue-500">
                  Datenschutzerklärung
                </button>
              </label>
            </div>

            <button
              onClick={handleRegisterSubmit}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Registrierung läuft...' : 'Kostenloses Konto erstellen'}
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Bereits ein Konto?{' '}
            <button 
              onClick={handleLoginRedirect}
              className="text-blue-600 hover:text-blue-500 font-medium"
              disabled={isLoading}
            >
              Jetzt anmelden
            </button>
          </p>
          
          <button
            onClick={handleBackToHome}
            className="text-gray-500 hover:text-gray-700 text-sm"
            disabled={isLoading}
          >
            ← Zurück zur Startseite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;