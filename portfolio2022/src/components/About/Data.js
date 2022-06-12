export const data = {
    url: 'HandsPoint.png',
    descrption: [
        {
            icon:"👋 ", 
            text: function createMarkup() {
                return {__html: "I'm a <em>career shifter</em> and learning passionate, getting out of my comfort zone is a priority to push myself, to evolve and learning is its cornerstone. I have a thirst for knowledge and <strong>thrive when needing to adapt to new challenges</strong>." };
              },
        },
        {
            icon:"👩‍💻", 
            text: function createMarkup() {
                return {__html:"Becoming a <em>Full Stack developer</em> is a way to quench my curiosity as it requires me to learn and adapt to fast-moving technologies constantly. It allows me to use both <strong>critical thinking and creativity</strong> to express myself."};
            },
        },
        {
            icon:"🔎 ", 
            text: function createMarkup() {
                return {__html:" Passionate about understanding users, I capitalize on <strong>4+ years as a market researcher</strong> to develop user-centric app with <em>UX as a priority.</em>"};
            },
        },
        {
            icon:"🤝  ", 
            text: function createMarkup() {
                return {__html:"I'm convinced that teamwork is essential to reach challenging objectives and grow on a personal perspective, that's why a good <em>team player</em>. However <strong>I'm highly adaptable</strong> and know how to work autonomously when it better fits your need."};
             },
        },
        {
            icon:"📣 ", 
            text: function createMarkup() {
                return {__html:" I'm open for <em>freelancing</em> or for a <em>remote position</em> within EU or on-site in Madrid If you think my profile could be a good match for your team, write me to discuss it over a (virtual) coffee."};
             },
        },
        
    ],
    shortDescr: "Passionate about learning, becoming a Full Stack developer is a way to quench my curiosity as it requires me to learn and adapt to fast-moving technologies. I’m committed to building user-centric web app by capitalizing on 4+ years as a market researcher.",
    about: {
        title: "About me",
        descr:"I am a developer based in Madrid capitalizing on +4 years as market researcher to bring great UX to users. I'm looking forward to new challenges within a team after two years of freelancing"
    },
    iceBreaker: {
        title: "Ice Breaker",
        descr: function createMarkup() {
            return {__html:"I'm passionate about <strong>travel</strong> and have lived on four continents, always in to discuss new adventures' destinations.  Also I'm a big  <strong>cooking fan</strong> so come and share with me your top recipes from your country 🥘" }
        }
    },
    Languages: {
        title: "Languages",
        descr: ["French: Native", "English: Fluent", "Spanish: Intermediate"], 
    },
    availability: {
        title: "Practical details",
        descr: ["Freelancing","Open for remote within the EU", "Open for onsite position in Madrid"]

    }
}