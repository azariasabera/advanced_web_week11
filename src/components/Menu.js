import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useTranslation } from 'react-i18next';


  function Menu() {
    const { t , i18n } = useTranslation();
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    }
    
    return (
      <div>
          <h1>Menu</h1>
          <Link to="/" key={'home'}>{t("HOME")}</Link>
          <Link to="/about" key={'about'}>{t("ABOUT")}</Link>    
      </div>
    )
  }

export default Menu