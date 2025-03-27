### React

        1- Component
        2- Props
        3- State Management

            component : Sayfa bölümleri
            Props : componentler arası veri taşıma işlemi yapılıyr
            State Management :Veri saklama kontrol etme. Depolama alanından verileri çekip yönetiyor.

##### Kurulum

Vs Code - kod yazma için kullanılan arayüz

##### Kullanılabilecek eklentiler

         - Simple React Snippets
         - ES7 React/Redux/GraphQL/React-Native
         - Auto Rename Tag
         - Panda Theme
         - One Dark Pro Theme
         - Tailwind CSS IntelliSense
         - npm Intellisense
         - Live Server
         - Live Sass Compiler
         - Live Preview
         - Helium Icon Theme
         - VSCode Great Icons
         - Excalidraw
         - Emmet Live

         -https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1

         Bu link Google chrome eklentisidir. inspect te gördüğünüz yere react sayfalarını detaylı görebileceğiniz bir eklenti oluşturacaktır.




##### Kullanılabilecek özellikler

         - `setting` kısmından
         - `word Wrap`  on olarak işaretleyin ki yazdığınız kodlar satfa sığmadığında aşağıya insin.
         - `Format On Save`   kodları otomatik olarak düzenlenmesi için kutucuğu tıklayın

##### React kullanabilmek için

        nodejs.org - https://nodejs.org/en bu linkten indirip kurmak gerekiyor.

        https://vite.dev/guide/  bu linkten kurum aşamalarının detaylı bilgilerine ulaşabilirsiniz.

        1- npm create vite@latest
           bu aşamada proje adı ister ve adını girin
           package adı ister girin
           sonra `React` 'ı seçin
           sonra `Javascript` seçin

        2- proje klasörümüz oluşturuldu. Bu klasöre girip "cd klasöradı "
        3- burada npm i veya npm install ile node package maneger dosyalarımı yüklüyorum
        4- en son  `npm run dev`  ile  projemizi çalıştırıyorum
        5- bu kod çalışınca Browser da görüntülemek için

        http://localhost:5173/

        bu link üzerinden yazdığınız kodların çalışmasını görebilirsiniz.

##### React icon lar kullanabilmek için kütüphane indirmek gerekli

        npm install react-icons
        react iconlarını indiriyoruz.
        indirdiğimiz kütüphaneler aşağıdaki gibi package.jsson da gözükür

             "dependencies": {
                 "react": "^19.0.0",
                 "react-dom": "^19.0.0",
                 "react-icons": "^5.5.0"
             }

        detaylara likten ulaşabilirsiniz.
        https://react-icons.github.io/react-icons/


##### Kullanılabilecek kısa yollar

        clg 

console.log()  kısaltılmışıdır.

        ctrl+shift+/ 
bu kısa yol seçtiğiniz metni açıklama metni yapar. yada seçtiğiniz kodu açıklama satırı yapar.

        ctrl+ö  'de açıklama satırı oluşturuyor.

------------------------------------------
         rfc   
yazdığınızda react sayfanızda genel kullanım kodları otomatik gelir.
         
###### örnek :  
         
         import React from 'react'

         export default function Counter() {
         return (
            <div>
      
            </div>
                )
         }

- Satırı Yukarı/Aşağı Taşı   Alt + Yukarı/Aşağı
- Ekranı bölerek çalışmak için : çalışacağınız uygulamayı tıklayıp  windows+sağ/sol

          rfce
###### örnek :  

         import React from 'react'

         function Cihan() {
                return (
                <div>
      
                 </div>
                  )
                }

         export default Cihan

-------------------------------------------
         rcc

Class Component

--------------------------------------------
        rafce  // Yazıp Enter'a basınca otomatik olarak aşağıdaki gibi oluşturur:
 ##### örnek :
  
        import React from 'react';

        const Component = () => {
             return <div>Component</div>;
         };

        export default Component;



##### component 

sayfayı parçalar böldüğümüzde her biri bir component oluyor
 ##### örnek:

 - Sayfanın sol yada sağında menü 
 - Sayfanın üst kısmında header kısmında login
 - yine header da logo
 - alt kısımda footer 

 bunların herbiri bir komponent ve tasarladığınız tüm sayfalarda her birini ayrı ayrı çağırıp kullanabiliyorsunuz.

 ##### Props 

 Bu konu componentler arası veri alışverişi için kullanılır.

 ##### UseState


 useState hook'u ile birlikte fonksiyonel componentlerde state kullanımı sağlanır.

##### UseEffect

console.log() sondaki ver,ye bağımlılığa göre çalışır.

##### örnek :

          useEffect (() => {
         console.log("It runs when it is first rendered and the last name state value changes.")
                },[lastname]);

buradaki örnek gibi lastname ve veri yokmuş gibi çalışır.