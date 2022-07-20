const initialstate={
    users: [
        {
            id :1,
            img:"le dernier des templiers.jpg",
            synopsys:`Behman, un chevalier, revient en Europe et la trouve ravagée par la peste noire.
                    Un cardinal sur le point de mourir ordonne à Behman et son ami Felson d'emmener une femme accusée de sorcellerie
                    dans une abbaye où les moines détruiront ses pouvoirs et mettront fin à la peste.`,
            video:"https://www.youtube.com/embed/lGkPW8KLv34",
            title:"le dernier des templiers"

        },
        
        {
            id :2,
            img:"chaos of the dead.jpg",
            synopsys:`Aidan se barricade dans son appartement car dehors c'est le chaos. 
            Des zombies ont envahi les rues. Dans sa cour, le jeune homme découvre une fille qui est également prise au piège.
            Ils doivent maintenant trouver un moyen de s'en sortir... Réalisateur : Johnny Martin Cast : Tyler Posey, Summer Spiro,
            Donald Sutherland Genre Thriller, Epouvante Horreur Film complet en français`,
            video:"https://www.youtube.com/embed/qS3pM1B3w2Y" ,
            title:"chaos of the dead"
        },
        
        {
            id :3,
            img:"rebellion.jpg",
            synopsys:`Un policier se fait volontairement incarcérer dans une prison pour infiltrer un gang...`,
            video:"https://www.youtube.com/embed/q1OyVDrxhaY",
            title:"rebellion"

        },
        {
            id :4,
            img:"pirate des araibes 5.jpg",
            synopsys:`Jack Sparrow est confronté au redoutable Capitaine Salazar et ses pirates meurtriers;
            Jack Sparrow se retrouve dans le Triangle des Bermudes à la recherche du légendaire Trident de Poséidon,
            un puissant artéfact qui donne un pouvoir absolu sur les mers.`,
            video:"https://www.youtube.com/embed/wSL0X0IKCsM",
            title:"pirate des araibes 5" 

        },
        {
            id :5,
            img:"zeus.jpg",
            synopsys:`la mythologie grecque`,
            video:"https://www.youtube.com/embed/VkYM1okCFBU", 
            title:"la mythologie grecque"
        },
        {
            id :6,
            img:"planete.jpg",
            synopsys:`Documentiare sur notre planete`,
            video:"https://www.youtube.com/embed/VMuI4S6e_yw",
            title:"Il etait une fois notre planete"

        },
    ]
}



function rootReducer(state=initialstate,action){
    switch(action.type){
        default:
        return state;
    }

}

export default rootReducer;