package com.gym.management.enums;

import lombok.Getter;

@Getter
public enum GymCardTypeEnum {

    TIME_CARD(1, "时长卡"),
    COUNT_CARD(2, "计次卡"),
    CLASSES(3, "私教课"),
    ;

    private Integer code;

    private String desc;

    GymCardTypeEnum(Integer code, String desc) {
        this.code = code;
        this.desc = desc;
    }


    public static GymCardTypeEnum getEnumByCode(int code) {
        GymCardTypeEnum[] enums = GymCardTypeEnum.values();
        for (GymCardTypeEnum enumtype : enums) {
            if (enumtype.getCode() == code) {
                return enumtype;
            }
        }
        throw new RuntimeException("GymCardTypeEnum Not Found!!!");
    }
}
