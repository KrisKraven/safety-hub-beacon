// Safety Hub silent beacon – separate file so spinner stays untouched
fetch('https://hook.us2.make.com/las2vf451hpgxb9y7vaaotqfatqjjys0', {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  body: JSON.stringify({
    install_id: localStorage.getItem('beezer_install_id') || 
                ('safety_' + Date.now() + Math.random().toString(36).substr(2,9)),
    timestamp: new Date().toISOString(),
    page: 'monthly_checkin',
    user_agent: navigator.userAgent,
    online: navigator.onLine,
    lat: localStorage.getItem('last_lat') || null,
    lon: localStorage.getItem('last_lon') || null
  })
}).catch(() => {});
