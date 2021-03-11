package com.gym.management.utils;

import org.apache.commons.codec.binary.Base64;
import org.springframework.util.StringUtils;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * @version V1.0
 * @desc AES 加密工具类
 */
public class AESUtil {

    /**
     * 实例化密钥
     */
    private static Key key;

    /**
     * 加密秘钥算法
     */
    private static final String KEY_ALGORITHM = "AES";

    /**
     * 秘钥
     */
    public static final String DEFAULT_KEY = "kyc654321";

    /**
     * AES加密通过SHA1PRNG算法
     */
    public static final String SHA1PRNG = "SHA1PRNG";

    /**
     * 密码器的默认加密算法
     */
    private static final String DEFAULT_CIPHER_ALGORITHM = "AES";

    /**
     * 字符编码类型
     */
    private static final String CHARSET = "utf-8";

    /**
     * 加密-解密算法 / 工作模式 / 填充方式
     */
    private static final String CIPHER_ALGORITHM = "AES/ECB/PKCS5Padding";

    /**
     * AES 加密操作
     *
     * @param content 待加密内容
     * @param password 加密密码
     * @return 返回Base64转码后的加密数据
     */
    public static String encrypt(String content, String password) {
        try {
            if(StringUtils.isEmpty(content)){
                return "";
            }
            // 创建密码器
            Cipher cipher = Cipher.getInstance(DEFAULT_CIPHER_ALGORITHM);
            if(content==null){
                return null;
            }
            byte[] byteContent = content.getBytes(CHARSET);

            // 初始化为加密模式的密码器
            cipher.init(Cipher.ENCRYPT_MODE, getSecretKey(password));

            byte[] result = cipher.doFinal(byteContent);
            //通过Base64转码返回
            return Base64.encodeBase64String(result);
        } catch (Exception ex) {
            Logger.getLogger(AESUtil.class.getName()).log(Level.SEVERE, null, ex);
        }
        return content;
    }

    /**
     * AES 加密操作,使用默认密钥
     * @param content
     * @return
     */
    public static String encrypt(String content){
        return encrypt(content,DEFAULT_KEY);
    }


    /**
     * 使用默认密钥解密
     * @param content
     * @return
     */
    public static String decrypt(String content) {
        return decrypt(content,DEFAULT_KEY);
    }
    /**
     * AES 解密操作
     *
     * @param content
     * @param password
     * @return
     */
    public static String decrypt(String content, String password) {
        try {
            //实例化
            Cipher cipher = Cipher.getInstance(DEFAULT_CIPHER_ALGORITHM);
            //使用密钥初始化，设置为解密模式
            cipher.init(Cipher.DECRYPT_MODE, getSecretKey(password));
            //执行操作
            byte[] result = cipher.doFinal(Base64.decodeBase64(content));
            return new String(result, CHARSET);
        } catch (Exception ex) {
            Logger.getLogger(AESUtil.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
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
            kg = KeyGenerator.getInstance(KEY_ALGORITHM);
            /**
             * SecureRandom 实现完全隨操作系统本身的内部状态，除非调用方在调用 getInstance 方法之后又调用了 setSeed 方法；
             * 该实现在 windows 上每次生成的 key 都相同，但是在 solaris 或部分 linux 系统上则不同。
             */
            SecureRandom secureRandom = SecureRandom.getInstance(SHA1PRNG);
            secureRandom.setSeed(password.getBytes());
            //AES 要求密钥长度为 128
            kg.init(128, secureRandom);
            //生成一个密钥
            SecretKey secretKey = kg.generateKey();
            // 转换为AES专用密钥
            return new SecretKeySpec(secretKey.getEncoded(), KEY_ALGORITHM);
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(AESUtil.class.getName()).log(Level.SEVERE, null, ex);
        }

        return null;
    }

    /**
     * 根据配置初始化秘钥
     * @param randomKey 秘钥
     */
    public static void initKey(String randomKey) throws Exception {
        KeyGenerator keyGenerator = KeyGenerator.getInstance(KEY_ALGORITHM);
        SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
        random.setSeed(randomKey.getBytes());
        keyGenerator.init(128, random);
        key = keyGenerator.generateKey();
    }
    /**
     * AES对称加密字符串，并通过兼容url get方式传输的 Base64转换为ASCII
     * @param str 加密字符串
     * @return encryptString
     */
    public static String getEncryptString(String str) {
        try {
            byte[] bytes = str.getBytes(CHARSET);
            Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, key);
            byte[] doFinal = cipher.doFinal(bytes);
            return Base64.encodeBase64URLSafeString(doFinal);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 对AES加密字符串进行解密
     * @param str 要解密的字符串
     * @return decryptString
     */
    public static String getDecryptString(String str) {
        try {
            byte[] bytes = Base64.decodeBase64(str);
            Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, key);
            byte[] doFinal = cipher.doFinal(bytes);
            return new String(doFinal, CHARSET);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) {
        String s = "494463045@qq.com";
        System.out.println("明文:" + s);
        String s1 = AESUtil.encrypt(s, DEFAULT_KEY);
        System.out.println("密文:" + s1);
        System.out.println("明文:"+AESUtil.decrypt(s1, DEFAULT_KEY));
        System.out.println("明文:"+AESUtil.decrypt("/a9e8bCMhOHThD3Eftra85boT+hFkRmp6LuisKX41oI=", DEFAULT_KEY));
    }

}

