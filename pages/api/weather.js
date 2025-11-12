export default async function handler(req, res) {
  const { city } = req.query;

  if (!city) return res.status(400).json({ error: 'المدينة مطلوبة' });

  const apiKey = 'd2a911e8818c463495d190605250911';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=ar`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) return res.status(404).json({ error: 'لم يتم العثور على المدينة' });

    res.status(200).json({
      city: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    });
  } catch (err) {
    res.status(500).json({ error: 'فشل الاتصال بـ API الخارجي' });
  }
}
