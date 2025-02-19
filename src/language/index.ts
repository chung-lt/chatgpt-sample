import { createI18n } from 'vue-i18n';
import { default as ja } from './ja';
import { default as en } from './en';
import { default as vi } from './vi';
import { default as nds } from './nds';
import { default as id } from './id';
import { default as escl } from './escl';
import { default as fil } from './fil';
import { default as si } from './si';
import { default as hi } from './hi';
import { default as ms } from './ms';
import { default as fr } from './fr';
import { default as zhsf } from './zhsf';
import { default as engb } from './engb';
import { default as zhtw } from './zhtw';
import { default as my } from './my';
import { default as enau } from './enau';
import { default as ko } from './ko';
import { default as de } from './de';
import { default as bn } from './bn';
import { default as ru } from './ru';
import { default as es } from './es';
import { default as mg } from './mg';
import { default as th } from './th';
import { default as enca } from './enca';
import { default as ne } from './ne';
import { default as ensg } from './ensg';
import { default as ar } from './ar';
import { default as az } from './az';

const i18n = createI18n({
    fallbackLocale: 'en_US',
    messages: {
        en_US: en,
        ja_JP: ja,
        vi_VN: vi,
        nds_DE: nds,
        id_ID: id,
        es_CL: escl,
        fil_PH: fil,
        si_LK: si,
        hi_IN: hi,
        ms_MY: ms,
        fr_FR: fr,
        zh_CN: zhsf,
        en_GB: engb,
        zh_TW: zhtw,
        my_MM: my,
        en_AU: enau,
        ko_KR: ko,
        de_CH: de,
        bn_BD: bn,
        ru_RU: ru,
        es_ES: es,
        mg_MG: mg,
        th_TH: th,
        en_CA: enca,
        ne_NP: ne,
        en_SG: ensg,
        ar_EG: ar,
        az_AZ: az
    }
});
export default i18n;
