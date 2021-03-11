package com.gym.management.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by yangwentao on 2019/1/12.
 */
@Configuration
public class WebMvcConfigurer extends WebMvcConfigurerAdapter {


//    @Bean
//    public SsoBootInterceptor getSsoInterceptor() {
//        return new SsoBootInterceptor();
//    }
//
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//
//        InterceptorRegistration addInterceptor = registry.addInterceptor(getSsoInterceptor());
//        // 排除配置--对下面的不进行拦截
//        addInterceptor.excludePathPatterns("/static/fonts/*");
//        addInterceptor.excludePathPatterns("/start*//**");
//        // 拦截配置
//        //addInterceptor.addPathPatterns("/**");
//    }
}
