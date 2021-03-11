package com.gym.management.enums;

/**
 * 子任务状态
 */
public enum SubTaskStatusEnum {

    INIT(0, "初始状态"),
    COLLECTING(3, "收集中"),
    FAIL(2, "收集失败"),
    COLLECTED(1, "数据收集完成");

    private int code;
    private String desc;

    private SubTaskStatusEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public static SubTaskStatusEnum getEnumByCode(int code) {
        SubTaskStatusEnum[] enums = SubTaskStatusEnum.values();
        for (SubTaskStatusEnum enumtype : enums) {
            if (enumtype.getCode() == code) {
                return enumtype;
            }
        }
        return null;
    }
}
