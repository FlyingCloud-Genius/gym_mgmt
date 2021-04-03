package com.gym.management.domain.param;

import lombok.Data;

import java.util.Map;

@Data
public class GymUserParam {

    private String phoneNum;

    private String cardNum;

    private String name;

    private Map<String, String> params;
}
