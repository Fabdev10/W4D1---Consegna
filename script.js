const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

function searchJob (place,job ) {      //commento il codice passo passo: creo una funzione che 
  let outcome = {                     // accetta come argomenti luogo e lavoro; all'interno inserisco
    results: [],                      //un oggetto che contiente con un array vuoto results e un contatore a 0 count.
    count: 0,                       
  };
  for (let i = 0; i < jobs.length; i++) {      // creo un ciclo for che cicla attraverso l'array jobs
    const position = jobs[i];                // inserisco un controllo condizionale: se ciclando attraverso
                                            // jobs sia le proprietà degli oggetti contenuti nell'array jobs
    if (                                    // sia gli argomenti che abbiamo passato alla funzione entrambi
      position.location.toLowerCase().includes(place.toLowerCase()) && // trasformati in minuscolo con il metodo to lowercase
      position.title.toLowerCase().includes(job.toLowerCase())   // coincidono (cioè se i argomenti sono contenuti
    ) {                                              // nell'array) andiamo a pushare il risultato nell'array vuoto che abbiamo 
      outcome.results.push(position);               //inizializzato sopra e il contatore aumenta .
      outcome.count++;
    }
}
return outcome                              // la funzione ci restituisce quindi un oggetto con un array coi risultati 
}                                          // e un contatore nel caso che gli argomenti che abbiamo passato siano contenuti

function Search () {                                   //creo una funzione search collegata con l'HTML
  let titleValue = document.getElementById("title").value;  // che prende i valori contenuti nei campi input
  let locationValue = document.getElementById("location").value; // e li da in pasto alla funzione che abbiamo
  let ul = document.getElementById("list");               //creato sopra precedentemente; se i valori che abbiamo
  const result = searchJob (locationValue, titleValue);   //inserito nei campi sono contenuti nell'array,
   for (let i = 0; i < result.results.length; i++) {     // la funzione che abbiamo richiamato ci darà un array con
    const job = result.results[i];                      // un oggetto risultato e contatore; l'oggetto risultato verrà ciclato
    ul.innerHTML += `<li> ${job.title} at ${job.location} </li>`; // e inserito in una stringa e tramite
  }                                                          // la dom manipulation in una lista.
  
}

