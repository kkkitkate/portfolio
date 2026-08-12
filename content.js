const SITE={
  profession:'Видеохудожник / Видеоинженер',
  verticalText:'ЗДЕСЬ МОЖЕТ БЫТЬ ВАШ ПРОЕКТ',
  heroText:'Видео для театра. Визуальный контент как часть сценического пространства.',
  aboutShort:'Видеохудожник и видеоинженер. Работаю с театральными постановками, концертами и специальными проектами — от разработки визуального языка до реализации видео на сцене.'
};

const PROJECTS=[
  // 2026
  {sortDate:'2026-07-01',year:'2026',title:'Горький фест 2026',director:'Алексей Золотовицкий',designer:'',theatre:'Горький фест',external:'https://vk.ru/gorkyfest52?w=wall-195953864_3739'},
  {sortDate:'2026-05-30',year:'2026',title:'А что у вас?',director:'',designer:'',extraCredit:'художественный руководитель Евгений Миронов',theatre:'Театр-студия классической и современной хореографии «Шене» · фестиваль «НЕБО»',cover:'assets/achto-new-cover.png',featured:true,internal:'projects/a-chto-u-vas.html'},
  {sortDate:'2026-04-30',year:'2026',title:'Лавр',director:'Юрий Печенежский',designer:'Леша Лобанов',theatre:'Томский драматический театр',external:'https://www.tomskdrama.ru/repertuar/lavr/'},
  {sortDate:'2026-03-21',year:'2026',title:'Оркестр Осипова — детям',director:'',designer:'',extraCredit:'видеоконтент в сотрудничестве с Алиной Синяковой',theatre:'Концертный зал Чайковского',cover:'assets/osipov-cover.jpg',featured:true,showInList:false,internal:'projects/osipov-detyam.html'},
  {sortDate:'2026-03-21',year:'2026',title:'Сказки народов России',director:'',designer:'',extraCredit:'видеоконтент в сотрудничестве с Алиной Синяковой',theatre:'Национальный академический оркестр народных инструментов России имени Н. П. Осипова · Концертный зал Чайковского',internal:'projects/osipov-detyam.html',external:'https://meloman.ru/kids/concerts/kzch-2026-03-21/'},
  {sortDate:'2026-03-06',year:'2026',title:'Мата-Хари',director:'Вероника Вернадская',designer:'Надежда Берендеева',theatre:'Кировский драматический театр',cover:'assets/mata-cover.jpeg',featured:true,internal:'projects/mata-hari.html',external:'https://kirovdramteatr.ru/shows/418'},
  {sortDate:'2026-02-22',year:'2026',title:'Змей Горыныч и другие диковинные звери',director:'',designer:'',extraCredit:'видеоконтент в сотрудничестве с Алиной Синяковой',theatre:'Национальный академический оркестр народных инструментов России имени Н. П. Осипова · Концертный зал Чайковского',internal:'projects/osipov-detyam.html',external:'https://meloman.ru/kids/concerts/kzch-2026-02-22/'},
  {sortDate:'2026-01-14',year:'2026',title:'Федя Булкин',director:'Юрий Печенежский',designer:'Леша Лобанов',theatre:'Театр Практика · Основная сцена',cover:'assets/fedya-cover.jpg',featured:true,internal:'projects/fedya-bulkin.html',external:'https://praktikatheatre.ru/events/fedya'},

  // 2025
  {sortDate:'2025-12-25',year:'2025',title:'Надо ли выходить из равновесия?',director:'Лукас Сухарев',designer:'',extraCredit:'лаборатория «Несуществующая музыка»',theatre:'Театр Практика',external:'https://praktikatheatre.ru/events/muslab'},
  {sortDate:'2025-11-30',year:'2025',title:'Концерт Fire Granny',director:'',designer:'',theatre:'16 тонн',external:'https://music.yandex.ru/artist/5123595'},
  {sortDate:'2025-11-21',year:'2025',title:'С любимыми не расставайтесь',director:'Вероника Вернадская',designer:'Надежда Берендеева',theatre:'Кировский драматический театр',external:'https://kirovdramteatr.ru/shows/403'},
  {sortDate:'2025-11-07',year:'2025',title:'Концерты Обе Две',director:'',designer:'',extraCredit:'постановщики — Studio Rays',theatre:'Санкт-Петербург и Москва'},
  {sortDate:'2025-09-19',year:'2025',title:'Колобок',director:'Серафима Красникова',designer:'',theatre:'Музыкальный гастро-спектакль · ВкусВилл на Красной Пресне',cover:'assets/kolobok-green.png',featured:true,internal:'projects/kolobok.html',external:'https://vk.ru/wall33395401_5113'},
  {sortDate:'2025-09-12',year:'2025',title:'Белый пароход',director:'Юрий Печенежский',designer:'Леша Лобанов',theatre:'РАМТ · Черная комната',heroTheatre:'РАМТ',cover:'assets/belyy-cover.jpg',featured:true,internal:'projects/belyy-parokhod.html',external:'https://ramt.ru/plays/item/belyy-parokhod/'},
  {sortDate:'2025-08-01',year:'2025',title:'Премия Корша 2025',director:'Сергей Сотников',designer:'',theatre:'Театр Наций'},
  {sortDate:'2025-07-01',year:'2025',title:'Пустые поезда',director:'Алексей Золотовицкий',designer:'Софья Егорова',theatre:'РАМТ',cover:'assets/pustye-cover.jpg',featured:true,internal:'projects/pustye-poezda.html',external:'https://ramt.ru/plays/item/pustye-poezda/'},
  {sortDate:'2025-07-01',year:'2025',title:'Жизнь в движении',director:'Арсений Мещеряков',designer:'Анастасия Юдина',theatre:'Театр Наций'},
  {sortDate:'2025-07-01',year:'2025',title:'Синяя птица',director:'Сергей Сотников',designer:'',theatre:'ЦАТРА',external:'https://www.afisha.ru/performance/sinyaya-ptica-311514/'},
  {sortDate:'2025-07-01',year:'2025',title:'Пастух и пастушка',director:'Сергей Сотников',designer:'',theatre:'Театр Наций',external:'https://theatreofnations.ru/performances/pastuh-i-pastushka'},
  {sortDate:'2025-07-01',year:'2025',title:'Жюли',director:'Джеймс Нобо',designer:'Анастасия Юдина',theatre:'Театр Наций',external:'https://theatreofnations.ru/performances/zhyuli'},
  {sortDate:'2025-07-01',year:'2025',title:'Маленький принц',director:'Татьяна Миткалева',designer:'',extraCredit:'видеоконтент в сотрудничестве с Алиной Синяковой',theatre:'Кстати театр',external:'https://kstati-teatr.ru/shows/malenkij-princ/'},
  {sortDate:'2025-07-01',year:'2025',title:'Сказ о коте Баюне',director:'',designer:'',extraCredit:'проект «Арт-лаборатория молодых творцов «Пограничное искусство: Курск и Белгород»» под руководством хореографа Марины Яшиной',theatre:'Арт-лаборатория молодых творцов',external:'https://vk.ru/wall-229571946_175'},

  // 2024
  {sortDate:'2024-11-23',year:'2024',title:'Медный всадник',director:'Кирилл Симонов',designer:'Екатерина Злая',theatre:'Саратовский академический театр оперы и балета',cover:'assets/medny-cover.jpg',featured:true,internal:'projects/medny-vsadnik.html',external:'https://www.operabalet.ru/repertuar/balet/mednyi_vsadnik_12.html'},
  {sortDate:'2024-08-01',year:'2024',title:'Итальянские истории Горького',director:'Сергей Сотников',designer:'',theatre:'Фестиваль «Горький+»',external:'https://www.gorkiy.plus/moscow/2025/italyanskie-istorii'},
  {sortDate:'2024-07-01',year:'2024',title:'Чужие письма',director:'Андрей Цисарук',designer:'',theatre:'Театр Практика',external:'https://praktikatheatre.ru/events/chuzhiepisma'},
  {sortDate:'2024-07-01',year:'2024',title:'Концерт на бис — юбилей Владимира Спивакова, 80 лет',director:'Дмитрий Сердюк',designer:'',theatre:'ММДМ',external:'https://www.mmdm.ru/event/vladimir-spivakov-koncert-na-bis?event_pk=4917'},
  {sortDate:'2024-07-01',year:'2024',title:'Премия Корша',director:'Сергей Сотников',designer:'',theatre:'Театр Наций'},
  {sortDate:'2024-07-01',year:'2024',title:'Гриша не свидетель',director:'Алексей Чеботарёв',designer:'Алиса Школьникова',theatre:'РАМТ',external:'https://ramt.ru/plays/item/grisha-ne-svidetel/'},
  {sortDate:'2025-02-01',year:'2025',title:'Географ глобус пропил',director:'Андрей Цисарук',designer:'',theatre:'Тверской академический театр драмы',external:'https://tatd.ru/repertoire/large_stage/geograf-globus-propil-/'},
  {sortDate:'2025-04-01',year:'2025',title:'Шинель',director:'Андрей Цисарук',designer:'',theatre:'Театр имени Волкова'},
  {sortDate:'2025-05-01',year:'2025',title:'Денискины рассказы',director:'Дмитрий Сердюк',designer:'',extraCredit:'анимация · Студия ШЕНЕ',theatre:'Фестиваль «НЕБО»',cover:'assets/deniski-cover.png',featured:true,internal:'projects/deniskiny-rasskazy.html'},
  {sortDate:'2024-07-01',year:'2024',title:'Конек Горбунок',director:'Юрий Печенежский',designer:'',theatre:'Фестиваль «НЕБО»'},
  {sortDate:'2025-06-01',year:'2025',title:'Прогулка в городе Т',director:'Дмитрий Сердюк',designer:'',extraCredit:'автор идеи Анастасия Егорова',featuredCredit:'автор идеи Анастасия Егорова',theatre:'Фестиваль «Горький+» · Нижний Новгород',cover:'assets/progulka-cover.jpg',featured:true,internal:'projects/progulka-v-gorode-t.html'},
  {sortDate:'2024-03-25',year:'2024',title:'Когда мы умели летать',director:'Михаил Елисеев',designer:'',theatre:'Театр Ермоловой',external:'https://www.afisha.ru/performance/kogda-my-umeli-letat-266807/'},
  {sortDate:'2024-01-20',year:'2024',title:'Жан и Беатриса',director:'Дмитрий Сердюк',designer:'',theatre:'The Tabernacle · 34–35 Powis Sq, London W11 2AY, United Kingdom',external:'https://afisha.london/event/spektakl-po-pese-karolya-freshetta-zhan-i-beatrisa/'},

  // 2023
  {sortDate:'2023-12-01',year:'2023',title:'Борис Годунов',director:'Петр Шерешевский',designer:'',theatre:'Театр Наций',external:'https://theatreofnations.ru/performances/boris-godunov'},
  {sortDate:'2023-10-25',year:'2023',title:'Наташа',director:'Светлана Землякова',designer:'Екатерина Злая',theatre:'Театр Наций',external:'https://theatreofnations.ru/performances/natasha'},
  {sortDate:'2023-10-01',year:'2023',title:'Вольфганг. Или Амадей?',director:'Никита Кобелев',designer:'',theatre:'',external:'https://www.afisha.ru/performance/volfgang-ili-amadey-264491/'},
  {sortDate:'2023-01-20',year:'2023',title:'Охота жить',director:'Алена Лаптева',designer:'Сергей Тырин',theatre:'Театр Олега Табакова',external:'https://tabakov.ru/performances/okhota_zhit/'}
];

PROJECTS.sort((a,b)=>b.sortDate.localeCompare(a.sortDate));
const FEATURED=PROJECTS.filter(p=>p.featured);
