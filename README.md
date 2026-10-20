<p align="center"><img src="build/icon.png" width="120" alt="WAT logosu" /></p>

# WAT GBT - Aİ

**WAT MOTOR A.Ş.** için kişiselleştirilmiş yapay zekâ çalışma alanı.

Gücü Tasarlar, Kaliteyle Üretiriz...

## Kullanım

Sağlayıcı ayarlarından Google, Mistral, Groq, OpenAI veya uyumlu bir hizmetin API anahtarını ve modelini seçin. Yerel modeller için Ollama ve LM Studio seçenekleri de bulunur. Model ve araçların kullanılabilirliği sağlayıcıya ve yapılandırmaya bağlıdır.

Otomatik konuşma başlıkları için **Ayarlar → Varsayılan Model → Hızlı Model** alanından yapılandırdığınız modeli seçin. Kullanılamayan bir hızlı model yerine yapılandırılmış varsayılan model denenir; uygun model yoksa ilk mesajdan oluşturulan başlık korunur. Bu dağıtım, özgün uygulamanın özel bulut hizmeti anahtarlarını içermez.

Sohbetler, ajanlar, bilgi tabanları, dosyalar, belgeler, görsel üretimi ve otomasyonlar mevcut uygulamanın özellikleridir. Bu değişiklik ürün adı, WAT logosu, başlıklar, ürün bağlantıları ve paket kimliğini kişiselleştirir; sağlayıcı istek/yeniden deneme mantığını değiştirmez.

## Windows x64 derleme

`package.json` dosyasındaki Node ve pnpm sürümlerini kullanın.

```bash
pnpm install --frozen-lockfile
pnpm build:win:x64
```

Çıktılar `dist/` klasöründe oluşur. Windows çalıştırılabilir dosyası `WAT-GBT-AI.exe` adını kullanır; ürün ve kısayol adı **WAT GBT - Aİ** olur. Derlenmiş paket olmadan yalnızca kaynak koddan uygulama çalıştırılamaz.

## Veri ve güncelleme

Bu dağıtım kendi uygulama/kurulum kimliğini ve `.wat-gbt-ai` yapılandırma klasörünü kullanır. Önceki uygulamanın verilerini otomatik olarak taşımaz. Mevcut yedekler için iç veritabanı adları ve yedek biçimi korunmuştur. Güncelleme paketi ve sürüm geçmişi bu deponun Releases bölümünden okunur; uygun sürüm dosyaları yayımlanmadan güncelleme sunulmaz.

Harici sağlayıcılar ayrı hizmetlerdir; kendi hesapları, koşulları ve API adreslerini kullanırlar. Sağlayıcı ve çalışma alanı entegrasyonları bu marka değişikliğiyle yeniden yazılmaz. WPF ile veri bağlantısı bu değişiklik kapsamında eklenmemiştir.

## Lisans

GNU AGPL-3.0 lisansı korunur. Özgün proje ve üçüncü taraf telif bildirimleri [NOTICE.txt](NOTICE.txt) ve [LICENSE](LICENSE) dosyalarındadır. Lisans bildirimleri dağıtılan pakete de eklenir. Değiştirilmiş kaynak kod bu depoda bulunur.
