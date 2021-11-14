// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, "google_tag_manager");
(function() {
    var data = {
        resource: {
            version: "95",

            macros: [
                { function: "__e" },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "analytics",
                },
                {
                    function: "__c",
                    vtp_value: "www.sgsgroup.us.com,www.sgs-algeria.com,www.sgs.co.ao,www.sgsgroup.com.ar,www.sgs.com.au,www.sgsgroup.at,www.sgsgroup.com.bd,www.sgs.be,www.sgsgroup.com.br,www.sgs.bg,www.sgs.ca,www.sgs.cl,www.sgsgroup.com.cn,www.sgs.co,www.sgsgroup.cz,www.sgs.com.eg,www.sgs.fi,www.sgsgroup.fr,www.sgsgroup.de,www.sgs-ghana.com,www.sgsgroup.com.hk,www.sgs.hu,www.sgsgroup.in,www.sgs.co.id,www.sgs.ie,ww.sgsgroup.it,www.sgsgroup.jp,www.sgs.co.ke,www.sgsgroup.kr,www.sgs.my,www.sgs.mx,www.sgs.co.mz,www.sgs.nl,www.sgs.co.nz,www.sgs.com.ng,www.sgsgroup.pk,www.sgs.pe,www.sgs.ph,www.sgs.pl,ww.sgs.pt,www.sgsgroup.ro,www.sgs.ru,www.sgs.rs,www.sgs.sg,www.sgs.co.za,www.sgs.es,www.sgs.com.tw,www.sgs.co.tz,www.sgs.co.th,www.sgs.com.tr,www.sgsgroup.com.ua,www.sgs.co.uk,www.sgs.vn,www.sgs-caspian.com,www.sgs-latam.com,www.sgs-me.com",
                },
                { function: "__e" },
                {
                    function: "__jsm",
                    vtp_javascript: [
                        "template",
                        '(function(){return"gtm.js"===', ["escape", ["macro", 3], 8, 16],
                        "?100:0})();",
                    ],
                },
                {
                    function: "__jsm",
                    vtp_javascript: [
                        "template",
                        '(function(){return function(g){var h=[{name:"EMAIL",regex:/[^\\/]{4}@(?!sgs\\.com)[^\\/]{4}/gi,group:""},{name:"SELF-EMAIL",regex:/[^\\/]{4}@(?=sgs\\.com)[^\\/]{4}/gi,group:""},{name:"TEL",regex:/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\\d\\+\\s][^\u0026\\/\\?]+/gi,group:"$1"},{name:"NAME",regex:/((firstname=)|(lastname=)|(surname=))[^\u0026\\/\\?]+/gi,group:"$1"},{name:"PASSWORD",regex:/((password=)|(passwd=)|(pass=))[^\u0026\\/\\?]+/gi,group:"$1"},{name:"ZIP",regex:/((postcode=)|(zipcode=)|(zip=))[^\u0026\\/\\?]+/gi,group:"$1"}],\nk=g.get("sendHitTask"),a,b,c,d;g.set("sendHitTask",function(e){b=e.get("hitPayload").split("\\x26");for(a=0;a\u003Cb.length;a++)c=b[a].split("\\x3d"),d=decodeURIComponent(decodeURI(c[1])),h.forEach(function(f){d=d.replace(f.regex,f.group+"[REDACTED "+f.name+"]")}),c[1]=encodeURIComponent(d),b[a]=c.join("\\x3d");e.set("hitPayload",b.join("\\x26"),!0);k(e)})}})();',
                    ],
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "searchCategory",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "searchTerm",
                },
                {
                    function: "__jsm",
                    vtp_javascript: [
                        "template",
                        "(function(){return void 0!=", ["escape", ["macro", 6], 8, 16],
                        "\u0026\u0026void 0!=", ["escape", ["macro", 7], 8, 16],
                        '?document.location.pathname+"?searchterm\\x3d"+', ["escape", ["macro", 7], 8, 16],
                        '+"\\x26searchcategory\\x3d"+', ["escape", ["macro", 6], 8, 16],
                        ":document.location.pathname+document.location.search})();",
                    ],
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "pageCategory",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "servicesCategory",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "companyCategory",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "resourceCategory",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "pageTemplate",
                },
                {
                    function: "__d",
                    vtp_elementSelector: 'meta[name="Publication.Name"]',
                    vtp_attributeName: "content",
                    vtp_selectorType: "CSS",
                },
                {
                    function: "__d",
                    vtp_elementSelector: 'meta[name="DC.Date.Published"]',
                    vtp_attributeName: "content",
                    vtp_selectorType: "CSS",
                },
                { function: "__k", vtp_decodeCookie: false, vtp_name: "_ga" },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "language",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "websiteCountry",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formType",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formLocation",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formLanguage",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formClient",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formAlert",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formNewsletter",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formInquiryType",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formSectorType",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formFieldError",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formFieldErrorMessage",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "searchResults",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "pageNumber",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "siteSearchFilterCategory",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "filterByProgram",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "filterByLocation",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "filterByCustomer",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "filterByDate",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "filterByTopic",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "filterByType",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "documentName",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "documentType",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "eventName",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "eventStartDate",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "eventEndDate",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "pageError",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "sgsPhoneNumber",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "annualReportVersion",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "annualReportSection",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formQueryType",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formWhoAreYou",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "internalCampaignName",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formCountry",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formRegion",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formStateProvince",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formCity",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formPostalCode",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "formCompanyRevenue",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "documentPageLocation",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "newsTopic",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "newsType",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "newsDate",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "eventTopic",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "eventType",
                },
                {
                    function: "__u",
                    vtp_component: "URL",
                    vtp_enableMultiQueryKeys: false,
                    vtp_enableIgnoreEmptyQueryParam: false,
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "division",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "subDivision",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "socialPlatform",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "socialLinkLocation",
                },
                {
                    function: "__jsm",
                    vtp_javascript: [
                        "template",
                        "(function(){return document.querySelectorAll('[name\\x3d\"fullURL\"]')[0].defaultValue})();",
                    ],
                },
                {
                    function: "__gas",
                    vtp_cookieDomain: "auto",
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_fieldsToSet: [
                        "list", ["map", "fieldName", "customTask", "value", ["macro", 5]],
                        ["map", "fieldName", "allowLinker", "value", "true"],
                        ["map", "fieldName", "anonymizeIp", "value", "true"],
                        ["map", "fieldName", "page", "value", ["macro", 8]],
                    ],
                    vtp_useHashAutoLink: false,
                    vtp_contentGroup: [
                        "list", ["map", "index", "1", "group", ["macro", 9]],
                        ["map", "index", "2", "group", ["macro", 10]],
                        ["map", "index", "3", "group", ["macro", 11]],
                        ["map", "index", "4", "group", ["macro", 12]],
                        ["map", "index", "5", "group", ["macro", 13]],
                    ],
                    vtp_decorateFormsAutoLink: false,
                    vtp_enableLinkId: false,
                    vtp_dimension: [
                        "list", ["map", "index", "1", "dimension", ["macro", 14]],
                        ["map", "index", "2", "dimension", ["macro", 15]],
                        ["map", "index", "3", "dimension", ["macro", 16]],
                        ["map", "index", "4", "dimension", ["macro", 17]],
                        ["map", "index", "5", "dimension", ["macro", 18]],
                        ["map", "index", "6", "dimension", ["macro", 19]],
                        ["map", "index", "7", "dimension", ["macro", 20]],
                        ["map", "index", "8", "dimension", ["macro", 21]],
                        ["map", "index", "9", "dimension", ["macro", 22]],
                        ["map", "index", "10", "dimension", ["macro", 23]],
                        ["map", "index", "11", "dimension", ["macro", 24]],
                        ["map", "index", "12", "dimension", ["macro", 25]],
                        ["map", "index", "13", "dimension", ["macro", 26]],
                        ["map", "index", "14", "dimension", ["macro", 27]],
                        ["map", "index", "15", "dimension", ["macro", 28]],
                        ["map", "index", "16", "dimension", ["macro", 29]],
                        ["map", "index", "17", "dimension", ["macro", 30]],
                        ["map", "index", "18", "dimension", ["macro", 31]],
                        ["map", "index", "19", "dimension", ["macro", 32]],
                        ["map", "index", "20", "dimension", ["macro", 33]],
                        ["map", "index", "21", "dimension", ["macro", 34]],
                        ["map", "index", "22", "dimension", ["macro", 35]],
                        ["map", "index", "23", "dimension", ["macro", 36]],
                        ["map", "index", "24", "dimension", ["macro", 37]],
                        ["map", "index", "25", "dimension", ["macro", 38]],
                        ["map", "index", "26", "dimension", ["macro", 39]],
                        ["map", "index", "27", "dimension", ["macro", 40]],
                        ["map", "index", "28", "dimension", ["macro", 41]],
                        ["map", "index", "29", "dimension", ["macro", 42]],
                        ["map", "index", "30", "dimension", ["macro", 43]],
                        ["map", "index", "31", "dimension", ["macro", 44]],
                        ["map", "index", "32", "dimension", ["macro", 45]],
                        ["map", "index", "33", "dimension", ["macro", 46]],
                        ["map", "index", "34", "dimension", ["macro", 47]],
                        ["map", "index", "35", "dimension", ["macro", 48]],
                        ["map", "index", "36", "dimension", ["macro", 49]],
                        ["map", "index", "37", "dimension", ["macro", 13]],
                        ["map", "index", "38", "dimension", ["macro", 50]],
                        ["map", "index", "39", "dimension", ["macro", 51]],
                        ["map", "index", "40", "dimension", ["macro", 52]],
                        ["map", "index", "41", "dimension", ["macro", 53]],
                        ["map", "index", "42", "dimension", ["macro", 54]],
                        ["map", "index", "43", "dimension", ["macro", 55]],
                        ["map", "index", "44", "dimension", ["macro", 56]],
                        ["map", "index", "45", "dimension", ["macro", 57]],
                        ["map", "index", "46", "dimension", ["macro", 58]],
                        ["map", "index", "47", "dimension", ["macro", 59]],
                        ["map", "index", "48", "dimension", ["macro", 60]],
                        ["map", "index", "49", "dimension", ["macro", 61]],
                        ["map", "index", "50", "dimension", ["macro", 62]],
                        ["map", "index", "51", "dimension", ["macro", 63]],
                        ["map", "index", "52", "dimension", ["macro", 64]],
                        ["map", "index", "53", "dimension", ["macro", 65]],
                        ["map", "index", "54", "dimension", ["macro", 66]],
                        ["map", "index", "55", "dimension", ["macro", 63]],
                        ["map", "index", "56", "dimension", ["macro", 67]],
                    ],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: "UA-182662119-2",
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableGA4Schema: false,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.triggers",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: true,
                    vtp_defaultValue: "",
                },
                {
                    function: "__v",
                    vtp_name: "gtm.videoTitle",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.videoPercent",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.scrollThreshold",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__aev", vtp_varType: "TEXT" },
                {
                    function: "__v",
                    vtp_name: "gtm.elementUrl",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "sgsPhoneNumberPageLocation",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "companyName",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "tradeName",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "modelNumber",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "certificateNumber",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "certificationId",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "divisionRedirect",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "subDivisionRedirect",
                },
                {
                    function: "__u",
                    vtp_component: "HOST",
                    vtp_enableMultiQueryKeys: false,
                    vtp_enableIgnoreEmptyQueryParam: false,
                },
                {
                    function: "__jsm",
                    vtp_javascript: [
                        "template",
                        "(function(){var a=", ["escape", ["macro", 74], 8, 16],
                        ",b=/", ["escape", ["macro", 83], 7],
                        "/;return a=b.test(a)})();",
                    ],
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "googleadwordsconversion",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "googleadwordsremarketing",
                },
                { function: "__k", vtp_decodeCookie: false, vtp_name: "tarteaucitron" },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "sgsexacttarget",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "facebookpixel",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "sgshotjar",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "linkedin",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "twitter",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "bingads",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "carouselAction",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "carouselBanner",
                },
                {
                    function: "__u",
                    vtp_component: "PATH",
                    vtp_enableMultiQueryKeys: false,
                    vtp_enableIgnoreEmptyQueryParam: false,
                },
                { function: "__f", vtp_component: "URL" },
                { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
                {
                    function: "__v",
                    vtp_name: "gtm.elementClasses",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
                {
                    function: "__v",
                    vtp_name: "gtm.elementTarget",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
                {
                    function: "__v",
                    vtp_name: "gtm.elementClasses",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
                {
                    function: "__v",
                    vtp_name: "gtm.elementTarget",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.elementUrl",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__aev", vtp_varType: "TEXT" },
                {
                    function: "__v",
                    vtp_name: "gtm.videoProvider",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 },
                {
                    function: "__v",
                    vtp_name: "gtm.videoDuration",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.videoVisible",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.videoStatus",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.videoCurrentTime",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.scrollUnits",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.scrollDirection",
                    vtp_dataLayerVersion: 1,
                },
            ],
            tags: [{
                    function: "__gclidw",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_enableCrossDomain: true,
                    vtp_enableUrlPassthrough: false,
                    vtp_acceptIncoming: true,
                    vtp_linkerDomains: ["macro", 2],
                    vtp_formDecoration: false,
                    vtp_urlPosition: "query",
                    vtp_enableCookieOverrides: false,
                    vtp_enableCrossDomainFeature: true,
                    vtp_enableCookieFlagsFeature: true,
                    tag_id: 9,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_overrideGaSettings: true,
                    vtp_fieldsToSet: [
                        "list", ["map", "fieldName", "siteSpeedSampleRate", "value", ["macro", 4]],
                    ],
                    vtp_trackType: "TRACK_PAGEVIEW",
                    vtp_gaSettings: ["macro", 68],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 73,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    setup_tags: ["list", ["tag", 1, 0]],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Form",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: [
                        "list", ["map", "index", "2", "metric", "1"],
                        ["map", "index", "8", "metric", "1"],
                    ],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Form Completed",
                    vtp_eventLabel: ["macro", 19],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 138,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    setup_tags: ["list", ["tag", 1, 0]],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Form",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: [
                        "list", ["map", "index", "1", "metric", "1"],
                        ["map", "index", "8", "metric", "1"],
                    ],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Form Completed",
                    vtp_eventLabel: ["macro", 19],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 140,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    setup_tags: ["list", ["tag", 1, 0]],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Form",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: [
                        "list", ["map", "index", "7", "metric", "1"],
                        ["map", "index", "8", "metric", "1"],
                    ],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Form Completed",
                    vtp_eventLabel: ["macro", 19],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 142,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    setup_tags: ["list", ["tag", 1, 0]],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Form",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: [
                        "list", ["map", "index", "3", "metric", "1"],
                        ["map", "index", "8", "metric", "1"],
                    ],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Form Completed",
                    vtp_eventLabel: ["macro", 19],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 144,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    setup_tags: ["list", ["tag", 1, 0]],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Form",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: [
                        "list", ["map", "index", "5", "metric", "1"],
                        ["map", "index", "8", "metric", "1"],
                    ],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Form Completed",
                    vtp_eventLabel: ["macro", 19],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 146,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Form",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: [
                        "list", ["map", "index", "6", "metric", "1"],
                        ["map", "index", "8", "metric", "1"],
                    ],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Form Completed",
                    vtp_eventLabel: ["macro", 19],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 150,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Form",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: [
                        "list", ["map", "index", "4", "metric", "1"],
                        ["map", "index", "8", "metric", "1"],
                    ],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Form Completed",
                    vtp_eventLabel: ["macro", 19],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 152,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "chatbot",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: ["list", ["map", "index", "12", "metric", "1"]],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "trigger",
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 155,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "chatbot",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: ["list", ["map", "index", "11", "metric", "1"]],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "discussion",
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 157,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "chatbot",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: ["list", ["map", "index", "10", "metric", "1"]],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "lead",
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 159,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "Video Player",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 70],
                    vtp_eventLabel: ["macro", 71],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 161,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "Scroll",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 72],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 162,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "All Links",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 62],
                    vtp_eventLabel: ["template", ["macro", 73], " - ", ["macro", 74]],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 164,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "Learning.sgs.com Links",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 62],
                    vtp_eventLabel: ["macro", 74],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 166,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "Form Errors",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 19],
                    vtp_eventLabel: ["template", ["macro", 27], " | ", ["macro", 28]],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 254,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Document Download",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: ["list", ["map", "index", "13", "metric", "1"]],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 39],
                    vtp_eventLabel: ["macro", 38],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 256,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "Events Interactions",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Registration",
                    vtp_eventLabel: ["macro", 40],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 259,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Events Interactions",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: ["list", ["map", "index", "15", "metric", "1"]],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Add To Calendar",
                    vtp_eventLabel: ["macro", 40],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 261,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Phone Number Clicks",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: ["list", ["map", "index", "14", "metric", "1"]],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 75],
                    vtp_eventLabel: ["macro", 44],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 263,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: true,
                    vtp_eventCategory: "Social Links Clicks",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_metric: ["list", ["map", "index", "16", "metric", "1"]],
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 66],
                    vtp_eventLabel: ["macro", 65],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 265,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "Certified Component Search",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 76],
                    vtp_eventLabel: [
                        "template", ["macro", 77],
                        " | ", ["macro", 78],
                        " | ", ["macro", 79],
                    ],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 267,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "Directory Search",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 76],
                    vtp_eventLabel: ["macro", 80],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 269,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "News Clicks",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 81],
                    vtp_eventLabel: ["macro", 82],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 271,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "News and Events Clicks",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: ["macro", 81],
                    vtp_eventLabel: ["macro", 82],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 273,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_overrideGaSettings: false,
                    vtp_trackType: "DECORATE_LINK",
                    vtp_gaSettings: ["macro", 68],
                    vtp_useHashDecorateLink: false,
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsDecorateLink: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 285,
                },
                {
                    function: "__ua",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_nonInteraction: true,
                    vtp_overrideGaSettings: false,
                    vtp_eventCategory: "Site Search",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_gaSettings: ["macro", 68],
                    vtp_eventAction: "Search Results Available",
                    vtp_eventLabel: ["macro", 7],
                    vtp_enableRecaptchaOption: false,
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    vtp_enableGA4Schema: false,
                    tag_id: 299,
                },
                {
                    function: "__gaawc",
                    metadata: ["map"],
                    once_per_event: true,
                    vtp_sendPageView: true,
                    vtp_enableSendToServerContainer: false,
                    vtp_measurementId: "G-LMRQWXRPN0",
                    vtp_enableUserProperties: true,
                    vtp_enableMoreSettings: true,
                    vtp_enableEuid: false,
                    tag_id: 305,
                },
                {
                    function: "__zone",
                    once_per_event: true,
                    vtp_childContainers: [
                        "list", ["map", "publicId", "GTM-MK9VX9", "nickname", ""],
                    ],
                    vtp_boundaries: [
                        "list", ["zb", "_eq", ["macro", 83], "www.sgsgroup.com.cn", false, false],
                    ],
                    vtp_enableTypeRestrictions: false,
                    vtp_enableConfiguration: false,
                    tag_id: 306,
                },
                {
                    function: "__zone",
                    once_per_event: true,
                    vtp_childContainers: [
                        "list", ["map", "publicId", "GTM-5HP7S45", "nickname", ""],
                    ],
                    vtp_boundaries: [
                        "list", ["zb", "_eq", ["macro", 83], "campaigns.sgs.com", false, false],
                    ],
                    vtp_enableTypeRestrictions: false,
                    vtp_enableConfiguration: false,
                    tag_id: 307,
                },
                {
                    function: "__zone",
                    once_per_event: true,
                    vtp_childContainers: [
                        "list", ["map", "publicId", "GTM-KP6D49C", "nickname", ""],
                    ],
                    vtp_boundaries: ["list"],
                    vtp_enableTypeRestrictions: false,
                    vtp_enableConfiguration: false,
                    tag_id: 308,
                },
                {
                    function: "__sdl",
                    vtp_verticalThresholdUnits: "PERCENT",
                    vtp_verticalThresholdsPercent: "25,50,75,100",
                    vtp_verticalThresholdOn: true,
                    vtp_triggerStartOption: "WINDOW_LOAD",
                    vtp_horizontalThresholdOn: false,
                    vtp_uniqueTriggerId: "10536470_12",
                    vtp_enableTriggerStartOption: true,
                    tag_id: 309,
                },
                {
                    function: "__ytl",
                    vtp_captureComplete: true,
                    vtp_captureStart: true,
                    vtp_fixMissingApi: true,
                    vtp_triggerStartOption: "DOM_READY",
                    vtp_capturePause: true,
                    vtp_captureProgress: false,
                    vtp_uniqueTriggerId: "10536470_13",
                    vtp_enableTriggerStartOption: true,
                    tag_id: 310,
                },
                { function: "__cl", tag_id: 311 },
                {
                    function: "__lcl",
                    vtp_waitForTags: false,
                    vtp_checkValidation: false,
                    vtp_waitForTagsTimeout: "2000",
                    vtp_uniqueTriggerId: "10536470_46",
                    tag_id: 312,
                },
                { function: "__cl", tag_id: 313 },
                { function: "__cl", tag_id: 314 },
                { function: "__cl", tag_id: 315 },
                {
                    function: "__ytl",
                    vtp_progressThresholdsPercent: "25, 50, 75",
                    vtp_captureComplete: true,
                    vtp_captureStart: true,
                    vtp_fixMissingApi: false,
                    vtp_triggerStartOption: "DOM_READY",
                    vtp_radioButtonGroup1: "PERCENTAGE",
                    vtp_capturePause: false,
                    vtp_captureProgress: true,
                    vtp_uniqueTriggerId: "10536470_160",
                    vtp_enableTriggerStartOption: true,
                    tag_id: 316,
                },
                {
                    function: "__lcl",
                    vtp_waitForTags: false,
                    vtp_checkValidation: false,
                    vtp_waitForTagsTimeout: "2000",
                    vtp_uniqueTriggerId: "10536470_163",
                    tag_id: 317,
                },
                {
                    function: "__lcl",
                    vtp_waitForTags: false,
                    vtp_checkValidation: false,
                    vtp_waitForTagsTimeout: "2000",
                    vtp_uniqueTriggerId: "10536470_165",
                    tag_id: 318,
                },
                {
                    function: "__lcl",
                    vtp_waitForTags: false,
                    vtp_checkValidation: false,
                    vtp_waitForTagsTimeout: "2000",
                    vtp_uniqueTriggerId: "10536470_284",
                    tag_id: 319,
                },
                {
                    function: "__lcl",
                    vtp_waitForTags: false,
                    vtp_checkValidation: false,
                    vtp_waitForTagsTimeout: "2000",
                    vtp_uniqueTriggerId: "10536470_291",
                    tag_id: 320,
                },
            ],
            predicates: [
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
                { function: "_eq", arg0: ["macro", 1], arg1: "true" },
                { function: "_eq", arg0: ["macro", 0], arg1: "virtualPageview" },
                { function: "_eq", arg0: ["macro", 0], arg1: "cookie-setting-ready" },
                { function: "_re", arg0: ["macro", 0], arg1: ".*" },
                { function: "_cn", arg0: ["macro", 62], arg1: "thank-you" },
                { function: "_eq", arg0: ["macro", 19], arg1: "contact form" },
                { function: "_eq", arg0: ["macro", 19], arg1: "e-subscription" },
                { function: "_cn", arg0: ["macro", 62], arg1: "confirmation" },
                {
                    function: "_cn",
                    arg0: ["macro", 19],
                    arg1: "Campaign Integrated Form",
                },
                { function: "_eq", arg0: ["macro", 19], arg1: "event registration" },
                { function: "_eq", arg0: ["macro", 19], arg1: "white paper" },
                { function: "_eq", arg0: ["macro", 19], arg1: "privacy request form" },
                { function: "_eq", arg0: ["macro", 19], arg1: "verify sgs document" },
                { function: "_eq", arg0: ["macro", 0], arg1: "TRIGGER" },
                { function: "_eq", arg0: ["macro", 0], arg1: "DISCUSSION" },
                { function: "_eq", arg0: ["macro", 0], arg1: "LEAD" },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.video" },
                {
                    function: "_re",
                    arg0: ["macro", 69],
                    arg1: "(^$|((^|,)10536470_160($|,)))",
                },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.scrollDepth" },
                {
                    function: "_re",
                    arg0: ["macro", 69],
                    arg1: "(^$|((^|,)10536470_12($|,)))",
                },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
                {
                    function: "_re",
                    arg0: ["macro", 69],
                    arg1: "(^$|((^|,)10536470_163($|,)))",
                },
                {
                    function: "_sw",
                    arg0: ["macro", 74],
                    arg1: "https://learning.sgs.com",
                },
                {
                    function: "_re",
                    arg0: ["macro", 69],
                    arg1: "(^$|((^|,)10536470_165($|,)))",
                },
                { function: "_eq", arg0: ["macro", 0], arg1: "formError" },
                { function: "_eq", arg0: ["macro", 0], arg1: "documentDownload" },
                { function: "_eq", arg0: ["macro", 0], arg1: "eventRegistration" },
                { function: "_eq", arg0: ["macro", 0], arg1: "eventAddedToCalendar" },
                { function: "_eq", arg0: ["macro", 0], arg1: "phoneNumberClicked" },
                { function: "_eq", arg0: ["macro", 0], arg1: "socialLinkInteraction" },
                {
                    function: "_eq",
                    arg0: ["macro", 0],
                    arg1: "certifiedComponentSearch",
                },
                { function: "_eq", arg0: ["macro", 0], arg1: "searchDirectory" },
                { function: "_eq", arg0: ["macro", 0], arg1: "newsClick" },
                { function: "_eq", arg0: ["macro", 0], arg1: "newsAndEventsClick" },
                {
                    function: "_re",
                    arg0: ["macro", 74],
                    arg1: "sgs.com|sgsgroup.us.com|sgs-algeria.com|sgs.co.ao|sgsgroup.com.ar|sgs.com.au|sgsgroup.at|sgsgroup.com.bd|sgs.be|sgs.ca|sgs.cl|sgsgroup.com.cn|sgs.co|sgsgroup.cz|sgs.com.eg|sgs.fi|sgsgroup.fr|sgsgroup.de|sgs-ghana.com|sgsgroup.com.hk|sgs.hu|sgsgroup.in|sgs.co.id|sgs.ie|sgsgroup.it|sgsgroup.jp|sgs.co.ke|sgsgroup.kr|sgs.my|sgs.mx|sgs.co.mz|sgs.nl|sgs.co.nz|sgs.com.ng|sgsgroup.pk|sgs.pe|sgs.ph|sgs.pl|sgs.pt|sgsgroup.ro|sgs.ru|sgs.rs|sgs.sg|sgs.co.za|sgs.es|sgs.com.tw|sgs.co.tz|sgs.co.th|sgs.com.tr|sgsgroup.com.ua|sgs.co.uk|sgs.vn|sgs-caspian.com|sgs-latam.com|sgs-me.com|smartrecruiters.com|on24.com|sgsclinicaltrials.com|digicomply.com",
                },
                { function: "_eq", arg0: ["macro", 84], arg1: "false" },
                {
                    function: "_re",
                    arg0: ["macro", 69],
                    arg1: "(^$|((^|,)10536470_284($|,)))",
                },
                {
                    function: "_sw",
                    arg0: ["macro", 74],
                    arg1: "https://emicsuk.sgs.com",
                },
                {
                    function: "_re",
                    arg0: ["macro", 69],
                    arg1: "(^$|((^|,)10536470_291($|,)))",
                },
                { function: "_eq", arg0: ["macro", 0], arg1: "searchResultsAvailable" },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.load" },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
            ],
            rules: [
                [
                    ["if", 0],
                    ["add", 0, 1, 28, 29, 30, 31, 34, 35, 36, 37, 38, 40, 41, 42, 43],
                ],
                [
                    ["if", 2],
                    ["add", 1],
                ],
                [
                    ["if", 3],
                    ["add", 1, 28],
                ],
                [
                    ["if", 0, 5, 6],
                    ["add", 2],
                ],
                [
                    ["if", 0, 7, 8],
                    ["add", 3],
                ],
                [
                    ["if", 0, 9],
                    ["add", 4],
                ],
                [
                    ["if", 0, 10],
                    ["add", 5],
                ],
                [
                    ["if", 0, 8, 11],
                    ["add", 6],
                ],
                [
                    ["if", 0, 12],
                    ["add", 7],
                ],
                [
                    ["if", 0, 13],
                    ["add", 8],
                ],
                [
                    ["if", 14],
                    ["add", 9],
                ],
                [
                    ["if", 15],
                    ["add", 10],
                ],
                [
                    ["if", 16],
                    ["add", 11],
                ],
                [
                    ["if", 17, 18],
                    ["add", 12],
                ],
                [
                    ["if", 19, 20],
                    ["add", 13],
                ],
                [
                    ["if", 21, 22],
                    ["add", 14],
                ],
                [
                    ["if", 21, 23, 24],
                    ["add", 15],
                ],
                [
                    ["if", 25],
                    ["add", 16],
                ],
                [
                    ["if", 26],
                    ["add", 17],
                ],
                [
                    ["if", 27],
                    ["add", 18],
                ],
                [
                    ["if", 28],
                    ["add", 19],
                ],
                [
                    ["if", 29],
                    ["add", 20],
                ],
                [
                    ["if", 30],
                    ["add", 21],
                ],
                [
                    ["if", 31],
                    ["add", 22],
                ],
                [
                    ["if", 32],
                    ["add", 23],
                ],
                [
                    ["if", 33],
                    ["add", 24],
                ],
                [
                    ["if", 34],
                    ["add", 25],
                ],
                [
                    ["if", 21, 35, 36, 37],
                    ["add", 26],
                ],
                [
                    ["if", 40],
                    ["add", 27],
                ],
                [
                    ["if", 41],
                    ["add", 32],
                ],
                [
                    ["if", 42],
                    ["add", 33, 39],
                ],
                [
                    ["if", 0],
                    ["unless", 1],
                    ["block", 0, 1, 2, 3, 4, 5, 6, 7, 8, 28],
                ],
                [
                    ["if", 4],
                    ["unless", 1],
                    [
                        "block",
                        1,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                    ],
                ],
                [
                    ["if", 21, 38, 39],
                    ["block", 26],
                ],
            ],
        },
        runtime: [],
    };

    /*

       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
      */
    var h,
        aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
        },
        ba =
        "function" == typeof Object.create ?
        Object.create :
        function(a) {
            var b = function() {};
            b.prototype = a;
            return new b();
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = { a: !0 },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a;
            } catch (a) {}
            ha = !1;
        }
        ea = ha ?

            function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a;
            } :
            null;
    }
    var la = ea,
        ma = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d);
                        } else a[c] = b[c];
            a.Mj = b.prototype;
        },
        na = this || self,
        qa = function(a) {
            return a;
        };
    var ra = function() {},
        sa = function(a) {
            return "function" == typeof a;
        },
        ta = function(a) {
            return "string" == typeof a;
        },
        ua = function(a) {
            return "number" == typeof a && !isNaN(a);
        },
        wa = Array.isArray,
        xa = function(a, b) {
            if (a && wa(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c];
        },
        ya = function(a, b) {
            if (!ua(a) || !ua(b) || a > b)(a = 0), (b = 2147483647);
            return Math.floor(Math.random() * (b - a + 1) + a);
        },
        Aa = function(a, b) {
            for (var c = new za(), d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1;
        },
        Ba = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
        },
        Da = function(a) {
            return (!!a &&
                ("[object Arguments]" == Object.prototype.toString.call(a) ||
                    Object.prototype.hasOwnProperty.call(a, "callee"))
            );
        },
        Ea = function(a) {
            return Math.round(Number(a)) || 0;
        },
        Ha = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a;
        },
        Ja = function(a) {
            var b = [];
            if (wa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b;
        },
        Na = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : "";
        },
        Oa = function() {
            return new Date(Date.now());
        },
        m = function() {
            return Oa().getTime();
        },
        za = function() {
            this.prefix = "gtm.";
            this.values = {};
        };
    za.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b;
    };
    za.prototype.get = function(a) {
        return this.values[this.prefix + a];
    };
    var Pa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c;
        },
        Ra = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c();
                    } catch (d) {}
                }
            };
        },
        Sa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        },
        Ua = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1;
        },
        Va = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c;
        },
        Wa = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
                d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c;
        },
        Ya = /^\w{1,9}$/,
        Za = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Ba(a, function(d, e) {
                Ya.test(d) && e && c.push(d);
            });
            return c.join(b);
        };
    var $a,
        ab = function() {
            if (void 0 === $a) {
                var a = null,
                    b = na.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: qa,
                            createScript: qa,
                            createScriptURL: qa,
                        });
                    } catch (c) {
                        na.console && na.console.error(c.message);
                    }
                    $a = a;
                } else $a = a;
            }
            return $a;
        };
    var cb = function(a, b) {
        this.m = b === bb ? a : "";
    };
    cb.prototype.toString = function() {
        return this.m + "";
    };
    var bb = {},
        db = function(a) {
            var b = ab(),
                c = b ? b.createScriptURL(a) : a;
            return new cb(c, bb);
        };
    var eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var fb;
    a: {
        var gb = na.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                fb = hb;
                break a;
            }
        }
        fb = "";
    }

    function ib(a) {
        return -1 != fb.indexOf(a);
    }
    var kb = {},
        lb = function(a, b, c) {
            this.m = c === kb ? a : "";
        };
    lb.prototype.toString = function() {
        return this.m.toString();
    };
    var mb = function(a) {
            return a instanceof lb && a.constructor === lb ?
                a.m :
                "type_error:SafeHtml";
        },
        nb = function(a) {
            var b = ab(),
                c = b ? b.createHTML(a) : a;
            return new lb(c, null, kb);
        },
        ob = new lb((na.trustedTypes && na.trustedTypes.emptyHTML) || "", 0, kb);
    /*

       SPDX-License-Identifier: Apache-2.0
      */
    function rb(a, b) {
        a.src =
            b instanceof cb && b.constructor === cb ?
            b.m :
            "type_error:TrustedResourceUrl";
        var c,
            d,
            e = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document,
            f =
            null === (d = e.querySelector) || void 0 === d ?
            void 0 :
            d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") &&
        a.setAttribute("nonce", c);
    }
    var sb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c();
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d;
        },
        tb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c();
                }
            };
        };
    var ub = (function(a) {
        var b = !1,
            c;
        return function() {
            b || ((c = a()), (b = !0));
            return c;
        };
    })(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = mb(ob);
        return !c.parentElement;
    });
    var B = window,
        G = document,
        vb = navigator,
        wb = G.currentScript && G.currentScript.src,
        xb = function(a, b) {
            var c = B[a];
            B[a] = void 0 === c ? b : c;
            return B[a];
        },
        yb = function(a) {
            var b = G.getElementsByTagName("script")[0] || G.body || G.head;
            b.parentNode.insertBefore(a, b);
        },
        Ab = function(a, b) {
            b &&
                (a.addEventListener ?
                    (a.onload = b) :
                    (a.onreadystatechange = function() {
                        a.readyState in { loaded: 1, complete: 1 } &&
                            ((a.onreadystatechange = null), b());
                    }));
        },
        Bb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        Cb = function(a, b, c, d) {
            var e = G.createElement("script");
            d &&
                Ba(d, function(f, g) {
                    f = f.toLowerCase();
                    Bb.hasOwnProperty(f) || e.setAttribute(f, g);
                });
            e.type = "text/javascript";
            e.async = !0;
            rb(e, db(a));
            Ab(e, b);
            c && (e.onerror = c);
            yb(e);
            return e;
        },
        Db = function() {
            if (wb) {
                var a = wb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3;
            }
            return 1;
        },
        Eb = function(a, b) {
            var c = G.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = (G.body && G.body.lastChild) || G.body || G.head;
            d.parentNode.insertBefore(c, d);
            Ab(c, b);
            void 0 !== a && (c.src = a);
            return c;
        },
        Fb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b();
            };
            d.onerror = function() {
                d.onerror = null;
                c && c();
            };
            d.src = a;
            return d;
        },
        Gb = function(a, b, c, d) {
            a.addEventListener ?
                a.addEventListener(b, c, !!d) :
                a.attachEvent && a.attachEvent("on" + b, c);
        },
        Hb = function(a, b, c) {
            a.removeEventListener ?
                a.removeEventListener(b, c, !1) :
                a.detachEvent && a.detachEvent("on" + b, c);
        },
        H = function(a) {
            B.setTimeout(a, 0);
        },
        Ib = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ?
                a.attributes[b].value :
                null;
        },
        Jb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b;
        },
        Kb = function(a) {
            var b = G.createElement("div"),
                c = nb("A<div>" + a + "</div>"),
                d = b;
            if (ub())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = mb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e;
        },
        Lb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement;
            }
            return null;
        },
        Mb = function(a) {
            var b;
            try {
                b = vb.sendBeacon && vb.sendBeacon(a);
            } catch (c) {}
            b || Fb(a);
        },
        Nb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c;
        },
        Ob = function(a) {
            var b = G.featurePolicy;
            return b && sa(b.allowsFeature) ? b.allowsFeature(a) : !1;
        },
        Rb = function() {
            return vb.userLanguage || vb.language;
        };
    /*
       jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Sb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Tb = function(a) {
            if (null == a) return String(a);
            var b = Sb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object";
        },
        Ub = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b);
        },
        Vb = function(a) {
            if (!a || "object" != Tb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (
                    a.constructor &&
                    !Ub(a, "constructor") &&
                    !Ub(a.constructor.prototype, "isPrototypeOf")
                )
                    return !1;
            } catch (c) {
                return !1;
            }
            for (var b in a);
            return void 0 === b || Ub(a, b);
        },
        O = function(a, b) {
            var c = b || ("array" == Tb(a) ? [] : {}),
                d;
            for (d in a)
                if (Ub(a, d)) {
                    var e = a[d];
                    "array" == Tb(e) ?
                        ("array" != Tb(c[d]) && (c[d] = []), (c[d] = O(e, c[d]))) :
                        Vb(e) ?
                        (Vb(c[d]) || (c[d] = {}), (c[d] = O(e, c[d]))) :
                        (c[d] = e);
                }
            return c;
        };
    var Wb = function(a) {
        if (void 0 === a || wa(a) || Vb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0;
        }
        return !1;
    };
    var Xb = (function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b;
                },
            };
        };
        return {
            Xg: a("consent"),
            Yg: a("consent_always_fire"),
            $e: a("convert_case_to"),
            af: a("convert_false_to"),
            bf: a("convert_null_to"),
            cf: a("convert_true_to"),
            df: a("convert_undefined_to"),
            vj: a("debug_mode_metadata"),
            wj: a("event_data_overrides"),
            sb: a("function"),
            Ih: a("instance_name"),
            Mh: a("live_only"),
            Nh: a("malware_disabled"),
            Oh: a("metadata"),
            zj: a("original_activity_id"),
            Aj: a("original_vendor_template_id"),
            Sh: a("once_per_event"),
            Lf: a("once_per_load"),
            Cj: a("priority_override"),
            Dj: a("respected_consent_types"),
            Pf: a("setup_tags"),
            Qf: a("tag_id"),
            Rf: a("teardown_tags"),
        };
    })();
    var Yb = [],
        Zb = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;",
        },
        $b = function(a) {
            return Zb[a];
        },
        ac = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var fc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        gc = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d",
        },
        hc = function(a) {
            return gc[a];
        };
    Yb[7] = function(a) {
        return String(a).replace(fc, hc);
    };
    Yb[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(fc, hc) + "'";
        }
    };
    var pc =
        /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        qc = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD",
        },
        rc = function(a) {
            return qc[a];
        };
    Yb[16] = function(a) {
        return a;
    };
    var wc;
    var xc = [],
        yc = [],
        zc = [],
        Ac = [],
        Bc = [],
        Cc = {},
        Dc,
        Ec,
        Fc,
        Gc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Cc[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_"))
                        e && d && d.bg && d.bg(a[g]),
                        (f[void 0 !== e ? g : g.substr(4)] = a[g]);
                    else if (g === Xb.Yg.toString() && a[g]) {}
            e && d && d.ag && (f.vtp_gtmCachedValues = d.ag);
            return void 0 !== e ? e(f) : wc(c, f, b);
        },
        Ic = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Hc(a[e], b, c));
            return d;
        },
        Hc = function(a, b, c) {
            if (wa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Hc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = xc[f];
                        if (!g || b.Ie(g)) return;
                        c[f] = !0;
                        try {
                            var l = Ic(g, b, c);
                            l.vtp_gtmEventId = b.id;
                            d = Gc(l, { event: b, index: f, type: 2 });
                            Fc && (d = Fc.gi(d, l));
                        } catch (z) {
                            b.sg && b.sg(z, Number(f)), (d = !1);
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var k = 1; k < a.length; k += 2)
                            d[Hc(a[k], b, c)] = Hc(a[k + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = Hc(a[p], b, c);
                            Ec && (n = n || r === Ec.ad);
                            d.push(r);
                        }
                        return Ec && n ? Ec.ki(d) : d.join("");
                    case "escape":
                        d = Hc(a[1], b, c);
                        if (Ec && wa(a[1]) && "macro" === a[1][0] && Ec.Ji(a))
                            return Ec.Yi(d);
                        d = String(d);
                        for (var v = 2; v < a.length; v++) Yb[a[v]] && (d = Yb[a[v]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!Ac[t])
                            throw Error("Unable to resolve tag reference " + t + ".");
                        return (d = { ig: a[2], index: t });
                    case "zb":
                        var q = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        q["function"] = a[1];
                        var u = Jc(q, b, c),
                            x = !!a[4];
                        return x || 2 !== u ? x !== (1 === u) : null;
                    default:
                        throw Error(
                            "Attempting to expand unknown Value type: " + a[0] + "."
                        );
                }
            }
            return a;
        },
        Jc = function(a, b, c) {
            try {
                return Dc(Ic(a, b, c));
            } catch (d) {
                JSON.stringify(a);
            }
            return 2;
        };
    var Mc = function(a) {
            function b(v) {
                for (var t = 0; t < v.length; t++) d[v[t]] = !0;
            }
            for (var c = [], d = [], e = Kc(a), f = 0; f < yc.length; f++) {
                var g = yc[f],
                    l = Lc(g, e);
                if (l) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || []);
                } else null === l && b(g.block || []);
            }
            for (var p = [], r = 0; r < Ac.length; r++) c[r] && !d[r] && (p[r] = !0);
            return p;
        },
        Lc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null;
            }
            for (var f = a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1;
            }
            return !0;
        },
        Kc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Jc(zc[c], a));
                return b[c];
            };
        };
    var Tc = {
        gi: function(a, b) {
            b[Xb.$e] &&
                "string" === typeof a &&
                (a = 1 == b[Xb.$e] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Xb.bf) && null === a && (a = b[Xb.bf]);
            b.hasOwnProperty(Xb.df) && void 0 === a && (a = b[Xb.df]);
            b.hasOwnProperty(Xb.cf) && !0 === a && (a = b[Xb.cf]);
            b.hasOwnProperty(Xb.af) && !1 === a && (a = b[Xb.af]);
            return a;
        },
    };

    var P = {
        Ob: "_ee",
        gd: "_syn_or_mod",
        Fj: "_uei",
        be: "_eu",
        Bj: "_pci",
        Jb: "event_callback",
        Qc: "event_timeout",
        xa: "gtag.config",
        Ja: "gtag.get",
        va: "purchase",
        Gb: "refund",
        ib: "begin_checkout",
        Eb: "add_to_cart",
        Fb: "remove_from_cart",
        hh: "view_cart",
        ff: "add_to_wishlist",
        wa: "view_item",
        jb: "view_promotion",
        Mc: "select_promotion",
        Fd: "select_item",
        Ua: "view_item_list",
        ef: "add_payment_info",
        gh: "add_shipping_info",
        Ka: "value_key",
        Wa: "value_callback",
        Ca: "allow_ad_personalization_signals",
        fc: "restricted_data_processing",
        $b: "allow_google_signals",
        na: "cookie_expires",
        Ib: "cookie_update",
        hc: "session_duration",
        Wc: "session_engaged_time",
        Ma: "user_properties",
        qa: "transport_url",
        T: "ads_data_redaction",
        ya: "user_data",
        cc: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        Ye: "region",
        Ze: "wait_for_update",
        ma: "conversion_linker",
        Da: "conversion_cookie_prefix",
        da: "value",
        ca: "currency",
        Hf: "trip_type",
        Z: "items",
        zf: "passengers",
        Id: "allow_custom_scripts",
        ic: "session_id",
        Ef: "quantity",
        Ya: "transaction_id",
        nb: "language",
        Oc: "country",
        Nc: "allow_enhanced_conversions",
        Nd: "aw_merchant_id",
        Ld: "aw_feed_country",
        Md: "aw_feed_language",
        Kd: "discount",
        V: "developer_id",
        Xc: "delivery_postal_code",
        Td: "estimated_delivery_date",
        Rd: "shipping",
        Yd: "new_customer",
        Od: "customer_lifetime_value",
        Sd: "enhanced_conversions",
        Zb: "page_view",
        ia: "linker",
        N: "domains",
        ob: "decorate_forms",
        vf: "enhanced_conversions_automatic_settings",
        qh: "auto_detection_enabled",
        wf: "ga_temp_client_id",
        Gd: "user_engagement",
        ah: "app_remove",
        bh: "app_store_refund",
        dh: "app_store_subscription_cancel",
        eh: "app_store_subscription_convert",
        fh: "app_store_subscription_renew",
        ih: "first_open",
        jh: "first_visit",
        kh: "in_app_purchase",
        lh: "session_start",
        mh: "user_data_login",
        nh: "user_data_logout",
        oh: "allow_display_features",
        ac: "campaign",
        jf: "campaign_content",
        kf: "campaign_id",
        lf: "campaign_medium",
        nf: "campaign_name",
        pf: "campaign_source",
        qf: "campaign_term",
        kb: "client_id",
        fa: "cookie_domain",
        Hb: "cookie_name",
        Va: "cookie_path",
        Ea: "cookie_flags",
        bc: "custom_map",
        Vd: "groups",
        yf: "non_interaction",
        pb: "page_location",
        Zd: "page_path",
        La: "page_referrer",
        Uc: "page_title",
        Nb: "send_page_view",
        qb: "send_to",
        $d: "session_engaged",
        Tc: "_logged_in_state",
        ae: "session_number",
        Eh: "tracking_id",
        Za: "url_passthrough",
        Lb: "accept_incoming",
        Mb: "url_position",
        Cf: "phone_conversion_number",
        Af: "phone_conversion_callback",
        Bf: "phone_conversion_css_class",
        Df: "phone_conversion_options",
        Bh: "phone_conversion_ids",
        Ah: "phone_conversion_country_code",
        hf: "aw_remarketing",
        Jd: "aw_remarketing_only",
        Hd: "gclid",
        ph: "auid",
        vh: "affiliation",
        uf: "tax",
        Qd: "list_name",
        tf: "checkout_step",
        sf: "checkout_option",
        wh: "coupon",
        xh: "promotions",
        rb: "user_id",
        Ch: "retoken",
        oa: "cookie_prefix",
        rf: "disable_merchant_reported_purchases",
        uh: "dc_natural_search",
        th: "dc_custom_params",
        xf: "method",
        Dh: "search_term",
        sh: "content_type",
        zh: "optimize_id",
        yh: "experiments",
        Xa: "google_signals",
        Sc: "google_tld",
        Yc: "update",
        Ud: "firebase_id",
        Kb: "ga_restrict_domain",
        Pc: "event_settings",
        Pd: "dynamic_event_settings",
        jc: "user_data_settings",
        Ff: "screen_name",
        mb: "_x_19",
        lb: "_ecid",
        Rc: "_x_20",
        Xd: "internal_traffic_results",
        Gf: "traffic_type",
        Vc: "referral_exclusion_definition",
        Wd: "ignore_referrer",
        rh: "content_group",
    };
    var zd = {};
    P.Jf = Object.freeze(
        ((zd[P.ef] = 1),
            (zd[P.gh] = 1),
            (zd[P.Eb] = 1),
            (zd[P.Fb] = 1),
            (zd[P.hh] = 1),
            (zd[P.ib] = 1),
            (zd[P.Fd] = 1),
            (zd[P.Ua] = 1),
            (zd[P.Mc] = 1),
            (zd[P.jb] = 1),
            (zd[P.va] = 1),
            (zd[P.Gb] = 1),
            (zd[P.wa] = 1),
            (zd[P.ff] = 1),
            zd)
    );
    P.de = Object.freeze([P.Ca, P.$b, P.Ib]);
    P.Qh = Object.freeze([].concat(P.de));
    P.ee = Object.freeze([P.na, P.Qc, P.hc, P.Wc]);
    P.Rh = Object.freeze([].concat(P.ee));
    var Bd = {},
        Cd = function(a, b) {
            Bd[a] = Bd[a] || [];
            Bd[a][b] = !0;
        },
        Dd = function(a) {
            for (var b = [], c = Bd[a] || [], d = 0; d < c.length; d++)
                c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++)
                b[e] =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
                    b[e] || 0
                );
            return b.join("");
        };
    var Ed = function(a) {
        Cd("GTM", a);
    };
    var S = {},
        U = null,
        Fd = Math.random();
    S.J = "GTM-KK7X4WX";
    S.ed = "ba1";
    S.U = "dataLayer";
    S.$g =
        "ChAIgITDjAYQluXvupvW97xWEiQA72EBOgezi39jIe41UkozrntJ17qucPs13b44uVm2wS8kuHMaAsHR";
    var Gd = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
        },
        Hd = { __paused: !0, __tg: !0 },
        Id;
    for (Id in Gd) Gd.hasOwnProperty(Id) && (Hd[Id] = !0);
    S.Dd = "www.googletagmanager.com";
    var Jd = S.Dd + "/gtm.js";
    var Kd = Jd,
        Ld = Ha(""),
        Md = null,
        Nd = null,
        Od = "https://www.googletagmanager.com/a?id=" + S.J + "&cv=95",
        Pd = {},
        Qd = {},
        Rd = function() {
            var a = U.sequence || 1;
            U.sequence = a + 1;
            return a;
        };
    S.Zg = "";
    var $d = "";
    S.fd = $d;
    var ae = {},
        be = new za(),
        ce = {},
        de = {},
        ge = {
            name: S.U,
            set: function(a, b) {
                O(Wa(a, b), ce);
                ee();
            },
            get: function(a) {
                return fe(a, 2);
            },
            reset: function() {
                be = new za();
                ce = {};
                ee();
            },
        },
        fe = function(a, b) {
            return 2 != b ? be.get(a) : he(a);
        },
        he = function(a) {
            var b,
                c = a.split(".");
            b = b || [];
            for (var d = ce, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return;
            }
            return d;
        },
        ie = function(a, b) {
            de.hasOwnProperty(a) || (be.set(a, b), O(Wa(a, b), ce), ee());
        },
        ee = function(a) {
            Ba(de, function(b, c) {
                be.set(b, c);
                O(Wa(b, void 0), ce);
                O(Wa(b, c), ce);
                a && delete de[b];
            });
        },
        ke = function(a, b, c) {
            ae[a] = ae[a] || {};
            ae[a][b] = je(b, c);
        },
        je = function(a, b) {
            var c,
                d = 1 !== (void 0 === b ? 2 : b) ? he(a) : be.get(a);
            "array" === Tb(d) || "object" === Tb(d) ? (c = O(d)) : (c = d);
            return c;
        },
        le = function(a, b) {
            if (ae[a]) return ae[a][b];
        },
        me = function(a, b) {
            ae[a] && delete ae[a][b];
        };
    var ne = new RegExp(
            /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
        ),
        oe = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: [
                "customScripts",
                "customPixels",
                "nonGooglePixels",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            customScripts: [
                "html",
                "customPixels",
                "nonGooglePixels",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"],
        },
        pe = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: [
                "customPixels",
                "customScripts",
                "html",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
        },
        qe =
        "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
            " "
        );
    var re = function() {
            var a = !1;
            return a;
        },
        te = function(a) {
            var b = fe("gtm.allowlist") || fe("gtm.whitelist");
            b && Ed(9);
            re() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Va(Ja(b), oe),
                d = fe("gtm.blocklist") || fe("gtm.blacklist");
            d || ((d = fe("tagTypeBlacklist")) && Ed(3));
            d ? Ed(8) : (d = []);
            se() &&
                ((d = Ja(d)),
                    d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ja(d).indexOf("google") && Ed(2);
            var e = d && Va(Ja(d), pe),
                f = {};
            return function(g) {
                var l = g && g[Xb.sb];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var k = Qd[l] || [],
                    n = a(l, k);
                if (b) {
                    var p;
                    if ((p = n))
                        a: {
                            if (0 > c.indexOf(l))
                                if (k && 0 < k.length)
                                    for (var r = 0; r < k.length; r++) {
                                        if (0 > c.indexOf(k[r])) {
                                            Ed(11);
                                            p = !1;
                                            break a;
                                        }
                                    }
                                else {
                                    p = !1;
                                    break a;
                                }
                            p = !0;
                        }
                    n = p;
                }
                var v = !1;
                if (d) {
                    var t = 0 <= e.indexOf(l);
                    if (t) v = t;
                    else {
                        var q = Aa(e, k || []);
                        q && Ed(10);
                        v = q;
                    }
                }
                var u = !n || v;
                u ||
                    !(0 <= k.indexOf("sandboxedScripts")) ||
                    (c && -1 !== c.indexOf("sandboxedScripts")) ||
                    (u = Aa(e, qe));
                return (f[l] = u);
            };
        },
        se = function() {
            return ne.test(B.location && B.location.hostname);
        };
    var ue = {
            active: !0,
            isAllowed: function() {
                return !0;
            },
        },
        ve = function(a) {
            var b = U.zones;
            return b ? b.checkState(S.J, a) : ue;
        },
        we = function(a) {
            var b = U.zones;
            !b && a && (b = U.zones = a());
            return b;
        };
    var xe = function(a) {
        this.m = a;
        this.defaultValue = !1;
    };
    var ye = new xe(1933),
        ze = new xe(1956);
    var Be = function() {
        var a = Ae,
            b = "Ge";
        if (a.Ge && a.hasOwnProperty(b)) return a.Ge;
        var c = new a();
        a.Ge = c;
        a.hasOwnProperty(b);
        return c;
    };
    var Ae = function() {
            var a = {};
            this.o = function(b, c) {
                return null != a[b] ? a[b] : c;
            };
            this.m = function(b) {
                a[b] = !0;
            };
        },
        Ce = function(a) {
            return Be().o(a.m, a.defaultValue);
        };
    var De = [];

    function Ee() {
        var a = xb("google_tag_data", {});
        a.ics ||
            (a.ics = {
                entries: {},
                set: Fe,
                update: Ge,
                addListener: He,
                notifyListeners: Ie,
                active: !1,
                usedDefault: !1,
            });
        return a.ics;
    }

    function Fe(a, b, c, d, e, f) {
        var g = Ee();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries,
                k = l[a] || {},
                n = k.region,
                p = c && ta(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === k.update),
                    v = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: r,
                    };
                if ("" !== d || !1 !== k.initial) l[a] = v;
                r &&
                    B.setTimeout(function() {
                        l[a] === v &&
                            v.quiet &&
                            ((v.quiet = !1), Je(a), Ie(), Cd("TAGGING", 2));
                    }, f);
            }
        }
    }

    function Ge(a, b) {
        var c = Ee();
        c.active = !0;
        if (void 0 != b) {
            var d = Ke(a),
                e = c.entries,
                f = (e[a] = e[a] || {});
            f.update = "granted" === b;
            var g = Ke(a);
            f.quiet ? ((f.quiet = !1), Je(a)) : g !== d && Je(a);
        }
    }

    function He(a, b) {
        De.push({ xe: a, wi: b });
    }

    function Je(a) {
        for (var b = 0; b < De.length; ++b) {
            var c = De[b];
            wa(c.xe) && -1 !== c.xe.indexOf(a) && (c.yg = !0);
        }
    }

    function Ie(a) {
        for (var b = 0; b < De.length; ++b) {
            var c = De[b];
            if (c.yg) {
                c.yg = !1;
                try {
                    c.wi({ consentEventId: a });
                } catch (d) {}
            }
        }
    }
    var Ke = function(a) {
            var b = Ee().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial;
        },
        Le = function(a) {
            return (Ee().entries[a] || {}).initial;
        },
        Me = function(a) {
            return !(Ee().entries[a] || {}).quiet;
        },
        Ne = function() {
            return Ce(ye) ? Ee().active : !1;
        },
        Oe = function() {
            return Ee().usedDefault;
        },
        Pe = function(a, b) {
            Ee().addListener(a, b);
        },
        Qe = function(a) {
            Ee().notifyListeners(a);
        },
        Re = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Me(b[e])) return !0;
                return !1;
            }
            if (c()) {
                var d = !1;
                Pe(b, function(e) {
                    d || c() || ((d = !0), a(e));
                });
            } else a({});
        },
        Se = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === Ke(l) || e[l] || (f.push(l), (e[l] = !0));
                }
                return f;
            }
            var d = ta(b) ? [b] : b,
                e = {};
            c().length !== d.length &&
                Pe(d, function(f) {
                    var g = c();
                    0 < g.length && ((f.xe = g), a(f));
                });
        };

    function Te() {}

    function Ue() {}

    function Ve(a) {
        for (var b = [], c = 0; c < bf.length; c++) {
            var d = a(bf[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
        }
        return b.join("");
    }
    var bf = [P.C, P.H],
        cf = function(a) {
            var b = a[P.Ye];
            b && Ed(40);
            var c = a[P.Ze];
            c && Ed(41);
            for (
                var d = wa(b) ? b : [b], e = { Wb: 0 }; e.Wb < d.length; e = { Wb: e.Wb }, ++e.Wb
            )
                Ba(
                    a,
                    (function(f) {
                        return function(g, l) {
                            if (g !== P.Ye && g !== P.Ze) {
                                var k = d[f.Wb];
                                Ee().set(g, l, k, "AE", "AE-SH", c);
                            }
                        };
                    })(e)
                );
        },
        df = 0,
        ef = function(a, b) {
            Ba(a, function(e, f) {
                Ee().update(e, f);
            });
            Qe(b);
            var c = m(),
                d = c - df;
            df && 0 <= d && 1e3 > d && Ed(66);
            df = c;
        },
        ff = function(a) {
            var b = Ke(a);
            return void 0 != b ? b : !0;
        },
        gf = function() {
            return "G1" + Ve(Ke);
        },
        hf = function() {
            return "G1" + Ve(Le);
        },
        jf = function(a, b) {
            Se(a, b);
        },
        kf = function(a, b) {
            Re(a, b);
        };
    var mf = function(a) {
            return lf ? G.querySelectorAll(a) : null;
        },
        nf = function(a, b) {
            if (!lf) return null;
            if (Element.prototype.closest)
                try {
                    return a.closest(b);
                } catch (e) {
                    return null;
                }
            var c =
                Element.prototype.matches ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d;
                } catch (e) {
                    break;
                }
                d = d.parentElement || d.parentNode;
            } while (null !== d && 1 === d.nodeType);
            return null;
        },
        of = !1;
    if (G.querySelectorAll)
        try {
            var pf = G.querySelectorAll(":root");
            pf && 1 == pf.length && pf[0] == G.documentElement && (of = !0);
        } catch (a) {}
    var lf = of;
    var Jf = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1;
        },
        Kf = function(a) {
            var b = new Jf();
            b.eventModel = a;
            return b;
        },
        Lf = function(a, b) {
            a.targetConfig = b;
            return a;
        },
        Mf = function(a, b) {
            a.containerConfig = b;
            return a;
        },
        Nf = function(a, b) {
            a.globalConfig = b;
            return a;
        },
        Of = function(a, b) {
            a.remoteConfig = b;
            return a;
        },
        Pf = function(a, b) {
            a.onSuccess = b;
            return a;
        },
        Qf = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a;
        },
        Rf = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a;
        },
        Sf = function(a, b) {
            a.onFailure = b;
            return a;
        };
    Jf.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    };
    var Tf = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c);
        },
        Uf = function(a, b, c) {
            function d(g) {
                Vb(g) &&
                    Ba(g, function(l, k) {
                        f = !0;
                        e[l] = k;
                    });
            }
            var e = {},
                f = !1;
            (c && 1 !== c) ||
            (d(a.remoteConfig[b]),
                d(a.globalConfig[b]),
                d(a.containerConfig[b]),
                d(a.targetConfig[b]));
            (c && 2 !== c) || d(a.eventModel[b]);
            return f ? e : void 0;
        },
        Vf = function(a) {
            var b = [P.ac, P.jf, P.kf, P.lf, P.nf, P.pf, P.qf],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g = 0; g < b.length; g++)
                        void 0 !== f[b[g]] && ((c[b[g]] = f[b[g]]), (d = !0));
                    return d;
                };
            if (
                e(a.eventModel) ||
                e(a.targetConfig) ||
                e(a.containerConfig) ||
                e(a.globalConfig)
            )
                return c;
            e(a.remoteConfig);
            return c;
        },
        Wf = function(a) {
            var b = [],
                c;
            for (c in a.eventModel)
                c !== P.Ob &&
                a.eventModel.hasOwnProperty(c) &&
                void 0 !== a.eventModel[c] &&
                b.push(c);
            return b;
        };
    var Xf,
        Yf = !1,
        Zf = function(a) {
            if (!Yf) {
                Yf = !0;
                Xf = Xf || {};
            }
            return Xf[a];
        };
    var $f = function(a) {
        if (G.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle)
            return !0;
        var c = B.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var l = g.indexOf("opacity(");
                0 <= l &&
                    ((g = g.substring(l + 8, g.indexOf(")", l))),
                        "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                        (f = Math.min(g, f)));
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = B.getComputedStyle(d, null));
        }
        return !1;
    };
    var ag = function() {
            var a = G.body,
                b = G.documentElement || (a && a.parentElement),
                c,
                d;
            if (G.compatMode && "BackCompat" !== G.compatMode)
                (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g);
                };
                Ed(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
            }
            return { width: d, height: c };
        },
        bg = function(a) {
            var b = ag(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ?
                (1 -
                    Math.min(
                        (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
                        1
                    )) *
                (1 -
                    Math.min(
                        (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                        1
                    )) :
                0;
        };
    var ig = /:[0-9]+$/,
        jg = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
                }
            }
        },
        mg = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = kg(a.protocol) || kg(B.location.protocol);
            "port" === b
                ?
                (a.port = String(
                    Number(a.hostname ? a.port : B.location.port) ||
                    ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
                )) :
                "host" === b &&
                (a.hostname = (a.hostname || B.location.hostname)
                    .replace(ig, "")
                    .toLowerCase());
            return lg(a, b, c, d, e);
        },
        lg = function(a, b, c, d, e) {
            var f,
                g = kg(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ng(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(ig, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length));
                    }
                    break;
                case "port":
                    f = String(
                        Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : "")
                    );
                    break;
                case "path":
                    a.pathname || a.hostname || Cd("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = jg(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href;
            }
            return f;
        },
        kg = function(a) {
            return a ? a.replace(":", "").toLowerCase() : "";
        },
        ng = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c);
            }
            return b;
        },
        og = function(a) {
            var b = G.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Cd("TAGGING", 1), (c = "/" + c));
            var d = b.hostname.replace(ig, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port,
            };
        },
        pg = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0";
            }

            function c(n) {
                return n
                    .split("&")
                    .map(b)
                    .filter(function(p) {
                        return void 0 != p;
                    })
                    .join("&");
            }
            var d =
                "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
                    " "
                ),
                e = og(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var k = "" + f + g + l;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k;
        };
    var qg = {};
    var Jg = {},
        Mg = function(a, b) {
            if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a))
                return B._gtmexpgrp[a];
            void 0 === Jg[a] && (Jg[a] = Math.floor(Math.random() * b));
            return Jg[a];
        };
    var Ng = function(a) {
        var b = 1,
            c,
            d,
            e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--)
                (e = a.charCodeAt(d)),
                (b = ((b << 6) & 268435455) + e + (e << 14)),
                (c = b & 266338304),
                (b = 0 != c ? b ^ (c >> 21) : b);
        return b;
    };
    var Og = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var k = g
                    .slice(1)
                    .join("=")
                    .replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k);
            }
        }
        return d;
    };

    function Pg(a) {
        return "null" !== a.origin;
    }
    var Sg = function(a, b, c, d) {
            return Qg(d) ? Og(a, String(b || Rg()), c) : [];
        },
        Vg = function(a, b, c, d, e) {
            if (Qg(e)) {
                var f = Tg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Ug(
                        f,
                        function(g) {
                            return g.nd;
                        },
                        b
                    );
                    if (1 === f.length) return f[0].id;
                    f = Ug(
                        f,
                        function(g) {
                            return g.Bc;
                        },
                        c
                    );
                    return f[0] ? f[0].id : void 0;
                }
            }
        };

    function Wg(a, b, c, d) {
        var e = Rg(),
            f = window;
        Pg(f) && (f.document.cookie = a);
        var g = Rg();
        return e != g || (void 0 != c && 0 <= Sg(b, g, !1, d).indexOf(c));
    }
    var $g = function(a, b, c) {
            function d(t, q, u) {
                if (null == u) return delete g[q], t;
                g[q] = u;
                return t + "; " + q + "=" + u;
            }

            function e(t, q) {
                if (null == q) return delete g[q], t;
                g[q] = !0;
                return t + "; " + q;
            }
            if (!Qg(c.Ha)) return 2;
            var f;
            void 0 == b ?
                (f = a + "=deleted; expires=" + new Date(0).toUTCString()) :
                (c.encode && (b = encodeURIComponent(b)),
                    (b = Xg(b)),
                    (f = a + "=" + b));
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ?
                (l = c.expires.toUTCString()) :
                null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.Ij);
            f = d(f, "samesite", c.Kj);
            c.Lj && (f = e(f, "secure"));
            var k = c.domain;
            if (k && "auto" === k.toLowerCase()) {
                for (var n = Yg(), p = 0; p < n.length; ++p) {
                    var r = "none" !== n[p] ? n[p] : void 0,
                        v = d(f, "domain", r);
                    v = e(v, c.flags);
                    if (!Zg(r, c.path) && Wg(v, a, b, c.Ha)) return 0;
                }
                return 1;
            }
            k && "none" !== k.toLowerCase() && (f = d(f, "domain", k));
            f = e(f, c.flags);
            return Zg(k, c.path) ? 1 : Wg(f, a, b, c.Ha) ? 0 : 1;
        },
        ah = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return $g(a, b, c);
        };

    function Ug(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                k = b(l);
            k === c ?
                d.push(l) :
                void 0 === f || k < f ?
                ((e = [l]), (f = k)) :
                k === f && e.push(l);
        }
        return 0 < d.length ? d : e;
    }

    function Tg(a, b, c) {
        for (var d = [], e = Sg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var k = g.shift();
                k &&
                    ((k = k.split("-")),
                        d.push({ id: g.join("."), nd: 1 * k[0] || 1, Bc: 1 * k[1] || 1 }));
            }
        }
        return d;
    }
    var Xg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a;
        },
        bh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ch = /(^|\.)doubleclick\.net$/i,
        Zg = function(a, b) {
            return (
                ch.test(window.document.location.hostname) || ("/" === b && bh.test(a))
            );
        },
        Rg = function() {
            return Pg(window) ? window.document.cookie : "";
        },
        Yg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"];
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            ch.test(e) || bh.test(e) || a.push("none");
            return a;
        },
        Qg = function(a) {
            if (!Ce(ye) || !a || !Ne()) return !0;
            if (!Me(a)) return !1;
            var b = Ke(a);
            return null == b ? !0 : !!b;
        };
    var dh = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c = b;
            a && (c = b ^ (Ng(a) & 2147483647));
            return [c, Math.round(m() / 1e3)].join(".");
        },
        gh = function(a, b, c, d, e) {
            var f = eh(b);
            return Vg(a, f, fh(c), d, e);
        },
        hh = function(a, b, c, d) {
            var e = "" + eh(c),
                f = fh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".");
        },
        eh = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length;
        },
        fh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1;
        };

    function ih(a, b, c) {
        var d,
            e = Number(null != a.eb ? a.eb : void 0);
        0 !== e && (d = new Date((b || m()) + 1e3 * (e || 7776e3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d,
        };
    }
    var jh = ["1"],
        kh = {},
        nh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = lh(a.prefix);
            if (!kh[c] && !mh(c, a.path, a.domain) && b) {
                var d = lh(a.prefix),
                    e = dh(),
                    f = hh(e, "1", a.domain, a.path),
                    g = ih(a, void 0);
                g.Ha = "ad_storage";
                if (0 === ah(d, f, g)) {
                    var l = xb("google_tag_data", {});
                    l._gcl_au ? Cd("GTM", 57) : (l._gcl_au = e);
                }
                mh(c, a.path, a.domain);
            }
        };

    function mh(a, b, c) {
        var d = gh(a, b, c, jh, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ?
            ((kh[a] = e.slice(0, 2).join(".")), e.slice(2, 4).join(".")) :
            3 === e.length ?
            e.slice(0, 2).join(".") :
            (kh[a] = d);
        return !0;
    }

    function lh(a) {
        return (a || "_gcl") + "_au";
    }
    var oh = function(a) {
        for (
            var b = [],
                c = G.cookie.split(";"),
                d = new RegExp(
                    "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
                ),
                e = 0; e < c.length; e++
        ) {
            var f = c[e].match(d);
            f &&
                b.push({
                    Ve: f[1],
                    value: f[2],
                    timestamp: Number(f[2].split(".")[1]) || 0,
                });
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp;
        });
        return b;
    };

    function ph(a, b) {
        var c = oh(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
                Number(f[1])
            ) {
                d[c[e].Ve] || (d[c[e].Ve] = []);
                var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ra: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Ve].push(g);
            }
        }
        return d;
    }

    function qh() {
        for (var a = rh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b;
    }

    function sh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + ".";
    }
    var rh, th;

    function uh(a) {
        rh = rh || sh();
        th = th || qh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                k = f >> 2,
                n = ((f & 3) << 4) | (g >> 4),
                p = ((g & 15) << 2) | (l >> 6),
                r = l & 63;
            e || ((r = 64), d || (p = 64));
            b.push(rh[k], rh[n], rh[p], rh[r]);
        }
        return b.join("");
    }

    function vh(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = th[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return k;
        }
        rh = rh || sh();
        th = th || qh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode((e << 2) | (f >> 4));
            64 != g &&
                ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
                    64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
        }
    }
    var wh,
        xh = function(a) {
            var b;
            if (!(b = wh)) {
                for (var c = Array(256), d = 0; 256 > d; d++) {
                    for (var e = d, f = 0; 8 > f; f++)
                        e = e & 1 ? (e >>> 1) ^ 3988292384 : e >>> 1;
                    c[d] = e;
                }
                b = c;
            }
            wh = b;
            for (var g = 4294967295, l = 0; l < a.length; l++)
                g = (g >>> 8) ^ wh[(g ^ a.charCodeAt(l)) & 255];
            return (g ^ -1) >>> 0;
        };
    var yh = { uj: 0, Ej: 1, yj: 2, xj: 3 },
        zh = void 0,
        Dh = function() {
            var a = Ah,
                b = Bh,
                c = Ch(),
                d = function(g) {
                    a(g.target || g.srcElement || {});
                },
                e = function(g) {
                    b(g.target || g.srcElement || {});
                };
            if (!c.init) {
                Gb(G, "mousedown", d);
                Gb(G, "keyup", d);
                Gb(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this);
                };
                c.init = !0;
            }
        },
        Eh = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e,
            };
            Ch().decorators.push(f);
        },
        Fh = function(a, b, c) {
            for (var d = Ch().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    l;
                if ((l = !c || g.forms))
                    a: {
                        var k = g.domains,
                            n = a,
                            p = !!g.sameHost;
                        if (k && (p || n !== G.location.hostname))
                            for (var r = 0; r < k.length; r++)
                                if (k[r] instanceof RegExp) {
                                    if (k[r].test(n)) {
                                        l = !0;
                                        break a;
                                    }
                                } else if (
                            0 <= n.indexOf(k[r]) ||
                            (p && 0 <= k[r].indexOf(n))
                        ) {
                            l = !0;
                            break a;
                        }
                        l = !1;
                    }
                if (l) {
                    var v = g.placement;
                    void 0 == v && (v = g.fragment ? 2 : 1);
                    v === b && Sa(e, g.callback());
                }
            }
            return e;
        };

    function Ch() {
        var a = xb("google_tag_data", {}),
            b = a.gl;
        (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
        return b;
    }
    var Gh = /(.*?)\*(.*?)\*(.*)/,
        Hh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ih = /^(?:www\.|m\.|amp\.)+/,
        Jh = /\*?xp_[0-3]\*?/,
        Kh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Lh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
    }
    var Mh = void 0,
        Ph = function(a, b) {
            var c = [],
                d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var e = a[d];
                    void 0 !== e &&
                        e === e &&
                        null !== e &&
                        "[object Object]" !== e.toString() &&
                        (c.push(d), c.push(uh(String(e))));
                }
            var f = c.join("*");
            if (void 0 !== b) {
                var g = "xp_" + b,
                    l = Nh[b](f);
                f = [f, g, uh(String(l))].join("*");
            }
            return ["1", Oh(f), f].join("*");
        };

    function Oh(a, b) {
        var c = [
            B.navigator.userAgent,
            new Date().getTimezoneOffset(),
            Rb(),
            Math.floor(m() / 60 / 1e3) - (void 0 === b ? 0 : b),
            a,
        ].join("*");
        return xh(c).toString(36);
    }
    var Qh = {},
        Nh =
        ((Qh[0] = function() {
                return "BASELINE";
            }),
            (Qh[1] = Rh),
            (Qh[2] = Sh),
            (Qh[3] = Th),
            Qh);

    function Rh(a, b) {
        var c = [
            new Date().getTimezoneOffset(),
            Rb(),
            Math.floor(m() / 60 / 1e3) - (void 0 === b ? 0 : b),
            a,
        ].join("*");
        return xh(c).toString(36);
    }

    function Sh(a, b) {
        if (!vb.userAgentData) return "UA_DATA_NOT_PRESENT";
        var c = [
            new Date().getTimezoneOffset(),
            Rb(),
            Math.floor(m() / 60 / 1e3) - (void 0 === b ? 0 : b),
            vb.userAgentData.brands,
            vb.userAgentData.mobile,
            vb.userAgentData.platform,
            a,
        ].join("*");
        return xh(c).toString(36);
    }

    function Uh() {
        vb.userAgentData &&
            vb.userAgentData
            .getHighEntropyValues([
                "architecture",
                "model",
                "bitness",
                "platformVersion",
                "uaFullVersion",
            ])
            .then(function(a) {
                Mh = a;
            });
    }

    function Th(a, b) {
        if (void 0 === Mh) return "UACH_ACCESSED_TOO_EARLY";
        var c = [
            new Date().getTimezoneOffset(),
            Rb(),
            Math.floor(m() / 60 / 1e3) - (void 0 === b ? 0 : b),
            vb.userAgentData.brands,
            vb.userAgentData.mobile,
            vb.userAgentData.platform,
            Mh.architecture,
            Mh.bitness,
            Mh.model,
            Mh.platformVersion,
            Mh.uaFullVersion,
            a,
        ].join("*");
        return xh(c).toString(36);
    }

    function Vh() {
        return function(a) {
            var b = og(B.location.href),
                c = b.search.replace("?", ""),
                d = jg(c, "_gl", !0) || "";
            a.query = Wh(d) || {};
            var e = mg(b, "fragment").match(Lh("_gl"));
            a.fragment = Wh((e && e[3]) || "") || {};
        };
    }
    var Xh = function(a) {
            var b = Vh(),
                c = Ch();
            c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
            var d = {},
                e = c.data;
            e && (Sa(d, e.query), a && Sa(d, e.fragment));
            return d;
        },
        Wh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Gh.exec(d);
                            if (f) {
                                c = f;
                                break a;
                            }
                            d = decodeURIComponent(d);
                        }
                        c = void 0;
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var l = g[2],
                            k = g[3],
                            n = null !== k.match(Jh),
                            p;
                        a: {
                            for (var r = 0; r < b; ++r)
                                if (l === Oh(k, r)) {
                                    p = !0;
                                    break a;
                                }
                            p = !1;
                        }
                        var v = p;
                        if (v || n) {
                            for (
                                var t = {}, q = k ? k.split("*") : [], u = 0; u + 1 < q.length; u += 2
                            ) {
                                var x = q[u],
                                    z = null !== x.match(Jh);
                                if (v || z) {
                                    var w = vh(q[u + 1]);
                                    t[x] = w;
                                }
                                if (z) {
                                    var y = x.split("_")[1];
                                    if (!(Number(y) < Object.keys(yh).length)) return;
                                    var A = b,
                                        C = t[x],
                                        F = k.slice(0, k.indexOf("*xp")),
                                        D = v;
                                    if (0 !== Number(y))
                                        a: {
                                            var E = C,
                                                L = F,
                                                J = A;
                                            if (
                                                "undefined" !== E &&
                                                "UA_DATA_NOT_PRESENT" !== E &&
                                                "UACH_ACCESSED_TOO_EARLY" !== E
                                            )
                                                for (var N = 0; N < J; ++N)
                                                    if (E === Nh[y](L, N)) {
                                                        D = !0;
                                                        break a;
                                                    }
                                            D = !1;
                                        }
                                    t._z =
                                        "uaxp." +
                                        (v ?
                                            D === v ?
                                            "" + y + 0 :
                                            "" + y + 3 :
                                            D === v ?
                                            "" + y + 1 :
                                            "" + y + 2);
                                }
                            }
                            return t;
                        }
                    }
                }
            } catch (M) {}
        };

    function Yh(a, b, c, d) {
        function e(p) {
            var r = p,
                v = Lh(a).exec(r),
                t = r;
            if (v) {
                var q = v[2],
                    u = v[4];
                t = v[1];
                u && (t = t + q + u);
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n;
        }
        d = void 0 === d ? !1 : d;
        var f = Kh.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? (k = "#" + e(k.substring(1))) : (l = "?" + e(l.substring(1)));
        return "" + g + l + k;
    }

    function Zh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Fh(b, 1, c),
            e = Fh(b, 2, c),
            f = Fh(b, 3, c),
            g = zh;
        if (Ua(d)) {
            var l = Ph(d, g);
            c ? $h("_gl", l, a) : ai("_gl", l, a, !1);
        }
        if (!c && Ua(e)) {
            var k = Ph(e);
            ai("_gl", k, a, !0);
        }
        for (var n in f)
            if (f.hasOwnProperty(n))
                a: {
                    var p = n,
                        r = f[n],
                        v = a;
                    if (v.tagName) {
                        if ("a" === v.tagName.toLowerCase()) {
                            ai(p, r, v, void 0);
                            break a;
                        }
                        if ("form" === v.tagName.toLowerCase()) {
                            $h(p, r, v);
                            break a;
                        }
                    }
                    "string" == typeof v && Yh(p, r, v, void 0);
                }
    }

    function ai(a, b, c, d) {
        if (c.href) {
            var e = Yh(a, b, c.href, void 0 === d ? !1 : d);
            eb.test(e) && (c.href = e);
        }
    }

    function $h(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break;
                    }
                }
                if (!f) {
                    var k = G.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k);
                }
            } else if ("post" === d) {
                var n = Yh(a, b, c.action);
                eb.test(n) && (c.action = n);
            }
        }
    }

    function Ah(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a;
                    }
                    c = c.parentNode;
                    d--;
                }
                b = null;
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                ("http:" !== f && "https:" !== f) || Zh(e, e.hostname);
            }
        } catch (g) {}
    }

    function Bh(a) {
        try {
            if (a.action) {
                var b = mg(og(a.action), "host");
                Zh(a, b);
            }
        } catch (c) {}
    }
    var bi = function(a, b, c, d, e) {
            Dh();
            void 0 !== e && (zh = e);
            3 === e && Uh();
            Eh(a, b, "fragment" === c ? 2 : 1, !!d, !1);
        },
        ci = function(a, b) {
            Dh();
            Eh(a, [lg(B.location, "host", !0)], b, !0, !0);
        },
        di = function() {
            var a = G.location.hostname,
                b = Hh.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-");
            }
            var l = a.replace(Ih, ""),
                k = e.replace(Ih, ""),
                n;
            if (!(n = l === k)) {
                var p = "." + k;
                n = l.substring(l.length - p.length, l.length) === p;
            }
            return n;
        },
        ei = function(a, b) {
            return !1 === a ? !1 : a || b || di();
        };
    var fi = {};
    var gi = /^\w+$/,
        hi = /^[\w-]+$/,
        ii = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        ji = function() {
            if (!Ce(ye) || !Ne()) return !0;
            var a = Ke("ad_storage");
            return null == a ? !0 : !!a;
        },
        ki = function(a, b) {
            Me("ad_storage") ?
                ji() ?
                a() :
                Se(a, "ad_storage") :
                b ?
                Cd("TAGGING", 3) :
                Re(
                    function() {
                        ki(a, !0);
                    }, ["ad_storage"]
                );
        },
        mi = function(a) {
            return li(a).map(function(b) {
                return b.ra;
            });
        },
        li = function(a) {
            var b = [];
            if (!Pg(B) || !G.cookie) return b;
            var c = Sg(a, G.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Ic: d.Ic }, e++) {
                var f = ni(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.Ic = g.ra;
                    var k = g.timestamp,
                        n = g.labels,
                        p = xa(
                            b,
                            (function(r) {
                                return function(v) {
                                    return v.ra === r.Ic;
                                };
                            })(d)
                        );
                    p
                        ?
                        ((p.timestamp = Math.max(p.timestamp, k)),
                            (p.labels = oi(p.labels, n || []))) :
                        b.push({ version: l, ra: d.Ic, timestamp: k, labels: n });
                }
            }
            b.sort(function(r, v) {
                return v.timestamp - r.timestamp;
            });
            return pi(b);
        };

    function oi(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            (c[a[e]] = !0), d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d;
    }

    function qi(a) {
        return a && "string" == typeof a && a.match(gi) ? a : "_gcl";
    }
    var si = function() {
            var a = og(B.location.href),
                b = mg(a, "query", !1, void 0, "gclid"),
                c = mg(a, "query", !1, void 0, "gclsrc"),
                d = mg(a, "query", !1, void 0, "wbraid"),
                e = mg(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || jg(f, "gclid", void 0);
                c = c || jg(f, "gclsrc", void 0);
                d = d || jg(f, "wbraid", void 0);
            }
            return ri(b, c, e, d);
        },
        ri = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g);
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && hi.test(d) && ((e.gbraid = d), f(d, "gb"));
            if (void 0 !== a && a.match(hi))
                switch (b) {
                    case void 0:
                        f(a, "aw");
                        break;
                    case "aw.ds":
                        f(a, "aw");
                        f(a, "dc");
                        break;
                    case "ds":
                        f(a, "dc");
                        break;
                    case "3p.ds":
                        f(a, "dc");
                        break;
                    case "gf":
                        f(a, "gf");
                        break;
                    case "ha":
                        f(a, "ha");
                }
            c && f(c, "dc");
            return e;
        },
        ui = function(a) {
            var b = si();
            ki(function() {
                ti(b, !1, a);
            });
        };

    function ti(a, b, c, d, e) {
        function f(x, z) {
            var w = vi(x, g);
            w && (ah(w, z, l), (k = !0));
        }
        c = c || {};
        e = e || [];
        var g = qi(c.prefix);
        d = d || m();
        var l = ih(c, d, !0);
        l.Ha = "ad_storage";
        var k = !1,
            n = Math.round(d / 1e3),
            p = function(x) {
                var z = ["GCL", n, x];
                0 < e.length && z.push(e.join("."));
                return z.join(".");
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (
            (void 0 == fi.enable_gbraid_cookie_write ?
                0 :
                fi.enable_gbraid_cookie_write) &&
            !k &&
            a.gb
        ) {
            var r = a.gb[0],
                v = vi("gb", g),
                t = !1;
            if (!b)
                for (var q = li(v), u = 0; u < q.length; u++)
                    q[u].ra === r && q[u].labels && 0 < q[u].labels.length && (t = !0);
            t || f("gb", p(r));
        }
    }
    var xi = function(a, b) {
            var c = Xh(!0);
            ki(function() {
                for (var d = qi(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ii[f]) {
                        var g = vi(f, d),
                            l = c[g];
                        if (l) {
                            var k = Math.min(wi(l), m()),
                                n;
                            b: {
                                var p = k;
                                if (Pg(B))
                                    for (
                                        var r = Sg(g, G.cookie, void 0, "ad_storage"), v = 0; v < r.length;
                                        ++v
                                    )
                                        if (wi(r[v]) > p) {
                                            n = !0;
                                            break b;
                                        }
                                n = !1;
                            }
                            if (!n) {
                                var t = ih(b, k, !0);
                                t.Ha = "ad_storage";
                                ah(g, l, t);
                            }
                        }
                    }
                }
                ti(ri(c.gclid, c.gclsrc), !1, b);
            });
        },
        vi = function(a, b) {
            var c = ii[a];
            if (void 0 !== c) return b + c;
        },
        wi = function(a) {
            return 0 !== yi(a.split(".")).length ?
                1e3 * (Number(a.split(".")[1]) || 0) :
                0;
        };

    function ni(a) {
        var b = yi(a.split("."));
        return 0 === b.length ?
            null :
            {
                version: b[0],
                ra: b[2],
                timestamp: 1e3 * (Number(b[1]) || 0),
                labels: b.slice(3),
            };
    }

    function yi(a) {
        return 3 > a.length ||
            ("GCL" !== a[0] && "1" !== a[0]) ||
            !/^\d+$/.test(a[1]) ||
            !hi.test(a[2]) ?
            [] :
            a;
    }
    var zi = function(a, b, c, d, e) {
            if (wa(b) && Pg(B)) {
                var f = qi(e),
                    g = function() {
                        for (var l = {}, k = 0; k < a.length; ++k) {
                            var n = vi(a[k], f);
                            if (n) {
                                var p = Sg(n, G.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1]);
                            }
                        }
                        return l;
                    };
                ki(function() {
                    bi(g, b, c, d);
                });
            }
        },
        pi = function(a) {
            return a.filter(function(b) {
                return hi.test(b.ra);
            });
        },
        Ai = function(a, b) {
            if (Pg(B)) {
                for (var c = qi(b.prefix), d = {}, e = 0; e < a.length; e++)
                    ii[a[e]] && (d[a[e]] = ii[a[e]]);
                ki(function() {
                    Ba(d, function(f, g) {
                        var l = Sg(c + g, G.cookie, void 0, "ad_storage");
                        l.sort(function(t, q) {
                            return wi(q) - wi(t);
                        });
                        if (l.length) {
                            var k = l[0],
                                n = wi(k),
                                p = 0 !== yi(k.split(".")).length ? k.split(".").slice(3) : [],
                                r = {},
                                v;
                            v = 0 !== yi(k.split(".")).length ? k.split(".")[2] : void 0;
                            r[f] = [v];
                            ti(r, !0, b, n, p);
                        }
                    });
                });
            }
        };

    function Bi(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1;
    }
    var Ci = function(a) {
        function b(e, f, g) {
            g && (e[f] = g);
        }
        if (Ne()) {
            var c = si();
            if (Bi(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                ci(function() {
                    return d;
                }, 3);
                ci(function() {
                    var e = {};
                    return (e._up = "1"), e;
                }, 1);
            }
        }
    };

    function Di(a, b) {
        var c = qi(b),
            d = vi(a, c);
        if (!d) return 0;
        for (var e = li(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f;
    }

    function Ei(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b;
    }
    var Fi = function(a) {
            var b = [];
            Ba(a, function(c, d) {
                d = pi(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ra);
                e.length && b.push(c + ":" + e.join(","));
            });
            return b.join(";");
        },
        Hi = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = Gi("gcl" + a);
                if (d) return d.split(".");
            }
            var e = qi(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !ff(P.C) && c,
                    g;
                g = si()[a] || [];
                if (0 < g.length) return f ? ["0"] : g;
            }
            var l = vi(a, e);
            return l ? mi(l) : [];
        },
        Gi = function(a) {
            var b = og(B.location.href),
                c = mg(b, "host", !1);
            if (c && c.match(Ii)) {
                var d = mg(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0];
            }
        },
        Ji = function(a, b) {
            Me(P.C) ?
                ff(P.C) ?
                a() :
                Se(a, P.C) :
                b ?
                Ed(42) :
                kf(
                    function() {
                        Ji(a, !0);
                    }, [P.C]
                );
        },
        Ii = /^\d+\.fls\.doubleclick\.net$/,
        Ki = !1;
    var Li = function(a, b) {
            return Hi("aw", a, b);
        },
        Mi = function(a, b) {
            return Hi("dc", a, b);
        },
        Ni = function(a) {
            var b = Gi("gac");
            return b ?
                !ff(P.C) && a ?
                "0" :
                decodeURIComponent(b) :
                Fi(ji() ? ph() : {});
        },
        Oi = function(a) {
            var b = Gi("gacgb");
            return b ?
                !ff(P.C) && a ?
                "0" :
                decodeURIComponent(b) :
                Fi(ji() ? ph("_gac_gb", !0) : {});
        },
        Pi = function(a) {
            var b = si(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d ||
                ("aw.ds" !== f && "aw" !== f && "ds" !== f) ||
                c.push({ ra: d, Be: f });
            e && c.push({ ra: e, Be: "ds" });
            if (!Ki) {}
            Ji(function() {
                nh(a);
                var g = kh[lh(a.prefix)];
                if (g && 0 < c.length)
                    for (
                        var l = (U.joined_auid = U.joined_auid || {}), k = 0; k < c.length; k++
                    ) {
                        var n = c[k],
                            p = n.ra,
                            r = n.Be,
                            v = (a.prefix || "_gcl") + "." + r + "." + p;
                        if (!l[v]) {
                            var t = "https://adservice.google.com/pagead/regclk";
                            t =
                                "gb" === r ?
                                t + "?gbraid=" + p + "&auid=" + g :
                                t + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + r;
                            Mb(t);
                            l[v] = !0;
                        }
                    }
            });
        },
        Qi = function(a) {
            var b;
            if (Gi("gclaw") || Gi("gac") || 0 < (si().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (si().gb || []).length) c = !0;
                else {
                    var d = Math.max(Di("aw", a), Ei(ji() ? ph() : {}));
                    c = Math.max(Di("gb", a), Ei(ji() ? ph("_gac_gb", !0) : {})) > d;
                }
                b = c;
            }
            return b;
        };
    var $i = !1,
        aj = 0,
        bj = [];

    function cj(a) {
        if (!$i) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || (!b && d)) {
                $i = !0;
                for (var e = 0; e < bj.length; e++) H(bj[e]);
            }
            bj.push = function() {
                for (var f = 0; f < arguments.length; f++) H(arguments[f]);
                return 0;
            };
        }
    }

    function dj() {
        if (!$i && 140 > aj) {
            aj++;
            try {
                G.documentElement.doScroll("left"), cj();
            } catch (a) {
                B.setTimeout(dj, 50);
            }
        }
    }
    var ej = function(a) {
        $i ? a() : bj.push(a);
    };
    var gj = function(a, b) {
            this.m = !1;
            this.D = [];
            this.I = { tags: [] };
            this.X = !1;
            this.o = this.s = 0;
            fj(this, a, b);
        },
        hj = function(a, b, c, d) {
            if (Hd.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Vb(d) && (e = O(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1;
        },
        ij = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && ((e.status = c), (e.executionTime = d));
        },
        jj = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0;
            }
        },
        fj = function(a, b, c) {
            sa(b) && kj(a, b);
            c &&
                B.setTimeout(function() {
                    return jj(a);
                }, Number(c));
        },
        kj = function(a, b) {
            var c = Ra(function() {
                return H(function() {
                    b(S.J, a.I);
                });
            });
            a.m ? c() : a.D.push(c);
        },
        lj = function(a) {
            a.s++;
            return Ra(function() {
                a.o++;
                a.X && a.o >= a.s && jj(a);
            });
        };
    var mj = function() {
            function a(d) {
                return !ua(d) || 0 > d ? 0 : d;
            }
            if (!U._li && B.performance && B.performance.timing) {
                var b = B.performance.timing.navigationStart,
                    c = ua(ge.get("gtm.start")) ? ge.get("gtm.start") : 0;
                U._li = { cst: a(c - b), cbt: a(Nd - b) };
            }
        },
        nj = function(a) {
            B.performance && B.performance.mark(S.J + "_" + a + "_start");
        },
        oj = function(a) {
            if (B.performance) {
                var b = S.J + "_" + a + "_start",
                    c = S.J + "_" + a + "_duration";
                B.performance.measure(c, b);
                var d = B.performance.getEntriesByName(c)[0];
                B.performance.clearMarks(b);
                B.performance.clearMeasures(c);
                var e = U._p || {};
                void 0 === e[a] && ((e[a] = d.duration), (U._p = e));
                return d.duration;
            }
        },
        pj = function() {
            if (B.performance && B.performance.now) {
                var a = U._p || {};
                a.PAGEVIEW = B.performance.now();
                U._p = a;
            }
        };
    var qj = {},
        rj = function() {
            return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject];
        },
        sj = !1;
    var tj = function(a) {
            B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
            var b = B.GoogleAnalyticsObject;
            if (B[b]) B.hasOwnProperty(b) || Ed(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments);
                };
                c.l = Number(Oa());
                B[b] = c;
            }
            mj();
            return B[b];
        },
        uj = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = rj();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d);
        },
        vj = function(a) {
            if (!Ne()) return;
            var b = rj();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0);
        };

    function wj() {
        return B.GoogleAnalyticsObject || "ga";
    }
    var xj = function(a) {},
        yj = function(a, b) {
            return function() {
                var c = rj(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k &&
                            (f.set(
                                    "hitPayload",
                                    g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0
                                ),
                                f.set("hitCallback", void 0, !0));
                        e(f);
                        k &&
                            (f.set("hitPayload", g, !0),
                                f.set("hitCallback", l, !0),
                                f.set("_x_19", void 0, !0),
                                e(f));
                    });
                }
            };
        };
    var Fj = function(a) {},
        Jj = function(a) {},
        Kj = function() {
            return (
                "&tc=" +
                Ac.filter(function(a) {
                    return a;
                }).length
            );
        },
        Nj = function() {
            2022 <= Lj().length && Mj();
        },
        Oj = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
        },
        Qj = function() {
            Pj || (Pj = B.setTimeout(Mj, 500));
        },
        Mj = function() {
            Pj && (B.clearTimeout(Pj), (Pj = void 0));
            void 0 === Rj ||
                (Sj[Rj] && !Tj && !Uj) ||
                (Vj[Rj] || Wj.Ki() || 0 >= Xj--
                    ?
                    (Ed(1), (Vj[Rj] = !0)) :
                    (Wj.ej(),
                        Fb(Lj(!0)),
                        (Sj[Rj] = !0),
                        (Yj = Zj = ak = Uj = Tj = "")));
        },
        Lj = function(a) {
            var b = Rj;
            if (void 0 === b) return "";
            var c = Dd("GTM"),
                d = Dd("TAGGING");
            return [
                bk,
                Sj[b] ? "" : "&es=1",
                ck[b],
                Fj(b),
                c ? "&u=" + c : "",
                d ? "&ut=" + d : "",
                Kj(),
                Tj,
                Uj,
                ak,
                Zj,
                Jj(a),
                Yj,
                "&z=0",
            ].join("");
        },
        ek = function() {
            bk = dk();
        },
        dk = function() {
            return [Od, "&v=3&t=t", "&pid=" + ya(), "&rv=" + S.ed].join("");
        },
        Ij = ["L", "S", "Y"],
        Ej = ["S", "E"],
        fk = { sampleRate: "0.005000", Sg: "", Rg: Number("5") },
        gk =
        0 <= G.location.search.indexOf("?gtm_latency=") ||
        0 <= G.location.search.indexOf("&gtm_latency="),
        hk;
    if (!(hk = gk)) {
        var ik = Math.random(),
            jk = fk.sampleRate;
        hk = ik < jk;
    }
    var kk = hk,
        lk = {
            label: S.J + " Container",
            children: [{ label: "Initialization", children: [] }],
        },
        bk = dk(),
        Sj = {},
        Tj = "",
        Uj = "",
        Yj = "",
        Zj = "",
        Hj = {},
        Gj = !1,
        Dj = {},
        mk = {},
        ak = "",
        Rj = void 0,
        ck = {},
        Vj = {},
        Pj = void 0,
        nk = 5;
    0 < fk.Rg && (nk = fk.Rg);
    var Wj = (function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Ki: function() {
                    return c < a ? !1 : m() - d[c % a] < b;
                },
                ej: function() {
                    var f = c++ % a;
                    d[f] = m();
                },
            };
        })(nk, 1e3),
        Xj = 1e3,
        pk = function(a, b) {
            if (kk && !Vj[a] && Rj !== a) {
                Mj();
                Rj = a;
                Yj = Tj = "";
                ck[a] = "&e=" + Oj(b) + "&eid=" + a;
                Qj();
            }
        },
        qk = function(a, b, c, d) {
            if (kk && b) {
                var e,
                    f = String(b[Xb.sb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Vj[a]) {
                    a !== Rj && (Mj(), (Rj = a));
                    Tj = Tj ? Tj + "." + g : "&tr=" + g;
                    var l = b["function"];
                    if (!l)
                        throw Error("Error: No function name given for function call.");
                    var k = (Cc[l] ? "1" : "2") + e;
                    Yj = Yj ? Yj + "." + k : "&ti=" + k;
                    Qj();
                    Nj();
                }
            }
        };
    var xk = function(a, b, c) {
            if (kk && !Vj[a]) {
                a !== Rj && (Mj(), (Rj = a));
                var d = c + b;
                Uj = Uj ? Uj + "." + d : "&epr=" + d;
                Qj();
                Nj();
            }
        },
        yk = function(a, b, c) {};

    function zk(a, b, c, d) {
        var e = Ac[a],
            f = Ak(a, b, c, d);
        if (!f) return null;
        var g = Hc(e[Xb.Pf], c, []);
        if (g && g.length) {
            var l = g[0];
            f = zk(
                l.index, {
                    onSuccess: f,
                    onFailure: 1 === l.ig ? b.terminate : f,
                    terminate: b.terminate,
                },
                c,
                d
            );
        }
        return f;
    }

    function Ak(a, b, c, d) {
        function e() {
            if (f[Xb.Nh]) l();
            else {
                var x = Ic(f, c, []);
                var z = x[Xb.Xg];
                if (null != z)
                    for (var w = 0; w < z.length; w++)
                        if (!ff(z[w])) {
                            l();
                            return;
                        }
                var y = hj(c.tb, String(f[Xb.sb]), Number(f[Xb.Qf]), x[Xb.Oh]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var D = m() - F;
                        qk(c.id, Ac[a], "5", D);
                        ij(c.tb, y, "success", D);
                        g();
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var D = m() - F;
                        qk(c.id, Ac[a], "6", D);
                        ij(c.tb, y, "failure", D);
                        l();
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                qk(c.id, f, "1");
                var C = function() {
                    var D = m() - F;
                    qk(c.id, f, "7", D);
                    ij(c.tb, y, "exception", D);
                    A || ((A = !0), l());
                };
                var F = m();
                try {
                    Gc(x, { event: c, index: a, type: 1 });
                } catch (D) {
                    C(D);
                }
            }
        }
        var f = Ac[a],
            g = b.onSuccess,
            l = b.onFailure,
            k = b.terminate;
        if (c.Ie(f)) return null;
        var n = Hc(f[Xb.Rf], c, []);
        if (n && n.length) {
            var p = n[0],
                r = zk(p.index, { onSuccess: g, onFailure: l, terminate: k }, c, d);
            if (!r) return null;
            g = r;
            l = 2 === p.ig ? k : r;
        }
        if (f[Xb.Lf] || f[Xb.Sh]) {
            var v = f[Xb.Lf] ? Bc : c.oj,
                t = g,
                q = l;
            if (!v[a]) {
                e = Ra(e);
                var u = Bk(a, v, e);
                g = u.onSuccess;
                l = u.onFailure;
            }
            return function() {
                v[a](t, q);
            };
        }
        return e;
    }

    function Bk(a, b, c) {
        var d = [],
            e = [];
        b[a] = Ck(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Dk;
                for (var f = 0; f < d.length; f++) d[f]();
            },
            onFailure: function() {
                b[a] = Ek;
                for (var f = 0; f < e.length; f++) e[f]();
            },
        };
    }

    function Ck(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c();
        };
    }

    function Dk(a) {
        a();
    }

    function Ek(a, b) {
        b();
    }
    var Hk = function(a, b) {
        for (var c = [], d = 0; d < Ac.length; d++)
            if (a[d]) {
                var e = Ac[d];
                var f = lj(b.tb);
                try {
                    var g = zk(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        var l = c,
                            k = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var r = Cc[p];
                        k.call(l, {
                            Kg: n,
                            zg: r ? r.priorityOverride || 0 : 0,
                            execute: g,
                        });
                    } else Fk(d, b), f();
                } catch (q) {
                    f();
                }
            }
        var v = b.tb;
        v.X = !0;
        v.o >= v.s && jj(v);
        c.sort(Gk);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length;
    };

    function Gk(a, b) {
        var c,
            d = b.zg,
            e = a.zg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Kg,
                l = b.Kg;
            f = g > l ? 1 : g < l ? -1 : 0;
        }
        return f;
    }

    function Fk(a, b) {
        if (!kk) return;
        var c = function(d) {
            var e = b.Ie(Ac[d]) ? "3" : "4",
                f = Hc(Ac[d][Xb.Pf], b, []);
            f && f.length && c(f[0].index);
            qk(b.id, Ac[d], e);
            var g = Hc(Ac[d][Xb.Rf], b, []);
            g && g.length && c(g[0].index);
        };
        c(a);
    }
    var Ik = !1,
        Ok = function(a) {
            var b = m(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (Ik) return !1;
                Ik = !0;
            }
            var g = ve(c),
                l = !1;
            if (!g.active) {
                if ("gtm.js" !== d) return !1;
                l = !0;
                g = ve(Number.MAX_SAFE_INTEGER);
            }
            pk(c, d);
            var k = a.eventCallback,
                n = a.eventTimeout,
                p = k;
            var r = {
                id: c,
                name: d,
                Ie: te(g.isAllowed),
                oj: [],
                sg: function() {
                    Ed(6);
                },
                bg: Jk(c),
                tb: new gj(p, n),
            };
            r.ag = Kk();
            Lk(c, r.tb);
            var v = Mc(r);
            l && (v = Mk(v));
            var t = Hk(v, r);
            ("gtm.js" !== d && "gtm.sync" !== d) || xj(S.J);
            return Nk(v, t);
        };

    function Jk(a) {
        return function(b) {
            kk && (Wb(b) || yk(a, "input", b));
        };
    }

    function Lk(a, b) {
        ke(a, "event", 1);
        ke(a, "ecommerce", 1);
        ke(a, "gtm");
        ke(a, "eventModel");
    }

    function Kk() {
        var a = {};
        a.event = je("event", 1);
        a.ecommerce = je("ecommerce", 1);
        a.gtm = je("gtm");
        a.eventModel = je("eventModel");
        return a;
    }

    function Mk(a) {
        for (var b = [], c = 0; c < a.length; c++)
            a[c] && Gd[String(Ac[c][Xb.sb])] && (b[c] = !0);
        return b;
    }

    function Nk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Ac[c] && !Hd[String(Ac[c][Xb.sb])]) return !0;
        return !1;
    }

    function Pk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") &&
                0 !== c.indexOf("https://") &&
                (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return og("" + c + b).href;
        }
    }

    function Qk(a, b) {
        return Rk() ? Pk(a, b) : void 0;
    }

    function Rk() {
        var a = !1;
        return a;
    }

    function Sk() {
        return !!S.fd && "SGTM_TOKEN" !== S.fd.replaceAll("@@", "");
    }
    var Tk = function() {
        var a = !1;
        return a;
    };
    var Uk;
    if (3 === S.ed.length) Uk = "g";
    else {
        var Vk = "G";
        Uk = Vk;
    }
    var Wk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Uk,
            OPT: "o",
        },
        Xk = function(a) {
            var b = S.J.split("-"),
                c = b[0].toUpperCase(),
                d = Wk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === S.ed.length) {
                var g = "w";
                f = "2" + g;
            } else f = "";
            return f + d + S.ed + e;
        };

    function Yk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c;
    }
    var Zk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1);
    };

    function $k() {
        return ib("iPhone") && !ib("iPod") && !ib("iPad");
    }
    ib("Opera");
    ib("Trident") || ib("MSIE");
    ib("Edge");
    !ib("Gecko") ||
        (-1 != fb.toLowerCase().indexOf("webkit") && !ib("Edge")) ||
        ib("Trident") ||
        ib("MSIE") ||
        ib("Edge"); -
    1 != fb.toLowerCase().indexOf("webkit") && !ib("Edge") && ib("Mobile");
    ib("Macintosh");
    ib("Windows");
    ib("Linux") || ib("CrOS");
    var al = na.navigator || null;
    al && (al.appVersion || "").indexOf("X11");
    ib("Android");
    $k();
    ib("iPad");
    ib("iPod");
    $k() || ib("iPad") || ib("iPod");
    fb.toLowerCase().indexOf("kaios");
    var bl = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b]);
                } catch (l) {
                    e = !1;
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a;
                        }
                    } catch (l) {}
                    f = null;
                }
                if (!(c = f)) break;
            }
            return null;
        },
        cl = function(a) {
            var b = G;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c, d;
            d = void 0 === d ? document : d;
            c = d.createElement("meta");
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c;
        };
    var dl = function() {};
    var el = function(a) {
            void 0 !== a.addtlConsent &&
                "string" !== typeof a.addtlConsent &&
                (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies &&
                "boolean" !== typeof a.gdprApplies &&
                (a.gdprApplies = void 0);
            return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
                (void 0 !== a.listenerId && "number" !== typeof a.listenerId) ?
                2 :
                a.cmpStatus && "error" !== a.cmpStatus ?
                0 :
                3;
        },
        fl = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.X = 0;
            this.I = void 0 === b ? 500 : b;
            this.s = null;
        };
    ma(fl, dl);
    var hl = function(a) {
        return "function" === typeof a.o.__tcfapi || null != gl(a);
    };
    fl.prototype.addEventListener = function(a) {
        var b = {},
            c = tb(function() {
                return a(b);
            }),
            d = 0; -
        1 !== this.I &&
            (d = setTimeout(function() {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c();
            }, this.I));
        var e = function(f, g) {
            clearTimeout(d);
            f
                ?
                ((b = f),
                    (b.internalErrorState = el(b)),
                    (g && 0 === b.internalErrorState) ||
                    ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3))) :
                ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
            a(b);
        };
        try {
            il(this, "addEventListener", e);
        } catch (f) {
            (b.tcString = "tcunavailable"),
            (b.internalErrorState = 3),
            d && (clearTimeout(d), (d = 0)),
                c();
        }
    };
    fl.prototype.removeEventListener = function(a) {
        a && a.listenerId && il(this, "removeEventListener", null, a.listenerId);
    };
    var kl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a;
                    }
                }
                e = void 0;
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ?
                ((l = 0), 2 === g && (l = 1)) :
                3 === c && ((l = 1), 1 === g && (l = 0));
            var k;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = jl(a.vendor.consents, void 0 === d ? "755" : d);
                    k =
                        n &&
                        "1" === b &&
                        a.purposeOneTreatment &&
                        ((Ce(ze) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ?
                        !0 :
                        n && jl(a.purpose.consents, b);
                } else k = !0;
            else
                k =
                1 === l ?
                a.purpose && a.vendor ?
                jl(a.purpose.legitimateInterests, b) &&
                jl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) :
                !0 :
                !0;
            return k;
        },
        jl = function(a, b) {
            return !(!a || !a[b]);
        },
        il = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d);
            } else if (gl(a)) {
                ll(a);
                var f = ++a.X;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage(
                        ((g.__tcfapiCall = {
                                command: b,
                                version: 2,
                                callId: f,
                                parameter: d,
                            }),
                            g),
                        "*"
                    );
                }
            } else c({}, !1);
        },
        gl = function(a) {
            if (a.m) return a.m;
            a.m = bl(a.o, "__tcfapiLocator");
            return a.m;
        },
        ll = function(a) {
            a.s ||
                ((a.s = function(b) {
                        try {
                            var c;
                            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
                                .__tcfapiReturn;
                            a.D[c.callId](c.returnValue, c.success);
                        } catch (d) {}
                    }),
                    Zk(a.o, a.s));
        };
    var ml = !0;
    ml = !1;
    Be().m(ze.m);
    var nl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        ol = Yk("", 550),
        pl = Yk("", 500);

    function ql() {
        var a = U.tcf || {};
        return (U.tcf = a);
    }
    var rl = function(a, b) {
            this.s = a;
            this.m = b;
            this.o = m();
        },
        sl = function(a) {},
        tl = function(a) {},
        zl = function() {
            var a = ql(),
                b = new fl(B, ml ? 3e3 : -1),
                c = new rl(b, a);
            if (
                (ul() ?
                    !0 === B.gtag_enable_tcf_support :
                    !1 !== B.gtag_enable_tcf_support) &&
                !a.active &&
                ("function" === typeof B.__tcfapi || hl(b))
            ) {
                a.active = !0;
                a.Dc = {};
                vl();
                var d = null;
                ml
                    ?
                    (d = B.setTimeout(function() {
                        wl(a);
                        xl(a);
                        d = null;
                    }, pl)) :
                    (a.tcString = "tcunavailable");
                try {
                    b.addEventListener(function(e) {
                            d && (clearTimeout(d), (d = null));
                            if (0 !== e.internalErrorState) wl(a), xl(a), sl(c);
                            else {
                                var f;
                                a.gdprApplies = e.gdprApplies;
                                if (!1 === e.gdprApplies)(f = yl()), b.removeEventListener(e);
                                else if (
                                    "tcloaded" === e.eventStatus ||
                                    "useractioncomplete" === e.eventStatus ||
                                    "cmpuishown" === e.eventStatus
                                ) {
                                    var g = {},
                                        l;
                                    for (l in nl)
                                        if (nl.hasOwnProperty(l))
                                            if ("1" === l) {
                                                var k,
                                                    n = e,
                                                    p = !0;
                                                p = void 0 === p ? !1 : p;
                                                var r;
                                                var v = n;
                                                !1 === v.gdprApplies ?
                                                    (r = !0) :
                                                    (void 0 === v.internalErrorState &&
                                                        (v.internalErrorState = el(v)),
                                                        (r =
                                                            "error" === v.cmpStatus ||
                                                            0 !== v.internalErrorState ||
                                                            ("loaded" === v.cmpStatus &&
                                                                ("tcloaded" === v.eventStatus ||
                                                                    "useractioncomplete" === v.eventStatus)) ?
                                                            !0 :
                                                            !1));
                                                k = r ?
                                                    !1 === n.gdprApplies ||
                                                    "tcunavailable" === n.tcString ||
                                                    (void 0 === n.gdprApplies && !p) ||
                                                    "string" !== typeof n.tcString ||
                                                    !n.tcString.length ?
                                                    !0 :
                                                    kl(n, "1", 0) :
                                                    !1;
                                                g["1"] = k;
                                            } else g[l] = kl(e, l, nl[l]);
                                    f = g;
                                }
                                f &&
                                    ((a.tcString = e.tcString || "tcempty"),
                                        (a.Dc = f),
                                        xl(a),
                                        sl(c));
                            }
                        }),
                        tl(c);
                } catch (e) {
                    d && (clearTimeout(d), (d = null)), wl(a), xl(a);
                }
            }
        };

    function wl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        ml && (a.Dc = yl());
    }

    function vl() {
        var a = {},
            b = ((a.ad_storage = "denied"), (a.wait_for_update = ol), a);
        cf(b);
    }
    var ul = function() {
        var a = !1;
        a = !0;
        return a;
    };

    function yl() {
        var a = {},
            b;
        for (b in nl) nl.hasOwnProperty(b) && (a[b] = !0);
        return a;
    }

    function xl(a) {
        var b = {},
            c = ((b.ad_storage = a.Dc["1"] ? "granted" : "denied"), b);
        ef(c, 0, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Al() });
    }
    var Bl = function() {
            var a = ql();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
        },
        Al = function() {
            var a = ql();
            return a.active ? a.tcString || "" : "";
        },
        Cl = function() {
            var a = ql();
            return a.active && void 0 !== a.gdprApplies ?
                a.gdprApplies ?
                "1" :
                "0" :
                "";
        },
        Dl = function(a) {
            if (!nl.hasOwnProperty(String(a))) return !0;
            var b = ql();
            return b.active && b.Dc ? !!b.Dc[String(a)] : !0;
        };
    var El = function(a, b) {
            var c = a && !ff(P.C);
            return b && c ? "0" : b;
        },
        Jl = function(a) {
            function b(q) {
                var u;
                U.reported_gclid || (U.reported_gclid = {});
                u = U.reported_gclid;
                var x,
                    z = g;
                x = !g || (Ne() && !ff(P.C)) ?
                    k + (q ? "gcu" : "gcs") :
                    k + "." + (f.prefix || "_gcl") + (q ? "gcu" : "gcs");
                if (!u[x]) {
                    u[x] = !0;
                    var w = [],
                        y = {},
                        A = function(N, M) {
                            M && (w.push(N + "=" + encodeURIComponent(M)), (y[N] = !0));
                        },
                        C = "https://www.google.com";
                    if (Ne()) {
                        var F = ff(P.C);
                        A("gcs", gf());
                        q && A("gcu", "1");
                        Oe() && A("gcd", hf());
                        U.dedupe_gclid || (U.dedupe_gclid = "" + dh());
                        A("rnd", U.dedupe_gclid);
                        if ((!k || (n && "aw.ds" !== n)) && ff(P.C)) {
                            var D = mi("_gcl_aw");
                            A("gclaw", D.join("."));
                        }
                        A("url", String(B.location).split(/[?#]/)[0]);
                        A("dclid", El(d, p));
                        var E = !1;
                        E = !0;
                        F || (!d && !E) || (C = "https://pagead2.googlesyndication.com");
                    }
                    A("gdpr_consent", Al()), A("gdpr", Cl());
                    "1" === Xh(!1)._up && A("gtm_up", "1");
                    A("gclid", El(d, k));
                    A("gclsrc", n);
                    if (!(y.gclid || y.dclid || y.gclaw) &&
                        (A("gbraid", El(d, r)),
                            y.gbraid && Gl && (z = !1), !y.gbraid && Ne() && ff(P.C))
                    ) {
                        var L = mi("_gcl_gb");
                        0 < L.length && (A("gclgb", L.join(".")), Gl && (z = !1));
                    }
                    A("gtm", Xk(!e));
                    g && ff(P.C) && (nh(f || {}), z && A("auid", kh[lh(f.prefix)] || ""));
                    Hl || (a.md && A("did", a.md)),
                        Il && (a.Sb && A("gdid", a.Sb), a.Rb && A("edid", a.Rb));
                    var J = C + "/pagead/landing?" + w.join("&");
                    Mb(J);
                }
            }
            var c = !!a.we,
                d = !!a.Ga,
                e = a.R,
                f = void 0 === a.ub ? {} : a.ub,
                g = void 0 === a.vd ? !0 : a.vd,
                l = si(),
                k = l.gclid || "",
                n = l.gclsrc,
                p = l.dclid || "",
                r = l.gbraid || "",
                v = !c && ((!k || (n && "aw.ds" !== n) ? !1 : !0) || r),
                t = Ne();
            if (v || t)
                t ?
                kf(
                    function() {
                        b();
                        ff(P.C) ||
                            jf(function(q) {
                                return b(!0, q.consentEventId);
                            }, P.C);
                    }, [P.C]
                ) :
                b();
        },
        Fl = function(a) {
            var b = String(B.location).split(/[?#]/)[0],
                c = S.$g || B._CONSENT_MODE_SALT;
            return a ? (c ? String(Ng(b + a + c)) : "0") : "";
        },
        Hl = !1;
    var Il = !1;
    Il = !0;
    var Gl = !1;
    var Ml = !1;
    Ml = !0;
    var Nl = !1;
    var Ol = function() {
            this.m = {};
        },
        Pl = function(a, b, c) {
            null != c && (a.m[b] = c);
        },
        Ql = function(a) {
            return Object.keys(a.m)
                .map(function(b) {
                    return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]);
                })
                .join("&");
        },
        Sl = function(a, b, c, d, e) {};
    var Ul = /[A-Z]+/,
        Vl = /\s/,
        Wl = function(a) {
            if (ta(a)) {
                a = Na(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ul.test(c)) {
                        var d = !1;
                        d = !0;
                        for (
                            var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++
                        )
                            if (!e[f] || (Vl.test(e[f]) && ("AW" !== c || 1 !== f || !d)))
                                return;
                        return { id: a, prefix: c, containerId: c + "-" + e[0], M: e };
                    }
                }
            }
        },
        Yl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Wl(a[c]);
                d && (b[d.id] = d);
            }
            Xl(b);
            var e = [];
            Ba(b, function(f, g) {
                e.push(g);
            });
            return e;
        };

    function Xl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId);
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]];
    }
    var $l = function(a, b, c, d) {
            return (2 === Zl() || d || "http:" != B.location.protocol ? a : b) + c;
        },
        Zl = function() {
            var a = Db(),
                b;
            if (1 === a)
                a: {
                    var c = Kd;
                    c = c.toLowerCase();
                    for (
                        var d = "https://" + c,
                            e = "http://" + c,
                            f = 1,
                            g = G.getElementsByTagName("script"),
                            l = 0; l < g.length && 100 > l; l++
                    ) {
                        var k = g[l].src;
                        if (k) {
                            k = k.toLowerCase();
                            if (0 === k.indexOf(e)) {
                                b = 3;
                                break a;
                            }
                            1 === f && 0 === k.indexOf(d) && (f = 2);
                        }
                    }
                    b = f;
                }
            else b = a;
            return b;
        };
    var bm = function(a, b, c) {
            if (B[a.functionName]) return b.Ne && H(b.Ne), B[a.functionName];
            var d = am();
            B[a.functionName] = d;
            if (a.jd)
                for (var e = 0; e < a.jd.length; e++) B[a.jd[e]] = B[a.jd[e]] || am();
            a.ud && void 0 === B[a.ud] && (B[a.ud] = c);
            Cb($l("https://", "http://", a.Te), b.Ne, b.Vi);
            return d;
        },
        am = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments);
            };
            return a;
        },
        cm = {
            functionName: "_googWcmImpl",
            ud: "_googWcmAk",
            Te: "www.gstatic.com/wcm/loader.js",
        },
        dm = {
            functionName: "_gaPhoneImpl",
            ud: "ga_wpid",
            Te: "www.gstatic.com/gaphone/loader.js",
        },
        em = { Wg: "", Th: "5" },
        fm = {
            functionName: "_googCallTrackingImpl",
            jd: [dm.functionName, cm.functionName],
            Te: "www.gstatic.com/call-tracking/call-tracking_" +
                (em.Wg || em.Th) +
                ".js",
        },
        gm = {},
        hm = function(a, b, c, d) {
            Ed(22);
            if (c) {
                d = d || {};
                var e = bm(cm, d, a),
                    f = { ak: a, cl: b };
                void 0 === d.Pa && (f.autoreplace = c);
                e(2, d.Pa, f, c, 0, Oa(), d.options);
            }
        },
        im = function(a, b, c, d) {
            Ed(21);
            if (b && c) {
                d = d || {};
                for (
                    var e = {
                            countryNameCode: c,
                            destinationNumber: b,
                            retrievalTime: Oa(),
                        },
                        f = 0; f < a.length; f++
                ) {
                    var g = a[f];
                    gm[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ?
                            ((e.adData = { ak: g.M[0], cl: g.M[1] }), (gm[g.id] = !0)) :
                            g &&
                            "UA" === g.prefix &&
                            !e.gaData &&
                            ((e.gaData = { gaWpid: g.containerId }), (gm[g.id] = !0)));
                }
                (e.gaData || e.adData) && bm(fm, d)(d.Pa, e, d.options);
            }
        },
        jm = function() {
            var a = !1;
            return a;
        },
        km = function(a, b) {
            if (a)
                if (Tk()) {} else {
                    if (ta(a)) {
                        var c = Wl(a);
                        if (!c) return;
                        a = c;
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(P.Bh);
                    if (f && wa(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = Wl(f[g]);
                            l &&
                                (d.push(l),
                                    (a.id === l.id ||
                                        (a.id === a.containerId &&
                                            a.containerId === l.containerId)) &&
                                    (e = !0));
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(P.Cf),
                            n;
                        if (k) {
                            wa(k) ? (n = k) : (n = [k]);
                            var p = b.getWithConfig(P.Af),
                                r = b.getWithConfig(P.Bf),
                                v = b.getWithConfig(P.Df),
                                t = b.getWithConfig(P.Ah),
                                q = p || r,
                                u = 1;
                            "UA" !== a.prefix || d || (u = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < u)
                                    if (d) im(d, n[x], t, { Pa: q, options: v });
                                    else if ("AW" === a.prefix && a.M[1])
                                jm() ?
                                im([a], n[x], t || "US", { Pa: q, options: v }) :
                                hm(a.M[0], a.M[1], n[x], { Pa: q, options: v });
                            else if ("UA" === a.prefix)
                                if (jm()) im([a], n[x], t || "US", { Pa: q });
                                else {
                                    var z = a.containerId,
                                        w = n[x],
                                        y = { Pa: q };
                                    Ed(23);
                                    if (w) {
                                        y = y || {};
                                        var A = bm(dm, y, z),
                                            C = {};
                                        void 0 !== y.Pa ? (C.receiver = y.Pa) : (C.replace = w);
                                        C.ga_wpid = z;
                                        C.destination = w;
                                        A(2, Oa(), C);
                                    }
                                }
                        }
                    }
                }
        };
    var sn = function() {
            var a = !0;
            (Dl(7) && Dl(9) && Dl(10)) || (a = !1);
            var b = !0;
            b = !1;
            b && !rn() && (a = !1);
            return a;
        },
        rn = function() {
            var a = !0;
            (Dl(3) && Dl(4)) || (a = !1);
            return a;
        };
    var wn = function(a, b) {},
        xn = function(a, b) {
            var c = a[P.Mb];
            uj(
                b + ".",
                a[P.N] || "",
                void 0 === c ? !!a.use_anchor : "fragment" === c, !!a[P.ob]
            );
        },
        Bn = function(a, b, c) {
            if (Ne() && (!c.isGtmEvent || !yn[a])) {
                var d = !ff(P.H),
                    e = function() {
                        var f,
                            g,
                            l = rj(),
                            k = zn(b, "", c),
                            n,
                            p = k.Aa._useUp;
                        if (c.isGtmEvent || An(b, k.Aa)) {
                            var r = !0;
                            if (c.isGtmEvent) {
                                f = "gtm" + Rd();
                                g = k.Aa;
                                k.gtmTrackerName && (g.name = f);
                                r = !1;
                                r = !0;
                            }
                            r &&
                                l(function() {
                                    var t = l.getByName(b);
                                    t && (n = t.get("clientId"));
                                    c.isGtmEvent || l.remove(b);
                                });
                            l("create", a, c.isGtmEvent ? g : k.Aa);
                            d &&
                                ff(P.H) &&
                                ((d = !1),
                                    l(function() {
                                        var t = rj().getByName(c.isGtmEvent ? f : b);
                                        !t ||
                                            (t.get("clientId") == n && p) ||
                                            (c.isGtmEvent ? (k.sc["&gcu"] = "1") : (k.ka["&gcu"] = "1"),
                                                t.set(k.sc),
                                                c.isGtmEvent ?
                                                t.send("pageview") :
                                                t.send("pageview", k.ka));
                                    }));
                            c.isGtmEvent &&
                                l(function() {
                                    l.remove(f);
                                });
                        }
                    };
                Se(e, P.H);
                Se(e, P.C);
                c.isGtmEvent && (yn[a] = !0);
            }
        },
        Cn = function(a, b) {
            Sk() && b && (a[P.mb] = b);
        },
        Ln = function(a, b, c) {
            function d() {
                var J = c.getWithConfig(P.bc);
                l(function() {
                    if (!c.isGtmEvent && Vb(J)) {
                        var N = q.ka,
                            M = k().getByName(n),
                            I;
                        for (I in J)
                            if (
                                J.hasOwnProperty(I) &&
                                /^(dimension|metric)\d+$/.test(I) &&
                                void 0 != J[I]
                            ) {
                                var K = M.get(vn(J[I]));
                                Dn(N, I, K);
                            }
                    }
                });
            }

            function e() {
                if (q.displayfeatures) {
                    var J = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, { cookieName: J });
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                l = c.isGtmEvent ? tj(c.getWithConfig("gaFunctionName")) : tj();
            if (sa(l)) {
                var k = rj,
                    n;
                c.isGtmEvent ?
                    (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName")) :
                    (n = "gtag_" + f.split("-").join("_"));
                var p = function(J) {
                        var N = [].slice.call(arguments, 0);
                        N[0] = n ? n + "." + N[0] : "" + N[0];
                        l.apply(window, N);
                    },
                    r = function(J) {
                        var N = function(ca, pa) {
                                for (var oa = 0; pa && oa < pa.length; oa++) p(ca, pa[oa]);
                            },
                            M = c.isGtmEvent,
                            I = M ? En(q) : Fn(b, c);
                        if (I) {
                            var K = {};
                            Cn(K, J);
                            p("require", "ec", "ec.js", K);
                            M && I.ye && p("set", "&cu", I.ye);
                            var Q = I.action;
                            if (M || "impressions" === Q)
                                if ((N("ec:addImpression", I.pg), !M)) return;
                            if ("promo_click" === Q || "promo_view" === Q || (M && I.Cc)) {
                                var V = I.Cc;
                                N("ec:addPromo", V);
                                if (V && 0 < V.length && "promo_click" === Q) {
                                    M ? p("ec:setAction", Q, I.$a) : p("ec:setAction", Q);
                                    return;
                                }
                                if (!M) return;
                            }
                            "promo_view" !== Q &&
                                "impressions" !== Q &&
                                (N("ec:addProduct", I.yb), p("ec:setAction", Q, I.$a));
                        }
                    },
                    v = function(J) {
                        if (J) {
                            var N = {};
                            if (Vb(J))
                                for (var M in Gn) Gn.hasOwnProperty(M) && Hn(Gn[M], M, J[M], N);
                            p("require", "linkid", N);
                        }
                    },
                    t = function() {
                        if (Tk()) {} else {
                            var J = c.getWithConfig(P.zh);
                            J &&
                                (p("require", J, { dataLayer: S.U }), p("require", "render"));
                        }
                    },
                    q = zn(n, b, c),
                    u = function(J, N, M) {
                        M && (N = "" + N);
                        q.ka[J] = N;
                    };
                !c.isGtmEvent &&
                    An(n, q.Aa) &&
                    (l(function() {
                            k() && k().remove(n);
                        }),
                        (In[n] = !1));
                l("create", f, q.Aa);
                if (q.Aa[P.mb] && !c.isGtmEvent) {
                    var x = Qk(q.Aa[P.mb], "/analytics.js");
                    x && (g = x);
                }
                var z = c.isGtmEvent ? q.sc[P.mb] : q.Aa[P.mb];
                if (z) {
                    var w = c.isGtmEvent ? q.sc[P.Rc] : q.Aa[P.Rc];
                    w && !In[n] && ((In[n] = !0), l(yj(n, w)));
                }
                c.isGtmEvent ?
                    q.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") :
                    (d(), v(q.linkAttribution));
                var y = q[P.ia];
                y && y[P.N] && xn(y, n);
                p("set", q.sc);
                if (c.isGtmEvent) {
                    if (q.enableLinkId) {
                        var A = {};
                        p("require", "linkid", "linkid.js", A);
                    }
                    Ne() && Bn(f, n, c);
                }
                if (b === P.Zb)
                    if (c.isGtmEvent) {
                        e();
                        if (q.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", { cookieName: C });
                        }
                        r(z);
                        p("send", "pageview");
                        q.Aa._useUp && vj(n + ".");
                    } else t(), p("send", "pageview", q.ka);
                else
                    b === P.xa ?
                    (t(),
                        km(f, c),
                        c.getWithConfig(P.Za) && (Ci(["aw", "dc"]), vj(n + ".")),
                        0 != q.sendPageView && p("send", "pageview", q.ka),
                        Bn(f, n, c), !c.isGtmEvent &&
                        0 < Wf(c).length &&
                        (Ed(68), 1 < U.configCount && Ed(69))) :
                    b === P.Ja ?
                    wn(n, c) :
                    "screen_view" === b ?
                    p("send", "screenview", q.ka) :
                    "timing_complete" === b ?
                    ((q.ka.hitType = "timing"),
                        u("timingCategory", q.eventCategory, !0),
                        c.isGtmEvent ?
                        u("timingVar", q.timingVar, !0) :
                        u("timingVar", q.name, !0),
                        u("timingValue", Ea(q.value)),
                        void 0 !== q.eventLabel && u("timingLabel", q.eventLabel, !0),
                        p("send", q.ka)) :
                    "exception" === b ?
                    p("send", "exception", q.ka) :
                    "optimize.callback" === b ||
                    ("" === b && c.isGtmEvent) ||
                    ("track_social" === b && c.isGtmEvent ?
                        ((q.ka.hitType = "social"),
                            u("socialNetwork", q.socialNetwork, !0),
                            u("socialAction", q.socialAction, !0),
                            u("socialTarget", q.socialTarget, !0)) :
                        ((c.isGtmEvent || Jn[b]) && r(z),
                            c.isGtmEvent && e(),
                            (q.ka.hitType = "event"),
                            u("eventCategory", q.eventCategory, !0),
                            u("eventAction", q.eventAction || b, !0),
                            void 0 !== q.eventLabel && u("eventLabel", q.eventLabel, !0),
                            void 0 !== q.value && u("eventValue", Ea(q.value))),
                        p("send", q.ka));
                var F = !1;
                var D = Kn;
                F && (D = c.getContainerTypeLoaded("UA"));
                if (!D && !c.isGtmEvent) {
                    Kn = !0;
                    F && c.setContainerTypeLoaded("UA", !0);
                    mj();
                    var E = function() {
                            F && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure();
                        },
                        L = function() {
                            k().loaded || E();
                        };
                    Tk() ? H(L) : Cb(g, L, E);
                }
            } else H(c.onFailure);
        },
        Mn = function(a, b, c, d) {
            kf(
                function() {
                    Ln(a, b, d);
                }, [P.H, P.C]
            );
        },
        On = function(a, b) {
            function c(f) {
                function g(p, r) {
                    for (var v = 0; v < r.length; v++) {
                        var t = r[v];
                        if (f[t]) {
                            k[p] = f[t];
                            break;
                        }
                    }
                }

                function l() {
                    if (f.category) k.category = f.category;
                    else {
                        for (var p = "", r = 0; r < Nn.length; r++)
                            void 0 !== f[Nn[r]] && (p && (p += "/"), (p += f[Nn[r]]));
                        p && (k.category = p);
                    }
                }
                var k = O(f),
                    n = !1;
                if (n || b)
                    g("id", ["id", "item_id", "promotion_id"]),
                    g("name", ["name", "item_name", "promotion_name"]),
                    g("brand", ["brand", "item_brand"]),
                    g("variant", ["variant", "item_variant"]),
                    g("list", ["list_name", "item_list_name"]),
                    g("position", ["list_position", "creative_slot", "index"]),
                    l();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return k;
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++)
                a[e] && Vb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0;
        },
        Pn = function(a) {
            return ff(a);
        },
        Qn = !1;
    var Rn = !1;
    Rn = !0;
    var Kn,
        In = {},
        yn = {},
        Sn = {},
        tn = Object.freeze(
            ((Sn.client_storage = "storage"),
                (Sn.sample_rate = 1),
                (Sn.site_speed_sample_rate = 1),
                (Sn.store_gac = 1),
                (Sn.use_amp_client_id = 1),
                (Sn[P.kb] = 1),
                (Sn[P.ma] = "storeGac"),
                (Sn[P.fa] = 1),
                (Sn[P.na] = 1),
                (Sn[P.Ea] = 1),
                (Sn[P.Hb] = 1),
                (Sn[P.Va] = 1),
                (Sn[P.Ib] = 1),
                Sn)
        ),
        Tn = {},
        Un = Object.freeze(
            ((Tn._cs = 1),
                (Tn._useUp = 1),
                (Tn.allowAnchor = 1),
                (Tn.allowLinker = 1),
                (Tn.alwaysSendReferrer = 1),
                (Tn.clientId = 1),
                (Tn.cookieDomain = 1),
                (Tn.cookieExpires = 1),
                (Tn.cookieFlags = 1),
                (Tn.cookieName = 1),
                (Tn.cookiePath = 1),
                (Tn.cookieUpdate = 1),
                (Tn.legacyCookieDomain = 1),
                (Tn.legacyHistoryImport = 1),
                (Tn.name = 1),
                (Tn.sampleRate = 1),
                (Tn.siteSpeedSampleRate = 1),
                (Tn.storage = 1),
                (Tn.storeGac = 1),
                (Tn.useAmpClientId = 1),
                (Tn._cd2l = 1),
                Tn)
        ),
        Vn = Object.freeze({ anonymize_ip: 1 }),
        Wn = {},
        un = Object.freeze(
            ((Wn.campaign = {
                    content: "campaignContent",
                    id: "campaignId",
                    medium: "campaignMedium",
                    name: "campaignName",
                    source: "campaignSource",
                    term: "campaignKeyword",
                }),
                (Wn.app_id = 1),
                (Wn.app_installer_id = 1),
                (Wn.app_name = 1),
                (Wn.app_version = 1),
                (Wn.description = "exDescription"),
                (Wn.fatal = "exFatal"),
                (Wn.language = 1),
                (Wn.page_hostname = "hostname"),
                (Wn.transport_type = "transport"),
                (Wn[P.ca] = "currencyCode"),
                (Wn[P.yf] = 1),
                (Wn[P.pb] = "location"),
                (Wn[P.Zd] = "page"),
                (Wn[P.La] = "referrer"),
                (Wn[P.Uc] = "title"),
                (Wn[P.Ff] = 1),
                (Wn[P.rb] = 1),
                Wn)
        ),
        Xn = {},
        Yn = Object.freeze(
            ((Xn.content_id = 1),
                (Xn.event_action = 1),
                (Xn.event_category = 1),
                (Xn.event_label = 1),
                (Xn.link_attribution = 1),
                (Xn.name = 1),
                (Xn[P.ia] = 1),
                (Xn[P.xf] = 1),
                (Xn[P.Nb] = 1),
                (Xn[P.da] = 1),
                Xn)
        ),
        Zn = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1,
        }),
        Nn = Object.freeze([
            "item_category",
            "item_category2",
            "item_category3",
            "item_category4",
            "item_category5",
        ]),
        $n = {},
        Gn = Object.freeze(
            (($n.levels = 1), ($n[P.na] = "duration"), ($n[P.Hb] = 1), $n)
        ),
        ao = {},
        bo = Object.freeze(
            ((ao.anonymize_ip = 1),
                (ao.fatal = 1),
                (ao.send_page_view = 1),
                (ao.store_gac = 1),
                (ao.use_amp_client_id = 1),
                (ao[P.ma] = 1),
                (ao[P.yf] = 1),
                ao)
        ),
        Hn = function(a, b, c, d) {
            if (void 0 !== c)
                if (
                    (bo[b] && (c = Ha(c)),
                        "anonymize_ip" !== b || c || (c = void 0),
                        1 === a)
                )
                    d[vn(b)] = c;
                else if (ta(a)) d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
        },
        vn = function(a) {
            return a && ta(a) ?
                a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase();
                }) :
                a;
        },
        co = {},
        Jn = Object.freeze(
            ((co.checkout_progress = 1),
                (co.select_content = 1),
                (co.set_checkout_option = 1),
                (co[P.Eb] = 1),
                (co[P.Fb] = 1),
                (co[P.ib] = 1),
                (co[P.Ua] = 1),
                (co[P.jb] = 1),
                (co[P.va] = 1),
                (co[P.Gb] = 1),
                (co[P.wa] = 1),
                co)
        ),
        eo = {},
        fo = Object.freeze(
            ((eo.checkout_progress = 1),
                (eo.set_checkout_option = 1),
                (eo[P.ef] = 1),
                (eo[P.Eb] = 1),
                (eo[P.Fb] = 1),
                (eo[P.ib] = 1),
                (eo[P.va] = 1),
                (eo[P.Gb] = 1),
                (eo[P.ff] = 1),
                eo)
        ),
        go = {},
        ho = Object.freeze(
            ((go.generate_lead = 1),
                (go.login = 1),
                (go.search = 1),
                (go.select_content = 1),
                (go.share = 1),
                (go.sign_up = 1),
                (go.view_search_results = 1),
                (go[P.Ua] = 1),
                (go[P.jb] = 1),
                (go[P.wa] = 1),
                go)
        ),
        io = function(a) {
            var b = "general";
            fo[a] ?
                (b = "ecommerce") :
                ho[a] ?
                (b = "engagement") :
                "exception" === a && (b = "error");
            return b;
        },
        jo = {},
        ko = Object.freeze(
            ((jo.view_search_results = 1),
                (jo[P.Ua] = 1),
                (jo[P.jb] = 1),
                (jo[P.wa] = 1),
                jo)
        ),
        Dn = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c);
        },
        lo = function(a) {
            if (wa(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
                    }
                }
                return 0 < b.length ? b.join("!") : void 0;
            }
        },
        zn = function(a, b, c) {
            function d(N, M) {
                void 0 !== M && (l[N] = M);
            }
            var e = function(N) {
                    return c.getWithConfig(N);
                },
                f = {},
                g = {},
                l = {},
                k = {},
                n = lo(e(P.yh));
            !c.isGtmEvent && n && Dn(g, "exp", n);
            l["&gtm"] = Xk(!0);
            Ne() && (k._cs = Pn);
            var p = e(P.bc);
            if (!c.isGtmEvent && Vb(p))
                for (var r in p)
                    if (
                        p.hasOwnProperty(r) &&
                        /^(dimension|metric)\d+$/.test(r) &&
                        void 0 != p[r]
                    ) {
                        var v = e(String(p[r]));
                        void 0 !== v && Dn(g, r, v);
                    }
            for (var t = Tf(c), q = 0; q < t.length; ++q) {
                var u = t[q];
                if (c.isGtmEvent) {
                    var x = e(u);
                    Zn.hasOwnProperty(u) ?
                        (f[u] = x) :
                        Un.hasOwnProperty(u) ?
                        (k[u] = x) :
                        (l[u] = x);
                } else {
                    var z = void 0;
                    z = u !== P.V ? e(u) : Uf(c, u);
                    if (Yn.hasOwnProperty(u)) Hn(Yn[u], u, z, f);
                    else if (Vn.hasOwnProperty(u)) Hn(Vn[u], u, z, l);
                    else if (un.hasOwnProperty(u)) Hn(un[u], u, z, g);
                    else if (tn.hasOwnProperty(u)) Hn(tn[u], u, z, k);
                    else if (/^(dimension|metric|content_group)\d+$/.test(u))
                        Hn(1, u, z, g);
                    else if (u === P.V) {
                        if (!Qn) {
                            var w = Za(z);
                            w && (g["&did"] = w);
                        }
                        if (Rn) {
                            var y = void 0,
                                A = void 0;
                            b === P.xa ?
                                (y = Za(Uf(c, u), ".")) :
                                ((y = Za(Uf(c, u, 1), ".")), (A = Za(Uf(c, u, 2), ".")));
                            y && (g["&gdid"] = y);
                            A && (g["&edid"] = A);
                        }
                    } else
                        u === P.oa && 0 > t.indexOf(P.Hb) && (k.cookieName = z + "_ga");
                }
            }
            (!1 !== e(P.oh) && !1 !== e(P.$b) && sn()) || (l.allowAdFeatures = !1);
            if (!1 === e(P.Ca) || !rn()) {
                var C = c.isGtmEvent ?
                    "allowAdPersonalizationSignals" :
                    "allowAdFeatures";
                C = "allowAdPersonalizationSignals";
                l[C] = !1;
            }!c.isGtmEvent && e(P.Za) && (k._useUp = !0);
            if (c.isGtmEvent) {
                k.name = k.name || f.gtmTrackerName;
                var F = l.hitCallback;
                l.hitCallback = function() {
                    sa(F) && F();
                    c.onSuccess();
                };
            } else {
                Dn(k, "cookieDomain", "auto");
                Dn(l, "forceSSL", !0);
                Dn(f, "eventCategory", io(b));
                ko[b] && Dn(g, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ?
                    Dn(f, "eventLabel", e(P.xf)) :
                    "search" === b || "view_search_results" === b ?
                    Dn(f, "eventLabel", e(P.Dh)) :
                    "select_content" === b && Dn(f, "eventLabel", e(P.sh));
                var D = f[P.ia] || {},
                    E = D[P.Lb];
                E || (0 != E && D[P.N]) ?
                    (k.allowLinker = !0) :
                    !1 === E && Dn(k, "useAmpClientId", !1);
                g.hitCallback = c.onSuccess;
                k.name = a;
            }
            Ne() &&
                ((l["&gcs"] = gf()),
                    ff(P.H) || (k.storage = "none"),
                    ff(P.C) || ((l.allowAdFeatures = !1), (k.storeGac = !1)));
            var L = e(P.qa) || e(P.mb),
                J = e(P.Rc);
            if (L) {
                c.isGtmEvent || (k[P.mb] = L);
                k._cd2l = !0;
            }
            J && !c.isGtmEvent && (k[P.Rc] = J);
            f.ka = g;
            f.sc = l;
            f.Aa = k;
            return f;
        },
        En = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.ye = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.pg = "impressions" === b.translateIfKeyEquals ? On(d, !0) : d;
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Cc = "promoView" === b.translateIfKeyEquals ? On(e, !0) : e;
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Cc = "promoClick" === b.translateIfKeyEquals ? On(f, !0) : f;
                c.$a = b.promoClick.actionField;
                return c;
            }
            for (var g in b)
                if (
                    b.hasOwnProperty(g) &&
                    "translateIfKeyEquals" !== g &&
                    "impressions" !== g &&
                    "promoView" !== g &&
                    "promoClick" !== g &&
                    "currencyCode" !== g
                ) {
                    c.action = g;
                    var l = b[g].products;
                    c.yb = "products" === b.translateIfKeyEquals ? On(l, !0) : l;
                    c.$a = b[g].actionField;
                    break;
                }
            return Object.keys(c).length ? c : null;
        },
        Fn = function(a, b) {
            function c(t) {
                return {
                    id: d(P.Ya),
                    affiliation: d(P.vh),
                    revenue: d(P.da),
                    tax: d(P.uf),
                    shipping: d(P.Rd),
                    coupon: d(P.wh),
                    list: d(P.Qd) || t,
                };
            }
            for (
                var d = function(t) {
                        return b.getWithConfig(t);
                    },
                    e = d(P.Z),
                    f,
                    g = 0; e && g < e.length && !(f = e[g][P.Qd]); g++
            );
            var l = d(P.bc);
            if (Vb(l))
                for (var k = 0; e && k < e.length; ++k) {
                    var n = e[k],
                        p;
                    for (p in l)
                        l.hasOwnProperty(p) &&
                        /^(dimension|metric)\d+$/.test(p) &&
                        void 0 != l[p] &&
                        Dn(n, p, n[l[p]]);
                }
            var r = null,
                v = d(P.xh);
            a === P.va || a === P.Gb ?
                (r = { action: a, $a: c(), yb: On(e) }) :
                a === P.Eb ?
                (r = { action: "add", yb: On(e) }) :
                a === P.Fb ?
                (r = { action: "remove", yb: On(e) }) :
                a === P.wa ?
                (r = { action: "detail", $a: c(f), yb: On(e) }) :
                a === P.Ua ?
                (r = { action: "impressions", pg: On(e) }) :
                "view_promotion" === a ?
                (r = { action: "promo_view", Cc: On(v) }) :
                "select_content" === a && v && 0 < v.length ?
                (r = {
                    action: "promo_click",
                    Cc: On(v),
                }) :
                "select_content" === a ?
                (r = { action: "click", $a: { list: d(P.Qd) || f }, yb: On(e) }) :
                a === P.ib || "checkout_progress" === a ?
                (r = {
                    action: "checkout",
                    yb: On(e),
                    $a: { step: a === P.ib ? 1 : d(P.tf), option: d(P.sf) },
                }) :
                "set_checkout_option" === a &&
                (r = {
                    action: "checkout_option",
                    $a: { step: d(P.tf), option: d(P.sf) },
                });
            r && (r.ye = d(P.ca));
            return r;
        },
        mo = {},
        An = function(a, b) {
            var c = mo[a];
            mo[a] = O(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1;
        };
    var no = !1;
    no = !0;

    function oo() {
        var a = U;
        return (a.gcq = a.gcq || new po());
    }
    var qo = function(a, b, c) {
            oo().register(a, b, c);
        },
        ro = function(a, b, c, d) {
            oo().push("event", [b, a], c, d);
        },
        so = function(a, b) {
            oo().push("config", [a], b);
        },
        to = function(a, b, c, d) {
            oo().push("get", [a, b], c, d);
        },
        uo = {},
        vo = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.m = !1;
        },
        wo = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.R = c || "";
            this.m = d;
            this.o = e;
        },
        po = function() {
            this.o = {};
            this.s = {};
            this.m = [];
            this.D = { AW: !1, UA: !1 };
        },
        xo = function(a, b) {
            var c = Wl(b);
            return (a.o[c.containerId] = a.o[c.containerId] || new vo());
        },
        yo = function(a, b, c) {
            if (b) {
                var d = Wl(b);
                if (d && 1 === xo(a, b).status) {
                    xo(a, b).status = 2;
                    var e = {};
                    kk &&
                        (e.timeoutId = B.setTimeout(function() {
                            Ed(38);
                            Qj();
                        }, 3e3));
                    a.push("require", [e], d.containerId);
                    uo[d.containerId] = m();
                    if (Tk()) {} else {
                        var g =
                            "/gtag/js?id=" +
                            encodeURIComponent(d.containerId) +
                            "&l=" +
                            S.U +
                            "&cx=c";
                        Sk() && (g += "&sign=" + S.fd);
                        var l =
                            ("http:" != B.location.protocol ? "https:" : "http:") +
                            ("//www.googletagmanager.com" + g),
                            k = Qk(c, g) || l;
                        Cb(k);
                    }
                }
            }
        },
        zo = function(a, b, c, d) {
            if (d.R) {
                var e = xo(a, d.R),
                    f = e.s;
                if (f) {
                    var g = O(c),
                        l = O(e.targetConfig[d.R]),
                        k = O(e.containerConfig),
                        n = O(e.remoteConfig),
                        p = O(a.s),
                        r = fe("gtm.uniqueEventId"),
                        v = Wl(d.R).prefix,
                        t = Ra(function() {
                            var u = g[P.Jb];
                            u && H(u);
                        }),
                        q = Rf(
                            Qf(
                                Sf(
                                    Pf(Nf(Of(Mf(Lf(Kf(g), l), k), n), p), function() {
                                        xk(r, v, "2");
                                        no && t();
                                    }),
                                    function() {
                                        xk(r, v, "3");
                                        no && t();
                                    }
                                ),
                                function(u, x) {
                                    a.D[u] = x;
                                }
                            ),
                            function(u) {
                                return a.D[u];
                            }
                        );
                    try {
                        xk(r, v, "1");
                        f(d.R, b, d.s, q);
                    } catch (u) {
                        xk(r, v, "4");
                    }
                }
            }
        };
    po.prototype.register = function(a, b, c) {
        var d = xo(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (O(d.remoteConfig, c), (d.remoteConfig = c));
            var e = Wl(a),
                f = uo[e.containerId];
            if (void 0 !== f) {
                var g = U[e.containerId].bootstrap,
                    l = e.prefix.toUpperCase();
                U[e.containerId]._spx && (l = l.toLowerCase());
                var k = fe("gtm.uniqueEventId"),
                    n = l,
                    p = m() - g;
                if (kk && !Vj[k]) {
                    k !== Rj && (Mj(), (Rj = k));
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Zj = Zj ? Zj + "," + r : "&cl=" + r;
                }
                delete uo[e.containerId];
            }
            this.flush();
        }
    };
    po.prototype.push = function(a, b, c, d) {
        var e = Math.floor(m() / 1e3);
        yo(this, c, b[0][P.qa] || this.s[P.qa]);
        c && xo(this, c).m && (d = !1);
        this.m.push(new wo(a, e, c, b, d));
        d || this.flush();
    };
    po.prototype.insert = function(a, b, c) {
        var d = Math.floor(m() / 1e3);
        0 < this.m.length ?
            this.m.splice(1, 0, new wo(a, d, c, b, !1)) :
            this.m.push(new wo(a, d, c, b, !1));
    };
    po.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o)
                !f.R || xo(this, f.R).m ? ((f.o = !1), this.m.push(f)) : c.push(f),
                this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== xo(this, f.R).status && !a) {
                            this.m.push.apply(this.m, c);
                            return;
                        }
                        kk && B.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        Ba(f.m[0], function(v, t) {
                            O(Wa(v, t), b.s);
                        });
                        break;
                    case "config":
                        e.Ia = {};
                        Ba(
                            f.m[0],
                            (function(v) {
                                return function(t, q) {
                                    O(Wa(t, q), v.Ia);
                                };
                            })(e)
                        );
                        var g = !!e.Ia[P.Yc];
                        delete e.Ia[P.Yc];
                        var l = xo(this, f.R),
                            k = Wl(f.R),
                            n = k.containerId === k.id;
                        g || (n ? (l.containerConfig = {}) : (l.targetConfig[f.R] = {}));
                        (l.m && g) || zo(this, P.xa, e.Ia, f);
                        l.m = !0;
                        delete e.Ia[P.Ob];
                        n ? O(e.Ia, l.containerConfig) : O(e.Ia, l.targetConfig[f.R]);
                        d = !0;
                        break;
                    case "event":
                        e.Hc = {};
                        Ba(
                            f.m[0],
                            (function(v) {
                                return function(t, q) {
                                    O(Wa(t, q), v.Hc);
                                };
                            })(e)
                        );
                        zo(this, f.m[1], e.Hc, f);
                        break;
                    case "get":
                        var p = {},
                            r = ((p[P.Ka] = f.m[0]), (p[P.Wa] = f.m[1]), p);
                        zo(this, P.Ja, r, f);
                }
                this.m.shift();
                Ao(this, f);
            }
            e = { Ia: e.Ia, Hc: e.Hc };
        }
        this.m.push.apply(this.m, c);
        d && this.flush();
    };
    var Ao = function(a, b) {
        if ("require" !== b.type)
            if (b.R)
                for (
                    var c = a.getCommandListeners(b.R)[b.type] || [], d = 0; d < c.length; d++
                )
                    c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], l = 0; l < g.length; l++) g[l]();
                    }
    };
    po.prototype.getRemoteConfig = function(a) {
        return xo(this, a).remoteConfig;
    };
    po.prototype.getCommandListeners = function(a) {
        return xo(this, a).o;
    };
    var Bo = {},
        Co = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = Bo[b[c]] || [];
                Bo[b[c]] = d;
                0 > d.indexOf(a) && d.push(a);
            }
        },
        Do = function(a) {
            Ba(Bo, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1);
            });
        };
    var Eo = "HA GF G UA AW DC".split(" "),
        Fo = !1;
    Fo = !0;
    var Go = !1,
        Ho = !1,
        Io = 0;

    function Jo(a, b) {
        var c = { event: a };
        b &&
            ((c.eventModel = O(b)),
                b[P.Jb] && (c.eventCallback = b[P.Jb]),
                b[P.Qc] && (c.eventTimeout = b[P.Qc]));
        return c;
    }

    function Ko(a) {
        a.hasOwnProperty("gtm.uniqueEventId") ||
            Object.defineProperty(a, "gtm.uniqueEventId", { value: Rd() });
        return a["gtm.uniqueEventId"];
    }

    function Lo() {
        return Go;
    }
    var Mo = {
            config: function(a) {
                var b,
                    c = Ko(a);
                return b;
            },
            consent: function(a) {
                function b() {
                    Lo() && O(a[2], { subcommand: a[1] });
                }
                if (3 === a.length) {
                    Ed(39);
                    var c = Rd(),
                        d = a[1];
                    "default" === d
                        ?
                        (b(), cf(a[2])) :
                        "update" === d && (b(), ef(a[2], c));
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && ta(b)) {
                    var c;
                    if (2 < a.length) {
                        if ((!Vb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
                        c = a[2];
                    }
                    var d = Jo(b, c),
                        e = Ko(a);
                    d["gtm.uniqueEventId"] = e;
                    return d;
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    Ho = !0;
                    Lo();
                    var b = {};
                    return (
                        (b.event = "gtm.js"),
                        (b["gtm.start"] = a[1].getTime()),
                        (b["gtm.uniqueEventId"] = Ko(a)),
                        b
                    );
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Vb(a[1]) ?
                    (b = O(a[1])) :
                    3 == a.length &&
                    ta(a[1]) &&
                    ((b = {}),
                        Vb(a[2]) || wa(a[2]) ? (b[a[1]] = O(a[2])) : (b[a[1]] = a[2]));
                if (b) {
                    b._clear = !0;
                    return b;
                }
            },
        },
        No = { policy: !0 };
    var Oo = function(a) {
            var b = B[S.U].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break;
                    }
                c && (b.end(), (b.end = null));
            }
        },
        Po = function(a) {
            var b = B[S.U],
                c = b && b.hide;
            c && c.end && (c[a] = !0);
        };
    var Qo = !1,
        Ro = [];

    function So() {
        if (!Qo) {
            Qo = !0;
            for (var a = 0; a < Ro.length; a++) H(Ro[a]);
        }
    }
    var To = function(a) {
        Qo ? H(a) : Ro.push(a);
    };
    var jp = function(a) {
        if (ip(a)) return a;
        this.m = a;
    };
    jp.prototype.Ci = function() {
        return this.m;
    };
    var ip = function(a) {
        return !a || "object" !== Tb(a) || Vb(a) ?
            !1 :
            "getUntrustedUpdateValue" in a;
    };
    jp.prototype.getUntrustedUpdateValue = jp.prototype.Ci;
    var kp = [],
        lp = !1,
        mp = !1,
        np = function(a) {
            return B[S.U].push(a);
        },
        op = function(a, b) {
            var c = U[S.U],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b &&
                (g = B.setTimeout(function() {
                    f || ((f = !0), a());
                    g = void 0;
                }, b));
            return function() {
                ++e === d &&
                    (g && (B.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
            };
        };

    function pp(a) {
        var b = a._clear;
        Ba(a, function(d, e) {
            "_clear" !== d && (b && ie(d, void 0), ie(d, e));
        });
        Md || (Md = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || ((c = Rd()), (a["gtm.uniqueEventId"] = c), ie("gtm.uniqueEventId", c));
        return Ok(a);
    }

    function qp() {
        var a = kp[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Da(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0;
        }
        return !1;
    }

    function rp() {
        for (var a = !1; !mp && 0 < kp.length;) {
            if (!lp && qp()) {
                var b = {},
                    c = ((b.event = "gtm.init_consent"), b),
                    d = {},
                    e = ((d.event = "gtm.init"), d),
                    f = kp[0]["gtm.uniqueEventId"];
                f &&
                    ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
                kp.unshift(c, e);
                lp = !0;
            }
            mp = !0;
            delete ce.eventModel;
            ee();
            var g = kp.shift();
            if (null != g) {
                var l = ip(g);
                if (l) {
                    var k = g;
                    g = ip(k) ? k.getUntrustedUpdateValue() : void 0;
                    for (
                        var n = [
                                "gtm.allowlist",
                                "gtm.blocklist",
                                "gtm.whitelist",
                                "gtm.blacklist",
                                "tagTypeBlacklist",
                            ],
                            p = 0; p < n.length; p++
                    ) {
                        var r = n[p],
                            v = fe(r, 1);
                        if (wa(v) || Vb(v)) v = O(v);
                        de[r] = v;
                    }
                }
                try {
                    if (sa(g))
                        try {
                            g.call(ge);
                        } catch (A) {}
                    else if (wa(g)) {
                        var t = g;
                        if (ta(t[0])) {
                            var q = t[0].split("."),
                                u = q.pop(),
                                x = t.slice(1),
                                z = fe(q.join("."), 2);
                            if (void 0 !== z && null !== z)
                                try {
                                    z[u].apply(z, x);
                                } catch (A) {}
                        }
                    } else {
                        if (Da(g)) {
                            a: {
                                var w = g;
                                if (w.length && ta(w[0])) {
                                    var y = Mo[w[0]];
                                    if (y && (!l || !No[w[0]])) {
                                        g = y(w);
                                        break a;
                                    }
                                }
                                g = void 0;
                            }
                            if (!g) {
                                mp = !1;
                                continue;
                            }
                        }
                        a = pp(g) || a;
                    }
                } finally {
                    l && ee(!0);
                }
            }
            mp = !1;
        }
        return !a;
    }

    function sp() {
        var b = rp();
        try {
            Oo(S.J);
        } catch (c) {}
        return b;
    }
    var up = function() {
            var a = xb(S.U, []),
                b = xb("google_tag_manager", {});
            b = b[S.U] = b[S.U] || {};
            ej(function() {
                b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
            });
            To(function() {
                b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++)
                        e[f] = new jp(arguments[f]);
                } else e = [].slice.call(arguments, 0);
                var g,
                    l = !0;
                l = !1;
                g = l;
                !g && kp.push.apply(kp, e);
                var k = c.apply(a, e);
                g && kp.push.apply(kp, e);
                if (300 < this.length)
                    for (Ed(4); 300 < this.length;) this.shift();
                var n = "boolean" !== typeof k || k;
                return rp() && n;
            };
            var d = a.slice(0);
            kp.push.apply(kp, d);
            if (tp()) {
                H(sp);
            }
        },
        tp = function() {
            var a = !0;
            return a;
        };

    function vp(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = m();
        return b < c + 3e5 && b > c - 9e5;
    }
    var wp = function(a) {
        U.addTargetToGroup ?
            U.addTargetToGroup(a) :
            ((U.pendingDefaultTargets = U.pendingDefaultTargets || []),
                U.pendingDefaultTargets.push(a));
    };
    var xp = {};
    xp.ad = new String("undefined");
    var yp = function(a) {
        this.m = function(b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d] === xp.ad ? b : a[d]);
            return c.join("");
        };
    };
    yp.prototype.toString = function() {
        return this.m("undefined");
    };
    yp.prototype.valueOf = yp.prototype.toString;
    xp.Uh = yp;
    xp.pe = {};
    xp.ki = function(a) {
        return new yp(a);
    };
    var zp = {};
    xp.fj = function(a, b) {
        var c = Rd();
        zp[c] = [a, b];
        return c;
    };
    xp.dg = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = zp[c];
            if (d && "function" === typeof d[b]) d[b]();
            zp[c] = void 0;
        };
    };
    xp.Ji = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++)
            (b = b || 8 === a[d]), (c = c || 16 === a[d]);
        return b && c;
    };
    xp.Yi = function(a) {
        if (a === xp.ad) return a;
        var b = Rd();
        xp.pe[b] = a;
        return 'google_tag_manager["' + S.J + '"].macro(' + b + ")";
    };
    xp.Ti = function(a, b, c) {
        a instanceof xp.Uh && ((a = a.m(xp.fj(b, c))), (b = ra));
        return { Gi: a, onSuccess: b };
    };
    var Ap = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Nb(a, "className"),
                "gtm.elementId": a["for"] || Ib(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Nb(a, "target") || "",
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] =
                (a.attributes && a.attributes.formaction ? a.formAction : "") ||
                a.action ||
                Nb(a, "href") ||
                a.src ||
                a.code ||
                a.codebase ||
                "";
            return d;
        },
        Bp = function(a) {
            U.hasOwnProperty("autoEventsSettings") || (U.autoEventsSettings = {});
            var b = U.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a];
        },
        Cp = function(a, b, c) {
            Bp(a)[b] = c;
        },
        Dp = function(a, b, c, d) {
            var e = Bp(a),
                f = Pa(e, b, d);
            e[b] = c(f);
        },
        Ep = function(a, b, c) {
            var d = Bp(a);
            return Pa(d, b, c);
        };
    var Kp = !!B.MutationObserver,
        Lp = void 0,
        Mp = function(a) {
            if (!Lp) {
                var b = function() {
                    var c = G.body;
                    if (c)
                        if (Kp)
                            new MutationObserver(function() {
                                for (var e = 0; e < Lp.length; e++) H(Lp[e]);
                            }).observe(c, { childList: !0, subtree: !0 });
                        else {
                            var d = !1;
                            Gb(c, "DOMNodeInserted", function() {
                                d ||
                                    ((d = !0),
                                        H(function() {
                                            d = !1;
                                            for (var e = 0; e < Lp.length; e++) H(Lp[e]);
                                        }));
                            });
                        }
                };
                Lp = [];
                G.body ? b() : H(b);
            }
            Lp.push(a);
        };
    var Xp = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? ((m() - e) * g.playbackRate) / 1e3 : 0;
            e = m();
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, l, k) {
                var n = a(),
                    p = n.fg,
                    r =
                    void 0 !== k ?
                    Math.round(k) :
                    void 0 !== l ?
                    Math.round(n.fg * l) :
                    Math.round(n.mi),
                    v =
                    void 0 !== l ?
                    Math.round(100 * l) :
                    0 >= p ?
                    0 :
                    Math.round((r / p) * 100),
                    t = G.hidden ? !1 : 0.5 <= bg(c);
                d();
                var q = void 0;
                void 0 !== b && (q = [b]);
                var u = Ap(c, "gtm.video", q);
                u["gtm.videoProvider"] = "youtube";
                u["gtm.videoStatus"] = g;
                u["gtm.videoUrl"] = n.url;
                u["gtm.videoTitle"] = n.title;
                u["gtm.videoDuration"] = Math.round(p);
                u["gtm.videoCurrentTime"] = Math.round(r);
                u["gtm.videoElapsedTime"] = Math.round(f);
                u["gtm.videoPercent"] = v;
                u["gtm.videoVisible"] = t;
                return u;
            },
            jj: function() {
                e = m();
            },
            te: function() {
                d();
            },
        };
    };
    var Yp = B.clearTimeout,
        Zp = B.setTimeout,
        W = function(a, b, c, d) {
            if (Tk()) {
                b && H(b);
            } else return Cb(a, b, c, d);
        },
        $p = function() {
            return new Date();
        },
        aq = function() {
            return B.location.href;
        },
        bq = function(a) {
            return mg(og(a), "fragment");
        },
        cq = function(a) {
            return ng(og(a));
        },
        dq = function(a, b) {
            return fe(a, b || 2);
        },
        eq = function(a, b, c) {
            var d;
            b
                ?
                ((a.eventCallback = b), c && (a.eventTimeout = c), (d = np(a))) :
                (d = np(a));
            return d;
        },
        fq = function(a, b) {
            B[a] = b;
        },
        X = function(a, b, c) {
            b && (void 0 === B[a] || (c && !B[a])) && (B[a] = b);
            return B[a];
        },
        gq = function(a, b, c) {
            return Sg(a, b, void 0 === c ? !0 : !!c);
        },
        hq = function(a, b, c) {
            return 0 === ah(a, b, c);
        },
        iq = function(a, b) {
            if (Tk()) {
                b && H(b);
            } else Eb(a, b);
        },
        jq = function(a) {
            return !!Ep(a, "init", !1);
        },
        kq = function(a) {
            Cp(a, "init", !0);
        },
        lq = function(a) {
            var b = Kd,
                c = "?id=" + encodeURIComponent(a) + "&l=" + S.U;
            Sk() &&
                ((c += "&sign=" + S.fd),
                    wb && (b = wb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = $l("https://", "http://", b + c);
            W(d);
        },
        mq = function(a, b, c) {
            kk && (Wb(a) || yk(c, b, a));
        };
    var nq = xp.Ti;

    function Kq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c;
    }
    var Lq = new za();

    function Mq(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Lq.get(e);
            f || ((f = new RegExp(b, d)), Lq.set(e, f));
            return f.test(a);
        } catch (g) {
            return !1;
        }
    }

    function Nq(a, b) {
        function c(g) {
            var l = og(g),
                k = mg(l, "protocol"),
                n = mg(l, "host", !0),
                p = mg(l, "port"),
                r = mg(l, "path").toLowerCase().replace(/\/$/, "");
            if (
                void 0 === k ||
                ("http" == k && "80" == p) ||
                ("https" == k && "443" == p)
            )
                (k = "web"), (p = "default");
            return [k, n, p, r];
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0;
    }

    function Oq(a) {
        return Pq(a) ? 1 : 0;
    }

    function Pq(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && wa(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = O(a, {});
                O({ arg1: c[d], any_of: void 0 }, e);
                if (Oq(e)) return !0;
            }
            return !1;
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = [
                            "matches",
                            "webkitMatchesSelector",
                            "mozMatchesSelector",
                            "msMatchesSelector",
                            "oMatchesSelector",
                        ];
                        try {
                            for (var l = 0; l < g.length; l++)
                                if (b[g[l]]) {
                                    f = b[g[l]](c);
                                    break a;
                                }
                        } catch (k) {}
                    }
                    f = !1;
                }
                return f;
            case "_ew":
                return Kq(b, c);
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Mq(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Nq(b, c);
        }
        return !1;
    }
    Object.freeze({ dl: 1, id: 1 });
    Object.freeze(["config", "event", "get", "set"]);
    var Qq = encodeURI,
        Y = encodeURIComponent,
        Rq = Fb;
    var Sq = function(a, b) {
        if (!a) return !1;
        var c = mg(og(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
                if (0 <= f && c.indexOf(e, f) == f) return !0;
            }
        }
        return !1;
    };
    var Tq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] &&
            a[f].hasOwnProperty(b) &&
            a[f].hasOwnProperty(c) &&
            ((d[a[f][b]] = a[f][c]), (e = !0));
        return e ? d : null;
    };
    var Uq = function(a, b, c) {
        for (var d = 0; d < b.length; d++)
            a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
    };

    function ss() {
        return (B.gaGlobal = B.gaGlobal || {});
    }
    var ts = function() {
            var a = ss();
            a.hid = a.hid || ya();
            return a.hid;
        },
        us = function(a, b) {
            var c = ss();
            if (void 0 == c.vid || (b && !c.from_cookie))
                (c.vid = a), (c.from_cookie = b);
        };
    var Ys = function() {
        if (sa(B.__uspapi)) {
            var a = "";
            try {
                B.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
                    }
                });
            } catch (b) {}
            return a;
        }
    };
    var xt = window,
        yt = document,
        zt = function(a) {
            var b = xt._gaUserPrefs;
            if ((b && b.ioo && b.ioo()) || (a && !0 === xt["ga-disable-" + a]))
                return !0;
            try {
                var c = xt.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
            } catch (f) {}
            for (
                var d = Og("AMP_TOKEN", String(yt.cookie), !0), e = 0; e < d.length; e++
            )
                if ("$OPT_OUT" == d[e]) return !0;
            return yt.getElementById("__gaOptOutExtension") ? !0 : !1;
        };
    var At = {};

    function Dt(a) {
        delete a.eventModel[P.Ob];
        Ft(a.eventModel);
    }
    var Ft = function(a) {
        Ba(a, function(c) {
            "_" === c.charAt(0) && delete a[c];
        });
        var b = a[P.Ma] || {};
        Ba(b, function(c) {
            "_" === c.charAt(0) && delete b[c];
        });
    };
    var It = function(a, b, c) {
            ro(b, c, a);
        },
        Jt = function(a, b, c) {
            ro(b, c, a, !0);
        },
        Mt = function(a, b) {};

    function Kt(a, b) {}
    var Z = { g: {} };
    (Z.g.gaawc = ["google"]),
    (function() {
        (function(a) {
            Z.__gaawc = a;
            Z.__gaawc.h = "gaawc";
            Z.__gaawc.isVendorTemplate = !0;
            Z.__gaawc.priorityOverride = 10;
        })(function(a) {
            var b = String(a.vtp_measurementId);
            if (ta(b) && 0 === b.indexOf("G-")) {
                var c = Tq(a.vtp_fieldsToSet, "name", "value") || {};
                if (c.hasOwnProperty(P.Ma) || a.vtp_userProperties) {
                    var d = c[P.Ma] || {};
                    O(Tq(a.vtp_userProperties, "name", "value"), d);
                    c[P.Ma] = d;
                }
                a.vtp_enableSendToServerContainer &&
                    a.vtp_serverContainerUrl &&
                    ((c[P.qa] = a.vtp_serverContainerUrl), (c[P.cc] = !0));
                var e = a.vtp_userDataVariable;
                e && (c[P.ya] = e);
                Uq(c, P.de, function(f) {
                    return Ha(f);
                });
                Uq(c, P.ee, function(f) {
                    return Number(f);
                });
                c.send_page_view = a.vtp_sendPageView;
                so(c, b);
                H(a.vtp_gtmOnSuccess);
            } else H(a.vtp_gtmOnFailure);
        });
    })();

    (Z.g.sdl = ["google"]),
    (function() {
        function a() {
            return !!(
                Object.keys(k("horiz.pix")).length ||
                Object.keys(k("horiz.pct")).length ||
                Object.keys(k("vert.pix")).length ||
                Object.keys(k("vert.pct")).length
            );
        }

        function b(w) {
            for (var y = [], A = w.split(","), C = 0; C < A.length; C++) {
                var F = Number(A[C]);
                if (isNaN(F)) return [];
                p.test(A[C]) || y.push(F);
            }
            return y;
        }

        function c() {
            var w = 0,
                y = 0;
            return function() {
                var A = ag(),
                    C = A.height;
                w = Math.max(u.scrollLeft + A.width, w);
                y = Math.max(u.scrollTop + C, y);
                return { oi: w, ri: y };
            };
        }

        function d() {
            t = X("self");
            q = t.document;
            u = q.scrollingElement || (q.body && q.body.parentNode);
            z = c();
        }

        function e(w, y, A, C) {
            var F = k(y),
                D = {},
                E;
            for (E in F) {
                D.Db = E;
                if (F.hasOwnProperty(D.Db)) {
                    var L = Number(D.Db);
                    w < L ||
                        (eq({
                                event: "gtm.scrollDepth",
                                "gtm.scrollThreshold": L,
                                "gtm.scrollUnits": A.toLowerCase(),
                                "gtm.scrollDirection": C,
                                "gtm.triggers": F[D.Db].join(","),
                            }),
                            Dp(
                                "sdl",
                                y,
                                (function(J) {
                                    return function(N) {
                                        delete N[J.Db];
                                        return N;
                                    };
                                })(D), {}
                            ));
                }
                D = { Db: D.Db };
            }
        }

        function f() {
            var w = z(),
                y = w.oi,
                A = w.ri,
                C = (y / u.scrollWidth) * 100,
                F = (A / u.scrollHeight) * 100;
            e(y, "horiz.pix", r.cd, v.Kf);
            e(C, "horiz.pct", r.bd, v.Kf);
            e(A, "vert.pix", r.cd, v.Uf);
            e(F, "vert.pct", r.bd, v.Uf);
            Cp("sdl", "pending", !1);
        }

        function g() {
            var w = 250,
                y = !1;
            q.scrollingElement &&
                q.documentElement &&
                t.addEventListener &&
                ((w = 50), (y = !0));
            var A = 0,
                C = !1,
                F = function() {
                    C
                        ?
                        (A = Zp(F, w)) :
                        ((A = 0),
                            f(),
                            jq("sdl") &&
                            !a() &&
                            (Hb(t, "scroll", D),
                                Hb(t, "resize", D),
                                Cp("sdl", "init", !1)));
                    C = !1;
                },
                D = function() {
                    y && z();
                    A ? (C = !0) : ((A = Zp(F, w)), Cp("sdl", "pending", !0));
                };
            return D;
        }

        function l(w, y, A) {
            if (y) {
                var C = b(String(w));
                Dp(
                    "sdl",
                    A,
                    function(F) {
                        for (var D = 0; D < C.length; D++) {
                            var E = String(C[D]);
                            F.hasOwnProperty(E) || (F[E] = []);
                            F[E].push(y);
                        }
                        return F;
                    }, {}
                );
            }
        }

        function k(w) {
            return Ep("sdl", w, {});
        }

        function n(w) {
            H(w.vtp_gtmOnSuccess);
            var y = w.vtp_uniqueTriggerId,
                A = w.vtp_horizontalThresholdsPixels,
                C = w.vtp_horizontalThresholdsPercent,
                F = w.vtp_verticalThresholdUnits,
                D = w.vtp_verticalThresholdsPixels,
                E = w.vtp_verticalThresholdsPercent;
            switch (w.vtp_horizontalThresholdUnits) {
                case r.cd:
                    l(A, y, "horiz.pix");
                    break;
                case r.bd:
                    l(C, y, "horiz.pct");
            }
            switch (F) {
                case r.cd:
                    l(D, y, "vert.pix");
                    break;
                case r.bd:
                    l(E, y, "vert.pct");
            }
            jq("sdl") ?
                Ep("sdl", "pending") ||
                (x || (d(), (x = !0)),
                    H(function() {
                        return f();
                    })) :
                (d(),
                    (x = !0),
                    u &&
                    (kq("sdl"),
                        Cp("sdl", "pending", !0),
                        H(function() {
                            f();
                            if (a()) {
                                var L = g();
                                Gb(t, "scroll", L);
                                Gb(t, "resize", L);
                            } else Cp("sdl", "init", !1);
                        })));
        }
        var p = /^\s*$/,
            r = { bd: "PERCENT", cd: "PIXELS" },
            v = { Uf: "vertical", Kf: "horizontal" },
            t,
            q,
            u,
            x = !1,
            z;
        (function(w) {
            Z.__sdl = w;
            Z.__sdl.h = "sdl";
            Z.__sdl.isVendorTemplate = !0;
            Z.__sdl.priorityOverride = 0;
        })(function(w) {
            w.vtp_triggerStartOption ?
                n(w) :
                To(function() {
                    n(w);
                });
        });
    })();

    (Z.g.jsm = ["customScripts"]),
    (function() {
        (function(a) {
            Z.__jsm = a;
            Z.__jsm.h = "jsm";
            Z.__jsm.isVendorTemplate = !0;
            Z.__jsm.priorityOverride = 0;
        })(function(a) {
            if (void 0 !== a.vtp_javascript) {
                var b = a.vtp_javascript;
                try {
                    var c = X("google_tag_manager");
                    var d = c && c.e && c.e(b);
                    mq(d, "jsm", a.vtp_gtmEventId);
                    return d;
                } catch (e) {}
            }
        });
    })();
    (Z.g.c = ["google"]),
    (function() {
        (function(a) {
            Z.__c = a;
            Z.__c.h = "c";
            Z.__c.isVendorTemplate = !0;
            Z.__c.priorityOverride = 0;
        })(function(a) {
            mq(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value;
        });
    })();
    (Z.g.d = ["google"]),
    (function() {
        (function(a) {
            Z.__d = a;
            Z.__d.h = "d";
            Z.__d.isVendorTemplate = !0;
            Z.__d.priorityOverride = 0;
        })(function(a) {
            var b = null,
                c = null,
                d = a.vtp_attributeName;
            if ("CSS" == a.vtp_selectorType)
                try {
                    var e = mf(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0]);
                } catch (f) {
                    b = null;
                }
            else b = G.getElementById(a.vtp_elementId);
            b && (d ? (c = Ib(b, d)) : (c = Jb(b)));
            return Na(String(b && c));
        });
    })();
    (Z.g.e = ["google"]),
    (function() {
        (function(a) {
            Z.__e = a;
            Z.__e.h = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0;
        })(function(a) {
            var b = String(le(a.vtp_gtmEventId, "event"));
            a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
            return b;
        });
    })();
    (Z.g.f = ["google"]),
    (function() {
        (function(a) {
            Z.__f = a;
            Z.__f.h = "f";
            Z.__f.isVendorTemplate = !0;
            Z.__f.priorityOverride = 0;
        })(function(a) {
            var b = dq("gtm.referrer", 1) || G.referrer;
            return b ?
                a.vtp_component && "URL" != a.vtp_component ?
                mg(
                    og(String(b)),
                    a.vtp_component,
                    a.vtp_stripWww,
                    a.vtp_defaultPages,
                    a.vtp_queryKey
                ) :
                cq(String(b)) :
                String(b);
        });
    })();
    (Z.g.cl = ["google"]),
    (function() {
        function a(b) {
            var c = b.target;
            if (c) {
                var d = Ap(c, "gtm.click");
                eq(d);
            }
        }
        (function(b) {
            Z.__cl = b;
            Z.__cl.h = "cl";
            Z.__cl.isVendorTemplate = !0;
            Z.__cl.priorityOverride = 0;
        })(function(b) {
            if (!jq("cl")) {
                var c = X("document");
                Gb(c, "click", a, !0);
                kq("cl");
            }
            H(b.vtp_gtmOnSuccess);
        });
    })();
    (Z.g.k = ["google"]),
    (function() {
        (function(a) {
            Z.__k = a;
            Z.__k.h = "k";
            Z.__k.isVendorTemplate = !0;
            Z.__k.priorityOverride = 0;
        })(function(a) {
            return gq(a.vtp_name, dq("gtm.cookie", 1), !!a.vtp_decodeCookie)[0];
        });
    })();

    (Z.g.u = ["google"]),
    (function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b;
                },
            };
        };
        (function(b) {
            Z.__u = b;
            Z.__u.h = "u";
            Z.__u.isVendorTemplate = !0;
            Z.__u.priorityOverride = 0;
        })(function(b) {
            var c;
            c =
                (c = b.vtp_customUrlSource ?
                    b.vtp_customUrlSource :
                    dq("gtm.url", 1)) || aq();
            var d = b[a("vtp_component")];
            if (!d || "URL" == d) return cq(String(c));
            var e = og(String(c)),
                f;
            if ("QUERY" === d)
                a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;
                    g ?
                    wa(l) ?
                    (n = l) :
                    (n = String(l).replace(/\s+/g, "").split(",")) :
                        (n = [String(l)]);
                    for (var p = 0; p < n.length; p++) {
                        var r = mg(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != r && (!k || "" !== r)) {
                            f = r;
                            break a;
                        }
                    }
                    f = void 0;
                }
            else
                f = mg(
                    e,
                    d,
                    "HOST" == d ? b[a("vtp_stripWww")] : void 0,
                    "PATH" == d ? b[a("vtp_defaultPages")] : void 0,
                    void 0
                );
            return f;
        });
    })();
    (Z.g.v = ["google"]),
    (function() {
        (function(a) {
            Z.__v = a;
            Z.__v.h = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0;
        })(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = dq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                d = void 0 !== c ? c : a.vtp_defaultValue;
            mq(d, "v", a.vtp_gtmEventId);
            return d;
        });
    })();
    (Z.g.ua = ["google"]),
    (function() {
        function a(q) {
            return ff(q);
        }

        function b(q, u, x) {
            var z = !1;
            if (Ne() && !z && !f[q]) {
                var w = !ff(P.H),
                    y = function() {
                        var A = rj(),
                            C = "gtm" + Rd(),
                            F = r(u);
                        F["&gtm"] = Xk(!0);
                        var D = { name: C };
                        p(F, D, !0);
                        var E = void 0,
                            L = D._useUp;
                        A(function() {
                            var J = A.getByName(x);
                            J && (E = J.get("clientId"));
                        });
                        A("create", q, D);
                        w &&
                            ff(P.H) &&
                            ((w = !1),
                                A(function() {
                                    var J = rj().getByName(C);
                                    !J ||
                                        (J.get("clientId") === E && L) ||
                                        ((F["&gcs"] = gf()),
                                            (F["&gcu"] = "1"),
                                            J.set(F),
                                            J.send("pageview"));
                                }));
                        A(function() {
                            A.remove(C);
                        });
                    };
                Se(y, P.H);
                Se(y, P.C);
                f[q] = !0;
            }
        }
        var c = !1;
        c = !0;
        var d,
            e = {},
            f = {},
            g = {
                name: !0,
                clientId: !0,
                sampleRate: !0,
                siteSpeedSampleRate: !0,
                alwaysSendReferrer: !0,
                allowAnchor: !0,
                allowLinker: !0,
                cookieName: !0,
                cookieDomain: !0,
                cookieExpires: !0,
                cookiePath: !0,
                cookieUpdate: !0,
                cookieFlags: !0,
                legacyCookieDomain: !0,
                legacyHistoryImport: !0,
                storage: !0,
                useAmpClientId: !0,
                storeGac: !0,
                _cd2l: !0,
                _useUp: !0,
                _cs: !0,
            },
            l = {
                allowAnchor: !0,
                allowLinker: !0,
                alwaysSendReferrer: !0,
                anonymizeIp: !0,
                cookieUpdate: !0,
                exFatal: !0,
                forceSSL: !0,
                javaEnabled: !0,
                legacyHistoryImport: !0,
                nonInteraction: !0,
                useAmpClientId: !0,
                useBeacon: !0,
                storeGac: !0,
                allowAdFeatures: !0,
                allowAdPersonalizationSignals: !0,
                _cd2l: !0,
            },
            k = { urlPassthrough: !0 };
        var n = function(q, u) {
            if (q)
                for (var x in q)
                    if (!k[x] && q.hasOwnProperty(x)) {
                        var z = l[x] ? Ha(q[x]) : q[x];
                        "anonymizeIp" != x || z || (z = void 0);
                        u[x] = z;
                    }
        };
        var p = function(q, u, x) {
                var z = 0;
                if (q)
                    for (var w in q)
                        if (!k[w] &&
                            q.hasOwnProperty(w) &&
                            ((x && g[w]) || (!x && void 0 === g[w]))
                        ) {
                            var y = l[w] ? Ha(q[w]) : q[w];
                            "anonymizeIp" != w || y || (y = void 0);
                            u[w] = y;
                            z++;
                        }
                return z;
            },
            r = function(q) {
                var u = {};
                q.vtp_gaSettings &&
                    O(Tq(q.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), u);
                O(Tq(q.vtp_fieldsToSet, "fieldName", "value"), u);
                Ha(u.urlPassthrough) && (u._useUp = !0);
                q.vtp_transportUrl && (u._x_19 = q.vtp_transportUrl);
                if (!c) {
                    u._x_19 && (u._cd2l = !0);
                    ff(P.H) || (u.storage = "none");
                    ff(P.C) || ((u.allowAdFeatures = !1), (u.storeGac = !1));
                    sn() || (u.allowAdFeatures = !1);
                    rn() || (u.allowAdPersonalizationSignals = !1);
                    if (Ha(u.urlPassthrough)) {
                        var x = !1;
                        Ne() && !x && (u._cs = a);
                    }
                }
                return u;
            },
            v = function(q, u) {},
            t = function(q) {
                function u(ka, fa) {
                    void 0 !== q[fa] && M("set", ka, q[fa]);
                }

                function x() {
                    if (
                        q.vtp_doubleClick ||
                        "DISPLAY_FEATURES" == q.vtp_advertisingFeaturesType
                    ) {
                        var ka =
                            "_dc_gtm_" +
                            String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                        M("require", "displayfeatures", void 0, { cookieName: ka });
                    }
                }
                var z = {},
                    w = {},
                    y = {},
                    A = {};
                if (q.vtp_gaSettings) {
                    var C = q.vtp_gaSettings;
                    O(Tq(C.vtp_contentGroup, "index", "group"), w);
                    O(Tq(C.vtp_dimension, "index", "dimension"), y);
                    O(Tq(C.vtp_metric, "index", "metric"), A);
                    var F = O(C);
                    F.vtp_fieldsToSet = void 0;
                    F.vtp_contentGroup = void 0;
                    F.vtp_dimension = void 0;
                    F.vtp_metric = void 0;
                    q = O(q, F);
                }
                O(Tq(q.vtp_contentGroup, "index", "group"), w);
                O(Tq(q.vtp_dimension, "index", "dimension"), y);
                O(Tq(q.vtp_metric, "index", "metric"), A);
                var D = r(q),
                    E = "",
                    L = tj(q.vtp_functionName);
                if (sa(L)) {
                    var J = "",
                        N = "";
                    q.vtp_setTrackerName && "string" == typeof q.vtp_trackerName ?
                        "" !== q.vtp_trackerName &&
                        ((N = q.vtp_trackerName), (J = N + ".")) :
                        ((N = "gtm" + Rd()), (J = N + "."));
                    var M = function(ka) {
                            var fa = [].slice.call(arguments, 0);
                            fa[0] = J + fa[0];
                            L.apply(window, fa);
                        },
                        I = function(ka, fa) {
                            return void 0 === fa ? fa : ka(fa);
                        },
                        K = function(ka, fa) {
                            if (fa)
                                for (var Ma in fa)
                                    fa.hasOwnProperty(Ma) &&
                                    (c ? (D[ka + Ma] = fa[Ma]) : M("set", ka + Ma, fa[Ma]));
                        },
                        Q = function() {},
                        V = function(ka, fa) {
                            return void 0 === q[ka] ? z[fa] : q[ka];
                        },
                        ca = String(q.vtp_trackingId || z.trackingId || "");
                    if (c) {
                        var pa = function() {
                            if (
                                q.vtp_doubleClick ||
                                "DISPLAY_FEATURES" == q.vtp_advertisingFeaturesType
                            )
                                D.displayfeatures = !0;
                        };
                        K("contentGroup", w);
                        K("dimension", y);
                        K("metric", A);
                        var oa = {};
                        q.vtp_enableEcommerce && (D.gtmEcommerceData = Q());
                        if ("TRACK_EVENT" === q.vtp_trackType)
                            (E = "track_event"),
                            pa(),
                            (D.eventCategory = String(
                                V("vtp_eventCategory", "category")
                            )),
                            (D.eventAction = String(V("vtp_eventAction", "action"))),
                            (D.eventLabel = I(String, V("vtp_eventLabel", "label"))),
                            (D.value = I(Ea, V("vtp_eventValue", "value")));
                        else if ("TRACK_PAGEVIEW" == q.vtp_trackType) {
                            if (
                                ((E = P.Zb),
                                    pa(),
                                    "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
                                    q.vtp_advertisingFeaturesType && (D.remarketingLists = !0),
                                    q.vtp_autoLinkDomains)
                            ) {
                                var R = {};
                                R[P.N] = q.vtp_autoLinkDomains;
                                R.use_anchor = q.vtp_useHashAutoLink;
                                R[P.ob] = q.vtp_decorateFormsAutoLink;
                                D[P.ia] = R;
                            }
                        } else
                            "TRACK_SOCIAL" === q.vtp_trackType ?
                            ((E = "track_social"),
                                (D.socialNetwork = String(q.vtp_socialNetwork)),
                                (D.socialAction = String(q.vtp_socialAction)),
                                (D.socialTarget = String(q.vtp_socialActionTarget))) :
                            "TRACK_TIMING" == q.vtp_trackType &&
                            ((E = "timing_complete"),
                                (D.eventCategory = String(
                                    V("vtp_timingCategory", "category")
                                )),
                                (D.timingVar = String(V("vtp_timingVar", "name"))),
                                (D.value = Ea(V("vtp_timingValue", "value"))),
                                (D.eventLabel = I(String, V("vtp_timingLabel", "label"))));
                        q.vtp_enableRecaptcha && (D.enableRecaptcha = !0);
                        q.vtp_enableLinkId && (D.enableLinkId = !0);
                        n(D, oa);
                        D.name || (oa.gtmTrackerName = N);
                        oa.gaFunctionName = q.vtp_functionName;
                        void 0 !== q.vtp_nonInteraction &&
                            (oa.nonInteraction = q.vtp_nonInteraction);
                        var da = Sf(Pf(Kf(oa), q.vtp_gtmOnSuccess), q.vtp_gtmOnFailure);
                        da.isGtmEvent = !0;
                        Mn(ca, E, Date.now(), da);
                    }
                    if (!c) {
                        var va = function(ka, fa) {
                                void 0 !== fa && M("set", ka, fa);
                            },
                            Fa = { name: N };
                        p(D, Fa, !0);
                        L("create", ca, Fa);
                        M("set", "&gtm", Xk(!0));
                        K("contentGroup", w);
                        K("dimension", y);
                        K("metric", A);
                        var Ta = !1;
                        Ne() && !Ta && (M("set", "&gcs", gf()), b(ca, q, N));
                        D._x_19 &&
                            D._x_20 &&
                            !e[N] &&
                            ((e[N] = !0), L(yj(N, String(D._x_20))));
                        q.vtp_enableRecaptcha &&
                            M("require", "recaptcha", "recaptcha.js");
                        u("nonInteraction", "vtp_nonInteraction");
                        var La = {};
                        p(D, La, !1) && M("set", La);
                        if (q.vtp_enableLinkId) {
                            var Sd = {};
                            M("require", "linkid", "linkid.js", Sd);
                        }
                        M("set", "hitCallback", function() {
                            var ka = D && D.hitCallback;
                            sa(ka) && ka();
                            q.vtp_gtmOnSuccess();
                        });
                    }
                    var Pb;
                    if ("TRACK_EVENT" == q.vtp_trackType) {
                        if (!c) {
                            if (q.vtp_enableEcommerce) {
                                var Td = {};
                                Sk() && D._x_19 && (Td._x_19 = D._x_19);
                                M("require", "ec", "ec.js", Td);
                                Q();
                            }
                            x();
                            var od = {
                                hitType: "event",
                                eventCategory: String(V("vtp_eventCategory", "category")),
                                eventAction: String(V("vtp_eventAction", "action")),
                                eventLabel: I(String, V("vtp_eventLabel", "label")),
                                eventValue: I(Ea, V("vtp_eventValue", "value")),
                            };
                            p(Pb, od, !1);
                            M("send", od);
                        }
                    } else if ("TRACK_SOCIAL" == q.vtp_trackType) {
                        if (!c) {}
                    } else if ("TRACK_TRANSACTION" == q.vtp_trackType) {} else if ("TRACK_TIMING" == q.vtp_trackType) {
                        if (!c) {}
                    } else if ("DECORATE_LINK" == q.vtp_trackType) {
                        var uc = dq("gtm.element", 1);
                        uc &&
                            L(function() {
                                var ka = rj(),
                                    fa = ka && ka.getByName && ka.getByName(N),
                                    Ma = sb(X("gaplugins").Linker, fa);
                                uc &&
                                    uc.href &&
                                    ((uc.href = Ma.decorate(
                                            uc.href,
                                            q.vtp_useHashDecorateLink
                                        )),
                                        H(q.vtp_gtmOnSuccess));
                            });
                    } else if ("DECORATE_FORM" == q.vtp_trackType) {} else if ("TRACK_DATA" == q.vtp_trackType) {} else if (!c) {
                        if (q.vtp_enableEcommerce) {
                            var We = {};
                            Sk() && D._x_19 && (We._x_19 = D._x_19);
                            M("require", "ec", "ec.js", We);
                            Q();
                        }
                        x();
                        if (
                            "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
                            q.vtp_advertisingFeaturesType
                        ) {
                            var sd =
                                "_dc_gtm_" +
                                String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                            M("require", "adfeatures", { cookieName: sd });
                        }
                        Pb ? M("send", "pageview", Pb) : M("send", "pageview");
                        v(q, J);
                        Ha(D.urlPassthrough) && vj(J);
                    }
                    if (!d) {
                        var Qb = q.vtp_useDebugVersion ?
                            "u/analytics_debug.js" :
                            "analytics.js";
                        q.vtp_useInternalVersion &&
                            !q.vtp_useDebugVersion &&
                            (Qb = "internal/" + Qb);
                        d = !0;
                        var Xe = Qk(D._x_19, "/analytics.js"),
                            Kg = $l(
                                "https:",
                                "http:",
                                "//www.google-analytics.com/" + Qb,
                                D && !!D.forceSSL
                            );
                        W(
                            "analytics.js" === Qb && Xe ? Xe : Kg,
                            function() {
                                var ka = rj();
                                (ka && ka.loaded) || q.vtp_gtmOnFailure();
                            },
                            q.vtp_gtmOnFailure
                        );
                    }
                } else H(q.vtp_gtmOnFailure);
            };
        (function(q) {
            Z.__ua = q;
            Z.__ua.h = "ua";
            Z.__ua.isVendorTemplate = !0;
            Z.__ua.priorityOverride = 0;
        })(function(q) {
            kf(
                function() {
                    t(q);
                }, [P.H, P.C]
            );
        });
    })();

    (Z.g.ytl = ["google"]),
    (function() {
        function a() {
            var q = Math.round(1e9 * Math.random()) + "";
            return G.getElementById(q) ? a() : q;
        }

        function b(q, u) {
            if (!q) return !1;
            for (var x = 0; x < p.length; x++)
                if (0 <= q.indexOf("//" + p[x] + "/" + u)) return !0;
            return !1;
        }

        function c(q, u) {
            var x = q.getAttribute("src");
            if (b(x, "embed/")) {
                if (0 < x.indexOf("enablejsapi=1")) return !0;
                if (u) {
                    var z = q.setAttribute,
                        w;
                    var y = -1 !== x.indexOf("?") ? "&" : "?";
                    if (-1 < x.indexOf("origin=")) w = x + y + "enablejsapi=1";
                    else {
                        if (!v) {
                            var A = X("document");
                            v = A.location.protocol + "//" + A.location.hostname;
                            A.location.port && (v += ":" + A.location.port);
                        }
                        w = x + y + "enablejsapi=1&origin=" + encodeURIComponent(v);
                    }
                    z.call(q, "src", w);
                    return !0;
                }
            }
            return !1;
        }

        function d(q, u) {
            if (!q.getAttribute("data-gtm-yt-inspected-" + u.We) &&
                (q.setAttribute("data-gtm-yt-inspected-" + u.We, "true"), c(q, u.kg))
            ) {
                q.id || (q.id = a());
                var x = X("YT"),
                    z = x.get(q.id);
                z || (z = new x.Player(q.id));
                var w = f(z, u),
                    y = {},
                    A;
                for (A in w)
                    (y.Yb = A),
                    w.hasOwnProperty(y.Yb) &&
                    z.addEventListener(
                        y.Yb,
                        (function(C) {
                            return function(F) {
                                return w[C.Yb](F.data);
                            };
                        })(y)
                    ),
                    (y = { Yb: y.Yb });
            }
        }

        function e(q) {
            H(function() {
                function u() {
                    for (
                        var z = x.getElementsByTagName("iframe"), w = z.length, y = 0; y < w; y++
                    )
                        d(z[y], q);
                }
                var x = X("document");
                u();
                Mp(u);
            });
        }

        function f(q, u) {
            var x, z;

            function w() {
                N = Xp(
                    function() {
                        return {
                            url: K,
                            title: Q,
                            fg: I,
                            mi: q.getCurrentTime(),
                            playbackRate: V,
                        };
                    },
                    u.We,
                    q.getIframe()
                );
                I = 0;
                Q = K = "";
                V = 1;
                return y;
            }

            function y(R) {
                switch (R) {
                    case r.PLAYING:
                        I = Math.round(q.getDuration());
                        K = q.getVideoUrl();
                        if (q.getVideoData) {
                            var da = q.getVideoData();
                            Q = da ? da.title : "";
                        }
                        V = q.getPlaybackRate();
                        u.fi ? eq(N.createEvent("start")) : N.te();
                        M = k(u.bj, u.aj, q.getDuration());
                        return A(R);
                    default:
                        return y;
                }
            }

            function A() {
                ca = q.getCurrentTime();
                pa = $p().getTime();
                N.jj();
                J();
                return C;
            }

            function C(R) {
                var da;
                switch (R) {
                    case r.ENDED:
                        return D(R);
                    case r.PAUSED:
                        da = "pause";
                    case r.BUFFERING:
                        var va = q.getCurrentTime() - ca;
                        da =
                            1 < Math.abs((($p().getTime() - pa) / 1e3) * V - va) ?
                            "seek" :
                            da || "buffering";
                        q.getCurrentTime() && (u.ei ? eq(N.createEvent(da)) : N.te());
                        L();
                        return F;
                    case r.UNSTARTED:
                        return w(R);
                    default:
                        return C;
                }
            }

            function F(R) {
                switch (R) {
                    case r.ENDED:
                        return D(R);
                    case r.PLAYING:
                        return A(R);
                    case r.UNSTARTED:
                        return w(R);
                    default:
                        return F;
                }
            }

            function D() {
                for (; z;) {
                    var R = x;
                    Yp(z);
                    R();
                }
                u.di && eq(N.createEvent("complete", 1));
                return w(r.UNSTARTED);
            }

            function E() {}

            function L() {
                z && (Yp(z), (z = 0), (x = E));
            }

            function J() {
                if (M.length && 0 !== V) {
                    var R = -1,
                        da;
                    do {
                        da = M[0];
                        if (da.zb > q.getDuration()) return;
                        R = (da.zb - q.getCurrentTime()) / V;
                        if (0 > R && (M.shift(), 0 === M.length)) return;
                    } while (0 > R);
                    x = function() {
                        z = 0;
                        x = E;
                        0 < M.length &&
                            M[0].zb === da.zb &&
                            (M.shift(), eq(N.createEvent("progress", da.xg, da.Eg)));
                        J();
                    };
                    z = Zp(x, 1e3 * R);
                }
            }
            var N,
                M = [],
                I,
                K,
                Q,
                V,
                ca,
                pa,
                oa = w(r.UNSTARTED);
            z = 0;
            x = E;
            return {
                onStateChange: function(R) {
                    oa = oa(R);
                },
                onPlaybackRateChange: function(R) {
                    ca = q.getCurrentTime();
                    pa = $p().getTime();
                    N.te();
                    V = R;
                    L();
                    J();
                },
            };
        }

        function g(q) {
            for (var u = q.split(","), x = u.length, z = [], w = 0; w < x; w++) {
                var y = parseInt(u[w], 10);
                isNaN(y) || 100 < y || 0 > y || z.push(y / 100);
            }
            z.sort(function(A, C) {
                return A - C;
            });
            return z;
        }

        function l(q) {
            for (var u = q.split(","), x = u.length, z = [], w = 0; w < x; w++) {
                var y = parseInt(u[w], 10);
                isNaN(y) || 0 > y || z.push(y);
            }
            z.sort(function(A, C) {
                return A - C;
            });
            return z;
        }

        function k(q, u, x) {
            var z = q.map(function(A) {
                return {
                    zb: A,
                    Eg: A,
                    xg: void 0,
                };
            });
            if (!u.length) return z;
            var w = u.map(function(A) {
                return { zb: A * x, Eg: void 0, xg: A };
            });
            if (!z.length) return w;
            var y = z.concat(w);
            y.sort(function(A, C) {
                return A.zb - C.zb;
            });
            return y;
        }

        function n(q) {
            var u = !!q.vtp_captureStart,
                x = !!q.vtp_captureComplete,
                z = !!q.vtp_capturePause,
                w = g(q.vtp_progressThresholdsPercent + ""),
                y = l(q.vtp_progressThresholdsTimeInSeconds + ""),
                A = !!q.vtp_fixMissingApi;
            if (u || x || z || w.length || y.length) {
                var C = {
                        fi: u,
                        di: x,
                        ei: z,
                        aj: w,
                        bj: y,
                        kg: A,
                        We: void 0 === q.vtp_uniqueTriggerId ? "" : q.vtp_uniqueTriggerId,
                    },
                    F = X("YT"),
                    D = function() {
                        e(C);
                    };
                H(q.vtp_gtmOnSuccess);
                if (F) F.ready && F.ready(D);
                else {
                    var E = X("onYouTubeIframeAPIReady");
                    fq("onYouTubeIframeAPIReady", function() {
                        E && E();
                        D();
                    });
                    H(function() {
                        for (
                            var L = X("document"),
                                J = L.getElementsByTagName("script"),
                                N = J.length,
                                M = 0; M < N; M++
                        ) {
                            var I = J[M].getAttribute("src");
                            if (b(I, "iframe_api") || b(I, "player_api")) return;
                        }
                        for (
                            var K = L.getElementsByTagName("iframe"), Q = K.length, V = 0; V < Q; V++
                        )
                            if (!t && c(K[V], C.kg)) {
                                W("https://www.youtube.com/iframe_api");
                                t = !0;
                                break;
                            }
                    });
                }
            } else H(q.vtp_gtmOnSuccess);
        }
        var p = ["www.youtube.com", "www.youtube-nocookie.com"],
            r = {
                UNSTARTED: -1,
                ENDED: 0,
                PLAYING: 1,
                PAUSED: 2,
                BUFFERING: 3,
                CUED: 5,
            },
            v,
            t = !1;
        (function(q) {
            Z.__ytl = q;
            Z.__ytl.h = "ytl";
            Z.__ytl.isVendorTemplate = !0;
            Z.__ytl.priorityOverride = 0;
        })(function(q) {
            q.vtp_triggerStartOption ?
                n(q) :
                ej(function() {
                    n(q);
                });
        });
    })();

    (Z.g.gclidw = ["google"]),
    (function() {
        var a = ["aw", "dc", "gf", "ha", "gb"];
        (function(b) {
            Z.__gclidw = b;
            Z.__gclidw.h = "gclidw";
            Z.__gclidw.isVendorTemplate = !0;
            Z.__gclidw.priorityOverride = 100;
        })(function(b) {
            H(b.vtp_gtmOnSuccess);
            var c, d, e, f;
            b.vtp_enableCookieOverrides &&
                ((e = b.vtp_cookiePrefix),
                    (c = b.vtp_path),
                    (d = b.vtp_domain),
                    b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
            var g = { prefix: e, path: c, domain: d, flags: f };
            b.vtp_enableCrossDomainFeature &&
                ((b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming) ||
                    ((b.vtp_enableCrossDomain || di()) && xi(a, g)));
            ui(g);
            Ai(["aw", "dc"], g);
            Pi(g);
            var l = e;
            if (
                b.vtp_enableCrossDomainFeature &&
                b.vtp_enableCrossDomain &&
                b.vtp_linkerDomains
            ) {
                var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                zi(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, l);
            }
            var n = dq(P.T);
            Jl({ we: !1, Ga: void 0 != n && !1 !== n, ub: g, vd: !0 });
            b.vtp_enableUrlPassthrough && Ci(["aw", "dc", "gb"]);
        });
    })();
    (Z.g.aev = ["google"]),
    (function() {
        function a(t, q, u) {
            var x = t || le(q, "gtm");
            if (x) return x[u];
        }

        function b(t, q, u, x, z) {
            z || (z = "element");
            var w = q + "." + u,
                y;
            if (p.hasOwnProperty(w)) y = p[w];
            else {
                var A = a(t, q, z);
                if (A && ((y = x(A)), (p[w] = y), r.push(w), 35 < r.length)) {
                    var C = r.shift();
                    delete p[C];
                }
            }
            return y;
        }

        function c(t, q, u, x) {
            var z = a(t, q, v[u]);
            return void 0 !== z ? z : x;
        }

        function d(t, q) {
            if (!t) return !1;
            var u = e(aq());
            wa(q) ||
                (q = String(q || "")
                    .replace(/\s+/g, "")
                    .split(","));
            for (var x = [u], z = 0; z < q.length; z++) {
                var w = q[z];
                if (w.hasOwnProperty("is_regex"))
                    if (w.is_regex)
                        try {
                            w = new RegExp(w.domain);
                        } catch (A) {
                            continue;
                        }
                    else w = w.domain;
                if (w instanceof RegExp) {
                    if (w.test(t)) return !1;
                } else {
                    var y = w;
                    if (0 != y.length) {
                        if (0 <= e(t).indexOf(y)) return !1;
                        x.push(e(y));
                    }
                }
            }
            return !Sq(t, x);
        }

        function e(t) {
            n.test(t) || (t = "http://" + t);
            return mg(og(t), "HOST", !0);
        }

        function f(t, q, u, x) {
            switch (t) {
                case "SUBMIT_TEXT":
                    return b(q, u, "FORM." + t, g, "formSubmitElement") || x;
                case "LENGTH":
                    var z = b(q, u, "FORM." + t, l);
                    return void 0 === z ? x : z;
                case "INTERACTED_FIELD_ID":
                    return k(q, u, "id", x);
                case "INTERACTED_FIELD_NAME":
                    return k(q, u, "name", x);
                case "INTERACTED_FIELD_TYPE":
                    return k(q, u, "type", x);
                case "INTERACTED_FIELD_POSITION":
                    var w = a(q, u, "interactedFormFieldPosition");
                    return void 0 === w ? x : w;
                case "INTERACT_SEQUENCE_NUMBER":
                    var y = a(q, u, "interactSequenceNumber");
                    return void 0 === y ? x : y;
                default:
                    return x;
            }
        }

        function g(t) {
            switch (t.tagName.toLowerCase()) {
                case "input":
                    return Ib(t, "value");
                case "button":
                    return Jb(t);
                default:
                    return null;
            }
        }

        function l(t) {
            if ("form" === t.tagName.toLowerCase() && t.elements) {
                for (var q = 0, u = 0; u < t.elements.length; u++)
                    Hp(t.elements[u]) && q++;
                return q;
            }
        }

        function k(t, q, u, x) {
            var z = a(t, q, "interactedFormField");
            return (z && Ib(z, u)) || x;
        }
        var n = /^https?:\/\//i,
            p = {},
            r = [],
            v = {
                ATTRIBUTE: "elementAttribute",
                CLASSES: "elementClasses",
                ELEMENT: "element",
                ID: "elementId",
                HISTORY_CHANGE_SOURCE: "historyChangeSource",
                HISTORY_NEW_STATE: "newHistoryState",
                HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                HISTORY_OLD_STATE: "oldHistoryState",
                HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                TARGET: "elementTarget",
            };
        (function(t) {
            Z.__aev = t;
            Z.__aev.h = "aev";
            Z.__aev.isVendorTemplate = !0;
            Z.__aev.priorityOverride = 0;
        })(function(t) {
            var q = t.vtp_gtmEventId,
                u = t.vtp_defaultValue,
                x = t.vtp_varType,
                z;
            t.vtp_gtmCachedValues && (z = t.vtp_gtmCachedValues.gtm);
            switch (x) {
                case "TAG_NAME":
                    var w = a(z, q, "element");
                    return (w && w.tagName) || u;
                case "TEXT":
                    return b(z, q, x, Jb) || u;
                case "URL":
                    var y;
                    a: {
                        var A = String(a(z, q, "elementUrl") || u || ""),
                            C = og(A),
                            F = String(t.vtp_component || "URL");
                        switch (F) {
                            case "URL":
                                y = A;
                                break a;
                            case "IS_OUTBOUND":
                                y = d(A, t.vtp_affiliatedDomains);
                                break a;
                            default:
                                y = mg(
                                    C,
                                    F,
                                    t.vtp_stripWww,
                                    t.vtp_defaultPages,
                                    t.vtp_queryKey
                                );
                        }
                    }
                    return y;
                case "ATTRIBUTE":
                    var D;
                    if (void 0 === t.vtp_attribute) D = c(z, q, x, u);
                    else {
                        var E = t.vtp_attribute,
                            L = a(z, q, "element");
                        D = (L && Ib(L, E)) || u || "";
                    }
                    return D;
                case "MD":
                    var J = t.vtp_mdValue,
                        N = b(z, q, "MD", Tp);
                    return J && N ? Wp(N, J) || u : N || u;
                case "FORM":
                    return f(String(t.vtp_component || "SUBMIT_TEXT"), z, q, u);
                default:
                    var M = c(z, q, x, u);
                    mq(M, "aev", t.vtp_gtmEventId);
                    return M;
            }
        });
    })();

    (Z.g.gas = ["google"]),
    (function() {
        (function(a) {
            Z.__gas = a;
            Z.__gas.h = "gas";
            Z.__gas.isVendorTemplate = !0;
            Z.__gas.priorityOverride = 0;
        })(function(a) {
            var b = O(a),
                c = b;
            c[Xb.sb] = null;
            c[Xb.Ih] = null;
            var d = (b = c);
            d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
            var e = d.vtp_cookieDomain;
            void 0 !== e &&
                (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
                    delete d.vtp_cookieDomain);
            return b;
        });
    })();

    (Z.g.zone = []),
    (function() {
        function a(k) {
            for (var n = k.vtp_boundaries || [], p = 0; p < n.length; p++)
                if (!n[p]) return !1;
            return !0;
        }

        function b(k) {
            var n = S.J,
                p = n + ":" + k.vtp_gtmTagId,
                r = dq("gtm.uniqueEventId") || 0,
                v = we(function() {
                    return new g();
                }),
                t = a(k),
                q = k.vtp_enableTypeRestrictions ?
                k.vtp_whitelistedTypes.map(function(y) {
                    return y.typeId;
                }) :
                null;
            q = q && Va(q, f);
            if (v.registerZone(p, r, t, q))
                for (
                    var u = k.vtp_childContainers.map(function(y) {
                            return y.publicId;
                        }),
                        x = 0; x < u.length; x++
                ) {
                    var z = String(u[x]);
                    if (v.registerChild(z, n, p))
                        if (0 === z.indexOf("GTM-")) lq(z);
                        else {
                            (function(y, A) {
                                eq(arguments);
                            })("js", Oa());
                            wp(z);
                            var w = {};
                            so(w, z);
                        }
                }
        }
        var c = {
                active: !1,
                isAllowed: function() {
                    return !1;
                },
                Li: function() {
                    return !1;
                },
            },
            d = {
                active: !0,
                isAllowed: function() {
                    return !0;
                },
                Li: function() {
                    return !0;
                },
            },
            e = {
                zone: !0,
                cn: !0,
                css: !0,
                ew: !0,
                eq: !0,
                ge: !0,
                gt: !0,
                lc: !0,
                le: !0,
                lt: !0,
                re: !0,
                sw: !0,
                um: !0,
            },
            f = { cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"] },
            g = function() {
                this.m = {};
                this.o = {};
            };
        g.prototype.checkState = function(k, n) {
            var p = this.m[k];
            if (!p) return d;
            var r = this.checkState(p.wg, n);
            if (!r.active) return c;
            for (var v = [], t = 0; t < p.Xe.length; t++) {
                var q = this.o[p.Xe[t]];
                q.xc(n) && v.push(q);
            }
            return v.length ?
                {
                    active: !0,
                    isAllowed: function(u, x) {
                        x = x || [];
                        var z = r.isAllowed;
                        if (!z(u, x)) return !1;
                        for (var w = 0; w < v.length; ++w)
                            if (v[w].isAllowed(u, x)) return !0;
                        return !1;
                    },
                } :
                c;
        };
        g.prototype.unregisterChild = function(k) {
            delete this.m[k];
        };
        g.prototype.registerZone = function(k, n, p, r) {
            var v = this.o[k];
            if (v) return v.s(n, p), !1;
            if (!p) return !1;
            this.o[k] = new l(n, r);
            return !0;
        };
        g.prototype.registerChild = function(k, n, p) {
            var r = this.m[k];
            if ((!r && U[k]) || (r && r.wg !== n)) return !1;
            if (r) return r.Xe.push(p), !1;
            this.m[k] = { wg: n, Xe: [p] };
            return !0;
        };
        var l = function(k, n) {
            this.m = [{ eventId: k, xc: !0 }];
            this.o = null;
            if (n) {
                this.o = {};
                for (var p = 0; p < n.length; p++) this.o[n[p]] = !0;
            }
        };
        l.prototype.s = function(k, n) {
            var p = this.m[this.m.length - 1];
            k <= p.eventId || (p.xc != n && this.m.push({ eventId: k, xc: n }));
        };
        l.prototype.xc = function(k) {
            if (!this.m || 0 == this.m.length) return !1;
            for (var n = this.m.length - 1; 0 <= n; n--)
                if (this.m[n].eventId <= k) return this.m[n].xc;
            return !1;
        };
        l.prototype.isAllowed = function(k, n) {
            n = n || [];
            if (!this.o || e[k] || this.o[k]) return !0;
            for (var p = 0; p < n.length; ++p)
                if (this.o[n[p]]) return !0;
            return !1;
        };
        (function(k) {
            Z.__zone = k;
            Z.__zone.h = "zone";
            Z.__zone.isVendorTemplate = !0;
            Z.__zone.priorityOverride = 0;
        })(function(k) {
            b(k);
            H(k.vtp_gtmOnSuccess);
        });
    })();

    (Z.g.lcl = []),
    (function() {
        function a() {
            var c = X("document"),
                d = 0,
                e = function(f) {
                    var g = f.target;
                    if (
                        g &&
                        3 !== f.which &&
                        !(f.Ii || (f.timeStamp && f.timeStamp === d))
                    ) {
                        d = f.timeStamp;
                        g = Lb(g, ["a", "area"], 100);
                        if (!g) return f.returnValue;
                        var l = f.defaultPrevented || !1 === f.returnValue,
                            k = Ep("lcl", l ? "nv.mwt" : "mwt", 0),
                            n;
                        n = l ? Ep("lcl", "nv.ids", []) : Ep("lcl", "ids", []);
                        if (n.length) {
                            var p = Ap(g, "gtm.linkClick", n);
                            if (b(f, g, c) && !l && k && g.href) {
                                var r = !!xa(
                                    String(Nb(g, "rel") || "").split(" "),
                                    function(u) {
                                        return "noreferrer" === u.toLowerCase();
                                    }
                                );
                                r && Ed(36);
                                var v = X((Nb(g, "target") || "_self").substring(1)),
                                    t = !0,
                                    q = op(function() {
                                        var u;
                                        if ((u = t && v)) {
                                            var x;
                                            a: if (r) {
                                                    var z;
                                                    try {
                                                        z = new MouseEvent(f.type, { bubbles: !0 });
                                                    } catch (w) {
                                                        if (!c.createEvent) {
                                                            x = !1;
                                                            break a;
                                                        }
                                                        z = c.createEvent("MouseEvents");
                                                        z.initEvent(f.type, !0, !0);
                                                    }
                                                    z.Ii = !0;
                                                    f.target.dispatchEvent(z);
                                                    x = !0;
                                                } else x = !1;
                                            u = !x;
                                        }
                                        u && (v.location.href = Nb(g, "href"));
                                    }, k);
                                if (eq(p, q, k)) t = !1;
                                else
                                    return (
                                        f.preventDefault && f.preventDefault(),
                                        (f.returnValue = !1)
                                    );
                            } else eq(p, function() {}, k || 2e3);
                            return !0;
                        }
                    }
                };
            Gb(c, "click", e, !1);
            Gb(c, "auxclick", e, !1);
        }

        function b(c, d, e) {
            if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
                return !1;
            var f = Nb(d, "href"),
                g = f.indexOf("#"),
                l = Nb(d, "target");
            if ((l && "_self" !== l && "_parent" !== l && "_top" !== l) || 0 === g)
                return !1;
            if (0 < g) {
                var k = cq(f),
                    n = cq(e.location);
                return k !== n;
            }
            return !0;
        }
        (function(c) {
            Z.__lcl = c;
            Z.__lcl.h = "lcl";
            Z.__lcl.isVendorTemplate = !0;
            Z.__lcl.priorityOverride = 0;
        })(function(c) {
            var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                f = Number(c.vtp_waitForTagsTimeout);
            if (!f || 0 >= f) f = 2e3;
            var g = c.vtp_uniqueTriggerId || "0";
            if (d) {
                var l = function(n) {
                    return Math.max(f, n);
                };
                Dp("lcl", "mwt", l, 0);
                e || Dp("lcl", "nv.mwt", l, 0);
            }
            var k = function(n) {
                n.push(g);
                return n;
            };
            Dp("lcl", "ids", k, []);
            e || Dp("lcl", "nv.ids", k, []);
            jq("lcl") || (a(), kq("lcl"));
            H(c.vtp_gtmOnSuccess);
        });
    })();
    var Nt = {};
    (Nt.macro = function(a) {
        if (xp.pe.hasOwnProperty(a)) return xp.pe[a];
    }),
    (Nt.onHtmlSuccess = xp.dg(!0)),
    (Nt.onHtmlFailure = xp.dg(!1));
    Nt.dataLayer = ge;
    Nt.callback = function(a) {
        Pd.hasOwnProperty(a) && sa(Pd[a]) && Pd[a]();
        delete Pd[a];
    };
    Nt.bootstrap = 0;
    Nt._spx = !1;

    function Ot() {
        U[S.J] = Nt;
        Sa(Qd, Z.g);
        Ec = Ec || xp;
        Fc = Tc;
    }

    function Pt() {
        var a = !1;
        a && nj("INIT");
        Be().m(ye.m);
        U = B.google_tag_manager = B.google_tag_manager || {};
        zl();
        fi.enable_gbraid_cookie_write = !0;
        var b = !!U[S.J];
        if (b) {
            var c = U.zones;
            c && c.unregisterChild(S.J);
        } else {
            for (
                var g = data.resource || {}, l = g.macros || [], k = 0; k < l.length; k++
            )
                xc.push(l[k]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) Ac.push(n[p]);
            for (var r = g.predicates || [], v = 0; v < r.length; v++) zc.push(r[v]);
            for (var t = g.rules || [], q = 0; q < t.length; q++) {
                for (var u = t[q], x = {}, z = 0; z < u.length; z++)
                    x[u[z][0]] = Array.prototype.slice.call(u[z], 1);
                yc.push(x);
            }
            Cc = Z;
            Dc = Oq;
            Ot();
            up();
            $i = !1;
            aj = 0;
            if (
                ("interactive" == G.readyState && !G.createEventObject) ||
                "complete" == G.readyState
            )
                cj();
            else {
                Gb(G, "DOMContentLoaded", cj);
                Gb(G, "readystatechange", cj);
                if (G.createEventObject && G.documentElement.doScroll) {
                    var w = !0;
                    try {
                        w = !B.frameElement;
                    } catch (D) {}
                    w && dj();
                }
                Gb(B, "load", cj);
            }
            Qo = !1;
            "complete" === G.readyState ? So() : Gb(B, "load", So);
            kk && B.setInterval(ek, 864e5);
            Nd = new Date().getTime();
            if (a) {
                var F = oj("INIT");
            }
        }
    }
    (function(a) {
        if (!B["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (G.referrer) {
                var c = og(G.referrer);
                b = "cct.google" === lg(c, "host");
            }
            if (!b) {
                var d = Sg("googTaggyReferrer");
                b = d.length && d[0].length;
            }
            b &&
                ((B["__TAGGY_INSTALLED"] = !0),
                    Cb("https://cct.google/taggy/agent.js"));
        }
        var f = function(r) {
                var v = "GTM",
                    t = "GTM";
                var q = B["google.tagmanager.debugui2.queue"];
                q ||
                    ((q = []),
                        (B["google.tagmanager.debugui2.queue"] = q),
                        Cb(
                            "https://" +
                            S.Dd +
                            "/debug/bootstrap?id=" +
                            S.J +
                            "&src=" +
                            t +
                            "&cond=" +
                            r +
                            "&gtm=" +
                            Xk()
                        ));
                var u = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: wb,
                        containerProduct: v,
                        debug: !1,
                        id: S.J,
                    },
                };
                u.data.resume = function() {
                    a();
                };
                S.Zg && (u.data.initialPublish = !0);
                q.push(u);
            },
            g = void 0,
            l = mg(B.location, "query", !1, void 0, "gtm_debug");
        vp(l) && (g = 2);
        if (!g && G.referrer) {
            var k = og(G.referrer);
            "tagassistant.google.com" === lg(k, "host") && (g = 3);
        }
        if (!g) {
            var n = Sg("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4);
        }
        if (!g) {
            var p = G.documentElement.getAttribute("data-tag-assistant-present");
            vp(p) && (g = 5);
        }
        g && wb ? f(g) : a();
    })(Pt);
})();