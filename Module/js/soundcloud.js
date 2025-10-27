// SoundCloud Go+ Premium
var obj = JSON.parse($response.body);

if (obj.features) {
  obj.features.high_quality_streaming = true;
  obj.features.high_quality_audio_enabled = true;
  obj.features.offline_sync = true;
  obj.features.ads_disabled = true;
  obj.features.no_ads = true;
  obj.features.ads_enabled = false;
}

$done({ body: JSON.stringify(obj) });
