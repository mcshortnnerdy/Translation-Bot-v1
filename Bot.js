import * as inspect from 'inspect';
import * as googletrans from 'googletrans';
import * as random from 'random';
import * as re from 're';
import {Translator} from 'googletrans';
var instrings, langslist, listlangs, outstrings, string, x;
inspect.getmembers(googletrans);
string = "What is a machine if not a mind? What is a soul if not a machine?";
listlangs = list(googletrans.LANGUAGES);
langslist = [];
function randomlang(list) {
    var lang;
    lang = random.choice(list);
    langslist.append(lang);
}
x = range(0, 27);
for (var item, _pj_c = 0, _pj_a = x, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
    item = _pj_a[_pj_c];
    randomlang(listlangs);
}
outstrings = [];
function outtrans(languages) {
    var fromeng, outboundstr, translator;
    translator = new Translator();
    for (var item, _pj_c = 0, _pj_a = languages, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        item = _pj_a[_pj_c];
        fromeng = translator.translate({"text": string, "dest": item, "src": "en"});
        outboundstr = fromeng.text;
        outstrings.append(outboundstr);
    }
}
outtrans(langslist);
instrings = [];
function intrans(stringlist) {
    var inboundstr, toeng, translator;
    translator = new Translator();
    for (var item, _pj_c = 0, _pj_a = stringlist, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        item = _pj_a[_pj_c];
        toeng = translator.translate({"text": item, "dest": "en"});
        inboundstr = toeng.text;
        instrings.append(inboundstr);
        for (var item, _pj_f = 0, _pj_d = instrings, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            item = _pj_d[_pj_f];
            console.log(item);
        }
    }
}
intrans(outstrings);

//# sourceMappingURL=Bot.js.map
