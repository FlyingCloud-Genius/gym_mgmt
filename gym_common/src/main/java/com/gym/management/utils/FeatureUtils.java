package com.gym.management.utils;

/**
 * Created by lijiang5 on 2017/7/5.
 */
public class FeatureUtils {

    public static final double ERR_DISTANCE = -1D;


    /**
     * 计算两个特征的相似度
     *
     * @param featureArr1
     * @param featureArr2
     * @return
     */
    public static double calcFeatureDistance(float[] featureArr1, float[] featureArr2) {
        if(featureArr1 == null || featureArr1.length == 0 || featureArr2 == null || featureArr2.length == 0) {
            return ERR_DISTANCE;
        }

        double featureSum = 0F;

        for(int i = 0; i < featureArr1.length; i++) {
            double f1 = featureArr1[i];
            double f2 = featureArr2[i];
            double diff = f1 - f2;
            featureSum += Math.pow(diff, 2);
        }

        return Math.sqrt(featureSum);
    }

    /**
     * 计算距离相似度 ( 2-距离 )
     *
     * @param featureArr1
     * @param featureArr2
     * @return
     */
    public static double calcFeatureDistanceSimilarity(float[] featureArr1, float[] featureArr2) {
        double distance = calcFeatureDistance(featureArr1, featureArr2);
        return distance == ERR_DISTANCE ? ERR_DISTANCE : (2 - distance);
    }



}
