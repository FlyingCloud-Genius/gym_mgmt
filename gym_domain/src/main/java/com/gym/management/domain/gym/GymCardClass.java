package com.gym.management.domain.gym;

import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * null
 * @TableName gym_card_class
 */
@Data
public class GymCardClass implements Serializable {
    /**
     * self-increment id
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private Long id;

    /**
     * card id
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private Long cardId;

    /**
     * class id
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private Long classId;

    /**
     * class total times
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private Integer totalCount;

    /**
     * class remain times
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private Integer remainCount;

    /**
     * price each class
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private BigDecimal pricePerClass;

    /**
     * 创建者
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private String createBy;

    /**
     * 创建时间
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private Date createdTime;

    /**
     * 更新者
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private String updateBy;

    /**
     * 更新时间
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private Date modifiedTime;

    /**
     * 有效性
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private Integer yn;

    /**
     * 备注信息
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private String remark;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table gym_card_class
     *
     * @mbg.generated 2021-03-21 23:38:04
     */
    private static final long serialVersionUID = 1L;
}