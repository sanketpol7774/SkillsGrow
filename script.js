var adding = [
    {
        img: "AnimationImg-DgIKhrvX.jpg"
    },

    {
        img: "img3.avif"
    },

    {
        img: "d0uc1s2vplplqcsjaiwd (1).jpg"
    },

    {
        img: "DigitalMarketingImg-94h9C2l3 (1).avif"
    },

    {
        img: "FreelanceImg-DP8zkRO1.webp"
    },

    {
        img: "Marketing-CxF0sEjx (1).avif"
    },

    {
        img: "PhotographyImg-CRIVjM4L.jpg"
    },

    {
        img: "Productivity-CdhvNbW6 (1).avif"
    },

    {
        img: "tmxkqgmgva0bxefp9gdv (1).jpg"
    },

    {
        img: "TypographyImg-Cs-e15C1.avif"
    },


    {
        img: "UIdesign-C9oyIc5d.webp"
    },


    {
        img: "aaa.webp"
    },

    {
        img: "eee.avif"
    },
];

adding.forEach(a => {

    var slidefirst = document.querySelector(".slidefirst");


    var slide = document.createElement('div');
    slide.className = "slide";


    var img = document.createElement('img');
    img.src = a.img;

    img.style.height = "100%";
    img.style.width = "100%";

    slide.appendChild(img);


    slidefirst.appendChild(slide);
});













var first_slide = [
    {
        image: "kalyani mane.jpg", 
        name: "kalyani mane",
        paragraf: "I'm Kalyani Mane. As a housewife, joining Grow Skills Academy was a great decision. The course helped me learn so much in just a month. Thanks to the guidance and support of our mentors, I've been able to improve my design skills significantly. I've learned a lot about color psychology and observation skills."
    },
    {
        image: "", 
        name: "omkar bhor",
        paragraf: "I've been learning graphic design for quite some time. When I came across Grow Skills Academy, I reached out to Omkar sir and joined. The academy has opened up a whole new world for me, especially with the introduction of AI tools like Midjourney and Adobe Firefly. It's been an exciting journey"
    },

    {
        image: "pratik sugte.jpg", 
        name: "pratik sugte",
        paragraf: "Hi, I'm Pratik. I've always had a passion for design. Joining Grow Skills Academy introduced me to the world of commercial design. Omkar sir's course, which incorporates AI tools like Midjourney and ChatGPT, has taken my design skills to new heights. I've learned how to leverage these tools to create more innovative and impactful designs."
    },
    {
        image: "namdevranepatil.jpg", 
        name: "Namdev Ranerpatil",
        paragraf:"Hi, I'm Namdev Ranerpatil. I've been a photographer for 5 years now, but I always felt my editing skills were lacking. When I discovered Grow Skills Academy online, I reached out to Omkar sir. He guided me on how to enhance my designs using AI tools like Midjourney and ChatGPT. It's been a game-changer."
    },


    {
        image: "", 
        name: "shravni",
        paragraf:"Hi, I'm Shravni. As a competitive exam aspirant, I was looking for a side hustle. Given my passion for graphic design, I came across Grow Skills Academy on Instagram and decided to join. The course was amazing! Thanks to Omkar sir's guidance, I've learned how to use AI tools and create stunning designs from basic to advanced levels."
    },

    {
        image: "", 
        name: "veena",
        paragraf:"m a UI/UX designer. To level up my skills, I enrolled in Grow Skills Academy. Omkar sir's teaching approach is exceptional. His classes consist of a balanced mix of theory and practice, ensuring a comprehensive learning experience.The daily practice sessions under his guidance have been immensely beneficial."
    },

    {
        image: "mohit.jpg", 
        name: "mohit",
        paragraf:"Hi, my name is Mohit. I'm a Sells professional . The course created by Sir is perfect. It's a 5-week course where I learned a lot of things like retouching and product poster designing. I also learned important concepts like font pairing and color theory. Highly recommended if you are looking for a graphic design course"
    },


    {
        image: "shyamgayke.jpg", 
        name: "shyam gayke",
        paragraf:"I previously attended a three-month graphic design course where I only learned about tools, and that too, not very effectively. Then, I came across Grow Skills Academy and joined Omkar sir's class. Here, I learned everything I needed to know to create professional designs, including skills that I couldn't learn in my previous course."
    },


  
];

first_slide.forEach(b => {
    var upper = document.getElementById("upper");

    var cardss = document.createElement("div");
    cardss.className = "cardss  abc"; 

    var display = document.createElement('div');
    display.className = "display";


    var profile = document.createElement('div');
    profile.className = "profile";

    var image = document.createElement('img');
    image.className = "dp";
    image.src = b.image; 


    var name = document.createElement('div');
    name.className = "name"; 
    name.textContent = b.name;

    var text = document.createElement('div');
    text.className = "text";
    text.textContent = b.paragraf;


    profile.appendChild(image);
    display.appendChild(profile);
    display.appendChild(name);
    cardss.appendChild(display);
    cardss.appendChild(text);


    upper.appendChild(cardss);
});











var first = [

  

    {
        image: "amarranwade.jpg", 
        name: "amar ranwade",
        paragraf:"Hi, I'm Amar Ranawade. I wanted to make a career in graphic design, but my previous course didn't meet my expectations. When I came across Grow Skills Academy, I knew I had found the right place. The course provided me with the professional graphic design skills I was looking for. Thank You Growskills"


    },


    {
        image: "mi", 
        name: "milind",
        paragraf:"I came across Grow Skills Academy through Instagram and was immediately impressed by the instructor's design skills. I was eager to learn more about corporate design. Grow Skills provided me with in-depth knowledge of color theory and fonts. I'm truly grateful for the guidance and support I received at Grow Skills Academ"
    },

    {
        image: "rashmighogre.jpg", 
        name: "rashmi ghogre",
        paragraf:"I am writing this as it comes to mind. You're very calm and patient, which makes learning easy. I've never seen a mentor as good as you. You're passionate about teaching and make complex things simple. I'm grateful to have learned from you. I understand how challenging it can be, but you make it look effortless. You're an amazing mento"


    },


    {
        image: "", 
        name: "pravin",
        paragraf:"I was always looking for ways to enhance my design skills. Grow Skills Academy was the answer I was searching for. The AI training I received from Omkar sir has completely transformed my design process. Learning how to leverage AI tools has opened up new creative possibilities and helped me achieve results I never thought were possible"


    },

    {
        image: "mohit.jpg", 
        name: "mohit",
        paragraf:"Hi, my name is Mohit. I'm a Sells professional . The course created by Sir is perfect. It's a 5-week course where I learned a lot of things like retouching and product poster designing. I also learned important concepts like font pairing and color theory. Highly recommended if you are looking for a graphic design course"
    },


    {
        image: "shyamgayke.jpg", 
        name: "shyam gayke",
        paragraf:"I previously attended a three-month graphic design course where I only learned about tools, and that too, not very effectively. Then, I came across Grow Skills Academy and joined Omkar sir's class. Here, I learned everything I needed to know to create professional designs, including skills that I couldn't learn in my previous course."
    },

    {
        image: "", 
        name: "shravni",
        paragraf:"Hi, I'm Shravni. As a competitive exam aspirant, I was looking for a side hustle. Given my passion for graphic design, I came across Grow Skills Academy on Instagram and decided to join. The course was amazing! Thanks to Omkar sir's guidance, I've learned how to use AI tools and create stunning designs from basic to advanced levels."
    },

    {
        image: "", 
        name: "veena",
        paragraf:"m a UI/UX designer. To level up my skills, I enrolled in Grow Skills Academy. Omkar sir's teaching approach is exceptional. His classes consist of a balanced mix of theory and practice, ensuring a comprehensive learning experience.The daily practice sessions under his guidance have been immensely beneficial."
    },



    


];

first.forEach(b => {
    var upper = document.getElementById("middle");

    var cardss = document.createElement("div");
    cardss.className = "cardss xyz"; 

    var display = document.createElement('div');
    display.className = "display";


    var profile = document.createElement('div');
    profile.className = "profile";

    var image = document.createElement('img');
    image.className = "dp";
    image.src = b.image; 

 


    var name = document.createElement('div');
    name.className = "name"; 
    name.textContent = b.name;

    var text = document.createElement('div');
    text.className = "text";
    text.textContent = b.paragraf;


    profile.appendChild(image);
    display.appendChild(profile);
    display.appendChild(name);
    cardss.appendChild(display);
    cardss.appendChild(text);


    upper.appendChild(cardss);
});

















var slide = [
    {
        image: "", 
        name: "पंकज पाटील",
        paragraf:"मी पुण्यात ग्राफिक डिझाइनचा क्लास जॉइन केला होता, पण तिथे फक्त टूल्स शिकवले गेले, डिझाइनच्या मूळ गोष्टी जसे की कलर थिअरी, फॉन्ट थिअरी, एलिमेंट याबद्दल काहीच शिकवले नाही. नंतर मला इंस्टाग्रामवर ग्रो स्किल अकॅडमीबद्दल माहिती मिळाली. ओंकार सरांनी टूल्स वापरण्याबरोबरच कलर थिअरी, फॉन्ट थिअरी, डिझाइन प्रक्रिया, AI टूल्स (ChatGPT, MidJourney) आणि डिझाइन्स अधिक प्रभावी बनवण्याच्या पद्धती शिकवल्या. ओंकार सरांची शिकवण्याची पद्धत उत्कृष्ट आहे, आणि ग्राफिक डिझाइन क्षेत्रात करिअर करायचे असल्यास त्यांचा क्लास जॉइन करण्याची शिफारस करतो."
    },
    {
        image: "", 
        name: "मनोज गोडके ",
        paragraf:"माझं नाव मनोज गोडके मी एक डिलिव्हरी बॉयचा जॉब करायचो आणि एकदा स्क्रोल करताना मी सरानचा व्हिडिओ बघितला पोस्ट बघितले सरानला कॉल केला आणि भेटायला सराननी मला सगळं सांगितलं त्यानंतर मी नावनोंदणी केलं कोर्समध्ये. मला इथं आधी माझ्या ग्राफिक डिझायनिंग कडं बघायच्या दृष्टीकोन सराननी जो बदलला, इथं मला जास्तीत जास्त नॉलेज मिळालं जसं की आपले एक मित्र सांगतो आपल्याला की बाबा असं नाही असं करू असं नाही असं करू आणि प्रॉपर असं दुसरीकडं पण असतो पण तिथं जे असं आहे की चुकलं तर वेळोवेळी सांगतात आणि प्रॅक्टिकल प्रॅक्टिकल लगेच वेगळं"
    },

    {
        image: "", 
        name: "पंकज पाटील",
        paragraf:" ग्राफिक डिझाइन आवडते. जेव्हा मी इन्स्टाग्रामवर स्क्रोल करत होतो तेव्हा मला ग्रोस्किल्सची जाहिरात दिसली आणि मला माझा एक मित्रही दिसला. त्यानंतर मी त्याला मेसेज केला आणि विचारले की तू कोर्स कुठे जॉईन झाला आहेस. मग त्याने मला वाढीव ग्रोस्किल्स बद्दल सांगितले. त्याने मला ओंकार सरांचा नंबर दिला. त्यानंतर मी भेटायला आलो आणि सरांनी मला सांगितले की सर्व काही सोपे आहे आणि आम्ही तुम्हाला नवशिक्यापासून ॲडव्हान्स लेव्हलपर्यंत शिकवतो. मला संगणक कसे चालवायचे हे देखील माहित नाही म्हणून सरांनी मला हे देखील सांगितले. आता माझी ग्राफिक डिझाईन खूप अपग्रेड झाली आहेत."
    },

    {
        image: "krushnalchoudhri.jpg", 
        name: "कृष्णाल चौधरी",
        paragraf:"मला ग्राफिक डिझाईनची आवड होती. मी या बद्दल एक क्लास पण जॉईन केला होता पण मला ते तिथून एवढं शिकायला नाही भेटलं. मी एकदा इन्स्टाग्राम बघत होतो आणि मला एक ओमकार सर यांची एक जाहिरात दिसली तिथून मी त्यांना कॉन्टॅक्ट वगैरे केला आणि त्यांचा सिलॅबस वगैरे बघितला. त्यांचा सिलॅबस मला आवडला त्यांनी सुरुवातीलाच सांगितलं होतं का आपला असा सिलॅबस आहे तर आज त्यांनी शेवटपर्यंत डिलिव्हर केला सिलॅबस, त्यांची एक तास थिअरी आणि एक तास प्रॅक्टिस चांगली संकल्पना आहे. जर तुम्हाला पण ग्राफिक डिझाईनच्या स्किल वाढवायच्या असतील तर तुम्ही ग्रोथ स्किल अकॅडमीला भेट द्या धन्यवाद."
    },


    {
        image: "", 
        name: "प्रवीण शिलवंत",
        paragraf:"मी प्रवीण शिलवंत, मी ग्राफिक्स डिझाईन बऱ्याच वर्षांपासून करतोय पण एक ग्राफिक्समध्ये काहीतरी अ‍ॅडव्हान्स करायचं बऱ्याच दिवसांपासून एक मनात होतं की काहीतरी अ‍ॅडव्हान्स करूया काहीतरी अ‍ॅडव्हान्स करूया आणि ते इथं पुण्यात आपल्याला स्वतःला काय ग्रो करता येईल ते ग्रोस्किलनी आम्हाला शिकवलं तर ग्रोस्किल अ‍ॅकॅडमीमध्ये ओंकार सरांनी खूप खूप छान पद्धतीने आम्हाला सरळ सरळ मार्गदर्शन केलं. त्यामुळे तुम्हाला सगळ्यांना जर ग्रो करायचं असेल तर 100% ग्रो स्किल अ‍ॅकॅडमीमध्ये तुम्ही प्रवेश घ्या आणि सरांना भेट द्या थँक्यू. धन्यवाद ओंकार सर"
    },

    {
        image: "ravibankar.jpg", 
        name: "रवि बनकर",
        paragraf:" आहिल्या नगर वरून मी आपला ऑनलाईन ग्राफिक्स डिझाईन कोर्स कंप्लीट केला. आपल्या ग्रो स्किल अकॅडमी बद्दल खरचं सांगायचं म्हटल तर पाहिले तुमची शिकवण्याची पद्धत एक एक टूल्स तुम्ही खुप छान शिकवले आणि ते मला सहजरित्या सोप्या भाषेत समजले आणि मला नवनवीन आयडिया सुचत गेल्या आणि मी आता ग्राफिक्स डिझाईन चे काम मला आता भेटायला लागले. खर तर क्लास मध्ये तुम्ही जेजे टास्क दिलते त्या टास्क च्या बेस वर मला एका नगर मधील नामांकित हॉटेलचे काम भेटले. त्याबद्दल सर तुमचे खुप आभारी आहे तुमच्या सारखे मार्गदर्शन मला भेटले"
    },

    {
        image: "vishvjeetshejule.jpg", 
        name: "विश्वजीत शेजूळ",
        paragraf:"मला ग्राफिक डिझाइन आवडते. जेव्हा मी इन्स्टाग्रामवर स्क्रोल करत होतो तेव्हा मला ग्रोस्किल्सची जाहिरात दिसली आणि मला माझा एक मित्रही दिसला. त्यानंतर मी त्याला मेसेज केला आणि विचारले की तू कोर्स कुठे जॉईन झाला आहेस. मग त्याने मला वाढीव ग्रोस्किल्स बद्दल सांगितले. त्याने मला ओंकार सरांचा नंबर दिला. त्यानंतर मी भेटायला आलो आणि सरांनी मला सांगितले की सर्व काही सोपे आहे आणि आम्ही तुम्हाला नवशिक्यापासून ॲडव्हान्स लेव्हलपर्यंत शिकवतो. मला संगणक कसे चालवायचे हे देखील माहित नाही म्हणून सरांनी मला हे देखील सांगितले. आता माझी ग्राफिक डिझाईन खूप अपग्रेड झाली आहेत. "
    },
];

slide.forEach(b => {
    var upper = document.getElementById("lover");

    var cardss = document.createElement("div");
    cardss.className = "cardss abc"; 

    var display = document.createElement('div');
    display.className = "display ";


    var profile = document.createElement('div');
    profile.className = "profile";

    var image = document.createElement('img');
    image.className = "dp";
    image.src = b.image; 


    var name = document.createElement('div');
    name.className = "name"; 
    name.textContent = b.name;

    var text = document.createElement('div');
    text.className = "text";
    text.textContent = b.paragraf;


    profile.appendChild(image);
    display.appendChild(profile);
    display.appendChild(name);
    cardss.appendChild(display);
    cardss.appendChild(text);


    upper.appendChild(cardss);
});










var questions = document.querySelectorAll(".qoestions");

questions.forEach(function(question) {
  var zx = question.querySelector(".zx");
  var secounddiv = question.querySelector(".secounddiv");

  // Initially hide all answers
  secounddiv.style.display = 'none';

  zx.addEventListener('click', function() {
    if (secounddiv.style.display === 'none') {
      secounddiv.style.display = 'block';  // Show the answer
    } else {
      secounddiv.style.display = 'none';   // Hide the answer
    }
  });
});

















