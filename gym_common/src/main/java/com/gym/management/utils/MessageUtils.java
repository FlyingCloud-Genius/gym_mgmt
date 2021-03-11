package com.gym.management.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.MessageSource;
import org.springframework.context.NoSuchMessageException;
import org.springframework.context.i18n.LocaleContextHolder;

/**
 * 获取i18n资源文件
 *
 * @author yfy
 */
public class MessageUtils {

    private static final Logger logger = LoggerFactory.getLogger(MessageUtils.class);
    /**
     * 根据消息键和参数 获取消息 委托给spring messageSource
     *
     * @param code 消息键
     * @param args 参数
     * @return 获取国际化翻译值
     */
    public static String message(String code, Object... args) {
        String message = null;
        try {
            MessageSource messageSource = SpringUtils.getBean(MessageSource.class);
            message = messageSource.getMessage(code, args, LocaleContextHolder.getLocale());
        } catch (BeansException e) {
            logger.error("==========:{}",e.getMessage());
        } catch (NoSuchMessageException e) {
            logger.error("==========:{}",e.getMessage());
        }
        return message == null ? code : message;
    }
}
