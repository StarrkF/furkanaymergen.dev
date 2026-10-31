### Performans ve SEO doğrulaması

Yerel **üretim** sürümünde, aynı Lighthouse 13.6.0 mobil profiliyle ölçüldü:
150 ms RTT, 1.638,4 Kbps throughput, 4× CPU yavaşlatma. Canlı sunucu/CDN
performansı değildir; laboratuvar puanı koşular arasında değişebilir.

| Ölçüm | Önce | Son üretim sürümü |
| --- | ---: | ---: |
| Performans | 46 | 100 |
| Erişilebilirlik | 96 | 100 |
| En iyi uygulamalar | 100 | 100 |
| SEO | 100 | 100 |
| FCP | 5,6 sn | 1,1 sn |
| LCP | 7,4 sn | 1,1 sn |
| TBT | 430 ms | 0 ms |
| CLS | 0,0012 | 0,0003 |
| Speed Index | 12,4 sn | 1,2 sn |
| Aktarım | 1.072 KiB | 372 KiB |

İlk optimizasyon ölçümü de 99 performans verdi (LCP 1,1 sn, TBT 70 ms).
Ham raporlar: `performance-before/lighthouse.json` ve
`performance-after.lighthouse.json`. Lighthouse SEO puanı başta da 100'dü;
ayrı testler gerçek EN SSR rotasını, dil bazlı canonical/hreflang, JSON-LD,
sitemap/robots ve bulunmayan sayfalardaki 404 durumunu doğrular.

### Yeniden çalıştırma

```sh
npm run build
NITRO_HOST=127.0.0.1 NITRO_PORT=3102 node .output/server/index.mjs
```

Ayrı terminalde:

```sh
node --test tests/seo-performance.test.mjs
npx --yes lighthouse@13.6.0 http://127.0.0.1:3102/ --output=json --output-path=tests/performance-after.lighthouse.json --only-categories=performance,accessibility,best-practices,seo --chrome-flags='--headless --no-sandbox' --quiet
chrome-devtools navigate_page --url http://127.0.0.1:3102/
chrome-devtools evaluate_script --sourcePath tests/performance.browser.js
```

Tarayıcı testleri 1440×900, 390×844 ve reduced-motion ile 320×740
boyutlarında geçti. İki yönde dil geçişi, mobil menü, tema, sekmeler,
kaydırıcılar, tembel hydration, yerel/Türkçe fontlar, CV ve pano izin
hatası denetlendi; konsolda hydration hatası görülmedi.

Ek hareket kontrolleri: reduced-motion altında canvas sabit; gizli sekmede
canvas ve hero duruyor, dönüşte devam ediyor; boşta imleç 400 ms boyunca
hiçbir transform yazmıyor. JavaScript devreye girmeden içerik SSR HTML'de,
yerel imleç ise özel imleç başarıyla başlayana kadar kullanılabilir.