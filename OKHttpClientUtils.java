package com.fuu.eim.fin.tms.wwwform;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.guazi.sp.common.filter.ValueDesensitizeFilter;
import com.guazi.sp.common.remote.http.OKHttpsClientUtils;
import com.guazi.sp.common.remote.model.HttpResponse;
import com.guazi.sp.common.remote.model.HttpResponseStatusEnum;
import com.guazi.sp.common.util.HttpUtil;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.TimeUnit;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.Request.Builder;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OKHttpClientUtils {
    private static Logger remoteLogger = LoggerFactory.getLogger("remote.do");
    private static Logger errorLogger = LoggerFactory.getLogger("error.do");
    private static final OkHttpClient httpClient = new OkHttpClient();
    private static int DEFAULT_CONNECT_TIMEOUT = 3000;
    private static int DEFAULT_READ_TIMEOUT = 3000;
    public static final MediaType MEDIA_TYPE = MediaType.parse("application/json; charset=utf-8");

    public OKHttpClientUtils() {
    }

    public static String get(String url, Map<String, Object> map, String traceId) {
        return get(url, map, DEFAULT_CONNECT_TIMEOUT, DEFAULT_READ_TIMEOUT, traceId, false);
    }

    public static String getWithCheck(String url, Map<String, Object> map, String traceId) {
        return get(url, map, DEFAULT_CONNECT_TIMEOUT, DEFAULT_READ_TIMEOUT, traceId, true);
    }

    public static String get(String url, Map<String, Object> map, int connectTimeout, int readTimeout, String traceId) {
        return get(url, map, connectTimeout, readTimeout, traceId, false);
    }

    public static String get(String url, Map<String, Object> map, int connectTimeout, int readTimeout, String traceId, boolean flag) {
        long start = System.currentTimeMillis();
        String params = map2GetString(map);
        if (StringUtils.isNotBlank(params)) {
            if (!url.contains("?")) {
                url = url + "?" + params;
            } else {
                url = url + "&" + params;
            }
        }

        Builder builder = new Builder();
        if (StringUtils.isNotBlank(traceId)) {
            builder.addHeader("traceId", traceId);
        }

        Request request = builder.url(url).build();
        String result = null;

        try {
            OkHttpClient hc = null;
            if (HttpUtil.isHttps(url)) {
                hc = OKHttpsClientUtils.getHttpsClient();
            } else {
                hc = httpClient;
            }

            OkHttpClient th = hc.newBuilder().connectTimeout((long)connectTimeout, TimeUnit.MILLISECONDS).readTimeout((long)readTimeout, TimeUnit.MILLISECONDS).build();
            Response response = th.newCall(request).execute();
            if (response.isSuccessful()) {
                result = response.body().string();
            }
        } catch (Exception var15) {
            errorLogger.error("okhttp error", var15);
        }

        if (flag) {
            remoteLogger.info("####request:{},####response:{},####time:{}", new Object[]{ValueDesensitizeFilter.desensitization(url), ValueDesensitizeFilter.desensitization(result), System.currentTimeMillis() - start});
        } else {
            remoteLogger.info("####request:{},####response:{},####time:{}", new Object[]{url, result, System.currentTimeMillis() - start});
        }

        return result;
    }

    public static String map2GetString(Map<String, Object> map) {
        if (map != null && map.size() >= 1) {
            StringBuilder params = new StringBuilder();

            for(Iterator var3 = map.entrySet().iterator(); var3.hasNext(); params.append("&")) {
                Entry<String, Object> entry = (Entry)var3.next();
                params.append((String)entry.getKey()).append("=");
                if (entry.getValue() != null) {
                    params.append(entry.getValue());
                }
            }

            params.deleteCharAt(params.lastIndexOf("&"));
            return params.toString();
        } else {
            return "";
        }
    }

    public static String map2GetParam(Map<String, String> paramMap) {
        if (paramMap != null && paramMap.size() != 0) {
            StringBuilder params = new StringBuilder();

            for(Iterator var3 = paramMap.entrySet().iterator(); var3.hasNext(); params.append("&")) {
                Entry<String, String> entry = (Entry)var3.next();
                params.append((String)entry.getKey()).append("=");
                if (entry.getValue() != null) {
                    params.append((String)entry.getValue());
                }
            }

            params.deleteCharAt(params.lastIndexOf("&"));
            return params.toString();
        } else {
            return "";
        }
    }

    public static String postWithCheck(String url, Map<String, Object> map, String traceId) {
        return post(url, map, DEFAULT_CONNECT_TIMEOUT, DEFAULT_READ_TIMEOUT, traceId, true);
    }

    public static String postWithCheck(String url, Map<String, Object> map, int connectTimeout, int readTimeout, String traceId) {
        return post(url, map, connectTimeout, readTimeout, traceId, true);
    }

    public static String post(String url, Map<String, Object> map, int connectTimeout, int readTimeout, String traceId, boolean flag) {
        HttpResponse resp = postWithResponseStatus(url, map, connectTimeout, readTimeout, traceId, flag);
        return resp.getResult();
    }

    public static String postJsonWithCheck(String url, String jsonData, String traceId) {
        return postJson(url, jsonData, DEFAULT_CONNECT_TIMEOUT, DEFAULT_READ_TIMEOUT, traceId, true);
    }

    public static String post(String url, Map<String, Object> map, String traceId) {
        return post(url, map, DEFAULT_CONNECT_TIMEOUT, DEFAULT_READ_TIMEOUT, traceId);
    }

    public static String postJson(String url, String jsonData, String traceId) {
        return postJson(url, jsonData, DEFAULT_CONNECT_TIMEOUT, DEFAULT_READ_TIMEOUT, traceId, false);
    }

    public static String post(String url, Map<String, Object> map, int connectTimeout, int readTimeout, String traceId) {
        HttpResponse resp = postWithResponseStatus(url, map, connectTimeout, readTimeout, traceId, false);
        return resp.getResult();
    }

    public static HttpResponse postWithResponseStatus(String url, Map<String, Object> map, int connectTimeout, int readTimeout, String traceId, boolean flag) {
        HttpResponse result = new HttpResponse();
        long start = System.currentTimeMillis();
        String respBody = null;
        RequestBody formBody = null;
        okhttp3.FormBody.Builder builder = new okhttp3.FormBody.Builder();
        Entry hc;
        if (map != null && map.size() > 0) {
            Iterator var13 = map.entrySet().iterator();

            while(var13.hasNext()) {
                hc = (Entry)var13.next();
                builder.add((String)hc.getKey(), hc.getValue() == null ? "" : hc.getValue().toString());
            }
        }

        formBody = builder.build();

        try {
            hc = null;
            OkHttpClient hc;
            if (HttpUtil.isHttps(url)) {
                hc = OKHttpsClientUtils.getHttpsClient();
            } else {
                hc = httpClient;
            }

            OkHttpClient th = hc.newBuilder().connectTimeout((long)connectTimeout, TimeUnit.MILLISECONDS).readTimeout((long)readTimeout, TimeUnit.MILLISECONDS).build();
            Builder requestBuilder = new Builder();
            if (StringUtils.isNotBlank(traceId)) {
                requestBuilder.addHeader("traceId", traceId);
            }

            Request request = requestBuilder.url(url).post(formBody).build();
            Response response = th.newCall(request).execute();
            if (response.isSuccessful()) {
                respBody = response.body().string();
                result.setStatus(HttpResponseStatusEnum.SUCCESS.getCode());
                result.setResult(respBody);
            } else {
                result.setStatus(HttpResponseStatusEnum.FAILED.getCode());
            }
        } catch (Exception var17) {
            result.setStatus(HttpResponseStatusEnum.TIMEOUT.getCode());
            errorLogger.error("post error timeout", var17);
        }

        String logUrl = url + "?" + map2GetString(map);
        if (flag) {
            remoteLogger.info("####request:{},####response:{},####time:{}", new Object[]{ValueDesensitizeFilter.desensitization(logUrl), JSON.toJSONString(result, new ValueDesensitizeFilter(), new SerializerFeature[0]), System.currentTimeMillis() - start});
        } else {
            remoteLogger.info("####request:{},####response:{},####time:{}", new Object[]{logUrl, JSON.toJSONString(result), System.currentTimeMillis() - start});
        }

        return result;
    }

    public static HttpResponse postWithResponseStatus(String url, Map<String, Object> map, int connectTimeout, int readTimeout, String traceId) {
        return postWithResponseStatus(url, map, connectTimeout, readTimeout, traceId, false);
    }

    public static String postJson(String url, String jsonData, int connectTimeout, int readTimeout, String traceId, boolean flag) {
        long start = System.currentTimeMillis();
        String result = null;
        RequestBody requestBody = RequestBody.create(MEDIA_TYPE, jsonData);

        try {
            OkHttpClient hc = null;
            if (HttpUtil.isHttps(url)) {
                hc = OKHttpsClientUtils.getHttpsClient();
            } else {
                hc = httpClient;
            }

            OkHttpClient th = hc.newBuilder().connectTimeout((long)connectTimeout, TimeUnit.MILLISECONDS).readTimeout((long)readTimeout, TimeUnit.MILLISECONDS).build();
            Builder requestBuilder = new Builder();
            if (StringUtils.isNotBlank(traceId)) {
                requestBuilder.addHeader("traceId", traceId);
            }

            Request request = requestBuilder.url(url).post(requestBody).build();
            Response response = th.newCall(request).execute();
            if (response.isSuccessful()) {
                result = response.body().string();
            }
        } catch (Exception var15) {
            errorLogger.error("postJson error", var15);
        }

        String logUrl = url + "?" + jsonData;
        if (flag) {
            remoteLogger.info("####request:{},####response:{},####time:{}", new Object[]{logUrl, JSON.toJSONString(result, new ValueDesensitizeFilter(), new SerializerFeature[0]), System.currentTimeMillis() - start});
        } else {
            remoteLogger.info("####request:{},####response:{},####time:{}", new Object[]{logUrl, result, System.currentTimeMillis() - start});
        }

        return result;
    }
}
