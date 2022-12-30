const data = ["שלום", "דלעת", "זבוב", "תפוח", "ברחש", "סלון", "וילה", "מחשב", "כליל", "נורי", "עכבר", "פיצה", "פיצי", "רותי", "איתן", "צלחת", "מלוח", "חשמל", "מלון", "כיסא", "ילדה", "מיטה", "מקרר", "חדשה", "אביב", "שולח", "כדור", "תפוז", "חלון", "כדרר", "רחוב", "מגדל", "שעון", "עפעף", "פרפר", "דבור", "דיבר", "כיסא", "אוכל", "גמבה", "רותי", "חושב", "ארון", "חולד", "מיים", "נורה", "עצים", "נווה", "מדבר", "מקרו", "לדעת", "אוזן", "סופר", "קופה", "מיטה", "כרית", "דירה", "בירה", "קנקן", "קפקף", "מזגן", "רכבת", "חשוב", "חידה", "חרוב", "במבה", "חלבה", "מבול", "מלאך", "מלכה", "לילה", "מילה", "רוטב", "פסטה", "חתול", "עציץ", "קרנף", "חמור", "צפור", "ארנק", "צמוק", "כלבן", "כורת", "מתוק", "מלוח", "ספור", "עכבר", "ורוד", "קשיח", "עמוד", "שבוע", "כלום", "קפוד", "כרום", "צבוע", "אולי", "ראשן", "פילם", "אהבה", "אצבע", "קרבה", "חרוב", "אורן", "קושי", "דולב", "כרוב", "שנים", "בנים", "שעות", "נשכן", "כלבה", "אודם", "סרבן", "דרבן", "מתון", "צנון", "אדום", "ירוק", "כחול", "שחור", "צהוב", "כתום", "ורוד", "כיתה", "מפית", "שקית", "סכין", "אויר", "קערה", "נרות", "שעות", "בלון", "חנקן", "נשבר", "נמלה", "פנתר", "עננה", "דפים", "פרים", "פרות", "חנות", "כיפה", "מתנה", "סוכה", "רוגע", "הערה", "מטרה", "חצים", "ערים", "שרים", "מאכל", "אורז", "ספור", "טבלה", "מכות", "שישי", "חגית", "רינת", "מנחה", "שלוש", "עשרה", "בתים", "אופן", "תירס", "אריה", "מפזר", "תריס", "חשמל", "שידה", "חמוס", "עתון", "בובה", "פוטר", "שמפו", "סבון", "משחה", "מכנס", "קרקס", "מפות", "דובה", "מישש", "יעלה", "לילה", "נמלה", "קישט", "ניתק", "בודד", "אוהב", "חושב", "לומד", "צועק", "פועל", "בודק", "עמוד", "רוצה", "מנהל", "כלים", "סקין", "כרוב", "מנקה", "אשפה", "עיור", "יומן", "חמסה", "משקף", "סורק", "רדיו", "שבוע", "בהיר", "פחות", "אחוז", "עורב", "אוזל", "גוזל", "נוזל", "נשאר", "צריח", "בריח", "קירח", "ריבה", "כריך", "היום", "נראה", "כולם", "תקרה", "כולן", "אולי", "קומה", "שניה", "לחבד", "שליש", "טריק", "אריק", "מציל", "גלשן", "פטור", "צורה", "פתור", "נזיר", "חציל", "דליל", "מכבי", "צליל", "מחכה", "כדאי", "נמאס", "גבול", "בלטה", "הרים", "ערים", "שכנה", "ברחה", "רוקן", "לברר", "בדוק", "עברו", "מעבר", "שקוף", "קשוב", "קורס", "גולש", "צנים", "שופך", "ארנב", "שוקו", "שטני", "נחמד", "טרנד", "פייה", "חייב", "קלוש", "קבלה", "קודם", "בדוק", "ארבע", "נפגש", "דובי", "חמוד", "דפנה", "צרור", "צמיד", "לפיד", "מפוח", "נפוח", "דרוש", "קשור", "לרסס", "מטקה", "לקבל", "לומד", "מחבט", "נחוש", "מחבת", "פיתה", "טלפן", "דורש", "טיסה", "צילם", "מקום", "ציור", "יויו", "מחדד", "תורה", "צייר", "טניס", "דופק", "סטרס", "צייד", "צלום",
    "התחל", "צדפה", "אתחל", "צדפה", "ריצה", "בחוץ", "ללכת", "יוגה", "שחיה", "בריח", "מרחק", "שעיר", "עשיר", "עושר", "אושר", "מרחק", "ימים", "חוסר", "יותר", "שקשק", "אפון", "ברכה", "כושר", "קרקע", "מסוק", "מסור", "ליבה", "חופש", "סגור", "טווח", "נמוך", "גבוה", "מתקן", "ספסל", "מרבי", "מלבי", "עצמך", "אמון", "המון", "ממתק", "עתיד", "פרקט", "בדקה", "בודק", "בדוק", "נעלה", "נעול", "נועל", "נבחר", "זהות", "מעקב", "רציף", "זמני", "פועל", "יצרן", "מקרן", "חלום", "ישנה", "חלמה", "חולם", "מעון", "בננה", "קשוב", "חושב", "עברי", "עובר", "עברו", "חשמל", "כותב", "ללכת", "הולך", "חלום", "מוכן", "מעין", "מכין", "חלון", "מנקה", "ציפה", "צפרו", "צופר", "חליל", "חילל", "צמיג", "רוקד", "רקדה", "אכלה", "גוגל", "גלגל", "נכון", "קריש", "שבור", "נשבר", "נצרה", "שובר", "לומד", "למדו", "דילג", "ארנב", "מקק", "לבנה", "דובי", "קטנה", "נוצה", "דגול", "גודל", "יתוש", "נבחר", "לימד", "חתול", "שועל", "פרפר", "אהבה", "דאגה", "חמלה", "חושב", "כבוד", "צודק", "חופר", "ריצה", "לרוץ", "נמרץ", "צעקה", "לשוט"
];
let words_number;
for (let i = 0; i < 4000; i++) {
    if (data[i] != undefined) {
        //console.log(data[i]);
        //console.log(i);
        words_number = i;
    }
    /*if (data[i].length > 4) {
        console.log(data[i]);
    }*/
}

let random = Math.floor(Math.random() * words_number);
//console.log(data[327]);
let today_word = data[random];
//console.log(today_word);

function el(text) {
    const h = document.querySelector(text);
    return h;
}

const p2 = el(".p2");
const m2 = el(".m2");
const n2 = el(".n2");
const v = el(".v");
const t2 = el(".t2");
const a = el(".a");
const r = el(".r");
const k = el(".k");
const f = el(".f");
const ch2 = el(".ch2");
const l = el(".l");
const ch12 = el(".ch12");
const g = el(".g");
const d = el(".d");
const sh = el(".sh");
const ts2 = el(".ts2");
const t = el(".t");
const ts = el(".ts");
const m = el(".m");
const n = el(".n");
const a2 = el(".a2");
const b = el(".b");
const s = el(".s");
const z = el(".z");
const ah = el(".ah");
const i = el(".i");
const ch123 = el(".ch123");
const remove = el(".remove");
const enter = el(".enter");
let line_one = true;
let line_two = false;
let line_three = false;
let line_four = false;
let line_five = false;

var firebaseConfig = {
    apiKey: "AIzaSyDg17U43gaVch45HCzbtyWEQSW1MbspHIg",
    authDomain: "itamar-inon.firebaseapp.com",
    databaseURL: "https://itamar-inon-default-rtdb.firebaseio.com",
    projectId: "itamar-inon",
    storageBucket: "itamar-inon.appspot.com",
    messagingSenderId: "980210896625",
    appId: "1:980210896625:web:c0a54d46ce787c960be350"
};
firebase.initializeApp(firebaseConfig);

const gess_database = firebase.database().ref("gess");

const settings_box = el(".settings-box");
const close_settings = el(".close-settings");
const set_Wrod = el(".set-word");
const gess_word = el(".gess-word");
const open_settings = el(".open-settings");
const settings_start = el(".settings-start");
const submit_word = el(".submit-word");
const settings_text = el(".settings-text");
const settings_set = el(".settings-set");
const name_input = el(".name-input");
const word_input = el(".word-input");
const set_text = el(".set-text");
const close_set = el(".close-set");

const square_one_one = el(".square-one-one");
const square_two_one = el(".square-two-one");
const square_three_one = el(".square-three-one");
const square_four_one = el(".square-four-one");
const square_one_two = el(".square-one-two");
const square_two_two = el(".square-two-two");
const square_three_two = el(".square-three-two");
const square_four_two = el(".square-four-two");
const square_one_three = el(".square-one-three");
const square_two_three = el(".square-two-three");
const square_three_three = el(".square-three-three");
const square_four_three = el(".square-four-three");
const square_one_four = el(".square-one-four");
const square_two_four = el(".square-two-four");
const square_three_four = el(".square-three-four");
const square_four_four = el(".square-four-four");
const square_one_five = el(".square-one-five");
const square_two_five = el(".square-two-five");
const square_three_five = el(".square-three-five");
const square_four_five = el(".square-four-five");


const square_line_one = el(".square-line-one");
const square_line_two = el(".square-line-two");
const square_line_three = el(".square-line-three");
const square_line_four = el(".square-line-four");
const square_line_five = el(".square-line-five");

const all = el(".all");
const help = el(".help");
const close_help = el(".close-help");
const open_help = el(".open-help");
const wins = el(".wins");

const replay_box = el(".replay-box");
const replay_btn = el(".replay-btn");
const close_replay = el(".close-replay");
const replay_text_two = el(".replay-text-two");

const settings_get = el(".settings-get");
const close_get = el(".close-get");
let gess_other = false;

const conform = el(".conform");
const conform_text = el(".conform-text");
const yes_btn = el(".yes-btn");
const no_btn = el(".no-btn");
let got_word;
let got_name;
let submited = false;
const key_sound = new Audio("key.mp3");
const lose_sound = new Audio("lose.mp3");
const win_sound = new Audio("win.mp3");
const remove_sound = new Audio("delete.mp3");
const msg_box = el(".msg-box");
const msg_text = el(".msg-text");
const msg_ok = el(".msg-ok");
//let check = false;

msg_ok.onclick = () => {
    msg_box.style.transform = "translate(-50%,-50%) scale(0)";
}

set_Wrod.onclick = () => {
    settings_start.style.left = "-90%";
    settings_text.style.marginLeft = "-400%";
    settings_set.style.left = "50%";
    close_set.style.margin = "0";
    close_settings.style.marginLeft = "-190%";
    //name_input.focus();
}
gess_word.onclick = () => {
    settings_start.style.left = "200%";
    settings_text.style.marginLeft = "400%";
    close_settings.style.marginLeft = "190%";
    settings_get.style.left = "50%";
}

let exist_el = [];

gess_database.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        if (item.name != localStorage.getItem("name") && item.name != submited) {
            let e = document.createElement("div");
            e.setAttribute("class", "user");
            e.textContent = item.name;
            exist_el.push(e.textContent);
            e.classList.add(e.textContent);
            //console.log(exist_el);
            if (localStorage.getItem("gessed words") != null) {
                let localdata = JSON.parse(localStorage.getItem("gessed words"));
                for (let f = 0; f < 10; f++) {
                    if (e.textContent == localdata[f]) {
                        //console.log(localdata[i]);
                        e.style.backgroundColor = "aquamarine";
                        //e.style.pointerEvents = "none";
                        e.addEventListener("click", () => {
                            //alert("כבר נחשת את המילה של " + e.textContent);
                            msg_text.textContent = "כבר נחשת את המילה של " + e.textContent;
                            msg_box.style.transform = "translate(-50%,-5%) scale(1)";
                            setTimeout(() => {
                                msg_box.style.transform = "translate(-50%,-5%) scale(0)";
                            }, 2000);
                        });
                    }

                    if (localdata[f] == e.textContent) {
                        exist_el.push(e.textContent);
                        localStorage.setItem("gessed words", JSON.stringify(exist_el));
                        //console.log(exist);
                    }
                }


                //if(localdata)
            }
            settings_get.append(e);
            e.addEventListener("click", () => {

                gess_database.child(e.textContent).once("value", function(snapshot) {
                    let word = snapshot.val();
                    got_word = word.word;
                    got_name = e.textContent;
                    close_get.click();
                    all.click();
                    conform_text.textContent = "אתה רוצה לנחש את המילה של " + e.textContent;
                    setTimeout(() => {
                        conform.style.transform = "translate(-50%,-50%) scale(1)";
                    }, 1000);
                    all.style.pointerEvents = "none";

                });
            });
        }
    });
});




gess_database.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        if (item.name != localStorage.getItem("name") || item.name != submited) {
            if (item.name != exist_el[0] && item.name != exist_el[1] && item.name != exist_el[2] && item.name != exist_el[3] && item.name != exist_el[4] && exist_el != 0) {
                let e = document.createElement("div");
                e.setAttribute("class", "user");
                //console.log(submited);
                e.textContent = item.name;
                e.classList.add(e.textContent);
                exist_el.push(e.textContent);
                if (localStorage.getItem("gessed words") != null) {
                    let localdata = JSON.parse(localStorage.getItem("gessed words"));
                    for (let f = 0; f < 10; f++) {
                        if (e.textContent == localdata[f]) {
                            //console.log(localdata[i]);
                            e.style.backgroundColor = "aquamarine";
                            //e.style.pointerEvents = "none";
                            e.addEventListener("click", () => {
                                //alert("כבר נחשת את המילה של " + e.textContent);
                                msg_text.textContent = "כבר נחשת את המילה של " + e.textContent;
                                msg_box.style.transform = "translate(-50%,-5%) scale(1)";
                                setTimeout(() => {
                                    msg_box.style.transform = "translate(-50%,-5%) scale(0)";
                                }, 2000);
                            });
                        }
                        if (localdata[f] == e.textContent) {
                            exist_el.push(e.textContent);
                            localStorage.setItem("gessed words", JSON.stringify(exist));
                            //console.log(exist);
                        }
                    }


                    //if(localdata)
                }
                settings_get.append(e);
                e.addEventListener("click", () => {

                    gess_database.child(e.textContent).once("value", function(snapshot) {
                        let word = snapshot.val();
                        got_word = word.word;
                        got_name = e.textContent;
                        close_get.click();
                        all.click();
                        conform_text.textContent = "אתה רוצה לנחש את המילה של " + e.textContent;
                        setTimeout(() => {
                            conform.style.transform = "translate(-50%,-50%) scale(1)";
                        }, 1000);
                        all.style.pointerEvents = "none";

                    });
                });
            }
        }
    });
});

setTimeout(() => {
    if (exist_el == 0) {
        //alert("yjht");
        let e = document.createElement("div");
        let name = "אין-משתמש";
        e.setAttribute("class", "user");
        //console.log(submited);
        e.textContent = name;
        e.classList.add(e.textContent);
        exist_el.push(e.textContent);
        if (localStorage.getItem("gessed words") != null) {
            let localdata = JSON.parse(localStorage.getItem("gessed words"));
            for (let f = 0; f < 10; f++) {
                if (e.textContent == localdata[f]) {
                    //console.log(localdata[i]);
                    e.style.backgroundColor = "aquamarine";
                    //e.style.pointerEvents = "none";
                    e.addEventListener("click", () => {
                        //alert("כבר נחשת את המילה של " + e.textContent);
                        msg_text.textContent = "כבר נחשת את המילה של " + e.textContent;
                        msg_box.style.transform = "translate(-50%,-5%) scale(1)";
                        setTimeout(() => {
                            msg_box.style.transform = "translate(-50%,-5%) scale(0)";
                        }, 2000);
                    });
                }
                if (localdata[f] == e.textContent) {
                    exist_el.push(e.textContent);
                    localStorage.setItem("gessed words", JSON.stringify(exist_el));
                    //console.log(exist);
                }
            }


            //if(localdata)
        }
        settings_get.append(e);
        e.addEventListener("click", () => {

            gess_database.child(e.textContent).once("value", function(snapshot) {
                let word = snapshot.val();
                got_word = word.word;
                got_name = e.textContent;
                close_get.click();
                all.click();
                conform_text.textContent = "אתה רוצה לנחש את המילה של " + e.textContent;
                setTimeout(() => {
                    conform.style.transform = "translate(-50%,-50%) scale(1)";
                }, 1000);
                all.style.pointerEvents = "none";

            });
        });
    }
}, 4000);


yes_btn.onclick = () => {
    gess_other = got_name;
    today_word = got_word;
    all.style.pointerEvents = "all";
    conform.style.transform = "translate(-50%,-50%) scale(0)";
    settings_get.remove();

    gess_word.addEventListener("click", () => {
        close_get.click();
        //alert(" אתה כבר מנחש את המילה של " + got_name);
        msg_text.textContent = " אתה כבר מנחש את המילה של " + got_name;
        msg_box.style.transform = "translate(-50%,-5%) scale(1)";
        setTimeout(() => {
            msg_box.style.transform = "translate(-50%,-5%) scale(0)";
        }, 2000);
    });
}
no_btn.onclick = () => {
    all.style.pointerEvents = "all";
    conform.style.transform = "translate(-50%,-50%) scale(0)";
}

close_set.onclick = () => {
    settings_start.style.left = "50%";
    settings_text.style.marginLeft = "0%";
    settings_set.style.left = "200%";
    close_set.style.margin = "200%";
    close_settings.style.marginLeft = "0%";
}
close_get.onclick = () => {
    settings_start.style.left = "50%";
    settings_text.style.marginLeft = "0%";
    settings_get.style.left = "-200%";
    close_settings.style.marginLeft = "0%";
}

submit_word.onclick = () => {
    if (submit_word.textContent != "ביטול") {
        if (name_input.value.length > 0 && word_input.value.length == 4) {
            submited = word_input.value;
            setTimeout(() => {
                gess_database.child(name_input.value).set({
                    name: name_input.value,
                    word: word_input.value
                });
                localStorage.setItem("name", name_input.value);
                submit_word.style.backgroundColor = "rgb(245, 169, 112)";
                submit_word.textContent = "ביטול";
            }, 1000);

        }
        if (name_input.value.length == 0) {
            name_input.setAttribute("placeholder", "לא כתבת שם");
            name_input.style.border = "2px solid rgb(245, 169, 112)";
        }
        if (word_input.value.length == 0) {
            word_input.setAttribute("placeholder", "לא כתבת מילה");
            word_input.style.border = "2px solid rgb(245, 169, 112)";
        }
        if (word_input.value.length > 4) {
            word_input.value = "";
            word_input.setAttribute("placeholder", "המילה ארוכה מדי");
            word_input.style.border = "2px solid rgb(245, 169, 112)";
        }
        if (word_input.value.length == 1 || word_input.value.length == 2 || word_input.value.length == 3) {
            word_input.value = "";
            word_input.setAttribute("placeholder", "המילה קצרה מדי");
            word_input.style.border = "2px solid rgb(245, 169, 112)";
        }
        /*if (word_input.value.length < 4) {
            word_input.value = "";
            word_input.setAttribute("placeholder", "המילה קצרה מדי");
            word_input.style.border = "2px solid rgb(245, 169, 112)";
            console.log("juhy");
        }*/
    } else {
        gess_database.child(localStorage.getItem("name")).remove();
        localStorage.removeItem("name");
        submit_word.style.backgroundColor = "aquamarine";
        submit_word.textContent = "התחלה";
        word_input.value = "";
        name_input.value = "";
    }
    //if (name_input.value)
}

open_help.onclick = () => {
    open_help.style.transform = "scale(1.2)";
    setTimeout(() => {
        open_help.style.transform = "scale(1)";
        help.style.transform = "translate(-50%,-50%) scale(1.5)";
        setTimeout(() => {
            help.style.transform = "translate(-50%,-50%) scale(1)";
            all.addEventListener("click", () => {
                help.style.transform = "translate(-50%,-50%) scale(0)"
            })
        }, 300);
    }, 300);
}


window.onload = () => {
    help.style.display = "block";
    replay_box.style.display = "block";
    settings_box.style.display = "block";
    msg_box.style.display = "block";
    conform.style.display = "block";
    if (localStorage.getItem("name") != null) {
        submit_word.style.backgroundColor = "rgb(245, 169, 112)";
        submit_word.textContent = "ביטול";
    }
    /*if (localStorage.getItem("winnumber") != null) {
        wins.textContent = "ניחשת " + localStorage.getItem("winnumber") + " " + "מילים";
    }*/
    if (localStorage.getItem("points") != null) {
        wins.textContent = "יש לך " + localStorage.getItem("points") + " נקודות";
    }
}
close_help.onclick = () => {
    help.style.transform = "translate(-50%,-50%) scale(0)"
}
close_settings.onclick = () => {
    help.style.transform = "translate(-50%,-50%) scale(0)"
}

close_replay.onclick = () => {
    replay_box.style.transform = "translate(-50%,-50%) scale(0)"
}

replay_btn.onclick = () => {
    setTimeout(() => {
        window.location.reload();
    }, 100);
}

open_settings.onclick = () => {
    open_settings.style.transform = "scale(1.5) rotate(-50deg)";
    setTimeout(() => {
        open_settings.style.transform = "scale(1) rotate(0deg)";
        setTimeout(() => {
            settings_box.style.transform = "translate(-50%,-50%) scale(1.5)";
            setTimeout(() => {
                settings_box.style.transform = "translate(-50%,-50%) scale(1)";
                all.addEventListener("click", () => {
                    settings_box.style.transform = "translate(-50%,-50%) scale(0)";
                });
            }, 300);
        }, 200);
    }, 200);

}

close_settings.onclick = () => {
    settings_box.style.transform = "translate(-50%,-50%) scale(0)";
}

const all_leters = {
    k: "ק",
    r: "ר",
    a: "א",
    t2: "ט",
    v: "ו",
    n2: "ן",
    m2: "ם",
    p2: "פ",
    sh: "ש",
    d: "ד",
    g: "ג",
    ch123: "כ",
    ah: "ע",
    i: "י",
    ch12: "ח",
    l: "ל",
    ch2: "ך",
    f: "ף",
    z: "ז",
    s: "ס",
    b: "ב",
    a2: "ה",
    n: "נ",
    m: "מ",
    ts: "צ",
    t: "ת",
    ts2: "ץ"
}

const all_numbers = {
    1: "k",
    2: "r",
    3: "a",
    4: "t2",
    5: "v",
    6: "n2",
    7: "m2",
    8: "p2",
    9: "sh",
    10: "d",
    11: "g",
    12: "ch123",
    13: "ah",
    14: "i",
    15: "ch12",
    16: "l",
    17: "ch2",
    18: "f",
    19: "z",
    20: "s",
    21: "b",
    22: "a2",
    23: "n",
    24: "m",
    25: "ts",
    26: "t",
    27: "ts2"
}


function type(text) {
    if (line_one == true) {
        if (square_one_one.textContent.length == 0) {
            square_one_one.textContent = text;
            square_one_one.style.transform = "scale(1.2)";
            key_sound.play();
            setTimeout(() => {
                square_one_one.style.transform = "scale(1)";
            }, 100);
        } else {
            if (square_two_one.textContent.length == 0) {
                square_two_one.textContent = text;
                square_two_one.style.transform = "scale(1.2)";
                key_sound.play();
                setTimeout(() => {
                    square_two_one.style.transform = "scale(1)";
                }, 100);
            } else {
                if (square_three_one.textContent.length == 0) {
                    square_three_one.textContent = text;
                    square_three_one.style.transform = "scale(1.2)";
                    key_sound.play();
                    setTimeout(() => {
                        square_three_one.style.transform = "scale(1)";
                    }, 100);
                } else {
                    if (square_four_one.textContent.length == 0) {
                        square_four_one.textContent = text;
                        square_four_one.style.transform = "scale(1.2)";
                        key_sound.play();
                        setTimeout(() => {
                            square_four_one.style.transform = "scale(1)";
                        }, 100);
                    }
                }
            }
        }
    } else {
        if (line_two == true) {
            if (square_one_two.textContent.length == 0) {
                square_one_two.textContent = text;
                square_one_two.style.transform = "scale(1.2)";
                key_sound.play();
                setTimeout(() => {
                    square_one_two.style.transform = "scale(1)";
                }, 100);
            } else {
                if (square_two_two.textContent.length == 0) {
                    square_two_two.textContent = text;
                    square_two_two.style.transform = "scale(1.2)";
                    key_sound.play();
                    setTimeout(() => {
                        square_two_two.style.transform = "scale(1)";
                    }, 100);
                } else {
                    if (square_three_two.textContent.length == 0) {
                        square_three_two.textContent = text;
                        square_three_two.style.transform = "scale(1.2)";
                        key_sound.play();
                        setTimeout(() => {
                            square_three_two.style.transform = "scale(1)";
                        }, 100);
                    } else {
                        if (square_four_two.textContent.length == 0) {
                            square_four_two.textContent = text;
                            square_four_two.style.transform = "scale(1.2)";
                            key_sound.play();
                            setTimeout(() => {
                                square_four_two.style.transform = "scale(1)";
                            }, 100);
                        }
                    }
                }
            }
        } else {
            if (line_three == true) {
                if (square_one_three.textContent.length == 0) {
                    square_one_three.textContent = text;
                    square_one_three.style.transform = "scale(1.2)";
                    key_sound.play();
                    setTimeout(() => {
                        square_one_three.style.transform = "scale(1)";
                    }, 100);
                } else {
                    if (square_two_three.textContent.length == 0) {
                        square_two_three.textContent = text;
                        square_two_three.style.transform = "scale(1.2)";
                        key_sound.play();
                        setTimeout(() => {
                            square_two_three.style.transform = "scale(1)";
                        }, 100);
                    } else {
                        if (square_three_three.textContent.length == 0) {
                            square_three_three.textContent = text;
                            square_three_three.style.transform = "scale(1.2)";
                            key_sound.play();
                            setTimeout(() => {
                                square_three_three.style.transform = "scale(1)";
                            }, 100);
                        } else {
                            if (square_four_three.textContent.length == 0) {
                                square_four_three.textContent = text;
                                square_four_three.style.transform = "scale(1.2)";
                                key_sound.play();
                                setTimeout(() => {
                                    square_four_three.style.transform = "scale(1)";
                                }, 100);
                            }
                        }
                    }
                }
            } else {
                if (line_four == true) {
                    if (square_one_four.textContent.length == 0) {
                        square_one_four.textContent = text;
                        square_one_four.style.transform = "scale(1.2)";
                        key_sound.play();
                        setTimeout(() => {
                            square_one_four.style.transform = "scale(1)";
                        }, 100);
                    } else {
                        if (square_two_four.textContent.length == 0) {
                            square_two_four.textContent = text;
                            square_two_four.style.transform = "scale(1.2)";
                            key_sound.play();
                            setTimeout(() => {
                                square_two_four.style.transform = "scale(1)";
                            }, 100);
                        } else {
                            if (square_three_four.textContent.length == 0) {
                                square_three_four.textContent = text;
                                square_three_four.style.transform = "scale(1.2)";
                                key_sound.play();
                                setTimeout(() => {
                                    square_three_four.style.transform = "scale(1)";
                                }, 100);
                            } else {
                                if (square_four_four.textContent.length == 0) {
                                    square_four_four.textContent = text;
                                    square_four_four.style.transform = "scale(1.2)";
                                    key_sound.play();
                                    setTimeout(() => {
                                        square_four_four.style.transform = "scale(1)";
                                    }, 100);
                                }
                            }
                        }
                    }
                } else {
                    if (line_five == true) {
                        if (square_one_five.textContent.length == 0) {
                            square_one_five.textContent = text;
                            square_one_five.style.transform = "scale(1.2)";
                            key_sound.play();
                            setTimeout(() => {
                                square_one_five.style.transform = "scale(1)";
                            }, 100);
                        } else {
                            if (square_two_five.textContent.length == 0) {
                                square_two_five.textContent = text;
                                square_two_five.style.transform = "scale(1.2)";
                                key_sound.play();
                                setTimeout(() => {
                                    square_two_five.style.transform = "scale(1)";
                                }, 100);
                            } else {
                                if (square_three_five.textContent.length == 0) {
                                    square_three_five.textContent = text;
                                    square_three_five.style.transform = "scale(1.2)";
                                    key_sound.play();
                                    setTimeout(() => {
                                        square_three_five.style.transform = "scale(1)";
                                    }, 100);
                                } else {
                                    if (square_four_five.textContent.length == 0) {
                                        square_four_five.textContent = text;
                                        square_four_five.style.transform = "scale(1.2)";
                                        key_sound.play();
                                        setTimeout(() => {
                                            square_four_five.style.transform = "scale(1)";
                                        }, 100);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



remove.onclick = () => {
    removef();
}


function removef() {
    if (line_one == true) {
        if (square_four_one.textContent.length != 0) {
            square_four_one.textContent = "";
            key_sound.play();
        } else {
            if (square_three_one.textContent.length != 0) {
                square_three_one.textContent = "";
                key_sound.play();
            } else {
                if (square_two_one.textContent.length != 0) {
                    square_two_one.textContent = "";
                    key_sound.play();
                } else {
                    if (square_one_one.textContent.length != 0) {
                        square_one_one.textContent = "";
                        key_sound.play();
                    }
                }
            }
        }
    } else {
        if (line_two == true) {
            if (square_four_two.textContent.length != 0) {
                square_four_two.textContent = "";
                key_sound.play();
            } else {
                if (square_three_two.textContent.length != 0) {
                    square_three_two.textContent = "";
                    key_sound.play();
                } else {
                    if (square_two_two.textContent.length != 0) {
                        square_two_two.textContent = "";
                        key_sound.play();
                    } else {
                        if (square_one_two.textContent.length != 0) {
                            square_one_two.textContent = "";
                            key_sound.play();
                        }
                    }
                }
            }
        } else {
            if (line_three == true) {
                if (square_four_three.textContent.length != 0) {
                    square_four_three.textContent = "";
                    key_sound.play();
                } else {
                    if (square_three_three.textContent.length != 0) {
                        square_three_three.textContent = "";
                        key_sound.play();
                    } else {
                        if (square_two_three.textContent.length != 0) {
                            square_two_three.textContent = "";
                            key_sound.play();
                        } else {
                            if (square_one_three.textContent.length != 0) {
                                square_one_three.textContent = "";
                                key_sound.play();
                            }
                        }
                    }
                }
            } else {
                if (line_four == true) {
                    if (square_four_four.textContent.length != 0) {
                        square_four_four.textContent = "";
                        key_sound.play();
                    } else {
                        if (square_three_four.textContent.length != 0) {
                            square_three_four.textContent = "";
                            key_sound.play();
                        } else {
                            if (square_two_four.textContent.length != 0) {
                                square_two_four.textContent = "";
                                key_sound.play();
                            } else {
                                if (square_one_four.textContent.length != 0) {
                                    square_one_four.textContent = "";
                                    key_sound.play();
                                }
                            }
                        }
                    }
                } else {
                    if (line_five == true) {
                        if (square_four_five.textContent.length != 0) {
                            square_four_five.textContent = "";
                            key_sound.play();
                        } else {
                            if (square_three_five.textContent.length != 0) {
                                square_three_five.textContent = "";
                                key_sound.play();
                            } else {
                                if (square_two_five.textContent.length != 0) {
                                    square_two_five.textContent = "";
                                    key_sound.play();
                                } else {
                                    if (square_one_five.textContent.length != 0) {
                                        square_one_five.textContent = "";
                                        key_sound.play();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



enter.onclick = () => {
    /*if (line_one == true) {
        //check_word(square_one_one.textContent + square_two_one.textContent + square_three_one.textContent + square_four_one.textContent);
    }
    if (line_two == true) {
        //check_word(square_one_two.textContent + square_two_two.textContent + square_three_two.textContent + square_four_two.textContent);
    }
    if (line_three == true) {
        //check_word(square_one_three.textContent + square_two_three.textContent + square_three_three.textContent + square_four_three.textContent);
    }
    if (line_four == true) {
        //check_word(square_one_four.textContent + square_two_four.textContent + square_three_four.textContent + square_four_four.textContent);
    }
    if (line_five == true) {
        //check_word(square_one_five.textContent + square_two_five.textContent + square_three_five.textContent + square_four_five.textContent);
    }

    if (check == true) {
        //check = false;
    }*/
    enterf();

}



function enterf() {
    if (square_four_one.textContent.length != 0 && square_three_one.textContent.length != 0 && square_two_one.textContent.length != 0 && square_one_one.textContent.length != 0) {
        if (line_one == true) {
            line_one = false;
            line_two = true;
            let word = square_one_one.textContent + square_two_one.textContent + square_three_one.textContent + square_four_one.textContent;
            //alert(word);
            if (word == today_word) {
                //alert("winnnnn");
                if (gess_other != false) {
                    gess_database.child(gess_other).once("value", function(snapshot) {
                        let wordg = snapshot.val().word;
                        if (word == wordg) {
                            if (localStorage.getItem("gessed words") != null) {
                                let gessed = JSON.parse(localStorage.getItem("gessed words"));
                                gessed.push(gess_other);
                                localStorage.setItem("gessed words", JSON.stringify(gessed));
                                //console.log(JSON.parse(localStorage.getItem("gessed words")));
                            } else {
                                let h = [gess_other];
                                localStorage.setItem("gessed words", JSON.stringify(h));
                            }
                            //alert("מצאת את המילה של " + gess_other);
                            msg_text.textContent = "מצאת את המילה של " + gess_other;
                            msg_box.style.transform = "translate(-50%,-5%) scale(1)";
                            setTimeout(() => {
                                msg_box.style.transform = "translate(-50%,-5%) scale(0)";
                            }, 2000);
                        }
                    });
                }
                if (localStorage.getItem("winnumber") != null) {
                    localStorage.setItem("winnumber", Number(localStorage.getItem("winnumber")) + 1);
                } else {
                    localStorage.setItem("winnumber", 1);
                }
                setTimeout(() => {
                    replay_box.style.transform = "translate(-50%,-50%) scale(1.2)";
                    replay_text_two.textContent = "הרווחת " + 100 + " נקודות בנסיון הראשון";
                    setTimeout(() => {
                        replay_box.style.transform = "translate(-50%,-50%) scale(1)";
                    }, 400);
                }, 2000);
                win_sound.play();
                square_one_one.style.backgroundColor = "aquamarine";
                square_two_one.style.backgroundColor = "aquamarine";
                square_three_one.style.backgroundColor = "aquamarine";
                square_four_one.style.backgroundColor = "aquamarine";
                line_two = false;
                square_line_one.style.animationPlayState = "running";
                if (localStorage.getItem("points") != null) {
                    localStorage.setItem("points", Number(localStorage.getItem("points")) + 100)
                } else {
                    localStorage.setItem("points", 100);
                }
                for (let f = 1; f < 28; f++) {
                    //console.log(all_numbers[f]);
                    //let h = eval(all_numbers[f]);
                    let h = document.getElementById(all_numbers[f]);
                    if (h.textContent == square_one_one.textContent || h.textContent == square_two_one.textContent || h.textContent == square_three_one.textContent || h.textContent == square_four_one.textContent) {
                        h.style.backgroundColor = "aquamarine";
                    }
                }
            } else {
                //console.log()
                let splitWord = today_word.split("");
                if (square_one_one.textContent == splitWord[0]) {
                    square_one_one.style.backgroundColor = "aquamarine";
                    for (let f = 1; f < 28; f++) {
                        //console.log(all_numbers[f]);
                        //let h = eval(all_numbers[f]);
                        let h = document.getElementById(all_numbers[f]);
                        if (h.textContent == square_one_one.textContent) {
                            h.style.backgroundColor = "aquamarine";
                        }
                    }
                } else {
                    if (square_one_one.textContent == splitWord[1] || square_one_one.textContent == splitWord[2] || square_one_one.textContent == splitWord[3]) {
                        square_one_one.style.backgroundColor = "rgb(142, 157, 253)";
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_one_one.textContent) {
                                h.style.backgroundColor = "rgb(142, 157, 253)";
                            }
                        }
                    } else {
                        square_one_one.style.backgroundColor = "rgb(245, 169, 112)";
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_one_one.textContent) {
                                h.style.backgroundColor = "#aaa";
                            }
                        }
                    }
                }


                if (square_two_one.textContent == splitWord[1]) {
                    square_two_one.style.backgroundColor = "aquamarine";
                    for (let f = 1; f < 28; f++) {
                        //console.log(all_numbers[f]);
                        //let h = eval(all_numbers[f]);
                        let h = document.getElementById(all_numbers[f]);
                        if (h.textContent == square_two_one.textContent) {
                            h.style.backgroundColor = "aquamarine";
                        }
                    }
                } else {
                    if (square_two_one.textContent == splitWord[0] || square_two_one.textContent == splitWord[2] || square_two_one.textContent == splitWord[3]) {
                        square_two_one.style.backgroundColor = "rgb(142, 157, 253)";
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_two_one.textContent) {
                                h.style.backgroundColor = "rgb(142, 157, 253)";
                            }
                        }
                    } else {
                        square_two_one.style.backgroundColor = "rgb(245, 169, 112)";
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_two_one.textContent) {
                                h.style.backgroundColor = "#aaa";
                            }
                        }
                    }
                }


                if (square_three_one.textContent == splitWord[2]) {
                    square_three_one.style.backgroundColor = "aquamarine";
                    for (let f = 1; f < 28; f++) {
                        //console.log(all_numbers[f]);
                        //let h = eval(all_numbers[f]);
                        let h = document.getElementById(all_numbers[f]);
                        if (h.textContent == square_three_one.textContent) {
                            h.style.backgroundColor = "aquamarine";
                        }
                    }
                } else {
                    if (square_three_one.textContent == splitWord[0] || square_three_one.textContent == splitWord[1] || square_three_one.textContent == splitWord[3]) {
                        square_three_one.style.backgroundColor = "rgb(142, 157, 253)";
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_three_one.textContent) {
                                h.style.backgroundColor = "rgb(142, 157, 253)";
                            }
                        }
                    } else {
                        square_three_one.style.backgroundColor = "rgb(245, 169, 112)";
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_three_one.textContent) {
                                h.style.backgroundColor = "#aaa";
                            }
                        }
                    }
                }


                if (square_four_one.textContent == splitWord[3]) {
                    square_four_one.style.backgroundColor = "aquamarine";
                    for (let f = 1; f < 28; f++) {
                        //console.log(all_numbers[f]);
                        //let h = eval(all_numbers[f]);
                        let h = document.getElementById(all_numbers[f]);
                        if (h.textContent == square_four_one.textContent) {
                            h.style.backgroundColor = "aquamarine";
                        }
                    }
                } else {
                    if (square_four_one.textContent == splitWord[0] || square_four_one.textContent == splitWord[1] || square_four_one.textContent == splitWord[2]) {
                        square_four_one.style.backgroundColor = "rgb(142, 157, 253)";
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_four_one.textContent) {
                                h.style.backgroundColor = "rgb(142, 157, 253)";
                            }
                        }
                    } else {
                        square_four_one.style.backgroundColor = "rgb(245, 169, 112)";
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_four_one.textContent) {
                                h.style.backgroundColor = "#aaa";
                            }
                        }
                    }
                }
            }
        } else {
            if (line_two == true) {
                if (square_four_two.textContent.length != 0 && square_three_two.textContent.length != 0 && square_two_two.textContent.length != 0 && square_one_two.textContent.length != 0) {
                    line_two = false;
                    line_three = true;
                    let word = square_one_two.textContent + square_two_two.textContent + square_three_two.textContent + square_four_two.textContent;
                    //alert(word);
                    if (word == today_word) {
                        if (localStorage.getItem("winnumber") != null) {
                            localStorage.setItem("winnumber", Number(localStorage.getItem("winnumber")) + 1);
                        } else {
                            localStorage.setItem("winnumber", 1);
                        }
                        setTimeout(() => {
                            replay_box.style.transform = "translate(-50%,-50%) scale(1.2)";
                            replay_text_two.textContent = "הרווחת " + 80 + " נקודות בנסיון השני";
                            setTimeout(() => {
                                replay_box.style.transform = "translate(-50%,-50%) scale(1)";
                            }, 400);
                        }, 2000);
                        //alert("winnnnn");
                        if (gess_other != false) {
                            gess_database.child(gess_other).once("value", function(snapshot) {
                                let wordg = snapshot.val().word;
                                if (word == wordg) {
                                    if (localStorage.getItem("gessed words") != null) {
                                        let gessed = JSON.parse(localStorage.getItem("gessed words"));
                                        gessed.push(gess_other);
                                        localStorage.setItem("gessed words", JSON.stringify(gessed));
                                        //console.log(JSON.parse(localStorage.getItem("gessed words")));
                                    } else {
                                        let h = [gess_other];
                                        localStorage.setItem("gessed words", JSON.stringify(h));
                                    }
                                    //alert("מצאת את המילה של " + gess_other);
                                    msg_text.textContent = "מצאת את המילה של " + gess_other;
                                    msg_box.style.transform = "translate(-50%,-5%) scale(1)";
                                    setTimeout(() => {
                                        msg_box.style.transform = "translate(-50%,-5%) scale(0)";
                                    }, 2000);
                                }
                            });
                        }
                        win_sound.play();
                        square_one_two.style.backgroundColor = "aquamarine";
                        square_two_two.style.backgroundColor = "aquamarine";
                        square_three_two.style.backgroundColor = "aquamarine";
                        square_four_two.style.backgroundColor = "aquamarine";
                        line_three = false;
                        square_line_two.style.animationPlayState = "running";
                        if (localStorage.getItem("points") != null) {
                            localStorage.setItem("points", Number(localStorage.getItem("points")) + 80)
                        } else {
                            localStorage.setItem("points", 80);
                        }
                        for (let f = 1; f < 28; f++) {
                            //console.log(all_numbers[f]);
                            //let h = eval(all_numbers[f]);
                            let h = document.getElementById(all_numbers[f]);
                            if (h.textContent == square_one_two.textContent || h.textContent == square_two_two.textContent || h.textContent == square_three_two.textContent || h.textContent == square_four_two.textContent) {
                                h.style.backgroundColor = "aquamarine";
                            }
                        }
                    } else {
                        //console.log()
                        let splitWord = today_word.split("");
                        if (square_one_two.textContent == splitWord[0]) {
                            square_one_two.style.backgroundColor = "aquamarine";
                            for (let f = 1; f < 28; f++) {
                                //console.log(all_numbers[f]);
                                //let h = eval(all_numbers[f]);
                                let h = document.getElementById(all_numbers[f]);
                                if (h.textContent == square_one_two.textContent) {
                                    h.style.backgroundColor = "aquamarine";
                                }
                            }
                        } else {
                            if (square_one_two.textContent == splitWord[1] || square_one_two.textContent == splitWord[2] || square_one_two.textContent == splitWord[3]) {
                                square_one_two.style.backgroundColor = "rgb(142, 157, 253)";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_one_two.textContent) {
                                        h.style.backgroundColor = "rgb(142, 157, 253)";
                                    }
                                }
                            } else {
                                square_one_two.style.backgroundColor = "rgb(245, 169, 112)";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_one_two.textContent) {
                                        h.style.backgroundColor = "#aaa";
                                    }
                                }
                            }
                        }


                        if (square_two_two.textContent == splitWord[1]) {
                            square_two_two.style.backgroundColor = "aquamarine";
                            for (let f = 1; f < 28; f++) {
                                //console.log(all_numbers[f]);
                                //let h = eval(all_numbers[f]);
                                let h = document.getElementById(all_numbers[f]);
                                if (h.textContent == square_two_two.textContent) {
                                    h.style.backgroundColor = "aquamarine";
                                }
                            }
                        } else {
                            if (square_two_two.textContent == splitWord[0] || square_two_two.textContent == splitWord[2] || square_two_two.textContent == splitWord[3]) {
                                square_two_two.style.backgroundColor = "rgb(142, 157, 253)";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_two_two.textContent) {
                                        h.style.backgroundColor = "rgb(142, 157, 253)";
                                    }
                                }
                            } else {
                                square_two_two.style.backgroundColor = "rgb(245, 169, 112)";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_two_two.textContent) {
                                        h.style.backgroundColor = "#aaa";
                                    }
                                }
                            }
                        }


                        if (square_three_two.textContent == splitWord[2]) {
                            square_three_two.style.backgroundColor = "aquamarine";
                            for (let f = 1; f < 28; f++) {
                                //console.log(all_numbers[f]);
                                //let h = eval(all_numbers[f]);
                                let h = document.getElementById(all_numbers[f]);
                                if (h.textContent == square_three_two.textContent) {
                                    h.style.backgroundColor = "aquamarine";
                                }
                            }
                        } else {
                            if (square_three_two.textContent == splitWord[0] || square_three_two.textContent == splitWord[1] || square_three_two.textContent == splitWord[3]) {
                                square_three_two.style.backgroundColor = "rgb(142, 157, 253)";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_three_two.textContent) {
                                        h.style.backgroundColor = "rgb(142, 157, 253)";
                                    }
                                }
                            } else {
                                square_three_two.style.backgroundColor = "rgb(245, 169, 112)";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_three_two.textContent) {
                                        h.style.backgroundColor = "#aaa";
                                    }
                                }
                            }
                        }


                        if (square_four_two.textContent == splitWord[3]) {
                            square_four_two.style.backgroundColor = "aquamarine";
                            for (let f = 1; f < 28; f++) {
                                //console.log(all_numbers[f]);
                                //let h = eval(all_numbers[f]);
                                let h = document.getElementById(all_numbers[f]);
                                if (h.textContent == square_four_two.textContent) {
                                    h.style.backgroundColor = "aquamarine";
                                }
                            }
                        } else {
                            if (square_four_two.textContent == splitWord[0] || square_four_two.textContent == splitWord[1] || square_four_two.textContent == splitWord[2]) {
                                square_four_two.style.backgroundColor = "rgb(142, 157, 253)";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_four_two.textContent) {
                                        h.style.backgroundColor = "rgb(142, 157, 253)";
                                    }
                                }
                            } else {
                                square_four_two.style.backgroundColor = "rgb(245, 169, 112)";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_four_two.textContent) {
                                        h.style.backgroundColor = "#aaa";
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (line_three == true) {
                    if (square_four_three.textContent.length != 0 && square_three_three.textContent.length != 0 && square_two_three.textContent.length != 0 && square_one_three.textContent.length != 0) {
                        line_three = false;
                        line_four = true;
                        let word = square_one_three.textContent + square_two_three.textContent + square_three_three.textContent + square_four_three.textContent;
                        //alert(word);
                        if (word == today_word) {
                            if (localStorage.getItem("winnumber") != null) {
                                localStorage.setItem("winnumber", Number(localStorage.getItem("winnumber")) + 1);
                            } else {
                                localStorage.setItem("winnumber", 1);
                            }
                            setTimeout(() => {
                                replay_box.style.transform = "translate(-50%,-50%) scale(1.2)";
                                replay_text_two.textContent = "הרווחת " + 50 + " נקודות בנסיון שלישי";
                                setTimeout(() => {
                                    replay_box.style.transform = "translate(-50%,-50%) scale(1)";
                                }, 400);
                            }, 2000);
                            //alert("winnnnn");
                            if (gess_other != false) {
                                gess_database.child(gess_other).once("value", function(snapshot) {
                                    let wordg = snapshot.val().word;
                                    if (word == wordg) {
                                        if (localStorage.getItem("gessed words") != null) {
                                            let gessed = JSON.parse(localStorage.getItem("gessed words"));
                                            gessed.push(gess_other);
                                            localStorage.setItem("gessed words", JSON.stringify(gessed));
                                            //console.log(JSON.parse(localStorage.getItem("gessed words")));
                                        } else {
                                            let h = [gess_other];
                                            localStorage.setItem("gessed words", JSON.stringify(h));
                                        }
                                        //alert("מצאת את המילה של " + gess_other);
                                        msg_text.textContent = "מצאת את המילה של " + gess_other;
                                        msg_box.style.transform = "translate(-50%,-5%) scale(1)";
                                        setTimeout(() => {
                                            msg_box.style.transform = "translate(-50%,-5%) scale(0)";
                                        }, 2000);
                                    }
                                });
                            }
                            win_sound.play();
                            square_one_three.style.backgroundColor = "aquamarine";
                            square_two_three.style.backgroundColor = "aquamarine";
                            square_three_three.style.backgroundColor = "aquamarine";
                            square_four_three.style.backgroundColor = "aquamarine";
                            line_four = false;
                            square_line_three.style.animationPlayState = "running";
                            if (localStorage.getItem("points") != null) {
                                localStorage.setItem("points", Number(localStorage.getItem("points")) + 50)
                            } else {
                                localStorage.setItem("points", 50);
                            }
                            for (let f = 1; f < 28; f++) {
                                //console.log(all_numbers[f]);
                                //let h = eval(all_numbers[f]);
                                let h = document.getElementById(all_numbers[f]);
                                if (h.textContent == square_one_three.textContent || h.textContent == square_two_three.textContent || h.textContent == square_three_three.textContent || h.textContent == square_four_three.textContent) {
                                    h.style.backgroundColor = "aquamarine";
                                }
                            }
                        } else {
                            //console.log()
                            let splitWord = today_word.split("");
                            if (square_one_three.textContent == splitWord[0]) {
                                square_one_three.style.backgroundColor = "aquamarine";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_one_three.textContent) {
                                        h.style.backgroundColor = "aquamarine";
                                    }
                                }
                            } else {
                                if (square_one_three.textContent == splitWord[1] || square_one_three.textContent == splitWord[2] || square_one_three.textContent == splitWord[3]) {
                                    square_one_three.style.backgroundColor = "rgb(142, 157, 253)";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_one_three.textContent) {
                                            h.style.backgroundColor = "rgb(142, 157, 253)";
                                        }
                                    }
                                } else {
                                    square_one_three.style.backgroundColor = "rgb(245, 169, 112)";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_one_three.textContent) {
                                            h.style.backgroundColor = "#aaa";
                                        }
                                    }
                                }
                            }


                            if (square_two_three.textContent == splitWord[1]) {
                                square_two_three.style.backgroundColor = "aquamarine";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_two_three.textContent) {
                                        h.style.backgroundColor = "aquamarine";
                                    }
                                }
                            } else {
                                if (square_two_three.textContent == splitWord[0] || square_two_three.textContent == splitWord[2] || square_two_three.textContent == splitWord[3]) {
                                    square_two_three.style.backgroundColor = "rgb(142, 157, 253)";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_two_three.textContent) {
                                            h.style.backgroundColor = "rgb(142, 157, 253)";
                                        }
                                    }
                                } else {
                                    square_two_three.style.backgroundColor = "rgb(245, 169, 112)";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_two_three.textContent) {
                                            h.style.backgroundColor = "#aaa";
                                        }
                                    }
                                }
                            }


                            if (square_three_three.textContent == splitWord[2]) {
                                square_three_three.style.backgroundColor = "aquamarine";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_three_three.textContent) {
                                        h.style.backgroundColor = "aquamarine";
                                    }
                                }
                            } else {
                                if (square_three_three.textContent == splitWord[0] || square_three_three.textContent == splitWord[1] || square_three_three.textContent == splitWord[3]) {
                                    square_three_three.style.backgroundColor = "rgb(142, 157, 253)";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_three_three.textContent) {
                                            h.style.backgroundColor = "rgb(142, 157, 253)";
                                        }
                                    }
                                } else {
                                    square_three_three.style.backgroundColor = "rgb(245, 169, 112)";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_three_three.textContent) {
                                            h.style.backgroundColor = "#aaa";
                                        }
                                    }
                                }
                            }


                            if (square_four_three.textContent == splitWord[3]) {
                                square_four_three.style.backgroundColor = "aquamarine";
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_four_three.textContent) {
                                        h.style.backgroundColor = "aquamarine";
                                    }
                                }
                            } else {
                                if (square_four_three.textContent == splitWord[0] || square_four_three.textContent == splitWord[1] || square_four_three.textContent == splitWord[2]) {
                                    square_four_three.style.backgroundColor = "rgb(142, 157, 253)";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_four_three.textContent) {
                                            h.style.backgroundColor = "rgb(142, 157, 253)";
                                        }
                                    }
                                } else {
                                    square_four_three.style.backgroundColor = "rgb(245, 169, 112)";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_four_three.textContent) {
                                            h.style.backgroundColor = "#aaa";
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (line_four == true) {
                        if (square_four_four.textContent.length != 0 && square_three_four.textContent.length != 0 && square_two_four.textContent.length != 0 && square_one_four.textContent.length != 0) {
                            line_four = false;
                            line_five = true;
                            let word = square_one_four.textContent + square_two_four.textContent + square_three_four.textContent + square_four_four.textContent;
                            //alert(word);
                            if (word == today_word) {
                                if (localStorage.getItem("winnumber") != null) {
                                    localStorage.setItem("winnumber", Number(localStorage.getItem("winnumber")) + 1);
                                } else {
                                    localStorage.setItem("winnumber", 1);
                                }
                                //alert("winnnnn");
                                setTimeout(() => {
                                    replay_box.style.transform = "translate(-50%,-50%) scale(1.2)";
                                    replay_text_two.textContent = "הרווחת " + 25 + " נקודות בנסיון הרביעי";
                                    setTimeout(() => {
                                        replay_box.style.transform = "translate(-50%,-50%) scale(1)";
                                    }, 400);
                                }, 2000);

                                if (gess_other != false) {
                                    gess_database.child(gess_other).once("value", function(snapshot) {
                                        let wordg = snapshot.val().word;
                                        if (word == wordg) {
                                            if (localStorage.getItem("gessed words") != null) {
                                                let gessed = JSON.parse(localStorage.getItem("gessed words"));
                                                gessed.push(gess_other);
                                                localStorage.setItem("gessed words", JSON.stringify(gessed));
                                                //console.log(JSON.parse(localStorage.getItem("gessed words")));
                                            } else {
                                                let h = [gess_other];
                                                localStorage.setItem("gessed words", JSON.stringify(h));
                                            }
                                            //alert("מצאת את המילה של " + gess_other);
                                            msg_text.textContent = "מצאת את המילה של " + gess_other;
                                            msg_box.style.transform = "translate(-50%,-5%) scale(1)";
                                            setTimeout(() => {
                                                msg_box.style.transform = "translate(-50%,-5%) scale(0)";
                                            }, 2000);
                                        }
                                    });
                                }
                                win_sound.play();
                                square_one_four.style.backgroundColor = "aquamarine";
                                square_two_four.style.backgroundColor = "aquamarine";
                                square_three_four.style.backgroundColor = "aquamarine";
                                square_four_four.style.backgroundColor = "aquamarine";
                                square_line_four.style.animationPlayState = "running";
                                if (localStorage.getItem("points") != null) {
                                    localStorage.setItem("points", Number(localStorage.getItem("points")) + 25)
                                } else {
                                    localStorage.setItem("points", 25);
                                }
                                for (let f = 1; f < 28; f++) {
                                    //console.log(all_numbers[f]);
                                    //let h = eval(all_numbers[f]);
                                    let h = document.getElementById(all_numbers[f]);
                                    if (h.textContent == square_one_four.textContent || h.textContent == square_two_four.textContent || h.textContent == square_three_four.textContent || h.textContent == square_four_four.textContent) {
                                        h.style.backgroundColor = "aquamarine";
                                    }
                                }
                            } else {
                                //console.log()
                                let splitWord = today_word.split("");
                                if (square_one_four.textContent == splitWord[0]) {
                                    square_one_four.style.backgroundColor = "aquamarine";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_one_four.textContent) {
                                            h.style.backgroundColor = "aquamarine";
                                        }
                                    }
                                } else {
                                    if (square_one_four.textContent == splitWord[1] || square_one_four.textContent == splitWord[2] || square_one_four.textContent == splitWord[3]) {
                                        square_one_four.style.backgroundColor = "rgb(142, 157, 253)";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_one_four.textContent) {
                                                h.style.backgroundColor = "rgb(142, 157, 253)";
                                            }
                                        }
                                    } else {
                                        square_one_four.style.backgroundColor = "rgb(245, 169, 112)";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_one_four.textContent) {
                                                h.style.backgroundColor = "#aaa";
                                            }
                                        }
                                    }
                                }


                                if (square_two_four.textContent == splitWord[1]) {
                                    square_two_four.style.backgroundColor = "aquamarine";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_two_four.textContent) {
                                            h.style.backgroundColor = "aquamarine";
                                        }
                                    }
                                } else {
                                    if (square_two_four.textContent == splitWord[0] || square_two_four.textContent == splitWord[2] || square_two_four.textContent == splitWord[3]) {
                                        square_two_four.style.backgroundColor = "rgb(142, 157, 253)";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_two_four.textContent) {
                                                h.style.backgroundColor = "rgb(142, 157, 253)";
                                            }
                                        }
                                    } else {
                                        square_two_four.style.backgroundColor = "rgb(245, 169, 112)";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_two_four.textContent) {
                                                h.style.backgroundColor = "#aaa";
                                            }
                                        }
                                    }
                                }


                                if (square_three_four.textContent == splitWord[2]) {
                                    square_three_four.style.backgroundColor = "aquamarine";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_three_four.textContent) {
                                            h.style.backgroundColor = "aquamarine";
                                        }
                                    }
                                } else {
                                    if (square_three_four.textContent == splitWord[0] || square_three_four.textContent == splitWord[1] || square_three_four.textContent == splitWord[3]) {
                                        square_three_four.style.backgroundColor = "rgb(142, 157, 253)";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_three_four.textContent) {
                                                h.style.backgroundColor = "rgb(142, 157, 253)";
                                            }
                                        }
                                    } else {
                                        square_three_four.style.backgroundColor = "rgb(245, 169, 112)";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_three_four.textContent) {
                                                h.style.backgroundColor = "#aaa";
                                            }
                                        }
                                    }
                                }


                                if (square_four_four.textContent == splitWord[3]) {
                                    square_four_four.style.backgroundColor = "aquamarine";
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_four_four.textContent) {
                                            h.style.backgroundColor = "aquamarine";
                                        }
                                    }
                                } else {
                                    if (square_four_four.textContent == splitWord[0] || square_four_four.textContent == splitWord[1] || square_four_four.textContent == splitWord[2]) {
                                        square_four_four.style.backgroundColor = "rgb(142, 157, 253)";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_four_four.textContent) {
                                                h.style.backgroundColor = "rgb(142, 157, 253)";
                                            }
                                        }
                                    } else {
                                        square_four_four.style.backgroundColor = "rgb(245, 169, 112)";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_four_four.textContent) {
                                                h.style.backgroundColor = "#aaa";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (line_five == true) {
                            if (square_four_five.textContent.length != 0 && square_three_five.textContent.length != 0 && square_two_five.textContent.length != 0 && square_one_five.textContent.length != 0) {
                                line_five = false;
                                let word = square_one_five.textContent + square_two_five.textContent + square_three_five.textContent + square_four_five.textContent;
                                //alert(word);
                                if (word == today_word) {
                                    if (localStorage.getItem("winnumber") != null) {
                                        localStorage.setItem("winnumber", Number(localStorage.getItem("winnumber")) + 1);
                                    } else {
                                        localStorage.setItem("winnumber", 1);
                                    }
                                    //alert("winnnnn");
                                    setTimeout(() => {
                                        replay_box.style.transform = "translate(-50%,-50%) scale(1.2)";
                                        replay_text_two.textContent = "הרווחת " + 15 + " נקודות בנסיון החמישי";
                                        setTimeout(() => {
                                            replay_box.style.transform = "translate(-50%,-50%) scale(1)";
                                        }, 400);
                                    }, 2000);

                                    if (gess_other != false) {
                                        gess_database.child(gess_other).once("value", function(snapshot) {
                                            let wordg = snapshot.val().word;
                                            if (word == wordg) {
                                                if (localStorage.getItem("gessed words") != null) {
                                                    let gessed = JSON.parse(localStorage.getItem("gessed words"));
                                                    gessed.push(gess_other);
                                                    localStorage.setItem("gessed words", JSON.stringify(gessed));
                                                    //console.log(JSON.parse(localStorage.getItem("gessed words")));
                                                } else {
                                                    let h = [gess_other];
                                                    localStorage.setItem("gessed words", JSON.stringify(h));
                                                }
                                                //alert("מצאת את המילה של " + gess_other);
                                                msg_text.textContent = "מצאת את המילה של " + gess_other;
                                                msg_box.style.transform = "translate(-50%,-5%) scale(1)";
                                                setTimeout(() => {
                                                    msg_box.style.transform = "translate(-50%,-5%) scale(0)";
                                                }, 2000);
                                            }
                                        });
                                    }
                                    win_sound.play();
                                    square_one_five.style.backgroundColor = "aquamarine";
                                    square_two_five.style.backgroundColor = "aquamarine";
                                    square_three_five.style.backgroundColor = "aquamarine";
                                    square_four_five.style.backgroundColor = "aquamarine";
                                    square_line_five.style.animationPlayState = "running";
                                    if (localStorage.getItem("points") != null) {
                                        localStorage.setItem("points", Number(localStorage.getItem("points")) + 15)
                                    } else {
                                        localStorage.setItem("points", 15);
                                    }
                                    for (let f = 1; f < 28; f++) {
                                        //console.log(all_numbers[f]);
                                        //let h = eval(all_numbers[f]);
                                        let h = document.getElementById(all_numbers[f]);
                                        if (h.textContent == square_one_five.textContent || h.textContent == square_two_four.textContent || h.textContent == square_three_four.textContent || h.textContent == square_four_four.textContent) {
                                            h.style.backgroundColor = "aquamarine";
                                        }
                                    }
                                } else {
                                    //console.log()
                                    let splitWord = today_word.split("");
                                    if (square_one_five.textContent == splitWord[0]) {
                                        square_one_five.style.backgroundColor = "aquamarine";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_one_five.textContent) {
                                                h.style.backgroundColor = "aquamarine";
                                            }
                                        }
                                    } else {
                                        if (square_one_five.textContent == splitWord[1] || square_one_five.textContent == splitWord[2] || square_one_five.textContent == splitWord[3]) {
                                            square_one_five.style.backgroundColor = "rgb(142, 157, 253)";
                                            for (let f = 1; f < 28; f++) {
                                                //console.log(all_numbers[f]);
                                                //let h = eval(all_numbers[f]);
                                                let h = document.getElementById(all_numbers[f]);
                                                if (h.textContent == square_one_five.textContent) {
                                                    h.style.backgroundColor = "rgb(142, 157, 253)";
                                                }
                                            }
                                        } else {
                                            square_one_five.style.backgroundColor = "rgb(245, 169, 112)";
                                            for (let f = 1; f < 28; f++) {
                                                //console.log(all_numbers[f]);
                                                //let h = eval(all_numbers[f]);
                                                let h = document.getElementById(all_numbers[f]);
                                                if (h.textContent == square_one_five.textContent) {
                                                    h.style.backgroundColor = "#aaa";
                                                }
                                            }
                                        }
                                    }


                                    if (square_two_five.textContent == splitWord[1]) {
                                        square_two_five.style.backgroundColor = "aquamarine";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_two_five.textContent) {
                                                h.style.backgroundColor = "aquamarine";
                                            }
                                        }
                                    } else {
                                        if (square_two_five.textContent == splitWord[0] || square_two_five.textContent == splitWord[2] || square_two_five.textContent == splitWord[3]) {
                                            square_two_five.style.backgroundColor = "rgb(142, 157, 253)";
                                            for (let f = 1; f < 28; f++) {
                                                //console.log(all_numbers[f]);
                                                //let h = eval(all_numbers[f]);
                                                let h = document.getElementById(all_numbers[f]);
                                                if (h.textContent == square_two_five.textContent) {
                                                    h.style.backgroundColor = "rgb(142, 157, 253)";
                                                }
                                            }
                                        } else {
                                            square_two_five.style.backgroundColor = "rgb(245, 169, 112)";
                                            for (let f = 1; f < 28; f++) {
                                                //console.log(all_numbers[f]);
                                                //let h = eval(all_numbers[f]);
                                                let h = document.getElementById(all_numbers[f]);
                                                if (h.textContent == square_two_five.textContent) {
                                                    h.style.backgroundColor = "#aaa";
                                                }
                                            }
                                        }
                                    }


                                    if (square_three_five.textContent == splitWord[2]) {
                                        square_three_five.style.backgroundColor = "aquamarine";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_three_five.textContent) {
                                                h.style.backgroundColor = "aquamarine";
                                            }
                                        }
                                    } else {
                                        if (square_three_five.textContent == splitWord[0] || square_three_five.textContent == splitWord[1] || square_three_five.textContent == splitWord[3]) {
                                            square_three_five.style.backgroundColor = "rgb(142, 157, 253)";
                                            for (let f = 1; f < 28; f++) {
                                                //console.log(all_numbers[f]);
                                                //let h = eval(all_numbers[f]);
                                                let h = document.getElementById(all_numbers[f]);
                                                if (h.textContent == square_three_five.textContent) {
                                                    h.style.backgroundColor = "rgb(142, 157, 253)";
                                                }
                                            }
                                        } else {
                                            square_three_five.style.backgroundColor = "rgb(245, 169, 112)";
                                            for (let f = 1; f < 28; f++) {
                                                //console.log(all_numbers[f]);
                                                //let h = eval(all_numbers[f]);
                                                let h = document.getElementById(all_numbers[f]);
                                                if (h.textContent == square_three_five.textContent) {
                                                    h.style.backgroundColor = "#aaa";
                                                }
                                            }
                                        }
                                    }


                                    if (square_four_five.textContent == splitWord[3]) {
                                        square_four_five.style.backgroundColor = "aquamarine";
                                        for (let f = 1; f < 28; f++) {
                                            //console.log(all_numbers[f]);
                                            //let h = eval(all_numbers[f]);
                                            let h = document.getElementById(all_numbers[f]);
                                            if (h.textContent == square_four_five.textContent) {
                                                h.style.backgroundColor = "aquamarine";
                                            }
                                        }
                                    } else {
                                        if (square_four_five.textContent == splitWord[0] || square_four_five.textContent == splitWord[1] || square_four_five.textContent == splitWord[2]) {
                                            square_four_five.style.backgroundColor = "rgb(142, 157, 253)";
                                            for (let f = 1; f < 28; f++) {
                                                //console.log(all_numbers[f]);
                                                //let h = eval(all_numbers[f]);
                                                let h = document.getElementById(all_numbers[f]);
                                                if (h.textContent == square_four_five.textContent) {
                                                    h.style.backgroundColor = "rgb(142, 157, 253)";
                                                }
                                            }
                                        } else {
                                            square_four_five.style.backgroundColor = "rgb(245, 169, 112)";
                                            for (let f = 1; f < 28; f++) {
                                                //console.log(all_numbers[f]);
                                                //let h = eval(all_numbers[f]);
                                                let h = document.getElementById(all_numbers[f]);
                                                if (h.textContent == square_four_five.textContent) {
                                                    h.style.backgroundColor = "#aaa";
                                                }
                                            }
                                        }
                                    }
                                    setTimeout(() => {
                                        lose_sound.play();
                                        //alert(today_word);
                                        square_one_five.style.transform = "scaleX(0)";
                                        setTimeout(() => {
                                            square_one_five.style.transform = "scaleX(1)";
                                            square_one_five.style.backgroundColor = "aquamarine";
                                            square_one_five.textContent = splitWord[0];
                                            setTimeout(() => {
                                                square_two_five.style.transform = "scaleX(0)";
                                                setTimeout(() => {
                                                    square_two_five.style.transform = "scaleX(1)";
                                                    square_two_five.style.backgroundColor = "aquamarine";
                                                    square_two_five.textContent = splitWord[1];
                                                    setTimeout(() => {
                                                        square_three_five.style.transform = "scaleX(0)";
                                                        setTimeout(() => {
                                                            square_three_five.style.transform = "scaleX(1)";
                                                            square_three_five.style.backgroundColor = "aquamarine";
                                                            square_three_five.textContent = splitWord[2];
                                                            setTimeout(() => {
                                                                square_four_five.style.transform = "scaleX(0)";
                                                                setTimeout(() => {
                                                                    square_four_five.style.transform = "scaleX(1)";
                                                                    square_four_five.style.backgroundColor = "aquamarine";
                                                                    square_four_five.textContent = splitWord[3];
                                                                    setTimeout(() => {
                                                                        replay_text_two.textContent = "לא נורא, אולי תצליח בפעם הבאה";
                                                                        replay_box.style.transform = "translate(-50%,-50%) scale(1.2)";
                                                                        setTimeout(() => {
                                                                            replay_box.style.transform = "translate(-50%,-50%) scale(1)";
                                                                        }, 400);
                                                                    }, 2000);
                                                                }, 200);
                                                            }, 400);
                                                        }, 200);
                                                    }, 400);
                                                }, 200);
                                            }, 400);
                                        }, 200);
                                    }, 2000);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


/*function check_word(word) {
    if (word.length > 0) {
        for (let i = 0; i < 4000; i++) {
            if (word == data[i]) {
                check = true;
            }
        }
        if (check == false) {
            msg_text.textContent = "המילה לא נמצאת ברשימה";
            msg_box.style.transform = "translate(-50%,-50%) scale(1.2)";
            if (line_one == true) {
                square_one_one.textContent = "";
                square_two_one.textContent = "";
                square_three_one.textContent = "";
                square_four_one.textContent = "";
            }

            if (line_two == true) {
                square_one_two.textContent = "";
                square_two_two.textContent = "";
                square_three_two.textContent = "";
                square_four_two.textContent = "";
            }
            if (line_three == true) {
                square_one_three.textContent = "";
                square_two_three.textContent = "";
                square_three_three.textContent = "";
                square_four_three.textContent = "";
            }
            if (line_four == true) {
                square_one_four.textContent = "";
                square_two_four.textContent = "";
                square_three_four.textContent = "";
                square_four_four.textContent = "";
            }
            if (line_five == true) {
                square_one_five.textContent = "";
                square_two_five.textContent = "";
                square_three_five.textContent = "";
                square_four_five.textContent = "";
            }

            setTimeout(() => {
                msg_box.style.transform = "translate(-50%,-50%) scale(1)";
                msg_ok.style.top = "34%";
                setTimeout(() => {
                    msg_box.style.transform = "translate(-50%,-50%) scale(0)";
                }, 2000);
            }, 200);
        }
    }
}*/


p2.onclick = () => {
    type(p2.textContent);
}

ch123.onclick = () => {
    type(ch123.textContent);
}

m2.onclick = () => {
    type(m2.textContent);
}

n2.onclick = () => {
    type(n2.textContent);
}

v.onclick = () => {
    type(v.textContent);
}

t2.onclick = () => {
    type(t2.textContent);
}

a.onclick = () => {
    type(a.textContent);
}

r.onclick = () => {
    type(r.textContent);
}

k.onclick = () => {
    type(k.textContent);
}

f.onclick = () => {
    type(f.textContent);
}

ch2.onclick = () => {
    type(ch2.textContent);
}

l.onclick = () => {
    type(l.textContent);
}

ch12.onclick = () => {
    type(ch12.textContent);
}

g.onclick = () => {
    type(g.textContent);
}

d.onclick = () => {
    type(d.textContent);
}

sh.onclick = () => {
    type(sh.textContent);
}

m2.onclick = () => {
    type(m2.textContent);
}

ts2.onclick = () => {
    type(ts2.textContent);
}

t.onclick = () => {
    type(t.textContent);
}

ts.onclick = () => {
    type(ts.textContent);
}

m.onclick = () => {
    type(m.textContent);
}

n.onclick = () => {
    type(n.textContent);
}

a2.onclick = () => {
    type(a2.textContent);
}

b.onclick = () => {
    type(b.textContent);
}

s.onclick = () => {
    type(s.textContent);
}

z.onclick = () => {
    type(z.textContent);
}

ah.onclick = () => {
    type(ah.textContent);
}

i.onclick = () => {
    type(i.textContent);
}


document.addEventListener("keydown", (e) => {
    let key = e.key;
    //console.log(key);
    if (key == "פ" || key == "ם" || key == "ן" || key == "ו" || key == "ט" || key == "א" || key == "ר" || key == "ק" || key == "'" || key == "ף" || key == "ך" || key == "ל" || key == "ח" || key == "י" || key == "ע" || key == "כ" || key == "ג" || key == "ד" || key == "ש" || key == "ץ" || key == "ת" || key == "צ" || key == "מ" || key == "נ" || key == "ה" || key == "ב" || key == "ס" || key == "ז") {
        type(key);
    }
    if (key == "Backspace") {
        removef();
    }
    if (key == "Enter") {
        /*if (line_one == true) {
            //check_word(square_one_one.textContent + square_two_one.textContent + square_three_one.textContent + square_four_one.textContent);
        }
        if (line_two == true) {
            //check_word(square_one_two.textContent + square_two_two.textContent + square_three_two.textContent + square_four_two.textContent);
        }
        if (line_three == true) {
            //check_word(square_one_three.textContent + square_two_three.textContent + square_three_three.textContent + square_four_three.textContent);
        }
        if (line_four == true) {
            //check_word(square_one_four.textContent + square_two_four.textContent + square_three_four.textContent + square_four_four.textContent);
        }
        if (line_five == true) {
            //check_word(square_one_five.textContent + square_two_five.textContent + square_three_five.textContent + square_four_five.textContent);
        }

        if (check == true) {
            //check = false;
        }*/
        msg_box.style.transform = "translate(-50%,-50%) scale(0)";
        enterf();
    }

    if (key == "p") {
        type("פ");
    }
    if (key == "o") {
        type("ם");
    }
    if (key == "i") {
        type("ן");
    }
    if (key == "u") {
        type("ו");
    }
    if (key == "y") {
        type("ט");
    }
    if (key == "t") {
        type("א");
    }
    if (key == "r") {
        type("ר");
    }
    if (key == "e") {
        type("ק");
    }
    if (key == ";") {
        type("ף");
    }
    if (key == "l") {
        type("ך");
    }
    if (key == "k") {
        type("ל");
    }
    if (key == "j") {
        type("ח");
    }
    if (key == "h") {
        type("י");
    }
    if (key == "g") {
        type("ע");
    }
    if (key == "f") {
        type("כ");
    }
    if (key == "d") {
        type("ג");
    }
    if (key == "s") {
        type("ד");
    }
    if (key == "a") {
        type("ש");
    }
    if (key == ".") {
        type("ץ");
    }
    if (key == ",") {
        type("ת");
    }
    if (key == "m") {
        type("צ");
    }
    if (key == "n") {
        type("מ");
    }
    if (key == "b") {
        type("נ");
    }
    if (key == "v") {
        type("ה");
    }
    if (key == "c") {
        type("ב");
    }
    if (key == "x") {
        type("ס");
    }
    if (key == "z") {
        type("ז");
    }
});