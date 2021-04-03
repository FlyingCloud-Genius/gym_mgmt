package com.gym.management.service.exception;

import lombok.Data;

/**
 * @Author: Cloud Yang
 * @CreateTime: 4/4/2021
 **/
@Data
public class CardInUseException extends  RuntimeException {

    private String message;

    public CardInUseException() {
        super();
        this.message = "次卡已在被使用中！！";
    }

}
