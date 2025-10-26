// وظيفة نافذة المشروع
const projects = {
    project1 : {
leftCornerColor: 'gray-700',
Color: 'white',
cornerText: 'برمجيات ERP',
cornerColor: 'gray-600',
cornerIcon: 'database',
faClass: 'fas',
title: 'New G Solution – منصة ERP السحابية',
image: 'assets/img/projects/ngs.png',
description:
'انضممت إلى New G Solution في عام 2021 كمطور WordPress، ثم ساهمت في تطوير نظام ERP، وأعمل حاليًا كمدير تقني مسؤول عن هندسة النظام والتكاملات وسير عمل التطوير لمنصة ERP السحابية متعددة المستأجرين.',
features: [
'شاركت في تطوير وحدات ERP التي تشمل المالية والمخزون وRMA والإرجاع وكشوف المرتبات وعمليات التصنيع',
'شاركت في تصميم منطق توزيع التكاليف وتصنيع قوائم المواد المتكاملة مع بيانات المستودعات والمحاسبة',
'دعمت تطبيق أنظمة RMA والتجديد الديناميكية مع إدارة مخزون متزامنة',
'أشرفت وساهمت في تكاملات مع أكثر من 50 API خارجي (Amazon, eBay, Shopify, Walmart, ShipStation, FedEx, UPS, USPS، إلخ)',
'ساهمت في تصميم وصيانة نشر سحابي متعدد المستأجرين مع علامة تجارية مخصصة وقواعد وصول لكل عميل',
'أكملت تكامل بوابات WordPress للوصول من قبل الشركة والعملاء',
'أقود حاليًا هندسة النظام وتحسين الأداء والتعاون متعدد الفرق كمدير تقني'
],
technologies: [
'PHP (إطار Yii)',
'MySQL / MariaDB',
'AWS EC2 & S3',
'واجهات برمجة RESTful',
'JavaScript / jQuery',
'Bootstrap / Tailwind',
'ACL / OBAC / RBAC',
'تكاملات API',
'ERP متعدد المستأجرين',
'تكامل WordPress'
],
// github: 'https://github.com/anasabbasdev/newg-erp',
demo: 'https://newgsolution.com'
}

        ,
        project2 : {
            leftCornerColor: 'red-500',
        Color: 'white',
        cornerText: 'منصة B2B',
        cornerColor: 'red-500',
        cornerIcon: 'laravel',
        faClass: 'fab',
        title: 'منصة التجارة الإلكترونية B2B (جزء من New G Solution)',
        image: 'assets/img/projects/ngs.png',
        description:
            'منصة تجارة إلكترونية B2B مبنية على Laravel باستخدام إطار S-Cart، مدمجة بشكل مباشر مع نظام New G Solution ERP. مصممة للنشر متعدد العملاء مع نطاقات فرعية آمنة ومعزولة.',
        features: [
            'صيانة وتوسيع هندسة المنصة تحت New G Solution ERP',
            'تنفيذ وحدات RMA وتاريخ الطلبات مع حسابات تكاليف ديناميكية',
            'تحسين خصوصية العملاء بتأمين الوسائط والصور لكل نطاق فرعي',
            'تكامل تدفق بيانات الطلبات وRMA مع نظام ERP الخلفي لتتبع التكاليف في الوقت الفعلي',
            'تحسين الأداء والتخزين المؤقت وعزل البيانات للعملاء متعددي المستأجرين'
        ],
        technologies: [
            'إطار Laravel',
            'ثيم S-Cart',
            'PHP',
            'MySQL',                    
            'تكامل ERP',
            'وحدات الطلبات وRMA',
            'هندسة متعددة المستأجرين',
            'آمنة',
            'نطاقات فرعية معزولة'
        ],
        //   github: 'https://github.com/anasabbasdev/b2b-platform',
        demo: 'https://newgsolution.com'
        }
,               
project3: {
leftCornerColor: 'blue-500',
Color: 'white',
cornerText: 'منصة دليل المستخدم',
cornerColor: 'blue-500',
cornerIcon: 'wordpress',
faClass: 'fab',
title: 'New G Solution – منصة دليل المستخدم',
image: 'assets/img/projects/ngs.png',
description:
'منصة توثيق مخصصة مبنية على WordPress تم تطويرها كجزء من نظام New G Solution ERP. مخصصة بالكامل لتوفير أدلة مستخدم منظمة وتصفح نظيفة وتجربة قراءة محسنة للعملاء والفرق الداخلية.',
features: [
'تطوير وتنظيم هندسة موقع WordPress بالكامل للتوثيق ومواد التدريب',
'تخصيص وتحسين تصميم الثيم والملاحة والتخطيط للوضوح والسهولة',
'تنفيذ تصميم متجاوب وهيكل بحث وقوالب محتوى ديناميكية للتوسع المستقبلي',
'التعامل مع جميع الإعدادات التقنية والتكوين والنشر للمنصة'
],
technologies: [
'WordPress',
'PHP',
'HTML / CSS / JavaScript',
'تطوير ثيم مخصص',
'تصميم متجاوب'
],
//   github: 'https://github.com/anasabbasdev/newg-userguide',
demo: 'https://newgsolution.com/userguide'
}
,
project4 : {
leftCornerColor: 'blue-500',
Color: 'white',
cornerText: 'الموقع الرسمي',
cornerColor: 'blue-500',
cornerIcon: 'wordpress',
faClass: 'fab',
title: 'New G Solution – الموقع الرسمي',
image: 'assets/img/projects/ngs.png',
description:
'الموقع المؤسسي الرئيسي لـ New G Solution ERP، تم تطويره وصيانته بالكامل بواسطتي. مبنى على WordPress لعرض ميزات ERP وإدارة اشتراكات العملاء ودعم التسويق بالعمولة من خلال تكاملات MemberPress وEasyAffiliate.  التصميمات تمت بواسطة المصمم المبدع <a href="https://www.instagram.com/noor.aldeen93" target="_blank" class="text-green-400 hover:underline">نور الدين سلامة</a>.',
features: [
'تطوير وصيانة تقنية كاملة لموقع الشركة الرئيسي',
'تكامل MemberPress لإدارة اشتراكات وتراخيص العملاء',
'تنفيذ EasyAffiliate لبرنامج الولاء والعمولة',
'تطوير أقسام مخصصة لميزات المنتج ومقالات المدونة وصفحات التسويق مع تطوير ثيم مخصص',
'التعامل مع تكوين الخادم والنسخ الاحتياطي وتأمين الأمان والصيانة المستمرة',
'تخصيص التصميم والتخطيط وواجهة المستخدم المتجاوبة للهوية التجارية المتسقة'
],
technologies: [
'WordPress',
'PHP',
'MemberPress',
'EasyAffiliate',
'HTML / CSS / JavaScript',
'تصميم متجاوب',
'الأمان والنسخ الاحتياطي'
],
//   github: 'https://github.com/anasabbasdev/newg-main-website',
demo: 'https://newgsolution.com/'
},
project5 : {
leftCornerColor: 'gray-700',
cornerText: '',
cornerColor: 'gray-700',
cornerIcon: '',
faClass: '',
Color: 'gray-700',
title: 'DXB Karaoke – موقع متجر موسيقي',
image: 'assets/img/projects/dxbkaraoke.png',
description:
'موقع اختيار كاريوكي ثنائي اللغة لمفهوم مطعم مقره دبي. تسمح المنصة للضيوف بتصفح واختيار من أكثر من 16,000 أغنية كاريوكي بلغات متعددة، وإرسال اختياراتهم مباشرة عبر WhatsApp لتحضيرها يدويًا من قبل الطاقم للعروض الحية.',
features: [
'إعداد WordPress + WooCommerce مخصص يُستخدم كقائمة منظمة لأغاني الكاريوكي (بدون دفع عبر الإنترنت)',
'نموذج اختيار أغاني تفاعلي متكامل مع WhatsApp لإرسال فوري',
'يدعم أكثر من 16,000 أغنية كاريوكي عبر لغات وأنواع متعددة',
'تنفيذ تصنيف مطرب مخصص مع ترتيب أبجدي (عربي وإنجليزي وآخرين)',
'تكوين Polylang لواجهة عربية-إنجليزية ثنائية اللغة دون تكرار المنتجات',
'ثيم وواجهة محسنة للتنقل السريع وتصميم متجاوب وسهولة الاستخدام للموبايل أولاً',
'إعداد تقني كامل وإعدادات الإضافات وإعداد تكامل الاستضافة'
],
technologies: [
'WordPress',
'WooCommerce (وضع القائمة)',
'PHP',
'Polylang',
'ثيم XStore',
'HTML / CSS / JavaScript',
'تصنيفات مخصصة',
'تكامل WhatsApp'
],
demo: 'https://dxbkaraoke.com/shop/'
},
project6 : {
leftCornerColor: 'green-500',
Color: 'white',
cornerText: 'تطبيق Shopify',
cornerColor: 'green-500',
cornerIcon: 'shopify',
faClass: 'fab',
title: 'New G Solution – تكامل تطبيق Shopify',
image: 'assets/img/projects/ngs.png',
description:
'تطبيق Shopify معتمد رسميًا مدرج في Shopify App Store — يمثل علامة فارقة رئيسية لـ New G Solution ERP. يوفر التطبيق مزامنة في الوقت الفعلي للمنتجات والكميات والطلبات بين متاجر Shopify ونظام ERP السحابي، مما يساعد التجار على تبسيط العمليات متعددة القنوات بكفاءة.',
features: [
'نشر ومعتمد رسميًا على Shopify App Store بعد المراجعة التقنية والامتثال',
'تكامل متاجر Shopify مباشرة مع New G Solution ERP لمزامنة المنتج والمخزون والطلبات في الوقت الفعلي',
'يوفر تحكمًا موحدًا للكميات وSKU وMaster SKU وفئات المنتجات والتكلفة الديناميكية عبر قنوات البيع',
'يشمل خطط اشتراك متدرجة',
'تم تطويره باستخدام واجهة برمجة REST API وGraphQL الآمنة بين Shopify ونظام New G Solution ERP الخلفي'
],
technologies: [
'Shopify',  
'Shopify REST API',
'مزامنة سحابية',
'فئات المنتجات',
'SKU',
'Master SKU',
'خطط اشتراك متدرجة',
'Shopify GraphQL API',    
'PHP Yii Framework',
'MariaDB',
'مصادقة OAuth 2.0',
'واجهات برمجة RESTful',    
],
// github: 'https://github.com/anasabbasdev/newg-shopify-app',
demo: 'https://apps.shopify.com/newgsolutionerp'
},
project7 : {
leftCornerColor: 'gray-700',
cornerText: '',
cornerColor: 'gray-700',
cornerIcon: '',
faClass: '',
Color: 'gray-700',
title: 'DXB Media Agency – موقع مؤسسي (دبي)',
image: 'assets/img/projects/dxbagency.svg',
description:
'تطوير ونشر الموقع الرسمي لـ DXB Media Agency في دبي باستخدام WordPress مع ثيم مصمم بالكامل وهندسة مخصصة. يعرض الموقع محفظة الوكالة وخدماتها والمدونة ووظائف الاتصال، مما يوفر تجربة مستخدم ممتازة ويعكس الهوية الحديثة للعلامة التجارية.  التصميمات تمت بواسطة المصمم المبدع <a href="https://www.instagram.com/noor.aldeen93" target="_blank" class="text-green-400 hover:underline">نور الدين سلامة</a>.',
features: [
'تثبيت WordPress كامل وتخصيص الثيم من الصفر',
'تطوير أقسام الخدمات والمحفظة بما في ذلك معرض المشاريع الديناميكي',
'تصميم متجاوب محسّن وواجهة متعددة الأجهزة للعملاء الدوليين',
'تنفيذ وحدة المدونة وهيكل CMS للسماح بالتحديثات المستقبلية السهلة',
'إدارة أداء الموقع وإعداد الاستضافة والنسخ الاحتياطي وتأمين الأمان'
],
technologies: [
'WordPress',
'PHP',
'تطوير ثيم مخصص',
'HTML / CSS / JavaScript',
'تصميم متجاوب',
'تحسين الأداء'
],
demo: 'https://dxb-agency.com/'
}

,
project9 : {
leftCornerColor: 'white',
Color: 'white',
cornerText: '',
cornerColor: 'white',
cornerIcon: '',
faClass: '',
title: 'مطعم عنبر – قائمة رقمية تفاعلية (دبي)',
image: 'assets/img/projects/anbar.png',
description:
'تطوير موقع القائمة الرقمية الرسمي لمطعم عنبر في دبي باستخدام WordPress. تم تصميم الموقع خصيصًا للاستخدام على iPad داخل المطعم، مما يوفر واجهة سريعة وأنيقة وملائمة للمس تحاكي تجربة تطبيق أصلي.  التصميمات تمت بواسطة المصمم المبدع <a href="https://www.instagram.com/noor.aldeen93" target="_blank" class="text-green-400 hover:underline">نور الدين سلامة</a>.',
features: [
'تطوير WordPress مخصص مصمم لعرض القائمة الرقمية فقط (بدون سلة أو دفع)',
'تخطيط متجاوب محسّن لاستخدام iPad والجهاز اللوحي',
'تحميل صور عالي الأداء وتصفح قائمة على الفئات للأطباق',
'تصميم ثنائي اللغة نظيف يدعم عرض القائمة بالعربية والإنجليزية',
'التعامل مع تخصيص الثيم وإعدادات الإضافات والاستضافة والصيانة المستمرة'
],
technologies: [
'WordPress',
'PHP',
'HTML / CSS / JavaScript',
'ثيم مخصص',
'تصميم متجاوب',
'تحسين الأداء'
],
demo: 'https://anbar-rest.com'
},
project10 : {
leftCornerColor: 'gray-700',
cornerText: '',
cornerColor: 'gray-700',
cornerIcon: '',
faClass: '',
Color: 'gray-700',
title: 'مطعم كاسبر – قائمة ديناميكية ثنائية اللغة',
image: 'assets/img/projects/casper.png',
description:
'تطوير موقع قائمة رقمية ثنائي اللغة بالكامل لمطعم كاسبر باستخدام WordPress. تمكن المنصة أصحاب المطاعم من تحديث الأسعار والعناصر بسهولة عن طريق رفع ملفات Excel من لوحة التحكم الإدارية، مما يضمن إدارة قائمة بلا جهد وأسعار دقيقة في الوقت الفعلي.',
features: [
'تطوير WordPress مخصص مع واجهة عربية-إنجليزية ثنائية اللغة',
'ميزة استيراد Excel الآلية لتحديثات الأسعار والعناصر مباشرة من لوحة التحكم الإدارية',
'فئات قائمة ديناميكية مع ملاحة سلسة وتصميم متجاوب',
'تخطيط محسّن للأجهزة اللوحية والاستخدام داخل المطعم',
'تخصيص الثيم وتحسين الأداء وإعداد الاستضافة تم التعامل معها من البداية للنهاية'
],
technologies: [
'WordPress',
'PHP',
'تكامل استيراد Excel',
'HTML / CSS / JavaScript',
'تصميم متجاوب',
'دعم متعدد اللغات'
],
demo: 'https://caspersy.com'
},
project11 : {

cornerText: '',
title: 'الواقع المعزز لتدريب موظفي ERP',
image: 'assets/img/projects/ar-thesis.png',
description:
'مشروع بحث أكاديمي يشكل أطروحة الماجستير لإناس عباس، يستكشف كيف يمكن للواقع المعزز (AR) تحسين كفاءة التدريب لموظفي نظام ERP. يركز المشروع على وحدات تفاعلية وإرشاد مرئي ومحاكاة مهام مغمورة داخل بيئة New G Solution ERP.',
features: [
'بحث أكاديمي أجري في بيئة ERP حقيقية',
'نماذج أولية AR للتوظيف وتصور العمليات',
'تحسين الفهم ودقة المهام من خلال التفاعل ثلاثي الأبعاد',
'ربط البحث الأكاديمي بتطوير البرمجيات المؤسسية'
],
technologies: [
'الواقع المعزز (AR)',
'علوم الويب',
'أنظمة ERP',
'تصور ثلاثي الأبعاد'
]
}




 
};
// <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-6">
function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalContent').innerHTML = `
        
                
        
                <div class="relative bg-${project.Color} p-6 flex items-center justify-center object-contain rounded-lg mb-6 w-full h-64">
                <span class="absolute top-2 left-2 bg-${project.leftCornerColor} text-${project.Color} text-xs px-2 py-1 rounded">
                    ${project.cornerText}
                </span>
                <img src="${project.image}" alt="${project.title}" class=" object-contain h-64 p-7">
                <div class="absolute top-2 right-2 bg-${project.cornerColor} text-white p-2 rounded-full shadow-md">
                    <i class="${project.faClass} fa-${project.cornerIcon} text-lg"></i>
                </div>
                </div>
        <p class="text-gray-300 text-lg leading-relaxed mb-6">${project.description}</p>
        
        <div class="mb-6">
            <h4 class="text-xl font-bold mb-4">الميزات الرئيسية:</h4>
            <ul class="space-y-2 ">
                ${project.features.map(feature => `<li class="flex items-center space-x-2"><i class="fas fa-check text-green-400 mx-2"></i><span>${feature}</span></li>`).join('')}
            </ul>
        </div>
        
        <div class="mb-6">
            <h4 class="text-xl font-bold mb-4">التقنيات المستخدمة:</h4>
            <div class="flex flex-wrap gap-2">
                ${project.technologies.map(tech => `<span class="px-3 py-1 bg-green-400/20 text-green-400 rounded-full">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="flex space-x-4">
         
            <a href="${project.demo}" target="_blank" class="flex-1 bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center">
                <i class="fas fa-external-link-alt mr-2"></i>عرض مباشر
            </a>
        </div>
    `;
    
       // <a href="${project.github}" target="_blank" class="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center">
            //     <i class="fab fa-github mr-2"></i>عرض الكود
            // </a>
    document.getElementById('projectModal').classList.remove('hidden');
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.add('hidden');
}

// إغلاق النافذة عند النقر خارجها
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});
