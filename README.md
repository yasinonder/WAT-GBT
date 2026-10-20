# WAT - GBT AI

**WAT - GBT AI** Cherry Studio 2.1.7 tabanli, Windows odakli bir masaustu AI istemcisidir.

> Durum: Ozellestirilmis kaynak kod ve Windows x64 portable derleme altyapisi. EXE ciktisi, GitHub Actions is akisi basarili tamamlandiginda artifact olarak olusur. Tum ekranlarin ve ticari marka ogelerinin yeniden markalandigi anlamina gelmez.

## Windows x64 derleme

Node.js 24.12 veya daha yeni desteklenen bir surum ve paket tanimindaki pnpm surumu gerekir:

```powershell
pnpm install --frozen-lockfile
pnpm run brand:verify
pnpm run build:wat:win:x64
```

Cikti `dist/` klasorune yazilir. GitHub Actions > **WAT - GBT AI Windows x64** altindaki basarili calismanin **Artifacts** bolumunden indirebilirsiniz.

## Guvenli ayrisma

- Uygulama kimligi: `com.watmotor.watgbtai`
- Ayri kurulum GUID'i ve masaustu adi
- Ayri boot ayar dizini: `~/.watgbtai`
- Portable Windows surumunde ayri `data` dizini
- Cherry Studio resmi otomatik guncellemeleri kapali; WAT surumu upstream surumle degistirilmez
- Model servis API anahtarlariniz ve kurumsal veriler varsayilan olarak bu repoya eklenmez

## Lisans ve atif

Kaynak uygulama: [Cherry Studio](https://github.com/CherryHQ/cherry-studio). Bu degisiklikler 20.10.2026 tarihinde WAT - GBT AI ozel surumu icin yapilmistir. Orijinal telif atiflari ve **AGPL-3.0** lisans kosullari gecerlidir (bkz. [LICENSE](LICENSE)). Uygulama baska kisilere dagitildiginda ilgili kaynak kodun sunulmasi gerekir. CherryHQ bu ozel dalin resmi dagitimcisi degildir.

## Sinirlar

Bu ilk surumde WAT MOTOR WPF/SQLite veritabani entegrasyonu kurulmus degildir. Bu entegrasyon icin kimlik dogrulamali, kullanici ve modul izinlerini denetleyen salt okunur API/MCP katmani gereklidir. Windows kod imzalama da ayri bir islem gerektirir; kurumsal BT kisitlamalarini asmaya yonelik adimlar kullanilmamalidir.
