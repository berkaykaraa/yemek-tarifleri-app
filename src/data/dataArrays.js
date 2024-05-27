export const categories = [
  {
    id: 3,
    name: 'Kurabiye',
    photo_url:
    'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/58F5ACB9-F758-4CB5-AD56-FFB26C60F283/Derivates/0B1F7F84-57D8-4050-AC4E-7CF8C0C50FEA.jpg'
  },
  {
    id: 1,
    name: 'Mexican Mutfağı',
    photo_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505'
  },
  {
    id: 2,
    name: 'Sandviç',
    photo_url:
      'https://i.lezzet.com.tr/images-xxlarge-recipe/peynirli_ve_cevizli_sandvic-12709607-659e-4d4d-a92e-fc3067c51c1e.jpg'
  },
  {
    id: 4,
    name: 'Smoothie',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Makarna',
    photo_url: 'https://i.lezzet.com.tr/images-xxlarge/salcali-makarna-f60e9ce7-6ad0-49ab-8dae-a3f6aa385734'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Çikolata Dolgulu Yulaf Topları',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '1.5 su bardağı yulaf ezmesi'], [1, '1 yemek kaşığı hindistan cevizi'], [2, '4 yemek kaşığı sürülebilir çikolata'], [62, 'yarım çay bardağı damla çikolata']],
    description:
      'YAPILIŞI: Yulafı mutfak robotundan geçirip geniş bir karıştırma kabına alın. Hindistan cevizi ve sürülebilir çikolatayı ilave edip hafif yoğurun. Damla çikolatayı ekleyip karıştırın. Harçtan ceviz büyüklüğünde parçalar kopartıp elinizle yuvarlayın.\n\n Çikolata toplarını yağlı kağıt serili bir kaba dizin. Buzdolabında 2 saat dinlendirip soğuk servis yapın.'
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'StrawBerry Smoothie',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
        [59, '1'],
        [60, '4 adet'],
        [61, '2 yemek kaşığı'],
    ],
    description: 'YAPILIŞI: Süt hariç bütün malzemeler eklenip rondodan geçirilir.' + 'Kıvamını ayarlamak için süt eklenip karıştırılır.' + 'Başka meyveler ile yapabilirsiniz.'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Kuru Üzüm Topu',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
      'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85'
    ],
    time: '30',
    ingredients: [
      [0, '2 yemek kaşığı'],
      [16, '2 kahve fincanı kuru üzüm'],
      [12, '1 kahve  fincanı fındık içi'],
      [18, '1 kahve fincanı ceviz'],
      [19, '2 yemek kaşığı kakao'],
    ],
    description:
      'YAPILIŞI: Kuru üzümleri 10-15 dk sıcak suda bekletin. Bu arada fındık, badem, cevizi rondodan geçirip, üzerine yulaf ununu, kakaoyu ve üzümleri ekleyip tekrar ayni işlemi tekrarlayın. Oluşan karışımdan minik toplar yapıp, Hindistan cevizi ne bulayıp afiyetle yiyebilirsiniz. .\n' +
        'NOT: Dileyen hindistan cevizine alternatif, toz Antep fıstığına ya da toz bademe de bulayabilir'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Şeker Parçacıklı Brownie',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
      'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
      'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
    ],
    time: '30',
    ingredients: [
      [64, '3 adet yumurta'],
      [3, '1 su bardağı şeker'],
      [4, '1 su bardağı un'],
      [5, '1 paket vanilin'],
      [19, '50 gr kakao'],
      [7, '150 gr tereyağı'],
      [2, '180 gr kalıp çikolata'],
      [65, '1 çimdik tuz'],
    ],
    description:
      'YAPILIŞI: İlk olarak margarini tavada eritelim, eriyince altını kapatıp içine 180 gram çikolatalarımızı ekleyelim.Sütlü veya bitter farketmez .\n' +
        'Ayrı bir kapta yumurta ve şekeri 5 dakika hiç durmadan çırpalım .\n' +
        'Daha sonra tüm malzemeyi içine ekleyelim ve kaşık yardımıyla karıştıralım .\n' +
        'Yağlı kağıt serdiğimiz kalıbımıza dökelim.\n' +
        'Üzerini beyaz çikolata ile süsleyip önceden ısıttığımız 170 derece fırında tam 30 dakika pişirelim.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Sebzeli Balık Takoları',
    photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
    photosArray: [
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
      'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
    ],
    time: '35',
    ingredients: [
      [66, '3 yemek kaşığı zeytinyağı'],
      [67, '1 adet limon suyu'],
      [68, '2 çay kaşığı acı toz biber'],
      [69, '1 çay kaşığı tatlı toz kırmızı biber'],
      [70, '1/2 çay kaşığı kimyon'],
      [71, '600 gr beyaz etli balık'],
      [65, 'Tuz'],
      [72, 'Karabiber'],
      [73, '8 adet tortilla'],
    ],
    description:
      '  YAPILIŞI: Orta büyüklükte bir kapta zeytinyağı, limon suyu, tatlı biber tozu, acı biber tozu ve kimyon karıştırın \n' +
        'Balıkları ekleyerek her tarafını baharatlayın, 15 dakika marine edin. \n' +
        'Bu sırada salata için, mayonez, limon suyu, kişniş ve balı bir kapta çırpın. İçerisine lahana, mısır ve jalapeno biberleri atarak karıştırın. Tuz ve karabiberle tatlandırın. \n' +
        'Yapışmaz bir tavayı ocağa alın ve sıvıyağı ısıtın. Balıkları marineden çıkartarak tuz ve karabiberle tatlandırın. Her iki tarafını 5’er dakika pişirin. \n' +
        'Tortillaları ısıtın. Taco yapmak için bir araya getirin. \n' +
        'Mısır salatası, balık ve avokado ile servis yapın. Limon suyu ve ekşi krema ile süsleyin. Afiyet olsun. \n'
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Garnitürlü Tavuk Fajita',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [74, 'Yarım kg tavuk ızgara tava'],
      [75, '3 adet biber'],
      [76, '1 adet kabak'],
      [77, '1 adet havuç'],
      [78, '3 diş sarımsak'],
      [79, '2 tatlı kaşığı soya sosu'],
      [80, '1 tatlı kaşığı pekmez'],
      [65, 'Tuz'],
      [72, 'Karabiber'],
      [81, 'Köri'],
    ],
    description:
      'Öncelikle tavukları uzun uzun doğrayıp kızgın tavaya atıyoruz .Ardından sarımsakları ilave edip pişirmeye başlıyoruz. Suyunu salıp çeken tavuklara biber ve havucu ilave edip 10 dak kadar pişiyoruz sonra yine julyen doğradığımız kabağıda ilave edip sosu pekmezi tuz biber ve köriyi ilave ediyoruz (soya sosu tuzlu olduğundan kontrollü şekilde tuz ilave ediyoruz)'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Kaşar Peynirli Jambonlu Kruvasan',
    photo_url:
      'https://i.pinimg.com/originals/d3/a7/6e/d3a76e8c05632846cf8d1d2d6d57d8fb.jpg',
    photosArray: [
      'https://www.diyetkolik.com/site_media/media/foodrecipe_images/kasar-peynirli-jambonlu-kruvasan.png',
    ],
    time: 50,
    ingredients: [
      [82, '1 dilim dana jambon'],
      [83, '1 dilim kaşar peyniri'],
      [84, '1 adet kruvasan'],
    ],
    description:
      'Kaşar Peynirli Jambonlu Kruvasan tarifi için; hazır aldığınız kruvasanı ortadan içini ikiye bölün. Kaşar peynirini ve jambonu yerleştirinKaşar peynirli jambonlu kruvasan servise hazır. Afiyet olsun'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Pesto Soslu Penne Makarna',
    photo_url: 'https://keyifverenyemekler.com/wp-content/uploads/2020/06/Pesto-Soslu-Makarna-Tarifi-scaled.jpg',
    photosArray: [
      "https://migrostvstr.blob.core.windows.net/migrostv/2018/07/Screen-Shot-2018-07-23-at-00.16.11.jpg",
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr_56h4oS0PJdnX5F64gyugwQ5Qahi6OBA7ZHOkfm_UujJCNaWoGqGEBN6BPjEIfVIKgw6WLS8fTF7DTq1cLW38HBscuhhthcF85K-5hiH4232iWI4vEdAgGajtvS1NvakYjDTsrSTRTmp/w1200-h630-p-k-no-nu/pesto+soslu+makarna.jpg',
    ],
    time: '15',
    ingredients: [[85, 'Yarım paket penne (kalem) makarna'], [86, '1 paket süt kreması'], [87, '2-3 yemek kaşığı hazır pesto sosu'], [66, '2 yemek kaşığı zeytinyağı'], [65, 'tuz']],
    description:
      'Genişçe bir tencereye bolca su alıp kaynatalım. Kaynayınca yarım tatlı kaşığı kadar tuz ekleyip makarnaları ilave edelim. Paketin üzerinde yazdığı gibi 9-10 dk. pişmeye bırakalım. Makarnalar pişmeye yakın uygun bir tavaya az sıvı yağımızı alalım. Pesto sosumuzu ilave edip karıştıralım, süt kremasını da ekleyip ısıtalım. Çok fokur fokur kaynamasına gerek kalmadan hafifçe pişirelim ve bu sırada suyunu süzdüğümüz makarnaları da ilave edelim. Karıştırarak bütün makarnaların sosa bulanmasını sağlayalım. Pesto soslu makarna servise hazır, soğutmadan servis edelim. Şimdiden afiyet olsun.'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Mantarlı Kavurmalı Tost',
    photo_url: 'https://www.nefisyemek.com/modul/user/fuimg/201903/15520537970.47968800.jpg',
    photosArray: [
      'https://www.nefisyemek.com/modul/user/fuimg/201903/15520537970.47968800.jpg',
    ],
    time: 15,
    ingredients: [
      [88, '2 dilim tost ekmeği'],
      [83, '5 dilim kaşar peyniri'],
      [89, '50 gr kavurma'],
      [90, '9 dilim mantar'],
      [7, 'Tereyağı'],
    ],
    description:
      'Tost makinesini ısıtıp tereyağı ile yağlayın ve mantar dilimlerini dizin. Kapak kısmını da kapatıp mantarları pişirin. Mantarlar piştikten sonra tost ekmeğini makineye alın ve üzerine 3 dilim kaşar peyniri koyun. Mantarları kaşar peynirlerinin üzerine dizin ve kavurmayı mantarların üst kısmına yerleştirin. Kalan 2 dilim kaşar peyniri üst kısma koyun ve son olarak tost ekmeğini yerleştin. Tost makinesinin kapağını kapatın. Pişmesine yakın ekmeğin üzerine tereyağı sürün ve sıcak olarak servis edin.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Et Füme Bacon Hamburger',
    photo_url: 'https://bearmountainbbq.com/cdn/shop/articles/BaconBurger_500x.png?v=1657896188',
    photosArray: [
      'http://www.yaylaturk.com/images/bacon_hamburger2.jpg',
    ],
    time: 60,
    ingredients: [
      [91, '120 gr Et Füme Bacon Orijinal'],
      [90, '2 Büyük Mantar'],
      [92, '1 Yemek Kaşığı Yeşil Soğan'],
      [93, '1 Avuç Maydanoz'],
      [66, '3 Yemek Kaşığı Zeytinyağı'],
      [65, 'Tuz'],
      [72, 'Karabiber'],
      [94, '8 Adet İnce Dilimlenmiş Cheedar Peyniri'],
      [95, '4 Adet Hamburger Ekmeği'],
      [96, 'Mayonez'],
    ],
    description:
      'Büyükçe dilimlediğimiz mantarları, yeşil soğanı ve maydanoz\'u mixer içine atıyor ve 10 saniye parçalıyoruz. Yapmış olduğumuz karışımı bir kabın içerisine alıyoruz ve içerisine hindi etimizi, zeytinyağımızı, tuzumuzu ve karabiberimizi ekliyoruz. Ellerimizle kabın içindeki malzemeleri karıştırıyoruz. Buzdolabından çıkan etlerin üzerlerine fırça yardımıyla zeytinyağı sürüyoruz. Önceden orta derece ısıtmış olduğumuz tavamıza etlerimizi yerleştiriyoruz ve her bir tarafını 4 ila 5 dakika arası pişiriyoruz. Etlerimizin üzerlerine cheedar peynirlerini yerleştirerek 3 dakika daha pişiriyoruz. Hamburger ekmeklerini tavaya bastırıyoruz ve etimizi içerisine koyuyoruz. Mantar karışımımızı ekmeğe sürüyoruz. Etimizin üzerine avokado dilimlerini yerleştiriyoruz. Tercihinize bağlı olarak mayonez ekleyebilirsiniz.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Yulaf',
    photo_url: 'https://im.haberturk.com/2022/05/13/3437203_86afc9d101414ad3844df1dc7f9df702.jpg'
  },
  {
    ingredientId: 1,
    name: 'Hindistan Cevizi',
    photo_url:
      'https://ideacdn.net/idea/fy/80/myassets/products/761/hindistancevizitoz.jpg?revision=1697143329'
  },
  {
    ingredientId: 2,
    name: 'Çikolata',
    photo_url: 'https://image.hurimg.com/i/hurriyet/75/750x422/5e09bc58c9de3d295c838cd7.jpg'
  },
  {
    ingredientId: 3,
    name: 'Şeker',
    photo_url:
      'https://beyaztabak.com/image/cache/SEKERLER/1-TOZ%20%C5%9EEKER.-500x500.PNG'
  },
  {
    ingredientId: 4,
    name: 'Un',
    photo_url: 'https://www.atadanurunler.com/image/cache/catalog/tumurunler/atatohumubugdayunu-500x500.png'
  },
  {
    ingredientId: 5,
    name: 'Vanilin',
    photo_url: 'https://d23ic3f0nw4szy.cloudfront.net/marketpaketi/products/215/droetker-vanilin-10lu-5gr-516921001509299152.jpg'
  },
  {
    ingredientId: 7,
    name: 'Tereyağı',
    photo_url:
      'https://sarayciftligi.com.tr/image/cache/catalog/Urunler/Terayagi-1000/tereyagi-stil-500x500.jpg'
  },
  {
    ingredientId: 12,
    name: 'Fındık İçi',
    photo_url:
      'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/49413/uploads/urunresimleri/buyuk/kavrulmus-findik-ici-387-b4.png'
  },
  {
    ingredientId: 16,
    name: 'Kuru Üzüm',
    photo_url:
      'https://www.yedidegirmen.com.tr/wp-content/uploads/kuru-uzum-yedidegirmenn.jpg'
  },
  {
    ingredientId: 19,
    name: 'Kakao',
    photo_url:
      'https://beyaztabak.com/image/cache/BAHARATLAR/KAKAO-500x500.PNG'
  },
  {
    ingredientId: 59,
    name: 'Muz',
    photo_url:
      'https://www.organikciyizbiz.com/image/cache/catalog/organik-muz-organik-ufuklar-4046-500x500-product_popup.jpg'
  },
  {
    ingredientId: 60,
    name: 'Çilek',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Süzme Yoğurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
  {
    ingredientId: 62,
    name: 'Damla Çikolata',
    photo_url:
        'https://platincdn.com/3211/pictures/thumb/500X-500X-WILWUNJIOE4192021175055_bind-sutlu-damla-drop.jpg'
  },
  {
    ingredientId: 63,
    name: 'Süt',
    photo_url:
        'https://www.tasocakfirin.com/image/cache/catalog/products_2021/S%C4%B1cak-S%C3%BCt-500x500.jpg'
  },
  {
    ingredientId: 64,
    name: 'Yumurta',
    photo_url:
        'https://4.imimg.com/data4/RX/PT/MY-15037809/white-egg-500x500.jpg'
  },
  {
    ingredientId: 65,
    name: 'Tuz',
    photo_url:
        'https://www.diyetkolik.com/site_media/media/nutrition_images/tuz-iyotlu.webp'
  },
  {
    ingredientId: 66,
    name: 'Zeytinyağı',
    photo_url:
        'https://essentials.bertolli.com/wp-content/uploads/2019/03/How-to-Make-Olive-Oil-500x500.jpg'
  },
  {
    ingredientId: 67,
    name: 'Limon Suyu',
    photo_url:
        'https://www.diyetkolik.com/site_media/media/nutrition_images/limon-suyu.webp'
  },
  {
    ingredientId: 68,
    name: 'Acı Toz Biber',
    photo_url:
        'https://i0.wp.com/eftalgida.com/wp-content/uploads/aci-kirmizi-toz-biber.jpg?fit=500%2C500&ssl=1'
  },
  {
    ingredientId: 69,
    name: 'Tatlı Toz Biber',
    photo_url:
        'https://katkidunyasi.com/_upload/productimages/kd-kirmizi-biber-toz-tatli.jpg'
  },
  {
    ingredientId: 70,
    name: 'Kimyon',
    photo_url:
        'https://www.atadanurunler.com/image/cache/catalog/tumurunler/kimyon-500x500.png'
  },
  {
    ingredientId: 71,
    name: 'Balık',
    photo_url:
        'https://www.premiumbalik.com/wp-content/uploads/2024/01/levrek.png'
  },
  {
    ingredientId: 72,
    name: 'Karabiber',
    photo_url:
        'https://www.atadanurunler.com/image/cache/catalog/tumurunler/karabiber-500x500.png'
  },
  {
    ingredientId: 73,
    name: 'Tortilla',
    photo_url:
        'https://www.diyetkolik.com/site_media/media/nutrition_images/tortilla.webp'
  },
  {
    ingredientId: 74,
    name: 'Tavuk',
    photo_url:
        'https://tunafood.com/wp-content/uploads/2020/09/456_tavuk_gogus-500x500.jpg'
  },
  {
    ingredientId: 75,
    name: 'Biber',
    photo_url:
        'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/3140/uploads/urunresimleri/buyuk/kirmizi-biber-capia-500-gr-05cfda.jpg'
  },
  {
    ingredientId: 76,
    name: 'Kabak',
    photo_url:
        'https://static.ticimax.cloud/3140/uploads/urunresimleri/buyuk/organik-kabak-500-gr--da5691.jpg'
  },
  {
    ingredientId: 77,
    name: 'Havuç',
    photo_url:
        'https://www.tropikalsepet.com/img/products/5e385b56c864594e86968844_tr_1581429175823_29.09.2022_3c4c498.jpeg'
  },
  {
    ingredientId: 78,
    name: 'Sarımsak',
    photo_url:
        'https://d23ic3f0nw4szy.cloudfront.net/marketpaketi/products/463/sarimsak-563029001509299132.jpg'
  },
  {
    ingredientId: 79,
    name: 'Soya Sosu',
    photo_url:
        'https://www.anadolutrade.com.tr/images/product/8783392026102-937-soya-sosu.jpg'
  },
  {
    ingredientId: 80,
    name: 'Pekmez',
    photo_url:
        'https://soyleyerinden.com/image/cache/wkseller/2647/af1b795644d24866a39b052263cc0b008af776ee-500x500.png'
  },
  {
    ingredientId: 81,
    name: 'Köri',
    photo_url:
        'https://beyaztabak.com/image/cache/BAHARATLAR/K%C3%96R%C4%B0-500x500.PNG'
  },
  {
    ingredientId: 82,
    name: 'Dana Jambon',
    photo_url:
        'https://www.diyetkolik.com/site_media/media/nutrition_images/dana-jambon.webp'
  },
  {
    ingredientId: 83,
    name: 'Kaşar Peyniri',
    photo_url:
        'https://www.peynirburda.com/image/cache/catalog/peynir/IMG-20210102-WA0025-500x500.jpg'
  },
  {
    ingredientId: 84,
    name: 'Kruvasan',
    photo_url:
        'https://static.ticimax.cloud/3140/uploads/urunresimleri/buyuk/kruvasan-2li-paket-240derece-69f1.jpg'
  },
  {
    ingredientId: 85,
    name: 'Penne Makarna',
    photo_url:
        'https://www.organikciyizbiz.com/image/cache/catalog/organik-penne-kalem-makarna-green-apple-3848-500x500-product_popup.jpg'
  },
  {
    ingredientId: 86,
    name: 'Süt Kreması',
    photo_url:
        'https://market-product-images-cdn.getirapi.com/product/f215cf32-db2f-4c0a-a9a0-c36197100c05.jpg'
  },
  {
    ingredientId: 87,
    name: 'Pesto Sosu',
    photo_url:
        'https://www.diyetkolik.com/site_media/media/foodrecipe_images/pesto-sos.jpg'
  },
  {
    ingredientId: 88,
    name: 'Tost Ekmeği',
    photo_url:
        'https://www.tekirdagun.com/r/w-500/home/tost-ekmek.jpeg'
  },
  {
    ingredientId: 89,
    name: 'Kavurma',
    photo_url:
        'https://sarayciftligi.com.tr/image/cache/catalog/Urunler/Kavurna/kavurma-2-500x500.jpg'
  },
  {
    ingredientId: 90,
    name: 'Mantar',
    photo_url:
        'https://www.kupagida.com/wp-content/uploads/2023/06/Ersan-Dilimli-Salamura-Mantar-18kg-Net10kg.jpg'
  },
  {
    ingredientId: 91,
    name: 'Dana Bacon',
    photo_url:
        'https://bensabaconlovers.com/wp-content/uploads/2023/01/fried-back-bacon-500x500.jpg'
  },
  {
    ingredientId: 92,
    name: 'Yeşil Soğan',
    photo_url:
        'https://static.ticimax.cloud/30547/uploads/urunresimleri/buyuk/yesil-sogan-demet-c1-238.jpg'
  },
  {
    ingredientId: 93,
    name: 'Maydonoz',
    photo_url:
        'https://www.afyonsoz.com/image/cache/catalog/urunler/meyve-sebze/MAYDONOZ-ADET-500x500.jpg'
  },
  {
    ingredientId: 94,
    name: 'Cheddar Peyniri',
    photo_url:
        'https://karpuzoglu.com.tr/image/cache/catalog/Peynir/19-cheddar-peyniri-500x500h.jpg'
  },
  {
    ingredientId: 95,
    name: 'Hamburger Ekmeği',
    photo_url:
        'https://static.ticimax.cloud/43437/uploads/urunresimleri/mini-hamburger-ekmegi--4c8c-.jpg'
  },
  {
    ingredientId: 96,
    name: 'Mayonez',
    photo_url:
        'https://market-product-images-cdn.getirapi.com/product/a0e8c5eb-2527-42d2-a22f-41cbbd256b02.jpg'
  },
];
