
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  code: string;
  type: 'continent' | 'country' | 'language';
  continentId?: number;
  countryId?: number;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    code: '',
    type: 'continent'
  });
  const [continents, setContinents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
    } catch (error) {
      setMessage('Authentication failed');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/admin/${formData.type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setMessage(`${formData.type} added successfully`);
        setFormData({ name: '', code: '', type: formData.type });
      } else {
        setMessage('Failed to add item');
      }
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as FormData['type'] })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="continent">Continent</option>
                <option value="country">Country</option>
                <option value="language">Language</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Code</label>
              <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {formData.type === 'country' && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Continent</label>
                <select
                  value={formData.continentId}
                  onChange={(e) => setFormData({ ...formData, continentId: Number(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select Continent</option>
                  {continents.map((continent: any) => (
                    <option key={continent.id} value={continent.id}>
                      {continent.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.type === 'language' && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  value={formData.countryId}
                  onChange={(e) => setFormData({ ...formData, countryId: Number(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select Country</option>
                  {countries.map((country: any) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add {formData.type}
            </button>
          </form>

          {message && (
            <div className="mt-4 p-4 rounded-md bg-blue-50 text-blue-700">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
