package com.gym.management.utils;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;

/**
 * 将流写入到response
 * @Author yushifang
 * @Date 2018/6/27 9:07
 */
public class ResponseUtils {

    private static final Logger logger = LoggerFactory.getLogger(ResponseUtils.class);

    /**
     *将流写入到Response
     * @param fileName
     * @param response
     * @param inputStream
     */
    public static void writeInputStream(String fileName, HttpServletResponse response, InputStream inputStream){
        Long statrTime = System.currentTimeMillis();
        OutputStream os = null;
        logger.debug("开始下载文件内容：" + statrTime);
        try {
            response.setHeader("Content-Disposition", "attachment;filename="+ URLEncoder.encode(fileName, "UTF-8"));
            response.setHeader("Connection", "close");
            response.setHeader("Content-Type", "application/octet-stream");
            os = response.getOutputStream();
            if (os != null) {
                //循环写入输出流
                byte[] b = new byte[2048];
                int length;
                while ((length = inputStream.read(b)) > 0) {
                    os.write(b, 0, length);
                }
                os.flush();
                os.close();
            }
        } catch (FileNotFoundException e) {
            logger.error("文件未找到：" + ExceptionUtils.getStackTrace(e));
            try {
                if (os != null) {
                    os.flush();
                    os.close();
                }
            } catch (IOException e1) {
                logger.error("关闭文件流失败：" + ExceptionUtils.getStackTrace(e1));
            }
        } catch (IOException e) {
            try {
                if (os != null) {
                    os.flush();
                    os.close();
                }
            } catch (IOException e1) {
                logger.error("关闭文件流失败：" + ExceptionUtils.getStackTrace(e1));
            }
            logger.error("IO异常：" + ExceptionUtils.getStackTrace(e));
        }
        Long endTime = System.currentTimeMillis();
        Long useTime = (endTime - statrTime);
        logger.info("ResponseUtils 将流写入到Response 成功. 耗时="+useTime);
    }

    /**
     *将流写入到Response
     * @param fileName
     * @param response
     */
    public static void writeInputStream(String fileName, HttpServletResponse response, String value){
        Long statrTime = System.currentTimeMillis();
        OutputStream os = null;
        logger.debug("开始下载文件内容：" + statrTime);
        try {
            response.setHeader("Content-Disposition", "attachment;filename="+ URLEncoder.encode(fileName, "UTF-8"));
            response.setHeader("Connection", "close");
            response.setHeader("Content-Type", "application/octet-stream");
            os = response.getOutputStream();
            if (os != null) {
                //循环写入输出流
                byte[] b = value.getBytes();
                os.write(b, 0, b.length);
                os.flush();
                os.close();
            }
        } catch (FileNotFoundException e) {
            logger.error("文件未找到：" + ExceptionUtils.getStackTrace(e));
            try {
                if (os != null) {
                    os.flush();
                    os.close();
                }
            } catch (IOException e1) {
                logger.error("关闭文件流失败：" + ExceptionUtils.getStackTrace(e1));
            }
        } catch (IOException e) {
            try {
                if (os != null) {
                    os.flush();
                    os.close();
                }
            } catch (IOException e1) {
                logger.error("关闭文件流失败：" + ExceptionUtils.getStackTrace(e1));
            }
            logger.error("IO异常：" + ExceptionUtils.getStackTrace(e));
        }
        Long endTime = System.currentTimeMillis();
        Long useTime = (endTime - statrTime);
        logger.info("ResponseUtils 将流写入到Response 成功. 耗时="+useTime);
    }


}
