import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/encrypt.module.css';

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleEncrypt = async () => {
  if (!text.trim()) {
    alert('⚠️ يرجى إدخال نص قبل التشفير');
    return;
  }
 
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/encrypt`, { text });
     // const res = await axios.post('http://localhost:4000/api/encrypt', { text });
      setResult(res.data);
    } catch (err) {
      alert('.خطأ في الاتصال بالخادم');
    }
  };

 return (
  <div className={styles.container}>

      
    <h1 className={styles.title}>🔐 تشفير النص</h1>
    <textarea
      className={styles.textarea}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="أدخل النص هنا..."
    />
    <button className={styles.button} onClick={handleEncrypt}>
      تشفير النص
    </button>

    {result && (
      <div className={styles.resultBox}>
        <p><strong>key:</strong> {result.iv}</p>
        <p><strong>النص المشفر:</strong> {result.encryptedText}</p>
      </div>
    )}
  </div>
);


}
