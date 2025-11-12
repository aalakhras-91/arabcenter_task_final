import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>مرحبًا 👋</h1>
      <p style={styles.subtitle}>اختر إحدى الصفحات التالية:</p>

      <div style={styles.buttonGroup}>
        <Link href="/encrypt">
          <button style={styles.button}>🔐 صفحة التشفير</button>
        </Link>

        <Link href="/weather">
          <button style={styles.button}>🌤️ حالة الطقس</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '4rem auto',
    padding: '2rem',
    borderRadius: '12px',
    background: 'linear-gradient(to bottom right, #f0f4f8, #dbeafe)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    direction: 'rtl',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#1e3a8a',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#475569',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};
