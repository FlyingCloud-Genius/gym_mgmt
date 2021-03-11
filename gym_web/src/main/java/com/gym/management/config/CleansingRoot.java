package com.gym.management.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * @program: thailand_wormhole
 * @description: 清洗管理员
 * @author: yufy
 * @create: 2019-11-07 10:10
 */

@Component
@ConfigurationProperties(prefix="cleansing")
public class CleansingRoot {
    private List<Long> root = new ArrayList<Long>();

    private List<Long> worker = new ArrayList<>();

    public List<Long> getRoot() {
        return root;
    }

    public void setRoot(List<Long> root) {
        this.root = root;
    }

    public List<Long> getWorker() {
        return worker;
    }

    public void setWorker(List<Long> worker) {
        this.worker = worker;
    }
}
