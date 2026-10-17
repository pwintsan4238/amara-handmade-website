/* AMARA Handmade — shared behaviour: i18n, header/footer, page logic */
(function () {
  "use strict";

  var CONTACT = {
    ig: "amara_handmade_thailand",
    igUrl: "https://www.instagram.com/amara_handmade_thailand/",
    igChat: "https://ig.me/m/amara_handmade_thailand",
    phone: "092 169 4622",
    tel: "tel:+66921694622",
    email: "amarahandmade31@hotmail.com"
  };

  var STORES = [
    { city: "bangkok", mall: "centralwOrld", floor: "floor1HugThai", q: "centralwOrld Bangkok" },
    { city: "pattaya", mall: "Central Pattaya Beach", floor: "floorG", q: "Central Pattaya Beach" },
    { city: "samui", mall: "Central Samui", floor: "floor1", q: "Central Samui" },
    { city: "phuket", mall: "Central Phuket Floresta", floor: "floorG", q: "Central Phuket Floresta" }
  ];

  /* ---------------- Translations ---------------- */
  var I18N = {
    en: {
      "skip": "Skip to main content",
      "nav.home": "Home", "nav.shop": "Shop", "nav.stores": "Stores", "nav.contact": "Contact",
      "nav.shopNow": "Shop now", "nav.menu": "Open menu", "nav.close": "Close menu", "nav.lang": "Language",

      "home.title": "AMARA Handmade | Hand-woven bags from recycled plastic",
      "home.h1": "Turning plastic waste into timeless Thai craftsmanship.",
      "home.left": "Turning<br>plastic <em>waste</em>",
      "home.right": "into Thai <em>craft</em>",
      "home.pill": "Starting at <strong>฿490</strong>",
      "home.lede": "Discover hand-woven designer bags meticulously crafted from 100% recycled plastics. Elevate every look with authentic Thai artistry starting at just 490 Baht.",
      "home.cta1": "Shop nationwide with free shipping",
      "home.cta2": "Visit us at Hug Craft stores",
      "home.weave": "Weave",
      "sw.mono": "Monochrome", "sw.rose": "Rose stripe", "sw.olive": "Olive pearl",
      "hero.alt": "AMARA hand-woven bag, {name} colourway",

      "hl.recycled.t": "100% recycled plastics",
      "hl.recycled.d": "Giving leftover plastic a high-fashion second life to reduce environmental waste.",
      "hl.heritage.t": "Handmade Thai heritage",
      "hl.heritage.d": "Intricately hand-woven by local artisans, combining traditional techniques with modern style.",
      "hl.luxury.t": "Accessible luxury",
      "hl.luxury.d": "Designer quality starting from just 490 Baht.",
      "hl.ship.t": "Free nationwide shipping",
      "hl.ship.d": "Delivered to your door anywhere in Thailand with zero shipping fees.",

      "feat.title": "Woven to turn heads",
      "feat.text": "Every bag is waterproof, ultra-durable and easy to clean, made for city days, beach trips and the office.",
      "feat.cta": "See the full collection",

      "look.title": "See how it's worn",
      "look.text": "From café mornings to beach afternoons, AMARA fits the way you live.",
      "look.promo": "Starting price for a designer hand-woven bag, shipped free anywhere in Thailand.",
      "look.alt": "Model carrying an AMARA woven bag",

      "band.title": "Touch the weave in person",
      "band.text": "Experience the quality at Hug Craft counters inside Central malls in Bangkok, Pattaya, Samui and Phuket.",
      "band.cta": "Find a store",
      "band.alt": "A wall of AMARA woven bags on display",

      "stores.title": "Where to find us",
      "stores.text": "Visit our display counters at Hug Craft locations and feel the texture and quality in person.",
      "stores.map": "Open in Google Maps",
      "city.bangkok": "Bangkok", "city.pattaya": "Pattaya", "city.samui": "Samui", "city.phuket": "Phuket",
      "floor1HugThai": "1st Floor, Hug Thai Zone", "floorG": "G Floor", "floor1": "1st Floor",

      "footer.cta": "Chic. Unique. Timeless.",
      "footer.chat": "Chat to order",
      "footer.about": "Hand-woven designer bags made from 100% recycled plastic by Thai artisans.",
      "footer.explore": "Explore", "footer.contact": "Contact", "footer.stores": "Hug Craft stores",
      "footer.bar": "Available at Hug Craft locations",
      "footer.demo": "Demo website",

      "shop.title": "The AMARA Woven Collection",
      "shop.docTitle": "Shop all bags | AMARA Handmade",
      "shop.sub": "Sustainable, durable and stylish. Hand-woven plastic bags designed to match every outfit.",
      "shop.offer1": "Free shipping nationwide on all orders",
      "shop.offer2": "Prices starting at 490 Baht",
      "shop.filter": "Filter by style",
      "f.all": "All bags", "f.tote": "Totes", "f.bamboo": "Bamboo handle", "f.pearl": "Pearl handle", "f.bucket": "Bucket and mini", "f.camellia": "Camellia",
      "shop.count": "Showing {n} bags",
      "shop.empty": "No bags in this style yet. Try another filter.",

      "card.badge": "100% recycled plastic",
      "card.from": "From",
      "card.benefit": "Waterproof, ultra-durable, easy to clean",
      "card.cta": "Chat to order",
      "card.alt": "{name}, hand-woven recycled plastic bag",

      "pdp.home": "Home", "pdp.shop": "Shop",
      "pdp.kind": "Hand-woven recycled tote",
      "pdp.price": "Starting at 490 Baht",
      "pdp.ship": "Free nationwide shipping",
      "pdp.status": "In stock, handcrafted batch",
      "pdp.colour": "Colour",
      "pdp.chat": "Chat to order on Instagram",
      "pdp.call": "Call or LINE",
      "pdp.email": "Email us",
      "pdp.hint": "Or comment “Interested” on any of our product posts for instant help.",
      "pdp.gallery": "Product photos",
      "pdp.thumb": "Show photo {n}",
      "pdp.f1.t": "Upcycled material",
      "pdp.f1.d": "Crafted entirely from leftover post-consumer plastics, transformed into smooth, high-strength weaving strips.",
      "pdp.f2.t": "Versatile styling",
      "pdp.f2.d": "Lightweight, vibrant and structured to complement casual beachwear, city strolls or work outfits.",
      "pdp.f3.t": "All-weather durability",
      "pdp.f3.d": "Completely waterproof, fade-resistant and easily wiped clean with water.",
      "pdp.f4.t": "Artisanal quality",
      "pdp.f4.d": "Precision-woven by hand to guarantee structure and handle support.",
      "pdp.care.t": "Care instructions",
      "pdp.care.d": "Simply wipe with a damp cloth or rinse with mild soap and water. Allow to air dry naturally.",
      "pdp.related": "You may also like",
      "pdp.notFound": "We couldn't find that bag. Here is one of our favourites instead.",

      "contact.docTitle": "Contact and stores | AMARA Handmade",
      "contact.title": "Get in touch with AMARA Handmade",
      "contact.sub": "Have questions about our eco-friendly hand-woven bags, custom inquiries or store availability? We're here to help!",
      "contact.ig": "Instagram", "contact.phone": "Phone / LINE", "contact.email": "Email",
      "how.title": "How to order",
      "how.text": "Order online through chat. Shipping is free across Thailand on every bag.",
      "how.1.t": "Pick your bag", "how.1.d": "Browse the collection online or visit a Hug Craft counter.",
      "how.2.t": "Send us a message", "how.2.d": "Chat with us, or comment “Interested” on any product post for instant help.",
      "how.3.t": "Free delivery", "how.3.d": "We ship free to every address in Thailand.",
      "form.title": "Send us a message",
      "form.text": "Tell us which bag you love or what you need, and we'll reply by email.",
      "form.name": "Name", "form.email": "Email", "form.phone": "Phone (optional)", "form.topic": "Topic", "form.message": "Message",
      "form.t.order": "Order a bag", "form.t.custom": "Custom request", "form.t.store": "Store availability", "form.t.other": "Something else",
      "form.send": "Send message",
      "form.err.name": "Please enter your name.",
      "form.err.email": "Enter an email like name@example.com.",
      "form.err.message": "Please write a short message.",
      "form.note": "Sending opens your email app with your message ready to go.",
      "form.success": "Your email app should now be open. Press send there to reach us.",
      "form.required": "required"
    },
    th: {
      "skip": "ข้ามไปยังเนื้อหาหลัก",
      "nav.home": "หน้าแรก", "nav.shop": "สินค้า", "nav.stores": "หน้าร้าน", "nav.contact": "ติดต่อเรา",
      "nav.shopNow": "ช้อปเลย", "nav.menu": "เปิดเมนู", "nav.close": "ปิดเมนู", "nav.lang": "ภาษา",

      "home.title": "AMARA Handmade | กระเป๋าสานมือจากพลาสติกรีไซเคิล",
      "home.h1": "เปลี่ยนขยะพลาสติก ให้เป็นงานหัตถศิลป์ไทยที่อยู่เหนือกาลเวลา",
      "home.left": "เปลี่ยน<br><em>ขยะพลาสติก</em>",
      "home.right": "สู่งาน<br><em>หัตถศิลป์ไทย</em>",
      "home.pill": "เริ่มต้นเพียง <strong>฿490</strong>",
      "home.lede": "พบกับกระเป๋าดีไซเนอร์สานมือ ที่รังสรรค์อย่างประณีตจากพลาสติกรีไซเคิล 100% เติมเสน่ห์ให้ทุกลุคด้วยงานศิลป์ไทยแท้ ในราคาเริ่มต้นเพียง 490 บาท",
      "home.cta1": "ช้อปเลย ส่งฟรีทั่วประเทศ",
      "home.cta2": "แวะชมที่ร้าน Hug Craft",
      "home.weave": "ลายสาน",
      "sw.mono": "ขาวดำ", "sw.rose": "ลายทางชมพู", "sw.olive": "เขียวมะกอกหูมุก",
      "hero.alt": "กระเป๋าสานมือ AMARA สี{name}",

      "hl.recycled.t": "พลาสติกรีไซเคิล 100%",
      "hl.recycled.d": "มอบชีวิตใหม่ระดับแฟชั่นให้พลาสติกเหลือใช้ ช่วยลดขยะสู่สิ่งแวดล้อม",
      "hl.heritage.t": "มรดกงานมือไทย",
      "hl.heritage.d": "สานมืออย่างประณีตโดยช่างฝีมือท้องถิ่น ผสานเทคนิคดั้งเดิมเข้ากับสไตล์ร่วมสมัย",
      "hl.luxury.t": "หรูหราในราคาที่เอื้อมถึง",
      "hl.luxury.d": "คุณภาพระดับดีไซเนอร์ เริ่มต้นเพียง 490 บาท",
      "hl.ship.t": "ส่งฟรีทั่วประเทศ",
      "hl.ship.d": "จัดส่งถึงหน้าบ้านทุกที่ในประเทศไทย ไม่มีค่าส่ง",

      "feat.title": "สานมาเพื่อให้ทุกสายตาหันมอง",
      "feat.text": "ทุกใบกันน้ำ ทนทานสูง ทำความสะอาดง่าย พร้อมไปกับคุณทั้งในเมือง ริมทะเล และที่ทำงาน",
      "feat.cta": "ดูคอลเลกชันทั้งหมด",

      "look.title": "แมตช์ได้ทุกลุค",
      "look.text": "ตั้งแต่เช้าที่คาเฟ่จนถึงบ่ายริมทะเล AMARA เข้ากับทุกไลฟ์สไตล์ของคุณ",
      "look.promo": "ราคาเริ่มต้นของกระเป๋าสานมือระดับดีไซเนอร์ ส่งฟรีทั่วไทย",
      "look.alt": "นางแบบถือกระเป๋าสาน AMARA",

      "band.title": "สัมผัสงานสานด้วยตัวคุณเอง",
      "band.text": "มาสัมผัสคุณภาพได้ที่เคาน์เตอร์ Hug Craft ในศูนย์การค้าเซ็นทรัล กรุงเทพฯ พัทยา สมุย และภูเก็ต",
      "band.cta": "ค้นหาร้านใกล้คุณ",
      "band.alt": "กระเป๋าสาน AMARA จัดแสดงเต็มผนัง",

      "stores.title": "หน้าร้านของเรา",
      "stores.text": "แวะชมสินค้าได้ที่เคาน์เตอร์ Hug Craft และสัมผัสเนื้องานกับคุณภาพด้วยตัวเอง",
      "stores.map": "เปิดใน Google Maps",
      "city.bangkok": "กรุงเทพฯ", "city.pattaya": "พัทยา", "city.samui": "สมุย", "city.phuket": "ภูเก็ต",
      "floor1HugThai": "ชั้น 1 โซน Hug Thai", "floorG": "ชั้น G", "floor1": "ชั้น 1",

      "footer.cta": "เก๋ ไม่ซ้ำใคร เหนือกาลเวลา",
      "footer.chat": "แชทเพื่อสั่งซื้อ",
      "footer.about": "กระเป๋าดีไซเนอร์สานมือจากพลาสติกรีไซเคิล 100% โดยช่างฝีมือไทย",
      "footer.explore": "เมนู", "footer.contact": "ติดต่อ", "footer.stores": "ร้าน Hug Craft",
      "footer.bar": "มีจำหน่ายที่ร้าน Hug Craft",
      "footer.demo": "เว็บไซต์ตัวอย่าง",

      "shop.title": "คอลเลกชันกระเป๋าสาน AMARA",
      "shop.docTitle": "สินค้าทั้งหมด | AMARA Handmade",
      "shop.sub": "รักษ์โลก ทนทาน และมีสไตล์ กระเป๋าพลาสติกสานมือที่ออกแบบมาให้เข้ากับทุกชุด",
      "shop.offer1": "ส่งฟรีทั่วประเทศทุกออเดอร์",
      "shop.offer2": "ราคาเริ่มต้น 490 บาท",
      "shop.filter": "กรองตามสไตล์",
      "f.all": "ทั้งหมด", "f.tote": "กระเป๋าโท้ท", "f.bamboo": "หูไม้ไผ่", "f.pearl": "หูมุก", "f.bucket": "ทรงบักเก็ตและมินิ", "f.camellia": "ดอกคามิเลีย",
      "shop.count": "แสดง {n} ใบ",
      "shop.empty": "ยังไม่มีกระเป๋าสไตล์นี้ ลองเลือกตัวกรองอื่น",

      "card.badge": "พลาสติกรีไซเคิล 100%",
      "card.from": "เริ่มต้น",
      "card.benefit": "กันน้ำ ทนทาน ทำความสะอาดง่าย",
      "card.cta": "แชทสั่งซื้อ",
      "card.alt": "{name} กระเป๋าสานมือจากพลาสติกรีไซเคิล",

      "pdp.home": "หน้าแรก", "pdp.shop": "สินค้า",
      "pdp.kind": "กระเป๋าโท้ทสานมือจากพลาสติกรีไซเคิล",
      "pdp.price": "เริ่มต้น 490 บาท",
      "pdp.ship": "ส่งฟรีทั่วประเทศ",
      "pdp.status": "มีสินค้า ล็อตงานทำมือ",
      "pdp.colour": "สี",
      "pdp.chat": "แชทสั่งซื้อทาง Instagram",
      "pdp.call": "โทร หรือ LINE",
      "pdp.email": "ส่งอีเมล",
      "pdp.hint": "หรือคอมเมนต์ “สนใจ” ใต้โพสต์สินค้าใดก็ได้ เพื่อรับความช่วยเหลือทันที",
      "pdp.gallery": "รูปสินค้า",
      "pdp.thumb": "แสดงรูปที่ {n}",
      "pdp.f1.t": "วัสดุอัปไซเคิล",
      "pdp.f1.d": "ผลิตจากพลาสติกเหลือใช้หลังการบริโภคทั้งหมด แปรรูปเป็นเส้นสานที่เรียบลื่นและแข็งแรงสูง",
      "pdp.f2.t": "แมตช์ได้หลากสไตล์",
      "pdp.f2.d": "น้ำหนักเบา สีสันสดใส ทรงสวยอยู่ตัว เข้ากับชุดเที่ยวทะเล เดินเล่นในเมือง หรือชุดทำงาน",
      "pdp.f3.t": "ทนทุกสภาพอากาศ",
      "pdp.f3.d": "กันน้ำได้เต็มที่ สีไม่ซีดง่าย และเช็ดทำความสะอาดด้วยน้ำได้ทันที",
      "pdp.f4.t": "คุณภาพงานช่าง",
      "pdp.f4.d": "สานมืออย่างพิถีพิถัน ให้ทรงกระเป๋าและหูหิ้วแข็งแรงมั่นคง",
      "pdp.care.t": "วิธีดูแลรักษา",
      "pdp.care.d": "เช็ดด้วยผ้าชุบน้ำหมาด หรือล้างด้วยสบู่อ่อนและน้ำสะอาด แล้วผึ่งให้แห้งตามธรรมชาติ",
      "pdp.related": "สินค้าที่คุณอาจชอบ",
      "pdp.notFound": "ไม่พบกระเป๋าใบนี้ ลองดูใบที่เราแนะนำแทน",

      "contact.docTitle": "ติดต่อเราและหน้าร้าน | AMARA Handmade",
      "contact.title": "ติดต่อ AMARA Handmade",
      "contact.sub": "มีคำถามเกี่ยวกับกระเป๋าสานรักษ์โลก งานสั่งทำพิเศษ หรือสินค้าในร้าน? เรายินดีช่วยเหลือ",
      "contact.ig": "Instagram", "contact.phone": "โทร / LINE", "contact.email": "อีเมล",
      "how.title": "วิธีสั่งซื้อ",
      "how.text": "สั่งซื้อออนไลน์ผ่านแชท ส่งฟรีทั่วประเทศไทยทุกใบ",
      "how.1.t": "เลือกกระเป๋าที่ชอบ", "how.1.d": "เลือกชมคอลเลกชันออนไลน์ หรือแวะที่เคาน์เตอร์ Hug Craft",
      "how.2.t": "ส่งข้อความหาเรา", "how.2.d": "แชทหาเรา หรือคอมเมนต์ “สนใจ” ใต้โพสต์สินค้าเพื่อรับความช่วยเหลือทันที",
      "how.3.t": "จัดส่งฟรี", "how.3.d": "เราจัดส่งฟรีทุกที่ทั่วประเทศไทย",
      "form.title": "ส่งข้อความถึงเรา",
      "form.text": "บอกเราว่าคุณชอบกระเป๋าใบไหน หรือต้องการอะไร แล้วเราจะตอบกลับทางอีเมล",
      "form.name": "ชื่อ", "form.email": "อีเมล", "form.phone": "เบอร์โทร (ไม่บังคับ)", "form.topic": "หัวข้อ", "form.message": "ข้อความ",
      "form.t.order": "สั่งซื้อกระเป๋า", "form.t.custom": "สั่งทำพิเศษ", "form.t.store": "สินค้าในร้าน", "form.t.other": "อื่น ๆ",
      "form.send": "ส่งข้อความ",
      "form.err.name": "กรุณากรอกชื่อ",
      "form.err.email": "กรุณากรอกอีเมล เช่น name@example.com",
      "form.err.message": "กรุณาเขียนข้อความสั้น ๆ",
      "form.note": "เมื่อกดส่ง แอปอีเมลของคุณจะเปิดขึ้นพร้อมข้อความ",
      "form.success": "แอปอีเมลของคุณเปิดแล้ว กดส่งในแอปเพื่อส่งข้อความถึงเรา",
      "form.required": "จำเป็น"
    }
  };

  var LANG_KEY = "amara-lang";
  var lang = "en";
  try { lang = localStorage.getItem(LANG_KEY) === "th" ? "th" : "en"; } catch (e) {}

  function t(key, vars) {
    var s = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace("{" + k + "}", vars[k]); });
    return s;
  }

  /* ---------------- Icons (Lucide, 24px stroke) ---------------- */
  var ICONS = {
    recycle: '<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
    alert: '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + ICONS[name] + "</svg>";
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function mapUrl(q) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q); }

  /* ---------------- Header & footer ---------------- */
  var page = document.body.getAttribute("data-page");

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var links = [["index.html", "nav.home", "home"], ["shop.html", "nav.shop", "shop"], ["index.html#stores", "nav.stores", "stores"], ["contact.html", "nav.contact", "contact"]];
    var nav = links.map(function (l) {
      var current = (l[2] === page || (page === "product" && l[2] === "shop")) ? ' aria-current="page"' : "";
      return '<a href="' + l[0] + '"' + current + ">" + t(l[1]) + "</a>";
    }).join("");
    el.innerHTML =
      '<a class="skip-link" href="#main">' + t("skip") + "</a>" +
      '<div class="container">' +
        '<a class="brand" href="index.html" aria-label="AMARA Handmade"><span class="brand__name">AMARA</span><span class="brand__sub">Handmade</span></a>' +
        '<nav class="nav" id="site-nav" aria-label="Main">' + nav + "</nav>" +
        '<div class="header-actions">' +
          '<div class="lang-toggle" role="group" aria-label="' + t("nav.lang") + '">' +
            '<button type="button" data-lang="en" lang="en" aria-pressed="' + (lang === "en") + '">EN</button>' +
            '<button type="button" data-lang="th" lang="th" aria-pressed="' + (lang === "th") + '">ไทย</button>' +
          "</div>" +
          '<a class="btn btn--gold" href="shop.html">' + t("nav.shopNow") + "</a>" +
          '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="' + t("nav.menu") + '">' + icon("menu") + "</button>" +
        "</div>" +
      "</div>";

    var btn = el.querySelector(".menu-btn");
    var navEl = el.querySelector(".nav");
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", t(open ? "nav.close" : "nav.menu"));
      btn.innerHTML = icon(open ? "close" : "menu");
      navEl.classList.toggle("is-open", open);
    });
    navEl.addEventListener("click", function (e) {
      if (e.target.closest("a") && btn.getAttribute("aria-expanded") === "true") btn.click();
    });
    el.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML =
      '<div class="container">' +
        '<div class="footer-cta">' +
          '<h2 class="display">' + t("footer.cta") + "</h2>" +
          '<a class="btn btn--gold" href="' + CONTACT.igChat + '" target="_blank" rel="noopener">' + icon("chat") + t("footer.chat") + "</a>" +
        "</div>" +
        '<div class="footer-grid">' +
          "<div>" +
            '<a class="brand" href="index.html" aria-label="AMARA Handmade" style="margin-bottom:16px"><span class="brand__name">AMARA</span><span class="brand__sub">Handmade</span></a>' +
            "<p>" + t("footer.about") + "</p>" +
          "</div>" +
          "<div><h3>" + t("footer.explore") + "</h3><ul>" +
            '<li><a href="index.html">' + t("nav.home") + "</a></li>" +
            '<li><a href="shop.html">' + t("nav.shop") + "</a></li>" +
            '<li><a href="index.html#stores">' + t("nav.stores") + "</a></li>" +
            '<li><a href="contact.html">' + t("nav.contact") + "</a></li>" +
          "</ul></div>" +
          "<div><h3>" + t("footer.contact") + "</h3><ul>" +
            '<li><a href="' + CONTACT.tel + '">' + CONTACT.phone + "</a></li>" +
            '<li><a href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a></li>" +
            '<li><a href="' + CONTACT.igUrl + '" target="_blank" rel="noopener">@' + CONTACT.ig + "</a></li>" +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bar">' +
          "<span>" + icon("pin") + t("footer.bar") + "</span>" +
          "<span>" + icon("phone") + CONTACT.phone + "</span>" +
          "<span>" + icon("mail") + CONTACT.email + "</span>" +
          "<span>" + icon("instagram") + "@" + CONTACT.ig + "</span>" +
          '<span style="margin-left:auto">© 2026 AMARA Handmade · ' + t("footer.demo") + "</span>" +
        "</div>" +
      "</div>";
  }

  /* ---------------- Static text ---------------- */
  function applyText() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.innerHTML = t(n.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", t(n.getAttribute("data-i18n-aria"))); });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (n) { n.setAttribute("alt", t(n.getAttribute("data-i18n-alt"))); });
    var dt = document.body.getAttribute("data-title");
    if (dt) document.title = t(dt);
  }

  /* ---------------- Shared pieces ---------------- */
  function productCard(p) {
    var url = "product.html?id=" + encodeURIComponent(p.id);
    return (
      '<article class="card">' +
        '<div class="card__media">' +
          '<img src="assets/img/' + p.img + '.jpg" alt="' + esc(t("card.alt", { name: p.name })) + '" width="206" height="206" loading="lazy" decoding="async">' +
          '<span class="card__badge">' + icon("recycle") + t("card.badge") + "</span>" +
        "</div>" +
        '<div class="card__body">' +
          '<h3 class="card__title"><a href="' + url + '">' + esc(p.name) + "</a></h3>" +
          '<p class="card__meta">' + t("card.benefit") + "</p>" +
          '<div class="card__row">' +
            '<p class="card__price"><small>' + t("card.from") + "</small> ฿490</p>" +
            '<a class="card__cta" href="' + CONTACT.igChat + '" target="_blank" rel="noopener" aria-label="' + esc(t("card.cta") + ": " + p.name) + '">' + icon("chat") + t("card.cta") + "</a>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function renderStores() {
    var el = document.getElementById("stores-list");
    if (!el) return;
    el.innerHTML = STORES.map(function (s) {
      return (
        '<li class="store">' +
          '<p class="store__city">' + t("city." + s.city) + "</p>" +
          '<p class="store__mall">' + s.mall + "</p>" +
          '<p class="store__floor">' + t(s.floor) + "</p>" +
          '<a class="text-link" href="' + mapUrl(s.q) + '" target="_blank" rel="noopener">' + icon("pin") + t("stores.map") + "</a>" +
        "</li>"
      );
    }).join("");
  }

  /* ---------------- Home ---------------- */
  var WEAVES = {
    mono:  { img: "assets/img/hero.jpg", size: "229%", pos: "12% 26%", dot: "#1b1b1b" },
    rose:  { img: "assets/img/cover-collection.jpg", size: "415%", pos: "33% 51%", dot: "#b76e79" },
    olive: { img: "assets/img/cover-collection.jpg", size: "393%", pos: "100% 0%", dot: "#6f7f3a" }
  };
  var currentWeave = "mono";

  function setWeave(key, animate) {
    var frame = document.getElementById("hero-frame");
    if (!frame) return;
    currentWeave = key;
    var w = WEAVES[key];
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var apply = function () {
      frame.style.backgroundImage = "url('" + w.img + "')";
      frame.style.backgroundSize = w.size + " auto";
      frame.style.backgroundPosition = w.pos;
      frame.setAttribute("aria-label", t("hero.alt", { name: t("sw." + key) }));
      frame.classList.remove("is-fading");
    };
    if (animate && !reduce) { frame.classList.add("is-fading"); setTimeout(apply, 180); } else { apply(); }
    document.querySelectorAll(".swatch").forEach(function (s) { s.setAttribute("aria-pressed", String(s.getAttribute("data-weave") === key)); });
  }

  function initHome() {
    var picker = document.getElementById("weave-swatches");
    if (picker) {
      picker.innerHTML = Object.keys(WEAVES).map(function (k) {
        return '<button type="button" class="swatch" data-weave="' + k + '" aria-pressed="false" aria-label="' + t("sw." + k) + '"><span style="background:' + WEAVES[k].dot + '"></span></button>';
      }).join("");
      picker.querySelectorAll(".swatch").forEach(function (s) {
        s.addEventListener("click", function () { setWeave(s.getAttribute("data-weave"), true); });
      });
      setWeave(currentWeave, false);
    }
    var P = window.AMARA_PRODUCTS || [];
    var pick = function (ids) { return ids.map(function (id) { return P.filter(function (p) { return p.id === id; })[0]; }).filter(Boolean); };
    var a = document.getElementById("featured-a");
    var b = document.getElementById("featured-b");
    if (a) a.innerHTML = pick(["diamond-heritage", "rose-bamboo"]).map(productCard).join("");
    if (b) b.innerHTML = pick(["pink-camellia", "aqua-pearl"]).map(productCard).join("");
    var c = document.getElementById("featured-c");
    if (c) c.innerHTML = pick(["noir-bamboo"]).map(productCard).join("");
    renderStores();
  }

  /* ---------------- Shop ---------------- */
  var FILTERS = ["all", "tote", "bamboo", "pearl", "bucket", "camellia"];
  var activeFilter = "all";

  function renderShop() {
    var grid = document.getElementById("shop-grid");
    var chips = document.getElementById("shop-filters");
    var status = document.getElementById("shop-status");
    if (!grid) return;
    chips.innerHTML = FILTERS.map(function (f) {
      return '<button type="button" class="chip" data-filter="' + f + '" aria-pressed="' + (f === activeFilter) + '">' + t("f." + f) + "</button>";
    }).join("");
    chips.setAttribute("aria-label", t("shop.filter"));
    chips.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () {
        activeFilter = c.getAttribute("data-filter");
        try { history.replaceState(null, "", activeFilter === "all" ? "shop.html" : "shop.html?style=" + activeFilter); } catch (e) {}
        renderShop();
        var again = chips.querySelector('[data-filter="' + activeFilter + '"]');
        if (again) again.focus();
      });
    });
    var list = (window.AMARA_PRODUCTS || []).filter(function (p) { return activeFilter === "all" || p.cat.indexOf(activeFilter) > -1; });
    grid.innerHTML = list.length ? list.map(productCard).join("") : '<p class="shop-status">' + t("shop.empty") + "</p>";
    status.textContent = t("shop.count", { n: list.length });
  }

  function initShop() {
    var q = new URLSearchParams(location.search).get("style");
    if (q && FILTERS.indexOf(q) > -1) activeFilter = q;
    renderShop();
  }

  /* ---------------- Product ---------------- */
  var activeThumb = 0;

  function renderProduct() {
    var root = document.getElementById("pdp");
    if (!root) return;
    var P = window.AMARA_PRODUCTS || [];
    var id = new URLSearchParams(location.search).get("id");
    var idx = -1;
    P.forEach(function (p, i) { if (p.id === id) idx = i; });
    var missing = idx === -1;
    if (missing) idx = 0;
    var p = P[idx];
    var looks = window.AMARA_LOOKS || [];
    var photos = [p.img, looks[idx % looks.length], looks[(idx + 3) % looks.length], looks[(idx + 6) % looks.length]];
    document.title = p.name + " | AMARA Handmade";

    document.getElementById("crumb-name").textContent = p.name;

    var thumbs = photos.map(function (src, i) {
      return '<button type="button" class="thumb" data-i="' + i + '" aria-pressed="' + (i === activeThumb) + '" aria-label="' + t("pdp.thumb", { n: i + 1 }) + '"><img src="assets/img/' + src + '.jpg" alt="" width="206" height="206" loading="lazy"></button>';
    }).join("");

    var feats = [["recycle", "pdp.f1"], ["shirt", "pdp.f2"], ["droplet", "pdp.f3"], ["hand", "pdp.f4"]].map(function (f) {
      return '<li class="feature">' + icon(f[0]) + '<div><h3>' + t(f[1] + ".t") + "</h3><p>" + t(f[1] + ".d") + "</p></div></li>";
    }).join("");

    root.innerHTML =
      '<div class="gallery" role="group" aria-label="' + t("pdp.gallery") + '">' +
        '<div class="gallery__main"><img id="pdp-main" src="assets/img/' + photos[activeThumb] + '.jpg" alt="' + esc(t("card.alt", { name: p.name })) + '" width="206" height="206"></div>' +
        '<div class="gallery__thumbs">' + thumbs + "</div>" +
      "</div>" +
      '<div class="pdp__info">' +
        (missing ? '<p class="care" role="status">' + t("pdp.notFound") + "</p>" : "") +
        '<span class="card__badge" style="position:static;justify-self:start">' + icon("recycle") + t("card.badge") + "</span>" +
        '<div><h1 class="display">' + esc(p.name) + '</h1><p style="color:var(--muted);margin-top:10px">' + t("pdp.kind") + "</p></div>" +
        '<p class="pdp__price">' + t("pdp.price") + "<small>" + t("pdp.ship") + "</small></p>" +
        '<p class="status"><span class="status__dot" aria-hidden="true"></span>' + t("pdp.status") + "</p>" +
        '<p style="font-size:15px"><strong>' + t("pdp.colour") + ":</strong> " + p.colour[lang] + "</p>" +
        '<div class="pdp__actions">' +
          '<a class="btn btn--ink" href="' + CONTACT.igChat + '" target="_blank" rel="noopener">' + icon("instagram") + t("pdp.chat") + "</a>" +
          '<a class="btn btn--ghost" href="' + CONTACT.tel + '">' + icon("phone") + t("pdp.call") + "</a>" +
          '<a class="btn btn--ghost" href="mailto:' + CONTACT.email + "?subject=" + encodeURIComponent("AMARA: " + p.name) + '">' + icon("mail") + t("pdp.email") + "</a>" +
        "</div>" +
        '<p style="color:var(--muted);font-size:14px">' + t("pdp.hint") + "</p>" +
        '<ul class="features">' + feats + "</ul>" +
        '<div class="care"><h2>' + t("pdp.care.t") + "</h2><p>" + t("pdp.care.d") + "</p></div>" +
      "</div>";

    root.querySelectorAll(".thumb").forEach(function (b) {
      b.addEventListener("click", function () {
        activeThumb = Number(b.getAttribute("data-i"));
        document.getElementById("pdp-main").src = "assets/img/" + photos[activeThumb] + ".jpg";
        root.querySelectorAll(".thumb").forEach(function (o) { o.setAttribute("aria-pressed", String(o === b)); });
      });
    });

    var rel = document.getElementById("related");
    if (rel) rel.innerHTML = [1, 2, 3, 4].map(function (k) { return P[(idx + k * 3) % P.length]; }).map(productCard).join("");
  }

  /* ---------------- Contact ---------------- */
  function initContact() {
    renderStores();
    var form = document.getElementById("contact-form");
    if (!form) return;
    var rules = {
      name: function (v) { return v.trim().length > 0; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
      message: function (v) { return v.trim().length > 1; }
    };
    function check(name) {
      var input = form.elements[name];
      var ok = rules[name](input.value);
      var field = input.closest(".field");
      field.classList.toggle("is-invalid", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      return ok;
    }
    Object.keys(rules).forEach(function (n) {
      form.elements[n].addEventListener("blur", function () { if (form.elements[n].value) check(n); });
      form.elements[n].addEventListener("input", function () { if (form.elements[n].closest(".is-invalid")) check(n); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      Object.keys(rules).forEach(function (n) { if (!check(n) && !firstBad) firstBad = form.elements[n]; });
      if (firstBad) { firstBad.focus(); return; }
      var f = form.elements;
      var topic = f.topic.options[f.topic.selectedIndex].text;
      var body = f.message.value + "\n\n" + f.name.value + "\n" + f.email.value + (f.phone.value ? "\n" + f.phone.value : "");
      window.location.href = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("AMARA website: " + topic) + "&body=" + encodeURIComponent(body);
      document.getElementById("form-success").classList.add("is-visible");
    });
  }

  /* ---------------- Reveal (single, quiet entrance) ---------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (n) { n.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -10% 0px" });
    items.forEach(function (n) { io.observe(n); });
  }

  /* ---------------- Boot ---------------- */
  function renderAll() {
    applyText();
    renderHeader();
    renderFooter();
    if (page === "home") initHome();
    if (page === "shop") renderShop();
    if (page === "product") renderProduct();
    if (page === "contact") renderStores();
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    var focused = document.activeElement && document.activeElement.getAttribute("data-lang");
    renderAll();
    if (focused) { var b = document.querySelector('[data-lang="' + focused + '"]'); if (b) b.focus(); }
  }

  document.addEventListener("keydown", function (e) {
    var btn = document.querySelector(".menu-btn");
    if (e.key === "Escape" && btn && btn.getAttribute("aria-expanded") === "true") { btn.click(); btn.focus(); }
  });

  document.documentElement.classList.remove("no-js");
  applyText();
  renderHeader();
  renderFooter();
  if (page === "home") initHome();
  if (page === "shop") initShop();
  if (page === "product") renderProduct();
  if (page === "contact") initContact();
  initReveal();
})();
