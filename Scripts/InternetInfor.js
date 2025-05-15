let url = "http://ip-api.com/json/?lang=vi-VN"

$httpClient.get(url, function(error, response, data){
  if (error) {
    body = {  
      title: "Thông Tin Mạng",
      content: "Lỗi Khi Lấy Thông Tin IP",
      icon: "xmark.octagon",
      'icon-color': "#CB1B45"
    }
    $done(body);
    return;
  }
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let qg = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let tp = jsonData.city
    let ncc = jsonData.isp
    let content = `IP: ${ip}\nNhà Mạng: ${ncc}\nVị Trí: ${emoji}${qg} - ${tp}`;
  
  body = {
    title: "Thông Tin Mạng",
    content: content,
    icon: "network",
    'icon-color': "#5AC8FA"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
