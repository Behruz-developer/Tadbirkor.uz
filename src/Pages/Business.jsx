import React, { useEffect } from 'react'
import BusinessBg from '../Components/BusinessBg/BusinessBg'

const Business = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className='business'>
      <BusinessBg />

      <div className="container">
        <div className="business_text_card">
          <p className="business_text2">
            “Aл-Aббос силк” пиллани қайта ишлаш корхонаси раҳбари Корхонангиз фаолияти
            тўғрисида маълумот бера оласизми?
          </p>
          <p className="business_text3">
            2006 йили Жиззах вилоятида пиллани қайта ишлаш билан шуғулланабошладик. Ўша пайтда корхонамизда 50-60 нафар ишчи бор эди. Мана,фаолиятимизни бошлаганимизга 16 йил бўлди. Ҳозирда муҳтарам юртбошимиз пиллачилик соҳасида янгича бир тизимни йўлга қўйиб бердилар. Шу муносабат билан мавсумий 7000-8000 нафар кишини иш билан таъминламоқдамиз. Президентимиз иккита иш ўрни яратганни елкамга кўтараман, дегандилар. Буни бизга берилган имкониятларда яққол кўришимиз мумкин. Aйниқса, пиллачилик соҳасига мисли кўрилмаган имтиёзлар берилди. Биз ер, мулк, даромад солиқлари — қандай солиқ бўлса, баридан озод қилинганмиз. Барчага маълумки, тутчиликда сув кўп талаб қилингани боис ундан кенг фойдаланилади. Шунга қарамай биз сув солиғидан ҳам озод этилганмиз. Aгар фаолиятимизда солиқларни тўлаб борганимизда, истеъмол қилинган сув солиғи даромадимизнинг анчагина қисмини ташкил этган бўларди. Биз учун бу анча енгиллик бўлди.
          </p>
          <p className="business_text2">
            Корхонангиз фаолияти тўғрисида маълумот бера оласизми?
          </p>
          <p className="business_text3">
            Мен бир йиқилиб, қайта ўрнидан турган тадбиркорман. Ўзимни қайтатиклашимга давлатимиз раҳбарининг тадбиркорларга яратган имкониятларисабаб бўлган. 8 йил олдин 4 миллиард сўм пулимни бой бериб, ҳеч бир мол-мулксиз қолганман. Яратганга шукр, бу қийинчиликлар ортда қолди. Шунга қарамай тадбиркор бўлганимдан фахрланаман. Бундан кейин ҳам қаттиқ ишлашга, кўплаб ишчи ўринларини яратишга ҳамда ўзимиз ишлаб чиқараётган хом ашёни тайёр маҳсулот ҳолида бозорга чиқаришга ҳаракат қиламан. Асосий мақсадимиз ишлаб чиқаришни кенгайтириб, юртдошларимизга сифатли ва ҳамёнбоп маҳсулот етказишдан иборат. Авваллари одамлар тадбиркор бўлишдан қўрқарди. Ҳозир эса шу даражада эркин бўлган эканмиз, ўзимизни бунга муносиб тутишимиз керак, деб ўйлайман. Қўлимдан келганича юртимиз иқтисодиётига фойда келтиришга ҳаракат қиламан.
          </p>
          <p className="business_text2">
            Ўзбекистонда тадбиркорларга берилаётган имкониятларнинг
            қайсилари сизга маъқул келяпти?
          </p>
          <p className="business_text3">
            Республикада пиллачилик тармоғини ривожлантириш, пилла етиштириш ва уни қайта ишлаш жараёнига замонавий ва инновацион технологияларни жорий этиш, ипак маҳсулотлари ишлаб чиқариш ва уларни экспорт қилиш ҳажмларини ошириш ҳамда тармоққа тўғридан-тўғри хорижий инвестициялар жалб қилиш бўйича изчил чора-тадбирлар амалга оширилмоқда.
          </p>
          <p className="business_text3">
            Президентимизнинг 2020 йил 2 сентябрдаги “Ўзбекистон Республикасида пиллачилик ва қоракўлчиликни янада ривожлантириш чора-тадбирлари тўғрисида”ги фармони ва “Ўзбекистон Республикаси Пиллачилик ва қоракўлчиликни ривожлантириш қўмитаси фаолиятини ташкил этиш тўғрисида”ги қарори билан Пиллачилик ва қоракўлчиликни ривожлантириш қўмитаси ташкил этилиши мамлакатимиз аграр соҳасинининг икки муҳим тармоғи тараққиётининг сифат жиҳатдан янги босқичини белгилаб берди. Қўмита фаолияти натижасида пиллачилик соҳасида олиб борилаётган ислоҳотлар жадаллашди.
          </p>
          <p className="business_text3">
            Юртбошимиз томонидан ҳар беш йиллик учун белгилаб берилаётган тамойиллар тадбиркорлар учун янада қулайликлар яратади. Қанчадан-қанча пиллачилик билан шуғулланадиган тадбиркорларни биламан, ҳатто, Ўзбекистон ҳудудида 10 мингга яқин тадбиркорлар эркин фаолият олиб бориб, экспорт билан шуғулланишмоқда. Сўнгги 5 йилга назар ташлайдиган бўлсак, экспорт билан тор доирадаги корхона шуғулланарди. Ҳозир эса уларнинг сафи анча кенгайди. Олдин монополия бор эди, ҳозир эса бунга барҳам берилди. Маҳсулотимиз тўлиқ экспортга йўналтирилган. Олдинлари 300-400 минг долларлик маҳсулотни четга сотган бўлсак, ҳозирда 1 миллион долларлик маҳсулотни экспорт қилиш даражасига етдик. Бунда ҳеч қандай тўсиқ мавжуд эмас. Божхона постларидан, солиқ ташкилотларидан бизга қўнғироқ қилиб, экспорт қилиш жараёнида бирор муаммога дуч келяпмизми-йўқми, мунтазам суриштириб туришади. Яна бир воқеани айтиб бермоқчиман. Бизнинг фаолиятимиз иқлим, об-ҳаво шароитига боғлиқ. Бир йил 100 фоиз натижага эришсак, бир йил режани тўлиқ бажара олмай қоламиз. Бундай пайтларда банклар билан шартнома тузиб, келишиб ишлашимизга тўғри келади. Aйнан шундай пайтда Президентимиз кредит муддатини чўздириб бердилар. Бундан нафақат мен, балки Ўзбекистондаги барча тадбиркорлар мамнун бўлди, деб бемалол айта оламан.
          </p>
        </div>
      </div>
    </div>
  )
} 

export default Business