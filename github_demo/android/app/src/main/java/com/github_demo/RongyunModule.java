package com.github_demo;

import android.app.Activity;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import io.rong.imlib.RongIMClient;

public class RongyunModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactContext ;

    public RongyunModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RongyunModule";
    }
    @ReactMethod
    public void initSocialSDK() {
        Log.e("", "33223523");
    }

    @ReactMethod
    private void initGame() {
        RongIMClient.init(reactContext);
    }


    @ReactMethod
    public void onPageStart(String str) {
//        android.util.Log.e("xxxxxx", "onPageStart=" + mPageName);
        Log.d("aaa",str);
        connect("rWQMsTJxcfZOGkyaprN7GsieqGQncB2HlfdfLW1kAfK+NXzoVfsbgE93qI98aYPhNnihnl4EBjg=");
    }

    private void connect(String token) {

//        if (reactContext.getApplicationInfo().packageName.equals(MainApplication.getCurProcessName(getApplicationContext()))) {

            RongIMClient.connect(token, new RongIMClient.ConnectCallback() {

                /**
                 * Token 错误。可以从下面两点检查 1.  Token 是否过期，如果过期您需要向 App Server 重新请求一个新的 Token
                 *                            2.  token 对应的 appKey 和工程里设置的 appKey 是否一致
                 */
                @Override
                public void onTokenIncorrect() {

                }

                /**
                 * 连接融云成功
                 * @param userid 当前 token 对应的用户 id
                 */
                @Override
                public void onSuccess(String userid) {
//                    startActivity(new Intent(LoginActivity.this, MainActivity.class));
//                    finish();
                }

                /**
                 * 连接融云失败
                 * @param errorCode 错误码，可到官网 查看错误码对应的注释
                 */
                @Override
                public void onError(RongIMClient.ErrorCode errorCode) {

                }
            });
//        }
    }
}

