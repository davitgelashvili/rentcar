"use client"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from './component/header.module'
import notfound from './component/notfound.module'
import filter from './component/filter.module'
import ui from './component/ui.module'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'ka',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...notfound.en,
                    ...filter.en,
                    ...ui.en,
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...notfound.ka,
                    ...filter.ka,
                    ...ui.ka
                }
            }
        }
    })

export default i18n