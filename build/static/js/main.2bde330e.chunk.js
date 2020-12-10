(this["webpackJsonpbeer-me"]=this["webpackJsonpbeer-me"]||[]).push([[0],{121:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(10),o=t.n(l),s=t(11),c=t.n(s),i=t(22),m=t(13),u=t(14),p=t(16),d=t(15),b=t(83),h=t(40),f=t.n(h),g=t(41),E=t.n(g);t(112).config();var v=E.a.create({baseURL:"https://beer-me-api.herokuapp.com/"}),y=t(156),w=t(159),N=t(161),k=t(164),x=t(163),S=t(162),O=t(165),B=t(124),j=Object(y.a)({root:{maxWidth:345},media:{height:140}});function P(){var e=j();return n.a.createElement(w.a,{className:e.root},n.a.createElement(N.a,null,n.a.createElement(S.a,{className:e.media,image:"https://images.unsplash.com/photo-1536584979139-dde0784c7c75?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80",title:"Contemplative Reptile"}),n.a.createElement(x.a,null,n.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Bitterness:"),n.a.createElement(B.a,{variant:"body2",color:"textSecondary",component:"p"},"If you enjoy a hoppier beer, like an IPA, stick to brews that have a high IBU (30+). More of a light beer drinker? Look for IBU\u2019s with a lower number (0-15)."))),n.a.createElement(k.a,null,n.a.createElement(O.a,{size:"small",color:"primary"},"Share"),n.a.createElement(O.a,{size:"small",color:"primary"},"Learn More")))}var C=Object(y.a)({root:{maxWidth:345},media:{height:140}});function A(){var e=C();return n.a.createElement(w.a,{className:e.root},n.a.createElement(N.a,null,n.a.createElement(S.a,{className:e.media,image:"https://cdn.shopify.com/s/files/1/2785/6868/files/yes.jpg?v=1546985090",title:"Contemplative Reptile"}),n.a.createElement(x.a,null,n.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Alcohol By Volume:"),n.a.createElement(B.a,{variant:"body2",color:"textSecondary",component:"p"},"Takin it easy: try 2-5% abv | Average: try 5-8% | Party Time: 8-16%"))),n.a.createElement(k.a,null,n.a.createElement(O.a,{size:"small",color:"primary"},"Share"),n.a.createElement(O.a,{size:"small",color:"primary"},"Learn More")))}var R=Object(y.a)({root:{maxWidth:345},media:{height:140}});function T(){var e=R();return n.a.createElement(w.a,{className:e.root},n.a.createElement(N.a,null,n.a.createElement(S.a,{className:e.media,image:"https://images.squarespace-cdn.com/content/v1/5b1fe9585b409b9e224505dd/1588355196088-PCML8J66PXKRDVSN4UAO/ke17ZwdGBToddI8pDm48kB6N0s8PWtX2k_eW8krg04V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URWK2DJDpV27WG7FD5VZsfFVodF6E_6KI51EW1dNf095hdyjf10zfCEVHp52s13p8g/beer-colors.jpg",title:"Contemplative Reptile"}),n.a.createElement(x.a,null,n.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},"SRM (Color):"),n.a.createElement(B.a,{variant:"body2",color:"textSecondary",component:"p"},"This number represents the color of your beer. The SRM scale measures // beers that are the clearest straw color (2), to the deepest black // (40)."))),n.a.createElement(k.a,null,n.a.createElement(O.a,{size:"small",color:"primary"},"Share"),n.a.createElement(O.a,{size:"small",color:"primary"},"Learn More")))}var D=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).setBeerType=function(a){a.preventDefault(),e.setState({term:a.target.dataset.beertype},e.handleBeerSubmit)},e.handleBeerSubmit=function(){e.props.onBeerSubmit(e.state.term)},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=["Ale","Lager","IPA","Pilsner","Amber","Porter","Stout","Kolsch","Sour Ale","Blonde Ale","Pale Ale","Brown Ale","Saison","Gose","Helles","Scotch Ale"].map((function(a,t){return n.a.createElement("li",{className:"list-group-item match",key:t},n.a.createElement("a",{href:"/search","data-beertype":a,onClick:e.setBeerType}))}));return n.a.createElement("div",{className:"search-nav mb-2"},n.a.createElement(P,null),n.a.createElement(A,null),n.a.createElement(T,null),n.a.createElement("ul",{className:"nav"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("button",{onClick:function(){return e.props.getAllBeers()}},"You Should Try...")),a))}}]),t}(r.Component),I=t(8),F=t(26),M=t(80),H=t.n(M),W=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={term:""},e.setBeerType=function(a){a.preventDefault(),e.setState({term:a.target.dataset.beertype},e.handleBeerSubmit)},e.handleBeerSubmit=function(){e.props.onBeerSubmit(e.state.term)},e}return Object(u.a)(t,[{key:"render",value:function(){var e=H.a;return n.a.createElement("div",{className:"sidebar col-sm-3 p-0"},n.a.createElement("div",{className:"sidebar-title"},n.a.createElement("img",{className:"logo",src:e,alt:"beer-logo"})),n.a.createElement("nav",null,n.a.createElement("ul",{className:"nav flex-column"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(F.c,{exact:!0,to:"/search",className:"nav-link",activeClassName:"active"},n.a.createElement("i",{className:"fas fa-search"}),"Search")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(F.c,{to:"/beer-school",className:"nav-link",activeClassName:"active"},n.a.createElement("i",{className:"fas fa-book"}),"Beer School")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(F.c,{to:"/random",className:"nav-link",activeClassName:"active"},n.a.createElement("i",{className:"fas fa-beer"}),"Random Beer")),n.a.createElement("li",{onClick:function(){document.cookie="loggedIn=",window.location.replace("/")},className:"nav-item"},n.a.createElement(F.c,{exact:!0,to:"/",className:"nav-link",activeClassName:"active"},n.a.createElement("i",{className:"fa fa-user"}),"Logout")))))}}]),t}(r.Component),q=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={term:""},e.handleInputChange=function(a){e.setState({term:a.target.value})},e.onBeerSubmit=function(a){a.preventDefault(),e.props.onBeerSubmit(e.state.term)},e}return Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"search-bar"},n.a.createElement("form",{onSubmit:this.onBeerSubmit},n.a.createElement("div",{className:"mb-2"},n.a.createElement("h3",{className:"search-bar__title"},"Find a beer"),n.a.createElement("span",{className:"total-results"},this.props.totalResults," results"),n.a.createElement("input",{type:"text",value:this.state.term,onChange:this.handleInputChange,className:"form-control form-control-lg",placeholder:"search for a beer...","aria-label":"ex: 'Murican Pilsner"}))))}}]),t}(r.Component),L=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).setBeerType=function(a){a.preventDefault(),e.setState({term:a.target.dataset.beertype},e.handleBeerSubmit)},e.handleBeerSubmit=function(){e.props.onBeerSubmit(e.state.term)},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=["Ale","Lager","IPA","Pilsner","Amber","Porter","Stout","Kolsch","Sour Ale","Blonde Ale","Pale Ale","Brown Ale","Saison","Gose","Helles","Scotch Ale"].map((function(a,t){return n.a.createElement("li",{className:"list-group-item",key:t},n.a.createElement("a",{href:"/search","data-beertype":a,onClick:e.setBeerType},a))}));return n.a.createElement("div",{className:"search-nav mb-2"},n.a.createElement("ul",{className:"nav"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("button",{onClick:function(){return e.props.getAllBeers()}},"All Beers")),a))}}]),t}(r.Component),_=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={currentPage:e.props.currentPage,numberOfPages:e.props.numberOfPages},e.onPrevPage=function(a){a.preventDefault(),e.scrollToTop(),e.props.onPageSubmit(e.state.currentPage-1),e.setState({currentPage:e.state.currentPage-1})},e.onNextPage=function(a){a.preventDefault(),e.scrollToTop(),e.props.onPageSubmit(e.state.currentPage+1),e.setState({currentPage:e.state.currentPage+1})},e}return Object(u.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo(0,0),document.querySelector(".js-scroll").scroll({top:0,left:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props.numberOfPages>1?"pagination":" pagination--is-disabled",a=this.state.currentPage>1?"page-item":"page-item disabled",t=this.state.currentPage<this.props.numberOfPages?"page-item":"page-item disabled";return n.a.createElement("nav",{"aria-label":"Pagination"},n.a.createElement("ul",{className:"".concat(e," text-center")},n.a.createElement("li",{className:a},n.a.createElement("a",{href:"/",className:"page-link btn","aria-label":"Previous page",onClick:this.onPrevPage},"\xab Previous")),n.a.createElement("li",null,"Page ",this.state.currentPage," of ",this.props.numberOfPages),n.a.createElement("li",{className:t},n.a.createElement("a",{href:"/",className:"page-link btn","aria-label":"Next page",onClick:this.onNextPage},"Next \xbb"))))}}]),t}(r.Component),V=t(81),U=t.n(V),z=t(82),G=t.n(z),K=t(166),J=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(e){var r;return Object(m.a)(this,t),(r=a.call(this,e)).beerRef=n.a.createRef(),r}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.props.beer,t=void 0!==a.labels?a.labels.medium:U.a,r=void 0!==a.style?a.style.shortName:"",l=void 0!==a.abv?"".concat(a.abv,"%"):"",o=void 0!==a.abv?"badge beer-abv":"beer-abv--is-hidden",s=void 0!==a.description?"beerItem__link":"beerItem__link--is-hidden";return n.a.createElement("tr",{className:"beerItem",ref:this.beerRef},n.a.createElement("td",{className:"beerItem__image"},n.a.createElement("img",{src:t,alt:a.name})),n.a.createElement("td",{className:"beerItem__content"},n.a.createElement("span",{className:"beer-name"},a.name),n.a.createElement("span",{className:o},l),n.a.createElement("span",{className:"beer-style"},r)),n.a.createElement("td",{className:s},n.a.createElement("a",{href:"/",onClick:function(a){a.preventDefault(),e.beerRef.current.cells[3].classList.add("beerItem__details--is-open")},className:"btn btn-view btn-sm"},"View Details")),n.a.createElement(K.a,{"aria-label":"add to favorites"},n.a.createElement(G.a,{style:{color:"red",opacity:".8"}})),n.a.createElement("td",{className:"beerItem__details"},n.a.createElement("p",null,a.description)))}}]),t}(r.Component),Y=function(e){var a=e.beers;if(a){if(a.length>0){var t=a.map((function(e){return n.a.createElement(J,{key:e.id,beer:e})}));return n.a.createElement("table",{className:"beer-list"},n.a.createElement("tbody",{className:"js-scroll"},t))}if(0===a.length)return n.a.createElement("p",{className:"list-group-item"},"Sorry, there are no results for your search.")}else if(void 0===a)return n.a.createElement("p",{className:"list-group-item"},"Sorry, there are no results for your search.");return n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))},X=function(e){var a=e.category;return n.a.createElement("li",null,a.name)},Q=function(e){var a=e.categories.map((function(e){return n.a.createElement(X,{key:e.id,category:e})}));return n.a.createElement("ul",{className:"categories"},a)},Z=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).getRandomBeer=function(){e.props.getRandomBeer()},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.props.random,t=void 0!==a.abv?"ABV: ".concat(a.abv,"%"):"",r=void 0!==a.style?"Description: ".concat(a.style.description):"",l=void 0!==a.style?"Style: ".concat(a.style.category.name):"";return n.a.createElement("div",{className:"random-container"},n.a.createElement("button",{className:"refresh-button btn mb-1",onClick:function(){return e.getRandomBeer()}},n.a.createElement("i",{className:"fas fa-random"}),"Random Beer"),n.a.createElement("div",{className:"card mt-2 randoCard",key:a.id},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"beer-name"},a.nameDisplay),n.a.createElement("p",{className:"badge beer-abv"},t),n.a.createElement("p",null,l),n.a.createElement("p",null,r))))}}]),t}(r.Component),$=(t(121),t(30)),ee=t(172),ae=t(168),te=t(171),re=t(169),ne=t(123),le=t(167),oe=t(48),se=t.n(oe),ce=Object(y.a)((function(e){return{root:{"& .MuiPaper-root":{height:"100vh",backgroundColor:"#F7F5EE"},fontFamily:"Raleway, sans-serif"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1571767454098-246b94fbcf70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80)",backgroundRepeat:"no-repeat",backgroundColor:"#E0D9CA",backgroundSize:"cover",backgroundPosition:"center",opacity:"1"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#F7F5EE"},avatar:{margin:e.spacing(1),backgroundColor:"#D59737"},form:{width:"100%",marginTop:e.spacing(1),backgroundColor:"#F7F5EE",color:"#D59737"},submit:{margin:e.spacing(3,0,2),backgroundColor:"#D59737"},overlayText:{color:"#605948",fontSize:"16px",textAlign:"center",padding:"15px 0 20px 0",letterSpacing:"1px",margin:"30% 5%"},titleText:{backgroundColor:"rgb(246,243,236, .8)",margin:"0px 80px",borderRadius:"5px"}}}));function ie(){var e=f.a.parse(document.cookie),a=Object(r.useState)([]),t=Object($.a)(a,2),l=(t[0],t[1]),o=Object(r.useState)(""),s=Object($.a)(o,2),m=s[0],u=s[1],p=Object(r.useState)(""),d=Object($.a)(p,2),b=d[0],h=d[1],g=ce();Object(r.useEffect)((function(){v().then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]);var v=function(){var e=Object(i.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users");case 2:return a=e.sent,e.next=5,a.json();case 5:if(t=e.sent,200===a.status){e.next=8;break}throw Error(t.message);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var a=Object(i.a)(c.a.mark((function a(t){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,E.a.post("/auth/login",{userName:m,password:b}).then((function(a){document.cookie="token=".concat(a.data.token),console.log(e.token)}));case 3:document.cookie="loggedIn=true;max-age=60*1000",window.location.replace("/search");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return n.a.createElement(le.a,{container:!0,component:"main",className:g.root},n.a.createElement(ae.a,null),n.a.createElement(le.a,{item:!0,xs:!1,sm:4,md:7,className:g.image},n.a.createElement("div",{className:g.titleText},n.a.createElement(B.a,{className:g.overlayText,style:{fontFamily:"Raleway, sans-serif"}},n.a.createElement("b",null,"WELCOME TO"),n.a.createElement("br",null),n.a.createElement("b",{style:{fontSize:"4em",letterSpacing:"10px",color:"#D69836",textShadow:"3px 4px #605948"}},"BEERME")," ",n.a.createElement("br",null),n.a.createElement("b",null,"BeerMe is a craft beer library and recommendation app.\xa0 Here you can search for beers by style, learn about their flavors, and get to know common beer terms to make you a part of the educated beer drinker elite. Cheers!")))),n.a.createElement(le.a,{item:!0,xs:12,sm:8,md:5,component:ne.a,elevation:6,square:!0},n.a.createElement("div",{className:g.paper},n.a.createElement(ee.a,{className:g.avatar},n.a.createElement(se.a,null)),n.a.createElement(B.a,{style:{color:"#605948"},component:"h1",variant:"h5"},"Sign in"),n.a.createElement("form",{onSubmit:y,className:g.form,noValidate:!0},n.a.createElement(te.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"text",id:"userName",label:"Username",name:"userName",onChange:function(e){u(e.target.value)},autoComplete:"userName",autoFocus:!0}),n.a.createElement(te.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){h(e.target.value)},autoComplete:"current-password"}),n.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit,style:{fontFamily:"Raleway, sans-serif"}},"Sign In"),n.a.createElement(le.a,{container:!0},n.a.createElement(le.a,{item:!0},n.a.createElement(re.a,{href:"/signup",style:{fontFamily:"Raleway, sans-serif"},className:g.form,variant:"body2"},"Don't have an account? Sign Up")))))))}var me=function(){return n.a.createElement(ne.a,{style:{maxHeight:"90vh",overflow:"auto",backgroundColor:"#EDEBE0"}},n.a.createElement("div",{className:"beer-school"},n.a.createElement("h2",null,"BEER GUIDE FOR THE NON BEER DRINKER"),n.a.createElement("p",null,"Forget all you think you know about beer. Here are five common misconceptions I urge you to omit from memory when tasting or even considering beers:"),n.a.createElement("ul",null,n.a.createElement("li",null,"All stouts are heavy beers that will make you fat and lonely"),n.a.createElement("li",null,"Lagers are all boring blonde piss-water"),n.a.createElement("li",null," Hoppy = bitter"),n.a.createElement("li",null,"Wheat beers all taste like banana"),n.a.createElement("li",null,"All commercial beers are the golden standard of a beer style and all other beers should be measured up to these beer ( Could not be more wrong )")),n.a.createElement("img",{className:"beer-header",alt:"beer banner",src:"https://i.ibb.co/mFQXppR/beeeeeeer.jpg"}),n.a.createElement("h2",null,"THE TASTE OF BEER"),n.a.createElement("p",null,"Now that your have emptied out some space in your brain you have room for some new information. For starters, there are three common ingredients in beer (in addition to water): yeast, hops and barley. The selection and incorporation of each of these ingredients changes the balance and flavor profile of a beer. But what does each ingredient taste like?"),n.a.createElement("p",null,n.a.createElement("b",null,"Yeast")," - responsible for fruity, spicy, funky, and even more neutral flavors during fermentation."),n.a.createElement("p",null,n.a.createElement("b",null,"Hops")," - flower closely related to weed that is soaked in beer to produce citrus, tropical, herbal, piney, dank, earthy, and floral flavors. Adding hops before fermentation creates bitterness."),n.a.createElement("p",null,n.a.createElement("b",null,"Barley")," - the most prominent grain in brewing, brewers use barley to create the sugar that yeast turns to alcohol during fermentation (think of it like grape juice to wine). Barley also contributes grainy flavors like water crackers, bread, toast, caramel, dark fruit, chocolate, coffee, etc. Malt is the term for barley that is specially prepared for use in the brewhouse."),n.a.createElement("h2",null,"SOME KEY BEER TERMS"),n.a.createElement("p",null,"In addition to the common ingredients, there are a few other key terms you may encounter while perusing a beer menu that are worth knowing: ABV, Imperial and IBUs."),n.a.createElement("p",null,n.a.createElement("b",null,"ABV")," - Alcohol by volume. Usually listed as a percentage so you know how strong a beer is."),n.a.createElement("p",null,n.a.createElement("b",null,"Imperial")," - This is used in the name of beers with an abv >7.5%. Basically beers that are strong as heck and will knock you off your barstool!"),n.a.createElement("p",null,n.a.createElement("b",null,"IBUs")," - International Bittering Units. Measure of bitterness, generally from 0/no bitterness to 100/intensely bitter. There is technically no upper limit but you probably have your own personal threshold."),n.a.createElement("h2",null,"WHAT IS THE DIFFERENCE BETWEEN ALES AND LAGERS?"),n.a.createElement("p",null,"The basic difference between these two major beer classifications is how they are fermented. Ales are fermented with top-fermenting yeast at warm temperatures (60\u02da\u201370\u02daF), and lagers are fermented with bottom-fermenting yeast at cold temperatures (35\u02da\u201350\u02daF). Because of their warm fermentations, ales can generally ferment and age in a relatively short period of time (3-5 weeks). On the other hand, lagers take much longer to ferment (up to 6 to 8 weeks) because they are cold fermented."),n.a.createElement("img",{className:"beer-header",alt:"lager-ale",src:"https://qph.fs.quoracdn.net/main-qimg-c3abc0856c695674fe4552237c50d871"}),n.a.createElement("p",null,"The Bottom Line: All beer is either an ale or a lager. This is not determined by color, flavor or alcohol strength, but by the fermentation technique and yeast used in brewing. While taste does not necessarily determine the style, there are some general distinctions:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Lagers tend to have a crisper, cleaner taste, although other ingredients such as malts and hops can be added for flavor."),n.a.createElement("li",null,"Ales tend to be more full-bodied, sweeter and fruity in taste. This has to do with the fermentation processes. The faster, more aggressive fermentation of ales produces esters, which cause the taste of sweetness.")),n.a.createElement("p",null,n.a.createElement("h5",null,"Now that you have some background, onto the",n.a.createElement("a",{href:"/"}," BEERS!")))))},ue=t(170),pe=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#F7F5EE"},avatar:{margin:e.spacing(1),backgroundColor:"#D59737"},form:{width:"100%",marginTop:e.spacing(3),color:"#D59737"},submit:{margin:e.spacing(3,0,2),backgroundColor:"#D59737"},quote:{fontSize:"18px",letterSpacing:"2px",textAlign:"center",paddingTop:"10%"}}}));function de(){var e=pe(),a=Object(r.useState)(null),t=Object($.a)(a,2),l=t[0],o=t[1],s=Object(r.useState)(null),m=Object($.a)(s,2),u=m[0],p=m[1],d=function(e){"userName"===e.target.name&&o(e.target.value),"password"===e.target.name&&p(e.target.value)},b=function(){var e=Object(i.a)(c.a.mark((function e(a){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("/auth/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userName:l,password:u})});case 3:return t=e.sent,e.next=6,t.text();case 6:r=e.sent,console.log("Response",r),window.location.assign("/");case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=Object(r.useRef)(null),f=Object(r.useRef)(null);return n.a.createElement("div",null,n.a.createElement(B.a,{className:e.quote},'\u201cBeer is proof that God loves us and wants us to be happy."',n.a.createElement("br",null),"-Benjamin Franklin"),n.a.createElement(ue.a,{component:"main",maxWidth:"xs"},n.a.createElement(ae.a,null),n.a.createElement("div",{className:e.paper},n.a.createElement(ee.a,{className:e.avatar},n.a.createElement(se.a,null)),n.a.createElement(B.a,{style:{color:"#605948"},component:"h1",variant:"h5"},"Sign up"),n.a.createElement("form",{className:e.form,onSubmit:b},n.a.createElement(le.a,{container:!0,spacing:2},n.a.createElement(le.a,{item:!0,xs:12},n.a.createElement(te.a,{onChange:d,inputRef:h,variant:"outlined",required:!0,fullWidth:!0,name:"userName",label:"Username",type:"text",id:"username"})),n.a.createElement(le.a,{item:!0,xs:12},n.a.createElement(te.a,{onChange:d,inputRef:f,variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),n.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){setTimeout((function(){h.current.value="",f.current.value=""}),100)}},"Sign Up"),n.a.createElement(le.a,{container:!0,justify:"flex-end"},n.a.createElement(le.a,{item:!0},n.a.createElement(F.b,{to:"/",className:e.form,variant:"body2"},"Already have an account? Sign in")))))))}var be=function(){var e=f.a.parse(document.cookie);return console.log("this my cookie",e.token),!!e.loggedIn},he=function(e){var a=e.component,t=Object(b.a)(e,["component"]);return n.a.createElement(I.b,Object.assign({},t,{render:function(e){return be()?n.a.createElement(a,e):n.a.createElement(I.a,{to:"/"})}}))},fe=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={beers:null,filterBeers:null,currentPage:1,numberOfPages:"",totalResults:0,categories:[],randomBeer:[],favorites:[]},e.componentDidMount=Object(i.a)(c.a.mark((function a(){var t,r,n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.get("/beers");case 2:return t=a.sent,a.next=5,v.get("/random");case 5:return r=a.sent,a.next=8,v.get("/categories");case 8:n=a.sent,e.setState({beers:t.data.data,filterBeers:t.data.data,currentPage:t.data.currentPage,numberOfPages:t.data.numberOfPages,totalResults:t.data.totalResults,randomBeer:r.data.data,categories:n.data.data});case 10:case"end":return a.stop()}}),a)}))),e.getAllBeers=Object(i.a)(c.a.mark((function a(){var t;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.get("/beers");case 2:t=a.sent,e.setState({beers:t.data.data,currentPage:t.data.currentPage,numberOfPages:t.data.numberOfPages,totalResults:t.data.totalResults});case 4:case"end":return a.stop()}}),a)}))),e.getRandomBeer=Object(i.a)(c.a.mark((function a(){var t;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.get("/random");case 2:t=a.sent,e.setState({randomBeer:t.data.data});case 4:case"end":return a.stop()}}),a)}))),e.getCategories=Object(i.a)(c.a.mark((function a(){var t;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.get("/categories");case 2:t=a.sent,e.setState({categories:t.data.data});case 4:case"end":return a.stop()}}),a)}))),e.handleTermSubmit=function(){var a=Object(i.a)(c.a.mark((function a(t){var r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.get("/search",{params:{q:t}});case 2:r=a.sent,e.setState({beers:r.data.data,numberOfPages:r.data.numberOfPages,totalResults:r.data.totalResults});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handlePagination=function(){var a=Object(i.a)(c.a.mark((function a(t){var r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.get("/beers",{params:{p:t}});case 2:r=a.sent,e.setState({beers:r.data.data});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(F.a,null,n.a.createElement("div",{className:"main"},n.a.createElement(I.b,{path:"/",exact:!0},n.a.createElement(ie,null)),n.a.createElement(I.b,{path:"/signup",exact:!0},n.a.createElement(de,null))),be()&&n.a.createElement("div",{className:"content-area"},n.a.createElement(W,{onBeerSubmit:this.handleTermSubmit,getCategories:this.getCategories}),n.a.createElement("main",{className:"site-main container col-sm-8"},n.a.createElement("div",{className:"site-content"},n.a.createElement(he,{path:"/search",exact:!0},n.a.createElement(q,{onBeerSubmit:this.handleTermSubmit,totalResults:this.state.totalResults}),n.a.createElement(L,{onBeerSubmit:this.handleTermSubmit,currentPage:this.state.currentPage,getAllBeers:this.getAllBeers}),n.a.createElement(Y,{beers:this.state.beers}),n.a.createElement(_,{currentPage:this.state.currentPage,numberOfPages:this.state.numberOfPages,onPageSubmit:this.handlePagination})),n.a.createElement(he,{path:"/beer-categories"},n.a.createElement(Q,{categories:this.state.categories})),n.a.createElement(he,{path:"/beer-school"},n.a.createElement(me,null)),n.a.createElement(he,{path:"/random"},n.a.createElement(Z,{random:this.state.randomBeer,getRandomBeer:this.getRandomBeer})),n.a.createElement(he,{path:"/match"},n.a.createElement(D,null),n.a.createElement(Y,{beers:this.state.beers}),n.a.createElement(_,{currentPage:this.state.currentPage,numberOfPages:this.state.numberOfPages,onPageSubmit:this.handlePagination}))))))}}]),t}(r.Component);o.a.render(n.a.createElement(fe,null),document.querySelector("#root"))},80:function(e,a,t){e.exports=t.p+"static/media/logo-brown.f8a2771f.png"},81:function(e,a,t){e.exports=t.p+"static/media/placeholder-beer.48118b29.png"},90:function(e,a,t){e.exports=t(122)}},[[90,1,2]]]);
//# sourceMappingURL=main.2bde330e.chunk.js.map