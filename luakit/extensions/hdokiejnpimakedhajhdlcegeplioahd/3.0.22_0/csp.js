var g_ischrome="undefined"!=typeof chrome&&("undefined"!=typeof chrome.runtime||"undefined"!=typeof chrome.extension),g_issafari="undefined"!=typeof safari&&"undefined"!=typeof safari.self,lpParseUriCache=[],lpParseUriNumber=0,lpPerformCSP=!0;
function lpParseUri(a){if("string"!=typeof a)return"";if(null!=lpParseUriCache[a])return lpParseUriCache[a];var e=null,b=null,c=a;-1!=a.indexOf("#")&&(b=a.substring(a.indexOf("#")+1),a=a.substring(0,a.indexOf("#")));-1!=a.indexOf("?")&&(e=a.substring(a.indexOf("?")+1),a=a.substring(0,a.indexOf("?")));var d=a.match(/^(.*:\/\/[^\/]+\/.*)@/);d&&(a=a.substring(0,d[1].length)+a.substring(d[1].length).replace(/@/g,"%40"));if(2047<a.length)return"";var g=lpParseUri.options;a=g.parser[g.strictMode?"strict":
"loose"].exec(a);for(var f={},d=14;d--;)f[g.key[d]]=a[d]||"";f[g.q.name]={};f[g.key[12]].replace(g.q.parser,function(a,b,c){b&&(f[g.q.name][b]=c)});null!=e&&(f.query=e,null!=b&&(f.anchor=b));if(500<lpParseUriNumber){for(var h in lpParseUriCache){delete lpParseUriCache[h];break}lpParseUriNumber=0}lpParseUriCache[c]=f;lpParseUriNumber++;return f}
lpParseUri.options={strictMode:!1,key:"source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
function lp_gettld(a,e){("undefined"==typeof lp_all_tlds||null==lp_all_tlds)&&lp_init_tlds();if("string"!=typeof a)return"";if(""==a&&"string"==typeof e&&0==e.indexOf("file://"))return"file:";a=a.toLowerCase();a=a.replace(/\.$/,"");var b=a.split("."),c;if(a.match(/^\d+\.\d+\.\d+\.\d+$/))c=4;else if(c=2,2<=b.length){var d=b[b.length-1];"undefined"!=typeof lp_all_tlds[d]&&lp_in_array(b[b.length-2],lp_all_tlds[d])&&(c=3)}for(;b.length>c;)b.shift();return b.join(".")}
function lp_init_tlds(){if("undefined"==typeof lp_all_tlds||null==lp_all_tlds)lp_all_tlds=[],lp_all_tlds.hu="2000 agrar blogspot bolt casino city co com erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news nui org priv reklam sex shop sport suli szex tm tozsde utazas video".split(" "),lp_all_tlds.nl=["752","blogspot","bv","co"],lp_all_tlds.ca="ab bc blogspot co gc mb nb nf nl ns nt nu on pe qc sk yk".split(" "),lp_all_tlds.pa="abo ac com edu gob ing med net nom org sld".split(" "),
lp_all_tlds.se="a ab ac b bd blogspot brand c com d e f fh fhsk fhv g h i k komforb kommunalforbund komvux l lanarb lanbib m mil n naturbruksgymn net o org p parti pp press r s sshn t tm u w x y z".split(" "),lp_all_tlds.ac="ac co com edu gov gv mil net or org".split(" "),lp_all_tlds.ae="ac co com gov mil name net org pro sch".split(" "),lp_all_tlds.at="ac biz co gv info or priv".split(" "),lp_all_tlds.be="ac ap blogspot co com fgov to xa".split(" "),lp_all_tlds.cn="ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hk hl hn jl js jx ln mil mo net nm nx org qh sc sd sh sn sx tj tw xj xn--55qx5d xn--io0a7i xn--od0alg xz yn zj".split(" "),
lp_all_tlds.cr="ac co ed fi go or sa".split(" "),lp_all_tlds.cy="* ac biz com ekloges gov info ltd name net org parliament press pro tm".split(" "),lp_all_tlds.fj="* ac biz com gov id info mil name net org pro school".split(" "),lp_all_tlds.fk="* ac co gov net nom org".split(" "),lp_all_tlds.gg="ac alderney co gov guernsey ind ltd net org sark sch".split(" "),lp_all_tlds.gn="ac com edu gov net org".split(" "),lp_all_tlds.gt="com edu gob ind mil net org".split(" "),lp_all_tlds.id="ac biz co go mil my net or sch web".split(" "),
lp_all_tlds.il="* ac co gov idf k12 muni net org".split(" "),lp_all_tlds.im="ac co com gov net nic org tt tv".split(" "),lp_all_tlds["in"]="ac blogspot co edu ernet firm gen gov ind mil net nic org res".split(" "),lp_all_tlds.ir="ac co gov id net org sch xn--mgba3a4f16a xn--mgba3a4fra".split(" "),lp_all_tlds.is="ac com cupcake edu gov int net org".split(" "),lp_all_tlds.je="ac co gov ind jersey ltd net org sch".split(" "),lp_all_tlds.jp="ac ad aichi akita aomori blogspot chiba co ed ehime fukui fukuoka fukushima gifu go gov gr gunma hiroshima hokkaido hyogo ibaraki ishikawa iwate kagawa kagoshima kanagawa kawasaki kitakyushu kobe kochi kumamoto kyoto lg mie miyagi miyazaki nagano nagasaki nagoya nara ne net niigata oita okayama okinawa or org osaka saga saitama sapporo sendai shiga shimane shizuoka tochigi tokushima tokyo tottori toyama wakayama yamagata yamaguchi yamanashi yokohama".split(" "),
lp_all_tlds.kr="ac blogspot busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam kg mil ms ne nm or pe re sc seoul ulsan".split(" "),lp_all_tlds.mw="ac biz co com coop edu gov int museum net org".split(" "),lp_all_tlds.nz="* ac co cri geek gen govt iwi maori mil net org school".split(" "),lp_all_tlds.ru="ac adygeya altai amur amursk arkhangelsk astrakhan baikal bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia cmw com dagestan dudinka e-burg edu fareast gov grozny int irkutsk ivanovo izhevsk jamal jar joshkar-ola k-uralsk kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov kms koenig komi kostroma krasnoyarsk kuban kurgan kursk kustanai kuzbass lipetsk magadan magnitka mari mari-el marine mil mordovia mosreg msk murmansk mytis nakhodka nalchik net nkz nnov norilsk nov novosibirsk nsk omsk orenburg org oryol oskol palana penza perm pp pskov ptz pyatigorsk rnd rubtsovsk ryazan sakhalin samara saratov simbirsk smolensk snz spb stavropol stv surgut syzran tambov tatarstan test tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vdonsk vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yaroslavl yekaterinburg yuzhno-sakhalinsk zgrad".split(" "),
lp_all_tlds.rw="ac co com edu gouv gov int mil net".split(" "),lp_all_tlds.au="act asn com conf csiro edu gov id info net nsw nt org oz qld sa tas telememo vic wa".split(" "),lp_all_tlds.th="ac co go in mi net or".split(" "),lp_all_tlds.tj="ac biz co com edu go gov int mil name net nic org test web".split(" "),lp_all_tlds.tz="ac co go hotel info me mil mobi ne or sc tv".split(" "),lp_all_tlds.ug="ac co com go ne or org sc".split(" "),lp_all_tlds.uk="!bl !british-library !jet !mod !national-library-scotland !nel !nic !nls !parliament * ac co com gov icnet ltd me mil net nhs org plc police sch".split(" "),
lp_all_tlds.vn="ac biz com edu gov health info int name net org pro".split(" "),lp_all_tlds.yu=["ac","co","edu","org"],lp_all_tlds.za="* ac alt city co com edu gov law mil net ngo nom org school tm web".split(" "),lp_all_tlds.zm="* ac co gov org sch".split(" "),lp_all_tlds.zw=["*","ac","co","gov","org"],lp_all_tlds.br="adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop dpn ecn eco edu emp eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus leg lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl radio rec slg srv taxi teo tmp trd tur tv vet vlog wiki zlg".split(" "),
lp_all_tlds.ht="adult art asso com coop edu firm gouv info med net org perso pol pro rel shop".split(" "),lp_all_tlds.mv="aero biz com coop edu gov info int mil museum name net org pro".split(" "),lp_all_tlds.pl="6bone agro aid art atm augustow auto babia-gora bedzin beskidy bialowieza bialystok bielawa bieszczady biz boleslawiec bydgoszcz bytom cieszyn co com czeladz czest dlugoleka edu elblag elk gda gdansk gdynia gliwice glogow gmina gniezno gorlice gov grajewo gsm ilawa info irc jaworzno jelenia-gora jgora kalisz karpacz kartuzy kaszuby katowice kazimierz-dolny kepno ketrzyn klodzko kobierzyce kolobrzeg konin konskowola krakow kutno lapy lebork legnica lezajsk limanowa lodz lomza lowicz lubin lublin lukow mail malbork malopolska mazowsze mazury mbone med media miasta mielec mielno mil mragowo naklo net ngo nieruchomosci nom nowaruda nysa olawa olecko olkusz olsztyn opoczno opole org ostroda ostroleka ostrowiec ostrowwlkp pc pila pisz podhale podlasie polkowice pomorskie pomorze powiat poznan priv prochowice pruszkow przeworsk pulawy radom rawa-maz realestate rel rybnik rzeszow sanok sejny sex shop siedlce sklep skoczow slask slupsk sopot sos sosnowiec stalowa-wola starachowice stargard suwalki swidnica swiebodzin swinoujscie szczecin szczytno szkola targi tarnobrzeg tgory tm torun tourism travel turek turystyka tychy usenet ustka walbrzych warmia warszawa waw wegrow wielun wlocl wloclawek wodzislaw wolomin wroc wroclaw zachpomor zagan zakopane zarow zgora zgorzelec".split(" "),
lp_all_tlds.us="ak al ar as az ca co com ct dc de dni fed fl ga gu hi ia id il in is-by isa kids ks ky la land-4-sale ma md me mi mn mo ms mt nc nd ne nh nj nm nsn nv ny oh ok or pa pr ri sc sd stuff-4-sale tn tx ut va vi vt wa wi wv wy".split(" "),lp_all_tlds.fi=["aland","blogspot","iki"],lp_all_tlds.mil=["army","navy"],lp_all_tlds["do"]="art com edu gob gov mil net org sld web".split(" "),lp_all_tlds.dz="art asso com edu gov net org pol".split(" "),lp_all_tlds.co="arts com edu firm gov info int mil net nom org rec store uk web".split(" "),
lp_all_tlds.ro="arts blogspot com firm info nom nt org rec store tm www".split(" "),lp_all_tlds.ve="arts bib co com e12 edu firm gov info int mil net nom org rec store tec web".split(" "),lp_all_tlds.lv="asn com conf edu eu gov id mil net org".split(" "),lp_all_tlds.lk="assn com edu gov grp hotel int ltd net ngo org sch soc web".split(" "),lp_all_tlds.fr="aeroport assedic asso avocat avoues blogspot cci chambagri chirurgiens-dentistes com experts-comptables geometre-expert gouv greta huissier-justice medecin nom notaires pharmacien port prd presse tm veterinaire".split(" "),
lp_all_tlds.gp="asso com edu mobi net org".split(" "),lp_all_tlds.mc=["asso","tm"],lp_all_tlds.tr="!nic * av bbs bel biz com dr edu gen gov info k12 mil name net org pol tel web".split(" "),lp_all_tlds.az="biz com edu gov info int mil name net org pp pro".split(" "),lp_all_tlds.et="* biz com edu gov info name net org".split(" "),lp_all_tlds.nr="biz co com edu gov info net org".split(" "),lp_all_tlds.om="!mediaphone !nawras !nawrastelecom !omanmobile !omanpost !omantel !rakpetroleum !siemens !songfest !statecouncil * biz co com edu gov med mil museum net org pro sch".split(" "),
lp_all_tlds.pk="biz com edu fam gob gok gon gop gos gov info net org web".split(" "),lp_all_tlds.pr="ac biz com edu est gov info isla name net org pro prof".split(" "),lp_all_tlds.tt="aero biz co com coop edu gov info int jobs mobi museum name net org pro travel us".split(" "),lp_all_tlds.ua="cherkassy cherkasy chernigov chernihiv chernivtsi chernovtsy ck cn co com cr crimea cv dn dnepropetrovsk dnipropetrovsk dominic donetsk dp edu gov if in ivano-frankivsk kh kharkiv kharkov kherson khmelnitskiy khmelnytskyi kiev kirovograd km kr krym ks kv kyiv lg lt lugansk lutsk lv lviv mk mykolaiv net nikolaev od odesa odessa org pl poltava pp rivne rovno rv sb sebastopol sevastopol sm sumy te ternopil uz uzhgorod vinnica vinnytsia vn volyn yalta zaporizhzhe zaporizhzhia zhitomir zhytomyr zp zt".split(" "),
lp_all_tlds.tw="blogspot club com ebiz edu game gov gove idv mil net org xn--czrw28b xn--uc0atv xn--zf0ao64a".split(" "),lp_all_tlds.ag=["co","com","net","nom","org"],lp_all_tlds.ao="co ed gv it og pb".split(" "),lp_all_tlds.bw=["co","org"],lp_all_tlds.ck=["!www","*","co"],lp_all_tlds.ls=["co","org"],lp_all_tlds.ma="ac co gov net org press".split(" "),lp_all_tlds.af=["com","edu","gov","net","org"],lp_all_tlds.ai=["com","net","off","org"],lp_all_tlds.al="com edu gov inima mil net org soros tirana uniti upt".split(" "),
lp_all_tlds.an=["com","edu","net","org"],lp_all_tlds.ar="!congresodelalengua3 !educ !gobiernoelectronico !mecon !nacion !nic !promocion !retina !uba * com edu gob gov int mil net org tur".split(" "),lp_all_tlds.aw=["com"],lp_all_tlds.bb="biz com edu gov info net org store".split(" "),lp_all_tlds.bd="* com edu gov mil net org".split(" "),lp_all_tlds.bm=["com","edu","gov","net","org"],lp_all_tlds.bn=["*","com","edu","net","org"],lp_all_tlds.bo="com edu gob gov int mil net org tv".split(" "),lp_all_tlds.bs=
["com","edu","gov","net","org"],lp_all_tlds.bt=["com","edu","gov","net","org"],lp_all_tlds.cd=["com","gov","net","org"],lp_all_tlds.ch=["blogspot","com","gov","net","org"],lp_all_tlds.cu="com edu gov inf net org".split(" "),lp_all_tlds.dm=["com","edu","gov","net","org"],lp_all_tlds.ec="com edu fin gob gov info k12 med mil net org pro".split(" "),lp_all_tlds.ee="aip com edu fie gov lib med org pri riik".split(" "),lp_all_tlds.eg="com edu eun gov mil name net org sci".split(" "),lp_all_tlds.es=["com",
"edu","gob","nom","org"],lp_all_tlds.eu=["com"],lp_all_tlds.gb=["com","net"],lp_all_tlds.ge="com edu gov mil net org pvt".split(" "),lp_all_tlds.gh=["com","edu","gov","mil","org"],lp_all_tlds.gi="com edu gov ltd mod org".split(" "),lp_all_tlds.gr="blogspot com edu gov net org".split(" "),lp_all_tlds.gu="* com edu gov mil net org".split(" "),lp_all_tlds.hk="blogspot com edu gov idv net org xn--55qx5d xn--ciqpn xn--gmq050i xn--gmqw5a xn--io0a7i xn--lcvr32d xn--mk0axi xn--mxtq1m xn--od0alg xn--od0aq3b xn--tn0ag xn--uc0atv xn--uc0ay4a xn--wcvs22d xn--zf0avx".split(" "),
lp_all_tlds.hn="com edu gob mil net org".split(" "),lp_all_tlds.hr=["com","from","iz","name"],lp_all_tlds.jm="* com edu gov net org".split(" "),lp_all_tlds.jo="com edu gov mil name net org sch".split(" "),lp_all_tlds.kh="* com edu gov mil net org per".split(" "),lp_all_tlds.kw="* com edu gov mil net org".split(" "),lp_all_tlds.ky=["com","edu","gov","net","org"],lp_all_tlds.kz="com edu gov mil net org".split(" "),lp_all_tlds.la="c com edu gov info int net org per".split(" "),lp_all_tlds.lb="com edu gov mil net org".split(" "),
lp_all_tlds.lc="co com edu gov net org".split(" "),lp_all_tlds.li=["com","gov","net","org"],lp_all_tlds.lr=["com","edu","gov","net","org"],lp_all_tlds.ly="com edu gov id med net org plc sch".split(" "),lp_all_tlds.mg="com edu gov mil nom org prd tm".split(" "),lp_all_tlds.mk="com edu gov inf name net org".split(" "),lp_all_tlds.mm="* com edu gov net org".split(" "),lp_all_tlds.mo=["com","edu","gov","net","org"],lp_all_tlds.mt="* com edu gov net org".split(" "),lp_all_tlds.mu="ac co com gov net or org".split(" "),
lp_all_tlds.mx="blogspot com edu gob gov net org".split(" "),lp_all_tlds.my="com edu gov mil name net org".split(" "),lp_all_tlds.na="ca cc co com dr in info mobi mx name net or org pro school tv us ws".split(" "),lp_all_tlds.nc=["asso","com","net","org"],lp_all_tlds.ng="ac com edu gov mil mobi name net org sch".split(" "),lp_all_tlds.ni="* com edu gob net nom org".split(" "),lp_all_tlds.no="aa aarborte aejrie afjord agdenes ah aknoluokta akrehamn al alaheadju alesund algard alstahaug alta alvdal amli amot andasuolo andebu andoy ardal aremark arendal arna aseral asker askim askoy askvoll asnes audnedaln aukra aure aurland aurskog-holand austevoll austrheim averoy badaddja bahcavuotna bahccavuotna baidar bajddar balat balestrand ballangen balsfjord bamble bardu barum batsfjord bearalvahki beardu beiarn berg bergen berlevag bievat bindal birkenes bjarkoy bjerkreim bjugn blogspot bodo bokn bomlo bremanger bronnoy bronnoysund brumunddal bryne bu budejju bygland bykle cahcesuolo co com davvenjarga davvesiida deatnu dep dielddanuorri divtasvuodna divttasvuotna donna dovre drammen drangedal drobak dyroy egersund eid eidfjord eidsberg eidskog eidsvoll eigersund elverum enebakk engerdal etne etnedal evenassi evenes evje-og-hornnes farsund fauske fedje fet fetsund fhs finnoy fitjar fjaler fjell fla flakstad flatanger flekkefjord flesberg flora floro fm folkebibl folldal forde forsand fosnes frana fredrikstad frei frogn froland frosta froya fuoisku fuossko fusa fylkesbibl fyresdal gaivuotna galsa gamvik gangaviika gaular gausdal giehtavuoatna gildeskal giske gjemnes gjerdrum gjerstad gjesdal gjovik gloppen gol gran grane granvin gratangen grimstad grong grue gulen guovdageaidnu ha habmer hadsel hagebostad halden halsa hamar hamaroy hammarfeasta hammerfest hapmir haram hareid harstad hasvik hattfjelldal haugesund hemne hemnes hemsedal herad hitra hjartdal hjelmeland hl hm hobol hof hokksund hol hole holmestrand holtalen honefoss hornindal horten hoyanger hoylandet hurdal hurum hvaler hyllestad ibestad idrett inderoy iveland ivgu jan-mayen jessheim jevnaker jolster jondal jorpeland kafjord karasjohka karasjok karlsoy karmoy kautokeino kirkenes klabu klepp kommune kongsberg kongsvinger kopervik kraanghke kragero kristiansand kristiansund krodsherad krokstadelva kvafjord kvalsund kvam kvanangen kvinesdal kvinnherad kviteseid kvitsoy laakesvuemie lahppi langevag lardal larvik lavagis lavangen leangaviika lebesby leikanger leirfjord leirvik leka leksvik lenvik lerdal lesja levanger lier lierne lillehammer lillesand lindas lindesnes loabat lodingen lom loppa lorenskog loten lund lunner luroy luster lyngdal lyngen malatvuopmi malselv malvik mandal marker marnardal masfjorden masoy matta-varjjat meland meldal melhus meloy meraker midsund midtre-gauldal mil mjondalen mo-i-rana moareke modalen modum molde mosjoen moskenes moss mosvik mr muosat museum naamesjevuemie namdalseid namsos namsskogan nannestad naroy narviika narvik naustdal navuotna nedre-eiker nesna nesodden nesoddtangen nesseby nesset nissedal nittedal nl nord-aurdal nord-fron nord-odal norddal nordkapp nordre-land nordreisa nore-og-uvdal notodden notteroy nt odda of oksnes ol omasvuotna oppdal oppegard orkanger orkdal orland orskog orsta osen oslo osoyro osteroy ostre-toten overhalla ovre-eiker oyer oygarden oystre-slidre porsanger porsangu porsgrunn priv rade radoy rahkkeravju raholt raisa rakkestad ralingen rana randaberg rauma rendalen rennebu rennesoy rindal ringebu ringerike ringsaker risor rissa rl roan rodoy rollag romsa romskog roros rost royken royrvik ruovat rygge salangen salat saltdal samnanger sandefjord sandnes sandnessjoen sandoy sarpsborg sauda sauherad sel selbu selje seljord sf siellak sigdal siljan sirdal skanit skanland skaun skedsmo skedsmokorset ski skien skierva skiptvet skjak skjervoy skodje slattum smola snaase snasa snillfjord snoasa sogndal sogne sokndal sola solund somna sondre-land songdalen sor-aurdal sor-fron sor-odal sor-varanger sorfold sorreisa sortland sorum spjelkavik spydeberg st stange stat stathelle stavanger stavern steigen steinkjer stjordal stjordalshalsen stokke stor-elvdal stord stordal storfjord strand stranda stryn sula suldal sund sunndal surnadal svalbard sveio svelvik sykkylven tana tananger time tingvoll tinn tjeldsund tjome tm tokke tolga tonsberg torsken tr trana tranby tranoy troandin trogstad tromsa tromso trondheim trysil tvedestrand tydal tynset tysfjord tysnes tysvar ullensaker ullensvang ulvik unjarga utsira va vaapste vadso vaga vagan vagsoy vaksdal valle vang vanylven vardo varggat varoy vefsn vega vegarshei vennesla verdal verran vestby vestnes vestre-slidre vestre-toten vestvagoy vevelstad vf vgs vik vikna vindafjord voagat volda voss vossevangen xn--andy-ira xn--asky-ira xn--aurskog-hland-jnb xn--avery-yua xn--bdddj-mrabd xn--bearalvhki-y4a xn--berlevg-jxa xn--bhcavuotna-s4a xn--bhccavuotna-k7a xn--bidr-5nac xn--bievt-0qa xn--bjarky-fya xn--bjddar-pta xn--blt-elab xn--bmlo-gra xn--bod-2na xn--brnny-wuac xn--brnnysund-m8ac xn--brum-voa xn--btsfjord-9za xn--davvenjrga-y4a xn--dnna-gra xn--drbak-wua xn--dyry-ira xn--eveni-0qa01ga xn--finny-yua xn--fjord-lra xn--fl-zia xn--flor-jra xn--frde-gra xn--frna-woa xn--frya-hra xn--ggaviika-8ya47h xn--gildeskl-g0a xn--givuotna-8ya xn--gjvik-wua xn--gls-elac xn--h-2fa xn--hbmer-xqa xn--hcesuolo-7ya35b xn--hgebostad-g3a xn--hmmrfeasta-s4ac xn--hnefoss-q1a xn--hobl-ira xn--holtlen-hxa xn--hpmir-xqa xn--hyanger-q1a xn--hylandet-54a xn--indery-fya xn--jlster-bya xn--jrpeland-54a xn--karmy-yua xn--kfjord-iua xn--klbu-woa xn--koluokta-7ya57h xn--krager-gya xn--kranghke-b0a xn--krdsherad-m8a xn--krehamn-dxa xn--krjohka-hwab49j xn--ksnes-uua xn--kvfjord-nxa xn--kvitsy-fya xn--kvnangen-k0a xn--l-1fa xn--laheadju-7ya xn--langevg-jxa xn--ldingen-q1a xn--leagaviika-52b xn--lesund-hua xn--lgrd-poac xn--lhppi-xqa xn--linds-pra xn--loabt-0qa xn--lrdal-sra xn--lrenskog-54a xn--lt-liac xn--lten-gra xn--lury-ira xn--mely-ira xn--merker-kua xn--mjndalen-64a xn--mlatvuopmi-s4a xn--mli-tla xn--mlselv-iua xn--moreke-jua xn--mosjen-eya xn--mot-tla xn--msy-ula0h xn--mtta-vrjjat-k7af xn--muost-0qa xn--nmesjevuemie-tcba xn--nry-yla5g xn--nttery-byae xn--nvuotna-hwa xn--oppegrd-ixa xn--ostery-fya xn--osyro-wua xn--porsgu-sta26f xn--rady-ira xn--rdal-poa xn--rde-ula xn--rdy-0nab xn--rennesy-v1a xn--rhkkervju-01af xn--rholt-mra xn--risa-5na xn--risr-ira xn--rland-uua xn--rlingen-mxa xn--rmskog-bya xn--rros-gra xn--rskog-uua xn--rst-0na xn--rsta-fra xn--ryken-vua xn--ryrvik-bya xn--s-1fa xn--sandnessjen-ogb xn--sandy-yua xn--seral-lra xn--sgne-gra xn--skierv-uta xn--skjervy-v1a xn--skjk-soa xn--sknit-yqa xn--sknland-fxa xn--slat-5na xn--slt-elab xn--smla-hra xn--smna-gra xn--snase-nra xn--sndre-land-0cb xn--snes-poa xn--snsa-roa xn--sr-aurdal-l8a xn--sr-fron-q1a xn--sr-odal-q1a xn--sr-varanger-ggb xn--srfold-bya xn--srreisa-q1a xn--srum-gra xn--stjrdal-s1a xn--stjrdalshalsen-sqb xn--stre-toten-zcb xn--tjme-hra xn--tnsberg-q1a xn--trany-yua xn--trgstad-r1a xn--trna-woa xn--troms-zua xn--tysvr-vra xn--unjrga-rta xn--vads-jra xn--vard-jra xn--vegrshei-c0a xn--vestvgy-ixa6o xn--vg-yiab xn--vgan-qoa xn--vgsy-qoa0j xn--vre-eiker-k8a xn--vrggt-xqad xn--vry-yla5g xn--yer-zna xn--ygarden-p1a xn--ystre-slidre-ujb".split(" "),
lp_all_tlds.np="* com edu gov mil net org ort".split(" "),lp_all_tlds.pe="com edu gob mil net nom org".split(" "),lp_all_tlds.pf=["com","edu","org"],lp_all_tlds.pg=["*","com","net"],lp_all_tlds.ph="com edu gov i mil net ngo org".split(" "),lp_all_tlds.ps="com edu gov net org plo sec".split(" "),lp_all_tlds.pt="blogspot com edu gov int net nome org publ".split(" "),lp_all_tlds.py="com coop edu gov mil net org".split(" "),lp_all_tlds.qc=["com"],lp_all_tlds.sa="com edu gov med net org pub sch".split(" "),
lp_all_tlds.sb=["com","edu","gov","net","org"],lp_all_tlds.sc=["com","edu","gov","net","org"],lp_all_tlds.sd="com edu gov info med net org tv".split(" "),lp_all_tlds.sg="blogspot com edu gov idn net org per".split(" "),lp_all_tlds.sh="com edu gov mil net org".split(" "),lp_all_tlds.sv="* co com edu gob org red".split(" "),lp_all_tlds.sy="com edu gov mil net org".split(" "),lp_all_tlds.tn="agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism turen".split(" "),
lp_all_tlds.uy="com edu gub mil net org".split(" "),lp_all_tlds.vi="co com edu gov k12 net org".split(" "),lp_all_tlds.ye=["*","com","net"],lp_all_tlds.pro="aca bar cpa eng jur law med".split(" "),lp_all_tlds.arpa="e164 in-addr ip6 iris uri urn".split(" "),lp_all_tlds["int"]=["eu"],lp_all_tlds.bf=["gov"],lp_all_tlds.by=["com","gov","mil","of"],lp_all_tlds.cx=["ath","gov"],lp_all_tlds.ie=["blogspot","gov"],lp_all_tlds.it="ag agrigento al alessandria alto-adige altoadige an ancona andria-barletta-trani andria-trani-barletta andriabarlettatrani andriatranibarletta ao aosta aoste ap aq aquila ar arezzo ascoli-piceno ascolipiceno asti at av avellino ba balsan bari barletta-trani-andria barlettatraniandria belluno benevento bergamo bg bi biella bl blogspot bn bo bologna bolzano bozen br brescia brindisi bs bt bz ca cagliari caltanissetta campidano-medio campidanomedio campobasso carbonia-iglesias carboniaiglesias carrara-massa carraramassa caserta catania catanzaro cb ce cesena-forli cesenaforli ch chieti ci cl cn co como cosenza cr cremona crotone cs ct cuneo cz dell-ogliastra dellogliastra edu en enna fc fe fermo ferrara fg fi firenze florence fm foggia forli-cesena forlicesena fr frosinone ge genoa genova go gorizia gov gr grosseto iglesias-carbonia iglesiascarbonia im imperia is isernia kr la-spezia laquila laspezia latina lc le lecce lecco li livorno lo lodi lt lu lucca macerata mantova massa-carrara massacarrara matera mb mc me medio-campidano mediocampidano messina mi milan milano mn mo modena monza monza-brianza monza-e-della-brianza monzabrianza monzaebrianza monzaedellabrianza ms mt na naples napoli no novara nu nuoro og ogliastra olbia-tempio olbiatempio or oristano ot pa padova padua palermo parma pavia pc pd pe perugia pesaro-urbino pesarourbino pescara pg pi piacenza pisa pistoia pn po pordenone potenza pr prato pt pu pv pz ra ragusa ravenna rc re reggio-calabria reggio-emilia reggiocalabria reggioemilia rg ri rieti rimini rm rn ro roma rome rovigo sa salerno sassari savona si siena siracusa so sondrio sp sr ss suedtirol sv ta taranto te tempio-olbia tempioolbia teramo terni tn to torino tp tr trani-andria-barletta trani-barletta-andria traniandriabarletta tranibarlettaandria trapani trentino trento treviso trieste ts turin tv ud udine urbino-pesaro urbinopesaro va varese vb vc ve venezia venice verbania vercelli verona vi vibo-valentia vibovalentia vicenza viterbo vr vs vt vv".split(" "),
lp_all_tlds.lt=["gov","mil"],lp_all_tlds.lu=["gov","mil","net","org"],lp_all_tlds.to="com edu gov mil net org".split(" "),lp_all_tlds.tp=["gov"],lp_all_tlds.tv=["better-than","dyndns","gov","on-the-web","worse-than"],lp_all_tlds.mobi=["music","weather"],lp_all_tlds.mh=["net"],lp_all_tlds.ad=["nom"],lp_all_tlds.sr=["rs"],lp_all_tlds.va=["vatican"],lp_all_tlds.aero="accident-investigation accident-prevention aerobatic aeroclub aerodrome agents air-surveillance air-traffic-control aircraft airline airport airtraffic ambulance amusement association author ballooning broker caa cargo catering certification championship charter civilaviation club conference consultant consulting control council crew design dgca educator emergency engine engineer entertainment equipment exchange express federation flight freight fuel gliding government groundhandling group hanggliding homebuilt insurance journal journalist leasing logistics magazine maintenance marketplace media microlight modelling navigation parachuting paragliding passenger-association pilot press production recreation repbody res research rotorcraft safety scientist services show skydiving software student taxi trader trading trainer union workinggroup works".split(" "),
lp_all_tlds.as=["gov"],lp_all_tlds.ba="co com edu gov mil net org rs unbi unsa".split(" "),lp_all_tlds.bg="0123456789abcdefghijklmnopqrstuvwxyz".split(""),lp_all_tlds.bh=["com","edu","gov","net","org"],lp_all_tlds.bi=["co","com","edu","or","org"],lp_all_tlds.bj=["asso","barreau","blogspot","gouv"],lp_all_tlds.bz=["com","edu","gov","net","org"],lp_all_tlds.ci="ac asso co com ed edu go gouv int md net or org presse xn--aroport-bya".split(" "),lp_all_tlds.cl=["co","gob","gov","mil"],lp_all_tlds.cm=["gov"],
lp_all_tlds.cw=["com","edu","net","org"],lp_all_tlds.er=["*"],lp_all_tlds.gy=["co","com","net"],lp_all_tlds.io=["com","github"],lp_all_tlds.iq="com edu gov mil net org".split(" "),lp_all_tlds.ke=["*"],lp_all_tlds.kg="com edu gov mil net org".split(" "),lp_all_tlds.ki="biz com edu gov info net org".split(" "),lp_all_tlds.km="ass asso com coop edu gouv gov medecin mil nom notaires org pharmaciens prd presse tm veterinaire".split(" "),lp_all_tlds.kn=["edu","gov","net","org"],lp_all_tlds.kp="com edu gov org rep tra".split(" "),
lp_all_tlds.me="ac co edu gov its net org priv".split(" "),lp_all_tlds.ml="com edu gouv gov net org presse".split(" "),lp_all_tlds.mn=["edu","gov","nyc","org"],lp_all_tlds.mr=["blogspot","gov"],lp_all_tlds.museum="academy agriculture air airguard alabama alaska amber ambulance american americana americanantiques americanart amsterdam and annefrank anthro anthropology antiques aquarium arboretum archaeological archaeology architecture art artanddesign artcenter artdeco arteducation artgallery arts artsandcrafts asmatart assassination assisi association astronomy atlanta austin australia automotive aviation axis badajoz baghdad bahn bale baltimore barcelona baseball basel baths bauern beauxarts beeldengeluid bellevue bergbau berkeley berlin bern bible bilbao bill birdart birthplace bonn boston botanical botanicalgarden botanicgarden botany brandywinevalley brasil bristol british britishcolumbia broadcast brunel brussel brussels bruxelles building burghof bus bushey cadaques california cambridge can canada capebreton carrier cartoonart casadelamoneda castle castres celtic center chattanooga cheltenham chesapeakebay chicago children childrens childrensgarden chiropractic chocolate christiansburg cincinnati cinema circus civilisation civilization civilwar clinton clock coal coastaldefence cody coldwar collection colonialwilliamsburg coloradoplateau columbia columbus communication communications community computer computerhistory contemporary contemporaryart convent copenhagen corporation corvette costume countryestate county crafts cranbrook creation cultural culturalcenter culture cyber cymru dali dallas database ddr decorativearts delaware delmenhorst denmark depot design detroit dinosaur discovery dolls donostia durham eastafrica eastcoast education educational egyptian eisenbahn elburg elvendrell embroidery encyclopedic england entomology environment environmentalconservation epilepsy essex estate ethnology exeter exhibition family farm farmequipment farmers farmstead field figueres filatelia film fineart finearts finland flanders florida force fortmissoula fortworth foundation francaise frankfurt franziskaner freemasonry freiburg fribourg frog fundacio furniture gallery garden gateway geelvinck gemological geology georgia giessen glas glass gorge grandrapids graz guernsey halloffame hamburg handson harvestcelebration hawaii health heimatunduhren hellas helsinki hembygdsforbund heritage histoire historical historicalsociety historichouses historisch historisches history historyofscience horology house humanities illustration imageandsound indian indiana indianapolis indianmarket intelligence interactive iraq iron isleofman jamison jefferson jerusalem jewelry jewish jewishart jfk journalism judaica judygarland juedisches juif karate karikatur kids koebenhavn koeln kunst kunstsammlung kunstunddesign labor labour lajolla lancashire landes lans larsson lewismiller lincoln linz living livinghistory localhistory london losangeles louvre loyalist lucerne luxembourg luzern mad madrid mallorca manchester mansion mansions manx marburg maritime maritimo maryland marylhurst media medical medizinhistorisches meeres memorial mesaverde michigan midatlantic military mill miners mining minnesota missile missoula modern moma money monmouth monticello montreal moscow motorcycle muenchen muenster mulhouse muncie museet museumcenter museumvereniging music national nationalfirearms nationalheritage nativeamerican naturalhistory naturalhistorymuseum naturalsciences nature naturhistorisches natuurwetenschappen naumburg naval nebraska neues newhampshire newjersey newmexico newport newspaper newyork niepce norfolk north nrw nuernberg nuremberg nyc nyny oceanographic oceanographique omaha online ontario openair oregon oregontrail otago oxford pacific paderborn palace paleo palmsprings panama paris pasadena pharmacy philadelphia philadelphiaarea philately phoenix photography pilots pittsburgh planetarium plantation plants plaza portal portland portlligat posts-and-telecommunications preservation presidio press project public pubol quebec railroad railway research resistance riodejaneiro rochester rockart roma russia saintlouis salem salvadordali salzburg sandiego sanfrancisco santabarbara santacruz santafe saskatchewan satx savannahga schlesisches schoenbrunn schokoladen school schweiz science science-fiction scienceandhistory scienceandindustry sciencecenter sciencecenters sciencehistory sciences sciencesnaturelles scotland seaport settlement settlers shell sherbrooke sibenik silk ski skole society sologne soundandvision southcarolina southwest space spy square stadt stalbans starnberg state stateofdelaware station steam steiermark stjohn stockholm stpetersburg stuttgart suisse surgeonshall surrey svizzera sweden sydney tank tcm technology telekommunikation television texas textile theater time timekeeping topology torino touch town transport tree trolley trust trustee uhren ulm undersea university usa usantiques usarts uscountryestate usculture usdecorativearts usgarden ushistory ushuaia uslivinghistory utah uvic valley vantaa versailles viking village virginia virtual virtuel vlaanderen volkenkunde wales wallonie war washingtondc watch-and-clock watchandclock western westfalen whaling wildlife williamsburg windmill workshop xn--9dbhblg6di xn--comunicaes-v6a2o xn--correios-e-telecomunicaes-ghc29a xn--h1aegh xn--lns-qla york yorkshire yosemite youth zoological zoology".split(" "),
lp_all_tlds.mz=["!teledata","*"],lp_all_tlds.nf="arts com firm info net other per rec store web".split(" "),lp_all_tlds.pn=["co","edu","gov","net","org"],lp_all_tlds.pw="belau co ed go ne or".split(" "),lp_all_tlds.qa="com edu gov mil name net org sch".split(" "),lp_all_tlds.re=["asso","blogspot","com","nom"],lp_all_tlds.rs="ac co edu gov in org".split(" "),lp_all_tlds.sl=["com","edu","gov","net","org"],lp_all_tlds.sn="art com edu gouv org perso univ".split(" "),lp_all_tlds.so=["com","net","org"],
lp_all_tlds.st="co com consulado edu embaixada gov mil net org principe saotome store".split(" "),lp_all_tlds.sx=["gov"],lp_all_tlds.sz=["ac","co","org"],lp_all_tlds.tl=["gov"],lp_all_tlds.tm="co com edu gov mil net nom org".split(" "),lp_all_tlds.uz=["co","com","net","org"],lp_all_tlds.vc="com edu gov mil net org".split(" "),lp_all_tlds.ws="com dyndns edu gov mypets net org".split(" "),lp_all_tlds.net="at-band-camp blogdns broke-it buyshouses cloudfront dnsalias dnsdojo does-it dontexist dynalias dynathome endofinternet from-az from-co from-la from-ny gb gets-it ham-radio-op homeftp homeip homelinux homeunix hu in-the-band is-a-chef is-a-geek isa-geek jp kicks-ass office-on-the podzone scrapper-site se selfip sells-it servebbs serveftp thruhere uk webhop za".split(" "),
lp_all_tlds.com="appspot ar betainabox blogdns blogspot br cechire cloudcontrolapp cloudcontrolled cn codespot de dnsalias dnsdojo doesntexist dontexist doomdns dreamhosters dyn-o-saur dynalias dyndns-at-home dyndns-at-work dyndns-blog dyndns-free dyndns-home dyndns-ip dyndns-mail dyndns-office dyndns-pics dyndns-remote dyndns-server dyndns-web dyndns-wiki dyndns-work elasticbeanstalk est-a-la-maison est-a-la-masion est-le-patron est-mon-blogueur eu from-ak from-al from-ar from-ca from-ct from-dc from-de from-fl from-ga from-hi from-ia from-id from-il from-in from-ks from-ky from-ma from-md from-mi from-mn from-mo from-ms from-mt from-nc from-nd from-ne from-nh from-nj from-nm from-nv from-oh from-ok from-or from-pa from-pr from-ri from-sc from-sd from-tn from-tx from-ut from-va from-vt from-wa from-wi from-wv from-wy gb getmyip googleapis googlecode gotdns gr herokuapp herokussl hobby-site homelinux homeunix hu iamallama is-a-anarchist is-a-blogger is-a-bookkeeper is-a-bulls-fan is-a-caterer is-a-chef is-a-conservative is-a-cpa is-a-cubicle-slave is-a-democrat is-a-designer is-a-doctor is-a-financialadvisor is-a-geek is-a-green is-a-guru is-a-hard-worker is-a-hunter is-a-landscaper is-a-lawyer is-a-liberal is-a-libertarian is-a-llama is-a-musician is-a-nascarfan is-a-nurse is-a-painter is-a-personaltrainer is-a-photographer is-a-player is-a-republican is-a-rockstar is-a-socialist is-a-student is-a-teacher is-a-techie is-a-therapist is-an-accountant is-an-actor is-an-actress is-an-anarchist is-an-artist is-an-engineer is-an-entertainer is-certified is-gone is-into-anime is-into-cars is-into-cartoons is-into-games is-leet is-not-certified is-slick is-uberleet is-with-theband isa-geek isa-hockeynut issmarterthanyou jpn kr likes-pie likescandy neat-url no operaunite qc rhcloud ro ru sa saves-the-whales se selfip sells-for-less sells-for-u servebbs simple-url space-to-rent teaches-yoga uk us uy writesthisblog za".split(" "),
lp_all_tlds.org="ae blogdns blogsite boldlygoingnowhere dnsalias dnsdojo doesntexist dontexist doomdns dvrdns dynalias dyndns endofinternet endoftheinternet from-me game-host gotdns hobby-site homedns homeftp homelinux homeunix is-a-bruinsfan is-a-candidate is-a-celticsfan is-a-chef is-a-geek is-a-knight is-a-linux-user is-a-patsfan is-a-soxfan is-found is-lost is-saved is-very-bad is-very-evil is-very-good is-very-nice is-very-sweet isa-geek kicks-ass misconfused podzone readmyblog selfip sellsyourhome servebbs serveftp servegame stuff-4-sale us webhop za".split(" "),
lp_all_tlds.de="blogspot com fuettertdasnetz isteingeek istmein lebtimnetz leitungsen traeumtgerade".split(" "),lp_all_tlds.biz="dyndns for-better for-more for-some for-the selfip webhop".split(" "),lp_all_tlds.info="barrel-of-knowledge barrell-of-knowledge dyndns for-our groks-the groks-this here-for-more knowsitall selfip webhop".split(" "),lp_all_tlds.cc=["ftpaccess","game-server","myphotos","scrapping"],lp_all_tlds.nu=["merseine","mine","shacknet"],lp_all_tlds.cf=["blogspot"],lp_all_tlds.cv=["blogspot"],
lp_all_tlds.cz=["blogspot"],lp_all_tlds.dk=["blogspot"],lp_all_tlds.sk=["blogspot"],lp_all_tlds.td=["blogspot"]}function cspstrendssith(a,e){return-1!==a.indexOf(e,a.length-e.length)}
function lpbeforeload(a){if(lpPerformCSP&&document.location.href.match(/lastpass.com/i)){var e=lpParseUri(document.location.href),b=e.file.toLowerCase();if("lastpass.com"==lp_gettld(e.host).toLowerCase()){var c=lpParseUri(a.url);""==c&&0==a.url.indexOf("data:")&&(c=[],c.host="");var c=c.host.toLowerCase(),d=lp_gettld(c);if("blog.lastpass.com"!=e.host&&"lastpass.com"!=d&&""!=d){var g=a.target.nodeName.toUpperCase(),f=a.url;if(!(0==f.indexOf("data:image/gif;base64,")||0==f.indexOf("data:image/png;base64,")||
0==f.indexOf("about:blank")||0==f.indexOf("chrome-extension://hdokiejnpimakedhajhdlcegeplioahd")))if(!("ads.php"==b&&"tradetracker.net"==d)&&(!(""==b||"index.php"==b)||!(0<=e.query.toLowerCase().indexOf("securitychallenge")&&"addtoany.simplecdn.net"==c)))if(!("news_latestnews.php"==b&&("twimg.com"==d||"s3.amazonaws.com"==c||"static.twitter.com"==c||"twitter.com"==c)))if("www.youtube.com"!=c&&"www.googleadservices.com"!=c&&(!(""==b||"index.php"==b||"support_screencasts.php"==b||"misc_translate.php"==
b||"basic.php"==b||"video_overview.php"==b||"history.php"==b)||!("youtube.com"==d||"ytimg.com"==d||"www.google.com"==c||"youtube.googleapis.com"==c)))if(!("debug.php"==b&&"rodan.lastpas.com"==c)&&!("bwusage.php"==b&&"rtg.superb.net"==c)&&(!("creditmon.php"==b||"credmon_overview.php"==b||"acctsiframe.php"==b)||!cspstrendssith(c,".idwatchdog.com")))if(!("api.stripe.com"==c||"checkout.stripe.com"==c||"stripe.com"==c))if(!("IMG"==g&&("www.google-analytics.com"==c||"ssl.google-analytics.com"==c))){console_error("BLOCKING "+
a.url);a.preventDefault();a={cmd:"reporterror",e:"ERROR: CSP BLOCKING "+a.url};try{if(g_ischrome){var h;(h="undefined"!=typeof chrome.runtime&&"undefined"!=typeof chrome.runtime.connect?chrome.runtime.connect({name:"blocked"}):chrome.extension.connect({name:"blocked"}))&&h.postMessage(a)}else g_issafari&&safari.self.tab.dispatchMessage("message",a)}catch(j){}}}}}};
