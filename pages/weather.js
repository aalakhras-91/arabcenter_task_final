import { useState } from 'react';

const cities = [
  { name: 'دمشق', query: 'Damascus' },
  { name: 'ريف دمشق', query: 'ٌRifdamacus' },
  { name: 'حلب', query: 'Aleppo' },
  { name: 'حمص', query: 'Homs' },
  { name: 'حماة', query: 'Hama' },
  { name: 'اللاذقية', query: 'Latakia' },
  { name: 'طرطوس', query: 'Tartus' },
  { name: 'إدلب', query: 'Idlib' },
  { name: 'درعا', query: 'Daraa' },
  { name: 'السويداء', query: 'As-Suwayda' },
  { name: 'القنيطرة', query: 'Quneitra' },
  { name: 'الرقة', query: 'Raqqa' },
  { name: 'دير الزور', query: 'Deir ez-Zor' },
  { name: 'الحسكة', query: 'Al-Hasakah' },
];

export default function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!selectedCity) return alert('يرجى اختيار مدينة');
    setLoading(true);
    try {
      const res = await fetch(`/api/weather?city=${selectedCity}`);
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      alert('حدث خطأ أثناء جلب البيانات');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌤️ حالة الطقس في سوريا</h1>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        style={styles.select}
      >
        <option value="">اختر مدينة</option>
        {cities.map((c) => (
          <option key={c.query} value={c.query}>{c.name}</option>
        ))}
      </select>

      <button onClick={fetchWeather} style={styles.button} disabled={loading}>
        {loading ? 'جاري التحميل...' : 'عرض الطقس'}
      </button>

      {weather && (
        <div style={styles.resultBox}>
          <h2 style={styles.cityName}>{weather.city}</h2>
          <p style={styles.info}>🌡️ درجة الحرارة: <strong>{weather.temperature}°C</strong></p>
          <p style={styles.info}>📝 الحالة: <strong>{weather.condition}</strong></p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '3rem auto',
    padding: '2rem',
    borderRadius: '12px',
    background: 'linear-gradient(to bottom right, #f0f4f8, #dbeafe)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
    direction: 'rtl',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#1e3a8a',
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  resultBox: {
    marginTop: '2rem',
    backgroundColor: '#ffffffdd',
    padding: '1.5rem',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
  },
  cityName: {
    fontSize: '1.5rem',
    color: '#0f172a',
    marginBottom: '1rem',
  },
  info: {
    fontSize: '1.1rem',
    color: '#334155',
    margin: '0.5rem 0',
  },
};
