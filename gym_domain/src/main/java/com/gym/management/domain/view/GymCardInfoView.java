package com.gym.management.domain.view;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * @Author: Cloud Yang
 * @CreateTime: 4/4/2021
 **/
@Data
public class GymCardInfoView {

    private Long id;

    private String name;

    private String phoneNum;

    @JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
    private Date membershipStart;

    @JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
    private Date membershipEnd;

    private Integer membership;

    private Integer cardRemainTime;

    private String createBy;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date createdTime;
}
