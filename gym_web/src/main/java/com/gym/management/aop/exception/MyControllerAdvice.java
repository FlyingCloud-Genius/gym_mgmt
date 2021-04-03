package com.gym.management.aop.exception;

import com.gym.management.constant.Constants;
import com.gym.management.service.exception.CardExistException;
import com.gym.management.service.exception.CardInUseException;
import com.gym.management.service.exception.CardNotExistException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * controller 增强器
 *
 * @author 杨文涛
 * @since 2017/7/17
 */
@Slf4j
@ControllerAdvice
public class MyControllerAdvice {

    /**
     * 应用到所有@RequestMapping注解方法，在其执行之前初始化数据绑定器
     *
     * @param binder
     */
    @InitBinder
    public void initBinder(WebDataBinder binder) {
    }

    /**
     * 把值绑定到Model中，使全局@RequestMapping可以获取到该值
     * @param model
     */
   /* @ModelAttribute
    public void addAttributes(Model model) {
        model.addAttribute("author", "Magical Sam");
    }*/

    /**
     * 全局异常捕捉处理
     *
     * @param ex
     * @return
     */
    @ResponseBody
    @ExceptionHandler(value = Exception.class)
    public Map globalErrorHandler(Exception ex) {
        log.error("GLOBAL! Something not catched wend wrong: \n {}", ExceptionUtils.getStackTrace(ex));
        Map map = new HashMap();
        map.put("code", Constants.ERROR_CODE);
        map.put("msg", "Uncaught error! Please contact the administrator!");
        return map;
    }

    /**
     * 登记异常处理
     *
     * @param ex
     * @return
     */
    @ResponseBody
    @ExceptionHandler(value = {CardNotExistException.class, CardInUseException.class, CardExistException.class})
    public Map cardErrorHandler(CardNotExistException ex) {
        log.error("GLOBAL! Something not catched wend wrong: \n {}", ExceptionUtils.getStackTrace(ex));
        Map map = new HashMap();
        map.put("code", Constants.ERROR_CODE);
        map.put("msg", ex.getMessage());
        return map;
    }
}
