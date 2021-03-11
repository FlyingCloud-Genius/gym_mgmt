package com.gym.management.utils;

/**
 * 国际化信息输出
 */

import java.text.MessageFormat;
import java.util.*;

public class StringManager {
    private final static String BASE_PACKAGE_NAME = "i18n/message";
    private static StringManager mgr = null;
    private static Hashtable<String, Locale> hashtable = null;
    private Hashtable<String, ResourceBundle> languageResourceBundle = new Hashtable<>();

    static {
        hashtable = new Hashtable<>();
        hashtable.put("zh_CN", Locale.CHINA);
        hashtable.put("en_US", Locale.US);
        hashtable.put("zh_HK", new Locale("zh", "HK"));
    }

    private StringManager(String basePackageName) {
        try {
            for (Map.Entry<String, Locale> entry : hashtable.entrySet()) {
                String key = entry.getKey();
                ResourceBundle bundle = ResourceBundle.getBundle(basePackageName, hashtable.get(key));
                languageResourceBundle.put(key, bundle);
            }
        } catch (MissingResourceException ex) {
            ClassLoader cl = Thread.currentThread().getContextClassLoader();
            if (cl != null) {
                try {
                    for (Map.Entry<String, Locale> entry : hashtable.entrySet()) {
                        String key = entry.getKey();
                        ResourceBundle bundle = ResourceBundle.getBundle(basePackageName, hashtable.get(key), cl);
                        languageResourceBundle.put(key, bundle);
                    }
                } catch (MissingResourceException ex2) {
                    throw new RuntimeException("load i18n properties failed " + ex2);
                }
            }
        }
    }

    public String getString(String key) {
        return getString("zh_HK", key);
    }

    public String getString(String language, String key) {
        if (key == null) {
            throw new IllegalArgumentException("key may not have a null value");
        }
        if (language == null || "".equals(language)) {
            language = "zh_HK";
        }
        String str = null;
        try {
            if (this.languageResourceBundle.get(language) != null) {
                str = this.languageResourceBundle.get(language).getString(key);
            }
        } catch (Exception mre) {
            str = null;
        }
        return str;
    }

    public String getString(String language, String key, Object... args) {
        String value = getString(language, key);
        if (value == null) {
            value = key;
        }
        MessageFormat mf = new MessageFormat(value);
        mf.setLocale(hashtable.get(language));
        return mf.format(args, new StringBuffer(), null).toString();
    }

    /**
     * 获取真正的短信内容，使用map中的值来替换content里的值
     *
     * @param language
     * @param key
     * @param map
     * @return
     */
    public String getSmsContent(String language, String key, Map<String, Object> map) {
        // 固定发送印尼语
        String smsContent = getString(language, key);
        if (map == null) {
            return smsContent;
        }
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            String replaceKey = entry.getKey();
            Object replaceValue = entry.getValue();
            smsContent = smsContent.replaceAll("\\{" + replaceKey + "\\}", replaceValue.toString());
        }
        return smsContent;
    }

    /**
     * 替换邮箱配置content里的值
     */
    public String getEmailContent(String template, Map<String, Object> map) {
        // 固定发送印尼语
        if (map == null) {
            return template;
        }
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            String replaceKey = entry.getKey();
            Object replaceValue = entry.getValue();
            template = template.replaceAll("\\{" + replaceKey + "\\}", replaceValue.toString());
        }
        return template;
    }

    public static final StringManager getInstance() {
        if (mgr == null) {
            synchronized (StringManager.class) {
                if (mgr == null) {
                    mgr = new StringManager(BASE_PACKAGE_NAME);
                }
            }
        }
        return mgr;
    }

    public static void main(String[] args) {
        Locale[] availableLocales = Locale.getAvailableLocales();
        for (Locale locale : availableLocales) {
            System.out.println(locale.getLanguage() + ", " + locale.getCountry());
        }
    }
}