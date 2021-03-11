package com.gym.management.utils;

import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import sun.misc.BASE64Decoder;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.imageio.stream.FileImageOutputStream;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.logging.Level;


public class Base64Utils {

    private static final Logger logger = LoggerFactory.getLogger(Base64Utils.class);



    /**
     * 在线图片转换成base64字符串
     * @param imgURL	图片线上路径
     * @return
     */
//    @JProfiler(jKey = UmpKeyConstants.COMMON_UTILS_KEY,jAppName = UmpKeyConstants.APP_NAME,
//            mState = {JProEnum.TP, JProEnum.Heartbeat, JProEnum.FunctionError})
    public static String getImage2Base64ByOnline(String imgURL) {
        byte[] temp = getImage2bytesByOnline(imgURL);
        if (temp != null) {
            return encodeByteArrayToBase64(temp);
        }
        return null;
    }
    /**
     * 将base64字符串转为btye[]
     * @param base64Str
     * @return
     */
    public static byte[] decodeBase2BtyeArray(String base64Str){
        try{
            BASE64Decoder decoder = new BASE64Decoder();
            return decoder.decodeBuffer(base64Str);
        }catch(Exception e){
            logger.error("解释btye数组失败");
        }
        return null;
    }

    public static String encodeByteArrayToBase64(byte[] bytes){
//        try{
//            BASE64Encoder encoder = new BASE64Encoder();
//            return encoder.encode(bytes);
//        }catch(Exception e){
//            logger.error("解释btye数组失败");
//        }
        try{
            Base64 base64 = new Base64();
            return  base64.encodeAsString(bytes);
        }catch(Exception e){
            logger.error("解释btye数组失败");
        }
        return null;
    }

    public static String convertInputStream2String(InputStream in) throws Exception {
        if (in == null) {
            return null;
        }
        byte[] bs = new byte[1024000];
        StringBuilder str = new StringBuilder();
        int length;
        while ((length = in.read(bs)) > 0) {
            str.append(new String(bs, 0, length));
        }
        return str.toString();
    }



    public static byte[] getImage2BytesByLocal(String imgFile) {
        if(StringUtils.isEmpty(imgFile)){
            return null;
        }
        // 将图片文件转化为字节数组字符串，并对其进行Base64编码处理
        InputStream in = null;
        byte[] data = null;
        // 读取图片字节数组
        try {
            in = new FileInputStream(imgFile);
            data = new byte[in.available()];
            in.read(data);
            in.close();
        } catch (Exception e) {
            logger.error("根据路径获取图片base64失败,文件:{}",imgFile);
            if(in != null){
                try {
                    in.close();
                }catch (Exception ex){
                    logger.error("关闭文件流失败,文件:{}",imgFile);
                }
            }
            return null;
        }finally {
            if(in != null){
                try {
                    in.close();
                }catch (Exception ex){
                    logger.error("finally关闭文件流失败,文件:{}",imgFile);
                }
            }
        }
        return data;
    }

    public static byte[] getImage2bytesByOnline(String imgURL) {
        if(StringUtils.isEmpty(imgURL)){
            return null;
        }
        ByteArrayOutputStream data = new ByteArrayOutputStream();
        InputStream is = null;
        try {
            // 创建URL
            URL url = new URL(imgURL);
            byte[] by = new byte[1024];
            // 创建链接
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(5000);
            is = conn.getInputStream();
            // 将内容读取内存中
            int len = -1;
            while ((len = is.read(by)) != -1) {
                data.write(by, 0, len);
            }
            // 关闭流
            is.close();
        } catch (IOException e) {
            logger.error("根据路径获取图片base64失败；文件地址:{}",imgURL);
            if(is != null){
                try {
                    is.close();
                }catch (Exception ex){
                    logger.error("关闭文件流失败；文件地址:{}",imgURL);
                }
            }
            return null;
        }finally {
            if(is != null){
                try {
                    is.close();
                }catch (Exception ex){
                    logger.error("finally关闭文件流失败；文件地址:{}",imgURL);
                }
            }
        }
        // 对字节数组Base64编码
        return data.toByteArray();
    }

    public static void main(String[] args) throws Exception{
//        byte[] temp = getImage2bytesByOnline("http://img30.360buyimg.com/test/jfs/t25/40/516924606/58290/bf9276f/5b74f63aNd8ea7887.jpg");
//        System.out.println(getImage2Base64ByOnline("http://img30.360buyimg.com/test/jfs/t25/40/516924606/58290/bf9276f/5b74f63aNd8ea7887.jpg"));
//        System.out.println(encodeByteArrayToBase64(temp));
//        System.out.println(encodeByteArrayToBase64(temp));
//        String imageStr = getImageBase64StrByLocal("D:\\face1.jpg");
//        String imageStr = getImageBase64StrByLocal("D:\\bank_card1.jpg");
//        FileOutputStream fos = new FileOutputStream("D:\\bank_card1.txt",true);
//        String colorprint = getImageBase64StrByLocal("D:\\2018-08-21 105946\\face_identity.jpg");
//        FileOutputStream colorprintfos = new FileOutputStream("D:\\2018-08-21 105946\\face_identity.txt",true);
//        String edited = getImageBase64StrByLocal("D:\\2018-08-21 105946\\idcard_back.jpg");
//        FileOutputStream editedfos = new FileOutputStream("D:\\2018-08-21 105946\\idcard_back.txt",true);
//        String Screenshot = getImageBase64StrByLocal("D:\\2018-08-21 105946\\idcard_front.jpg");
//        FileOutputStream Screenshotfos = new FileOutputStream("D:\\2018-08-21 105946\\idcard_front.txt",true);
//        fos.write(imageStr.getBytes("UTF-8"));
//        fos.close();
//        colorprintfos.write(colorprint.getBytes("UTF-8"));
//        colorprintfos.close();
//        editedfos.write(edited.getBytes("UTF-8"));
//        Screenshotfos.write(Screenshot.getBytes("UTF-8"));
//        editedfos.close();
//        Screenshotfos.close();
//        System.out.println(decodeBase2BtyeArray(encodeByteArrayToBase64(temp)));
//        String des = "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";
//        String token = "4R4ADlWI22Zw5L4WPIvmzFwTyhqtqfcs";
//        String s = decrypt(des,token);
//        String descryptContent = AESUtil.decrypt(des,token);

//        byte[] desByte = decodeBase2BtyeArray(des);
//        String s = new String(desByte);
//        JSONObject json = JSONObject.parseObject(descryptContent);
//        String p = json.getString("photo");
//        byte[] photo = decodeBase2BtyeArray(p);
//        byte[] photoBtye = decodeBase2BtyeArray(p);
//        String pStr = new String(photoBtye);
//        byte[] photoBtye1 = decodeBase2BtyeArray(pStr);
//        System.out.println(pStr);
//        byte2image(photoBtye1,"D:\\image.jpg");
//        GenerateImage(p);


//        System.out.println(descryptContent);

    }

    //byte数组到图片
    public static void byte2image(byte[] data, String path) {
        if (data.length < 3 || "".equals(path)) {
            return;
        }
        try( FileImageOutputStream imageOutput = new FileImageOutputStream(new File(path));){
            imageOutput.write(data, 0, data.length);
            System.out.println("Make Picture success,Please find image in " + path);
            logger.info("Make Picture success,Please find image in " + path);
        } catch (Exception e) {
            logger.error("Exception: " +e);
        }

    }

    /**
     * 生成加密秘钥
     *
     * @return
     */
    private static SecretKeySpec getSecretKey(final String password) {
        //返回生成指定算法密钥生成器的 KeyGenerator 对象
        KeyGenerator kg = null;
        try {
            kg = KeyGenerator.getInstance("AES");
            /**
             * SecureRandom 实现完全隨操作系统本身的内部状态，除非调用方在调用 getInstance 方法之后又调用了 setSeed 方法；
             * 该实现在 windows 上每次生成的 key 都相同，但是在 solaris 或部分 linux 系统上则不同。
             */
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            secureRandom.setSeed(password.getBytes());
            //AES 要求密钥长度为 128
            kg.init(256, secureRandom);
            //生成一个密钥
            SecretKey secretKey = kg.generateKey();
            // 转换为AES专用密钥
            return new SecretKeySpec(secretKey.getEncoded(), "AES");
        } catch (NoSuchAlgorithmException ex) {
            java.util.logging.Logger.getLogger(AESUtil.class.getName()).log(Level.SEVERE, null, ex);
        }

        return null;
    }

    public static final String decrypt(String cipherText,String secret) {
        Key secretKey = getSecretKey(secret);
        try {
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
            BASE64Decoder decoder = new BASE64Decoder();
            byte[] c = decoder.decodeBuffer(cipherText);
            byte[] result = cipher.doFinal(c);
            String plainText = new String(result, "UTF-8");
            return plainText;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }





}
