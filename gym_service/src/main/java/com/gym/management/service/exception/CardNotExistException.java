package com.gym.management.service.exception;

import lombok.Data;

/**
 * @Author: Cloud Yang
 * @CreateTime: 4/4/2021
 **/
@Data
public class CardNotExistException extends RuntimeException{

    private String message;

    public CardNotExistException() {
        super();
        this.message = "未查找到对应卡类型!";
    }
}
