var simplemaps_usmap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",

    //State defaults
    state_description: "State description",
    state_color: "#00000",
    state_hover_color: "#c3073f",
    state_url: "https://simplemaps.com",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",

    //Zoom settings
    manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 1,
    popup_shadow: 0,
    popup_corners: 0.1,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "Article Link"
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "Fentanyl overdoses are hitting every Hawaii community, on every island",
      color: "default",
      hover_color: "default",
      url: "https://www.hawaiinewsnow.com/2023/10/07/fentanyl-overdoses-are-hitting-every-hawaii-community-every-island/"
    },
    AK: {
      name: "Alaska",
      description: "Troopers warn of lethal batch of drugs in Mat-Su after 3 overdose deaths in 24 hours",
      color: "default",
      hover_color: "default",
      url: "https://alaskapublic.org/2023/04/10/troopers-warn-of-lethal-batch-of-drugs-in-mat-su-after-3-overdose-deaths-in-24-hours/"
    },
    FL: {
      name: "Florida",
      description: "Deputies: Florida teen drug dealer arrested for 17-year-old's fentanyl overdose death",
      color: "default",
      hover_color: "default",
      url: "https://weartv.com/news/local/deputies-florida-teen-drug-dealer-arrested-for-17-year-olds-fentanyl-overdose-death",
      inactive: "no"
    },
    NH: {
      name: "New Hampshire",
      description: "State officials warn of increase in non-opioid drugs laced with fentanyl",
      color: "default",
      hover_color: "default",
      url: "https://newhampshirebulletin.com/briefs/state-officials-warn-of-increase-in-non-opioid-drugs-laced-with-fentanyl/"
    },
    VT: {
      name: "Vermont",
      description: "Vermont mother brings awareness to fentanyl lacing",
      color: "default",
      hover_color: "default",
      url: "https://www.mychamplainvalley.com/news/local-news/vermont-mother-brings-awareness-to-fentanyl-lacing/"
    },
    ME: {
      name: "Maine",
      description: "Maine woman pleads guilty in 14-month-old son’s fentanyl death",
      color: "default",
      hover_color: "default",
      url: "https://apnews.com/article/toddler-fentanyl-overdose-mother-77675076ebb91cab37048656527dbddb"
    },
    RI: {
      name: "Rhode Island",
      description: "Overdose deaths still at ‘crisis levels’ in RI, new data shows",
      color: "default",
      hover_color: "default",
      url: "https://www.wpri.com/health/overdose-deaths-still-at-crisis-levels-in-ri-new-data-shows/"
    },
    NY: {
      name: "New York",
      description: "Toddler's death at New York City day care caused by fentanyl overdose",
      color: "default",
      hover_color: "default",
      url: "https://www.cbsnews.com/news/fentanyl-overdose-toddler-death-bronx-new-york-city-day-care-autopsy-nicholas-dominici/"
    },
    PA: {
      name: "Pennsylvania",
      description: "Fentanyl’s threat to children: Hundreds have died in Pa. from overdoses",
      color: "default",
      hover_color: "default",
      url: "https://www.pennlive.com/news/2023/09/fentanyls-threat-to-children-hundreds-have-died-in-pa-from-overdoses.html"
    },
    NJ: {
      name: "New Jersey",
      description: "New Jersey man arrested after 12-year-old nephew dies of fentanyl overdose, officials say",
      color: "default",
      hover_color: "default",
      url: "https://www.cbsnews.com/news/fentanyl-overdose-new-jersey-child-death-uncle-troy-nokes-charged/"
    },
    DE: {
      name: "Delaware",
      description: "2022 overdose deaths follow troubling pattern as state, advocates struggle to catch up",
      color: "default",
      hover_color: "default",
      url: "https://www.delawareonline.com/story/news/health/2023/06/08/delaware-overdoses-rising-sussex-county-black-community-xylazine/70293302007/"
    },
    MD: {
      name: "Maryland",
      description: "Montgomery County Public Schools Warns of Fentanyl-Laced Drugs After Students Overdose",
      color: "default",
      hover_color: "default",
      url: "https://www.nbcwashington.com/news/local/montgomery-county-public-schools-warns-of-fentanyl-laced-drugs-after-students-overdose/3232794/"
    },
    VA: {
      name: "Virginia",
      description: "One H.S. in Virginia had 8 opioid overdoses in 3 weeks in unprecedented outbreak",
      color: "default",
      hover_color: "default",
      url: "https://www.nbcnews.com/health/health-news/virginia-high-school-saw-8-opioid-overdoses-three-weeks-unprecedented-rcna123151"
    },
    WV: {
      name: "West Virginia",
      description: "West Virginia’s overdose death rate down 11%, still among highest in country",
      color: "default",
      hover_color: "default",
      url: "https://www.wboy.com/news/west-virginia/west-virginias-overdose-death-rate-down-11-still-among-highest-in-country/"
    },
    OH: {
      name: "Ohio",
      description: "'It has destroyed our family' — Father sounds alarm after daughter dies of fentanyl exposure at OSU",
      color: "default",
      hover_color: "default",
      url: "https://www.news5cleveland.com/news/local-news/we-follow-through/it-has-destroyed-our-family-father-sounds-alarm-after-daughter-dies-of-fentanyl-exposure-at-osu"
    },
    IN: {
      name: "Indiana",
      description: "2 people die per day in Indianapolis from ODs, study finds. Who is dying and what's being done",
      color: "default",
      hover_color: "default",
      url: "https://www.indystar.com/story/news/crime/2023/09/26/drug-overdoses-indianapolis-2022-fentanyl-marion-county-rising-more-than-shootings-car-crashes/70909489007/"
    },
    IL: {
      name: "Illinois",
      description: "A father is on a mission of warning after his son died from a fake pill laced with fentanyl",
      color: "default",
      hover_color: "default",
      url: "https://www.cbsnews.com/chicago/news/father-mission-son-died-fake-pill-fentanyl/"
    },
    CT: {
      name: "Connecticut",
      description: "Why Connecticut's drug overdose crisis isn't slowing down",
      color: "default",
      hover_color: "default",
      url: "https://overdose.trendct.org/"
    },
    WI: {
      name: "Wisconsin",
      description: "15-year-old charged with reckless homicide in teen’s overdose death in De Pere",
      color: "default",
      hover_color: "default",
      url: "https://www.wbay.com/2023/01/10/15-year-old-charged-with-reckless-homicide-teens-overdose-death-de-pere/"
    },
    NC: {
      name: "North Carolina",
      description: "Drugs killed 8 friends, one by one, in a tragedy seen across the U.S.",
      color: "default",
      hover_color: "default",
      url: "https://www.washingtonpost.com/health/interactive/2022/drug-overdose-deaths-fentanyl-greenville-nc/"
    },
    DC: {
      name: "District of Columbia",
      description: "10 Dead After Suspected Fentanyl Overdoses in Northeast DC",
      color: "default",
      hover_color: "default",
      url: "https://www.nbcwashington.com/news/local/10-dead-after-suspected-fentanyl-overdoses-in-northeast-dc/3022978/"
    },
    MA: {
      name: "Massachusetts",
      description: "Heart candy-shaped pills seized in massive New England drug bust",
      color: "default",
      hover_color: "default",
      url: "https://www.nbcboston.com/news/local/fbi-to-announce-massive-new-england-drug-bust/3182127/"
    },
    TN: {
      name: "Tennessee",
      description: "Teen girl charged with murder after classmates die from fentanyl overdose",
      color: "default",
      hover_color: "default",
      url: "https://abcnews.go.com/US/teen-girl-charged-murder-after-classmates-die-fentanyl/story?id=99454523#:~:text=Two%20teenage%20girls%20were%20found,according%20to%20the%20school%20district."
    },
    AR: {
      name: "Arkansas",
      description: "Emotional sentencing in first distributing fentanyl resulting in death case",
      color: "default",
      hover_color: "default",
      url: "https://www.nwahomepage.com/news/emotional-sentencing-in-first-distributing-fentanyl-resulting-in-death-case/amp/"
    },
    MO: {
      name: "Missouri",
      description: "Fentanyl’s littlest victims: Dozens of babies, toddlers die in Missouri and Kansas",
      color: "default",
      hover_color: "default",
      url: "https://www.kansascity.com/news/local/crime/article279793604.html"
    },
    GA: {
      name: "Georgia",
      description: "Overdosing Georgia man found with enough fentanyl to kill well over 100K people",
      color: "default",
      hover_color: "default",
      url: "https://www.aol.com/m/19ed4377-c349-3f16-83c1-88320e1eb589/overdosing-georgia-man-found.html"
    },
    SC: {
      name: "South Carolina",
      description: "A Rock Hill woman puts a human face – her bother's – on fentanyl overdose",
      color: "default",
      hover_color: "default",
      url: "https://www.southcarolinapublicradio.org/sc-news/2023-09-27/a-rock-hill-woman-puts-a-human-face-her-bothers-on-fentanyl-overdose"
    },
    KY: {
      name: "Kentucky",
      description: "'It's Russian roulette:' A grieving Kentucky mother is on a crusade against fentanyl",
      color: "default",
      zoomable: "no",
      hover_color: "default",
      url: "https://www.wkms.org/society/2023-03-27/its-russian-roulette-a-grieving-kentucky-mother-is-on-a-crusade-against-fentanyl"
    },
    AL: {
      name: "Alabama",
      description: "Alabama girl who died of fentanyl overdose told parents vapes laced with drug were in her school",
      color: "default",
      hover_color: "default",
      url: "https://www.al.com/news/mobile/2022/09/alabama-girl-who-died-of-fentanyl-overdose-told-parents-vapes-laced-with-drug-were-in-her-school.html"
    },
    LA: {
      name: "Louisiana",
      description: "Fentanyl overdoses in Louisiana nearly double the nationwide average",
      color: "default",
      hover_color: "default",
      url: "https://www.fox8live.com/2023/11/07/fentanyl-overdoses-louisiana-nearly-double-nationwide-average/"
    },
    MS: {
      name: "Mississippi",
      description: "Overdose deaths involving fentanyl on the rise in Mississippi",
      color: "default",
      hover_color: "default",
      url: "https://www.wlox.com/2022/01/15/overdose-deaths-involving-fentanyl-rise-mississippi/"
    },
    IA: {
      name: "Iowa",
      description: "Iowa parents who lost son to fentanyl speak to high school students about mental health",
      color: "default",
      hover_color: "default",
      url: "https://www.kcci.com/article/iowa-parents-deric-kathy-kidd-speak-to-high-school-students-about-mental-health-drugs/45712737"
    },
    MN: {
      name: "Minnesota",
      description: "Minnesota's Fentanyl crisis: The families left behind ",
      color: "default",
      hover_color: "default",
      url: "https://www.cbsnews.com/minnesota/news/fentanyl-crisis-the-families-left-behind/"
    },
    OK: {
      name: "Oklahoma",
      description: "Oklahoma Man Charged with First-Degree Felony Murder in Fentanyl Overdose Death",
      color: "default",
      hover_color: "default",
      url: "https://oag.ok.gov/articles/oklahoma-man-charged-first-degree-felony-murder-fentanyl-overdose-death"
    },
    TX: {
      name: "Texas",
      description: "The Horrifying Epidemic of Teen-Age Fentanyl Deaths in a Texas County",
      color: "default",
      hover_color: "default",
      url: "https://www.newyorker.com/news/letter-from-the-southwest/the-horrifying-epidemic-of-teen-age-fentanyl-deaths-in-a-texas-county#:~:text=from%20the%20Southwest-,The%20Horrifying%20Epidemic%20of%20Teen%2DAge%20Fentanyl%20Deaths%20in%20a,an%20elementary%2Dschool%20parking%20lot.&text=Last%20February%2C%20when%20a%20teen,it%20was%20an%20isolated%20incident"
    },
    NM: {
      name: "New Mexico",
      description: "Fentanyl: a game of ‘Russian Roulette’ for New Mexicans",
      color: "default",
      hover_color: "default",
      url: "https://www.lcsun-news.com/story/news/local/new-mexico/2021/12/21/fentanyl-game-russian-roulette-new-mexicans/8981853002/"
    },
    KS: {
      name: "Kansas",
      description: "Kansas 16-year-old took half of a fake prescription pill and died of fentanyl poisoning",
      color: "default",
      hover_color: "default",
      url: "https://www.kake.com/story/46439118/kansas-16yearold-took-half-of-a-fake-prescription-pill-and-died-of-fentanyl-poisoning"
    },
    NE: {
      name: "Nebraska",
      description: "Parents of woman who died of fentanyl-related overdose sue Lincoln club",
      color: "default",
      hover_color: "default",
      url: "https://journalstar.com/news/state-and-regional/nebraska/parents-woman-died-fentanyl-overdose-sue-lincoln-club/article_a3cc796e-66e7-11ee-a956-935decb60225.html"
    },
    SD: {
      name: "South Dakota",
      description: "Largest fentanyl bust in SD history",
      color: "default",
      hover_color: "default",
      url: "https://www.siouxlandproud.com/news/south-dakota-news/largest-fentanyl-bust-in-sd-history/"
    },
    ND: {
      name: "North Dakota",
      description: "2 siblings are sentenced in a North Dakota fentanyl probe. 5 fugitives remain",
      color: "default",
      hover_color: "default",
      url: "https://apnews.com/article/fentanyl-trafficking-arrests-north-dakota-china-283916b522747192430f60effce2501b"
    },
    WY: {
      name: "Wyoming",
      description: "Wyoming mother hopes to save lives after losing grandson to fentanyl",
      color: "default",
      hover_color: "default",
      url: "https://www.wzzm13.com/article/news/local/outreach/wyoming-mother-hopes-to-save-lives-after-losing-grandson/69-294366b1-be34-4f56-b107-af1fa7e050f4"
    },
    MT: {
      name: "Montana",
      description: "28 fentanyl overdoses, 8 deaths reported in Montana over 10 day period",
      color: "default",
      hover_color: "default",
      url: "https://www.kpax.com/news/montana-news/28-fentanyl-overdoses-8-deaths-reported-in-montana-over-10-day-period"
    },
    CO: {
      name: "Colorado",
      description: "Fentanyl killed their kids at college. Now Colorado schools are changing.",
      color: "default",
      hover_color: "default",
      url: "https://coloradosun.com/2023/10/09/fentanyl-deaths-colleges/"
    },
    UT: {
      name: "Utah",
      description: "What we know about the murder case of the Utah grief author accused of poisoning her husband",
      color: "default",
      hover_color: "default",
      url: "https://www.nbcnews.com/news/us-news/timeline-utah-mom-kouri-richins-husband-death-fentanyl-rcna85787"
    },
    AZ: {
      name: "Arizona",
      description: "Baby dead after being found with fentanyl in his system; Surprise man arrested",
      color: "default",
      hover_color: "default",
      url: "https://www.fox10phoenix.com/news/baby-dead-after-being-found-with-a-drug-in-his-system-surprise-man-arrested"
    },
    NV: {
      name: "Nevada",
      description: "Nevada parents face murder charges after 8-month-old dies from fentanyl exposure: police",
      color: "default",
      hover_color: "default",
      url: "https://www.fox29.com/news/boulder-city-nevada-baby-dies-fentanyl-overdose-parents-charged"
    },
    OR: {
      name: "Oregon",
      description: "Two teens die from overdose of suspected counterfeit pills containing fentanyl",
      color: "default",
      hover_color: "default",
      url: "https://www.multco.us/multnomah-county/news/two-teens-die-overdose-suspected-counterfeit-pills-containing-fentanyl"
    },
    WA: {
      name: "Washington",
      description: "Washington schools grapple with fentanyl crisis as students head back to class",
      color: "default",
      hover_color: "default",
      url: "https://www.king5.com/article/news/education/washington-schools-grapple-fentanyl-students/281-a5b87aad-dcf0-428f-9fb6-e9538b70682b"
    },
    CA: {
      name: "California",
      description: "As more children die from fentanyl, some prosecutors are charging their parents with murder",
      color: "default",
      hover_color: "default",
      url: "https://apnews.com/article/children-fentanyl-deaths-parents-charged-california-4767deae62a1ae1d9fa17a3edcc73f73"
    },
    MI: {
      name: "Michigan",
      description: " Fentanyl shipment from Grand Rapids was enough to kill nearly everyone in Michigan",
      color: "default",
      hover_color: "default",
      url: "https://www.freep.com/story/news/local/michigan/2023/03/24/fentanyl-seizure-dea-michigan/70045815007/"
    },
    ID: {
      name: "Idaho",
      description: "Idaho Falls fentanyl bust was state's largest to date for pills",
      color: "default",
      hover_color: "default",
      url: "https://www.postregister.com/news/local/idaho-falls-fentanyl-bust-was-states-largest-to-date-for-pills/article_45d45ada-1ce0-11ee-98e8-8bf6567b1f9f.html"
    },
    GU: {
      name: "Guam",
      description: "Guam not seeing same fentanyl trends as U.S. mainland",
      color: "default",
      hover_color: "default",
      url: "https://www.kuam.com/story/49943005/guam-not-seeing-same-fentanyl-trends-as-us-mainland",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      description: "Retired US swimming champion's death in US Virgin Islands caused by fentanyl intoxication",
      color: "default",
      hover_color: "default",
      url: "https://www.usatoday.com/story/sports/2023/08/28/swimmer-jamie-cail-cause-of-death-accidental-fentanyl-intoxication/70704396007/",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      description: "Growing opioid crisis adds to Puerto Rico’s problems",
      color: "default",
      hover_color: "default",
      url: "https://www.pbs.org/newshour/nation/growing-opioid-crisis-adds-to-puerto-ricos-problems",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    }
  },
  /*
  locations: {
    "0": {
      name: "New York",
      lat: 40.71,
      lng: -74,
      description: "default",
      color: "default",
      url: "default",
      type: "default",
      size: "default"
    },
    "1": {
      name: "Anchorage",
      lat: 61.2180556,
      lng: -149.9002778,
      color: "default",
      type: "circle"
    }
  },
  */
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  }
};