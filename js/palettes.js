const palettes = [
    {
        name: "Aomi's Clothes",
        character: "Keito Hasumi",
        colors: ["#07405a", "#99bac1", "#3c7672", "#7b8b54", "#cfdf7d", "#e3dc9a", "#f7f5d8"],
        tags: [ "keito", "yellow", "green", "blue", "white", "chic", "muted", "refreshing"]
    },
    {
        name: "Quarrel Festival",
        character: "Keito Hasumi",
        colors: ["#0f0602", "#5d5136", "#aa8a47", "#7b0903", "#bc1502", "#d98e1a", "#f5d350"],
        tags: ["keito", "red", "orange", "yellow", "black", "chic", "warm"]
    },
    {
        name: "Victory Flag",
        character: "Keito Hasumi",
        colors: ["#d64c42", "#f48f2c", "#fef067", "#fcfede", "#afe755", "#3c9274", "#a4f5d5"],
        tags: ["keito", "red", "pink", "yellow", "green", "blue", "vibrant", "tropical", "pastel"]
    },
    {
        name: "The Philosopher",
        character: "Keito Hasumi",
        colors: ["#251a24", "#5c4e35", "#a38a50", "#e6d46e", "#43602f", "#acb832", "#dbd9bf"],
        tags: ["keito", "yellow", "green", "brown", "muted", "refreshing"]
    },
    {
        name: "Daikagura",
        character: "Keito Hasumi",
        colors: ["#e44f42", "#fae56f", "#c6d966", "#fcf7d2", "#e8c99b", "#71544c", "#331419"],
        tags: ["keito", "red", "yellow", "green", "brown", "refreshing"]
    },
    {
        name: "At a Crossroad",
        character: "Keito Hasumi",
        colors: ["#cb2c69","#6f1639","#17102c", "#38b2fc", "#5d47de", "#e87bd8", "#e8dfe7"],
        tags: ["keito", "green", "blue", "purple", "moody"]
    },
    {
        name: "Bakyu~un",
        character: "Keito Hasumi",
        colors: ["#451f1f", "#ab3944", "#f0b072", "#f2b2af","#fae5db", "#fbee99", "#6c6c25"],
        tags: ["keito", "red", "orange", "yellow", "green", "pink", "brown", "chic"]
    },
    {
        name: "Comic World",
        character: "Keito Hasumi",
        colors: ["#302d55", "#8f9cd8", "#76dadb", "#feb5c7", "#ed61a2", "#f5e749", "#83a02d"],
        tags: ["keito", "yellow", "green", "blue", "pink", "refreshing"]
    },
    {
        name: "Tsukimi",
        character: "Keito Hasumi",
        colors: [ "#79793f", "#83a02d", "#faa344", "#b42830", "#700703", "#3d2c88", "#0b022b"],
        tags: ["keito", "red", "orange", "green", "purple", "chic"]
    },
    {
        name: "Chinatown",
        character: "Keito Hasumi",
        colors: ["#261b19", "#663b33", "#f1bc4c", "#35784a", "#15422e", "#951120", "#e3631a"],
        tags: ["keito", "red", "orange", "yellow", "green", "brown", "chic", "autumnal"]
    },
    {
        name: "Leader of Akatsuki",
        character: "Keito Hasumi",
        colors: ["#302a2a", "#ab2b2c", "#ea4725", "#7c9433", "#f1bd81", "#fffcd7", "#7d0e45"],
        tags: ["keito", "red", "orange", "green", "purple", "brown", "vibrant"]
    },
    {
        name: "Vampire Shogun",
        character: "Keito Hasumi",
        colors: ["#1c036e", "#675cad", "#fcac2e", "#eb7343", "#f52d25", "#800015",  "#1d152a"],
        tags: ["keito", "red", "yellow", "blue", "purple", "vibrant", "moody"]
    },
    {
        name: "Year of the Ox",
        character: "Keito Hasumi",
        colors: ["#18080e", "#32605e", "#f8cc9d", "#c8997b", "#f6824f", "#d94a50", "#971a2c"],
        tags: ["keito", "red", "orange", "green", "chic", "warm"]
    },
    {
        name: "Scarlet Halloween",
        character: "Keito Hasumi",
        colors: ["#0b0a2a", "#660b5b", "#c43e79", "#d8a7f8", "#fee9f0", "#384f47", "#3e679f"],
        tags: ["keito", "purple", "pink", "black"]
    },
    {
        name: "Lotus Vow",
        character: "Keito Hasumi",
        colors: ["#0a2449", "#408493", "#275c4f","#72963c","#fbfada", "#d5d0c4",  "#7d1d2b"],
        tags: ["keito", "red", "yellow", "green", "blue", "brown", "refreshing", "chic"]
    },
    {
        name: "Shutter Chance",
        character: "Keito Hasumi",
        colors: ["#266088", "#6eb6e3", "#77b4b1", "#a3a39a", "#d5d0c4", "#b99970", "#bf5e43"],
        tags: ["keito", "orange", "yellow", "green", "brown", "grey", "muted", "chic", "autumnal"]
    },
    {
        name: "Stage of Dreams",
        character: "Keito Hasumi",
        colors: ["#191e45", "#3c7c88",  "#630200", "#b84500", "#ff9c36", "#f1d672",  "#e3dec8"],
        tags: ["keito", "red", "orange", "yellow", "green", "brown", "vibrant"]
    },
    {
        name: "Gourmand",
        character: "Keito Hasumi",
        colors: ["#401c04", "#9e0e1a", "#f05724", "#ff9900", "#e0b8cd", "#ba0076", "#630c43"],
        tags: ["keito", "red", "orange", "yellow", "purple", "black", "chic", "vibrant", "moody"]
    },
    {
        name: "KAGETSU",
        character: "Keito Hasumi",
        colors: ["#570000", "#bf0600", "#f19b34", "#f6e15a", "#30b0b3", "#260078", "#11001c"],
        tags: ["keito", "red", "orange", "blue", "purple", "vibrant"]
    },
    {
        name: "Limning Spring",
        character: "Keito Hasumi",
        colors: ["#2B2C28", "#2F6263", "#92cc66", "#E5FAF9", "#eddca6", "#c48a69", "#d69e00"],
        tags: ["keito", "red", "orange", "green", "blue", "grey", "white", "refreshing", "vibrant"]
    },
    {
        name: "Akatsuki's Strength",
        character: "Kuro Kiryu",
        colors: ["#edc277", "#d44508", "#8a060a", "#650237ff", "#e3d3e2","#403cba", "#00054f"],
        tags: ["kuro", "red", "yellow", "blue", "purple", "black", "white"]
    },
    {
        name: "Tough Guy",
        character: "Kuro Kiryu",
        colors: ["#f3cc8b", "#ffc400", "#e36200", "#d1ccc2", "#160057", "#1d0004", "#88171b"],
        tags: ["kuro", "red", "orange", "yellow", "blue", "grey", "black", "chic"]
    },
    {
        name: "Opera",
        character: "Kuro Kiryu",
        colors: ["#525c39", "#262020", "#4c1115", "#924533", "#d1a84e", "#f7f27c", "#d1bda5"],
        tags: ["kuro", "yellow", "green", "brown", "muted", "autumnal"]
    },
    {
        name: "Kabukimono",
        character: "Kuro Kiryu",
        colors: ["#930b05", "#f84811", "#ed9738", "#eed72d", "#0d0604", "#452649", "#635494"],
        tags: ["kuro", "red", "orange", "yellow", "purple", "black"]
    },
    {
        name: "Prince Charming",
        character: "Kuro Kiryu",
        colors: ["#ded1ca", "#987faa", "#782e4e", "#d84f34", "#f7ce8f", "#b27d7b", "#0e0b11"],
        tags: ["kuro", "red", "purple", "grey", "black", "warm", "moody", "muted"]
    },
    {
        name: "Big Bad Wolf",
        character: "Kuro Kiryu",
        colors: ["#6e5e7d", "#0e0d2e", "#08157c", "#4233d6", "#82f0fe", "#f1aed0", "#a30b4c"],
        tags: ["kuro", "purple", "blue", "pink", "moody"]
    },
    {
        name: "Shinsengumi",
        character: "Kuro Kiryu",
        colors: ["#f84846", "#b01414ff", "#fdf4d5", "#def0ec", "#87e7cc", "#0961a3", "#14245a"],
        tags: ["kuro", "red", "yellow", "blue", "vibrant"]
    },
    {
        name: "Cats and Camelia",
        character: "Kuro Kiryu",
        colors: ["#0d0947", "#3a1a94", "#ffd257", "#eaac03", "#d67600ff", "#be0e0e", "#620000"],
        tags: ["kuro", "purple", "red", "yellow", "orange", "warm"]
    },
    {
        name: "Onigashima",
        character: "Kuro Kiryu",
        colors: ["#52c4e3", "#132f7e", "#676ad8", "#5f2295ff", "#ba34af", "#b52c48", "#570101ff"],
        tags: ["kuro", "blue", "purple", "pink", "red", "vibrant"]
    },
    {
        name: "Underdoctor",
        character: "Kuro Kiryu",
        colors: ["#1c2421", "#22af9eff", "#dae1e1ff", "#cebeb8", "#768983", "#a72a1f", "#54040b"],
        tags: ["kuro", "black", "green", "white", "grey", "red"]
    },
    {
        name: "Vagabond",
        character: "Kuro Kiryu",
        colors: ["#0c1736", "#568784", "#74bac7", "#f1f3e7", "#f6dcb9", "#f5e891", "#de524b"],
        tags: ["kuro", "blue", "yellow", "orange", "red"]
    },
    {
        name: "Blade and Fist",
        character: "Kuro Kiryu",
        colors: ["#141550", "#4e32bd", "#478badff", "#efda61", "#ff9d2d", "#e92b43", "#a10000"],
        tags: ["kuro", "blue", "yellow", "orange", "red", "vibrant"]
    },
    {
        name: "Threads of Youth",
        character: "Kuro Kiryu",
        colors: ["#bb3a22", "#79060f", "#f0eee5", "#e4d4cc", "#776f74", "#0f0a08", "#e9c318"],
        tags: ["kuro", "red", "white", "grey", "black", "yellow"]
    },
    {
        name: "Crossfire",
        character: "Kuro Kiryu",
        colors: ["#006aeb", "#78d0d2ff", "#c1dce6", "#e8e4ce", "#a98f94", "#ed906a", "#f44a41"],
        tags: ["kuro", "blue", "white", "grey", "orange"]
    },
    {
        name: "Secret Jeweller",
        character: "Kuro Kiryu",
        colors: ["#d1ad71", "#72523a", "#5a1340", "#e6e0d4", "#342275ff", "#6e6fbe", "#cd4358"],
        tags: ["kuro", "brown", "white", "purple", "red"]
    },
    {
        name: "Tomorrow's Scars",
        character: "Kuro Kiryu",
        colors: ["#081635", "#075d5f", "#23c0cd", "#3572f0", "#361390", "#59025a", "#e9b4a8"],
        tags: ["kuro", "black", "green", "blue", "purple", "pink"]
    },
    {
        name: "Dragon Boat",
        character: "Kuro Kiryu",
        colors: ["#091344", "#04599b", "#a10606", "#ff5653", "#26c5bd", "#ffbd2eff", "#c4e024ff"],
        tags: ["kuro", "blue", "red", "yellow", "green", "tropical"]
    },
    {
        name: "VANQUISH",
        character: "Kuro Kiryu",
        colors: ["#6e2db6", "#283150", "#57716b", "#0d582c", "#64bf69", "#e7e552", "#93a857"],
        tags: ["kuro", "purple", "green", "yellow", "vibrant"]
    }
];