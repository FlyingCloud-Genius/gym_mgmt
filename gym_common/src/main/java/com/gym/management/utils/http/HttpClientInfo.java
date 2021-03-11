package com.gym.management.utils.http;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

/**
 * @author zhangzuizui
 */
@Setter
@Getter
@ToString
public class HttpClientInfo implements Serializable {
    /**
     * 请求链接
     */
    private String requestUrl;

    /**
     * 其他参数
     */
    private String token;

}
