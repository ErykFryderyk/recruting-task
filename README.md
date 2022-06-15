# task-vuejs ❌✅
Zadanie
Proszę o przygotowanie w VueJS komponentu tabeli pobierającego i wyświetlającego dane z endpintu: 
https://jsonplaceholder.typicode.com/users

❌* Komponent powinien posiadać propsy: 
  endpoint - (string) - url do api
  search - (boolean) - włączane pola z wyszukiwarką
  sorting - (boolean) - włączenie opcji sortowania
  pagination - (boolean) - włącza paginację po 3 elementy

❌* W tabeli powinny wyświetlać się dane z pól:
  name,
  email,
  company.name,
  address.city,
  website,

❌* Funkcjonalności komponentu:
❌- komponent tabeli powinien być uniwersalny w użyciu, powinno dać się - za pomocą
propsów komponentu zmienić wyświetlane na ekranie kolumny np. podając je rozdzielone
przecinkiem: name,email,company.name - sposób rozwiązania dowolny. Dzięki temu
mamy możliwość zmiany ilości i kolejności wyświetlanych kolumn tabeli.
❌- kliknięcie w header powoduje sortowanie danych po klikniętej kolumnie (ponowne kliknięcie
w ten sam header zamienia kolejność sortowania)
❌- włączany propsem input Search filtrujący tabelę po zawartości
❌- jeżeli w kolumnie występuje adres email powinien się wyświetlać jako klikalny link
❌- po zmianie zawartości tabeli komponent powinien emitować event change z aktualną listą
elementów
❌- forma paginacji - dowolna
Utworzenie dodatkowego widoku RWD pod viewport 320w nie jest wymagane, ale będzie
dodatkowym atutem.
Jako style css można użyć Bootstrapa, Foundation, Tailwind CSS lub dowolny inny framework
polecenie npm run start powinno umożliwić uruchomienie projektu.
Projekt proszę podesłać jako link do repozytorium GIT

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
