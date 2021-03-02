

export function getDatetimestartNumber(d:string)
{//console.log(d);
    var y=d.substr(0,4);
    var m=d.substr(4,2);
    var dt=d.substr(6,2);
    return ""+y+m+dt+"0000";
}
export function getDateTimeendNumber(d:string)
{//console.log(d);
    var y=d.substr(0,4);
    var m=d.substr(4,2);
    var dt=d.substr(6,2);
    return ""+y+m+dt+"2359";
}



export function getDateTimeFormat(d:string)
{
    var y=d.substr(0,4);
    var m=d.substr(4,2);
    var dt=d.substr(6,2);
    var hr=d.substr(8,2);
    var mn=d.substr(10,2);
    return ""+y+"-"+m+"-"+dt+"T"+hr+":"+mn;
}

export function getDateTimeDisplayFormat(d:string)
{
    var y=d.substr(0,4);
    var m=d.substr(4,2);
    var dt=d.substr(6,2);
    var hr=d.substr(8,2);
    var mn=d.substr(10,2);
    return hr+":"+mn+" "+dt+"/"+m+"/"+y;
}
export function getDateDisplayFormat(d:string)
{
    var y=d.substr(0,4);
    var m=d.substr(4,2);
    var dt=d.substr(6,2);
    return dt+"/"+m+"/"+y;
}
export function getDateDisplayfromdate(d:string)
{
    console.log(d);
    var y=d.substr(0,4);
    var m=d.substr(5,2);
    var dt=d.substr(8,2);
    return dt+" / "+m+" / "+y;
}
export function getTimeFormat(d:string)
{
    
    var hr=d.substr(0,2);
    var mn=d.substr(2,2);
    //console.log("asd"+hr);
    //console.log("asd"+mn);
    return ""+hr+":"+mn;
}
export function getTimeNumberfromdate(d:Date)
{
    var hr=d.getHours();
    var min=d.getMinutes();
    return ""+hr+min;
}
export function getTimeNumber(d:string)
{
    //console.log("asdrr"+d);
    var tokens=d.split(":");
    var hr=tokens[0];
    var mn=tokens[1];
    
    return ""+hr+mn;
}

// export function getDateTimeNumberfromdate(d:Date)
// {
//     var y=d.getFullYear();
//     var m=d.getMonth()+1;
//     var dt=d.getDate();
//     var hr=d.getHours();
//     var min=d.getMinutes();
//     return ""+y+m+dt+hr+min;
// }

export function getDateTimeNumber(d:string)
{
    var tokens=d.split("-");
    var y=tokens[0];
    var m=tokens[1];
    tokens=tokens[2].split("T");
    var dt=tokens[0];
    tokens=tokens[1].split(":");
    var hr=tokens[0];
    var mn=tokens[1];
    
    return ""+y+m+dt+hr+mn;
}
export function getDateTimeNumberS(d:string)
{
    console.log(d);
    var tokens=d.split("-");
    var y=tokens[0];
    var m=tokens[1];
    tokens=tokens[2].split("T");
    var dt=tokens[0];
    tokens=tokens[1].split(":");
    var hr=tokens[0];
    var mn=tokens[1];
    
    return ""+y+m+dt+"0000";
}
export function getDateTimeNumberE(d:string)
{
    console.log(d);
    var tokens=d.split("-");
    var y=tokens[0];
    var m=tokens[1];
    tokens=tokens[2].split("T");
    var dt=tokens[0];
    tokens=tokens[1].split(":");
    var hr=tokens[0];
    var mn=tokens[1];
    
    return ""+y+m+dt+"2359";
}





































































export const lang=[
    {"Your online haircut booking whenever, wherever":"Your online haircut booking whenever, wherever"},{"Your online haircut booking whenever, wherever":"Vos rendez-vous beauté en ligne"},
    {"Free":"Free"},{"Free":"Gratuit"},
    {"Easy":"Easy"},{"Easy":"Simple"},
    {"Quick":"Quick"},{"Quick":"Rapide"},
    {"Booking's day":"Booking's day"},{"Booking's day":"Rendez-vous du jour"},
    {"Statistics":"Statistics"},{"Statistics":"Statistique"},
    {"Validate":"Validate"},{"Validate":"Valider"},
    {"Write your name":"Write your name"},{"Write your name":"Ecrivez votre nom"},
    {"Customer mode":"Customer mode"},{"Customer mode":"Mode salon"},
    {"Name":"Name"},{"Name":"Nom"},
    {"Booking of the day":"Booking of the day"},{"Booking of the day":"Réservation du jour"},
    {"Haircut":"Haircut"},{"Haircut":"Prestation"},
    {"Time":"Time"},{"Time":"Temps"},
    {"Comments":"Comments"},{"Comments":"Commentaire"},
    {"Customer mode":"Customer mode"},{"Customer mode":"Mode salon"},
    {"Visit's number in the barbershop":"Visit's number in the barbershop"},{"Visit's number in the barbershop":"Nombre de visite"},
    {"Looking for haircut":"Looking for haircut"},{"Looking for haircut":"Recherche d'une prestation"},
    {"By customer":"By customer"},{"By customer":"Par client"},
    {"By date":"By date"},{"By date":"Par date"},
    {"Looking for customer":"Looking for customer"},{"Looking for customer":"Recherche d'un client"},
    {"Customer list":"Customer list"},{"Customer list":"Liste des clients"},
    {"Bookings":"Bookings"},{"Bookings":"Réservation"},
    {"Informations":"Informations"},{"Informations":"Informations"},
    {"Haircut management":"Haircut management"},{"Haircut management":"Gestion des prestations"},
    {"Employee management":"Employee management"},{"Employee management":"Gestion des employés"},
    {"Booking's statistic":"Booking's statistic"},{"Booking's statistic":"Statistique des réservations"},
    {"Booking from a period":"Booking from a period"},{"Booking from a period":"Réservation sur une période"},
    {"From":"From"},{"From":"Du"},
    {"To":"To"},{"To":"Jusqu'à"},
    {"Number of booking":"Number of booking"},{"Number of booking":"Nombre de réservation"},
    {"Booking by gender":"Booking by gender"},{"Booking by gender":"Réservation par genre"},
    {"Customer card":"Customer card"},{"Customer card":"Fiche cliente"},
    {"Mobile phone":"Mobile phone"},{"Mobile phone":"Téléphone"},
    {"Mail address":"Mail address"},{"Mail address":"Adresse mail"},
    {"Visit's number":"Visit's number"},{"Visit's number":"Nombre de visite"},
    {"Add a employee":"Add a employee"},{"Add a employee":"Ajouter un employé(e)"},
    {"Employee list":"Employee list"},{"Employee list":"Liste des employés"},
    {"Add a haircut":"Add a haircut"},{"Add a haircut":"Ajouter une prestation"},
    {"Haircut list":"Haircut list"},{"Haircut list":"Liste des prestations"},
    {"Haircut name":"Haircut name"},{"Haircut name":"Nom de la prestation"},
    {"Haircut price":"Haircut price"},{"Haircut price":"Prix de la prestation"},
    {"Delete haircut":"Delete haircut"},{"Delete haircut":"Supprimer prestation"},
    {"Name":"Name"},{"Name":"Nom"},
    {"First name":"First name"},{"First name":"Prénom"},
    {"Cancel":"Cancel"},{"Cancel":"Annuler"},
    {"Price":"Price"},{"Price":"Prix"},
    {"About us":"About us"},{"About us":"A propos de nous"},
    {"Appointment duration ":"Appointment duration "},{"Appointment duration ":"Durée des RDV"},
    {"Opening time":"Opening time"},{"Opening time":"Heure d'ouverture"},
    {"Address":"Address"},{"Address":"Adresse"},
    {"Who are we ?":"Who are we ?"},{"Who are we ?":"Qui sommes nous ?"},
    {"Freelancer informations":"Freelancer informations"},{"Freelancer informations":"Informations Freelancer"},
    {"Working time":"Working time"},{"Working time":"Heure de travaille"},
    {"Hairdresser address":"Hairdresser address"},{"Hairdresser address":"Adresse du salon"},
    {"Employee card":"Employee card"},{"Employee card":"Fiche employé(e)"},
    {"Off Work (Holiday)":"Off Work (Holiday)"},{"Off Work (Holiday)":"Absent"},
    {"Delete employee":"Delete employee"},{"Delete employee":"Supprimer employé"},
    {"Favorites places":"Favorites places"},{"Favorites places":"Vos salons favoris"},
    {"Make a booking":"Make a booking"},{"Make a booking":"Prendre un rendez-vous"},
    {"Favorites places":"Favorites places"},{"Favorites places":"Salon favori"},
    {"Search":"Search"},{"Search":"Recherche"},
    {"Booking with a hairdresser":"Booking with a hairdresser"},{"Booking with a hairdresser":"RDV avec un coiffeur"},
    {"nearby":"nearby"},{"nearby":"Près de"},
    {"Research":"Research"},{"Research":"Recherche"},
    {"I'm a barbershop owner":"I'm a barbershop owner"},{"I'm a barbershop owner":"J'ai un salon de coiffure"},
    {"F-B":"F-B"},{"F-B":"Avis"},
    {"Booking":"Booking"},{"Booking":"Réservation"},
    {"Feedbacks":"Feedbacks"},{"Feedbacks":"Avis"},
    {"Choose a haircut service":"Choose a haircut service"},{"Choose a haircut service":"Choisir une prestation"},
    {"About":"About"},{"About":"A propos"},
    {"List of haircut":"List of haircut"},{"List of haircut":"Liste des prestations"},
    {"Selected haircut":"Selected haircut"},{"Selected haircut":"Prestation sélectionée"},
    {"Choose your barber":"Choose your barber"},{"Choose your barber":"Choisir avec qui"},
    {"What time & date":"What time & date"},{"What time & date":"Heure & Date du RDV"},
    {"Identification":"Identification"},{"Identification":"Connexion"},
    {"Have you already used haircutline":"Have you already used haircutline"},{"Have you already used haircutline":"Avez vous déjà utilisé Haircutline"},
    {"Password":"Password"},{"Password":"Mot de passe"},
    {"Sign In":"Sign In"},{"Sign In":"Se connecter"},
    {"Forgot your password":"Forgot your password"},{"Forgot your password":"Mot de passe oublié"},
    {"New on Haircutline":"New on Haircutline"},{"New on Haircutline":"Nouveau sur Haircutline"},
    {"Create your account":"Create your account"},{"Create your account":"Créer votre compte"},
    {"Resume":"Resume"},{"Resume":"Récapitulatif"},
    {"Time":"Time"},{"Time":"Heure"},
    {"Date":"Date"},{"Date":"Date"},
    {"Add a comments (optional)":"Add a comments (optional)"},{"Add a comments (optional)":"Ajouter un commentaire (facultatif)"},
    {"Past orders":"Past orders"},{"Past orders":"Prestations passées"},
    {"Incoming order":"Incoming order"},{"Incoming order":"Prestation à venir"},
    {"Barber":"Barber"},{"Barber":"Coiffeur"},
    {"Past order detailed":"Past order detailed"},{"Past order detailed":"Détail prestation"},
    {"Review this order":"Review this order"},{"Review this order":"Noter prestation"},
    {"No incoming order":"No incoming order"},{"No incoming order":"Pas de prestation à venir"},
    {"Incoming order":"Incoming order"},{"Incoming order":"Prestation à venir"},
    {"Your next appointment":"Your next appointment"},{"Your next appointment":"Votre prochain rendez-vous"},
    {"Cancel booking":"Cancel booking"},{"Cancel booking":"Annuler RDV"},
    {"Change booking":"Change booking"},{"Change booking":"Déplacer RDV"},
    {"Booking change date":"Booking change date"},{"Booking change date":"Déplacer RDV"},
    {"Edit profil picture":"Edit profil picture"},{"Edit profil picture":"Changer photo de profil"},
    {"Username":"Username"},{"Username":"Pseudo"},
    {"Update":"Update"},{"Update":"Mise à jour"},
    {"Sign out":"Sign out"},{"Sign out":"Déconnexion"},
    {"Enter your mail address":"Enter your mail address"},{"Enter your mail address":"Entrez votre adresse mail"},
    {"Customers Feed-Backs":"Customers Feed-Backs"},{"Customers Feed-Backs":"Avis des clients"},
    {"Hairdresser Name":"Hairdresser Name"},{"Hairdresser Name":"Nom du coiffeur"},
    {"Where (address, postal code..)":"Where (address, postal code..)"},{"Where (address, postal code..)":"Où (adresse, code postal..)"},
    {"Display more days":"Display more days"},{"Display more days":"Afficher plus"}
    ];



export function isEmpty(d:string)
{
    if(d&&d.length>0)
    return false;
    return true;
}

    export function getemailvalidate(d:string)
    {
        if(!isEmpty(d))
        {
            var arr=d.match("");
            if(arr&&arr.length>0)
                return true;
            return false;
        }
        return false;
    }
    export function getpasswordvalidate(d:string)
    {
        if(!isEmpty(d))
        {
            if(d.length>5)
                return true;
            return false;
        }
        return false;
    }