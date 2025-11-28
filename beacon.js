// Safety Hub beacon – FINAL CLEAN VERSION
fetch('https://hook.us2.make.com/las2vf451hpgxb9y7vaaotqfatqjjys0', {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  body: JSON.stringify({
    install_id: localStorage.getItem('beezer_install_id') || 
                ('safety_' + Date.now() + '_' + Math.random().toString(36).substr(2,9)),
    timestamp: new Date().toISOString(),
    page: 'monthly_checkin',
    source: 'safety_hub',
    user_agent: navigator.userAgent || 'unknown',
    online: navigator.onLine,
    lat: localStorage.getItem('last_lat') || null,
    lon: localStorage.getItem('last_lon') || null
  })
})
.catch(() => {});
