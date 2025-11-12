// pages/data.js
export async function getStaticProps() {
  const res = await fetch('https://arabcenter-task-final.onrender.com/api/encrypt');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function DataPage({ data }) {
  return (
    <div>
      <h1>البيانات المستخرجة من السيرفر</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
