'use client';

import React, { useState } from 'react';

export const GCSChart: React.FC = () => {
  const [eyeScore, setEyeScore] = useState<number | null>(null);
  const [verbalScore, setVerbalScore] = useState<number | null>(null);
  const [motorScore, setMotorScore] = useState<number | null>(null);

  const eyeOpening = [
    { score: 4, response: 'Spontaneous', description: 'Eyes open without stimulation' },
    {
      score: 3,
      response: 'To Verbal Command',
      description: 'Opens eyes when spoken to (not necessarily fully)',
    },
    {
      score: 2,
      response: 'To Pain',
      description: 'Opens eyes only in response to painful stimulus',
    },
    { score: 1, response: 'No Response', description: 'Eyes remain closed despite stimulation' },
  ];

  const verbalResponse = [
    {
      score: 5,
      response: 'Oriented',
      description: 'Oriented to person, place, time. Conversant. Normal speech.',
    },
    {
      score: 4,
      response: 'Confused',
      description: 'Not oriented to time/place but converses. Disoriented speech.',
    },
    {
      score: 3,
      response: 'Inappropriate Words',
      description: 'Uses intelligible words but not organized into conversation. Seems to hear but responds randomly.',
    },
    {
      score: 2,
      response: 'Incomprehensible Sounds',
      description: 'Makes sounds, no recognizable words. Groaning or moaning.',
    },
    {
      score: 1,
      response: 'No Response',
      description: 'No vocalization. Completely unresponsive.',
    },
  ];

  const motorResponse = [
    {
      score: 6,
      response: 'Obeys Commands',
      description: 'Follows commands appropriately. Normal motor function.',
    },
    {
      score: 5,
      response: 'Localizes to Pain',
      description: 'Attempts to remove painful stimulus. Purposeful movement toward pain.',
    },
    {
      score: 4,
      response: 'Withdraws from Pain',
      description: 'Pulls away from painful stimulus. Non-purposeful but protective.',
    },
    {
      score: 3,
      response: 'Abnormal Flexion (Decorticate)',
      description: 'Arms flex at elbow, legs extend. Indicates severe brainstem injury.',
    },
    {
      score: 2,
      response: 'Abnormal Extension (Decerebrate)',
      description: 'Arms and legs extend rigidly. More severe brainstem damage than decorticate.',
    },
    {
      score: 1,
      response: 'No Response',
      description: 'Flaccid. No motor response to any stimulus.',
    },
  ];

  const totalScore = (eyeScore || 0) + (verbalScore || 0) + (motorScore || 0);
  const severity =
    totalScore === 0
      ? null
      : totalScore >= 13
        ? { level: 'MILD', color: 'bg-green-100 border-green-500', range: '13-15' }
        : totalScore >= 9
          ? { level: 'MODERATE', color: 'bg-yellow-100 border-yellow-500', range: '9-12' }
          : { level: 'SEVERE', color: 'bg-red-100 border-red-500', range: '3-8' };

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Glasgow Coma Scale (GCS)</h2>
        <p className="text-gray-600">Standardized assessment of consciousness and neurological status</p>
      </div>

      {/* Three scoring sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Eye Opening */}
        <div className="bg-blue-50 border-2 border-blue-400 rounded p-4">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Eye Opening (E)</h3>
          <p className="text-sm text-gray-700 mb-3">Maximum score: 4</p>
          <div className="space-y-2">
            {eyeOpening.map((item) => (
              <button
                key={item.score}
                onClick={() => setEyeScore(eyeScore === item.score ? null : item.score)}
                className={`w-full p-3 rounded border-2 text-left transition ${
                  eyeScore === item.score
                    ? 'bg-blue-500 border-blue-600 text-white'
                    : 'bg-white border-blue-300 text-gray-900 hover:bg-blue-100'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{item.response}</p>
                    <p className="text-xs opacity-80">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold ml-2">{item.score}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Verbal Response */}
        <div className="bg-green-50 border-2 border-green-400 rounded p-4">
          <h3 className="text-lg font-bold text-green-900 mb-4">Verbal Response (V)</h3>
          <p className="text-sm text-gray-700 mb-3">Maximum score: 5</p>
          <div className="space-y-2">
            {verbalResponse.map((item) => (
              <button
                key={item.score}
                onClick={() => setVerbalScore(verbalScore === item.score ? null : item.score)}
                className={`w-full p-3 rounded border-2 text-left transition ${
                  verbalScore === item.score
                    ? 'bg-green-500 border-green-600 text-white'
                    : 'bg-white border-green-300 text-gray-900 hover:bg-green-100'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{item.response}</p>
                    <p className="text-xs opacity-80">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold ml-2">{item.score}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Motor Response */}
        <div className="bg-purple-50 border-2 border-purple-400 rounded p-4">
          <h3 className="text-lg font-bold text-purple-900 mb-4">Motor Response (M)</h3>
          <p className="text-sm text-gray-700 mb-3">Maximum score: 6</p>
          <div className="space-y-2">
            {motorResponse.map((item) => (
              <button
                key={item.score}
                onClick={() => setMotorScore(motorScore === item.score ? null : item.score)}
                className={`w-full p-3 rounded border-2 text-left transition ${
                  motorScore === item.score
                    ? 'bg-purple-500 border-purple-600 text-white'
                    : 'bg-white border-purple-300 text-gray-900 hover:bg-purple-100'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-sm">{item.response}</p>
                    <p className="text-xs opacity-80">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold ml-2">{item.score}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Total score calculator */}
      <div className={`p-6 rounded-lg border-2 mb-8 text-center ${severity ? severity.color : 'bg-gray-100 border-gray-400'}`}>
        <p className="text-sm font-semibold text-gray-600 mb-2">TOTAL GCS SCORE</p>
        <div className="flex justify-center items-baseline gap-4 mb-4">
          <div className="text-5xl font-bold text-gray-900">{totalScore}</div>
          <div className="text-sm text-gray-700">/15</div>
        </div>

        {severity && (
          <div className="mt-4 pt-4 border-t-2 border-gray-300">
            <p className="text-sm mb-1">
              <span className="font-bold">Severity:</span>
              <span className="text-xl font-bold ml-2">{severity.level}</span>
            </p>
            <p className="text-xs text-gray-600">Range: {severity.range}</p>
          </div>
        )}

        {totalScore > 0 && (
          <button
            onClick={() => {
              setEyeScore(null);
              setVerbalScore(null);
              setMotorScore(null);
            }}
            className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded font-semibold transition"
          >
            Reset
          </button>
        )}
      </div>

      {/* Clinical interpretation */}
      <div className="space-y-4 mb-8">
        {/* Mild TBI */}
        <div className="bg-green-50 border-2 border-green-400 rounded p-4">
          <h3 className="font-bold text-green-900 mb-2">MILD Brain Injury (GCS 13-15)</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Characteristics:</p>
              <ul className="text-gray-700 text-xs mt-1 space-y-1">
                <li>• Awake and alert</li>
                <li>• Oriented or minimally confused</li>
                <li>• Can follow commands</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Management:</p>
              <ul className="text-gray-700 text-xs mt-1 space-y-1">
                <li>• Observation</li>
                <li>• CT if any concerns</li>
                <li>• Discharge with precautions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Moderate TBI */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-4">
          <h3 className="font-bold text-yellow-900 mb-2">MODERATE Brain Injury (GCS 9-12)</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Characteristics:</p>
              <ul className="text-gray-700 text-xs mt-1 space-y-1">
                <li>• Drowsy but arousable</li>
                <li>• Inappropriate speech</li>
                <li>• Localizes to pain</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Management:</p>
              <ul className="text-gray-700 text-xs mt-1 space-y-1">
                <li>• ICU admission</li>
                <li>• CT scan (standard)</li>
                <li>• Monitor for deterioration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Severe TBI */}
        <div className="bg-red-50 border-2 border-red-400 rounded p-4">
          <h3 className="font-bold text-red-900 mb-2">SEVERE Brain Injury (GCS 3-8)</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Characteristics:</p>
              <ul className="text-gray-700 text-xs mt-1 space-y-1">
                <li>• Unconscious</li>
                <li>• No purposeful response</li>
                <li>• May require intubation</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Management:</p>
              <ul className="text-gray-700 text-xs mt-1 space-y-1">
                <li>• ICU admission</li>
                <li>• Endotracheal intubation</li>
                <li>• Urgent CT + neurosurgery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Critical clinical pearl */}
      <div className="bg-orange-50 border-2 border-orange-400 rounded p-4">
        <h3 className="font-bold text-orange-900 mb-3">Critical Clinical Pearl</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex gap-3">
            <span className="font-bold text-orange-600">Intubation Threshold:</span>
            <span>
              Patients with GCS ≤ 8 cannot protect their airway and typically require
              intubation to prevent aspiration
            </span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600">Trends Matter:</span>
            <span>
              Declining GCS is more concerning than absolute score. Serial assessments are crucial.
            </span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600">Caveats:</span>
            <span>
              GCS can be affected by sedation, paralysis, intubation, alcohol, drugs, and peripheral nerve injury.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
