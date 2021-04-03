package com.gym.management.service.exception;

/**
 * @Author: Cloud Yang
 * @CreateTime: 4/3/2021
 **/
public class CardExistException extends RuntimeException {

    private String message;

    public CardExistException() {
        super();
        this.message = "此卡已过期或已使用过!";
    }
}
