const exchangeRatesElement = document.getElementById('exchange-rates');

function getExchangeRates() {
  // Kripto para verilerini almak için bir API'yi kullanabilirsiniz
  const apiUrl = 'https://api.coincap.io/v2/assets';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const coins = data.data;
      let html = '';

      coins.forEach(coin => {
        const symbol = coin.symbol;
        const price = coin.priceUsd;
        html += `<div>${symbol}: $${price}</div>`;
      });

      exchangeRatesElement.innerHTML = html;
    })
    .catch(error => {
      console.error('API hatası:', error);
      exchangeRatesElement.innerText = 'Veriler alınamadı.';
    });
}

// Belirli bir süre aralığında kripto para verilerini güncellemek için setInterval kullanabilirsiniz
setInterval(getExchangeRates, 5000); // Her 5 saniyede bir güncelleme yapar

// Sayfa yüklendiğinde kripto para verilerini ilk kez almak için
getExchangeRates();
