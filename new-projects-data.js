// Подключается ПОСЛЕ content.js, но ДО app.js.
// Старый «Оркестр Осипова — детям» остаётся доступен из списка работ.
const oldOsipov = PROJECTS.find(p => p.title === 'Оркестр Осипова — детям');
if (oldOsipov) { oldOsipov.featured = false; oldOsipov.showInList = true; }
const oldFeaturedIndex = FEATURED.findIndex(p => p.title === 'Оркестр Осипова — детям');
if (oldFeaturedIndex !== -1) FEATURED.splice(oldFeaturedIndex, 1);
const NEW_PROJECTS = [
  {sortDate:'2026-11-14',year:'2026',title:'Саша, привет!',director:'Алексей Золотовицкий',designer:'София Егорова',extraCredit:'видеохудожник — Екатерина Чебышева',theatre:'Калининградский областной драматический театр',cover:'assets/sasha-privet/eyes.jpg',featured:true,internal:'projects/sasha-privet.html'},
  {sortDate:'2026-11-07',year:'2026',title:'Академия смеха',director:'Алексей Золотовицкий',designer:'',extraCredit:'видеохудожник — Екатерина Чебышева',theatre:'Спектакль · премьера 7 ноября 2026',cover:'assets/akademiya-smeha/cover.jpg',featured:true,internal:'projects/akademiya-smeha.html'},
  {sortDate:'2026-10-24',year:'2026',title:'Приключения Чиполлино',director:'',designer:'',extraCredit:'видеохудожник — Екатерина Чебышева',theatre:'Оркестр Осипова — детям · КЗ Чайковского / Филармония-2',cover:'assets/chipollino/tchaikovsky-1.jpg',featured:true,internal:'projects/chipollino.html'}
];
PROJECTS.push(...NEW_PROJECTS);
PROJECTS.sort((a,b) => b.sortDate.localeCompare(a.sortDate));
FEATURED.unshift(...NEW_PROJECTS);
