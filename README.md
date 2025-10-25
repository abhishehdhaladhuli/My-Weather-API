
# My Weather App

A small, friendly weather app that shows the current conditions for any city you type in. It’s a simple, frontend-only demo built with plain HTML, CSS and JavaScript.

What’s included
- `weather.html` — the page you open in your browser.
- `weather.css` — styles (modern glass-like card + smooth transitions).
- `weather.js` — the logic that fetches data and updates the UI.

Tech
- Vanilla HTML, CSS and JavaScript
- OpenWeatherMap API (requests made directly from the browser in this demo)

Quick start
1. Open `weather.html` in your browser (double-click) for the fastest test.
2. Or run a simple static server from the project folder for a more realistic dev experience:

```powershell
python -m http.server 8000
# open http://localhost:8000/weather.html
```

How to use
- Type a city name into the input and click "Fetch Weather Info".
- The card will show: city name, temperature (°C), humidity, a short description and a fun emoji.
- If something goes wrong (empty input, city not found, or network errors), a clear error message appears in the card.

UI / UX notes
- Clean, centered layout with a subtle glassmorphism style.
- Large emoji gives an immediate sense of the weather.
- Input and button have visible focus and hover states for clarity.

Security note
- This is a demo: the app performs API calls directly from the browser. That means any API key used in development will be visible if someone inspects the code.
- For production, move the API calls to a backend service so the key isn’t exposed in client-side code.



## Development notes & next steps

- Consider adding tests and CI if this grows into a larger project.
- Improve accessibility (ARIA roles, labels).
- Add graceful loading states and animations for the result card.
- Add caching for repeated queries.


## License & credits

This project is provided as-is for learning/demo purposes. Replace or add a proper license file if you plan to redistribute.


---

