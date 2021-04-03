package com.gym.management.enums;

import lombok.Getter;

@Getter
public enum RegisterTypeEnum {

    NORMAL(1, "正常打卡"),
    CLASSES(2, "私教课打卡"),
    ;

    private Integer code;

    private String desc;

    RegisterTypeEnum(Integer code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public static RegisterTypeEnum getEnumByCode(int code) {
        RegisterTypeEnum[] enums = RegisterTypeEnum.values();
        for (RegisterTypeEnum enumtype : enums) {
            if (enumtype.getCode() == code) {
                return enumtype;
            }
        }
        throw new RuntimeException("RegisterTypeEnum Not Found!!!");
    }
}
