'use client';

import { useState, FormEvent } from 'react';

interface PasswordGateProps {
  onAuthenticated: () => void;
}

export default function PasswordGate({ onAuthenticated }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        onAuthenticated();
      } else {
        setError('Invalid password. Please try again.');
        setPassword('');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm w-full max-w-sm p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-1.5 h-6 bg-[#009DDC] rounded-sm block" />
            <span className="text-gray-900 font-bold text-base tracking-tight">
              world relief
            </span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 text-center">
            Content Versioner
          </h1>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Internal staff tool
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access password"
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009DDC] focus:border-transparent transition-shadow"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full py-2.5 px-4 bg-[#009DDC] text-white text-sm font-semibold rounded-lg hover:bg-[#007fb5] focus:outline-none focus:ring-2 focus:ring-[#009DDC] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Access'}
          </button>
        </form>
      </div>
    </div>
  );
}
