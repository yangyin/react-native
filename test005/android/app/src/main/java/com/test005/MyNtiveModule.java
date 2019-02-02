package com.test005;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class MyNtiveModule extends ReactContextBaseJavaModule {

    private Context mContext;

    public MyNtiveModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        //一定有这个名字  在RN代码里面时需要这个名字来调用该类的方法
        return "MyNtiveModule";
    }
    //函数不能有返回值，因为被调用的原生代码时异步的，原生代码执行结束之后只能通过回调函数或者发送消息给RN那边
    public void rnCallNative(String msg) {
        Toast.makeText(mContext,msg,Toast.LENGTH_LONG).show();
    }
}
